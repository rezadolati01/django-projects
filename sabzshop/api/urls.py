from django.urls import path
from . import views

app_name = 'api'

urlpatterns = [
    path('products/', views.ProductListAPIView.as_view(), name='products_list_api'),
    path('product/<pk>/', views.ProductDetailAPIView.as_view(), name='product_detail_api'),
    path('users/', views.UserListAPIView.as_view(), name='users_list_api'),
]