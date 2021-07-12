#### Docker 安装 redis

- docker 命令
```
docker run -d --privileged=true --restart=always -p 7001:6379 -v /data/redis/conf/redis.conf:/etc/redis/redis.conf -v /data/redis/data:/data --name redis redis:latest redis-server --appendonly yes --requirepass "hope"
```

#### Docker 命令介绍
```textmate
-d                                                              -> 以守护进程的方式启动容器
-p 6379:6379                                                    -> 绑定宿主机端口
--name myredis                                                  -> 指定容器名称
--restart always                                                -> 开机启动
--privileged=true                                               -> 提升容器内权限
-v /root/docker/redis/conf:/etc/redis/redis.conf                -> 映射配置文件
-v /root/docker/redis/data:/data                                -> 映射数据目录
--appendonly yes                                                -> 开启数据持久化
--character-set-server=utf8mb4                                  -> MySQL编码格式
--collation-server=utf8mb4_unicode_ci                           -> MySQL编码格式
-e MYSQL_ROOT_PASSWORD                                          -> MySQL默认密码
--requirepass                                                   -> Redis 登录密码
```