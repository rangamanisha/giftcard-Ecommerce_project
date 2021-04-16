"""giftApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static


from api import views
from api import user_views as user_views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


router = DefaultRouter()
router.register(r'products', views.ProductViewSet, basename='product')
router.register(r'categories', views.CategoryViewSet, basename='category')
router.register(r'brands', views.BrandViewSet, basename='brand')
router.register(r'users', user_views.UserViewSet, basename='user')




urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('allauth.urls')),

    # path('rest-auth/', include('rest_auth.urls')),
    # path('rest-auth/facebook/', user_views.FacebookLogin.as_view(), name='fb_login'),
    path('api/v1/', include(router.urls)),
    path('api/v1/login/', user_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/reset-user-password/', user_views.UserResetPassword.as_view(), name='reset_password'),
    path('api/v1/send-forget-passwod-email/', user_views.SendEmailForForgetPassword.as_view(), name='send_otp'),
    path('api/v1/reset-forget-password/', user_views.UserResetForgetPassword.as_view(), name="rest_forget_password"),
    path('api/v1/activate-user-account/', user_views.ActivateUserAccount.as_view(), name="activate_user_account")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
