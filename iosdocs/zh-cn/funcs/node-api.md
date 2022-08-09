## 说明
- 节点模块函数主要是跟节点操作相关联
- 该模块没有模块前缀，可以直接调用函数
- 由于IOS的限制，可能部分机器获取节点过慢，建议获取节点后进行锁定节点后，在进行查找
- 也可以使用设置节点获取参数的方式进行

### 

## setFetchNodeParam 设置节点参数

* 设置获取节点的基础参数，这个参数可以有效减少获取节点的数量和消耗的时间
* 支持版本: EC iOS 中控 3.0.0+
* @param ext 是一个map，例如 {"visibleFilter":1}
*  visibleFilter 1 代表不管visible是true还是false都获取，2 代表只获取 visible=true的节点
*  labelFilter 1 代表不管label是否有值都获取，2 代表只获取label有值的节点
*  maxDepth 代表要获取节点的层级，越少速度越快，建议  1 - 500
* @return {bool} true 成功，false 失败

> ```javascript
> function main(){
> 	var data = setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"});
> 	logd(data);
> }
> main();
> ```



## getNodeInfo 获取节点集合

* timeout 超时时间，单位毫秒
* 支持版本: EC iOS 中控 3.0.0+
* @return {array} 节点对象集合

> ```javascript
> function main(){
> 	var data = label("aaa").getNodeInfo(1000);
> 	logd(JSON.stringify(data));
> }
> main();
> ```



## getOneNodeInfo 获取单节点

* timeout 超时时间，单位毫秒
* 支持版本: EC iOS 中控 3.0.0+
* @return {NodeInfo} 节点对象

> ```javascript
> function main(){
> 	var data = label("aaa").getOneNodeInfo(1000);
> 	logd(JSON.stringify(data));
> }
> main();
> ```





## 以下是选择器函数

## label label属性全匹配

* label属性全匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照label查找
>     let nd = label("设置").getOneNodeInfo(1000)
>     if (nd) {
>         console.log("label 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log("label 未查找  节点信息  ")
>     }
>     // 按照 正则表达式匹配
>     nd = labelMatch(".*置.*").getNodeInfo(1000)
>     if (nd) {
>         console.log("labelMatch 查找  节点信息 {}  ", JSON.stringify(nd))
>     } else {
>         console.log("labelMatch 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```









## labelMatch label属性正则匹配

* label属性正则匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照label查找
>     let nd = label("设置").getOneNodeInfo(1000)
>     if (nd) {
>         console.log("label 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log("label 未查找  节点信息  ")
>     }
>     // 按照 正则表达式匹配
>     nd = labelMatch(".*置.*").getNodeInfo(1000)
>     if (nd) {
>         console.log("labelMatch 查找  节点信息 {}  ", JSON.stringify(nd))
>     } else {
>         console.log("labelMatch 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```





## name name属性全匹配

* name 属性全匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 name 查找
>     let nd = name("设置").getOneNodeInfo(1000)
>     if (nd) {
>         console.log("name 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log("name 未查找  节点信息  ")
>     }
>     // 按照 name 正则表达式匹配
>     nd = nameMatch(".*置.*").getNodeInfo(1000)
>     if (nd) {
>         console.log("nameMatch 查找  节点信息 {}  ", JSON.stringify(nd))
>     } else {
>         console.log("nameMatch 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```



## nameMatch name属性正则匹配

* name 属性正则匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 name 查找
>     let nd = name("设置").getOneNodeInfo(1000)
>     if (nd) {
>         console.log("name 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log("name 未查找  节点信息  ")
>     }
>     // 按照 name 正则表达式匹配
>     nd = nameMatch(".*置.*").getNodeInfo(1000)
>     if (nd) {
>         console.log("nameMatch 查找  节点信息 {}  ", JSON.stringify(nd))
>     } else {
>         console.log("nameMatch 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```



## type type属性全匹配

* type 属性全匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 type 查找
>     let nd = type("XCUIElementTypeOther").getOneNodeInfo(1000)
>     if (nd) {
>         console.log("type 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log("label 未查找  节点信息  ")
>     }
>     // 按照 type 正则表达式匹配
>     nd = typeMatch(".*XCUIElement.*").getNodeInfo(1000)
>     if (nd) {
>         console.log("typeMatch 查找  节点信息 {}  ", JSON.stringify(nd))
>     } else {
>         console.log("typeMatch 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```



## typeMatch type属性正则匹配

* type 属性正则匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 type 查找
>     let nd = type("XCUIElementTypeOther").getOneNodeInfo(1000)
>     if (nd) {
>         console.log("type 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log("label 未查找  节点信息  ")
>     }
>     // 按照 type 正则表达式匹配
>     nd = typeMatch(".*XCUIElementTypeOther.*").getNodeInfo(1000)
>     if (nd) {
>         console.log("typeMatch 查找  节点信息 {}  ", JSON.stringify(nd))
>     } else {
>         console.log("ltypeMatch 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```







## enabled enabled属性全匹配

* enabled 属性全匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 enabled , accessible 查找
>     let nd = enabled(true).accessible(true).getOneNodeInfo(1000)
>     if (nd) {
>         console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log(" 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```







## accessible accessible属性全匹配

* accessible 属性全匹配

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 enabled , accessible 查找
>     let nd = enabled(true).accessible(true).getOneNodeInfo(1000)
>     if (nd) {
>         console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log(" 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```





## visible visible属性全匹配

* visible 属性全匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 visible  查找
>     let nd = visible(true).getOneNodeInfo(1000)
>     if (nd) {
>         console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log(" 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```



## index index属性全匹配

* index 属性全匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 index  查找
>     let nd = index(1).getOneNodeInfo(1000)
>     if (nd) {
>         console.log(" 查找 节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log(" 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```



## childcount childcount属性全匹配

* childcount 属性全匹配

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 childCount  查找
>     let nd = childCount(2).getOneNodeInfo(1000)
>     if (nd) {
>         console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log(" 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```





## bounds bounds属性范围匹配

* bounds 属性范围匹配
* 支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 bounds  查找
>     let nd = bounds(100, 100, 300, 300).getOneNodeInfo(1000)
>     if (nd) {
>         console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log(" 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```







## 多属性级联查询

支持版本: EC iOS 中控 3.0.0+

> ```javascript
> function main() {
>     //开始再这里编写代码了！！
>     logd("检查自动化环境...")
>     //如果自动化服务正常
>     if (!autoServiceStart(3)) {
>         logd("自动化服务启动失败，无法执行脚本")
>         exit();
>         return;
>     }
>     logd("开始执行脚本...")
>     // 设置读取节点的参数, 具体请看设置节点参数的含义
>     setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2"})
>     // 先释放老的数据
>     releaseNode();
>     // 锁定新的节点数据
>     lockNode();
>     // 进入查找状态
>     // 按照 级联模式  查找
>     let nd = labelMatch(".*1.*").enabled(true).accessible(true).bounds(100, 100, 300, 300).getOneNodeInfo(1000)
>     if (nd) {
>         console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
>         // 如果找到了 就点击
>         let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
>         logd("点他: {}", c)
>     } else {
>         console.log(" 未查找  节点信息  ")
>     }
>     // 先释放老的数据
>     releaseNode();
> }
> 
> function autoServiceStart(time) {
>     for (let i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         let started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main()
> ```





## 以下是节点的级联操作

## parent 查询节点的父级

* 查询节点的父级
* 支持版本: EC iOS 中控 3.0.0+
* @return {NodeInfo} 节点对象

```json
function main() {

    // 进入查找状态
    let nd = labelMatch(".*1.*").getOneNodeInfo(1000)
    if (nd) {
        console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
        let parent = nd.parent()
        console.log(" 查找 parent {}  ", JSON.stringify(parent))
    } else {
        console.log(" 未查找  节点信息  ")
    }
    // 先释放老的数据
    releaseNode();
}


main()
```

## child 取得单个子节点

* 取得单个子节点
* 支持版本: EC iOS 中控 3.0.0+
* @param index – 子节点索引
* @return {NodeInfo} NodeInfo 对象 或者null

```json
function main() {

    // 进入查找状态
    let nd = labelMatch(".*1.*").getOneNodeInfo(1000)
    if (nd) {
        console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
       let child1 = nd.child(0)
        console.log(" 查找 child {}  ", JSON.stringify(child1))
    } else {
        console.log(" 未查找  节点信息  ")
    }
    // 先释放老的数据
    releaseNode();
}


main()
```

## allChildren 取得所有子节点

* 取得所有子节点
* 支持版本: EC iOS 中控 3.0.0+
* @return {array} NodeInfo 节点集合

```json
function main() {

    // 进入查找状态
    let nd = labelMatch(".*1.*").getOneNodeInfo(1000)
    if (nd) {
        console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
       let allChildren = nd.allChildren()
        console.log(" 查找 allChildren {}  ", JSON.stringify(allChildren))
    } else {
        console.log(" 未查找  节点信息  ")
    }
    // 先释放老的数据
    releaseNode();
}


main()
```

## siblings 取得所有兄弟节点

* 当前节点的所有兄弟节点
* 支持版本: EC iOS 中控 3.0.0+
* @return {array} NodeInfo 节点集合

```json
function main() {

    // 进入查找状态
    let nd = labelMatch(".*1.*").getOneNodeInfo(1000)
    if (nd) {
        console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
       let siblings = nd.siblings()
        console.log(" 查找 siblings {}  ", JSON.stringify(siblings))
    } else {
        console.log(" 未查找  节点信息  ")
    }
    // 先释放老的数据
    releaseNode();
}


main()
```

## previousSiblings 取得前面的兄弟节点

* 在当前节点前面的兄弟节点
* 支持版本: EC iOS 中控 3.0.0+
* @return {array} NodeInfo 节点集合

```json
function main() {

    // 进入查找状态
    let nd = labelMatch(".*1.*").getOneNodeInfo(1000)
    if (nd) {
        console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
       let previousSiblings = nd.previousSiblings()
        console.log(" 查找 previousSiblings {}  ", JSON.stringify(previousSiblings))
    } else {
        console.log(" 未查找  节点信息  ")
    }
    // 先释放老的数据
    releaseNode();
}


main()
```

## nextSiblings 取得后面的兄弟节点

* 在当前节点后面的兄弟节点
* 支持版本: EC iOS 中控 3.0.0+
* @return {array} NodeInfo 节点集合

```json
function main() {

    // 进入查找状态
    let nd = labelMatch(".*1.*").getOneNodeInfo(1000)
    if (nd) {
        console.log(" 查找  节点信息 {}  ", JSON.stringify(nd))
       let nextSiblings = nd.nextSiblings()
        console.log(" 查找 nextSiblings {}  ", JSON.stringify(nextSiblings))
    } else {
        console.log(" 未查找  节点信息  ")
    }
    // 先释放老的数据
    releaseNode();
}


main()
```

