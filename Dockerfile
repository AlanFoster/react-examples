FROM node:8.1.0-alpine

RUN mkdir /srv/example
WORKDIR /srv/example

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .