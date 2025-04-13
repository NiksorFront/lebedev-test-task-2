FROM node:22

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY vite.config.ts ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./
COPY index.html ./
COPY src ./src
COPY public ./public 

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]