from django.urls import path
from . import views


app_name="bitnine"


urlpatterns = [
    path('', views.redirect_view,name="bitnine_redirect"),
    path('home/', views.HomeView.as_view(), name="bitnine_home"),
]