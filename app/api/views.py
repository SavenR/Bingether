from rest_framework import viewsets
from app.api.serializers import pbS
from app.models import personalBinge

class PBUserVS(viewsets.ModelViewSet):
    queryset = personalBinge.objects.all()
    serializer_class = pbS
    lookup_field = 'user'

class PBShowVS(viewsets.ModelViewSet):
    queryset = personalBinge.objects.all()
    serializer_class = pbS
    lookup_field = 'showID'