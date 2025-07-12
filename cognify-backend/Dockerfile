FROM node:18

WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# ✅ Copy .env into container
COPY .env .env

# Start server
CMD ["node", "server.js"]
