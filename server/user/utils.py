from mail_templated import EmailMessage
import random
from user.models import User, UserForGetPassword

def send_otp_email(email):
    user = User.objects.filter(email=email)
    if user:
        user_otp, _ = UserForGetPassword.objects.get_or_create(user=user[0])
        code = random.randint(100000,999999)
        user_otp.code = code
        user_otp.save()

        message = EmailMessage('email/otp.html', 
        {'user': user[0], 'code' : code}, 'test@ducduc.com',to=[email])
        message.send()