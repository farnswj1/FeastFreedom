# Generated by Django 3.0.5 on 2021-04-01 02:50

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kitchens', '0005_auto_20210331_2152'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kitchen',
            name='name',
            field=models.CharField(max_length=50, validators=[django.core.validators.MinLengthValidator(limit_value=2, message='Security question must be at least 2 characters long.'), django.core.validators.MaxLengthValidator(limit_value=50, message='Security question must be at most 50 characters long.'), django.core.validators.RegexValidator(message='Please insert a valid security question.', regex="^[A-Za-z0-9: ,'&@-]{2,50}$"), django.core.validators.ProhibitNullCharactersValidator()]),
        ),
    ]