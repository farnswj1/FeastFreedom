from .models import Kitchen
from rest_framework.serializers import ModelSerializer, ListField, DictField

class KitchenSerializer(ModelSerializer):
    menu = ListField(child=DictField())
    
    class Meta:
        model = Kitchen
        fields = "__all__"