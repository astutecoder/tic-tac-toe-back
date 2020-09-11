FROM node:12

WORKDIR /tttBack
COPY package*.json ./

RUN npm install --silent

COPY . .
EXPOSE 4567

CMD ["npm", "start"]