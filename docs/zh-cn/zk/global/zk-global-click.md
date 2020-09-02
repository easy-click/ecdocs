# 点击动作接口

- 文档函数中如果有selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)

## clickPoint 点击坐标
* 点击坐标
* @param  x x坐标
* @param  y y坐标
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "clickPoint",
>       "x": 200,
>       "y": 200
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

## longClickPoint 长点击坐标
* 长点击坐标
* @param  x x坐标
* @param  y y坐标
* @return 布尔型，true代表成功 false代表失败


> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "longClickPoint",
>       "x": 200,
>       "y": 200
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




## click 选择器点击
* 选择器点击
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "click",
>       "selectors": [{
>         "text": "时钟"
>       }]
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

## clickEx 无指针点击
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 无指针方式点击选择器，节点必须是可点击的才行
* @param selectors 选择器对象
* @return {boolean|布尔型}

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "clickEx",
>       "selectors": [{
>         "clickable": : true
>       }]
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
## longClick 长选择器点击
* 长选择器点击
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "longClick",
>       "selectors": [{
>         "text": "时钟"
>       }]
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


## longClickEx 无指针长点击
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 无指针方式长点击选择器，节点必须是可点击的才行
* @param selectors 选择器对象
* @return {boolean|布尔型}

> ```javascript
>       var request = require('request');
>       var url = "http://127.0.0.1:20390/global";
>       var params = {
>         "type": "longClickEx",
>         "selectors": [{
>           "clickable": true
>         }]
>       };
>       request({
>         url: url,
>         method: "POST",
>         json: true,
>         headers: {
>           "content-type": "application/json",
>         },
>         body: params
>       }, function (error, response, body) {
>         if (!error && response.statusCode == 200) {
>           console.log(body)
>         } else {
>           console.log(error)
>         }
>       });
> ```