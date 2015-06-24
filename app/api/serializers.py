from rest_framework import serializers
from app.models import personalBinge
from app.models import Bingether
from app.models import Comment

# Personal Binges Serializer
class pbS(serializers.ModelSerializer):
    class Meta:
        model = personalBinge
        fields = ('user', 'showID', 'showName', 'showYear', 'showSummary', 'showImage', 'active')

# Bingethers Serializer
class btS(serializers.ModelSerializer):
    class Meta:
        model = Bingether
        fields = (
            'cID',
            'cUName',
            'showID',
            'showName',
            'showYear',
            'showSummary',
            'showImage',
            'active',
            'dateCreated',
            'city',
            'state',
            'notes')

# Comments Serializer
class cmtsS(serializers.ModelSerializer):
    class Meta:
        model = Comment

