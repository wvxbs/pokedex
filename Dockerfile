FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --global --production expo-cli
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8081
EXPOSE 19000-19010 
RUN chown -R node /usr/src/app
USER node
CMD ["expo", "start"]
