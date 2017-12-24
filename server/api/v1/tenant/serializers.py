from rest_framework import serializers

from core.models import Tenant
from core.serializers import BaseApartmentSerializer


class TenantSerializer(serializers.ModelSerializer):

    apartment = serializers.SerializerMethodField()

    class Meta:
        model = Tenant
        fields = ('id', 'name', 'is_active', 'email', 'mobile', 'apartment')
        read_only_fields = ('is_active',)

    def get_apartment(self, instance):
        """Attach the related apartment to the tenant instance"""
        return BaseApartmentSerializer(instance.apartment).data
