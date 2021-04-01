from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView
)
from .serializers import KitchenSerializer
from .models import Kitchen


# Create your views here.
class KitchenListAPI(ListAPIView):
    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer


class KitchenCreateAPI(CreateAPIView):
    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer


class KitchenDetailAPI(RetrieveAPIView):
    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer


class KitchenUpdateAPI(UpdateAPIView):
    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer


class KitchenDeleteAPI(DestroyAPIView):
    queryset = Kitchen.objects.all()
    serializer_class = KitchenSerializer