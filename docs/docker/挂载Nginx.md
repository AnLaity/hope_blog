#### Docker 安装 Nginx

-  先启动一个未配置的nginx查看nginx默认配置
```
docker run -i -t nginx /bin/bash
``` 

- 拷贝nginx.conf和挂载文件夹的 [/etc/nginx/conf.d ]default.conf

- docker 命令

```
docker run -i -t --name nginx --restart=always --privileged=true -p 80:80 -v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /data/nginx/log:/var/log/nginx -v /data/nginx/html:/usr/share/nginx/html -v /data/nginx/conf.d:/etc/nginx/conf.d -d nginx:latest
```