## 界面环境

### 设备端启动

- 设备端是指挂载了iPhone手机的电脑设备
- 下载中控重新并安装打开，进入Xcode远程调试选项
- <img src="zh-cn/images/image-20220416095051551.png" alt="image-20220416095051551" style="zoom:50%;" />
- 设置端口并保存，点击开启程序，等带运行状态变成正常
- 当前的端口（例如: 8999）需要暴露到公网，可以使用花生壳暴露在互联网，让xcode端链接上来
- 花生壳教程 ： https://www.bilibili.com/video/BV1F34y147Ky?p=6
- 有自建的服务器，可以使用frp进行内网穿透，https://github.com/fatedier/frp/releases



### xcode端启动

- 下载中控程序并安装打开，这里必须是mac系统才行
- 进入Xcode远程调试选项
- <img src="zh-cn/images/image-20220416094437335.png" alt="image-20220320213338751" style="zoom:50%;" />
- 输入设备端端口地址，就是花生壳暴露的地址，域名或者IP都行，例如 122.22.33.22:8999
- 填写mac电脑的密码，然后点击保存
- 点击开启程序，等待运行状态变成正常即可

### XCode调试

- 以上动作都完成后，进入[安装代理IPA](zh-cn/tools/signagent)流程，就可以看到远程的手机了，按照正常的安装流程即可远程安装IPA



## 终端模式启动

### 设备端启动

- 网盘下载 转发器
- <img src="zh-cn/images/image-20220416095855116.png" alt="image-20220416095855116" style="zoom:50%;" />
- 解压出来，不要带中文路径，打开终端并且使用cd命令，进入iosforward文件夹
- 在终端下输入命令: ios-forward -mode=dc -p=8992  ，演示是mac电脑，win电脑是 ios-forward.exe -mode=dc -p=8992
- <img src="zh-cn/images/image-20220416100124057.png" alt="image-20220416100124057" style="zoom:50%;" />
- -mode=dc 代表是device client，设备端， -p=8992代表启动端口在8992，端口可以更改



### xcode端启动

- 网盘下载转发器并解压，不要带中文路径，这必须在mac系统上进行
- 打开终端并且使用cd命令，进入iosforward的macos文件夹
- 在终端输入命令: sudo ios-forward -mode=xc -p=8988 -address=122.111.111.111:8999
- <img src="zh-cn/images/image-20220416100705989.png" alt="image-20220416100705989" style="zoom:50%;" />
- -mode=xc 代表是xcode client，xcode端， -p代表运行端口，-address代表设备端的地址
- 如果远程连接不上会有链接失败字样
- 所有端启动后，正常进入[安装代理IPA](zh-cn/tools/signagent)流程，就可以看到远程的手机了，按照正常的安装流程即可远程安装IPA



