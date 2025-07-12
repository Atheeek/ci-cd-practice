FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Copy the .env file into the container manually
COPY .env .env

CMD ["node", "server.js"]
