# 滑动动作接口
- 文档函数中如果有selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)


## swipe 滑动节点
* 滑动节点
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param endX 目标X坐标
* @param endY 目标Y坐标
* @param duration 动作持续时长，单位毫秒
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "swipe",
>       "selectors": [{
>         "scrollable": true
>       }],
>       "endX": 60,
>       "endY": 200,
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





## swipeToPoint 滑动坐标到目标坐标
* 滑动坐标到目标坐标
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
>       "type": "swipeToPoint",
>       "selectors": [{
>         "scrollable": true
>       }],
>       "startX": 1000,
>       "startY": 1000,
>       "endX": 60,
>       "endY": 2000,
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


## isScrollEnd 是否滚动到底部了
* 是否滚动到底部了，如果查不到元素也会返回false
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param direction 滚动方向 UP,DOWN,LEFT,RIGHT
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url="http://127.0.0.1:20390/global";
>     var p = {
>              "type": "isScrollEnd",
>              "selectors": [{
>                   "scrollable": true
>              }],
>             "direction":"UP"
>          };
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


## scrollForward 无指针向前滚动
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 向前滚动
* @param selectors 选择器对象
* @return {boolean|布尔型}

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "scrollForward",
>       "selectors": [{
>         "clz": "android.support.v7.widget.RecyclerView",
>         "scrollable": true
>       }],
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

## scrollBackward 无指针向后滚动

* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 向后滚动
* @param selectors 选择器对象
* @return {boolean|布尔型}

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "scrollBackward",
>       "selectors": [{
>         "clz": "android.support.v7.widget.RecyclerView",
>         "scrollable": true
>       }],
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