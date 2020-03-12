FROM nginx
COPY ./dist/ /usr/share/nginx/html/
COPY ./shop-nginx.conf /etc/nginx/conf.d/shop-nginx.conf

EXPOSE 80