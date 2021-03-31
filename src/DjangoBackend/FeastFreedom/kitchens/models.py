from djongo import models
from django.core.validators import (
    MinLengthValidator,
    MaxLengthValidator,
    RegexValidator,
    ProhibitNullCharactersValidator,
    MinValueValidator,
    MaxValueValidator
)
from multiselectfield import MultiSelectField
from django.conf import settings
from datetime  import time

DAYS = (
    ("Monday", "Monday"),
    ("Tuesday", "Tuesday"),
    ("Wednesday", "Wednesday"),
    ("Thursday", "Thursday"),
    ("Friday", "Friday"),
    ("Saturday", "Saturday"),
    ("Sunday", "Sunday")
)

# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(
        null=False,
        max_length=50,
        validators=[
            MinLengthValidator(
                limit_value=3, 
                message="Name must be at least 3 characters long."
            ),
            MaxLengthValidator(
                limit_value=50,
                message="Name must be at most 50 characters long."
            ),
            RegexValidator(
                regex="^[A-Za-z0-9 //,'-]{3,50}$",
                message="Please insert a valid name."
            ),
            ProhibitNullCharactersValidator()
        ]
    )
    vegan = models.BooleanField(null=False, default=False)
    price = models.DecimalField(
        max_digits=9, 
        decimal_places=2, 
        null=False, 
        default=0,
        validators=[
            MinValueValidator(
                limit_value=0, 
                message="Please insert a non-negative number."
            ),
            MaxValueValidator(
                limit_value=1_000_000, 
                message="Price must not exceed $1 million."
            )
        ]
    )

    class Meta:
        abstract = True


class Kitchen(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(
        null=False,
        max_length=2,
        validators=[
            MinLengthValidator(
                limit_value=2, 
                message="Security question must be at least 2 characters long."
            ),
            MaxLengthValidator(
                limit_value=50,
                message="Security question must be at most 50 characters long."
            ),
            RegexValidator(
                regex="^[A-Za-z0-9: ,'&@-]{2,50}$",
                message="Please insert a valid security question."
            ),
            ProhibitNullCharactersValidator()
        ]
    )
    workdays = MultiSelectField(choices=DAYS, max_choices=7)
    start_time = models.TimeField(null=False, default=time(hour=8))
    end_time = models.TimeField(null=False, default=time(hour=16))
    menu = models.ArrayField(model_container=MenuItem)