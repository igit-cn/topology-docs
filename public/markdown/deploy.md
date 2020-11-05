# 企业版使用教程

## 单镜像部署

### 部署命令

【<font color=red>第一次部署时,不要设置 <del>DB_EXIST = "true"</del></font>】
【<font color=red>第2（或n）次部署时，未挂卷导入已存在数据库文件</font><font color=#008000>-v /data/topology/mongodb:/data/db</font>,不要设置 <del>DB_EXIST="true"</del>】

**映射到80端口**:
docker run --name topology -d -p 80:80 -v /data/topology/mongodb:/data/db -e DB_EXIST="true" -e TOPOLOGY_DOMAIN="topology.com" -e EMAIL_ADDRESS="smtp.mail.com" -e EMAIL_PORT="465" -e EMAIL_USER="a@mail.com" -e EMAIL_PASSWORD="aaa" le5le/topology-app

**映射到非80端口**:
docker run --name topology -d -p 3000:80 -v /data/topology/mongodb:/data/db -e DB_EXIST="true" -e TOPOLOGY_DOMAIN="topology.com" -e TOPOLOGY_PORT="3000" -e EMAIL_ADDRESS="smtp.mail.com" -e EMAIL_PORT="465" -e EMAIL_USER="a@mail.com" -e EMAIL_PASSWORD="aaa" le5le/topology-app
<br>
<br>
<br>
<font color=red>容器启动需要时间,请耐心等待下,没有最新日志就是启动完成。</font><br>
实时查看日志：docker logs -f -t topology

**挂卷**
【这里主要是:方便升级前端页面】

docker run --name topology -d -p 80:80 -v /data/topology/mongodb:/data/db  -v /xxx/topologyWeb:/topology/web -e DB_EXIST="true" -e TOPOLOGY_DOMAIN="topology.com" -e EMAIL_ADDRESS="smtp.mail.com" -e EMAIL_PORT="465" -e EMAIL_USER="a@mail.com" -e EMAIL_PASSWORD="aaa" le5le/topology-app:0.2

<br>
<br>
<br>

**参数**

|名称|默认值|是否必选|描述|
|:---|:---|:----|:---|
|-v/data/db||否|容器内mongodb数据库目录挂载位置。方便更新数据不丢失。【推荐使用】<br> ****************** 如果之前没有挂载目录，请先进入容器拷贝/data/db到主机。|
|DB_EXIST||否|是否使用已存在的数据库文件。【第一次部署时，请不要设置】已存在挂载目录，需要更新容器时，请使用。|
|DB_PATCH|||旧版本升级到企业版时使用。<br><font color=red>不可和DB_EXIST同时使用</font>|
|TOPOLOGY_DOMAIN|topology.com|否|在线访问的域名。<br>如果是本地部署，可以使用hosts文件。<br>http://topology.com  在线绘图访问。<br>http://account.topology.com 用户系统。|
|TOPOLOGY_PORT||否|如果映射出的端口为非80端口，需要指定此环境变量，方便登录跳转。|
|EMAIL_ADDRESS||否|发送系统邮件用的邮件smtp地址。用于注册邮箱用户。否则无法注册邮箱用户。|
|EMAIL_PORT||否|发送系统邮件用的邮件smtp端口。|
|EMAIL_USER||否|发送系统邮件用的账号|
|EMAIL_PASSWORD||否|发送系统邮件用的密码|
|GITHUB_CLIENTID||否|注册GitHub用户用的github的clientID|
|GITHUB_CLIENTSECRET||否|github的client secret|
|GITHUB_CALLBACK||否|登录GitHub后的回调地址，格式为：http://account.topology.com/oauth/github。其中，仅根据实际情况修改域名。|

### 使用

<font color=red>必须使用域名方式访问，需要解析的域名：topology.<your hostname>，account.<your hostname>，这里为topology.com</font>

**如何进行域名解析**
* A、配置本地hosts文件
* B、支持域名解析路由器
* C、内网dns服务器

部署成功后,访问http://topology.com即可。<br>
其中，http://account.topology.com 为用户登录注册。<br>
映射到非80端口：访问http://topology.com:3000


* 本地如何配置域名topology.com 修改本地host文件，指定域名topology.com、account.topology.com到容器主机ip。如何<a href="https://www.cnblogs.com/dasianer/p/9525582.html" target="_blank">修改hosts文件</a>
* 内网如何配置域名 可以使用花生壳

### 初始账户

默认已经包含一个管理员用户:<br>
用户名: admin@topology.com
密码:Aa123123

### 常见问题

1. 为什么使用域名topology.com<br>
 &nbsp;解决用户登录,访问域名account.topology.com<br>
 &nbsp;推荐使用hosts文件方式在本地配置。如何修改hosts文件。当然也可以使用自己的内网域名解析或花生壳等域名解析服务。

用户登录后，可以 **在线保存文件到服务器**,而且还有 **文件历史**


新注册用户的文件历史:<br>
需要管理员：admin@topology.com在【个人中心】- 【运营管理】给新用户设置为VIP

2. 如何使用自己的域名【my.com】

首先，映射出8200和8210端口，分别对应登录服务和绘图服务。<br>
然后，反向代理【my.com】到8210， account.【my.com】到8200即可。

<br>
<br>
参考nginx配置如下：

<div class="try-code">

```javascript
server {
    listen       80;
    server_name  account.topology.com;
    tcp_nodelay on;

    location / {
         proxy_pass http://localhost:8200;
         proxy_set_header Host $host;
         proxy_set_header X-Forwarded-For $remote_addr;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection "upgrade";
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }   
}
```
</div>

## 关于新版本

le5le/topology-app从0.2版本开始，为企业版，暂不支持免费获取。 < 0.2版本不受影响。<br>
企业用户如果拿到的是.tar镜像文件，请手动加载镜像到本地，例如：<br>
docker load -i topology-app.0.2.tar


## 企业安装版视频教程

https://v.youku.com/v_show/id_XNDkzODM2MTI0MA==.html