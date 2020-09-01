# 悬浮窗接口

## hasFloatViewPermission 检查是否含有浮窗权限

* 检查是否含有浮窗权限

* @return 布尔型 

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"hasFloatViewPermission"
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

## requestFloatViewPermission 请求展示浮窗的权限

* 请求展示浮窗的权限
* @param timeout 超时时间，单位毫秒
* @return 布尔型

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"requestFloatViewPermission",
>                   "timeout":10000
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







## showLogWindow 展示日志浮窗
* 展示日志浮窗
* @return 布尔型 

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"showLogWindow"
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



## closeLogWindow 关闭日志浮窗
* 关闭日志浮窗
* @return 布尔型 true 代表保存，false代表不保存

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var p = {
>                  "type":"closeLogWindow"
>              };
>     var data = JSON.stringify(p);
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


## setLogViewSizeEx 设置日志窗口大小
* 设置日志窗口大小扩展函数
* @param map 例如
* {
*  "x":100,
*  "y":100,
*  "w":100,
*  "h":200,
*  "textSize":12,
*  "backgroundColor":"#ffffff",
*  "title":"我是日志",
*  "showTitle":true
* }
* 解释：
* x: 起始X位置
* y: 起始Y位置
* w:宽度
h* :高度
* textSize:日志的字体大小
* backgroundColor:背景颜色，例如#336699
* title:日志框标题
* showTitle：是否显示标题
* @return bool true代表成功，false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "setLogViewSizeEx",
>       "x": 100,
>       "y": 200,
>       "w": 600,
>       "h": 600,
>       "textSize": 12,
>       "backgroundColor": "#ffffff",
>       "title": "我是日222志",
>       "showTitle": false
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

## setLogText 展示消息到悬浮窗日志


* 展示消息到悬浮窗日志中
* @param msg 消息
* @return 布尔型 

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"setLogText",
>                 "msg": "msg"
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



## setAllLogEnd 结束所有日志展示


* 结束所有日志展示，恢复悬浮窗可拖动
* @return 布尔型 

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var data = {
>                  "type":"setAllLogEnd"
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


















