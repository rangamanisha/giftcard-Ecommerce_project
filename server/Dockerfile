FROM python:3.6.12-alpine3.12

WORKDIR /app

RUN apk update && \
    apk add --no-cache bash \
    make automake gcc subversion python3-dev \ 
    musl-dev libffi-dev openssl-dev \
    curl dpkg \
    --no-cache jpeg-dev zlib-dev zlib \
    cairo \
    cairo-dev pango-dev \
    openssl-dev rust tcl-dev tiff-dev tk-dev \
    cargo freetype-dev gdk-pixbuf-dev \
    jpeg-dev lcms2-dev  openjpeg-dev poppler-utils py-cffi && \
    pip install --upgrade pip

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000