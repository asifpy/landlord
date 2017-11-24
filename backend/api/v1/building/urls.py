from django.conf.urls import url, include
from rest_framework import routers

from .views import BuildingViewSet

router = routers.DefaultRouter()
router.register(r'', BuildingViewSet, base_name="building")

urlpatterns = []
urlpatterns += router.urls

urlpatterns += [
    url(
        r'^(?P<building_pk>\d+)/apartments/',
        include('api.v1.building.apartment.urls')
    ),
]
