from django.contrib import admin
from .models import *


# Register your models here.
class ImageInline(admin.TabularInline):
    model = Image
    extra = 0


class FeatureInline(admin.TabularInline):
    model = ProductFeature
    extra = 0


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'inventory', 'new_price', 'created', 'updated']
    prepopulated_fields = {'slug': ('name',)}
    list_filter = ['created', 'updated']
    inlines = [ImageInline, FeatureInline]
