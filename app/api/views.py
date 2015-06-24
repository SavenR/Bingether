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
        #Limits to the most recent 200 active Bingethers
        results = Bingether.objects.filter( active = True )
        rNumb = len(results)
        if rNumb > 200 :
            return results[rNumb-200:]

        return results

class usersActiveBingethers ( generics.ListAPIView ):
    serializer_class=btS

    def get_queryset(self):
        cUser = self.request.user
        return Bingether.objects.filter( cID = cUser ).filter( active = True )

class bingetherViews(viewsets.ModelViewSet):
    queryset = Bingether.objects.filter( active = True )
    serializer_class = btS
    lookup_field = 'id'
