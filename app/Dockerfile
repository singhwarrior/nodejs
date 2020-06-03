FROM node:6
#RUN mkdir -p /nodejs/app/
WORKDIR /nodejs/app/
COPY . .
RUN npm install
EXPOSE 8888
#WORKDIR /nodejs/app/
#CMD ["npm","init"]
CMD ["node","."]