"""landlord URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

from rest_framework.documentation import include_docs_urls
from rest_framework_jwt.views import refresh_jwt_token, obtain_jwt_token

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    # accept header versioning
    url(r'^api/', include('api.urls')),
    url(r'^docs/', include_docs_urls(title='Landlord API', public=True))
]


urlpatterns += [
    url(r'^auth/', include('rest_auth.urls')),
    url(r'^auth/registration/', include('rest_auth.registration.urls')),
    url(r'^refresh_token/', refresh_jwt_token),
    url(r'^get_token/', obtain_jwt_token),
]
