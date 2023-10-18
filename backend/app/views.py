from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer

# Create your views here.   
class MyTokenObtainView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer