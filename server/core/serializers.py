from rest_framework import serializers

from core.models import Building, Apartment, Tenant


class BaseBuildingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Building
        fields = ('id', 'name', 'number')


class BaseApartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Apartment
        fields = ('id', 'number', 'is_vacant')


class BaseTenantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tenant
        fields = ('id', 'name', 'is_active', 'email', 'mobile', 'created')
