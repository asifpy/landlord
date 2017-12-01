from rest_framework import serializers

from core.models import Tenant
from api.v1.apartment.serializers import ApartmentSerializer


class TenantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tenant
        fields = ('id', 'name', 'is_active', 'email', 'mobile', 'apartment')
        read_only_fields = ('is_active',)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        enable_nested_apartment = self.context.get(
            'enable_nested_apartment',
            None
        )

        if enable_nested_apartment:
            self.fields['apartment'] = ApartmentSerializer(read_only=True)
