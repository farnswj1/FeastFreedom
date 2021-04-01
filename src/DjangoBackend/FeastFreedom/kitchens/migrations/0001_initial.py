# Generated by Django 3.0.5 on 2021-03-31 20:07

import datetime
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import djongo.models.fields
import kitchens.models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Kitchen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=2, validators=[django.core.validators.MinLengthValidator(limit_value=2, message='Security question must be at least 2 characters long.'), django.core.validators.MaxLengthValidator(limit_value=50, message='Security question must be at most 50 characters long.'), django.core.validators.RegexValidator(message='Please insert a valid security question.', regex="^[A-Za-z0-9: ,'&@-]{2,50}$"), django.core.validators.ProhibitNullCharactersValidator()])),
                ('workdays', multiselectfield.db.fields.MultiSelectField(choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], max_length=56)),
                ('time_in', models.TimeField(default=datetime.time(8, 0))),
                ('time_out', models.TimeField(default=datetime.time(16, 0))),
                ('menu', djongo.models.fields.ArrayField(model_container=kitchens.models.MenuItem)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
