from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.decorators import list_route, detail_route
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from core.models import UserProfile, Tenant
from api.building.permissions import IsLandlordPermission
from .serializers import TenantSerializer


class TenantViewSet(viewsets.ModelViewSet):
    """
        retrieve:
        Return the tenant instace for the given tenant ID.

        list:
        Return a list of all the existing tenants for the authenticated
        user.

        create:
        Create a new tenant instance.

        delete:
        Remove an existing tenant instance.

        partial_update:
        Update one or more fields on an existing tenant instance.

        update:
        Update a tenant instance.
    """
    serializer_class = TenantSerializer
    permission_classes = (IsAuthenticated, IsLandlordPermission)

    def get_queryset(self):
        """Returns all the tenants for logged in landlord"""
        user = self.request.user
        profile = get_object_or_404(UserProfile, user=user)
        landlord = profile.landlord
        return Tenant.objects.filter(apartment__building__owner=landlord)

    def perform_create(self, serializer):
        """Create new tenant ans set apartment as occupied"""
        tenant = serializer.save()

        # set apartment as occupied
        apartment = tenant.apartment
        apartment.set_as_occupied()

    @list_route(methods=['get'])
    def active(self, request):
        """Returns all the active tenants"""

        active_tenants = self.get_queryset().filter(is_active=True)
        serializer = self.get_serializer(active_tenants, many=True)
        return Response(serializer.data)

    @detail_route(methods=['patch'])
    def set_inactive(self, request, pk=None):
        """Set tenant as in-active, update apartment as vacant"""

        tenant = self.get_object()
        tenant.is_active = False
        tenant.save()

        apartment = tenant.apartment
        apartment.set_as_vacant()
        Response({'detail': "Tenant has been updated as in-active"})
