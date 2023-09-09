"""uavhome URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib import admin
from . import views
from rest_framework.routers import DefaultRouter
from api.views import  UserViewSet, CartViewSet, UAVViewSet,KDVViewSet, OTVViewSet, CartMapViewSet, CategoryViewSet,api_home # MediaViewSet,
from django.views.generic import TemplateView


router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'cart', CartViewSet)
router.register(r'uav', UAVViewSet)
router.register(r'user', UserViewSet)
#router.register(r'media', MediaViewSet)
router.register(r'kdv', KDVViewSet)
router.register(r'otv', OTVViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'cartmap', CartMapViewSet)

urlpatterns = [
    path('panel/admin/', admin.site.urls),
    path('panel', TemplateView.as_view(template_name='categories.html'), name='uavhome'),
    path('api/', include(router.urls)),  # ViewSet'leri dahil et
    path('panel/users/', views.users, name='users'),
    path('panel/uav/', views.uav, name='uav'),
    path('panel/categories/', views.categorys, name='categories'),
    path('panel/kdv/', views.kdv, name='kdv'),
    path('panel/otv/', views.otv, name='otv'),


    # Arayüz için
    path('', views.home, name='home'),

    path('detail', views.detail, name='detail'),
    path('kiraladiklarim', views.kiraladiklarim, name='kiraladiklarim'),
    
]


