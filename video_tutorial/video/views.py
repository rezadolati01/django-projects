from django.shortcuts import render,get_object_or_404, HttpResponse ,redirect,HttpResponseRedirect
from django.core.mail import send_mail
from .models import VideoInformation
from django.core.paginator import PageNotAnInteger,EmptyPage,Paginator
from .forms import *
from taggit.models import Tag
from django.db.models import Count
from random import randint
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from common.decorators import ajax_required
#---------For Authenticated----------------
from django.contrib.auth import login, authenticate

#------------For Search--------------------
# from django.contrib.postgres.search import SearchVector,SearchQuery,SearchRank
from django.contrib.postgres.search import TrigramSimilarity
from django.db.models.functions import Greatest

#---------------MESSAGE----------------------

########################################################
########################################################

#-----------------HOME-----------------
def index(request):
    videos=VideoInformation.published.all()
    newest=videos.order_by('-publish')[0:4]
    popular=videos.order_by('-publish')[0:4]
    free=videos.filter(price=0)[0:4]
    context={
        'newest':newest,
        'popular':popular,
        'free':free
    }
    return render(request,'video/video_post/index.html',context)
#--------------------------------------

#--------------VIDEO LIST---------------
def video_list(request,tag_slug=None):
    object_list=VideoInformation.objects.all()
    tag=None
    if tag_slug:
        tag=get_object_or_404(Tag,slug=tag_slug)
        object_list=object_list.filter(tags__in=[tag])
    paginator=Paginator(object_list,3)
    page=request.GET.get('page')
    try:
        videos=paginator.page(page)
    except PageNotAnInteger:
        videos=paginator.page(1)
    except EmptyPage:
        if request.is_ajax():
            return  HttpResponse("")
        videos=paginator.page(paginator.num_pages)
    # if request.is_ajax():
    #     return render(request,'video/Ajax/video_list_ajax.html',{'videos':videos,'page':page,'tag':tag})
    return render(request,'video/video_post/video_list.html',{'videos':videos,'page':page,'tag':tag})

# class VideoListView (ListView):
#     # model = VideoInformation
#     queryset = VideoInformation.published.all()
#     context_object_name = 'videos'
#     paginate_by = 10
#     template_name = 'video/video_post/video_list.html'
#--------------------------------------

#-------------SEARCH-------------
def video_search(request):
    form=SearchForm()
    query=None
    results=[]
    if 'query' in request.GET:
        form=SearchForm(request.GET)
        if form.is_valid():
            query=form.cleaned_data['query']
            # search_vector=SearchVector('title','caption')
            # search_query=SearchQuery(query)
            # results=VideoInformation.published.annotate\
            #     (search=search_vector,rank=SearchRank(search_vector,search_query)).filter(search=query).order_by('-rank')
            results=VideoInformation.published.annotate(similarity=Greatest(
                TrigramSimilarity('title',query),
                TrigramSimilarity('caption',query),
            )).filter(similarity__gt=0.1).order_by('-similarity')
    paginator = Paginator(results, 3)
    page = request.GET.get('page')
    try:
        results=paginator.page(page)
    except PageNotAnInteger:
        results=paginator.page(1)
    except EmptyPage:
        results=paginator.page(paginator.num_pages)
    return render(request, 'video/video_post/video_list.html', {'form':form,'videos': results, 'page': page,})
#--------------------------------------

#-------------VIDEO DETAIL-------------
def video_detail(request,slug,pk):
    video=get_object_or_404(VideoInformation,
                             slug=slug,
                             status='published',
                             id=pk)
    comments=video.video_cm.filter(activ=True)
    new_comment=None
    if request.method=='POST':
        comment_form=CommentForm(data=request.POST)
        if comment_form.is_valid():
            new_comment=comment_form.save(commit=False)
            new_comment.video_information=video
            new_comment.save()
    else:
        comment_form=CommentForm()

    #List of similar videos
    video_tags_ids=video.tags.values_list('id',flat=True)
    similar_videos=VideoInformation.published.filter(tags__in=video_tags_ids).exclude(id=video.id)
    similar_videos=similar_videos.annotate(same_tags=Count('tags')).order_by('-same_tags','-publish')[:4]
    context={
        'video': video,
        'comments':comments,
        'comment_form':comment_form,
        'new_comment':new_comment,
        'similar_videos':similar_videos
    }
    return render(request,'video/video_post/video_detail.html',context)
#--------------------------------------

#---------SEND EMAIL FOR ADMIN---------
def email_to_admin(request):
    username=None
    logged_email=None
    if request.user.is_authenticated:
        username=request.user.username
        logged_email=request.user.email
    sent=False
    if request.method=='POST':
        form = EmailAdminForm(request.POST)
        if form.is_valid():
            cd=form.cleaned_data
            subject=f"message from {username}"
            user_mail=cd['email']
            msg=cd['message']
            name=cd['name']
            message=f"sender:\nusername:{username}\nlogged-email:{logged_email}\n" \
                    f"user_mail:{user_mail}\nname:{name}\n\nmessage:\n{msg}"
            send_mail(subject,message,'test@gmail.com',['test@gmail.com'])
            sent=True
    else:
        form =EmailAdminForm()
    return render(request,'video/video_post/contact_us.html',{'form':form,'sent':sent})

def my_download(request):
    return render(request,'video/panel/my-download.html')

def profile(request):
    return render(request,'video/panel/profile.html')

def my_upload(request):
    return render(request, 'video/panel/my-upload.html')

def register_teacher(request):
    return render(request, 'video/panel/register_teacher.html')

def upload_vedio(request):
    return render(request, 'video/panel/upload_vedio.html')

#___________________________________ Login and Register View ________________________________________
def login_or_register(request):
    context={}
    if request.user.is_authenticated: # if user logged in, redirect to index
        return redirect('video:index')
    if request.method=='POST':
        if 'phone_number' in request.POST:
            try:
                VideoInformation.objects.get(phone_number=request.POST['phone_number'])
                return render(request , 'video/forms/login/login.html',{'p_error':"این شماره تلفن قبلا ثبت شده است"})
            except:
                pass
            form = SignUpForm(request.POST)
            if form.is_valid():
                request.session['post'] = request.POST # send post data to next view. if phone_number confirmed, this information are saved
                token = randint(100000, 999999)# create 6 number code for send to user phone
                print('token : ',token)
                # try:
                #     # send code to user phone with kavenegar website api
                #     api = KavenegarAPI('test')
                #     params = {
                #         'receptor': request.POST['phone_number'] ,
                #         'token' : token ,
                #         'template': 'verify',
                #     }
                #     response = api.verify_lookup(params)
                request.session['token'] = token
                return redirect('video:confirm_register')
                # except APIException as e:
                #     print(e)
                #     return HttpResponse('خطایی در ارسال پیامک رخ داده است')
            else:
                # if an error accure, go login page
                form = SignUpForm(request.POST)
                context['form'] = form
                return render(request , 'video/forms/login/login.html',context)
        else:
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate( username = username , password= password )
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
                else:
                    y = "اکانت شما مسدود است"
                    context = {}
                    context['err'] = y
                    return render(request, 'video/forms/login/login.html', context)
            else:
                y = "نام کاربری یا رمز عبور شما نادرست است"
                context={}
                context['err'] = y
                return render(request , 'video/forms/login/login.html',context)
    else:
        return render(request , 'video/forms/login/login.html')


def Confirm_Register(request):

    """
    this view get registration form information and if phone number is confirmed, save in database
    """
    print(request.session['token'])
    if request.method == 'POST':

        if str(request.session['token']) == str(request.POST['token']):
            post_data = request.session['post']
            form = SignUpForm(post_data)
            if form.is_valid():
                form.save()
                username     = form.cleaned_data.get('username')
                raw_password = form.cleaned_data.get('password1')
                user         = authenticate(username=username, password=raw_password)
                account = VideoInformation.objects.create(teacher=user,phone_number=post_data['phone_number'])
                account.save()
                login(request, user)
                return redirect('video:index')
            else:
                return render(request, 'video/forms/login/ConfirmRegister.html',
                              {'form': form})
        else:
            return render(request , 'video/forms/login/ConfirmRegister.html' ,{'err':'کد تایید وارد شده اشتباه است'})

    else :
        phone_number = request.session['post']['phone_number']
        context = {'p':phone_number}
        return render(request , 'video/forms/login/ConfirmRegister.html' , context)


def ResetPassword_Send(request):
    """
    this view send a token to user for confirm phone number
    """
    if request.method == 'POST':
        number = request.POST['number']
        try:
            user = VideoInformation.objects.get(phone_number=str(number))
            token = randint(100000, 999999)# create 6 number code for send to user phone
            print("token : ",token)
            # try:
            #     #send code to user phone with kavenegar website api
            #     api = KavenegarAPI('test')
            #     params = {
            #             'receptor': number ,
            #             'token' : token ,
            #             'template': 'verify',
            #         }
            #     response = api.verify_lookup(params)
            #     request.session['token'] = token
            #     request.session['number']= number
            #     return redirect('resetpassword_check')
            # except APIException as e:
            #     print(str(e))
            #     return HttpResponse('خطایی در ارسال پیامک رخ داده است')
        except VideoInformation.DoesNotExist:
            return HttpResponse('کاربری با این شماره وجود ندارد')
    else:
        if request.user.is_authenticated :
            return redirect('video:index')
        else:
            return render(request , 'video/forms/login/resetpassword_send.html')


def ResetPassword_Check(request):
    """
    this view check sent token be equal with user entered token
    """
    try:
        number = request.session['number']
        token  = request.session['token']
        if request.method == 'POST':
            if str(token) == str(request.POST['token']):
                return redirect('video:confirm_register')
            else:
                return HttpResponse('کد تایید وارد شده اشتباه است')
        else:
            context = {'p':number}
            return render(request , 'video/forms/login/resetpassword_check.html' , context)
    except KeyError :
        # if request.session has not token and number(that means user called this view with typed url)
        return HttpResponse("این صفحه برای شما قابل دسترس نیست")


def Confirm_RessetPassword(request):
    """
    this view get new password and set password for user
    """
    try:
        token  = request.session['token']
        number = request.session['number']
        if request.method == 'POST':
            account  = VideoInformation.objects.get(phone_number=str(number))
            user     = User.objects.get(account=account)
            new_pass = request.POST['password1']
            user.set_password(new_pass)
            user.save()
            return redirect('video:login_register')
        else:
            return render(request,'video/forms/login/confirm_resetpassword.html')
    except KeyError :
        # if request.session has not token and number(that means user called this view with typed url)
        return HttpResponse("این صفحه برای شما قابل دسترس نیست")

# ______________________________   LIKE    _________________________
@ajax_required
@require_POST
@login_required
def video_like(request):
    print("yess")
    video_id=request.POST.get('id')
    action=request.POST.get('action')
    if video_id and action:
        try:

            video = VideoInformation.objects.get(id=video_id)
            if action=='like':
               video.users_like.add(request.user)
            else:
                video.users_like.remove(request.user)
            return JsonResponse({'status':'ok'})
        except:
            pass
    return JsonResponse({'status':'error'})