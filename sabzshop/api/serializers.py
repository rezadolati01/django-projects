from rest_framework import serializers
from shop.models import Product, ProductFeature
from account.models import ShopUser

class ProductFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductFeature
        fields = ('name', 'value')


class ProductSerializer(serializers.ModelSerializer):
    features = ProductFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'new_price', 'features']


class ShopUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopUser
        fields = ('id', 'phone', 'first_name', 'last_name', 'address', 'is_staff', 'date_joined', 'is_active')