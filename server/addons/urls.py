from django.shortcuts import render
from django.conf.urls import url
from .User.Controller.actionfiles import UserAPI,getUpdateDeleteUser,SignupAPI,UserSigin,UpdatePassword

urlpatterns = [
    url(r'^api/users', UserAPI.as_view()),
    url(r'^api/updateusers/(?P<id>[0-9]+)$',getUpdateDeleteUser.as_view()),
    url(r'^api/updatepassword/(?P<id>[0-9]+)$',UpdatePassword.as_view()),
    url(r'^api/signup', SignupAPI.as_view()),
    url(r'^api/signin',UserSigin.as_view()),


]
