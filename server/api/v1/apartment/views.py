from django.shortcuts import get_object_or_404
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import viewsets
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.decorators import list_route
from rest_framework.permissions import IsAuthenticated

from core.models import Apartment, UserProfile, Tenant
from api.v1.building.permissions import IsLandlordPermission
from api.v1.tenant.serializers import TenantSerializer
from .serializers import ApartmentSerializer


class ApartmentViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing apartment details.
    """
    serializer_class = ApartmentSerializer
    permission_classes = (IsAuthenticated, IsLandlordPermission)

    def get_queryset(self):
        """Returns all the apartments for logged in landlord"""

        user = self.request.user
        profile = get_object_or_404(UserProfile, user=user)
        landlord = profile.landlord
        return Apartment.objects.filter(building__owner=landlord)


class ApartmentTenantViewset(viewsets.ModelViewSet):
    """Viewset for viewing and editing tenant details"""

    serializer_class = TenantSerializer
    permission_classes = (IsAuthenticated, IsLandlordPermission)

    def get_serializer_context(self):
        return {
            'enable_nested_apartment': True,
            'request': self.request
        }

    @property
    def get_apartment(self):
        """Return apartment instance"""
        return Apartment.objects.get(pk=self.kwargs.get('apartment_pk'))

    def get_queryset(self):
        """Returns all the tenant history for the provided apartment"""

        apartment_id = self.kwargs.get('apartment_pk')
        tenants = Tenant.objects.filter(apartment__id=apartment_id)
        return tenants

    def perform_create(self, serializer):
        """Create new tenant for the given apartment"""

        apartment = self.get_apartment
        serializer.save(apartment=apartment)

        apartment.is_vacant = False
        apartment.save()

    @list_route(methods=['get'])
    def active(self, request, apartment_pk=None):
        """Returns the active tenant for the provided apartment"""

        try:
            tenant = self.get_queryset().get(is_active=True)
            serializer = self.get_serializer(tenant)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            raise APIException("No active tenant exists for the apartment")
