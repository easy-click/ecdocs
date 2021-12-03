

## 安装

### 必备的环境

- linux操作系统，ubuntu 18.04或者centos之类，windows也可以
- mysql 5.7
- redis 4
- supervisor进程守护
- 可以使用宝塔一键安装mysql，redis，以下的教程都以宝塔为基础



### 安装mysql，nginx, redis

> 1、进入宝塔,如果弹出以下窗口选择myql5.7，点击安装

<img src="/docs/zh-cn/ecloud2/images/image-20211203144143477.png" alt="image-20211203144143477" style="zoom: 33%;" />

> 2、如果没就到软件管理，搜索nginx，mysql，phpmyadmin进行安装
>
> 3、安装redis，进入软件商店，搜索redis

> 4、安装supervisor进程守护，进入软件商店，搜索supervisor
>
> 

<img src="/docs/zh-cn/ecloud2/images/image-20211203144321514.png" alt="image-20211203144321514" style="zoom:33%;" />

> 安装成功后点击在首页显示



<img src="/docs/zh-cn/ecloud2/images/image-20211203144420239.png" alt="image-20211203144420239" style="zoom:33%;" />

###

### 下载云控程序

> 1、群文件或者网盘中下载ecloud开头的zip包

### 上传云控程序

> 1、先在宝塔的文件管理新建文件夹ecloudgo

<img src="/docs/zh-cn/ecloud2/images/image-20211203144601138.png" alt="image-20211203144601138" style="zoom:33%;" />





> 2、通过宝塔的文件管理上传zip包

<img src="/docs/zh-cn/ecloud2/images/image-20211203144634238.png" alt="image-20211203144634238" style="zoom:33%;" />



> 3、解压二进制文件

<img src="/docs/zh-cn/ecloud2/images/image-20211203145105395.png" alt="image-20211203145105395" style="zoom:33%;" />

<img src="/docs/zh-cn/ecloud2/images/image-20211203145114564.png" alt="image-20211203145114564" style="zoom:33%;" />



### 新建数据库

```xml
前提是mysql redis都安装好了！！！宝塔左上角 橙色中的为 0  代表都安装完成了
```

<img src="/docs/zh-cn/ecloud2/images/image-20211203145436463.png" alt="image-20211203145436463" style="zoom:25%;" />



> 新建一个用户名、密码、数据库名都为ecloudgo的数据库实例



<img src="/docs/zh-cn/ecloud2/images/image-20211203145825106.png" alt="image-20211203145825106" style="zoom:33%;" />



> 数据库权限授权
>
> root用户进入phpmyadmin，点击phpMyAdmin按钮



<img src="/docs/zh-cn/ecloud2/images/image-20211203151414051.png" alt="image-20211203151414051" style="zoom:33%;" />



> 选择phpmyadmin的用户一栏

![image-20211203151451822](/docs/zh-cn/ecloud2/images/image-20211203151451822.png)

> 点击红色框中的编辑权限，然后选择全选

![image-20211203151534953](/docs/zh-cn/ecloud2/images/image-20211203151534953.png)

> 点击执行

![image-20211203151554359](/docs/zh-cn/ecloud2/images/image-20211203151554359.png)

> 变为以下状态就是权限分配成功

![image-20211203151718322](/docs/zh-cn/ecloud2/images/image-20211203151718322.png)

### 编辑数据库配置

> 进入文件管理点击编辑，找到config.toml

![image-20211203145911611](/docs/zh-cn/ecloud2/images/image-20211203145911611.png)

> 看到下面三个选项，全部更改为ecloudgo

<img src="/docs/zh-cn/ecloud2/images/image-20211203150103562.png" alt="image-20211203150103562" style="zoom:33%;" />



### 配置进程启动

> 进入首页，选择supervisor



<img src="/docs/zh-cn/ecloud2/images/image-20211203150553998.png" alt="image-20211203150553998" style="zoom:33%;" />

> 点击添加进程守护



![image-20211203150616509](/docs/zh-cn/ecloud2/images/image-20211203150616509.png)

> 选择目录和执行文件

<img src="/docs/zh-cn/ecloud2/images/image-20211203150723547.png" alt="image-20211203150723547" style="zoom:33%;" />

> 启动成功

![image-20211203150742524](/docs/zh-cn/ecloud2/images/image-20211203150742524.png)

> 日志查看是否成功

![image-20211203150820652](/docs/zh-cn/ecloud2/images/image-20211203150820652.png)

![image-20211203150827519](/docs/zh-cn/ecloud2/images/image-20211203150827519.png)



### 防火墙放行端口

> 新的云控端口是 8098

> 进入宝塔安全菜单，放行 8098端口

如果遇到提示nginx防火墙升级，就进入软件商店进行安装nginx防火墙

<img src="/docs/zh-cn/ecloud2/images/image-20211203151152772.png" alt="image-20211203151152772" style="zoom:33%;" />

<img src="/docs/zh-cn/ecloud2/images/image-20211203151226538.png" alt="image-20211203151226538" style="zoom:33%;" />



> 阿里云放行端口:  https://help.aliyun.com/document_detail/25471.html?spm=a2c6h.13066369.0.0.1eec1ecfVVJqw6&source=5176.11533457&userCode=28kqeewo&type=copy

> 腾讯云放行端口:  https://cloud.tencent.com/developer/article/1841261?from=15425



### 访问云控

用你的 ip:8098 在浏览器打开即可，默认的用户名是admin 默认的密码是 admin123





## 授权



### 网站授权

> 云控是按照设备量授权的，授权请找当地代理商或者q: 2557945562

> 产品序列号在 站点配置 - 站点授权页面

### APK 链接和授权

> 使用调试版本的apk的时候，进入企业云设置，输入远程IP或者域名，点击测试链路

<img src="/docs/zh-cn/ecloud2/images/image-20211203153342198.png" alt="image-20211203153342198" style="zoom:33%;" />

> 使用开发工具打包，无需在apk填写域名
>
> 一定要打包的的时候输入域名，并且打企业版本的包，这里请看云控域名配置章节

> 设备授权

>  进入设备管理-设备列表-未授权设备按钮点击下，再点击分配即可

![image-20211203153609841](/docs/zh-cn/ecloud2/images/image-20211203153609841.png)



## 优化升级

### 升级

> 升级前请备份数据库和文件！！！

1、上传单独的ecloudgo二进制文件到网站根目录

<img src="/docs/zh-cn/ecloud2/images/image-20211203152131132.png" alt="image-20211203152131132" style="zoom:33%;" />

2、上传config中的内容到网站的config文件夹下

3、编辑数据库信息，请看上面的编辑数据库配置

4、配置supervisor，修改为对应的二进制执行文件即可

![image-20211203152321572](/docs/zh-cn/ecloud2/images/image-20211203152321572.png)

> 点击重启

![image-20211203152346117](/docs/zh-cn/ecloud2/images/image-20211203152346117.png)







### 服务器优化

>  部分服务器应对大流量的情况 并未做优化

> 1、请在控制台运行./opt.sh文件
>
> 2、supervisor的配置中新增 一行 minfds=65535 ，主配置和子配置都新增，然后重启云控即可

<img src="/docs/zh-cn/ecloud2/images/image-20211203152851539.png" alt="image-20211203152851539" style="zoom:33%;" />

<img src="/docs/zh-cn/ecloud2/images/image-20211203152918388.png" alt="image-20211203152918388" style="zoom:33%;" />
