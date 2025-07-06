from django.urls import path

from . import views

urlpatterns = [
    path('helloWord/', views.helloWord),
]