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
        related_name='%(class)ss_creators')
    updated_by = ForeignKey(
        User,
        blank=True,
        null=True,
        related_name='%(class)ss_updaters')

    class Meta:
        abstract = True
