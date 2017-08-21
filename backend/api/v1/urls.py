from rest_framework import routers

from api.v1.views import LandlordProfileViewSet, BuildingViewSet

router = routers.SimpleRouter()
router.register(r'landlordprofiles', LandlordProfileViewSet)
router.register(r'buildings', BuildingViewSet)

urlpatterns = []
urlpatterns += router.urls
