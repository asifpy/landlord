from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from core.models import Apartment, UserProfile
from api.v1.building.permissions import IsLandlordPermission
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
