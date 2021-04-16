import uuid
from django.utils.translation import gettext as _
from django.db.models.signals import post_save
from django.dispatch import receiver

from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import UserManager
from django.dispatch import receiver
from django.db.models.signals import pre_save, post_save
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class AbstructBaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))
    created_by = models.ForeignKey(
        "user.User",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="%(app_label)s_%(model_name)s_created",
    )

    updated_by = models.ForeignKey(
        "user.User",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="%(app_label)s_%(model_name)s_updated",
    )

    class Meta:
        abstract = True


class AbstructTimeStampModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))

    class Meta:
        abstract = True


class User(AbstractUser):

    class ROLE:
        ADMIN = 'a'
        MANAGER = 'm'
        USER = 'u'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = None
    email = models.EmailField(unique=True)
    ROLE_CHOICES = (
        (ROLE.ADMIN, 'ADMIN'),
        (ROLE.MANAGER, 'MANAGER'),
        (ROLE.USER, 'USER'),
    )
    role = models.CharField(max_length=3, choices=ROLE_CHOICES, default=ROLE.USER)
    language = models.CharField(null=True, blank=True, max_length=26)
    date_of_birth = models.DateField(null=True, blank=True)
    country = models.CharField(null=True, blank=True, max_length=52)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return "{0}".format(self.email)

    class Meta:
        db_table = 'users'


class UserForGetPassword(AbstructTimeStampModel):
    code = models.CharField(verbose_name="Code", null=True, max_length=10)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(self.code)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        from mail_templated import EmailMessage
        refresh = RefreshToken.for_user(instance)

        message = EmailMessage('email/welcome.html', 
        {
            'user': instance, 
            'token': str(refresh.access_token), 
            'url' : 'http://localhost:3000/activate-user-account/'
        }, '',to=[instance.email])
        message.send()