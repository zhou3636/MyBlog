安装`apt-get install ufw`  
开启`ufw enable `  
关闭`ufw disable`  
启动`ufw status`  
重启`ufw reload`  
开放22端口`ufw allow 22`  
关闭`ufw delete allow 21`  
拒接所有外来`ufw default deny`  
开发地址`ufw allow from 0.0.0.0/0 `  
开发地址to端口`ufw allow from 192.168.121.2 to any port 3306`
