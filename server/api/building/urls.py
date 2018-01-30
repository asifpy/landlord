from rest_framework import routers

from .views import BuildingViewSet, BuildingApartmentViewSet

router = routers.SimpleRouter()
router.register(r'', BuildingViewSet, base_name="building")
router.register(
    r'(?P<building_pk>\d+)/apartments',
    BuildingApartmentViewSet,
    base_name="building-apartment"
)

urlpatterns = []
urlpatterns += router.urls
