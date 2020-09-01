- 对应功能函数中的 代理事件 模块


## setCurrentIme 设置我们的输入法

* 设置当前的输入法，用于输入数据
* @return {boolean|布尔型}

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "setCurrentIme"
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

## restoreIme 恢复输入法

* 恢复到之前的输入法
* @return {boolean|布尔型}

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "restoreIme"
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

## inputEvent 执行输入事件

* 执行输入事件
* @param action 动作，请看类: MotionEvent.ACTION_*
* @param x x坐标
* @param y y坐标
* @param metaState 控制按键，比如说shift键，alt键，ctrl键等控制键, 0或者 1 any meta info
* @return 布尔型 true 代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>   var params = {
>      "type": "inputEvent",
>      "action": 0,
>      "x": 1,
>      "y": 1,
>      "metaState": 0,
>    };
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



## touchDown 按下事件

* 执行按下输入事件
* @param x x坐标
* @param y y坐标
* @return 布尔型 true 代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "touchDown",
>       "x": 1,
>       "y": 1
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
>     
> ```



## touchMove 移动事件

* 执行移动输入事件
* @param x x坐标
* @param y y坐标
* @return 布尔型 true 代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "touchMove",
>       "x": 1,
>       "y": 1
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
>     
> ```



## touchUp 弹起输事件

* 执行弹起输入事件
* @param x x坐标
* @param y y坐标
* @return 布尔型 true 代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "touchUp",
>       "x": 1,
>       "y": 1
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
>     
> ```


## pressKey 模拟按键

* 模拟按键,例如home back等
* @param key 对应的值分别为 home, back, left, right, up, down, center, menu, search, enter, delete(or del), recent(recent apps), volume_up, volume_down, volume_mute, camera, power
*@return 布尔型 true 成功, false 失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "pressKey",
>       "key": "back"
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
>     
> ```


## pressKeyCode 模拟键盘输入

* 模拟键盘输入
* @param keyCode 键盘的key，参见KeyEvent.KEYCODE_*
* @return 布尔型 true 代表成功，false 代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "pressKeyCode",
>       "keyCode": 4
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
>     
> ```




## pressKeyCodeWithMetaState 模拟键盘输入

* 模拟键盘输入
* @param keyCode keyCode 键盘的key，参见KeyEvent.KEYCODE_*
* @param metaState metaState 控制按键，比如说shift键，alt键，ctrl键等控制键, 0或者 1
* @return 布尔型 true 代表成功，false 代表失败。

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "pressKeyCodeWithMetaState",
>       "keyCode": 4,
>       "metaState":1
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
>     
> ```

## menu 打开菜单
* 打开菜单
*  @return {null|布尔型}

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "menu"
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
> ```


## enter Enter键


* Enter键
* @return {null|布尔型}


> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "enter"
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
> ```

## delete 删除键
* 删除键
* @return {null|布尔型}

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "delete"
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
> ```


## closeScreen 关闭屏幕，省点模式

* 关闭屏幕，屏幕不亮，但是依然可以自动点击
* @return 布尔型 true 成功，false 失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "closeScreen"
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
> ```


## lightScreen  点亮屏幕

* 点亮屏幕，和closeScreen相反的动作
* @return 布尔型 true 成功，false 失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/agentEvent";
>     var params = {
>       "type": "lightScreen"
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
> ```