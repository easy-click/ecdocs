

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
