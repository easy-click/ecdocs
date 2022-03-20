### 中控程序用途

> 中控程序是链接桥接程序和开发工具的中间桥梁，也是核心部件



### 下载中控

> 请到资源区的网盘，下载中控程序
>
> 该程序支持Windows，macos，linux等系统
>
> 请下载对应的版本, 解压到英文目录，中文目录可能会有不可预计的问题



<img src="zh-cn/images/image-20220320214246672.png" alt="image-20220208110050592" style="zoom:50%;" />

### 启动中控程序

> 这里以mac系统为例子，Windows系统类似

<img src="zh-cn/images/image-20220320214430399.png" alt="image-20220208110911832" style="zoom:50%;" />



- runtime_config: 是配置文件夹，可以更改站点名称
- OcrLiteNcnn: OCR类库
- win-start-ios-center.bat：Windows的启动中控程序文件，直接双击就能运行
- linux-start-ios-center.sh：linux的启动中控程序文件，需要在终端运行
- macos-start-ios-center.sh：macos的启动中控程序文件，需要在终端运行
- mac下没有带jdk，可以自己安装jdk1.8，Windows和linux都随程序带了jdk1.8版本



> Windows直接双击 win-start-ios-center.bat 就可以运行
>
> mac、linux用控制台执行
>
> 运行成功，在浏览器打开 http://127.0.0.1:8019 ，即可访问
>
> 第一次打开会复制opencv类库 可能慢一些，不用担心





<img src="zh-cn/images/image-20220320214851172.png" alt="image-20220320214851172" style="zoom:50%;" />



### 中控配置(可选)

- 如果你修改了agent的源码bundleid，这里一定要进行修改`bundleID`属性，填写agent的bundleID的前缀
- 登录到中控系统，在首页即可编辑

<img src="zh-cn/images/image-20220320215029162.png" alt="image-20220320215029162" style="zoom:50%;" />



### 登录中控

- 启动中控后，默认地址是 http://127.0.0.1:8019
- 默认是需要登录的，如果你是开发者 请选择开发者身份注册并登录
- 如果是你是普通用户 请选择普通用户注册并登录
- 如果显示`当前是测试模式，无需注册，用户名和密码均是 admin `，则无需注册，使用admin登录即可



<img src="zh-cn/images/image-20220320215118697.png" alt="image-20220320215118697" style="zoom:50%;" />



### 测试自动化启动状态(可选)

> 如果设备链接了，中控的设备监控会自动出现
>
> 选择设备 - 操作 - 测试自动化状态 

<img src="zh-cn/images/image-20220208112514521.png" alt="image-20220208112514521" style="zoom:50%;" />



> 点击测试启动自动化
>
> 一般很快就可以启动

<img src="zh-cn/images/image-20220208112853175.png" alt="image-20220208112853175" style="zoom:50%;" />



### 执行脚本

> 在脚本列表界面，上传编译好的iec
>
> 在设备监控，点击`执行脚本`按钮，选择设备，点击`执行`按钮，设备会开始执行iec文件