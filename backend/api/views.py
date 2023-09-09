from rest_framework import viewsets
from django.http import HttpResponse
from .models import Cart,  UAV,  User, Kdv, Otv, Category, CartMap #Media, 
from .serializers import CartSerializer,  UAVSerializer, UserSerializer, KDVSerializer, OTVSerializer, CategorySerializer, CartMapSerializer #MediaSerializer, 
from django.shortcuts import render

def list (request):
    
    return render (request, './rentalUAV_django/backend/uavhome/templates/category.html')



class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer



class UAVViewSet(viewsets.ModelViewSet):
    queryset = UAV.objects.all()
    serializer_class = UAVSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

"""class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
"""
class KDVViewSet(viewsets.ModelViewSet):
    queryset = Kdv.objects.all()
    serializer_class = KDVSerializer

class OTVViewSet(viewsets.ModelViewSet):
    queryset = Otv.objects.all()
    serializer_class = OTVSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CartMapViewSet(viewsets.ModelViewSet):
    queryset = CartMap.objects.all()
    serializer_class = CartMapSerializer



def api_home(request):
    return HttpResponse("Ana Sayfa")