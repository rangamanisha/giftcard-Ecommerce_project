from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import UserCreationForm, UserChangeForm
from .models import User


class UserAdmin(UserAdmin):
    add_form = UserCreationForm
    form = UserChangeForm
    model = User
    list_display = ['email', 'role', 'first_name', 'last_name', 'country', 'is_active']
    search_fields = ('email',)
    ordering = ('email',)
    fieldsets = (
        (None, {'fields': [
            ('email', 'role', 'first_name', 'last_name', 'password'),
            ('language', 'date_of_birth', 'country')
            ]
        }),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser')}),
        ('Other Info', {'fields': ('date_joined', 'last_login')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active', 'role', 'is_superuser')}
        ),
    )

admin.site.register(User, UserAdmin)
