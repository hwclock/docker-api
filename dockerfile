FROM node:17-alpine
WORKDIR /usr/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]