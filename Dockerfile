FROM node:22.13.1-bookworm-slim

WORKDIR /app

ENV NODE_ENV=production

COPY .npmrc package*.json ./
COPY components ./components
COPY script ./script

RUN npm install --include=dev --no-audit --no-fund

COPY . .

EXPOSE 2368

CMD ["npm", "start"]
