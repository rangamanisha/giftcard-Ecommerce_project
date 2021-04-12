import bcrypt
import datetime
from.utils import *
from django.shortcuts import render
from.models import User
from .serializers import UserSerializer
from rest_framework.views import APIView
from django.http import Http404
from django.conf import settings
from django.http import JsonResponse
from rest_framework_jwt.settings import api_settings
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view,APIView
from django.http import Http404
from django.core import serializers
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.contrib.auth.hashers import make_password, check_password
from django.shortcuts import render
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from config import *
import requests

#jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
#jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class UserAPI(APIView):
        permission_classes = [AllowAny,]

        def get(self,request,*args,**kwargs):
            try:
                obj=User.objects.all()
                serializer=UserSerializer(obj,many=True)
                return Response(serializer.data)
            except User.DoesNotExist:
                raise Http404

        def post(self,request,format=None):
            try:
                password = request.data["password"]
                salt = bcrypt.gensalt()
                hashed = bcrypt.hashpw(password, salt)
                request.data["password"]= hashed
                serializer=UserSerializer(data=request.data,partial=True)
                if serializer.is_valid():
                    serializer.save()
                    return Response({"success":True,"data":serializer.data})
                return Response({"message":serializer.errors})
            except Http404:
                return Response({"message":"data not added"})



class getUpdateDeleteUser(APIView):
    def get_object(self,id):
        try:
            return User.objects.get(id=id)
        except:
            raise Http404
    def get(self, request, id, format=None):
        try:
            get = self.get_object(id)
            serializer=UserSerializer(get)
            return Response(serializer.data)
        except Http404:
                return Response({"message:":" no records found on this id"})
    def put(self,request,id,format=None):
        try:
            obj=self.get_object(id)
            request.data["updated_at"]=datetime.date.today()
            serializer=UserSerializer(obj,data=request.data,partial=True)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse({"success":True,"data":serializer.data})
                return JsonResponse({"message":serializer.errors})
        except Http404:
            return JsonResponse({"message":"data not updated"})
    def delete(self,request,id,format=None):
        try:
            obj=self.get_object(id)
            obj.delete()
            return Response({"message":"data  deleted"})
        except Http404:
            return JsonResponse({"message":"data not deleted"})




class UpdatePassword(APIView):
	def get_object(self,id):
		try:
			return User.objects.get(id=id)
		except:
			raise Http404
	def put(self,request,id,format=None):
         try:
             obj=self.get_object(id)
             password = request.data["password"]
             salt = bcrypt.gensalt()
             hashed = bcrypt.hashpw(password, salt)
             request.data["password"]= hashed
             request.data["updated_at"]=datetime.date.today()
             serializer=UserSerializer(obj,data=request.data,partial=True)
             if serializer.is_valid():
                 serializer.save()
                 return JsonResponse({"success":True,"data":serializer.data})
             return JsonResponse({"message":serializer.errors})
         except Http404:
             return JsonResponse({"message":"data not updated"})




class SignupAPI(APIView):
    permission_classes = [AllowAny,]
    def post(self,request,format=None):
        obj = request.data
        email = request.data["email"]
        password = obj["password"]
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password, salt)
        request.data["password"]= hashed
        serializer=UserSerializer(data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [email, ]
            msg=EmailMultiAlternatives(subject, message, email_from,recipient_list, bcc=[bcc], cc=[cc])
            msg.send()
            return Response({"success":True,"data":serializer.data})
        return Response({"message":serializer.errors})





class Sigin(APIView):
    permission_classes = [AllowAny,]
    def post(self,request,format=None):
        obj = request.data
        email = obj["email"]
        password = obj["password"]
        email_check = User.objects.filter(email=request.data["email"]).first()
        if email_check is not None:
            isVerified = email_check.isVerified
            if isVerified is  True:
                hashed_password = email_check.password
                if bcrypt.checkpw(password,hashed_password):
                    email_check.accountVerified =True
                    email_check.save()
                    access_token = generate_access_token(user)
                    refresh_token =generate_refresh_token(user)
                    token_details ={"access_token":access_token,"refresh_token":refresh_token}
                    return Response ({"success":True,
                                'message': 'logined successfully',
                                'token':token_details
                                })
                else:
                    return Response({"success":False,"message": "Invalid password"})
            else:
                return Response({"success":False,"message": "Verify your accounty before signin to your account"})
        else:

                return Response({"success":False,"message": "Invalid UserName"})





class Userlogt(APIView):
    def get(self, request, *args, **kwargs):
        logout(request)
        data = {'success':True,"message": 'Sucessfully logged out'}
        return Response(data=data, status=status.HTTP_200_OK)


class TestSigin(APIView):
    permission_classes = [AllowAny,]
    def post(self,request,instance=None,format=None):

            server_ip = requests.get("https://httpbin.org/ip").json()['origin']
            print(server_ip)

            obj = request.data
            email = obj["email"]
            password = obj["password"]
            print(password)

            user = User.objects.filter(email=request.data["email"]).first()
            #print(user)

            access_token=generate_access_token(user)
            payload = jwt.decode(
                access_token, settings.SECRET_KEY, algorithms=['HS256'])
            print(">>>>>>>>>>>>>>>>>",payload)


            refresh_token =generate_refresh_token(user)

            #token_detail={"access_token":access_token}
            token_details ={"access_token":access_token,"refresh_token":refresh_token,"JWT_AUTH_HEADER_PREFIX":"Bearer"}

            return Response ({"success":True,
                        'message': 'logined successfully',
                        "token" :token_details})


'''class RefreshToken(APIView):
        permission_classes = [AllowAny,]
        def get(request):
            User = get_user_model()
            refresh_token = request.COOKIES.get('refreshtoken')
            if refresh_token is None:
                raise exceptions.AuthenticationFailed(
                    'Authentication credentials were not provided.')
            try:
                payload = jwt.decode(
                    refresh_token, settings.REFRESH_TOKEN_SECRET, algorithms=['HS256'])
            except jwt.ExpiredSignatureError:
                raise exceptions.AuthenticationFailed(
                    'expired refresh token, please login again.')

            user = User.objects.filter(id=payload.get('user_id')).first()
            if user is None:
                raise exceptions.AuthenticationFailed('User not found')

            if not user.is_active:
                raise exceptions.AuthenticationFailed('user is inactive')


            access_token = generate_access_token(user)
            return Response({'access_token': access_token})'''
