FROM node:18

WORKDIR /app

# Install only when dependencies change
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

CMD ["node", "server.js"]
