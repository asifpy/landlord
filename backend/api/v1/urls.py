from rest_framework import routers

from api.v1.views import LandlordProfileViewSet

router = routers.SimpleRouter()
router.register(r'landlordprofiles', LandlordProfileViewSet)

urlpatterns = []
urlpatterns += router.urls
