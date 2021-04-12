from rest_framework import serializers

from product.models import Product
from brand.models import Brand
from category.models import Category

from django.contrib.auth import get_user_model
from user.models import UserForGetPassword
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer
)
User = get_user_model()


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']


class BrandSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Brand
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']


class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']


class UserRegistrationSerializer(serializers.ModelSerializer):
    """
    It's user registration model serializer.
    """
    confirm_password = serializers.CharField(style={'input_type': 'password'},
        max_length=20, min_length=8, required=True, write_only = True,)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password', 
            'id', 'is_active', 'role', 'date_joined', 'confirm_password',
            'language', 'date_of_birth', 'country')
        read_only_fields = ('id', 'is_active', 'role', 'date_joined', 'language', 'date_of_birth', 'country')
        extra_kwargs = {
            'password': {'write_only': True},
        }
    
    def validate(self, data):
        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError("Those passwords don't match.")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = User.objects.create(**validated_data)
        user.set_password(user.password)
        user.save()
        return user


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'language', 'date_of_birth', 'country')


class UserRestPasswordSerializer(serializers.Serializer):
    confirm_password = serializers.CharField(style={'input_type': 'password'},
        max_length=20, min_length=8, required=True, write_only = True,)
    new_password = serializers.CharField(style={'input_type': 'password'},
        max_length=20, min_length=8, required=True, write_only = True,)
    password = serializers.CharField(style={'input_type': 'password'},
        max_length=20, min_length=8, required=True, write_only = True,)
    
    def validate(self, data):
        user = self.context['user']
        if not user.check_password(data['password']):
            raise serializers.ValidationError("Current password of the user is not correct.")
        if data.get('confirm_password') != data.get('new_password'):
            raise serializers.ValidationError("Those passwords don't match.")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = self.context['user']
        user.set_password(validated_data.pop('new_password'))
        user.save()
        return user


class SendOTPForForgetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)


class UserForgetPasswordSerializer(serializers.Serializer):
    confirm_password = serializers.CharField(style={'input_type': 'password'},
        max_length=20, min_length=8, required=True, write_only = True,)
    new_password = serializers.CharField(style={'input_type': 'password'},
        max_length=20, min_length=8, required=True, write_only = True,)
    email = serializers.EmailField(required=True)
    otp = serializers.CharField(required=True)
    
    def validate(self, data):
        user_otp = UserForGetPassword.objects.filter(
                user__email=data['email'],
                code=data['otp']
            ).exists()
        
        if not user_otp:
            raise serializers.ValidationError("OTP doesn't valid")

        if data.get('confirm_password') != data.get('new_password'):
            raise serializers.ValidationError("Those passwords don't match.")
        return data

    def create(self, validated_data):
        user = User.objects.get(email=validated_data['email'])
        user.set_password(validated_data.pop('new_password'))
        user.save()
        return user


class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        
        data["first_name"] = self.user.first_name
        data["last_name"] = self.user.last_name
        data["email"] = self.user.email
        data["id"] = self.user.id
        data["is_active"] = self.user.is_active
        data["role"] = self.user.role
        data["date_joined"] = self.user.date_joined
        data["language"] = self.user.language
        data["date_of_birth"] = self.user.date_of_birth
        data["country"] = self.user.country

        return data
