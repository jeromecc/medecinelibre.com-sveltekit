FROM node:14-alpine

WORKDIR /app

EXPOSE 3000

ENV HOST=127.0.0.1
ENV PORT=3000
ENV ORIGIN=https://medecinelibre.com
ENV PROTOCOL_HEADER=x-forwarded-proto
ENV HOST_HEADER=x-forwarded-host
RUN npm cache clean --force
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --only=dev
RUN npm install --only=prod
COPY . .
RUN npm run build
CMD ["NODE_ENV=production", "node", "build/server.js"]
