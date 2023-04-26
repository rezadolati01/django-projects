from django.contrib.syndication.views import Feed
from django.template.defaultfilters import truncatewords
from django.urls import reverse_lazy
from .models import VideoInformation

class LatestVideoFeed(Feed):
    title="New Videos"
    link=reverse_lazy('video:video_list')
    description='New videos of DastGanj'

    def items(self):
        return VideoInformation.published.all()[:5]
    def item_title(self, item):
        return item.title
    def item_description(self, item):
        return truncatewords(item.caption,30)