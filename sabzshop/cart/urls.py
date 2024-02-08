from django.urls import path
from . import views

app_name = 'cart'

urlpatterns = [
    path('add/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
    path('detail/', views.cart_detail, name='cart_detail'),
    path('update_quantity/', views.update_quantity, name='update_quantity'),
    path('remove_item/', views.remove_item, name='remove_item'),
]
