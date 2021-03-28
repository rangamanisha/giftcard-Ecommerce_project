from .base import *
import os

DEBUG = True

DATABASES = {
     'default': {
        'ENGINE': os.environ.get('DB_ENGINE', 'djongo'),
        'NAME': os.environ.get('DB_NAME', 'giftiglobal'),
        'HOST': os.environ.get("DB_HOST", 'localhost'),
        'PORT': os.environ.get("DB_PORT", 27017), 
        'USER': os.environ.get("DB_USER_NAME", "root"),
        "PASSWORD": os.environ.get("DB_PASS", "root")
    }
}
