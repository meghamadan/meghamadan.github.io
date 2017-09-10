from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^0$', views.zero, name='zero'),
    url(r'^1$', views.one, name='one'),
    url(r'^2$', views.two, name='two'),
    url(r'^3$', views.three, name='three'),
    url(r'^4$', views.four, name='four'),
    url(r'^5$', views.five, name='five'),
    url(r'^6$', views.six, name='six'),
    url(r'^7$', views.seven, name='seven'),
    url(r'^8$', views.eight, name='eight'),
    url(r'^9$', views.nine, name='nine'),
    url(r'^10$', views.ten, name='ten'),
    url(r'^11$', views.eleven, name='eleven'),
]