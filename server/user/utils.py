from django.conf import settings
from mail_templated import EmailMessage
from rest_framework_simplejwt.tokens import RefreshToken

from user.models import User, UserForGetPassword


def send_email_to_reset_forget_password(email):
    user = User.objects.filter(email=email)
    if user:
        refresh = RefreshToken.for_user(user[0])
        message = EmailMessage('email/otp.html', 
            {
                'user': user[0], 
                'link' : settings.FRONTEND_RESET_PASSWORD_URL,
                'token' : str(refresh.access_token),
            }, '',to=[email])
        message.send()