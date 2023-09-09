from django.shortcuts import render

def users(request):
    return render(request, 'users.html')

def categorys(request):
    return render(request, 'categories.html')

def uav(request):
    return render(request, 'uav.html')

def kdv(request):
    return render(request, 'kdv.html')

def otv(request):
    return render(request, 'otv.html')


# Arayüz için
def home(request):
    return render(request, 'index.html')

def detail(request):
    return render(request, 'detail.html')

def kiraladiklarim(request):
    return render(request, 'kiraladiklarim.html')


def list (request):
    
    return render (request, './rentalUAV_django/backend/uavhome/templates/category.html')