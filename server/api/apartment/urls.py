from rest_framework import routers

from .views import ApartmentViewSet

router = routers.DefaultRouter()
router.register(r'', ApartmentViewSet, base_name="apartment")
# router.register(
#     r'(?P<apartment_pk>\d+)/tenants',
#     ApartmentTenantViewset,
#     base_name="apartment-tenant"
# )

urlpatterns = []
urlpatterns += router.urls
