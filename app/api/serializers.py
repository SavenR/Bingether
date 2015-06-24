from rest_framework import serializers
from app.models import personalBinge
from app.models import Bingether

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
            'location',
            'notes')


