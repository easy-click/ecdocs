## 说明
- 混合开发是把java和js放在一起编写，js调用java的方法
- 编译后java代码和jar包会变成一个defaultplugin.apk文件作为插件使用
- 本章节主要介绍使用EasyClick 混合开发

## 新建Java-JS混合项目
- 使用IDEA创建项目选择'EasyClick Java-JS混合项目'
- 点击下一步并完成，会自动生成对应的java类和配置信息
<br/>
<br/>
<img src='zh-cn/images/javajs.png' width='400' >

## 目录结构
- src/js/main.js 这个文件是js调用插件相关方法的测试入口
- src/com/ 这个文件夹下面存放的的java源码，PluginClz 类是默认生成的插件入口类
- libs/jarlibs文件夹用于存放三方引用jar包，会被合并到插件中
- libs/solibs 存放so封装的文件，会被编译到插件的 lib 文件夹中
- libs/resources 存放资源的文件，会被编译到插件的 resources 文件夹中
- libs/jslibs 存放JS类库文件，不会编译到插件中，仅用来进行测试和调用

----
- 如果你有jni的调用，请将so文件放到libs/solibs中


<br/><br/>
<img src='zh-cn/images/javajs-2.png' width='400' >

## 配置JDK和输出class目录
- 在项目上点击右键
<br/>
<img src='zh-cn/images/minx-1.png' width='400' >
<br/>
<img src='zh-cn/images/minx-2.png' width='400' >
<br/>
<img src='zh-cn/images/minx-3.png' width='400' >


## 引用android.jar
- 找到android.jar点击右键,选择加入lib
<br/>
<img src='zh-cn/images/addlib-1.png' width='300' ><br/><br/>
- 选择确定
<br/><br/>
<img src='zh-cn/images/addlib-2.png' width='300' ><br/>


## 默认java类 PluginClz
- PluginClz是默认生成的java类
- test 方法是默认生成的默认方法
- 实际调用请看main.js中的调用

## main.js 使用Java
- java编译后是插件形式，插件名称是defaultplugin.apk，请在脚本运行的时候调用 loadDex("defaultplugin.apk");
-  [loadDex 函数](/zh-cn/funcs/global/global.md#loadDex)载入插件
- 然后在使用importClass或者importPackage方法进行引入java类
- 使用new方法生成插件对象实例即可调用



# 运行
- 执行菜单栏 'EasyClick 开发工具 - 运行工程' 即可，前提是要连接到手机


# 打包
- 执行菜单栏 'EasyClick 开发工具 - 打包工程' 即可，打包结果请看EasyClick 运行日志的输出








