from django.conf.urls import url, include
from rest_framework import routers
from .api.views import UsersPBs2, PBViews
from .api.views import allActiveBingethers, usersActiveBingethers
from .api.views import bingetherViews, commentsByPost
from .api.views import commentsByUser


router = routers.DefaultRouter()
router.register(r'pbu', PBViews, base_name='pbu')
router.register(r'brs', bingetherViews, base_name='brs')

urlpatterns = [
    url(r'^', include(router.urls)), # Include router urls into our urlpatterns
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^users/', UsersPBs2.as_view(), name='userList'),
    url(r'^bingethers/', allActiveBingethers.as_view(), name='activeBRs'),
    url(r'^usrbrs/', usersActiveBingethers.as_view(), name='userActiveBRs'),
    url(r'^comments/(?P<Bingether>.+)/$', commentsByPost.as_view(), name='commentsByPost'),
    url(r'^ucomments/', commentsByUser.as_view(), name='usersComments'),
]