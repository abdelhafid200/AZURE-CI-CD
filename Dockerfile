# Utiliser l'image officielle de Nginx comme image de base
FROM nginx:alpine

# Copier les fichiers HTML et CSS dans le répertoire par défaut de Nginx
# COPY ./ /usr/share/nginx/html

# Exposer le port par défaut de Nginx
EXPOSE 80

# Nginx démarre automatiquement grâce à l'image de base
