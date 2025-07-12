# Step 1: Build the Vite app
FROM node:18-alpine as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve the build with `serve`
FROM node:18-alpine

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "80"]
