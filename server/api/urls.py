from django.conf.urls import url, include

urlpatterns = [
    url(r'^buildings/', include('api.building.urls')),
    url(r'^apartments/', include('api.apartment.urls')),
    url(r'^tenants/', include('api.tenant.urls')),
    url(r'^landlordprofiles/', include('api.profile.urls'))
]
