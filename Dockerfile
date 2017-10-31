FROM node:latest

MAINTAINER Labs64 GmbH info@labs64.com

# Install some must-haves
RUN apt-get update
RUN apt-get -y install vim git

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable

# Check installed software versions
RUN git --version
RUN node -v

# Define work directory and volumes
WORKDIR /opt/NetLicensingClient-javascript
VOLUME ["/opt/NetLicensingClient-javascript"]
