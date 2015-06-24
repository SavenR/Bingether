from rest_framework import viewsets
from app.api.serializers import pbS
from app.api.serializers import btS
from app.models import personalBinge
from app.models import Bingether
from rest_framework import generics

class PBViews(viewsets.ModelViewSet):
    queryset = personalBinge.objects.all()
    serializer_class = pbS
    lookup_field = 'id'

class UsersPBs2 ( generics.ListAPIView ):
    serializer_class=pbS

    def get_queryset(self):
        cUser = self.request.user
        return personalBinge.objects.filter( user = cUser)

class allActiveBingethers ( generics.ListAPIView ):
    serializer_class=btS

    def get_queryset(self):
        return Bingether.objects.filter( active = True )


