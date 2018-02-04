from rest_framework import serializers

from core.models import Tenant, Apartment
from core.serializers import BaseApartmentSerializer, BaseBuildingSerializer


class TenantSerializer(serializers.ModelSerializer):

    building = serializers.SerializerMethodField()
    apartment = serializers.SerializerMethodField()
    apartment_id = serializers.PrimaryKeyRelatedField(
        queryset=Apartment.objects.all(),
        source='apartment',
        write_only=True
    )

    class Meta:
        model = Tenant
        fields = (
            'id',
            'name',
            'is_active',
            'email',
            'mobile',
            'apartment',
            'apartment_id',
            'building'
        )
        read_only_fields = ('is_active',)

    def get_apartment(self, instance):
        """Attach the related apartment to the tenant instance"""
        return BaseApartmentSerializer(instance.apartment).data

    def get_building(self, instance):
        """Attach the related building to the tenant instance"""
        return BaseBuildingSerializer(instance.apartment.building).data

    def validate(self, data):
        """Checks if the apartment occupied/vacant"""
        apartment = data['apartment']

        if not apartment.is_vacant:
            raise serializers.ValidationError(
                "Selected apartment is already occupied by other tenant"
            )
        return data
