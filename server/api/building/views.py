from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from core.models import UserProfile, Building, Apartment
from api.apartment.serializers import ApartmentSerializer
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


# TODO: these endpoints are not required
class BuildingApartmentViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing apartment details.
    """
    serializer_class = ApartmentSerializer
    # permission_classes = (IsAuthenticated, IsLandlordPermission)

    @property
    def get_building(self):
        """Return building instance"""
        return Building.objects.get(pk=self.kwargs.get('building_pk'))

    def get_queryset(self):
        """Returns all the apartments for the given building"""

        building_id = self.kwargs.get('building_pk')
        apartments = Apartment.objects.filter(building__id=building_id)
        return apartments

    def perform_create(self, serializer):
        """Create new aprtment for the given building"""
        serializer.save(building=self.get_building)

    @detail_route(methods=['post'])
    def set_status(self, request, pk=None, building_pk=None):
        """Sets apartment as vacant"""
        apartment = self.get_object()
        apartment.set_status()
        return Response({'status': 'Apartment status updated'})
