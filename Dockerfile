FROM node:14.17.6-alpine AS bottom
WORKDIR /usr/src/app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY . .
RUN yarn install
CMD ["yarn", "run", "start"]
