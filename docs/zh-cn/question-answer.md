## 为什么选择JavaScript语言?
* 简单易上手，资料多
* 会基本语法和函数调用就可以编程
* 开发工具成熟易上手
* JS教程：https://www.runoob.com/js/js-tutorial.html


## 特性
- 脚本和UI可以进行任意交互
- 所有的服务都变成可选，对应用测试或者游戏测试用户比较友好
- 重写了找色函数，支持多方向查找
- 游戏测试用户可以不必要开启无障碍，只用代理服务也能完成自动化测试

## 保证EC后台允许运行
- 方案来源dontkillmyapp.com，可以按照一下链接内容进行设定，保证EC长时间运行，目前为英文版本，暂且观看，等待翻译
- OnePlus 设置地址: https://dontkillmyapp.com/oneplus
- Huawei 设置地址: https://dontkillmyapp.com/huawei
- Samsung 设置地址: https://dontkillmyapp.com/samsung
- Xiaomi 设置地址: https://dontkillmyapp.com/xiaomi
- Meizu 设置地址: https://dontkillmyapp.com/meizu
- Asus 设置地址: https://dontkillmyapp.com/asus
- Wiko 设置地址: https://dontkillmyapp.com/wiko
- Lenovo 设置地址: https://dontkillmyapp.com/lenovo
- OPPO 设置地址: https://dontkillmyapp.com/oppo
- ASOP 设置地址: https://dontkillmyapp.com/google

- 以下是部分翻译：
- 长时间运行任务Android可能会杀死进程，可以在EC系统设置中设定重启自动运行脚本弥补该问题
- 以下的操作可能会帮助你
    - 禁用应用的电池优化
    - 确保Android设置->应用程序->任务器->电池->后台活动选项已启用（此设置可能位于不同原始设备制造商的其他位置，但这是一个非常重要的设置，可能在某些设备上默认禁用）
    - 如果要在屏幕关闭时使用功能，请确保“首选项”->“监视”->“显示关闭监视”中的选项已针对所需的条件启用。
    - 确保禁用任何“省电”应用程序，如Greenify等
    - 在Sasmung设备上，进入Android设置->设备维护->电池->未监控的应用程序->添加EC和所有自动应用程序
    - 在小米设备上，启用应用程序的“自动启动”和“其他权限”下的“锁屏显示”
    - 在小米设备上，禁用应用程序的自动备份，因为这个过程会杀死所有正在运行的应用程序，包括EC。
    - 在小米设备上，启用“系统设置”中应用程序“附加权限”部分中的所有可用选项。
    - 在华为设备上，单击“最近”菜单中EC的锁定
    - 在华为设备上，在EC的电池设置中手动管理电池优化
    - 在华为设备上，禁用Powergenie，它可以阻止应用程序在后台运行。尝试进入设置->电池，然后点击右上角的齿轮。禁用“关闭过度耗电的应用程序”。或使用ADB：
    - 要禁用powergenie，请使用：adb shell pm disable user com.huawei.powergenie
    - 启用powergenie:adb shell pm enable com.huawei.powergenie
    - 在联想设备（可能是其他设备）上，您必须禁用EC的“禁用自动启动”选项。
    - 如果您打算使用插件，禁用省电模式可能会有助于解决一些问题

## 5.8.0 新增命令
- 启动脚本
- 执行sdcard的iec文件: adb shell am startservice -a TESTCASE.EXEC.START.ACTION -n com.gibb.easyclick/com.gibb.abtest.testcase.service.MainService --es path /sdcard/a.iec
- 执行sdcard的js文件: adb shell am startservice -a TESTCASE.EXEC.START.ACTION -n com.gibb.easyclick/com.gibb.abtest.testcase.service.MainService --es path /sdcard/a.js
- 停止脚本 : adb shell am startservice -a TESTCASE.EXEC.STOP.ACTION -n com.gibb.easyclick/com.gibb.abtest.testcase.service.MainService




## UI参数未更新或者混乱

* 该问题是因为经常换tag导致，可以在手机上清空EC调试程序缓存，正式打包后不会出现该问题

## IDEA 新建工程问题

### 将模块添加到项目中时出错

- 错误信息：Argument for @NotNull parameter 'file' of com/intellij/openapi/roots/impl/ContentEntryImpl.addSourceFolder must not be nul
- 解决：关闭idea和adb.exe进程之后，再重新打开就ok了 或者idea换2019.3的版本
- 或者使用管理员方式运行IDEA，有可能是存在权限问题


## 函数不生效
* 使用代理模块的函数不生效，请检查运行模式是否是代理模式

## 开发工具连接不到手机?
* 这种情况是因为adb连接不成功导致的，adb连接需要满足一下几个条件：
    * 手机开启usb调试模式
    * 手机通过数据线连接上电脑
    * 没有其他占用adb工具的程序

## 链接设备问题
- 比如电脑休眠以后连不上，重启就好，模拟器或者个别机型连不上，先下载ec.apk安装以后再链接,就好了  
- 还有就是IDE开时间长了或者开好几个模拟器，连不上，重启开发工具试试

## 手机连接后，拔掉重新插入不识别手机？
- 1、尝试使用进程管理器杀死adb进程，再次连接
- 2、使用360等手机助手连接一次，如果助手连接上，在使用开发工具连接；如果助手连接不上，可能是驱动问题


## WIFI直连设备
- 1、请在手机上按照EC调试程序，如果没有安装，直接进入第2步，会弹出二维码扫描安装EC调试程序
- 2、EasyClick 开发工具 - 设备连接 - WIFI直连，输入手机的IP地址即可，在EasyClick日志控制台可以看到详细日志


## 抓取节点
- 1、链接上模拟器后一直提示节点服务提示没开启
    - 节点服务与运行模式有关系，开发阶段请先激活设备，EC调试程序会自动启动节点服务
       ，另外可以手动开启无障碍服务，并且在EC调试程序中使用无障碍的运行模式
    - 代理模式下，由于启动代理服务需要点时间，一般在10 s内，请注意观察EasyClick控制台日志启动 "正在初始化环境" 字样   
- 2、截图问题
    - EC开发工具会有多种截图模式，WIFI直连的情况下，抓取节点会要求获取截屏权限，请注意手机设备的提示并授权

## Adb被占用解决办法
* 手机开启usb调试模式
* 关闭其他占用adb的软件
* 用任务管理器结束掉所有的ADB，确保手机没有占用adb的命令
* 电脑上的各种杀毒管家，刷机助手等也会占用adb，确保已经关闭


## 部分手机使用utils模块打开APP失效
- 例如小米手机权限问题导致无法使用openAppByName等打开APP函数，请到权限管理允许启动三方应用权限，或者允许全部的权限
- OPPO 解决方法： https://www.jianshu.com/p/5f6d8379533b
- 安卓10无法后台预览或者打开应用，可以给EC调试版本赋予悬浮窗权限，或者在脚本中调用requestFloatViewPermission(10);方法请求并赋予权限
- 荣耀系列打开允许关联启动 
<br/>
<img src='zh-cn/images/ry-open-activity.png' width='300' >

## 打开三方APP函数不生效
- 小米系统请允许 "后台弹出界面"，其他的如果有限制也可以自行百度解决
- 具体参考：https://blog.csdn.net/shenshibaoma/article/details/103909618
- 或者http://www.360doc.com/content/19/0814/09/26794451_854750882.shtml



## 屏幕映射不成功ui-js-inter
- 由于机型兼容性问题，可能导致屏幕映射不成功，不影响节点获取，两个功能是独立的。 可以用三方的，比如 qtscrcpy，或者scrcpy
        
## 如何开启 WIFI ADB
- 请参考教程：https://www.jianshu.com/p/a9543f2e89de

> ```
> 整理一下命令，方便使用
> usb 连接手机 
> adb tcpip 5555
> adb shell ifconfig wlan0
> adb connect 手机ip地址 
> ```


## 小米之类的手机点击没反应
- 因为开发者选项中的【USB 调试（安全设置）】没有开启，开启即可
- 开启地址参考：https://blog.csdn.net/jackeny37/article/details/74516350


## 打包后运行不能点击 
- 如果EC调试版本和打包的APP同时存在，两个APP运行模式不同，可能有冲突，卸载EC调试版本即可
 

## 3.x 与 4.x 迁移
- 3.X版本自动化服务是脚本运行的必要条件，4.x 将自动化服务作为非必要条件，在4.x中使用自动化服务请自行在脚本中判断或者启动服务环境，
[启动环境](/zh-cn/funcs/global/global.md#startenv)和[判断环境](/zh-cn/funcs/global/global.md#isServiceOk)


## 使用图色函数截不到图或者找色找图不生效
- 基于安卓原生的机制，在申请屏幕截图权限，如果屏幕没有任何刷新，图像队列就没有图，会导致该情况发生
- 建议解决办法，在申请屏幕截图权限后，对屏幕进行刷新，例如点击、滑动等操作，即可刷新图像队列并取到图片
- 在代码中写for循环，多试试截图

## 截图有色差
- 由于系统的api可能会有色差，如果是代理模式，可以使用captureFullScreenEx截屏以消除色差

## IDEA截不到图
- 请在截图的时候，如果手机上有授权框弹出，请进行授权并勾选不再提示，保证后续每次都是自动授权的 

## 远程调试
- 请参考 [远程调试](/zh-cn/funcs/devtools/dev-tools-remote.md)


## JSON.stringify 内存溢出
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
        
## java-js 插件或者混合项目运行闪退
- 确认jdk是1.8版本的
- 确认项目不包含中文等特殊字符
- 确认项目的名称和路径是一致

## Android10以上获取不到剪贴板数据
- 在Android10上面，除非应用是默认输入法 (IME) 或是目前处于焦点的应用，否则它无法访问 Android 10 或更高版本平台上的剪贴板数据
- 解决方法 ： 设置EC调试程序为默认的输入法即可，打包正式运行请将打包的APP设置为默认输入法


