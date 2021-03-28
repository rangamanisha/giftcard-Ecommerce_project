FROM python:3.8-alpine

WORKDIR /app

COPY requirements.txt .

RUN apk add --no-cache --virtual .build-deps gcc musl-dev \
    && pip install --no-cache-dir -r requirements.txt \
    && apk del .build-deps

COPY . .

COPY wait-for-it.sh .

RUN chmod +x /app/wait-for-it.sh

EXPOSE 8080

CMD [ "python", "manage.py", "runserver", "8080" ]
