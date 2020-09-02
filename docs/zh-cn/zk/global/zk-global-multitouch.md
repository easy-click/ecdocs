# 多点触摸动作接口



## multiTouch 多点触摸
* 多点触摸，用法和[全局快捷事件-多点触摸](/zh-cn/funcs/global/global-shortcut.html#multitouch-多点触摸)相同
* @param  arrays 多点触摸的数组，请看实例
* @param  timeout 超时时间，单位毫秒
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var touch1 = [
>       {"action": 0, "x": 500, "y": 1200, "pointer": 1, "delay": 1},
>       {"action": 2, "x": 500, "y": 1100, "pointer": 1, "delay": 20},
>       {"action": 2, "x": 500, "y": 1000, "pointer": 1, "delay": 20},
>       {"action": 1, "x": 1, "y": 1, "pointer": 1, "delay": 20}
>     ];
>     var touch2 = [
>       {"action": 0, "x": 800, "y": 1200, "pointer": 2, "delay": 1},
>       {"action": 2, "x": 800, "y": 1100, "pointer": 2, "delay": 20},
>       {"action": 2, "x": 800, "y": 1000, "pointer": 2, "delay": 20},
>       {"action": 1, "x": 800, "y": 1, "pointer": 2, "delay": 20}
>     ];
>     var params = {
>       "type": "multiTouch",
>       "arrays": [touch1, touch2],
>       "timeout": 1000
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