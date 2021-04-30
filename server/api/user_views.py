from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from django.contrib.auth import get_user_model
from .serializers import (UserRegistrationSerializer, UserUpdateSerializer, 
    UserRestPasswordSerializer, SendOTPForForgetPasswordSerializer, UserForgetPasswordSerializer,
    LoginSerializer)
from rest_framework_simplejwt.views import TokenObtainPairView

User = get_user_model()

from rest_framework import permissions
from user.utils import send_otp_email


class ReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method == 'GET':
            return True if view.kwargs.get('pk') else False
        return request.method in ['POST']


class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing product instances.
    """
    permission_classes = [IsAuthenticated|ReadOnly]
    serializer_class = UserRegistrationSerializer
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.request.method in ['PUT']:
            return UserUpdateSerializer
        return UserRegistrationSerializer
    
    def get_object(self):
        return self.request.user
    
    def create(self, request):
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data =  serializer.data
        data.update(
            {
                "status" : "PENDING",
            }
        )
        return Response(
            {
                    "data": { "user" : data },
                    "status" : "ok",
                    "code" : 200,
                    "message" : "Thank you for creating your GiftiGlobal.com account. Please check your email to confirm your account and complete the sign up process.",
                    "errors" : []
            },
            status.HTTP_200_OK
        )


class UserResetPassword(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserRestPasswordSerializer

    def post(self, request):
        serializer = UserRestPasswordSerializer(data=request.data, context={'user' : request.user})
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        return Response(
            {
                    "data": { 
                        "user" : {
                            "name" : user.get_full_name(),
                            "email" : user.email,
                        } 
                    },
                    "status" : "ok",
                    "code" : 200,
                    "message" : "Password updated successfully!",
                    "errors" : []
            },
            status.HTTP_200_OK
        )


class SendOTPForForgetPassword(APIView):
    serializer_class = SendOTPForForgetPasswordSerializer

    def post(self, request):
        serializer = SendOTPForForgetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = request.data['email']
        send_otp_email(email)
        user = User.objects.get(email=email)
        
        message = "Password reset instructions were sent to {}".format(user.email)
        return Response(
            {
                    "data": { 
                        "user" : {
                            "name" : user.get_full_name(),
                            "email" : user.email
                        } 
                    },
                    "status" : "ok",
                    "code" : 200,
                    "message" : message,
                    "errors" : []
            },
            status.HTTP_200_OK
        )


class UserResetForgetPassword(APIView):
    serializer_class = UserForgetPasswordSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response(
            {
                    "data": { 
                        "user" : {
                            "name" : user.get_full_name(),
                            "email" : user.email,
                        } 
                    },
                    "status" : "ok",
                    "code" : 200,
                    "message" : "Password updated successfully!",
                    "errors" : []
            },
            status.HTTP_200_OK
        )


from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.tokens import RefreshToken

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = User.objects.get(email=request.data['email'])
        refresh = RefreshToken.for_user(user)
        
        data = UserRegistrationSerializer(instance=user).data
        data['access_token'] = str(refresh.access_token)
        data['status'] = "VERIFIED"
        data['gender'] = "UNKNOWN"
        data['expires_at'] = refresh['exp']
        data['type'] = "CUSTOMERID"

        return Response(
            {
                    "data": { "user" : data },
                    "status" : "ok",
                    "code" : 200,
                    "message" : "Login successfull",
                    "errors" : []
            },
            status.HTTP_200_OK
        )
        return Response(serializer.validated_data, status=status.HTTP_200_OK)

