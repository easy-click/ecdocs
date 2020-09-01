# 什么是中控
- 中控平台是一个统一管理和控制设备的平台

# 中控对接

- 已有的中控平台如何对接到EC程序中?

- EC开放的接口均使用HTTP POST方式即可请求到，参数一律使用JSON，如果你不太理解POST JSON，请看这个文章：
https://www.cnblogs.com/bookyao/p/12134438.html
以及java如何进行POST JSON: 
https://blog.csdn.net/qq_26975307/article/details/82713725

# EC在手机端远程地址是什么
- EC在手机端的端口是 20390

# USB连接设备模式
- 如果是USB直接连接设备的，请使用adb forward命令将EC端口转发到电脑端口，教程：https://www.jianshu.com/p/63c4d5c31909

- 例如将设备的20390转发到电脑的20390端口上：

> ```
> adb -s 手机的序列号1 forward tcp:20390 tcp:20390
> ```

- 转发端口到电脑后，可以在浏览器中打开 http://127.0.0.1:20390    就可以看到OK几个字样，代表成功转发

- 如果有多台设备，可以将本地端口依次递增

> ```
> adb -s 手机的序列号x forward tcp:20390 tcp:20390
> adb -s 手机的序列号1 forward tcp:20391 tcp:20390
> adb -s 手机的序列号2 forward tcp:20392 tcp:20390
> adb -s 手机的序列号3 forward tcp:20393 tcp:20390
> ```

- 如何获取手机序列号教程 https://www.cnblogs.com/yjlch1016/p/8512592.html

   
# WIFI连接模式
- 如果中控和设备在同一局域网，可以直接找到手机IP，直接请求手机到20390端口


# 按键精灵调用

- 如果你使用按键精灵或者其他手机软件调用EC，可以直接在手机上请求 http://127.0.0.1:20390
- 如果是按键精灵调用EC，请使用开发工具打企业版本的APK包

# 接口返回
接口返回示例：
> ```javascript
> {
>     "code":1,
>     "msg":"",
>     "data":true
> }
> ```

- code： 代表服务接口是否正常，1 代表正常服务，0 代表失败，如果为0的情况下，请查看msg的消息
- msg：接口返回的错误消息
- data：实际执行函数的返回值，可能是字符串，布尔型，护着数据JSON数据，这个请根据实际接口返回进行处理




# 中控接口
- [EC状态控制接口](/zh-cn/zk/zk-ec-state.md)
- [全局节点模块接口](/zh-cn/zk/zk-node.md)
    * [日志接口](/zh-cn/zk/global/zk-global-log.md)
    * [节点服务接口](/zh-cn/zk/global/zk-node-service.md)
    * [点击动作接口](/zh-cn/zk/global/zk-global-click.md)
    * [多点触摸动作接口](/zh-cn/zk/global/zk-global-multitouch.md)
    * [滑动动作接口](/zh-cn/zk/global/zk-global-swipe.md)
    * [拖动动作接口](/zh-cn/zk/global/zk-global-drag.md)
    * [输入动作接口](/zh-cn/zk/global/zk-global-input.md)
    * [节点操作接口](/zh-cn/zk/global/zk-global-node.md)
    * [系统按键接口](/zh-cn/zk/global/zk-global-systemkey.md)
    * [通知栏接口](/zh-cn/zk/global/zk-global-notice.md)
    * [悬浮窗接口](/zh-cn/zk/global/zk-global-floatview.md)
- [代理事件模块接口](/zh-cn/zk/zh-agent.md)
- [图色模块接口 - 开发中](/zh-cn/zk/zh-image.md)
- [设备模块接口 - 开发中](/zh-cn/zk/zh-device.md)
- [文件模块接口 - 开发中](/zh-cn/zk/zh-file.md)
- [网络模块接口 - 开发中](/zh-cn/zk/zh-http.md)
- [常用工具模块接口 - 开发中](/zh-cn/zk/zh-utils.md)
- [Shell命令模块接口](/zh-cn/zk/zh-shell.md)
- [Sqlite模块接口 - 开发中](/zh-cn/zk/zk-sqlite.md)
