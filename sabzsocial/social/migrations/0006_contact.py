# Generated by Django 4.2.4 on 2023-10-13 16:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0005_post_saved_by'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user_from', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rel_from_set', to=settings.AUTH_USER_MODEL)),
                ('user_to', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rel_to_set', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-created',),
                'indexes': [models.Index(fields=['-created'], name='social_cont_created_5581d1_idx')],
            },
        ),
    ]
