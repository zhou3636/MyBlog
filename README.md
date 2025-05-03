安装`apt-get install ufw`  
开启`ufw enable `  
关闭`ufw disable`  
启动`ufw status`  
重启`ufw reload`  
`ufw allow 22`  
`ufw delete allow 21`  
拒接所有外来`ufw default deny`  
指定开放(关闭)8001的tcp协议`ufw  (delete)  allow 8001/tcp`  
`ufw allow from 0.0.0.0/0 `  
`ufw allow from 192.168.121.2 to any port 3306`
