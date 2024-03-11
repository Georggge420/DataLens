FROM node:18

WORKDIR /DataLens/

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]