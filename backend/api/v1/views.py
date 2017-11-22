from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework import exceptions

from core.models import UserProfile, Building
from api.v1.serializers import (
    ProfileLandlordSerializer,
    BuildingSerializer
)


class LandlordProfileViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing landlord details.
    """
    queryset = UserProfile.objects.all()
    serializer_class = ProfileLandlordSerializer


class BuildingViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing building details.
    """
    queryset = Building.objects.all()
    serializer_class = BuildingSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        """Returns all the buildings for logged in landlord"""

        user = self.request.user
        profile = get_object_or_404(UserProfile, user=user)
        landlord = profile.landlord

        if not landlord:
            msg = "No landlord assigned for the user {}".format(user)
            raise exceptions.NotFound(detail=msg)

        return landlord.buildings.all()

    def perform_create(self, serializer):
        """Update the building owner as logged in landlord"""

        serializer.save(owner=self.request.user.profile.landlord)

    def perform_update(self, serializer):
        """Update the building owner as logged in landlord"""

        serializer.save(owner=self.request.user.profile.landlord)
