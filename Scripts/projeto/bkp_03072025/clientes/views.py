from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse

# Create your views here.

#from .models import Clientes

def helloWord(request):
	#return HttpResponse('Hello Word!')
	return render(request, 'clientes/helloWord.html')
