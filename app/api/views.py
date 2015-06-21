# from rest_framework import viewsets
from app.api.serializers import pbS
from app.models import personalBinge
from rest_framework import generics


class UsersPBs2 ( generics.ListAPIView ):
    serializer_class=pbS

    def get_queryset(self):
        cUser = self.request.user
        return personalBinge.objects.filter( user = cUser)


