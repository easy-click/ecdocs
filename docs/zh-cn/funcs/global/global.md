## 说明
全局模块是指直接调用方法就可以使用的模块，无需使用前缀对象名称


## 插件模块加载

### loadDex 载入dex或者apk

 * 载入dex文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.apk)或者是文件路径(例如 /sdcard/ab.apk)加载
 * @return true 载入成功， false载入失败

> ```javascript
> function main(){
>    //类似这样会先从IEC文件的插件目录查找
>    //loadDex("ocr.apk");
>    //下面这个是从sdcard查找
>     loadDex("/sdcard/a.apk");
>     // a.apk中存在com.A这个这个类，可以直接使用
>     var obj = new com.A(); 
> }
> main();
> ```


### require 导入JS

 * 导入JS模块
 * @param path 路径，例如 本地/sdcard/a.js或者 EC工程中的文件路径 slib/a.js
 * @return 模块对象

> ```javascript
> function main(){
>     test = require("slib/a.js")
>     logd(test.c());
> }
> main();
> ```




### importClass 导入JAVA类

 * 导入java的class给js用
 * @param clz class的名称例如: com.A

> ```javascript
> function main(){
>     importClass(com.A);
>     var obj = new com.A(); 
> }
> main();
> ```


### importPackage 导入JAVA包

 * 导入java包下面所有类给js用
 * @param clz class的名称例如: com.b

> ```javascript
> function main(){
>     importPackage(com.b);
>     var obj = new com.b.A(); 
> }
> main();
> ```

## 脚本启停

### exit 退出脚本
> ```javascript
> exit();
> ```

### sleep  暂停执行
* 休眠
* @param miSecond 毫秒
> ```javascript
> function main(){
>     var result = sleep(1000);
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
> }
> main();
> ```

### execScript 载入JS
* 执行JS文件或者内容
* @param type 1=文件，2=直接是JS内容
* @param content 路径例如/sdcard/a.js或者js的内容
* @return 布尔型，true代表执行成功， false代表失败

> ```javascript
> function main(){
>     var d ='while(true){sleep(1000);logd(111111);}';
>        
>        thread.execAsync(function() {
>            //execScript(1,"/sdcard/ad.js")
>            execScript(2,d);
>        });
>        
>        while(true){
>            sleep(2000);
>            loge("fsadffsad")
>        }
>        
> }
> main();
> ```


### restartScript  重启脚本
* 重启脚本，适合无限循环，或者有异常的情况可以下载最新的iec再次执行，避免进入UI才能热更新,
* 注意: 该方法威力巨大，请自行控制好是否自动重启，否则只能强杀进程才能停止
* @param path 新的IEC路径，如果不需要可以填写null
* @param stopCurrent 是否停止当前的脚本
* @param delay 延迟多少秒后执行
* @return bool true 代表成功 false 代表失败

> ```javascript
> function main(){
>  logd("我是在脚本运行的");
> setStopCallback(function(){
>      restartScript(null,false,3)
>  });
>  
>  //setExceptionCallback(function (){
>  //    restartScript(null,true,3)
>  //});
>       sleep(1000);
>     logd("脚本结束") 
> }
> main();
> ```


## JSON处理

### JSON.stringify 格式化为JSON字符串

 * 格式化对象为JSON字符串
 * @param 对象

> ```javascript
> function main(){
>     var m ={"sss":"a"};
>     var d =JSON.stringify(m);
>     toast(d);
> }
> main();
> ```

### JSON.parse 转换为JSON对象

 * 格式化JSON字符串为对象
 * @param 字符串

> ```javascript
> function main(){
>     var m ={"sss":"a"};
>     var d =JSON.stringify(m);
>     d =JSON.parse(d);
>     toast(d);
> }
> main();
> ```


## 监听脚本和服务
### setStopCallback 脚本停止监听
> ```javascript
> function main(){
>     setStopCallback(function (){
>         logd("fdsafsad 我是停止回调")
>      });
>     var result = sleep(1000);
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
> }
> main();
> ```


### setExceptionCallback 脚本异常停止监听
> ```javascript
> function main(){
>     setExceptionCallback(function (msg){
>         logd(" 异常停止消息: "+msg)
>      });
>     var result = sleep(1000);
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
>     //这里有异常抛出
>     result.length();
> }
> main();
> ```



### observeEvent (无障碍模式)对系统事件进行监听

 * (无障碍模式)对系统事件进行监听
 * @param event 事件类型 类型有:
 * activity-change 页面切换，OK
 * notification-show：状态栏通知展示， OK
 * toast-show：Toast消息展示， OK
 * key-down：按键按下， OK
 * key-up：按键弹起 OK
 * acc-service-interrupt：无障碍服务被中断 OK
 * acc-service-destroy： 无障碍服务被销毁 OK
 * acc-event：无障碍节点事件 OK
 * acc-service-connected: 无障碍服务连接成功 OK
 * auto-service-status: 自动化服务可用状态
 *
 * @param callback 事件回调
 * @return {bool}  | true 成功，false失败

> ```javascript
> function main(){
>     startEnv();
>   logd("开始监听");
>      observeEvent("activity-change",function (key,data){
>             logd("页面切换: "+typeof data)
>             logd("页面切换: "+data)
>          });
>         //监听无障碍节点事件
>      observeEvent("acc-event",function (key,data){
>               logd("acc-event: "+typeof data)
>                 logd("acc-event: "+data)
>              });
>     while(true){
>         sleep(1000)
>     }
>     //取消事件监听
>     cancelObserveEvent("acc-event")
> }
> main();
> ```


### cancelObserveEvent 取消对系统事件监听
 * 取消事件监听
 * @param event 事件类型
 * @return {bool} | true 成功，false失败

> ```javascript
> function main(){
>     startEnv();
>   logd("开始监听");
>      observeEvent("activity-change",function (key,data){
>             logd("页面切换: "+typeof data)
>             logd("页面切换: "+data)
>          });
>         //监听无障碍节点事件
>      observeEvent("acc-event",function (key,data){
>               logd("acc-event: "+typeof data)
>                 logd("acc-event: "+data)
>              });
>         sleep(10000)
>     //取消事件监听
>     cancelObserveEvent("acc-event")
> }
> main();
> ```


## 日志消息方法

### setSaveLog  保存日志
 * 设置保存日志信息到文件中
 * @param save 是否保存
 * @param path 自定义的文件夹
 * @param size 每个文件分隔的尺寸
 * @return 保存日志文件的目录

> ```javascript
> function main(){
>     var s = setSaveLog(true,"/sdcard/aaa/",1024*1024);
>     logd("save dir is:"+s);
> }
> main();
> ```

### setFloatDisplayLineNumber  打印日志行号
* 打印日志的时候，悬浮窗是否展示行号，正式发布，可以不展示行号，不影响调试和保存在文件的日志中
* @param ds  true 代表显示， false 不显示


> ```javascript
> function main(){
>    setFloatDisplayLineNumber(true);
>    
> }
> main();
> ```


### toast  Toast消息
 * 显示Toast消息
 * @param msg 消息字符串
 

> ```javascript
> function main(){
>     toast("msg");
> }
> main();
> ```

### toast1 Toast1消息
 * 显示Toast消息 (扩展方法)
 * @param msg 消息字符串
 

> ```javascript
> function main(){
>     toast1("msg");
> }
> main();
> ```



### toast2  Toast2消息
 * 显示Toast消息(扩展方法)
 * @param msg 消息字符串
 

> ```javascript
> function main(){
>     toast2("msg");
> }
> main();
> ```


### logd 调试日志
 * 调试日志
 * @param msg 消息字符串
 

> ```javascript
> 
> 
> function main(){
>     logd("msg");
>     //可变参数写法
>     logd("我是消息{},{}","测试1",2)
> }
> main();
> ```

### loge 错误日志
 * 错误日志
 * @param msg 消息字符串
 

> ```javascript
> function main(){
>     loge("msg");
>     //可变参数写法
>     loge("我是消息{},{}","测试1",2)
> }
> main();
> ```

### logw 警告日志
 * 警告日志
 * @param msg 消息字符串
 

> ```javascript
> function main(){
>     logw("msg");
>     //可变参数写法
>     logw("我是消息{},{}","测试1",2)
> }
> main();
> ```

### logi 信息日志
 * 信息日志
 * @param msg 消息字符串
 

> ```javascript
> function main(){
>     logi("msg");
>     //可变参数写法
>     logi("我是消息{},{}","测试1",2)
> }
> main();
> 
> ```


### clearLog 清除日志
 * 清除日志
 * @param lines 整型，要清除的行数，-1 代表全部清除
 

> ```javascript
> function main(){
>    showLogWindow()
>    sleep(1000)
>    for (var i = 0; i < 4; i++) {
>           logd(" "+i);
>    }
>    sleep(2000)
>     //清除前三行
>    clearLog(3)
>     //清除所有
>     clearLog(-1)
> }
> main();
> 
> ```


## 读取IEC包资源


### readIECFileAsString 读取IEC内部文件为字符串
 * 读取IEC文件中的资源文件，并返回字符串
 * @param fileName 文件名称，如果放在某个文件夹下 需要加上文件名称
 * @return {string} 如果是null代表没内容


> ```javascript
> function main(){
>     var testData = readIECFileAsString("res/a.txt");
>    logd(testData)
> }
> main();
> 
> ```


### readIECFileAsByte 读取IEC内部文件为数组资源
* 读取IEC文件中的资源文件，并返回java的直接数组
* @param fileName 文件名称，如果放在某个文件夹下 需要加上文件名称
* @return {字节数组} 如果是null代表没内容


> ```javascript
> function main(){
> //这里已读取图片为例子
> var d =readIECFileAsByte("res/a.png")
> importPackage(android.graphics)
> let ad =BitmapFactory.decodeByteArray(d,0,d.length)
> logd(d)
> logd(d.length)
> logd(ad);
> }
> main();
> 
> ```



### readResString 读取字符串资源
* 读取res文件夹中的资源文件,并返回字符串
* @param fileName 文件名称，不要加res前缀
* @return string 如果是null代表没内容


> ```javascript
> function main(){
>     var testData = readResString("a.txt");
> }
> main();
> 
> ```





### readResBitmap  读取Bitmap资源
* 读取res文件夹中的资源文件，并返Bitmap图片对象
* @param fileName 文件名称，不要加res前缀
* @return string 如果是null代表没内容


> ```javascript
> function main(){
>     var b = readResBitmap("a.txt");
> }
> main();
> 
> ```


### readResAutoImage  读取Image资源
* 读取res文件夹中的资源文件，并返 AutoImage 图片对象
* @param fileName 文件名称，不要加res前缀
* @return string 如果是null代表没内容


> ```javascript
> function main(){
>     var b = readResAutoImage("img/a.png");
> }
> main();
> 
> ```



### saveResToFile 保存资源为文件
* 保存res文件夹中的资源文件到指定的路径
* @param fileName 文件名称，不要加res前缀
* @param path 要保存到的路径地址，例如/sdcard/aa.txt
* @return boolean|布尔型 true代表保存成功


> ```javascript
> function main(){
>     var b = saveResToFile("img/a.png","/sdcard/a.png");
> }
> main();
> 
> ```


## UI参数读取


### deleteConfig 删除配置值
* @param key 在UI界面中配置的key
* @return {bool} true 代表成功 false 代表失败


> ```javascript
> function main(){
>     var testData = deleteConfig("test_key");
> }
> main();
> 


### readConfigInt 读取整型配置
* @description 读取UI界面中的参数,返回是整型
* @param key 在UI界面中配置的key
* @return 整型，找不到就返回0


> ```javascript
> function main(){
>     var testData = readConfigInt("test_key");
> }
> main();
> 
> ```

### readConfigString 读取字符串配置
* 读取UI界面中的参数,返回是字符串
* @param key 在UI界面中配置的key
* @return 字符串 找不到就返回空字符串


> ```javascript
> function main(){
>     var testData = readConfigString("test_key");
> }
> main();
> 
> ```

### readConfigDouble 读取double配置
* 读取UI界面中的参数,返回是Double型
* @param key 在UI界面中配置的key
* @return double


> ```javascript
> function main(){
>     var testData = readConfigDouble("test_key");
> }
> main();
> ```


### readConfigBoolean 读取布尔型配置
 * 读取UI界面中的参数,返回是布尔型
 * @param key 在UI界面中配置的key
 * @return true 或者 false
 
 
> ```javascript
 > function main(){
 >     var testData = readConfigDouble("test_key");
 > }
 > main();
 > ```


### getConfigJSON 取所有配置
 * 取得配置的JSON
 * @return JSON数据
 
 
> ```javascript
 > function main(){
 >     var testData = getConfigJSON();
 > }
 > main();
 > ```


### updateConfig 更新配置
* 更新配置
* @param key 键
* @param value  值
* @return {boolean} true 成功，false失败
 
> ```javascript
 > function main(){
 >    updateConfig("a","sss");
 > }
 > main();
 > ```

## EC 系统设置


### setECSystemConfig 设置EC参数
 * 设置EC的系统参数
 * @param params  map形式例如 {"running_mode":"无障碍"},<br/>
 * {<br/>
 *     "running_mode":"无障碍",<br/>
 *     "auto_start_service":"是",<br/>
 *      "log_float_window":"否",<br/>
 *      "ctrl_float_window":"否"<br/>
 * }<br/>
 *  参数解释有：<br/>
 *  running_mode : 运行模式 值有 无障碍，代理两种
 *  auto_start_service： 开机自启动 值有 是，否 两种
 *  log_float_window : 日志悬浮窗展示 值有 是，否 两种
 *  ctrl_float_window : 启停控制悬浮窗展示 值有 是，否 两种
 *
 * @return 布尔型 true 是 false 否
 
> ```javascript
> function main(){
>     var m = {
>           "node_service":"需要",
>           "proxy_service":"不需要",
>           "running_mode":"无障碍",
>            "log_float_window":"否",
>            "ctrl_float_window":"否"
>       };
>     setECSystemConfig(m);
>     
> }
> main();
> ```

### openECSystemSetting 打开EC系统界面
* 打开EC系统设置页面
* @return true 成功 false 失败
 
> ```javascript
 > function main(){
 >     var result = openECSystemSetting();
 > }
 > main();
 > ```


### openECloudSetting 打开EC云控界面
* 打开EC云控界面
* @return true 成功 false 失败
 
> ```javascript
 > function main(){
 >     var result = openECloudSetting();
 > }
 > main();
 > ```

## 设置IEC文件(脚本中的热更新)

### setIECPath 设置脚本路径
* 设置要执行的IEC文件路径
* @return true 成功 false 失败
 
> ```javascript
 > function main(){
 >     var result = setIECPath("/sdcard/release.iec");
>     logd("result : "+result);
>     logd("当前路径 "+getIECPath());
>     //开启定时任务准备下一次执行
>     var id2 =startJob("task2","2",true);
>     logd("job id "+id2);
>
 > }
 > main();
 > ```


## 运行模式

### activeSelf 激活自己
* 激活自己,条件：1 开启USB调试，2 开启本机ADB WIFI调试,请参考激活章节文档
* 适用版本(EC 5.15.0+)
* @param activeType 激活类型，0 自动，1 模式1 2 模式2
* @param timeout 超时时间
* @return {string} 激活成功：代表成功，其他都是错误消息
 
> ```javascript
> function main(){
>     var result = activeSelf(0,10*1000);
>         logd(result)
> }
> main();
> ```
 
 
### activeDevice 通过IP激活其他设备
* ip 设备的IP,条件：1 开启目标设备USB调试，2 开启目标设备ADB WIFI调试,请参考激活章节文档
* 适用版本(EC 5.15.0+)
* @param ip 设备的IP
* @param activeType 激活类型，0 自动，1 模式1 2 模式2
* @param timeout 超时时间
* @return {string} 激活成功：代表成功，其他都是错误消息
 
> ```javascript
> function main(){
>     var result = activeDevice("192.168.1.108",0,10*1000);
>     logd(result)
> }
> main();
> ```


### isAccMode 无障碍模式判断
 * 是否是无障碍模式
 * @return true或者false
 
 
> ```javascript
 > function main(){
 >     var result = isAccMode();
 > }
 > main();
 > ```

### isAgentMode 代理模式判断
 * 是否是代理模式
 * @return true或者false
 
 
> ```javascript
 > function main(){
 >     var result = isAgentMode();
 > }
 > main();
 > ```

### isServiceOk 自动化服务状态
 * 自动化服务是否正常
 * @return true或者false
 
 
> ```javascript
 > function main(){
 >     var result = isServiceOk();
 > }
 > main();
 > ```

### startEnv 启动自动化
 * 启动自动化服务环境
 * @return true或者false
 
 
> ```javascript
 > function main(){
 >     var result = startEnv();
 > }
 > main();
 > ```



### closeEnv 关闭自动化
 * 适用版本(EC 5.14.0+)
 * 关闭自动化服务环境
 * @return true或者false
 
 
> ```javascript
 > function main(){
 >     var result = closeEnv();
 > }
 > main();
 > ```

## 时间相关

### time 毫秒级当前时间戳
 * !!!沙雕提醒!!!默认时间戳是秒,不要直接比较
 * 适用版本(EC 5.14.0+)
 * 毫秒级当前时间戳
 * @return {long} 毫秒级别的long时间
 
 
> ```javascript
> function main(){
>    logd(time());
> }
> main();
> ```


### timeFormat 格式化时间
 * 适用版本(EC 5.14.0+)
 * 格式化时间函数例如：```yyyy-MM-dd HH:mm:ss```
 * @return {string} 格式化之后的当前时间
 
> ```javascript
> function main(){
>    logd(timeFormat("yyyy-MM-dd HH:mm:ss"));
> }
> main();
> ```


### console.time 计时开始
 * 适用版本(EC 5.14.0+)
 * 计时开始,和timeEnd成对出现计算用时
 * @param label 标签
 * @return  {long} 当前时间
> ```javascript
> function main(){
>     console.time("1");
>     sleep(1000)
>     logd(console.timeEnd("1"))
> }
> main();
> ```


### console.timeEnd 计时结束
 * 适用版本(EC 5.14.0+)
 * 计时结束,和timeEnd成对出现计算用时
 * @param label 标签
 * @return {long} 与计时开始的差值
> ```javascript
> function main(){
>     console.time("1");
>     sleep(1000)
>     logd(console.timeEnd("1"))
> }
> main();
> ```