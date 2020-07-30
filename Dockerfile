# Pull latest node image from docker
FROM node:latest

LABEL maintainer='tundexmike@gmail.com'

# Creating ad work directory for the application
WORKDIR /usr/src/app

# copy package.json to install require dependencies
COPY package.json package-lock.json ./

# install dependencies
RUN npm install

# copy app into folder
COPY . .

# expose ports
EXPOSE 80 443 3000 5000 8001 8080

# start app
CMD ["npm", "start"]