
# 日志函数
## toast 浮层消息
* 浮层消息
* @param msg 消息字符串

> ```javascript
>   var request = require('request');
>   var url = "http://127.0.0.1:20390/global";
>   var params = {
>     "type": "toast",
>     "msg": "我是消息"
>   };
>   request({
>     url: url,
>     method: "POST",
>     json: true,
>     headers: {
>       "content-type": "application/json",
>     },
>     body: params
>   }, function (error, response, body) {
>     if (!error && response.statusCode == 200) {
>       console.log(body)
>     } else {
>       console.log(error)
>     }
>   });
>   
> ```






## logd 调试消息
* 调试消息
* @param msg 消息字符串

> ```javascript
>   var request = require('request');
>   var url = "http://127.0.0.1:20390/global";
>   var params = {
>     "type": "logd",
>     "msg": "我是消息"
>   };
>   request({
>     url: url,
>     method: "POST",
>     json: true,
>     headers: {
>       "content-type": "application/json",
>     },
>     body: params
>   }, function (error, response, body) {
>     if (!error && response.statusCode == 200) {
>       console.log(body)
>     } else {
>       console.log(error)
>     }
>   });
>   
> ```


## logi 信息消息
* 信息消息
* @param msg 消息字符串

> ```javascript
>   var request = require('request');
>   var url = "http://127.0.0.1:20390/global";
>   var params = {
>     "type": "logi",
>     "msg": "我是消息"
>   };
>   request({
>     url: url,
>     method: "POST",
>     json: true,
>     headers: {
>       "content-type": "application/json",
>     },
>     body: params
>   }, function (error, response, body) {
>     if (!error && response.statusCode == 200) {
>       console.log(body)
>     } else {
>       console.log(error)
>     }
>   });
>   
> ```


## logw 警告消息
* 警告消息
* @param msg 消息字符串

> ```javascript
>   var request = require('request');
>   var url = "http://127.0.0.1:20390/global";
>   var params = {
>     "type": "logw",
>     "msg": "我是消息"
>   };
>   request({
>     url: url,
>     method: "POST",
>     json: true,
>     headers: {
>       "content-type": "application/json",
>     },
>     body: params
>   }, function (error, response, body) {
>     if (!error && response.statusCode == 200) {
>       console.log(body)
>     } else {
>       console.log(error)
>     }
>   });
>   
> ```



## loge 错误消息
* 错误消息
* @param msg 消息字符串

> ```javascript
>   var request = require('request');
>   var url = "http://127.0.0.1:20390/global";
>   var params = {
>     "type": "loge",
>     "msg": "我是消息"
>   };
>   request({
>     url: url,
>     method: "POST",
>     json: true,
>     headers: {
>       "content-type": "application/json",
>     },
>     body: params
>   }, function (error, response, body) {
>     if (!error && response.statusCode == 200) {
>       console.log(body)
>     } else {
>       console.log(error)
>     }
>   });
>   
> ```


## setSaveLog 保存日志
* 设置保存日志到手机操作
* @param save 是否保存
* @param path 自定义的文件夹
* @param size 每个文件分隔的尺寸
* @return 保存日志文件的目录

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "setSaveLog",
>       "save": true,
>       "path": "/sdcard/bbb/",
>       "size": 2048
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



## clearLog 清理日志
* 清除日志
* @param lines 整型，要清除的行数，-1 代表全部清除

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "clearLog",
>       "lines": -1
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