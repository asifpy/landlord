from rest_framework import routers

from .views import BuildingViewSet

router = routers.SimpleRouter()
router.register(r'', BuildingViewSet, base_name="building")

urlpatterns = []
urlpatterns += router.urls
