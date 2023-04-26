from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from  django.urls import reverse
from django_resized import ResizedImageField
from taggit.managers import TaggableManager

#Default Manager
class PublishedManager(models.Manager):
    def get_queryset(self):
        return super(PublishedManager,self).get_queryset().filter(status='published')

# Create your models here.
class VideoInformation(models.Model):
    STATUS_CHOICES=( ('draft','Draft'),
                     ('published','Published'),
    )
    LEVEL_CHOICES=( ('preliminary','مقدماتی'),
                     ('mean','متوسط'),
                     ('advanced','پیشرفته'),
    )
    phone_number = models.CharField(max_length = 11 , unique=True,null=True,blank=True)
    teacher=models.ForeignKey(User,on_delete=models.CASCADE,related_name="video_teacher")
    title=models.CharField(max_length=250)
    caption=models.TextField()
    slug=models.SlugField(max_length=250)
    publish=models.DateTimeField(default=timezone.now)
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now=True)
    status=models.CharField(max_length=10,choices=STATUS_CHOICES)
    preview_image = ResizedImageField(size=[825, 465], quality=90, crop=['middle', 'center'], null=True,
                                      upload_to='VideoFiles/preview_image')
    video_time=models.TimeField(null=True)
    video_level=models.CharField(choices=LEVEL_CHOICES,default='mean',max_length=15)
    price=models.PositiveIntegerField(default=0)
    users_like=models.ManyToManyField(User,blank=True,related_name='videos_liked')
    #tagging
    tags=TaggableManager()
    #manager :
    objects=models.Manager()
    published=PublishedManager()
    #absolute url
    def get_absolute_url(self):
        return reverse('video:video_detail',args=[self.slug,self.id])

    class Meta:
        ordering=('-publish',)
        db_table="videoinformation"
    def __str__(self):
        return self.title
#------------------------------------------------------------------
class VideoFile(models.Model):
    videofile =models.FileField(null=True,blank=True, upload_to='VideoFiles/videos')
    video_information = models.ForeignKey('VideoInformation' , on_delete = models.CASCADE , related_name = 'video_file' )
    created = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.video_information.id)
#---------------------------------------------------------------------
class Comment(models.Model):
    video_information=models.ForeignKey('VideoInformation' , on_delete = models.CASCADE , related_name = 'video_cm' )
    name=models.CharField(max_length=80,null=True)
    email=models.EmailField(null=True)
    body=models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    activ=models.BooleanField(default=False)

    class Meta:
        ordering=('created',)

    def __str__(self):
        return  f'Commented By {self.name} on {self.video_information}'
