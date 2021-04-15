from django.db import models
from user.models import AbstructBaseModel


class Category(AbstructBaseModel):
    type = models.CharField(max_length=26, verbose_name="Category Type", null=True)
    name = models.CharField(verbose_name='Name', max_length=52, unique=True)
    sort_name = models.CharField(verbose_name='Sort Name', max_length=52, unique=True, null=True)
    description = models.TextField(verbose_name='Description',)
    sort_order = models.IntegerField()
    is_active = models.BooleanField(default=False)
    image = models.ImageField(upload_to='category', null=True, blank=True)
    banner_image = models.ImageField(upload_to='category', null=True, blank=True)


    def __str__(self):
        return '{}'.format(self.name)
        
