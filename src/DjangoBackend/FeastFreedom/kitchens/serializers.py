from .models import Kitchen
from rest_framework import serializers


class KitchenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kitchen
        fields = "__all__"