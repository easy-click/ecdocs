
# 远程调试

## 先在手机上安装EC调试版本

- 菜单栏-EasyClick开发工具-设备连接-扫码安装APK
- 可以下载安装或者扫码安装

## 开启远程调试
- 菜单栏-EasyClick开发工具-设备连接-远程调试
- 在弹出框中，输入本地的端口，默认是 10825，点击确定，开启本地端口，注意观察EasyClick运行日志栏

## 路由器暴露端口

- 默认路由器地址一般是 ：http://192.168.1.1，本文档依次为例，路由器是TPLINK，在浏览器输入网址：http://192.168.1.1
- 找到虚拟服务器

<img src='/zh-cn/images/remote_1.png' width='300' >

- 找到虚拟服务器

<img src='/zh-cn/images/remote_2.png' width='300' >

- 找到外网IP

<img src='/zh-cn/images/remote_3.png' width='300' >

## 在手机上EC进行连接
- 在手机上打开EC调试程序

- 进入远程连接页面 

<img src='/zh-cn/images/remote_5.png' width='300' >



- 输入信息进行连接 

<img src='/zh-cn/images/remote_6.png' width='300' >


## FRP反向代理
- 使用FRP软件进行反向代理，需要将电脑端口映射到服务器，然后手机连接服务器IP即可，这样就不用路由器IP了