from rest_framework import serializers
from rest_framework.reverse import reverse

from core.models import Building, Apartment

# http://www.django-rest-framework.org/api-guide/relations/#custom-hyperlinked-fields


class ApartmentHyperlink(serializers.HyperlinkedRelatedField):
    """HyperlinkedRelatedField with additional URL kwargs"""

    # We define these as class attributes, so we don't need to pass
    # them as arguments.
    view_name = 'building-apartment-detail'

    def get_url(self, obj, view_name, request, format):
        url_kwargs = {
            'building_pk': obj.building.pk,
            'pk': obj.pk
        }
        return reverse(
            view_name,
            kwargs=url_kwargs,
            request=request,
            format=format
        )

    def get_object(self, view_name, view_args, view_kwargs):
        lookup_kwargs = {
            'building_pk': view_kwargs['building_pk'],
            'pk': view_kwargs['pk']
        }
        return self.get_queryset().get(**lookup_kwargs)


class BuildingSerializer(serializers.ModelSerializer):

    apartments = ApartmentHyperlink(
        many=True,
        read_only=True
    )

    class Meta:
        model = Building
        fields = ('id', 'name', 'number', 'apartments')
