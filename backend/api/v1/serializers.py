from rest_framework import serializers

from core.models import Landlord


class LandlordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Landlord
        #fields = ('id', 'account_name', 'users', 'created')