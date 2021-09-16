FROM  node:lts-alpine3.13

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


EXPOSE 4000 

CMD [ "node", "dist/main" ]