from rest_framework import permissions


class IsLandlordPermission(permissions.BasePermission):
    """Check if the logged in user is a landlord"""
    message = 'Landlord does not exist for the logged-in user'

    def has_permission(self, request, view):
        return request.user.profile.landlord
