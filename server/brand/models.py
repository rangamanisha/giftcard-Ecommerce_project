import uuid
from django.db import models
from user.models import AbstructBaseModel, AbstructTimeStampModel


class Brand(AbstructBaseModel):
    name = models.CharField(verbose_name='Name', max_length=52, unique=True)
    description = models.TextField(verbose_name='Description')
    is_active = models.BooleanField(default=False)
    sort_order = models.IntegerField(default=1)

    def __str__(self):
        return '{}'.format(self.name)


class BrandImage(AbstructTimeStampModel):
    name = models.CharField(verbose_name='Name', max_length=52)
    image = models.ImageField(upload_to='brand')
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='images')
    is_default = models.BooleanField(default=False)

    def __str__(self):
        return '{}'.format(self.name)