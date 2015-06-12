DEBUG = True

DATABASES = {

    "default": {

          # Ends with "postgresql_psycopg2", "mysql", "sqlite3" or "oracle".
     # This should be whichever database that you want to use
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'Bingether',

     }

}