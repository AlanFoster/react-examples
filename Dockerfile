FROM node:8.1.0-alpine

RUN mkdir /srv/app
WORKDIR /srv/app

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .
