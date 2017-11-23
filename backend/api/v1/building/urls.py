from rest_framework import routers

from .views import BuildingViewSet

router = routers.DefaultRouter()
router.register(r'', BuildingViewSet, base_name="buildings")

urlpatterns = []
urlpatterns += router.urls
