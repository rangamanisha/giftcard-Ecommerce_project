from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User
from allauth.account.forms import PasswordField
from django.utils.translation import gettext, gettext_lazy as _, pgettext

class UserCreationForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ('email', )

class UserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('email', )


class ChangePasswordForm(forms.Form):
    oldpassword = PasswordField(label=_("Current Password"))
    password1 = PasswordField(label=_("New Password"))
    password2 = PasswordField(label=_("New Password (again)"))

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user',None)
        super(ChangePasswordForm, self).__init__(*args, **kwargs)

    def clean_oldpassword(self):
        if not self.user.check_password(self.cleaned_data.get("oldpassword")):
            raise forms.ValidationError(_("Please type your current"
                                          " password."))
        return self.cleaned_data["oldpassword"]

    def clean(self):
        cleaned_data = super(ChangePasswordForm, self).clean()
        password1 = cleaned_data.get('password1')
        password2 = cleaned_data.get('password2')
        if (password1 and password2) and password1 != password2:
            self.add_error(
                'password2', _("You must type the same password each time.")
            )
        return cleaned_data
