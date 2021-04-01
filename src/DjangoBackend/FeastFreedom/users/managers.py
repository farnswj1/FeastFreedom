from django.db.models import Manager

class UserManager(Manager):
    def get_kitchen_users(self):
        return self.get_queryset().filter(is_staff=True)
    
    def get_regular_users(self):
        return self.get_queryset().filter(is_staff=False)