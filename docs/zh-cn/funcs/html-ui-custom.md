## 说明
- EasyClick 使用WebView支撑HTML的UI方式，并且扩展了JS方法，用于控制EC程序。
- 新建工程时候可以对应的模板，推荐使用Materialize模板，文档网址 [http://www.materializecss.cn](http://www.materializecss.cn)
- 也可以自己编写精美的HTML页面，更多JS方法的使用请参考模板中的用法

## 多tab标签支持
只要在工程的layout工程下新建一个ui.js文件即可
内容是 
> ```javascript
>     function main(){
>         ui.layout("参数配置","main.html");
>         ui.layout("注册使用","reg.html");
>         ui.layout("使用说明","intr.html");
>     }
>     main();
> ```


## 脚本如何与JS交互

### 编写xml视图
- 使用webview加载本地的main.html，tag=web
>```xml
> < ?xml version="1.0" encoding="UTF-8" ?>
> <LinearLayout
>         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
>         xmlns:android="http://schemas.android.com/apk/res/android"
>         xsi:noNamespaceSchemaLocation="layout.xsd"
>         android:layout_height="match_parent"
>         android:layout_width="match_parent">
>     <WebView android:layout_width="wrap_content"
>               android:tag="web"
>               android:layout_height="wrap_content"
>               android:url="main.html"/>
> 
> </LinearLayout>
> ```


### 加载 xml
- 在ui.js中加载xml视图
> ```javascript
>     function main(){
>         ui.layout("参数配置","main.xml");
>     }
>     main();
> ```

### html 代码

> ```html
>   <!doctype html>
>   <html lang="en">
>   <head>
>       <!-- Required meta tags -->
>       <meta charset="utf-8">
>       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
>   </head>
>   <body style="margin-left: 10px;margin-right: 10px">
>      我是测试网页
>   </body>
>   <script>
>     //暴露给webview调用
>       function myalert()
>       {
>           alert("fdsafsad");
>           //存储数据到内存中，给脚本读取
>           window.ec.putShareData("mymsg","我是网页的临时数据");
>       }
>    //暴露给webview调用 带参数
>        function myalert(msg)
>       {
>           alert("我是msg "+msg);
>       }
>   </script>
>   </html>
> ```

### 脚本中调用

- 在js/main.js脚本中调用视图

> ```javascript
>   function main() {
>       //重置变量
>      ui.resetUIVar();
>      //读取UI存储到内存中的数据
>      logd(ui.getShareData("mymsg"))
>      logd(ui.web)
>      //使用ui中 tag= web的视图
>      if (ui.web) {
>           //myalert 是HTML中暴露的方法
>           //执行网页中的js方法
>           ui.web.quickCallJs("myalert();");
>           ui.web.quickCallJs("myalert('bbbbb');");
>      }
>   }
>   main();
> ```



## 浏览器扩展方法

- 浏览器扩展的方法，主要用于网页和EC程序进行交互，并且这些方法只能在网页中调用才行

### 启动脚本


> ```javascript
> window.ec.start()     
> ```

### 停止脚本

> ```javascript
> window.ec.stopTask()     
> ```



### 隐藏开始按钮


> ```javascript
> window.ec.hideStartBtn()     
> ```


### 显示开始按钮


> ```javascript
> window.ec.displayStartBtn()     
> ```


### 获取所有配置的JSON字符串

> ```javascript
> var s= window.ec.getConfigJSON();
> alert(s);     
> ```


### 从配置文件获取单个配置的字符串


> ```javascript
> var s= window.ec.getConfig("name");
> alert(s);     
> ```

### 保存单个配置到配置文件

> ```javascript
> var s= window.ec.saveConfig("name","123");
> alert(s);     
> ```


### 保存数据到存储区
- 这个数据是保存在内存中的

> ```javascript
> window.ec.putShareData("name","123");
> ```

### 从存储区读取数据
- 这个数据是在内存中的

> ```javascript
> var d = window.ec.getShareData("name");
> alert(d);
> ```

### 清空存储区数据
- 这个数据是在内存中的
> ```javascript
> var d = window.ec.clearAllShareData();
> alert(d);
> ```


### 打开EC的系统设置


> ```javascript
> window.ec.openECSystemSetting()     
> ```



### 保存EC的系统参数
 * 设置EC的系统参数
 * @param params  map形式例如 {"running_mode":"无障碍"},<br/>
 * {<br/>
 *     "running_mode":"无障碍",<br/>
 *     "auto_start_service":"是",<br/>
 *      "log_float_window":"否",<br/>
 *      "ctrl_float_window":"否"<br/>
 *      "service_start_run_script":"否"<br/>
 * }<br/>
 *  参数解释有：<br/>
 *  running_mode :  无障碍，代理两种
 *  auto_start_service : 开机启动服务 值有 是，否 两种
 *  log_float_window : 日志悬浮窗展示 值有 是，否 两种
 *  ctrl_float_window : 启停控制悬浮窗展示 值有 是，否 两种
 *  service_start_run_script : 服务被重启后自动重新运行 值有 是，否 两种
 *  home_key_start_stop : 三击HOME启停脚本 值有 是，否 两种
 *
 * @return 布尔型 true 是 false 否
 
> ```javascript

>     var m = {
>           "running_mode":"无障碍",
>           "auto_start_service":"是",
>            "log_float_window":"否",
>            "ctrl_float_window":"否"
>       };
>   window.ec.setECSystemConfig(JSON.stringify(m));
>     

> ```





### 显示Toast消息


> ```javascript
> window.ec.toast("我是toast消息")  ;       
> ```

### 显示日志消息窗口


> ```javascript
> window.ec.showLogWindow();     
> ```

## 关闭日志消息窗口

> ```javascript
> window.ec.closeLogWindow();     
> ```





### 显示日志消息

> ```javascript
> window.ec.logd("我是日志");     
> ```



## 显示启停控制窗口


> ```javascript
> window.ec.showCtrlWindow();     
> ```


### 关闭启停控制窗口

> ```javascript
> window.ec.closeCtrlWindow();     
> ```


### 打开其他应用程序 openActivity

> ```javascript
> //打开浏览器下载测试
> var m ={
>               "action":"android.intent.action.VIEW",
>               "uri":"https://imtt.dd.qq.com/16891/apk/55259F8EF9824AF1BF80106B0E00BCD1.apk?"
>  
>           };
>           var x = window.ec.openActivity(JSON.stringify(m));
>           window.ec.logd("x "+x);  
> 
>      var map={
>          "uri":"xx://xx/live/6701887916223941379",
>      };
>      window.ec.openActivity(JSON.stringify(map));
> ```



## 服务状态控制

### 是否是无障碍服务模式


> ```javascript
> var s = window.ec.isAccMode();
> alert(s);     
> ```



### 是否是代理服务模式


> ```javascript
> var s = window.ec.isAgentMode();
> alert(s);     
> ```



### 无障碍服务是否已经启动


> ```javascript
> var s = window.ec.isAccServiceOk();
> alert(s);     
> ```


### 代理服务是否已经启动


> ```javascript
> var s = window.ec.isAgentServiceOk();
> alert(s);     
> ```


### 启动服务环境


> ```javascript
> var s = window.ec.startEnv();
> alert(s);     
> ```

## 悬浮窗控制

### 是否有悬浮窗权限


> ```javascript
> var s = window.ec.hasFloatViewPermission();
> alert(s);     
> ```


### 请求悬浮窗权限
> ```javascript
> //参数是超时时间，单位是秒
> var s = window.ec.requestFloatViewPermission(10);
> alert(s);     
> ```



### 展示浮窗


> ```javascript
> var m = {
>        "path": "main.html",
>        "tag": "tag",
>        "titleBg": "#888888",
>        "x": 10,
>        "y": 10,
>        "w": 100,
>        "h": 200
>    };
>    var xd =window.ec.showFloatView(JSON.stringify(m));
>     alert(xd);     
> ```



### 关闭浮窗


> ```javascript
> var m = {
>        "path": "main.html",
>        "tag": "tag",
>        "titleBg": "#888888",
>        "x": 10,
>        "y": 10,
>        "w": 100,
>        "h": 200
>    };
>    var xd =window.ec.showFloatView(JSON.stringify(m));
>     setTimeout(function() {
>         window.ec.closeFloatView("tag");
>     },3000);
>     alert(xd);     
> ```


### 关闭所有浮窗，不包含日志悬浮窗


> ```javascript
> var m = {
>        "path": "main.html",
>        "tag": "tag",
>        "titleBg": "#888888",
>        "x": 10,
>        "y": 10,
>        "w": 100,
>        "h": 200
>    };
>    var xd =window.ec.showFloatView(JSON.stringify(m));
>     setTimeout(function() {
>         window.ec.closeAllFloatView();
>     },3000);
>     alert(xd);     
> ```



## 定时任务



### 开启一个定时任务
 * 开启一个定时脚本任务
 * @param tag 任务的唯一标示，不能为空，脚本中可以使用readConfigString("jobTaskTag")获取当前tag值，判断是那个任务过来执行的
 * @param execTime 定时时间格式: 2020-04-17 19:20:00，或者直接是秒数字，例如 3，代表3秒后
 * @param cancelBeforeRunning
 * @return 整型 jobid
 
> ```javascript
> var time="2020-04-17 09:00:00";
> var id =window.ec.startJob("task1",time,true);
>  alert("job id "+id);     
> ```


### 获取所有定时任务TAG


> ```javascript
> var t =window.ec.getAllJobTag();
>  alert("job tags "+t);     
> ```


### 取消所有定时任务

> ```javascript
> var t =window.ec.cancelAllJob();
>  alert("job cancel "+t);     
> ```


### 取消指定TAG定时任务

> ```javascript
> //参数task1 是创建定时任务的tag值
> var t =window.ec.cancelJob("task1");
>  alert("job cancel "+t);     
> ```