
from django.urls import path

from principal import views


urlpatterns = [
    path("",views.home, name="home"),
   
]