from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import detail_route

from core.models import Apartment, Building
from api.v1.building.permissions import IsLandlordPermission
from .serializers import ApartmentSerializer


class ApartmentViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing apartment details.
    """
    serializer_class = ApartmentSerializer
    permission_classes = (IsAuthenticated, IsLandlordPermission)

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
        """Create new building with landlord"""
        serializer.save(building=self.get_building)

    @detail_route(methods=['post'])
    def set_status(self, request, pk=None, building_pk=None):
        """Sets apartment as vacant"""
        apartment = self.get_object()
        apartment.set_status()
        return Response({'status': 'Apartment status updated'})
