## Init for nodejs demo swarm project
- npm init -y
- npm i express
- touch app.js
- node app.js

## Create Image
- create image with ""
- docker build -t nodeswarm:1.0 .

## Create Docker Container (Standalone)
- docker run -d -p 3000:3000 --name nodeswarm nodeswarm:1.0
- curl http://localhost:3000


## Create Docker Swarm as Cluster
- docker swarm init
- docker service create --replicas 3 --name demo-nodeswarm --publish 3000:3000 nodeswarm:1.0

## Docker command
docker images
docker rmi <image_id>
docker ps 
docker rm <container_id>
docker service ls
docker service rm <service_id>

## Result
![Docker build image](document/images/docker_build_images.png)