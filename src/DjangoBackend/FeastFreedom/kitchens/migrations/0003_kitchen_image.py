# Generated by Django 3.0.5 on 2021-04-07 04:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kitchens', '0002_remove_kitchen_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='kitchen',
            name='image',
            field=models.TextField(blank=True, default=''),
        ),
    ]
