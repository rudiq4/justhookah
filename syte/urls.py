from django.conf.urls import url
from syte import views

app_name = 'syte'

urlpatterns = [
    url(r'^$', views.index, name='index'),

]
