from rest_framework import viewsets
from app.api.serializers import pbS
from app.models import personalBinge
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


