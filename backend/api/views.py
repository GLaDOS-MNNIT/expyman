# from django.shortcuts import render
# from django.http import JsonResponse
from django.contrib.auth import get_user_model

from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer

# from rest_framework.decorators import api_view
# from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework import status
# from rest_framework.decorators import api_view, permission_classes

User=get_user_model()

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer