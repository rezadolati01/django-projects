from django import template
from ..models import VideoInformation
from django.utils.safestring import mark_safe
import markdown

register=template.Library()

@register.simple_tag(name='total-videos')
def total_videos():
    return VideoInformation.published.count()

@register.inclusion_tag('video/template_tags/latest_videos.html')
def show_newest_videos(count=4):
    newest = VideoInformation.published.order_by('-publish')[0:count]
    return {'newest':newest}

@register.filter(name='markdown')
def markdown_format(text):
    return mark_safe(markdown.markdown(text))

@register.filter(name='val')
def markdown_format(dic):
    if dic=='mean':
        return mark_safe('متوسط')
    if dic=='preliminary':
        return mark_safe('مقدماتی')
    if dic=='advanced':
        return mark_safe('پیشرفته')

