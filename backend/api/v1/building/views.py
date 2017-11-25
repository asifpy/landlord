from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from core.models import UserProfile
from .permissions import IsLandlordPermission
from .serializers import BuildingSerializer


class BuildingViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing building details.
    """
    serializer_class = BuildingSerializer
    permission_classes = (IsAuthenticated, IsLandlordPermission)

    def get_queryset(self):
        """Returns all the buildings for logged in landlord"""

        user = self.request.user
        profile = get_object_or_404(UserProfile, user=user)
        landlord = profile.landlord
        return landlord.buildings.all()

    def perform_create(self, serializer):
        """Create new building with landlord"""
        serializer.save(owner=self.request.user.profile.landlord)
