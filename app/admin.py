from django.contrib import admin
from .models import personalBinge
from .models import Bingether
from .models import Comment

# Register your models here.
admin.site.register(personalBinge)
admin.site.register(Bingether)
admin.site.register(Comment)
