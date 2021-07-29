## 说明
- 网络模块函数主要是跟网络请求信息相关联
- 网络模块的对象前缀是http，例如 http.downloadFile()这样调用


## http.request 万能请求函数
* HTTP万能请求
* @param param  map参数，包含的参数有<Br/>
    * url:字符串 请求的地址<Br/>
    * timeout:整型毫秒，超时时间<Br/>
    * method: POST ,GET,PUT 字符串，代表请求的方法<Br/>
    * proxy: 代理地址，map参数 包含主机和端口 例如 {"host":"11","port":111}<Br/>
    * followRedirects:是否自动跳转 true 或者 false<Br/>
    * requestBody: 请求的body体，如果是JSON，就是JSON字符串<Br/>
    * userAgent:字符串 HTTP 的UA <Br/>
    * ignoreContentType:是否忽略内容类型 true 或者 false <Br/>
    * ignoreHttpErrors:是否忽略错误 true 或者 false  <Br/>
    * maxBodySize : 整型，HTTP BODY最大值  <Br/>
    * referrer:字符串，请求来源  <Br/>
    * header:  HTTP 请求头，map参数,例如 {"UA":"test"}
    * cookie: HTTP 请求Cookie，map参数, 例如 {"a":1} 
    * data:HTTP POST的数据，map参数, 例如 {"a":1} 
    * file:要上传的文件，集合参数，例如
    * [{"key":"a1","fileName":"a.txt","filePath":"/sdcard/"},{"key":"a1","fileName":"a.jpg","filePath":"/sdcard/","contentType":"image/jpg"}]
        - 其中contentType可有可无
    * responseCharset: 字符串，强制设置响应内容的编码集
* @return Response 对象或者null

> ```javascript
>     
> function main(){
>     http_request();
> }
> 
> function http_request() {
>    //url:string
>    //timeout:int ms
>    //method: post ,get
>    //proxy: {"host":"11","port":111}
>    //followRedirects:true false
>    //requestBody: string
>    //userAgent:string
>    //ignoreContentType:true false
>    //ignoreHttpErrors:true false
>    //maxBodySize : int
>    //referrer:string
>    //header:{"UA":"test"}
>    //cookie:{"a":1}
>    //data:{"a":1}
>    //file:[{}]
>    //responseCharset: string
>    var md = utils.dataMd5("12345");
>    var md2 = utils.fileMd5("/sdcard/sb.png");
>    var url = "http://192.168.0.5:8081/api/request";
>    var proxy = {"host": "192.168.0.5", "port": "100"};
>    var userAgent = "xxx";
>    var followRedirects = false;
>    var requestBody = JSON.stringify({"A": 111});
>    var ignoreContentType = true;
>    var ignoreHttpErrors = true;
>    var referrer = "xxx";
>    var header = {
>        "Content-Type": " application/json;  charset=UTF-8",
>        "User-Agent": "from test",
>        "ddd": md,
>        "dd2": md2,
>        "imei": device.getIMEI()
>    };
>    var cookie = {
>        "cookie1": "tst1",
>        "cookie2": "tst2"
>    };
>    var data = {
>        "a1": "aaa",
>        "pwd2": md,
>        "md2": md2
>    };
>    var file = [
>        {
>            "key": "file",
>            "fileName": "f.png",
>            "filePath": "/sdcard/sb.png"
>        },
>        {
>            "key": "file",
>            "fileName": "f2.png",
>            "filePath": "/sdcard/sde.png",
>            "contentType": "image/png"
>        }
>    ];
>    var params = {
>        "url": url,
>        "method": "POST",
>        "userAgent": userAgent,
>        "referrer": "baidu.com",
>        "cookie": cookie,
>        "data": data,
>        "file": file
>    };
>    var x = http.request(params);
>    if (x) {
>        logd("header=> " + x.header);
>        logd("cookie=> " + x.cookie);
>        logd("statusCode=> " + x.statusCode);
>        logd("statusMessage=> " + x.statusMessage);
>        logd("charset=> " + x.charset);
>        logd("contentType=> " + x.contentType);
>        logd("body=> " + x.body);
>    } else {
>        loge("无结果");
>    }
> }
> main();
> ```

## http.requestEx 万能请求函数(扩展)
* HTTP万能请求
* @param param  map参数，包含的参数有<Br/>
    * url:字符串 请求的地址<Br/>
    * timeout:整型毫秒，超时时间<Br/>
    * method: POST ,GET,PUT 字符串，代表请求的方法<Br/>
    * proxy: 代理地址，map参数 包含主机和端口 例如 {"host":"11","port":111}<Br/>
    * followRedirects:是否自动跳转 true 或者 false<Br/>
    * requestBody: 请求的body体，如果是JSON，就是JSON字符串<Br/>
    * userAgent:字符串 HTTP 的UA <Br/>
    * ignoreContentType:是否忽略内容类型 true 或者 false <Br/>
    * ignoreHttpErrors:是否忽略错误 true 或者 false  <Br/>
    * maxBodySize : 整型，HTTP BODY最大值  <Br/>
    * referrer:字符串，请求来源  <Br/>
    * header:  HTTP 请求头，map参数,例如 {"UA":"test"}
    * cookie: HTTP 请求Cookie，map参数, 例如 {"a":1} 
    * data:HTTP POST的数据，map参数, 例如 {"a":1} 
    * file:要上传的文件，集合参数，例如
    * [{"key":"a1","fileName":"a.txt","filePath":"/sdcard/"},{"key":"a1","fileName":"a.jpg","filePath":"/sdcard/","contentType":"image/jpg"}]
        - 其中contentType可有可无
    * responseCharset: 字符串，强制设置响应内容的编码集
* @return Response 对象或者null

> ```javascript
>     
> function main(){
>     http_request();
> }
> 
> function http_request() {
>    //url:string
>    //timeout:int ms
>    //method: post ,get
>    //proxy: {"host":"11","port":111}
>    //followRedirects:true false
>    //requestBody: string
>    //userAgent:string
>    //ignoreContentType:true false
>    //ignoreHttpErrors:true false
>    //maxBodySize : int
>    //referrer:string
>    //header:{"UA":"test"}
>    //cookie:{"a":1}
>    //data:{"a":1}
>    //file:[{}]
>    //responseCharset: string
>    var md = utils.dataMd5("12345");
>    var md2 = utils.fileMd5("/sdcard/sb.png");
>    var url = "http://192.168.0.5:8081/api/request";
>    var proxy = {"host": "192.168.0.5", "port": "100"};
>    var userAgent = "xxx";
>    var followRedirects = false;
>    var requestBody = JSON.stringify({"A": 111});
>    var ignoreContentType = true;
>    var ignoreHttpErrors = true;
>    var referrer = "xxx";
>    var header = {
>        "Content-Type": " application/json;  charset=UTF-8",
>        "User-Agent": "from test",
>        "ddd": md,
>        "dd2": md2,
>        "imei": device.getIMEI()
>    };
>    var cookie = {
>        "cookie1": "tst1",
>        "cookie2": "tst2"
>    };
>    var data = {
>        "a1": "aaa",
>        "pwd2": md,
>        "md2": md2
>    };
>    var file = [
>        {
>            "key": "file",
>            "fileName": "f.png",
>            "filePath": "/sdcard/sb.png"
>        },
>        {
>            "key": "file",
>            "fileName": "f2.png",
>            "filePath": "/sdcard/sde.png",
>            "contentType": "image/png"
>        }
>    ];
>    var params = {
>        "url": url,
>        "method": "POST",
>        "userAgent": userAgent,
>        "referrer": "baidu.com",
>        "cookie": cookie,
>        "data": data,
>        "file": file
>    };
>    var x = http.requestEx(params);
>    if (x) {
>        logd("header=> " + x.header);
>         //直接取值
>        logd("header=> " + x.header["Location"]);
>         for (var d  in x.header){
>                      logd("header key "+d +"  "+x.header[d]);
>                 }
>        logd("cookie=> " + x.cookie);
> for (var d  in x.cookie){
>                 logd("cookie key "+d +"  "+x.cookie[d]);
>          }
>        logd("cookie=> " + x.cookie["aa"]);
>        logd("statusCode=> " + x.statusCode);
>        logd("statusMessage=> " + x.statusMessage);
>        logd("charset=> " + x.charset);
>        logd("contentType=> " + x.contentType);
>        logd("body=> " + x.body);
>    } else {
>        loge("无结果");
>    }
> }
> main();
> ```


## http.downloadFile 下载文件
* 下载远程文件到本地,支持断点续传
* @param remoteUrl 远程文件URL
* @param file      要保存到本地的文件对象
* @param timeout   下载超时，单位是毫秒
* @param headers – 头标志例如{“a”:“11”}
* @return true 代表成功 false代表失败

> ```javascript
>     
> function main(){
>     var url = "https://imtt.dd.qq.com/16891/apk/DF4FD15AF9A9B51BA74D2710CF738EEF.apk?fsname=com.ishugui_3.9.2.3068_3923068.apk&csr=1bbd";
>     var x = http.downloadFile(url, "/sdcard/ss.apk", 10 * 1000, {"User-Agent": "test"});
>     toast("download result->     " + x);
> }
> main();
> ```



## http.downloadFileDefault 下载文件
* 下载远程文件到本地,支持断点续传，默认超时时间为30秒
* @param remoteUrl 远程文件URL
* @param file      要保存到本地的文件对象
* @param headers – 头标志例如{“a”:“11”}
* @return true 代表成功 false代表失败

> ```javascript
>     
> function main(){
>     var url = "https://imtt.dd.qq.com/16891/apk/DF4FD15AF9A9B51BA74D2710CF738EEF.apk?fsname=com.ishugui_3.9.2.3068_3923068.apk&csr=1bbd";
>     var x = http.downloadFileDefault(url, "/sdcard/ss.apk", {"User-Agent": "test"});
>     toast("download result->     " + x);
> }
> main();
> ```


## http.httpGetDefault GET请求
* Http GET 请求
* @param url 请求的URL
* @param timeout 超时时间 单位毫秒
* @param headers – 头标志例如{“a”:“11”}
* @return 字符串 请求后返回的字符串

> ```javascript
>     
> function main(){
>     var url = "http://192.168.0.5:8081/api/httpGet?a=1";
>     var x = http.httpGetDefault(url, 10 * 1000, {"User-Agent": "test"});
>     toast(" result->     " + x);
>     loge("result ->     " + x);
> }
> main();
> ```



## http.httpGet GET请求
* Http GET 请求
* @param url     请求的URL
* @param params  参数Map表 例如 {"a":"1"} 这样的参数或者字符串
* @param timeout 超时时间 单位毫秒
* @param headers – 头标志例如{“a”:“11”}
* @return 字符串 请求后返回的字符串

> ```javascript
>     
> function main(){
>     var url = "http://192.168.0.5:8081/api/httpGet?a=1";
>     var pa = {"b": "22"};
>     var x = http.httpGet(url, pa, 10 * 1000, {"User-Agent": "test"});
>     toast(" result->     " + x);
>     loge("result ->     " + x);
> }
> main();
> ```



## http.httpPost POST请求
* Http Post 请求
* @param url     请求的URL
* @param params  参数，例如 {"a":"1"} 这样的参数或者字符串
* @param files  要上传的文件，例如 {"file1":"/sdcard/1.png"}这样的文件参数
* @param timeout 超时时间 单位毫秒
* @param headers – 头标志例如{“a”:“11”}
* @return 字符串 请求后返回的字符串

> ```javascript
>     
> function main(){
>     //不带文件的请求
>     var url = "http://192.168.0.5:8081/api/httpPost";
>     var pa = {"b": "我是b的值"};
>     var x = http.httpPost(url, pa, null, 10 * 1000, {"User-Agent": "test"});
>     toast(" result->     " + x);
>     loge("result ->     " + x);
> }
> main();
> ```


> ```javascript
>     
> function main(){
>     //带上传文件的请求
>     var url = "http://192.168.0.5:8081/api/httpPost";
>     var pa = {"b": "我是b的值"};
>     var files = {"file1": "/sdcard/p.json", "file2": "/sdcard/z.xml"};
>     var x = http.httpPost(url, pa, files, 10 * 1000, {"User-Agent": "test"});
>     toast(" result->     " + x);
>     loge("result ->     " + x);
> }
> main();
> ```

## http.postJSON 发送JSON
* HTTP POST JSON数据
* @param url 请求的URL
* @param json  json数据
* @param timeout – 超时时间 单位毫秒
* @param headers – 头标志例如{“a”:“11”}
* @return 字符串 请求后返回的字符串

> ```javascript
>     
> function main(){
>     var url = "http://192.168.0.5:8081/api/postJSON";
>     var pa = {"b": "我是b的值"};
>     var x = http.postJSON(url, pa, 10 * 1000, {"User-Agent": "test"});
>     toast(" result->     " + x);
>     loge("result ->     " + x);
> }
> main();
> ```

## http.newWebsocket websocket通信
 * 创建一个websocket
 * @param url 要连接的地址
 * @param header 参数头
 * @return {@link WebSocket } WebSocket对象
 
 
> ```javascript
>     
>     function main(){
>         let result=[];
>         //新建一个ws连接
>           var ws =http.newWebsocket("ws://192.168.1.180:8099/rapi/ws/test",null);
>           //设置连接打开的时候监听器
>           ws.onOpen(function (ws1,code,msg){
>              logi("onOpen code "+code +"  msg:"+msg);
>           })
>           //设置有文本信息监听器
>            ws.onText(function (ws1,text){
>                 logi(" onText "+text);
>              })
>            //设置关闭时候的监听器
>             ws.onClose(function (ws1,code,reason){
>                     logi(" onClose  "+code +"  reason : "+reason+" remote:");
>             })
>             ws.onError(function (ws1,msg){
>                     logi(" onError  "+msg );
>                     result[0]= "error";
>             })
>             // bytes 是 java的bytes数组 对象
>             ws.onBinary(function (ws1,bytes){
>                     //转成java的
>                     logi(" onBinary  "+new java.lang.String(bytes));
>             })
>          //开始连接   阻塞的
>         let r = ws.connectBlocking(10000);
>         //let r = ws.connect();
>         logd("connect {} rr = {}",result[0],r);
>         logd("isconnect "+ws.isConnected());
>         while(true){
>             logd("isconnect "+ws.isConnected());
>              sleep(1000)
>              if (ws.isConnected()) {
>                 ws.sendText("new Date-> "+new Date())
>                 sleep(1000)
>                 // java的字符串转字节
>                 ws.sendBinary(new java.lang.String("test").getBytes());
>              }else{
>                 //重置链接
>                 let reset = ws.reset();
>                 logd("reset {}",reset)
>                 if (reset) {
>                     logd("开始重连...");
>                     let rc = ws.reconnectBlocking();
>                     //let rc = ws.connectBlocking(10000);
>                     logd("重连--> "+rc);
>                 }
>              }
>         }
>         logd("isClosed "+ws.isClosed())
>         sleep(1000)
>          //关闭连接
>         ws.close();
>     }
>     main();
> ```

### WebSocket 对象函数

#### connect 异步连接
 * 开始异步连接
 * 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)
 
 
#### reset 重置连接
 * 重置连接
 * @return {bool} true 代表成功 false代表失败
 * 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)
  

#### reconnectBlocking 同步重新链接
 * 开始同步重新链接
 * @return {bool} true 代表链接成功 false代表失败
 * 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)
  
#### connectBlocking 同步连接
 * @param timeout 链接超时时间 单位是毫秒
 * @return {bool} true 代表链接成功 false代表失败
 * 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)
  

#### isClosed 是否关闭
* 是否已经关闭
* @return true 代表已经关闭，false 未关闭
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)


#### isConnected 是否连接
* 是否已经连接了
* @return true 代表已经连接，false 未关闭
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)

#### close 关闭
* 关闭链接
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)

#### sendText 发送文本
* 发送文本消息
* @param text 文本信息
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)


#### sendBinary 发送字节
* 发送字节信息
* @param bin java byte 数组对象
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)


#### onOpen 打开回调
* 当连接打开的时候事件回调
* @param callback 回调函数
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)

#### onText 文件回调
* 当有文本信息发送过来的时候回调
* @param callback 回调函数
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)

#### onClose 关闭回调
* 当关闭的时候回调
* @param callback 回调函数
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)

#### onError 错误回调
* 当发生错误的时候回调
* @param callback 回调函数
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)

#### onBinary 二进制消息回调
* 当有二进制数据过来的时候回调
* @param callback 回调函数
* 详细代码看[例子](/zh-cn/funcs/http-api.md#httpnewwebsocket-websocket通信)








 