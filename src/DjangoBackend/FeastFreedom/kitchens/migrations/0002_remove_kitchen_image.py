# Generated by Django 3.0.5 on 2021-04-06 17:54
# Generated by Django 3.0.5 on 2021-04-06 21:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kitchens', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='kitchen',
            name='image',
        ),
    ]
