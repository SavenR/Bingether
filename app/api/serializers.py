from rest_framework import serializers
from app.models import personalBinge

# Personal Binges Serializer
class pbS(serializers.ModelSerializer):
    class Meta:
        model = personalBinge
        fields = ('user', 'showID', 'showName', 'showYear', 'showSummary', 'showImage', 'active')


