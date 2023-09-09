from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import api_home
from django.views.generic import TemplateView
from . import views

router = DefaultRouter()
router.register(r'cart', views.CartViewSet)
router.register(r'uav', views.UAVViewSet)
router.register(r'user', views.UserViewSet)
#router.register(r'media', views.MediaViewSet)
router.register(r'kdv', views.KDVViewSet)
router.register(r'otv', views.OTVViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'cartmap', views.CartMapViewSet)

urlpatterns = [
    path('', TemplateView.as_view(template_name='category.html'), name='uavhome'),   
    path('api/', include(router.urls)),  # ViewSet'leri dahil et
]

"""urlpatterns = [
    path('', views.api_home, name='uavhome'),  # Bu, ana sayfanın URL'sini belirler
    # Diğer URL yönlendirmeleri...
]"""
