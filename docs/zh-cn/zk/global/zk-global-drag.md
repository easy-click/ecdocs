# 拖动动作接口

## drag 从一个坐标到另一个坐标的拖动
* 从一个坐标到另一个坐标的拖动
* @param startX 起始X坐标
* @param startY 起始Y坐标
* @param endX 目标X坐标
* @param endY 目标Y坐标
* @param duration 动作持续时长，单位毫秒
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "drag",
>       "startX": 1000,
>       "startY": 1000,
>       "endX": 100,
>       "endY": 100,
>       "duration": 1500
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




## dragTo 拖动节点到目标节点
* 拖动节点到目标节点
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param destObj 目标选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param duration 动作持续时长，单位毫秒
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "dragTo",
>       "selectors": [{
>         "text": "设置"
>       }],
>       "destObj": [{
>         "text": "浏览器"
>       }],
>       "duration": 1500
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





## dragToPoint 拖动节点到目标坐标
* 拖动节点到目标坐标
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param endX 目标X坐标
* @param endY 目标Y坐标
* @param duration 动作持续时长，单位毫秒
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "dragToPoint",
>       "selectors": [{
>         "clz": "android.support.v7.widget.RecyclerView"
>       }],
>       "endX": 100,
>       "endY": 100,
>       "duration": 500
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