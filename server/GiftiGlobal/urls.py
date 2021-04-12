from django.shortcuts import render
from django.conf.urls import url
from .views import UserAPI,getUpdateDeleteUser,TestSigin,UpdatePassword,SignupAPI
from django.contrib.auth import views as auth_views
from django.urls import include


urlpatterns = [

    url(r'^api/users', UserAPI.as_view()),
    url(r'^api/getupdateuser/(?P<id>[0-9]+)$',getUpdateDeleteUser.as_view()),
    url(r'^api/updatepassword/(?P<id>[0-9]+)$',UpdatePassword.as_view()),
    url(r'^api/signup', SignupAPI.as_view()),
    url(r'^api/testsigin',TestSigin.as_view()),
    #url(r'^api/refreshtoken',RefreshToken.as_view())
    ]
