from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView
)
from .serializers import UserSerializer
from .models import User


# Create your views here.
class UserListAPI(ListAPIView):
    queryset = User.objects.get_regular_users()
    serializer_class = UserSerializer


class UserCreateAPI(CreateAPIView):
    queryset = User.objects.get_regular_users()
    serializer_class = UserSerializer


class UserDetailAPI(RetrieveAPIView):
    queryset = User.objects.get_regular_users()
    serializer_class = UserSerializer


class UserUpdateAPI(UpdateAPIView):
    queryset = User.objects.get_regular_users()
    serializer_class = UserSerializer


class UserDeleteAPI(DestroyAPIView):
    queryset = User.objects.get_regular_users()
    serializer_class = UserSerializer


class KitchenUserListAPI(ListAPIView):
    queryset = User.objects.get_kitchen_users()
    serializer_class = UserSerializer


class KitchenUserCreateAPI(CreateAPIView):
    queryset = User.objects.get_kitchen_users()
    serializer_class = UserSerializer


class KitchenUserDetailAPI(RetrieveAPIView):
    queryset = User.objects.get_kitchen_users()
    serializer_class = UserSerializer


class KitchenUserUpdateAPI(UpdateAPIView):
    queryset = User.objects.get_kitchen_users()
    serializer_class = UserSerializer


class KitchenUserDeleteAPI(DestroyAPIView):
    queryset = User.objects.get_kitchen_users()
    serializer_class = UserSerializer