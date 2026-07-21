# syntax=docker/dockerfile:1

# --- Étape 1 : build du site statique Astro ---
FROM node:22-alpine AS build
WORKDIR /app

# Dépendances (couche cachée tant que package*.json ne change pas)
COPY package.json package-lock.json ./
RUN npm ci

# Sources + build → /app/dist
COPY . .
RUN npm run build

# --- Étape 2 : service des fichiers statiques via nginx ---
FROM nginx:1.27-alpine AS runtime

# Config nginx (gzip + cache long sur les assets hashés)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fichiers statiques générés
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Healthcheck simple : la page d'accueil doit répondre
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1
