from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class personalBinge(models.Model):
    user = models.ForeignKey(User)
    showID = models.PositiveIntegerField()
    showName = models.CharField(max_length=255)
    showYear = models.PositiveSmallIntegerField()
    showSummary = models.TextField(blank=True)
    showImage = models.CharField(max_length=255)
    active = models.BooleanField(default=True)

    def __unicode__(self):
        return '{0} - {1}'.format(self.user, self.showName)

class Bingether(models.Model):
    cID = models.ForeignKey(User)
    cUName = models.CharField(max_length=255)
    showID = models.PositiveIntegerField()
    showName = models.CharField(max_length=255)
    showYear = models.PositiveSmallIntegerField()
    showSummary = models.TextField(blank=True)
    showImage = models.CharField(max_length=255)
    active = models.BooleanField(default=True)
    dateCreated = models.DateField(auto_now_add=True)
    location = models.CharField(max_length=255)
    notes = models.TextField(blank=True)

    def __unicode__(self):
        return '{0}: {1} on {2}'.format(self.cUName, self.showName, self.dateCreated)

class Comment(models.Model):
    cID = models.ForeignKey(User)
    cUName = models.CharField(max_length=255)
    BID = models.ForeignKey(Bingether)
    active = models.BooleanField(default=True)
    dateTimeCreated = models.DateTimeField(auto_now_add=True)
    comment = models.TextField(blank=True)

    def __unicode__(self):
        if len(self.comment)>10:
            return '{0} - {1}...'.format(self.cUName, self.comment[:10])
        return '{0} - {1}'.format(self.cUName, self.comment)
