from rest_framework import serializers
from jsframework.models import modelName


class exampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = modelName
        fields = ('name',)
        # read_only_fields = ('date_joined',)
        # write_only_fields = ('password',)