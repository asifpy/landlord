from rest_framework import serializers

from core.models import Apartment, Building
from core.serializers import (
    BaseBuildingSerializer,
    BaseTenantSerializer
)


class ApartmentSerializer(serializers.ModelSerializer):

    building = serializers.SerializerMethodField()
    building_id = serializers.PrimaryKeyRelatedField(
        queryset=Building.objects.all(),
        source='building',
        write_only=True
    )

    class Meta:
        model = Apartment
        fields = (
            'id',
            'number',
            'is_vacant',
            'created',
            'building',
            'building_id'
        )

    def get_building(self, instance):
        """Attach the building instance to the apartment"""
        return BaseBuildingSerializer(instance.building).data

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        enable_tenants = self.context.get('enable_tenants', None)
        # show tenants only for `retrieve` action
        if enable_tenants:
            self.fields['tenants'] = BaseTenantSerializer(
                read_only=True,
                many=True
            )
