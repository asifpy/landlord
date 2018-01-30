from rest_framework import serializers

from core.models import Building
from core.serializers import BaseApartmentSerializer


class BuildingSerializer(serializers.ModelSerializer):

    no_of_apartments = serializers.SerializerMethodField()

    class Meta:
        model = Building
        fields = ('id', 'name', 'number', 'no_of_apartments')

    def get_no_of_apartments(self, instance):
        """Returns the apartments count for building"""
        return instance.apartments.count()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        enable_apartments = self.context.get('enable_apartments', None)
        # show apartments only for `retrieve` action
        if enable_apartments:
            self.fields['apartments'] = BaseApartmentSerializer(
                read_only=True,
                many=True
            )


# http://www.django-rest-framework.org/api-guide/relations/#custom-hyperlinked-fields

# from rest_framework.reverse import reverse

# class ApartmentHyperlink(serializers.HyperlinkedRelatedField):
#     """HyperlinkedRelatedField with additional URL kwargs"""

#     # We define these as class attributes, so we don't need to pass
#     # them as arguments.
#     view_name = 'building-apartment-detail'

#     def get_url(self, obj, view_name, request, format):
#         url_kwargs = {
#             'building_pk': obj.building.pk,
#             'pk': obj.pk
#         }
#         return reverse(
#             view_name,
#             kwargs=url_kwargs,
#             request=request,
#             format=format
#         )

#     def get_object(self, view_name, view_args, view_kwargs):
#         lookup_kwargs = {
#             'building_pk': view_kwargs['building_pk'],
#             'pk': view_kwargs['pk']
#         }
#         return self.get_queryset().get(**lookup_kwargs)

