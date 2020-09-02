# 通知栏接口

## hasNotificationPermission 检查是否含有状态栏监听权限

* 检查是否含有状态栏监听权限
* @return 布尔型 

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"hasNotificationPermission"
>              };
>     request({
>               url: url,
>               method: "POST",
>               json: true,
>               headers: {
>                  "content-type": "application/json",
>               },
>              body: data
>           }, function(error, response, body) {
>               if (!error && response.statusCode == 200) {
>                   console.log(body) 
>           }
> }
> ```


## requestNotificationPermission 请求监听状态栏的权限

* 请求监听状态栏的权限
* @param timeout 超时时间，单位毫秒
* @return 布尔型 

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"requestNotificationPermission",
>                   "timeout":10000,
>              };
>     request({
>               url: url,
>               method: "POST",
>               json: true,
>               headers: {
>                  "content-type": "application/json",
>               },
>              body: data
>           }, function(error, response, body) {
>               if (!error && response.statusCode == 200) {
>                   console.log(body) 
>           }
> }
> ```


## getLastNotification 获取最近通知栏对象

* 获取最近通知栏对象
* @param pkg 指定包名
* @param size 指定获取的条数
* @return JSON数组字符串，请参考[获取通知](/zh-cn/funcs/global/global-shortcut.html#getlastnotification)

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"getLastNotification",
>                 "pkg":"",
>                   "size":10
>              };
>     request({
>               url: url,
>               method: "POST",
>               json: true,
>               headers: {
>                  "content-type": "application/json",
>               },
>              body: data
>           }, function(error, response, body) {
>               if (!error && response.statusCode == 200) {
>                   console.log(body) 
>           }
> }
> ```


## shotNotification 将通知发射处理，相当于点击了通知栏

* 将通知发射处理，相当于点击了通知栏
* @param seqId getLastNotification方法获取通知栏数据的seqId
* @return 布尔型 

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"shotNotification",
>                   "seqId":"XXXXXX"
>              };
>     request({
>               url: url,
>               method: "POST",
>               json: true,
>               headers: {
>                  "content-type": "application/json",
>               },
>              body: data
>           }, function(error, response, body) {
>               if (!error && response.statusCode == 200) {
>                   console.log(body) 
>           }
> }
> ```


## cancelNotification 将通知进行取消操作
* 将通知进行取消操作
* @param seqId getLastNotification方法获取通知栏数据的seqId
* @return 布尔型  

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"cancelNotification",
>                   "seqId":"XXXXXX"
>              };
>     request({
>               url: url,
>               method: "POST",
>               json: true,
>               headers: {
>                  "content-type": "application/json",
>               },
>              body: data
>           }, function(error, response, body) {
>               if (!error && response.statusCode == 200) {
>                   console.log(body) 
>           }
> }
> ```


## ignoreNotification 忽略通知
* 忽略通知，从缓存队列移除，下次将不会获取
* @param seqId getLastNotification方法获取通知栏数据的seqId
* @return 布尔型 

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"ignoreNotification",
>                   "seqId":"XXXXXX"
>              };
>     request({
>               url: url,
>               method: "POST",
>               json: true,
>               headers: {
>                  "content-type": "application/json",
>               },
>              body: data
>           }, function(error, response, body) {
>               if (!error && response.statusCode == 200) {
>                   console.log(body) 
>           }
> }
> ```



## getLastToast 获取toast数据


* 获取toast数据

* @param pkg 指定包名
* @param size 指定获取的条数
* @return JSON数组字符串，请参考[获取Toast](/zh-cn/funcs/global/global-shortcut.html#getlasttoast)

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"getLastToast",
>                 "pkg":"",
>                   "size":10
>              };
>     request({
>               url: url,
>               method: "POST",
>               json: true,
>               headers: {
>                  "content-type": "application/json",
>               },
>              body: data
>           }, function(error, response, body) {
>               if (!error && response.statusCode == 200) {
>                   console.log(body) 
>           }
> }
> ```