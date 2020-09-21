# 为什么选择JavaScript语言?
* 简单易上手，资料多
* 会基本语法和函数调用就可以编程
* 开发工具成熟易上手
* JS教程：https://www.runoob.com/js/js-tutorial.html

# 5.0与老版本的不同
## 更改
- 取消了tab.ini多标签布局，使用ui.js中的ui.layout进行替代，
    参考 [多标签支持](/zh-cn/funcs/ui-js-template.md#多tab标签支持)

## 特性
- 脚本和UI可以进行任意交互
- 所有的服务都变成可选，对应用测试或者游戏测试用户比较友好
- 重写了找色函数，支持多方向查找
- 游戏测试用户可以不必要开启无障碍，只用代理服务也能完成自动化测试


# UI参数未更新或者混乱

* 该问题是因为经常换tag导致，可以在手机上清空EC调试程序缓存，正式打包后不会出现该问题

# IDEA 新建工程问题

## 将模块添加到项目中时出错

- 错误信息：Argument for @NotNull parameter 'file' of com/intellij/openapi/roots/impl/ContentEntryImpl.addSourceFolder must not be nul
- 解决：关闭idea和adb.exe进程之后，再重新打开就ok了 或者idea换2019.3的版本
- 或者使用管理员方式运行IDEA，有可能是存在权限问题


# 函数不生效
* 使用代理模块的函数不生效，请检查运行模式是否是代理模式

# 开发工具连接不到手机?
* 这种情况是因为adb连接不成功导致的，adb连接需要满足一下几个条件：
    * 手机开启usb调试模式
    * 手机通过数据线连接上电脑
    * 没有其他占用adb工具的程序


# 链接设备问题
- 比如电脑休眠以后连不上，重启就好，模拟器或者个别机型连不上，先下载ec.apk安装以后再链接,就好了  
- 还有就是IDE开时间长了或者开好几个模拟器，连不上，重启开发工具试试

# 手机连接后，拔掉重新插入不识别手机？
- 1、尝试使用进程管理器杀死adb进程，再次连接
- 2、使用360等手机助手连接一次，如果助手连接上，在使用开发工具连接；如果助手连接不上，可能是驱动问题


# WIFI直连设备
- 1、请在手机上按照EC调试程序，如果没有安装，直接进入第2步，会弹出二维码扫描安装EC调试程序
- 2、EasyClick 开发工具 - 设备连接 - WIFI直连，输入手机的IP地址即可，在EasyClick日志控制台可以看到详细日志


# 抓取节点
- 1、链接上模拟器后一直提示节点服务提示没开启
    - 节点服务与运行模式有关系，开发阶段请先激活设备，EC调试程序会自动启动节点服务
       ，另外可以手动开启无障碍服务，并且在EC调试程序中使用无障碍的运行模式
    - 代理模式下，由于启动代理服务需要点时间，一般在10 s内，请注意观察EasyClick控制台日志启动 "正在初始化环境" 字样   
- 2、截图问题
    - EC开发工具会有多种截图模式，WIFI直连的情况下，抓取节点会要求获取截屏权限，请注意手机设备的提示并授权

# Adb被占用解决办法
* 手机开启usb调试模式
* 关闭其他占用adb的软件
* 用任务管理器结束掉所有的ADB，确保手机没有占用adb的命令
* 电脑上的各种杀毒管家，刷机助手等也会占用adb，确保已经关闭


# 部分手机使用utils模块打开APP失效
- 例如小米手机权限问题导致无法使用openAppByName等打开APP函数，请到权限管理允许启动三方应用权限，或者允许全部的权限
- OPPO 解决方法： https://www.jianshu.com/p/5f6d8379533b
- 安卓10无法后台预览或者打开应用，可以给EC调试版本赋予悬浮窗权限，或者在脚本中调用requestFloatViewPermission(10);方法请求并赋予权限

# 屏幕映射不成功
- 由于机型兼容性问题，可能导致屏幕映射不成功，不影响节点获取，两个功能是独立的。 可以用三方的，比如 qtscrcpy，或者scrcpy
        
# 如何开启 WIFI ADB
- 请参考教程：https://www.jianshu.com/p/a9543f2e89de

> ```
> 整理一下命令，方便使用
> usb 连接手机 
> adb tcpip 5555
> adb shell ifconfig wlan0
> adb connect 手机ip地址 
> ```

# 打开三方APP函数不生效
- 小米系统请允许 "后台弹出界面"，其他的如果有限制也可以自行百度解决
- 具体参考：https://blog.csdn.net/shenshibaoma/article/details/103909618
- 或者http://www.360doc.com/content/19/0814/09/26794451_854750882.shtml

# 小米之类的手机点击没反应
- 因为开发者选项中的【USB 调试（安全设置）】没有开启，开启即可
- 开启地址参考：https://blog.csdn.net/jackeny37/article/details/74516350


# 打包后运行不能点击 
- 如果EC调试版本和打包的APP同时存在，两个APP运行模式不同，可能有冲突，卸载EC调试版本即可
 

# 3.x 与 4.x 迁移
- 3.X版本自动化服务是脚本运行的必要条件，4.x 将自动化服务作为非必要条件，在4.x中使用自动化服务请自行在脚本中判断或者启动服务环境，
[启动环境](/zh-cn/funcs/global/global.md#startenv)和[判断环境](/zh-cn/funcs/global/global.md#isServiceOk)


# 使用图色函数截不到图或者找色找图不生效
- 基于安卓原生的机制，在申请屏幕截图权限，如果屏幕没有任何刷新，图像队列就没有图，会导致该情况发生
- 建议解决办法，在申请屏幕截图权限后，对屏幕进行刷新，例如点击、滑动等操作，即可刷新图像队列并取到图片
- 在代码中写for循环，多试试截图

# 截图有色差
- 由于系统的api可能会有色差，如果是代理模式，可以使用captureFullScreenEx截屏以消除色差

# IDEA截不到图
- 请在截图的时候，如果手机上有授权框弹出，请进行授权并勾选不再提示，保证后续每次都是自动授权的 

# 远程调试
- 请参考 [远程调试](/zh-cn/funcs/devtools/dev-tools-remote.md)


# JSON.stringify 内存溢出
- 如果有以下错误，请检查一下要转换的对象中是否有java的string，解决方法将原来的string转为js的字符串
 例如 s= s +""  这样既可
    
    STACK_TRACE=java.lang.StackOverflowError: stack size 1039KB
        at java.lang.reflect.Method.invoke(Native Method)
        at org.mozilla.javascript.MemberBox.invoke(Unknown Source:4)
        at org.mozilla.javascript.JavaMembers.get(Unknown Source:58)
        at org.mozilla.javascript.NativeJavaObject.get(Unknown Source:16)
        at org.mozilla.javascript.ScriptableObject.getProperty(Unknown Source:1)
        at org.mozilla.javascript.NativeJSON.str(Unknown Source:7)
        at org.mozilla.javascript.NativeJSON.jo(Unknown Source:63)
        at org.mozilla.javascript.NativeJSON.str(Unknown Source:237)
        at org.mozilla.javascript.NativeJSON.jo(Unknown Source:63)
