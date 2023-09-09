from rest_framework import serializers
from .models import Cart, UAV, User,  Kdv, Otv, Category, CartMap
#Media,


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

"""class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'"""


class KDVSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kdv
        fields = '__all__'
        db_table = 'api_kdv'  # Set the database table name explicitly
        auto_created = True

class OTVSerializer(serializers.ModelSerializer):
    class Meta:
        model = Otv
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        extra_kwargs = {
            'parentId': {'required': False}
        }

class CartMapSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartMap
        fields = '__all__'

class UAVSerializer(serializers.ModelSerializer):
    class Meta:
        model = UAV
        fields = '__all__'


