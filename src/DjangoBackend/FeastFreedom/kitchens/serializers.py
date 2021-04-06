from .models import Kitchen
from users.serializers import UserSerializer
from rest_framework.serializers import (
    ModelSerializer, 
    ListField, 
    DictField, 
    ImageField
)



class KitchenSerializer(ModelSerializer):
    image = ImageField(max_length=None, use_url=True)
    user = UserSerializer(many=False, read_only=True)
    workdays = ListField(child=DictField())
    menu = ListField(child=DictField())
    
    class Meta:
        model = Kitchen
        fields = "__all__"