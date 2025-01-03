# Generated by Django 3.0.5 on 2021-04-10 08:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
                ('type', models.CharField(max_length=26, null=True, verbose_name='Category Type')),
                ('name', models.CharField(max_length=52, unique=True, verbose_name='Name')),
                ('sort_name', models.CharField(max_length=52, null=True, unique=True, verbose_name='Sort Name')),
                ('description', models.TextField(verbose_name='Description')),
                ('sort_order', models.IntegerField()),
                ('is_active', models.BooleanField(default=False)),
                ('image', models.ImageField(blank=True, null=True, upload_to='category')),
                ('banner_image', models.ImageField(blank=True, null=True, upload_to='category')),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='category_category_created', to=settings.AUTH_USER_MODEL)),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='category_category_updated', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
