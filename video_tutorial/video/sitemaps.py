from django.contrib.sitemaps import Sitemap
from .models import VideoInformation
# from django.urls import reverse

class VideoSitemap(Sitemap):
    changefreq='weekly'
    pariority=0.9

    def items(self):
        # return ['index','about-us']
        return VideoInformation.published.all()
    def lastmod(self,obj):
        return obj.updated
    # def location(self, obj):
    #     return obj.get_absolute_url
    # def location(self, item):
    #     return reverse(item)