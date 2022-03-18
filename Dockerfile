FROM node:16-alpine

WORKDIR /WWW/WWWROOT
ADD . /WWW/WWWROOT/

RUN npm i --registry https://registry.npm.taobao.org
RUN npm run build
CMD npm run preview

EXPOSE 4173
