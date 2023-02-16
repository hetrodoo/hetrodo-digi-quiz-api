FROM node:18

WORKDIR /app

ARG PORT

COPY . .

RUN npm install

RUN npm run build

ENV PORT=$PORT

EXPOSE $PORT

CMD ["npm", "start"]
