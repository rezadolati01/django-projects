from django.contrib import admin
from .models import VideoInformation,VideoFile,Comment

# Register your models here.
@admin.register(VideoInformation)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('teacher','title','publish','status',)
    list_filter = ('created','publish','status','teacher')
    search_fields = ('title','caption','teacher')
    prepopulated_fields = {'slug':('title',)}
    raw_id_fields = ('teacher',)
    date_hierarchy = 'publish'
    ordering = ('status','publish')

@admin.register(VideoFile)
class VideoFileAdmin(admin.ModelAdmin):
    list_display = ('video_information', 'videofile', 'created',)

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('name','email','video_information','created','activ')
    list_filter = ('activ','created','updated')
    search_fields = ('name','email','body')