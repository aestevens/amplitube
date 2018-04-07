FROM node:carbon

WORKDIR /app

COPY package.json .
RUN npm install

COPY server/ server/

EXPOSE 80

CMD ["npm", "run", "server"]


# Cleaning up a previous build
# docker container prune -f; docker image rm amplitube;

#Building the image
# docker build -t amplitube .

#Running the image
# docker run -it --name amp amplitube
