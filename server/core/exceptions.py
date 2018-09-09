from rest_framework.exceptions import APIException


class LandlordProfileNotExist(APIException):
    status_code = 404
    default_detail = "Landlord profile doesn't exist for the logged in user"
    default_code = "Landlord profile not available"
