FROM node:18

WORKDIR /DataLens/

COPY package.json ./

RUN npm install

COPY . .

RUN npm install chart.js

RUN npm run build

CMD ["npm", "run", "dev"]
