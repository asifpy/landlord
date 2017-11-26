from rest_framework import serializers

from core.models import Tenant
from api.v1.building.apartment.serializers import ApartmentSerializer


class TenantSerializer(serializers.ModelSerializer):
    apartment = ApartmentSerializer(read_only=True)

    class Meta:
        model = Tenant
        fields = ('id', 'name', 'email', 'mobile')
