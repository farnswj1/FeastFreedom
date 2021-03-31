from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)
from .serializers import UserSerializer
from .models import User

# Create your views here.
class UserListAPI(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailAPI(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserCreateAPI(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserUpdateAPI(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDeleteAPI(DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
