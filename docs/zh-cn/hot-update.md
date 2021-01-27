## 什么是热更新
- 热更新一般用于不用安装程序即可将关键的代码进行更新
- EC的热更新主要用于更新打包后的自动化测试脚本
- !!![沙雕警告]!!!热更的是编译的iec文件,不是打包的脚本apk

## EC如何热更新

- 打开工程下面的update.json，内容如下:

> ```json
>!!![沙雕警告]!!!热更的是编译的iec文件,不是打包的脚本apk
> {
>    "update_url": "http://baidu.com/update",
>    "version": "1.0.0"
>  }
> 
> ```

- 参数解析
    - update_url: 代表服务端的更新接口，需要自己编写服务端接口
    - version: 代表当前脚本的版本号

## EC 加载新包

### 客户端请求
- 以上配置好后，打包运行，程序会自动使用GET方式请求 update_url对应的地址并且会带上参数；
    例如 ：http://baidu.com/update?version=1.0.0   请自行在服务端做版本比较

### 服务端返回   
- 服务端返回格式如下：
> ```json
>!!![沙雕警告]!!!热更的是编译的iec文件,不是打包的脚本apk
> {
>    "download_url": "http://baidu.com/aaa.iec",
>    "version": "1.1.0",
>   "dialog":true,
>   "msg": "优化部分问题",
>   "force": false
>  }
> 
> ```
- download_url： 代表新包的下载地址
- version：代表新包的版本号
- 返回这样的格式的JSON后，EC会下载最新的IEC包并加载使用。

- 5.0.0.RC3 新增参数
    - dialog: 代表是否用对话框的形式展示，true 代表是对话框，false代表不是
    - msg: 对话框中要显示的消息
    - force : 代码对话框模式下是否强制更新，true 代表强制更新，无法取消，false 代表不是强制更新

    