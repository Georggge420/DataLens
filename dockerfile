FROM node:18

WORKDIR /datalens

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]