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