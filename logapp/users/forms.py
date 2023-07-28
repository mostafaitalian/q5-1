from django.contrib.auth import get_user_model, forms as user_forms
from django import forms
from django.forms import ModelForm,Form

from django.core.exceptions import ValidationError
# from django.utils.translation import ugettext_lazy as _
from django.utils.translation import gettext_lazy as _

# from .models import NotificationToken
User = get_user_model()
# class NotificationTokenForm(ModelForm):
    
#     class Meta:
#         model=NotificationToken
#         fields = '__all__'


class UserChangeForm(user_forms.UserChangeForm):

    class Meta(user_forms.UserChangeForm.Meta):
        model = User


class UserCreationForm(user_forms.UserCreationForm):

    error_message = user_forms.UserCreationForm.error_messages.update(
        {"duplicate_username": _("This username has already been taken.")}
    )

    class Meta(user_forms.UserCreationForm.Meta):
        model = User

    def clean_username(self):
        username = self.cleaned_data["username"]

        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            return username

        raise ValidationError(self.error_messages["duplicate_username"])
class LoginForm(Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput) 