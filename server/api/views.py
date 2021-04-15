from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication

from product.models import Product
from brand.models import Brand
from category.models import Category

from .serializers import (ProductSerializer, BrandSerializer, CategorySerializer)


class ProductViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing product instances.
    """
    permission_classes = [IsAuthenticated,]
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class BrandViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing brand instances.
    """
    permission_classes = [IsAuthenticated,]
    serializer_class = BrandSerializer
    queryset = Brand.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing category instances.
    """
    permission_classes = [IsAuthenticated,]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

