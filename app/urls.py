from django.conf.urls import url, include
from rest_framework import routers
from .api.views import UsersPBs2


router = routers.DefaultRouter()
# router.register(r'pbu', PBUserVS, base_name='pbu')

urlpatterns = [
    url(r'^', include(router.urls)), # Include router urls into our urlpatterns
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^users/', UsersPBs2.as_view(), name='userList')
]