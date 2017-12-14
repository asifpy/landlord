from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from core.models import UserProfile, Building, Apartment, Landlord
from api.v1.apartment.serializers import ApartmentSerializer
from .permissions import IsLandlordPermission
from .serializers import BuildingSerializer


class BuildingViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing building details.
    """
    serializer_class = BuildingSerializer
    queryset = Building.objects.all()
    # permission_classes = (IsAuthenticated, IsLandlordPermission)

    # def get_queryset(self):
    #     """Returns all the buildings for logged in landlord"""

    #     user = self.request.user
    #     profile = get_object_or_404(UserProfile, user=user)
    #     landlord = profile.landlord
    #     return landlord.buildings.all()

    def perform_create(self, serializer):
        """Create new building with landlord"""
        # serializer.save(owner=self.request.user.profile.landlord)
        landlord = Landlord.objects.get(name="SA")
        serializer.save(owner=landlord)


class BuildingApartmentViewSet(viewsets.ModelViewSet):
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
        """Create new aprtment for the given building"""
        serializer.save(building=self.get_building)

    @detail_route(methods=['post'])
    def set_status(self, request, pk=None, building_pk=None):
        """Sets apartment as vacant"""
        apartment = self.get_object()
        apartment.set_status()
        return Response({'status': 'Apartment status updated'})
