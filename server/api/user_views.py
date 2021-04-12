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



class UserResetPassword(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserRestPasswordSerializer

    def post(self, request):
        serializer = UserRestPasswordSerializer(data=request.data, context={'user' : request.user})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message" : "successfully change password"}, status.HTTP_200_OK)


class SendOTPForForgetPassword(APIView):
    serializer_class = SendOTPForForgetPasswordSerializer

    def post(self, request):
        serializer = SendOTPForForgetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = request.data['email']
        send_otp_email(email)
        return Response({"message" : "successfully sent otp to email"}, status.HTTP_200_OK)


class UserResetPassword(APIView):
    serializer_class = UserForgetPasswordSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message" : "successfully reset password"}, status.HTTP_200_OK)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = LoginSerializer

