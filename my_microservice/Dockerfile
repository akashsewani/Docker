FROM ubuntu:latest
MAINTAINER akashsewani44@gmail.com

RUN apt update
RUN apt install -y nodejs npm
COPY ./package.json src/
RUN cd src && npm install
COPY . /src
WORKDIR src/
CMD ["npm","start"]



