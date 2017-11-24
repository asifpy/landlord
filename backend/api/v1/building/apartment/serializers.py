from rest_framework import serializers

from core.models import Apartment
from api.v1.building.serializers import BuildingSerializer


class ApartmentSerializer(serializers.ModelSerializer):
    building = BuildingSerializer(read_only=True)

    class Meta:
        model = Apartment
        fields = ('id', 'number', 'is_vacant', 'building')
