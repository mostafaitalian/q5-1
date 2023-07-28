from django.contrib.auth import get_user_model, login, authenticate
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.shortcuts import render, redirect
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, CreateView
from django.db.models import Sum, Avg, Count, Min, Max 
from rest_framework.decorators import api_view, permission_classes, authentication_classes
# from .serializers import UserSerializer, UserSerializerWithToken, NotificationTokenSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework import generics
from django.contrib.auth import logout
# from engineer.models import Engineer, Area
User = get_user_model()
from rest_framework.generics import ListCreateAPIView
# from machine.models import Machine, Call
# from .models import NotificationToken
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from .forms import UserCreationForm, LoginForm
from django.http import HttpResponse
from django.contrib import messages


class Signup(CreateView):

    form_class = UserCreationForm
    template_name = 'users/signup.html'


def login_user(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            username = cd['username']
            password = cd['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    messages.add_message(request, messages.SUCCESS, "you have successfuly logged in")
                    return redirect('/home/')
                else:
                    return redirect('/users/login/')
            else:
                return HttpResponse('data not valid')
    else:
        form = LoginForm()
    return render(request, 'users/login.html', {'form':form})