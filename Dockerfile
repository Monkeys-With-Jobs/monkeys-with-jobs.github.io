FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY logo.svg /usr/share/nginx/html/logo.svg
COPY favicon.png /usr/share/nginx/html/favicon.png
