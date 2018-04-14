FROM node:6.9.1-alpine

ADD https://github.com/openfaas/faas/releases/download/0.7.9/fwatchdog /usr/bin
RUN chmod +x /usr/bin/fwatchdog

WORKDIR /root/

COPY package.json .

RUN npm i
COPY src/* ./src/

RUN npm run build

ENV fprocess="node src/main.js"

CMD ["fwatchdog"]