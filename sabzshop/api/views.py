from shop.models import Product
from .serializers import ProductSerializer, ShopUserSerializer
from rest_framework import generics
from rest_framework import views
from account.models import ShopUser
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.authentication import BasicAuthentication
class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class UserListAPIView(views.APIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAdminUser]
    def get(self, request, *args, **kwargs):
        users = ShopUser.objects.all()
        serializer = ShopUserSerializer(users, many=True)
        return Response(serializer.data)
