# 输入动作接口


## currentIsOurIme 当前是否是我们的输入法
* 当前是否是我们的输入法
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "currentIsOurIme"
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



## inputText 通过选择器输入数据
* 通过选择器输入数据
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param content 数据字符串
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>   var request = require('request');
>   var url = "http://127.0.0.1:20390/global";
>   var params = {
>     "type": "inputText",
>     "selectors": [{
>       "clz": "android.widget.EditText"
>     }],
>     "content": "是是是s"
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



## imeInputText 通过输入法输入内容
* 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
*  适合没有节点的情况，例如游戏等
* @param  selectors 选择器数组，可以为空，如果为空，前提是输入框是聚焦的状态;更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param content 数据字符串
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "imeInputText",
>       "selectors": [{
>         "clz": "android.widget.EditText"
>       }],
>       "content": "是是是"
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

## pasteText 通过选择器粘贴数据
* 通过选择器粘贴数据
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param content 数据字符串
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "pasteText",
>       "selectors": [{
>         "clz": "android.widget.EditText"
>       }],
>       "content": "是是是"
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


## clearTextField 通过选择器清除数据
* 通过选择器清除数据
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>   var request = require('request');
>   var url = "http://127.0.0.1:20390/global";
>   var params = {
>     "type": "clearTextField",
>     "selectors": [{
>       "clz": "android.widget.EditText"
>     }]
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

