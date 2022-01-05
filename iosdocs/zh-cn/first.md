## 1、安装插件

- 到资源区 或者群文件下载 iOS-EasyClickDev-idea 开头的开发插件
- IDEA支持 2019.1.1 - 2021.1.3 版本
- IDEA安装插件请看 https://blog.csdn.net/qq_39597203/article/details/88683118

## 2、新建工程

- ios的开发和安卓的开发采用的是多模块方式
- 先打开一个空文件夹
  - <img src="zh-cn/images/image-20220105095538754.png" alt="image-20220105095538754" style="zoom:25%;" />
- 右键选择新建module
  - <img src="zh-cn/images/image-20220105095622057.png" alt="image-20220105095622057" style="zoom:25%;" />



- 选择ios项目，输入项目名称，选择next
  - <img src="zh-cn/images/image-20220105095702169.png" alt="image-20220105095702169" style="zoom:25%;" />
- 选择链接设备，注意，链接设备前，请启动中控，用于中转链接
  - <img src="zh-cn/images/image-20220105095753431.png" alt="image-20220105095753431" style="zoom:25%;" />









## 3、 启动中控和签名

#### 必要安装软件

- 由于ios的封闭性，请在pc上安装*iTunes*或者爱思助手，并打开，保证能找到iphone设备

### 启动中控程序

- 中控程序支持mac，linux，pc，树莓派等x86和arm设备
- 请大家根据实际情况选择，这里已win为例子

- win双击这个文件即可运行
- <img src="images/image-20220105100645422.png" alt="image-20220105100645422" style="zoom:25%;" />

### ipa签名

- 由于ios封闭性，免越狱的需要自行签名才能进行正常的安装
- 请打开爱思助手，选择工具箱，选择ipa签名，具体签名请看：https://www.i4.cn/news_detail_38195.html
- 原始ipa在中控程序 config/easyclick.ipa 文件

- 签名完成后，请用爱思助手安装ipa到手机上



## 4、链接中控开发

1、开发插件安装完毕

2、ipa签名并安装成功

3、中控启动成功

- 链接

<img src="zh-cn/images/image-20220105095753431.png" alt="image-20220105095753431" style="zoom:25%;" />

- 默认地址无需修改，除非你修改了中控的端口

<img src="zh-cn/images/image-20220105101413477.png" alt="image-20220105101413477" style="zoom:25%;" />

- 点击确定，就能看到链接状态了