FROM node:latest

WORKDIR /app

COPY . /app
RUN npm install

ARG PORT=3000
ENV PORT=$PORT

EXPOSE 3000

CMD ["npm", "start"]