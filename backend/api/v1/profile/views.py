from rest_framework import viewsets

from .serializers import ProfileLandlordSerializer
from core.models import UserProfile


class LandlordProfileViewSet(viewsets.ModelViewSet):
    """ViewSet for viewing and editing landlord details."""

    queryset = UserProfile.objects.all()
    serializer_class = ProfileLandlordSerializer
