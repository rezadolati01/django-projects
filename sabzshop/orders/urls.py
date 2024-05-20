from django.urls import path
from . import views

app_name = 'orders'

urlpatterns = [
    path('verify-phone/', views.verify_phone, name='verify_phone'),
    path('verify-code/', views.verify_code, name='verify_code'),
    path('order-create/', views.order_create, name='order_create'),
    path('request/', views.send_request, name='request'),
    path('verify/', views.verify, name='verify'),
    path('orders-list/', views.orders_list, name='orders-list'),
    path('order-detail/<int:id>', views.order_detail, name='order-detail'),

]
