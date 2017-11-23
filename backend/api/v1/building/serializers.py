from rest_framework import serializers

from core.models import Building


class BuildingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Building
        fields = ('name', 'number')
