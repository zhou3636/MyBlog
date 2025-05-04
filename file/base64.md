## 在Windows CMD中使用Base64编解码  
### 创建1.txt然后输入内容，窗口内CMD执行命令得到2.txt
### 要将文件编码为Base64，可以使用以下命令  
### `certutil -encode 1.txt 2.txt`  
### 要将 Base64 编码的文件解码，可以使用以下命令：  
### `certutil -decode 1.txt 2.txt`  
