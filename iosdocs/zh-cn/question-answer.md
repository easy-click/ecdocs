

## iPhone重启后无法启动代理程序

- 由于iPhone需要挂载开发者镜像文件，请到网盘下载DeveloperDiskImage.zip文件
- 解压zip文件到桥接程序的config文件夹，之前这个文件下有就DeveloperDiskImage，按照版本规则放置即可
- 如果没有你的手机型号，可以自己按照这个链接提取developer镜像：https://ighibli.github.io/2017/03/28/Could-not-locate-device-support-files/
- 如果还是没有镜像，可以尝试将最靠近`你的iPhone版本`的`镜像版本文件夹名称修改与手机版本一致 `



## 脚本运行 显示执行异常：com.js.main

- 检查中控，桥接程序存放的路径，禁止使用中文，空格等特殊字符，只能使用字母或者数字，Windows的毛病
- 检查脚本文件、路径是否包含中文

## 点击坐标漂移

- 请在脚本开头使用startEnv函数，纠正坐标系统

  

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
