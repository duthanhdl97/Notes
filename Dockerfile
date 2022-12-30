FROM node:14.17.6-alpine AS base

WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "run", "start"]
