from rest_framework import viewsets

from core.models import UserProfile
from api.v1.serializers import ProfileLandlordSerializer


class LandlordProfileViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing landlord details.
    """
    queryset = UserProfile.objects.all()
    serializer_class = ProfileLandlordSerializer
