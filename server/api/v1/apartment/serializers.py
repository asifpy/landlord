from rest_framework import serializers

from core.models import Apartment, Building
from api.v1.building.serializers import BuildingSerializer


class ApartmentSerializer(serializers.ModelSerializer):

    building = BuildingSerializer(read_only=True)
    building_id = serializers.PrimaryKeyRelatedField(
        queryset=Building.objects.all(),
        source='building',
        write_only=True
    )

    class Meta:
        model = Apartment
        fields = ('id', 'number', 'is_vacant', 'building', 'building_id')
