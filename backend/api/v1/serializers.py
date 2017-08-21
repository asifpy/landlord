from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import serializers


from core.models import (
    Landlord,
    UserProfile,
    Tenant,
    Building
)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')
        extra_kwargs = {'password': {'write_only': True}}


class TenantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tenant
        fields = ('name', 'mobile')


class LandlordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Landlord
        fields = ('name', 'mobile')


class ProfileLandlordSerializer(serializers.ModelSerializer):

    user = UserSerializer(required=True)
    landlord = LandlordSerializer(required=True)

    class Meta:
        model = UserProfile
        fields = ('user', 'landlord')

    def create(self, validated_data):
        # create user
        user_data = validated_data.pop('user')
        user_data['password'] = make_password(user_data['password'])
        user = User.objects.create(**user_data)

        landlord_data = validated_data.pop('landlord')
        landlord = Landlord.objects.create(**landlord_data)

        profile = UserProfile.objects.create(
            user=user,
            landlord=landlord
        )

        return profile


class BuildingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Building
        fields = ('name', 'number')
