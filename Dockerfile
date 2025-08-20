# Étape 1 : Build de l'application Angular
FROM node:22.17.0 AS build

WORKDIR /app

# Copier les fichiers sources
COPY . .

# Installer les dépendances
RUN npm install

# Construire l'application Angular avec la bonne commande
RUN npm run build -- --configuration=production

# Étape 2 : Serve avec NGINX
FROM nginx:alpine

# Copier les fichiers buildés vers NGINX
COPY --from=build /app/dist/ams/browser /usr/share/nginx/html

# Ajouter config personnalisée pour le routing Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf




 
