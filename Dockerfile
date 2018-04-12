FROM node:carbon

ENV NODE_ENV=production
ENV PORT=80
ENV GOOGLE_API_KEY=""

WORKDIR /app

COPY package.json .
RUN npm install --only=production

COPY server/ server/

EXPOSE 80

CMD ["npm", "run", "server"]


# Cleaning up a previous build
# docker container prune -f; docker image rm amplitube;

#Building the image
# docker build -t amplitube .

#Running the image locally on port 8080
# docker run -it --name amp -p 8080:80 -e "GOOGLE_API_KEY=..." amplitube
