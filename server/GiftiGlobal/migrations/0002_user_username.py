# Generated by Django 3.0.5 on 2021-04-06 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('giftiglobal', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
