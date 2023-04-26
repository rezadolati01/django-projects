from django.urls import path
from . import views
from .feeds import LatestVideoFeed
app_name='video'

urlpatterns=[
    path('',views.index,name='index'),
    path('video-list',views.video_list,name='video_list'),
    path('search',views.video_search,name='video_search'),
    path('tag/<slug:tag_slug>/',views.video_list,name='video_list_by_tag'),
    # path('video-list',views.VideoListView.as_view(),name='video_list'),
    path('video-detail/<slug:slug>/<int:pk>',views.video_detail,name='video_detail'),
    path('send-mail/',views.email_to_admin,name='email_to_admin'),
    path('feed/',LatestVideoFeed(),name='video_feed'),
    path('panel/mydownload',views.my_download,name='my_download'),
    path('panel/my-upload/',views.my_upload,name='my_upload'),
    path('panel/profile',views.profile,name='profile'),
    path('panel/register-teacher/',views.register_teacher,name='register_teacher'),
    path('panel/upload-vedio/',views.upload_vedio,name='upload_vedio'),
    # login & register:
    path('Login/', views.login_or_register, name='login_register'),
    path('confirm-register/', views.Confirm_Register, name='confirm_register'),
    # for when order created and dont need for create new order
    # reset password
    path('reset-pssword/', views.ResetPassword_Send, name="resetpassword_send"),
    path('resetpassword/', views.ResetPassword_Check, name="resetpassword_check"),
    path('confirm-ressetpassword/', views.Confirm_RessetPassword, name="confirm_resetpassword"),
    # AJAX
    path('video-like/',views.video_like,name='video_like')
]