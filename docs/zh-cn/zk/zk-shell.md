- 对应功能函数中的 shell事件 模块

## installApp 安装 apk

* 安装 apk
* @param path 应用程序的包名
* @return true 代表成功，false 代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/shell";
>     var params = {
>       "type": "installApp",
>       "path": "/sdcard/aaa.apk"
>     };
>     request({
>       url: url,
>       method: "POST",
>       json: true,
>       headers: {
>         "content-type": "application/json",
>       },
>       body: params
>     }, function (error, response, body) {
>       if (!error && response.statusCode == 200) {
>         console.log(body)
>       } else {
>         console.log(error)
>       }
>     });
>     
> ```

## uninstallApp 卸载应用程序

* 卸载应用程序
* @param packageName 应用程序的包名
* @return true 代表成功，false 代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/shell";
>     var params = {
>       "type": "uninstallApp",
>       "packageName": "com.aaaa"
>     };
>     request({
>       url: url,
>       method: "POST",
>       json: true,
>       headers: {
>         "content-type": "application/json",
>       },
>       body: params
>     }, function (error, response, body) {
>       if (!error && response.statusCode == 200) {
>         console.log(body)
>       } else {
>         console.log(error)
>       }
>     });
>     
> ```


## stopApp 停止正在执行的应用
* 停止正在执行的应用
* @param packageName 应用程序的包名
* @return true 代表成功，false 代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/shell";
>     var params = {
>       "type": "stopApp",
>       "packageName": "com.aaaa"
>     };
>     request({
>       url: url,
>       method: "POST",
>       json: true,
>       headers: {
>         "content-type": "application/json",
>       },
>       body: params
>     }, function (error, response, body) {
>       if (!error && response.statusCode == 200) {
>         console.log(body)
>       } else {
>         console.log(error)
>       }
>     });
>     
> ```
 
## execCommand 执行Shell命令
* 执行Shell命令
* @param command 命令，例如安装App ： pm install /sdcard/app.apk
* @return 命令执行后返回的字符串结果

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/shell";
>     var params = {
>       "type": "execCommand",
>       "command": "ls -al /sdcard/"
>     };
>     request({
>       url: url,
>       method: "POST",
>       json: true,
>       headers: {
>         "content-type": "application/json",
>       },
>       body: params
>     }, function (error, response, body) {
>       if (!error && response.statusCode == 200) {
>         console.log(body)
>       } else {
>         console.log(error)
>       }
>     });
>     
> ```