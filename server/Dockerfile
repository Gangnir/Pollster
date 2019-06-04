FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
ENV MONGODB_URL="mongodb://mongo:27017/pollster"
EXPOSE 3000
CMD npm run dev