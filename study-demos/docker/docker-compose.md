## explanation

- 在 docker-compose.yml 文件中，version: '3' 用于指定 Docker Compose 文件的版本。这个版本号决定了你可以使用哪些功能、配置选项和语法规则。
- image: customerapp

- 使用名为 customerapp 的镜像来创建容器。你需要先构建这个镜像，或从 Docker Hub 中获取这个镜像。
- ports: "3000:3000"

- 将宿主机的 3000 端口映射到容器的 3000 端口。假设你的应用在容器的 3000 端口上提供服务，你可以通过 localhost:3000 来访问这个应用。
- depends_on: mongodb

- 设定 app 服务依赖于 mongodb 服务。depends_on 确保 mongodb 服务在 app 服务之前启动，避免在 app 服务尝试连接 MongoDB 时，MongoDB 还没有准备好的问题。
networks: - app-network

- 将 app 服务加入到 app-network 网络中，与 mongodb 服务相同，以便它们可以互相通信。


- networks 定义了一个名为 app-network 的网络。

- app-network:

- driver: bridge
使用 bridge 驱动来创建一个隔离的网络。这是 Docker 的默认网络驱动，适用于同一主机上的容器之间的通信。

## build and run 
- build  customerapp
``` docker build -t customerapp .```
- run service
``` docker-compose up ```

- only build
``` docker-compose build```

- rebuild and run 
``` docker-compose up --build```