from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'api'


router = DefaultRouter()
router.register(r'products', views.ProductViewSet)

urlpatterns = [
    # path('products/', views.ProductListAPIView.as_view(), name='products_list_api'),
    # path('product/<pk>/', views.ProductDetailAPIView.as_view(), name='product_detail_api'),
    path('users/', views.UserListAPIView.as_view(), name='users_list_api'),
    path('register/', views.UserRegistrationAPIView.as_view(), name='register_api'),
    path('', include(router.urls)),
    path('orders/', views.OrderListAPIView.as_view(), name='orders_list_api'),
    path('orders/<int:pk>/', views.OrderDetailAPIView.as_view(), name='order_detail_api'),
]