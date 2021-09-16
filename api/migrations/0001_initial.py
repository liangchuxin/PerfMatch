# Generated by Django 3.2.6 on 2021-08-23 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.CharField(max_length=8, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(default='Anonymous', max_length=100)),
                ('age', models.IntegerField(default=-1)),
                ('profile_photo', models.URLField(default=None)),
                ('description', models.CharField(default='', max_length=5000)),
                ('email', models.EmailField(max_length=254)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
