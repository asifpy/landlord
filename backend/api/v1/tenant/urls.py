from rest_framework import routers

from .views import ApartmentViewSet

router = routers.DefaultRouter()
router.register(r'', ApartmentViewSet, base_name="building-apartment-tenant")

urlpatterns = []
urlpatterns += router.urls
