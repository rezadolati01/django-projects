from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .forms import *
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
# Create your views here.


def log_out(request):
    logout(request)
    return HttpResponse("شما خارج شدید.")


def profile(request):
    return HttpResponse("شما وارد شدید.")

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.save()
            return render(request, 'registration/register_done.html', {'user': user})
    else:
        form = UserRegisterForm()
    return render(request, 'registration/register.html', {'form': form})


@login_required
def edit_user(request):
    if request.method == 'POST':
        user_form = UserEditForm(request.POST, instance=request.user, files=request.FILES)
        if user_form.is_valid():
            user_form.save()
    else:
        user_form = UserEditForm(instance=request.user)
    context ={
        'user_form': user_form
    }
    return redirect('social:profile')


def ticket(request):
    sent = False
    if request.method == "POST":
        form = TicketForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            message = f"{cd['name']}\n{cd['email']}\n{cd['phone']}\n\n{cd['message']}"
            send_mail(cd['subject'], message, 'pythonsabzlearn@gmail.com', ['rezadolati.py@gmail.com'], fail_silently=False)
            sent = True
    else:
        form = TicketForm()
    return render(request, "forms/ticket.html", {'form': form, 'sent': sent})