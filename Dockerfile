FROM node:14-alpine

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
EXPOSE 3000
RUN npm install npm@latest -g
RUN npm ci
COPY . .
ENV HOST=127.0.0.1
ENV PORT=3000
ENV ORIGIN=https://medecinelibre.com
ENV PROTOCOL_HEADER=x-forwarded-proto
ENV HOST_HEADER=x-forwarded-host
RUN npm run build
ENV NODE_ENV=production
CMD ["node", "build/server.js"]
