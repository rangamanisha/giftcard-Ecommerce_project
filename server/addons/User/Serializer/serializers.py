from rest_framework import serializers
from ..Models.user import Users


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ("id","uniqueId","firstName","lastName","email","password")



class UserSignupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ("id","email","password")
