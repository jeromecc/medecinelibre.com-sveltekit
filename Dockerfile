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
RUN npm install
COPY . .

RUN npm run build
ENV NODE_ENV=production
CMD ["node", "build/server.js"]
