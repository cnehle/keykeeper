FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
#RUN touch ./requirements.txt
COPY ./flask_api/requirements.txt .

COPY . .

RUN pip install --no-cache-dir -r requirements.txt