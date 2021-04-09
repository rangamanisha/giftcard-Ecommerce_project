FROM python:3.6.12-alpine3.12

RUN apk update

RUN apk add --no-cache bash

WORKDIR /app

RUN apk add make automake gcc g++ subversion python3-dev

RUN apk add musl-dev libffi-dev openssl-dev

RUN apk add curl dpkg

RUN apk add --no-cache jpeg-dev zlib-dev

RUN apk add --no-cache --virtual .build-deps build-base linux-headers

RUN apk update

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

EXPOSE 8001


CMD /wait && python manage.py migrate && python manage.py runserver 0.0.0.0:8001