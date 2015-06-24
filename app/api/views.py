from rest_framework import viewsets
from app.api.serializers import pbS
from app.api.serializers import btS
from app.api.serializers import cmtsS
from app.models import personalBinge
from app.models import Bingether
from app.models import Comment
from rest_framework import generics

# PERSONAL BINGE LIST VIEWS
class PBViews(viewsets.ModelViewSet):
    queryset = personalBinge.objects.all()
    serializer_class = pbS
    lookup_field = 'id'

class UsersPBs2 ( generics.ListAPIView ):
    serializer_class=pbS

    def get_queryset(self):
        cUser = self.request.user
        return personalBinge.objects.filter( user = cUser)

# BINGETHER VIEWS

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

# COMMENT VIEWS
class commentsByPost( generics.ListAPIView ):

    serializer_class=cmtsS

    def get_queryset(self):
        # Grab Bingether ID from URL
        BingetherID = self.kwargs['Bingether']
        return Comment.objects.filter( BID = BingetherID )

class commentsByUser( generics.ListAPIView ):

    serializer_class=cmtsS

    def get_queryset(self):
        # Identify current user
        currentUser = self.request.user
        return Comment.objects.filter( cID = currentUser )

class comViews(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = cmtsS
    lookup_field = 'id'
