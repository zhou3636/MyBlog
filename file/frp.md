## [最新版本下载地址](https://github.com/fatedier/frp)
## 1.服务端fprs.toml
```
bindPort = 7788
auth.method = "token"
auth.token = "设置你的密码"
webServer.addr = "0.0.0.0"
webServer.port = 7799
webServer.user = "设置网页用户名"
webServer.password = "设置网页密码"
```
## 2.客户端fprc.toml
```
user = "hh"
serverAddr = "8.8.8.8"
serverPort = 7788
auth.method = "token"
auth.token = "设置你的密码"

[[proxies]]
name = "alist"
type = "tcp"
localIP = "127.0.0.1"
localPort = 5443
remotePort = 5443
```
## 3.linux服务器配置程序  
安装systemd  
```
apt install systemd
```  
编辑  
```
vi /etc/systemd/system/frps.service
```  
粘贴以下  
```
[Unit]
Description = frps server
After = network.target syslog.target
Wants = network.target
[Service]
Type = simple
#启动frps的命令，需修改为您的frps的安装路径
ExecStart = /opt/frp/frps -c /opt//frp/frps.toml
[Install]
WantedBy = multi-user.target
```
#### 管理frps命令  
```
# 启动frp命令  
systemctl start frps
# 停止frp
systemctl stop frps
# 重启frp
systemctl restart frps
# 查看frp状态
systemctl status frps
# 配置 frps 开机自启
systemctl enable frps
# 禁止开机启动
systemctl disable frps
```
## 4.win客户端配置  
#### CMD运行  
```
frpc.exe -c frpc.toml
```  
#### 后台运行  
--创建`frpc.bat`编辑输入  
```
frpc.exe -c frpc.toml
```  
--创建`frpc.vbs`编辑输入  
```
set ws=wscript.createobject("wscript.shell")  
ws.run "frpc.bat /start",0
```
--双击启动`frpc.vbs`文件
