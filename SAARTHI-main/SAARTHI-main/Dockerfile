
FROM node


WORKDIR /app


COPY package.json /app


RUN npm install 
# RUN npm install Axios bootstrap react-bootstrap
# RUN npm ci --only=production && npm cache clean --force


COPY . /app


EXPOSE 3000


# CMD ["node","src/index.js"] 
CMD [ "npm","start" ]