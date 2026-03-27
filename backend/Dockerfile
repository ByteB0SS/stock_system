FROM node:22-slim
LABEL maintainer="rubemernesto2@gmail.com"
RUN apt-get update && apt-get install -y openssl libssl-dev && rm -rf /var/lib/apt/lists/*
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /api
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY prisma ./prisma
RUN pnpm prisma generate
COPY . .
RUN pnpm build
CMD [ "pnpm", "start:prod" ]
EXPOSE 3000
