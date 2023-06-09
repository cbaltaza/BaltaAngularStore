#FROM nginx:1.17.8-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#WORKDIR /usr/share/nginx/html
#COPY dist/balta-an-store/ .
#EXPOSE 80


### STAGE 1: Build ###
FROM node:lts-alpine AS build

#### make the 'app' folder the current working directory
WORKDIR /usr/src/app

#### copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

#### install angular cli
RUN npm install -g @angular/cli

#### install project dependencies
RUN npm install

#### copy things
COPY . .

#### generate build --prod
RUN npm run build:ssr

### STAGE 2: Run ###
FROM nginxinc/nginx-unprivileged

#### copy artifact build from the 'build environment'
COPY --from=build /usr/src/app/dist/balta-an-store/browser /usr/share/nginx/html

#RUN rm /etc/nginx/conf.d/default.conf

#### copy nginx conf
#0COPY nginx.conf /etc/nginx/nginx.conf
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#### don't know what this is, but seems cool and techy
CMD ["nginx", "-g", "daemon off;"]

