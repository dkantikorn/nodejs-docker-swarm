## Init for nodejs demo swarm project
- npm init -y
- npm install express
- touch app.js
- node app.js

## Create Image
- docker build -t nodeswarm:1.0 .

## Create Docker Container (Standalone)
- docker run -d -p 3000:3000 --name nodeswarm nodeswarm:1.0
- curl http://localhost:3000


## Create Docker Swarm as Cluster
- docker swarm init
- docker service create --replicas 3 --name demo-nodeswarm --publish 3000:3000 nodeswarm:1.0
- curl http://localhost:3000

## Docker command
- docker images
- docker rmi <image_id>
- docker ps 
- docker rm <container_id>
- docker service ls
- docker service rm <service_id>

## Docker Build Image
![Docker build image](document/images/docker_build_image.png)

![Docker build image2](document/images/docker_build_image.png)

## Docker run single instance
![Docker single instance](document/images/run_single_instance.png)

![Docker call a sigle instance](document/images/call_single_instance.png)


## Docker run swarm cluster
![Docker run in swarm cluster](document/images/run_swarm_cluster.png)

![Docker show swarm cluster](document/images/call_single_instance.png)
