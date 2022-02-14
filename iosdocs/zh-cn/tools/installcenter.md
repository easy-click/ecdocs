### 中控用途

> 中控是链接手机和开发工具的中间桥梁，也是核心部件



### 下载中控

> 请到资源区的网盘，下载中控程序
>
> 该程序支持Windows，macos，linux等系统
>
> 请下载对应的版本, 解压到英文目录，中文目录可能会有不可预计的问题



<img src="zh-cn/images/image-20220208110050592.png" alt="image-20220208110050592" style="zoom:50%;" />



### 启动中控

> 这里以mac系统为例子，Windows系统类似

<img src="zh-cn/images/image-20220208110911832.png" alt="image-20220208110911832" style="zoom:50%;" />

- config: 是配置文件夹

- ecios: 命令行程序 一般用不上
- ios-server1.0.0 :  中控的二进制文件，直接运行



> Windows直接双击 ios-server1.0.0.exe 就可以运行
>
> mac、linux用控制台执行
>
> 运行成功，在浏览器打开 http://127.0.0.1:8019 ，即可访问

<img src="zh-cn/images/image-20220208111154647.png" alt="image-20220208111154647" style="zoom:50%;" />

### 中控配置(可选)

- 如果你修改了agent的源码bundleid，这里一定要进行修改config文件的`bundleID`属性，填写agent的bundleID的前缀

- 记事本或者editpad++编辑 `config/config.toml`

> ```toml
> #网页服务端口号
> [server]
> Address = ":8019" 
> ## JDK 和 bundleID 配置
> [ios]
> ## java的home，不要填写到bin目录
> jdkHome = ""
> ## 执行器的jar文件，不用填写
> jar = ""
> ## 运行agent的 bundleID 前缀，会自动根据这个查找启动代理服务
> bundleID = "com.ieasyclick.auto.ios"
> ```





### 启动iTunes或爱思助手

- 由于ios的封闭性，请在 Windows上安装`iTunes`或者`爱思助手`，并打开，保证能找到iphone设备

### 登录中控

- 启动中控后，默认地址是 http://127.0.0.1:8019
- 默认是需要登录的，如果你是开发者 请选择开发者身份注册并登录
- 如果是你是普通用户 请选择普通用户注册并登录
- 如果显示`当前是测试模式，无需注册，用户名和密码均是 admin `，则无需注册，使用admin登录即可



<img src="zh-cn/images/image-20220208112147758.png" alt="image-20220208112147758" style="zoom:20%;" />

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