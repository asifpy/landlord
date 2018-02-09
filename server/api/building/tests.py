from django.urls import reverse
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework_jwt import utils

from core.models import UserProfile, Building, Landlord
from api.profile.serializers import LandlordSerializer
from api.building.serializers import BuildingSerializer


class BuildingTest(APITestCase):

    LIST_ROUTE = 'v1:building-list'
    DETAIL_ROUTE = 'v1:building-detail'

    def setUp(self):
        """Building setup"""
        self.user = User.objects.create_user(
            'john',
            'john@me.org',
            'john'
        )
        landlord = Landlord.objects.create(
            name="John",
            email='john@me.org',
            mobile='+456452984'
        )

        UserProfile.objects.create(user=self.user, landlord=landlord)

        self.building_data = {
            'name': 'Building-1',
            'number': '782-31',
            'owner': LandlordSerializer(landlord).data
        }

        payload = utils.jwt_payload_handler(self.user)
        self.token = utils.jwt_encode_handler(payload)
        self.auth = 'JWT {}'.format(self.token)

    def create_building(self):
        """Creates new bulidng instance"""
        response = self.client.post(
            reverse(self.LIST_ROUTE),
            self.building_data,
            HTTP_AUTHORIZATION=self.auth
        )
        return response

    def test_create_valid_building(self):
        """Check if building gets created for valid data"""
        response = self.create_building()
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Building.objects.count(), 1)
        self.assertEqual(Building.objects.get().name, 'Building-1')

    def test_create_invalid_building(self):
        """Check if building gets created for invalid data"""

        response = self.client.post(
            reverse(self.LIST_ROUTE),
            {},
            HTTP_AUTHORIZATION=self.auth
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_get_buildings(self):
        """Checks buildings for the authenticated user"""

        self.create_building()

        response = self.client.get(
            reverse(self.LIST_ROUTE),
            HTTP_AUTHORIZATION=self.auth
        )

        buildings = Building.objects.all()
        serializer = BuildingSerializer(buildings, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_building_exists(self):
        """Test building exist for provided id"""
        building = self.create_building()

        response = self.client.get(
            reverse(self.DETAIL_ROUTE, kwargs={'pk': building.data['id']}),
            HTTP_AUTHORIZATION=self.auth
        )
        _building = Building.objects.get(pk=building.data['id'])
        serializer = BuildingSerializer(
            _building,
            context={'enable_apartments': True}
        )
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(_building.name, building.data['name'])

    def test_building_doesnot_exist(self):
        """Test building doesnot exist for the provided id"""
        response = self.client.get(
            reverse(self.DETAIL_ROUTE, kwargs={'pk': 44}),
            HTTP_AUTHORIZATION=self.auth
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
