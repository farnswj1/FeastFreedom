# Generated by Django 3.0.5 on 2021-04-01 14:53

from django.db import migrations
import users.managers


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210331_2112'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('objects', users.managers.KitchenUserManager()),
            ],
        ),
    ]
