from django.db import models
import random
import string


class Employer(models.Model):
    name = models.CharField(default="Anonymous", max_length=100)
    age = models.IntegerField(default=-1)
    year_of_experience = models.IntegerField(default=1)
    profile_photo = models.URLField(default=None)
    description = models.CharField(default="", max_length=5000)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)


class Employee(models.Model):
    name = models.CharField(default="Anonymous", max_length=100)
    age = models.IntegerField(default=-1)
    profile_photo = models.URLField(default=None)
    description = models.CharField(default="", max_length=5000)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)


class Account(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)



