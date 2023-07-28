from django.shortcuts import render

# Create your views here.
from django.contrib.auth import get_user_model, login, authenticate
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, CreateView, TemplateView
from django.shortcuts import redirect


def redirect_view(request):
    if request.user.is_authenticated:
        return redirect("/home/")
    return redirect("/users/login/")

    

class HomeView(LoginRequiredMixin,TemplateView):

    template_name="bitnine/home.html"