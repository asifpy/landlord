from django.db.models import (
    CASCADE,
    Model,
    OneToOneField,
    ForeignKey,
    CharField,
    TextField,
    BooleanField,
    DateField,
    EmailField
)
from django.contrib.auth.models import User

from core.abstract import Auditable


class Landlord(Auditable):
    """Landlord details, it may be company or person"""

    name = CharField(max_length=100)
    email = EmailField()
    mobile = CharField(max_length=20)

    def __str__(self):
        return self.name


class Building(Auditable):
    """Building details of landlord"""

    name = CharField(max_length=200)
    number = CharField(max_length=100)
    owner = ForeignKey(Landlord, related_name='buildings')

    def __str__(self):
        return self.name


class Apartment(Auditable):
    """Apartment/flat details"""

    number = CharField(max_length=100)
    building = ForeignKey(Building, related_name='apartments')
    is_vacant = BooleanField(default=True)

    def __str__(self):
        return self.number


class Tenant(Auditable):
    """Tenant details"""

    name = CharField(max_length=100)
    email = EmailField()
    mobile = CharField(max_length=20)
    is_active = BooleanField(default=True)

    def __str__(self):
        return self.name


class UserProfile(Model):

    user = OneToOneField(User, on_delete=CASCADE, related_name='profile')
    tenant = OneToOneField(
        Tenant,
        on_delete=CASCADE,
        related_name='profile',
        blank=True,
        null=True
    )
    landlord = OneToOneField(
        Landlord,
        on_delete=CASCADE,
        related_name='profile',
        blank=True,
        null=True
    )


class Contract(Auditable):

    apartment = ForeignKey(Apartment, related_name='apartment_contracts')
    tenant = ForeignKey(Apartment, related_name='tenant_contracts')
    start_date = DateField()
    end_date = DateField()
    remarks = TextField()
    rent_collection = CharField(
        max_length=100,
        choices=[
            ('month', 'Every Month'),
            ('2months', 'Every Two Months'),
            ('3months', 'Every Three Months'),
            ('6months', 'Every Six Months')
        ]
    )
    is_valid = BooleanField(default=True)

    class Meta:
        unique_together = ('apartment', 'tenant')


class Payment(Auditable):
    pass
