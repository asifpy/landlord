from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from core.models import Apartment, UserProfile
from api.building.permissions import IsLandlordPermission
from .serializers import ApartmentSerializer


class ApartmentViewSet(viewsets.ModelViewSet):
    """
        retrieve:
        Return the apartment instace for the given apartment ID.

        list:
        Return a list of all the existing apartments for the authenticated
        user.

        create:
        Create a new apartment instance.

        delete:
        Remove an existing apartment instance.

        partial_update:
        Update one or more fields on an existing apartment instance.

        update:
        Update a apartment instance.
    """
    serializer_class = ApartmentSerializer
    permission_classes = (IsAuthenticated, IsLandlordPermission)

    def get_queryset(self):
        """Returns all the apartments for logged in landlord"""
        user = self.request.user
        profile = get_object_or_404(UserProfile, user=user)
        landlord = profile.landlord
        return Apartment.objects.filter(
            building__owner=landlord
        ).select_related('building')

    def retrieve(self, request, pk=None):
        """Return the apartment instace for the given apartment ID."""

        # override the detail route to attach related tenants
        apartment = get_object_or_404(self.get_queryset(), pk=pk)
        serializer = ApartmentSerializer(
            apartment,
            context={'enable_tenants': True}
        )
        return Response(serializer.data)
