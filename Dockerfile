FROM node:14

WORKDIR /usr/app/src

COPY . .

RUN npm install

RUN npm audit fix

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]