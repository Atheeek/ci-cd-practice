# Step 1: Build the Vite app
FROM node:18-alpine as builder

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

WORKDIR /app
COPY . .

RUN echo "VITE_API_URL=$VITE_API_URL" > .env.production

RUN npm install
RUN npm run build

# Step 2: Serve with `serve`
FROM node:18-alpine

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "80"]
