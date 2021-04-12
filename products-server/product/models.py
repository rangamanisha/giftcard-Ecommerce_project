import uuid
from django.db import models

from brand.models import Brand
from category.models import Category


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(verbose_name='Name', max_length=52, unique=True)
    description = models.TextField(verbose_name='Description',)
    sku = models.CharField(verbose_name="SKU", max_length=52)
    product_code = models.CharField(verbose_name="Product Code", max_length=52)
    image = models.ImageField(upload_to='product')

    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='products')
    category = models.ForeignKey(Category, on_delete=models.CASCADE,  related_name='products')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return '{}'.format(self.name)
