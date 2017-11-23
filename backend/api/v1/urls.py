from django.conf.urls import url, include

urlpatterns = [
    url(r'^buildings/', include('api.v1.building.urls')),
    url(r'^landlordprofiles/', include('api.v1.profile.urls'))
]