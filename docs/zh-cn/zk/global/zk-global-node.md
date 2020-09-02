# 节点操作接口
- 参数中NID解释：节点的唯一标识，使用开发工具节点工具获取到，或者是NodeInfo对象中的nid [节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
## has 通过选择器判断元素是否存在
* 通过选择器判断元素是否存在
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "has",
>       "selectors": [{
>         "text": "设置"
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



## waitExistActivity 等待activity界面出现

* 等待activity界面出现

* @param  activity activity类名
* @param  timeout 超时时间 单位毫秒
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "waitExistActivity",
>       "activity": "com.xx.MainActivity",
>       "timeout": 10000
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



## waitExistNode 通过选择器判断并等待元素是否存在
* 通过选择器判断并等待元素是否存在
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param  timeout 超时时间 单位毫秒
* @return 布尔型，true代表成功 false代表失败

> ```javascript
>       var request = require('request');
>       var url = "http://127.0.0.1:20390/global";
>       var params = {
>         "type": "waitExistNode",
>         "selectors": [{
>           "text": "设置"
>         }],
>         "timeout": 10000
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
>       
> ```



## getNodeInfo 获取多个节点信息
* 获取多个节点信息
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param  timeout 超时时间 单位毫秒
* @return 节点信息集合JSON字符串[节点信息属性](/zh-cn/funcs/global/selector-node.md#节点信息类)

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "getNodeInfo",
>       "selectors": [{
>         "text": "设置"
>       }],
>       "timeout": 10000
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



## getOneNodeInfo 获取单个节点信息
* 获取单个节点信息
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param  timeout 超时时间 单位毫秒
* @return 单个节点信息JSON字符串[节点信息属性](/zh-cn/funcs/global/selector-node.md#节点信息类)

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "getOneNodeInfo",
>       "selectors": [{
>         "text": "设置"
>       }],
>       "timeout": 10000
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



## setFetchNodeMode 设置获取节点的模式

* 设置获取节点的模式
* @param mode 1 是增强型， 2 是快速型，默认是增强型
* @param fetchInvisibleNode 是否抓取隐藏的元素，默认不抓取
* @param fetchNotImportantNode 是否抓取不重要的元素
* @return 布尔型，true代表成功 false代表失败
> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "setFetchNodeMode",
>       "mode": 1,
>       "fetchInvisibleNode": true,
>       "fetchNotImportantNode": true,
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




## dumpXml 将元素节点变成XML

* 将元素节点变成XML
* @return 字符串
> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "dumpXml"
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

## lockNode 锁定当前节点

* 锁定当前节点，锁定后，后面就算界面刷新，但是节点还是老的信息，需要和releaseNode进行配合才能进行解锁
> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "lockNode"
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



## releaseNode 释放节点的锁
* 释放节点的锁，释放后，当界面刷新的时候，节点信息会变成最新的
> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "lockNode"
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

# 单节点连续操作
- 以下操作均是建立在取得节点信息后，有节点的nid的时候才能进行，如何取得节点信息请看getOneNodeInfo或者getNodeInfo方法


## getNodeInfoParent 该节点的父级节点

* 该节点的父级节点
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @return  节点信息的JSON字符串

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "getNodeInfoParent",
>       "nid": "ed21a0147283cd62b324d695a787e093"
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



## getNodeInfoChild 该节点的子节点

* 该节点的子节点
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @param index 节点所有 从0开始
* @return  节点信息的JSON字符串

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "getNodeInfoChild",
>       "nid": "cc6a420515ac7940d60fd93155451fae",
>       "index": 0
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



## getNodeInfoAllChildren 该节点的所有子节点

* 该节点的所有子节点
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)

* @return  节点信息数组的JSON字符串

> ```javascript
>   var request = require('request');
>   var url = "http://127.0.0.1:20390/global";
>   var params = {
>     "type": "getNodeInfoAllChildren",
>     "nid": "cc6a420515ac7940d60fd93155451fae"
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

## getPreviousSiblingNodeInfo 前面的兄弟节点

* 前面的兄弟节点
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)

* @return  节点信息数组的JSON字符串

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "getPreviousSiblingNodeInfo",
>       "nid": "0019c4506d4cf5bb325d3bc932267e32"
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


## getNextSiblingNodeInfo 后面的兄弟节点

* 后面的兄弟节点
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)

* @return  节点信息数组的JSON字符串

> ```javascript
>   var request = require('request');
>   var url = "http://127.0.0.1:20390/global";
>   var params = {
>     "type": "getNextSiblingNodeInfo",
>     "nid": "0019c4506d4cf5bb325d3bc932267e32"
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


## getSiblingNodeInfo 所有兄弟节点

* 所有兄弟节点
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)

* @return  节点信息数组的JSON字符串

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "getSiblingNodeInfo",
>       "nid": "0019c4506d4cf5bb325d3bc932267e32"
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



## inputTextNodeInfo 节点输入

* 节点输入
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @param content 要输入的内容
* @return   布尔型 true 代表保存，false代表不保存

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "inputTextNodeInfo",
>       "nid": "64bbd7471d558ba06f594686e1d90ea1",
>       "content": "我是内容"
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





## pasteTextNodeInfo 节点粘贴输入

* 节点粘贴输入
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @param content 要输入的内容
* @return  布尔型 true 代表成功，false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "pasteTextNodeInfo",
>       "nid": "64bbd7471d558ba06f594686e1d90ea1",
>       "content": "我是内容"
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


## imeInputTextNodeInfo 节点输入法输入

* 节点输入法输入
* @param nid ,可以为空，但是控件提前是聚焦状态 nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @param content 要输入的内容
* @return   布尔型 true 代表成功，false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "imeInputTextNodeInfo",
>       "nid": "64bbd7471d558ba06f594686e1d90ea1",
>       "content": "我是内容"
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


## clearTextNodeInfo 清除节点数据

* 清除节点数据
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @return   布尔型 true 代表成功，false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "clearTextNodeInfo",
>       "nid": "64bbd7471d558ba06f594686e1d90ea1"
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



## refreshNodeInfo 刷新节点数据

* 刷新节点数据
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @return   布尔型 true 代表成功，false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "refreshNodeInfo",
>       "nid": "64bbd7471d558ba06f594686e1d90ea1"
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




## isValidNodeInfo 节点是否有效

* 节点是否有效
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @return   布尔型 true 代表成功，false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "isValidNodeInfo",
>       "nid": "64bbd7471d558ba06f594686e1d90ea1"
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


## clickNodeInfo
* 1、先通过getOneNodeInfo获取到NodeInfo对象
* 2、通过NodeInfo对象中的bounds属性，自行计算出要点击的x，y坐标，然后调用clickPoint方法

## longClickNodeInfo
* 1、先通过getOneNodeInfo获取到NodeInfo对象
* 2、通过NodeInfo对象中的bounds属性，自行计算出要点击的x，y坐标，然后调用 longClickPoint 方法


## clickNodeInfoEx 无指针方式点击
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 无指针方式点击选择器，节点必须是可点击的才行
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* 布尔型 true 代表成功，false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "clickNodeInfoEx",
>       "nid": "0019c4506d4cf5bb325d3bc932267e32"
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

## longClickNodeInfoEx 无指针方式长点击
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 无指针方式长点击选择器，节点必须是可点击的才行
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* 布尔型 true 代表成功，false代表失败

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "longClickNodeInfoEx",
>       "nid": "0019c4506d4cf5bb325d3bc932267e32"
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


## scrollForwardNodeInfo 向前滚动
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 向前滚动
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @return {boolean|布尔型}

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "scrollForwardNodeInfo",
>       "nid": "d781a853cf8a116cc31c7bab9ef4c405"
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



## scrollBackwardNodeInfo 向后滚动

* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 向后滚动
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @return {boolean|布尔型}

> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "scrollBackwardNodeInfo",
>       "nid": "d781a853cf8a116cc31c7bab9ef4c405"
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





## getOneNodeInfoForNode 取得子节点下面的某个节点

* 取得子节点下面的某个节点
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param  timeout 超时时间 单位毫秒
* @return 单个节点信息JSON字符串[节点信息属性](/zh-cn/funcs/global/selector-node.md#节点信息类)


> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "getOneNodeInfoForNode",
>       "nid": "d781a853cf8a116cc31c7bab9ef4c405",
>       "selectors": [{
>         "clz": "android.widget.TextView"
>       }],
>       "timeout": 10 * 1000
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










## getNodeInfoForNode 取得子节点下面的所有节点

* 取得子节点下面的所有节点
* @param nid nodeinfo的nid值[节点信息类](zh-cn/funcs/global/selector-node.md#节点信息类)
* @param  selectors 选择器数组，更多选择器属性，请查看[选择器与节点属性](/zh-cn/funcs/global/selector-node.md#节点信息类)
* @param  timeout 超时时间 单位毫秒
* @return 节点信息集合JSON字符串[节点信息属性](/zh-cn/funcs/global/selector-node.md#节点信息类)


> ```javascript
>     var request = require('request');
>     var url = "http://127.0.0.1:20390/global";
>     var params = {
>       "type": "getNodeInfoForNode",
>       "nid": "d781a853cf8a116cc31c7bab9ef4c405",
>       "selectors": [{
>         "clz": "android.widget.TextView"
>       }],
>       "timeout": 10 * 1000
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