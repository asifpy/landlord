from .base import *

SECRET_KEY = env('DJANGO_SECRET_KEY')

INSTALLED_APPS += ['raven.contrib.django.raven_compat']
MIDDLEWARE += [
    'raven.contrib.django.raven_compat.middleware.SentryResponseErrorIdMiddleware'
]

# Hosts/domain names that are valid for this site
ALLOWED_HOSTS = env.list('DJANGO_ALLOWED_HOSTS', default=['api.landlord.net'])


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
