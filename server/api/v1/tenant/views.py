from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.decorators import list_route, detail_route
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from core.models import UserProfile, Tenant
from api.v1.building.permissions import IsLandlordPermission
from .serializers import TenantSerializer


class TenantViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing tenant details.
    """
    serializer_class = TenantSerializer
    #permission_classes = (IsAuthenticated, IsLandlordPermission)

    def get_queryset(self):
        """Returns all the tenants for logged in landlord"""
        return Tenant.objects.all()
        user = self.request.user
        profile = get_object_or_404(UserProfile, user=user)
        landlord = profile.landlord
        return Tenant.objects.filter(apartment__building__owner=landlord)

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
        apartment.is_vacant = True
        apartment.save()
        Response({'detail': "Tenant has been updated as in-active"})
