from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin


# Register your models here.


@admin.register(User)
class UserAdmin(UserAdmin):
    list_display = ['username', 'phone', 'first_name', 'last_name']
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Information', {'fields': ('date_of_birth', 'bio', 'photo', 'job', 'phone')}),
    )


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['author', 'created']
    ordering = ['created']
    search_fields = ['description']

admin.site.register(Contact)
