## 说明
全局模块是指直接调用方法就可以使用的模块，无需使用前缀对象名称


## 插件模块加载

### loadDex 载入jar包

 * 载入dex文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.jar)或者是文件路径(例如 D:/ab.jar)加载
 * @return true 载入成功， false载入失败

> ```javascript
> function main(){
>    //类似这样会先从IEC文件的插件目录查找
>    //loadDex("ocr.apk");
>    //下面这个是
>     loadDex("D:/a.jar");
>     // a.apk中存在com.A这个这个类，可以直接使用
>     var obj = new com.A(); 
> }
> main();
> ```





### require 导入JS

 * 导入JS模块
 * @param path 路径，例如 本地D:/a.js或者 EC工程中的文件路径 slib/a.js
 * @return 模块对象

> ```javascript
> function main(){
>     //注意,js文件不要放在js目录或下级目录中
>     //注意,EC3.5版本不支持,EC已经6.15了兄弟
>     test = require("slib/a.js")
>     logd(test.c());
> }
> main();
> //视频介绍:https://www.bilibili.com/video/BV1vz4y1S7gd?p=29&share_source=copy_web
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

### isScriptExit 是否已退出脚本

 * 判断EC运行的当前线程是否处于退出状态，可用判断脚本是否退出，或者子线程是否退出
 * @return true 已退出

>```javascript
> function main(){
>      try{
>                while(true){
>                        sleep(1000)
>                        logd("222")
>                        if (isScriptExit()) {
>                            break
>                        }
>                    }
>                  logd("222")
>            }catch(e){
>                logd(e)
>               if (isScriptExit()) {
>                   return
>                }
>            }
> }
> main();
> ```





### sleep  暂停执行
* 休眠
* @param miSecond 毫秒
> ```javascript
> function main(){
>     sleep(1000);
> }
> main();
> ```

### execScript 载入JS
* 执行JS文件或者内容
* @param type 1=文件，2=直接是JS内容
* @param content 路径例如D:/a.js或者js的内容
* @return 布尔型，true代表执行成功， false代表失败

> ```javascript
> function main(){
>     var d ='while(true){sleep(1000);logd(111111);}';
>        
>        thread.execAsync(function() {
>            //execScript(1,"D:/ad.js")
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

* 重启脚本，适合无限循环，或者有异常的情况可以再次执行，
* 注意: 该方法威力巨大，请自行控制好是否自动重启，否则只能强杀进程才能停止
* @param path 新的IEC路径，如果不需要可以填写null
* @param stopCurrent 是否停止当前的脚本
* @param delay 延迟多少秒后执行
* @return bool true 代表成功 false 代表失败

> ```javascript
> function main(){
> logd("我是在脚本运行的");
> setStopCallback(function(){
>   restartScript(null,false,3)
> });
> 
> //setExceptionCallback(function (){
> //    restartScript(null,true,3)
> //});
>    sleep(1000);
>  logd("脚本结束") 
> }
> main();
> ```


## 



## JSON处理

### JSON.stringify 格式化为JSON字符串

 * 格式化对象为JSON字符串
 * @param 对象
 * @return 字符串
> ```javascript
> function main(){
>     var m ={"sss":"a"};
>     var d =JSON.stringify(m);
>     logd(d);
> }
> main();
> ```

### JSON.parse 转换为JSON对象

 * 格式化JSON字符串为对象
 * @param 字符串
 * @return 对象
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
>         logd("成功");
>     } else {
>         logd("失败");
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
>         logd("成功");
>     } else {
>         logd("失败");
>     }
>     //这里有异常抛出
>     result.length();
> }
> main();
> ```





## 日志消息方法











### setLogLevel 设置日志的等级
* 设置日志的等级,可以根据情况关闭或开启日志
* @param level 日志等级，值分别是 debug,info,warn,error,off，排序分别是debug < info < warn < error < off，
* 例如 off代表关闭所有级别日志，debug代表打印包含logd,logi,logw,loge的日志，info代表打印包含logi,logw,loge的日志，warn 代表打印包含logw,loge的日志
* @param displayToast 是否展示toast消息
* @return {bool} 布尔型 true代表成功 false代表失败

> ```javascript
>   function main() {
>       setLogLevel("info",false)
>       for (var i = 0; i < 1; i++) {
>           sleep(10);
>           //logd(time()+" debug");
>           logi(time()+" info");
>           //logw(time()+" warn");
>          // loge(time()+" error");
>           logd("--- "+time());
>       }
>       //logd(time()+"  222");
>   }
>   main();
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
* @return BufferedImage 如果是null代表没内容


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
* @param path 要保存到的路径地址，例如D:/aa.txt
* @return boolean|布尔型 true代表保存成功


> ```javascript
> function main(){
>     var b = saveResToFile("img/a.png","D:/a.png");
> }
> main();
> 
> ```



### findIECFile 查找IEC的文件

* 查找IEC的文件
* @param dir       文件夹名称，null代表只读res/文件夹，没有默认是res文件夹，可以是类似 res/aaa/这样的文件夹
* @param names     文件名称前缀,null代表不匹配， 例如aaa,多个前缀用|分割，例如 aaa|bb|cc
* @param ext       文件扩展名 ,null代表不匹配，例如.png,多个扩展用|分割，例如 .png|.jpg|.bmp
* @param recursion 是否递归子目录，true代表递归
* @return {array} 文件名称JSON数组


> ```javascript
> function main(){
> 	let res = findIECFile("res/","dd2",".png|.jpg",true)
> 	logd("findIECFile {}",JSON.stringify(res));
> 
> }
> main();
> 
> ```








## 自动化服务相关


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
 * 启动自动化服务环境，并自动纠正坐标系统，防止坐标漂移
 * @return true或者false


> ```javascript
 > function main(){
 >     var result = startEnv();
 > }
 > main();
 > ```

### getStartEnvMsg 获取自动化消息

 * 获取启动自动化消息
 * @return string


> ```javascript
> function main(){
>  var result = getStartEnvMsg();
>   logd(result)
> }
> main();
> ```





### daemonEnv 守护自动化环境

 * 守护自动化环境
 * 如果是激活或者无障碍保活的情况下，尽量保证自动服务不掉线
 * @param daemon 是否守护自动化环境 true 是，false 否
 * @return 布尔型  true代表启动成功，false代表启动失败


> ```javascript
> function main(){
>  !!![沙雕提醒]!!!脚本开头启动环境后,执行一次就行了,不要再问要不要一直执行了!!
>  var result = daemonEnv(true);
> }
> main();
> ```



### closeEnv 关闭自动化
 * 关闭自动化环境
 * @return 布尔型  true代表启动成功，false代表启动失败


> ```javascript
 > function main(){
 >     var result = closeEnv();
 > }
 > main();
 > ```

## 时间相关

### time 毫秒级当前时间戳
 * !!!沙雕提醒!!!默认时间戳是秒,不要直接比较

 * 毫秒级当前时间戳
 * @return {long} 毫秒级别的long时间


> ```javascript
> function main(){
>    logd(time());
> }
> main();
> ```


### timeFormat 格式化时间

 * 格式化时间函数例如：```yyyy-MM-dd HH:mm:ss```
 * @return {string} 格式化之后的当前时间

> ```javascript
> function main(){
>    logd(timeFormat("yyyy-MM-dd HH:mm:ss"));
> }
> main();
> ```


### console.time 计时开始

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



## 其他

### setAgentTimeout 设置代理请求超时

* @param envTimeout 启动自动化超时时间，单位是毫秒，可以设置为 10000 - 15000
* @param readTimeout 其他的请求超时时间，单位是毫秒，可以设置为 2000 - 5000
* @return {boolean} true代表成功


> ```javascript
> function main(){
> 	setAgentTimeout(10000,3000);
> }
> main();
> 
> ```



### activeAppInfo 当前运行的程序 bundleId

* @param 当前运行的程序 bundleId
* @return {string} 当前运行的程序 bundleId


> ```javascript
> function main(){
> 	let d=	activeAppInfo();
>   logd(d);
> }
> main();
> 
> ```

