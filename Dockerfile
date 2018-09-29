FROM node:8.12
WORKDIR /app
COPY . /app
RUN npm rebuild node-sass
EXPOSE 8082
CMD [ "npm", "run", "dev" ]
