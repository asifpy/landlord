from django.dispatch import Signal
from django.dispatch import receiver

from core.abstract import Auditable

update_auditables = Signal(providing_args=['user'])


@receiver(update_auditables)
def update_auditables_handler(sender, instance, **kwargs):
    if not issubclass(sender, Auditable):
        return

    user = kwargs['user']
    instance.updated_by = user

    if instance.id is None:
        instance.created_by = user
