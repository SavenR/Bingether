from django.contrib.auth.models import User
from django.db import models

#StateList for location functionality
stateList = (
    ('TA', 'testing'),
    ('AL', 'Alabama'),
    ('AK', 'Alaska'),
    ('AZ', 'Arizona'),
    ('AR', 'Arkansas'),
    ('CA', 'California'),
    ('CO', 'Colorado'),
    ('CT', 'Connecticut'),
    ('DE', 'Delaware'),
    ('DC', 'District of Columbia'),
    ('FL', 'Florida'),
    ('GA', 'Georgia'),
    ('HI', 'Hawaii'),
    ('ID', 'Idaho'),
    ('IL', 'Illinois'),
    ('IN', 'Indiana'),
    ('IA', 'Iowa'),
    ('KS', 'Kansas'),
    ('KY', 'Kentucky'),
    ('LA', 'Louisiana'),
    ('ME', 'Maine'),
    ('MD', 'Maryland'),
    ('MA', 'Massachusetts'),
    ('MI', 'Michigan'),
    ('MN', 'Minnesota'),
    ('MS', 'Mississippi'),
    ('MO', 'Missouri'),
    ('MT', 'Montana'),
    ('NE', 'Nebraska'),
    ('NV', 'Nevada'),
    ('NH', 'New Hampshire'),
    ('NJ', 'New Jersey'),
    ('NM', 'New Mexico'),
    ('NY', 'New York'),
    ('NC', 'North Carolina'),
    ('ND', 'North Dakota'),
    ('OH', 'Ohio'),
    ('OK', 'Oklahoma'),
    ('OR', 'Oregon'),
    ('PA', 'Pennsylvania'),
    ('RI', 'Rhode Island'),
    ('SC', 'South Carolina'),
    ('SD', 'South Dakota'),
    ('TN', 'Tennessee'),
    ('TX', 'Texas'),
    ('UT', 'Utah'),
    ('VT', 'Vermont'),
    ('VA', 'Virginia'),
    ('WA', 'Washington'),
    ('WV', 'West Virginia'),
    ('WI', 'Wisconsin'),
    ('WY', 'Wyoming'))

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
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=2, choices=stateList)
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


