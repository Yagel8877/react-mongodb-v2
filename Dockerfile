FROM node:16-alpine

COPY package.json .

RUN mkdir ./client

COPY ./client/package.json ./client

RUN npm install

RUN cd ./client

RUN npm install 

RUN cd ..

COPY . .

EXPOSE 5000

CMD ["npm", "run", "startnode"]