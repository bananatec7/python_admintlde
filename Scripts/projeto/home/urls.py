from django.urls import path

from . import views

urlpatterns = [
    path('home/index/', views.index),
]