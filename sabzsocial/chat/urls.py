from django.urls import path
from .views import *

app_name = 'chat'

urlpatterns = [
    path('<str:username>/', chat_view, name='chat_view'),
]