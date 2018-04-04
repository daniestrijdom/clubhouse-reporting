FROM node:8

# create app directorys
WORKDIR /app

# install dependencies
COPY package.json /app
COPY package-lock.json /app

RUN npm install

# bundle app source and run application
COPY . /app

EXPOSE 8080
CMD [ "npm", "start" ]