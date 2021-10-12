FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY logo.svg /usr/share/nginx/html/logo.svg
COPY logo.png /usr/share/nginx/html/logo.png
COPY favicon.png /usr/share/nginx/html/favicon.png
COPY bootstrap.min.css /usr/share/nginx/html/bootstrap.min.css.png
