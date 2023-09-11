from django.db import models
from django.contrib.auth.models import AbstractUser
from django.urls import reverse
from taggit.managers import TaggableManager

# Create your models here.

class User(AbstractUser):
    date_of_birth = models.DateField(blank=True, null=True)
    bio = models.TextField(null=True, blank=True)
    photo = models.ImageField(upload_to="account_images/", blank=True, null=True)
    job = models.CharField(max_length=250, null=True, blank=True)
    phone = models.CharField(max_length=11, null=True, blank=True)


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_posts", verbose_name="نویسنده")
    description = models.TextField(verbose_name="توضیحات")
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    tags = TaggableManager()

    class Meta:
        ordering = ['-created']
        indexes = [
            models.Index(fields=['-created'])
        ]
        verbose_name = "پست"
        verbose_name_plural = "پست ها"

    def __str__(self):
        return self.author.first_name

