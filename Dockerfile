FROM node:19-alpine3.15 as dev
WORKDIR /app
COPY package.json .
RUN yarn install
CMD [ "yarn", "dev" ]

FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json .
RUN yarn install --frozen-lockfile

FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:19-alpine3.15 as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --omit=dev --frozen-lockfile

FROM node:19-alpine3.15 as prod
WORKDIR /app
ENV PORT 8000
ENV MONGODB_URI "mongodb+srv://juansebasbravo:Q6tfRGibSszvi8zj@cluster-juan.cxv9tji.mongodb.net/booksDB"
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
EXPOSE 8000

CMD [ "node","dist/app.js" ]