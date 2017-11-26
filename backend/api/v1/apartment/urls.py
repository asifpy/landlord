from rest_framework import routers

from .views import ApartmentViewSet

router = routers.DefaultRouter()
router.register(r'', ApartmentViewSet, base_name="apartment")

urlpatterns = []
urlpatterns += router.urls

# urlpatterns += [
#     url(
#         r'^(?P<apartment_pk>\d+)/tenants/',
#         include('api.v1.building.apartment.tenant.urls')
#     ),
# ]
