from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
# from .models import NotificationToken
from users.forms import UserChangeForm, UserCreationForm

User = get_user_model()
# @admin.site.register(Token)
# @admin.register(User)
# class UserAdmin(auth_admin.UserAdmin):

#     add_form = UserCreationForm
#     fieldsets = (("User", {"fields": ("name",)}),) + auth_admin.UserAdmin.fieldsets
#     list_display = ["username", "name", "is_superuser"]
#     search_fields = ["name"]


# @admin.register(NotificationToken)
# class UserAdmin(admin.ModelAdmin):
#     list_display = ["user", ]
#     search_fields = ["user"]