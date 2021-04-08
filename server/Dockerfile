FROM python:3.6-alpine

WORKDIR /app

COPY . .

RUN apk add --no-cache --virtual .build-deps gcc musl-dev \
    && pip install --no-cache-dir -r requirements.txt \
    && apk del .build-deps

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

EXPOSE 8000

CMD /wait && python manage.py migrate

CMD /wait && python manage.py runserver 8000
