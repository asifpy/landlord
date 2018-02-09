from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from core.models import UserProfile
from .permissions import IsLandlordPermission
from .serializers import BuildingSerializer


class BuildingViewSet(viewsets.ModelViewSet):
    """
        retrieve:
        Return the building instace for the given building ID.

        list:
        Return a list of all the existing buildings for the authenticated user.

        create:
        Create a new building instance.

        delete:
        Remove an existing building instance.

        partial_update:
        Update one or more fields on an existing building instance.

        update:
        Update a building instance.
    """

    serializer_class = BuildingSerializer
    permission_classes = (IsAuthenticated, IsLandlordPermission)

    def get_queryset(self):
        """Returns all the buildings for logged in landlord"""

        user = self.request.user
        profile = get_object_or_404(UserProfile, user=user)
        landlord = profile.landlord
        return landlord.buildings.all()

    def retrieve(self, request, pk=None):
        """Return the building instace for the given building ID."""

        # Override detial route to attach related apartments
        building = get_object_or_404(self.get_queryset(), pk=pk)
        serializer = BuildingSerializer(
            building,
            context={'enable_apartments': True}
        )
        return Response(serializer.data)

    def perform_create(self, serializer):
        """Create new building with landlord"""
        serializer.save(owner=self.request.user.profile.landlord)

    def get_serializer_context(self):
        return {
            'enable_nested_apartments': True,
            'request': self.request
        }
