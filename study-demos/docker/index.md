## list your images
```
docker images
```

## Pull your first image from Docker Hub.
```
docker pull hello-world
```

## Run the hello-world image as a container.
```
docker run hello-world
```

## list all containers (ps: 是 processes 的缩写，用于列出 Docker 容器)
```
docker ps -a
```

## delete container 
```
docker container rm <container_id>
```

## build image from dockerfile
- 在当前目录下查找 Dockerfile，并使用它来构建一个新的 Docker image，然后给这个image指定名称为 myimage，tag为 v1
- -t 参数用来给构建的镜像指定一个tag
```
docker build . -t myimage:v1
```

## run container 
- docker run：运行 Docker 容器的命令。
- -d：在后台（detached mode）运行容器，即使没有输入流也可以保持容器运行。
- -p 8080:8080：指定端口映射，将主机的端口 8080 映射到容器内部的端口 8080。这样，外部可以通过访问主机的 8080 端口来访问容器中运行的服务。
- myimage:v1：指定要运行的 Docker 镜像及其标签。这里的 myimage:v1 是之前通过 docker build 构建的镜像，:v1 表示使用版本为 v1 的镜像。

```
docker run -dp 8080:8080 myimage:v1
```

## stop all container
- 显示正在运行的 container
```
docker ps
```
- docker ps -q：列出所有正在运行的 Docker 容器的 ID。选项 -q 用于仅显示容器的 ID 而不显示其他信息。

```
docker stop $(docker ps -q)
```
