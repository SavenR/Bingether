from rest_framework import viewsets
from jsframework.api.serializers import exampleSerializer
from jsframework.models import modelName

class ExampleViewSet(viewsets.ModelViewSet):
    queryset = modelName.objects.all()
    serializer_class = exampleSerializer
    lookup_field = 'name'