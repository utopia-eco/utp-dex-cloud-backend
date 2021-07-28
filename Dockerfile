FROM node:latest

WORKDIR /app

COPY . /app
RUN npm install

ARG PORT=3000
ENV PORT=$PORT

ENV DB_DATABASE=$DB_DATABASE, DB_USER=$DB_USER, DB_PASS=$DB_PASS, INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME

RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy
RUN chmod +x cloud_sql_proxy
RUN mkdir /cloudsql
RUN chmod 777 /cloudsql

EXPOSE 3000

CMD ["npm", "start"]