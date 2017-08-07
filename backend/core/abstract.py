from django.db.models import (
    Model,
    DateTimeField,
    ForeignKey
)
from django.contrib.auth.models import User


class Auditable(Model):
    created = DateTimeField(auto_now_add=True)
    updated = DateTimeField(auto_now=True)
    created_by = ForeignKey(
        User,
        blank=True,
        null=True,
        related_name='created_%(class)s')
    updated_by = ForeignKey(
        User,
        blank=True,
        null=True,
        related_name='updated_%(class)s')

    class Meta:
        abstract = True
