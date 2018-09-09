from rest_framework import permissions

from core.exceptions import LandlordProfileNotExist


class IsLandlordPermission(permissions.BasePermission):
    """Check if the logged in user is a landlord"""
    message = 'Landlord does not exist for the logged-in user'

    def has_permission(self, request, view):

        profile_exists = hasattr(request.user, 'profile')

        if profile_exists and hasattr(request.user.profile, 'landlord'):
            return request.user.profile.landlord
        else:
            raise LandlordProfileNotExist
