from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from rest_framework import serializers

from core.models import Landlord, UserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')
        extra_kwargs = {'password': {'write_only': True}}


class LandlordSerializer(serializers.ModelSerializer):
    buildings = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='building-detail'
    )

    class Meta:
        model = Landlord
        fields = ('name', 'mobile', 'buildings')


class ProfileLandlordSerializer(serializers.ModelSerializer):

    user = UserSerializer(required=True)
    landlord = LandlordSerializer(required=True)

    class Meta:
        model = UserProfile
        fields = ('user', 'landlord')

    def create(self, validated_data):
        """Creates user, landlord and profile"""

        # create user
        user_data = validated_data.pop('user')
        user_data['password'] = make_password(user_data['password'])
        user = User.objects.create(**user_data)

        # create landlord
        landlord_data = validated_data.pop('landlord')
        landlord = Landlord.objects.create(**landlord_data)

        # create profile for the landlord
        profile = UserProfile.objects.create(
            user=user,
            landlord=landlord
        )

        return profile
