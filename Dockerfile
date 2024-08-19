FROM node:20.16

WORKDIR usr/src/app

COPY .  .

RUN npm insatall --production
RUN npm run build

CMD [ "npm","run" ]

