from rest_framework import serializers

from core.models import Apartment, Building


class ApartmentSerializer(serializers.ModelSerializer):
    # method field instead of nested serializer to avoid circular imports
    building = serializers.SerializerMethodField()

    building_id = serializers.PrimaryKeyRelatedField(
        queryset=Building.objects.all(),
        source='building',
        write_only=True
    )

    class Meta:
        model = Apartment
        fields = ('id', 'number', 'is_vacant', 'building', 'building_id')

    def get_building(self, instance):
        # to avoid circular imports
        from api.v1.building.serializers import BuildingSerializer
        return BuildingSerializer(
            instance.building,
            context={'enable_nested_apartments': False}
        ).data
