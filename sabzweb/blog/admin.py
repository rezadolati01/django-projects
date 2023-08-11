from django.contrib import admin
from .models import *
from django_jalali.admin.filters import JDateFieldListFilter
import django_jalali.admin as jadmin
# Register your models here.

# admin.sites.AdminSite.site_header = "پنل مدیریت جنگو"
# admin.sites.AdminSite.site_title = "پنل"
# admin.sites.AdminSite.index_title = "پنل مدیریت"

# Inlines
class ImageInline(admin.TabularInline):
    model = Image
    extra = 0

class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author','category', 'publish', 'status']
    ordering = ['title', 'publish']
    list_filter = ['status', ('publish', JDateFieldListFilter), 'author']
    search_fields = ['title', 'description']
    raw_id_fields = ['author']
    date_hierarchy = 'publish'
    prepopulated_fields = {"slug": ['title']}
    list_editable = ['status']
    # list_display_links = ['author']
    # autocomplete_fields = ['author']
    inlines = [ImageInline, CommentInline]



@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ['name', 'subject', 'phone']


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['post', 'name', 'created', 'active']
    list_filter = ['active', ('created', JDateFieldListFilter), ('updated', JDateFieldListFilter), ]
    search_fields = ['name', 'body']
    list_editable = ['active']
    # autocomplete_fields = ['post']


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['post', 'title', 'created']

@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ['user', 'date_of_birth', 'bio', 'job', 'photo']