#### Docker 安装 MySQL 并挂载文件

- docker 命令
```shell
docker run -i -t --name mysql --restart=always --privileged=true -e MYSQL_ROOT_PASSWORD=hope0416. -p 7000:3306 -v /data/mysql/data:/var/lib/mysql -v /data/mysql/cnf:/etc/mysql/conf.d -v /data/mysql/logs:/var/log/mysql -d mysql --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

- my.cnf 配置 修改默认的 sql_mode

```shell
[mysqld]
sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'
max_connections = 512
```