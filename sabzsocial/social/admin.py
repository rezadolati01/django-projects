from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin


# Register your models here.

class ImageInline(admin.TabularInline):
    model = Image
    extra = 0

@admin.register(User)
class UserAdmin(UserAdmin):
    list_display = ['username', 'phone', 'first_name', 'last_name']
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Information', {'fields': ('date_of_birth', 'bio', 'photo', 'job', 'phone')}),
    )


def make_deactivation(modeladmin, request, queryset):
    reusult = queryset.update(active = False)
    modeladmin.message_user(request, f"{reusult} Posts were rejected" )
make_deactivation.short_description ='رد پست'

def make_activation(modeladmin, request, queryset):
    reusult = queryset.update(active = True)
    modeladmin.message_user(request, f"{reusult} Posts were accepted" )
make_activation.short_description ='تایید پست'
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['author', 'created', 'description']
    ordering = ['created']
    search_fields = ['description']
    inlines = [ImageInline]
    actions = [make_deactivation, make_activation ]


admin.site.register(Contact)

admin.site.register(Image)
