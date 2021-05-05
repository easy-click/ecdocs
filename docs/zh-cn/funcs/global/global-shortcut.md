## 说明

全局模块中封装的快捷事件，不用区分是无障碍模式还是代理模式

## 手势事件模式

### setGestureActionMode 设置手势模式事件

 * 设置各种手势模式事件的操作类型，默认是异步,目前只对无障碍模式有效
 * @param mode 1 代表异步，2代表同步
 * @param bool true代表成功 false代表失败
> ```javascript
> function main(){
>     setGestureActionMode(1);
> //    setGestureActionMode(2);
> }
> main();
> ```

## 点击函数
### clickPoint 坐标点击
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 点击坐标
* @param x x坐标
* @param y y坐标
* @return {boolean|布尔型}


> ```javascript
> function main(){
>     var result = clickPoint(100,100);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```



### click 选择器点击
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 点击选择器
* @param selectors 选择器对象
* @return {boolean|布尔型}


> ```javascript
> function main(){
>     var selector = text("我是文本");
>     var result = click(selector);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> 
> ```

### clickEx 无指针点击
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 无指针方式点击选择器，节点必须是可点击的才行
* @param selectors 选择器对象
* @return {boolean|布尔型}


> ```javascript
> function main(){
>     var selector = text("我是文本");
>     var result = clickEx(selector);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> 
> ```


### longClickEx 无指针长点击
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 无指针方式长点击选择器，节点必须是可点击的才行
* @param selectors 选择器对象
* @return {boolean|布尔型}


> ```javascript
> function main(){
>     var selector = text("我是文本");
>     var result = longClickEx(selector);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> 
> ```

### clickRandom 选择器随机点击
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 随机点击选择器的任意元素
* @param selectors 选择器对象
* @return {boolean|布尔型}


> ```javascript
> function main(){
>     var selector = text("我是文本");
>     var result = clickRandom(selector);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> 
> ```


### clickRandomEx 无指针随机点击
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 随机点击选择器的任意元素
* @param selectors 选择器对象
* @return {boolean|布尔型}


> ```javascript
> function main(){
>     var selector = text("我是文本");
>     var result = clickRandomEx(selector);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> 
> ```

### clickRandomRect 区域随机点击
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 随机点击区域中的坐标
* @param rect 区域对象
* @return {boolean|布尔型}


> ```javascript
> 
> function main(){
>     var rect = new Rect();
>     rect.left = 10;
>     rect.right = 200;
>     rect.top = 10;
>     rect.bottom = 400;
>     var result = clickRandomRect(rect);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```


### clickCenter 点击中心点
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 点击区域中的中心坐标
* @param rect 区域对象
* @return {boolean|布尔型}


> ```javascript
> 
> function main(){
>     var rect = new Rect();
>     rect.left = 10;
>     rect.right = 200;
>     rect.top = 10;
>     rect.bottom = 400;
>     var result = clickCenter(rect);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```





### clickText 点击文本
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 点击文本
* @param text 文本
* @return {boolean|布尔型}


> ```javascript
> 
> function main(){
>   var result = clickText("设置");
>   if (result){
>        toast("点击成功");
>   } else {
>     toast("点击失败");
>   }
> }
> main();
> 
> ```

### longClick 选择器长点击
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 长点击选择器
* @param selectors 选择器对象
* @return {boolean|布尔型}


> ```javascript
> 
> function main(){
>     var selector = text("我是文本");
>     var result = longClick(selector);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> 
> main();
> ```


### longClickPoint 坐标长点击
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 长点击坐标
* @param x x坐标
* @param y y坐标
* @return {boolean|布尔型}


> ```javascript
> 
> function main(){
>     var result = longClickPoint(100,100);
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```


### press 坐标长按
 * 长按住事件
 * 适用版本(EC 5.15.0+)
 * @param x x坐标
 * @param y y坐标
 * @param delay 长按时间  毫秒
 * @return {bool} true 成功 false 失败


> ```javascript
> 
> function main(){
>     var result = press(100,100,5000);
>     if (result){
>         toast("长按成功");
>     } else {
>         toast("长按失败");
>     }
> }
> main();
> ```

## 多点触摸
### multiTouch 多点触摸
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 多点触摸<br/>
* 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2
* x: X坐标
* y: Y坐标
* pointer：设置第几个手指触摸点，分别是 1，2，3等，代表第n个手指
* delay: 该动作延迟多少毫秒执行
* @param touch1 第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":20},{"action":2,"x":1,"y":1,"pointer":1,"delay":20}]
* @param touch2 第2个手指的触摸点数组
* @param touch3 第3个手指的触摸点数组
* @param timeout 多点触摸执行的超时时间，单位是毫秒
* @return boolean|布尔型

> ```javascript
> function main() {
>    utils.openAppByName("视频");
>    sleep(3000);
>   //第一种数组式的写法
>    var touch1 = [
>
>        {"action": 0, "x": 500, "y": 1200, "pointer": 1, "delay": 1},
>        {
>            "action": 2,
>            "x": 500,
>            "y": 1100,
>            "pointer": 1,
>            "delay": 20
>        }, {
>            "action": 2,
>            "x": 500,
>            "y": 1000,
>            "pointer": 1,
>            "delay": 20
>        },
>        {
>            "action": 1,
>            "x": 1,
>            "y": 1,
>            "pointer": 1,
>            "delay": 20
>        }];
>
>
>   //第二种链式调用方法
>    var touch1 = MultiPoint
>        .get()
>        .action(0).x(500).y(1200).pointer(1).delay(1)
>        .next()
>        .action(2).x(500).y(1100).pointer(1).delay(1)
>        .next()
>        .action(2).x(500).y(1000).pointer(1).delay(1)
>        .next()
>        .action(2).x(500).y(900).pointer(1).delay(1)
>        .next()
>        .action(1).x(500).y(800).pointer(1).delay(1);
>    var touch2 = MultiPoint
>        .get()
>        .action(0).x(300).y(1200).pointer(2).delay(1)
>        .next()
>        .action(2).x(300).y(1100).pointer(2).delay(1)
>        .next()
>        .action(2).x(300).y(1000).pointer(2).delay(1)
>        .next()
>        .action(2).x(300).y(900).pointer(2).delay(1)
>        .next()
>        .action(1).x(300).y(800).pointer(2).delay(1);
>    var x = multiTouch(touch1, touch2, null, 30000);
>    logd("xxs " + x);
> }
> main();
> ```

## 滚动函数

### scrollForward 无指针向前滚动
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 向前滚动
* @param selectors 选择器对象
* @return {boolean|布尔型}


> ```javascript
> 
> function main(){
>     var selector = scrollable(true);
>     var result = scrollForward(selector);
>     if (result){
>         toast("滚动成功");
>     } else {
>         toast("滚动失败");
>     }
> }
> 
> main();
> ```


### scrollBackward 无指针向后滚动
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 向后滚动
* @param selectors 选择器对象
* @return {boolean|布尔型}


> ```javascript
> 
> function main(){
>     var selector = scrollable(true);
>     var result = scrollBackward(selector);
>     if (result){
>         toast("滚动成功");
>     } else {
>         toast("滚动失败");
>     }
> }
> 
> main();
> ```



## 滑动函数
### swipe  滑动
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 通过选择器滑动节点
* @param selectors 节点选择器
* @param endX      结束的X坐标
* @param endY      结束的Y坐标
* @param duration 持续时长 单位毫秒
* @return 布尔型 true 代表成功 false 代表失败


> ```javascript
> 
> function main(){
>     var selectors = text("我是文本");
>     var result = swipe(selectors,100,100,200);
>     if (result){
>         toast("滑动成功");
>     } else {
>         toast("滑动失败");
>     }
> }
> main();
> ```


### swipeToPoint 坐标点滑动
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 从一个坐标滑动到另一个坐标
* @param startX 起始坐标的X轴值
* @param startY 起始坐标的Y轴值
* @param endX   结束坐标的X轴值
* @param endY   结束坐标的Y轴值
* @param duration 持续时长 单位毫秒
* @return 布尔型 true 滑动成功, false 滑动失败


> ```javascript
> 
> function main(){
>     var result = swipeToPoint(10,10,100,100,200);
>     if (result){
>         toast("滑动成功");
>     } else {
>         toast("滑动失败");
>     }
> }
> main();
> ```











### isScrollEnd 滚到底部判断
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 是否滚动到底部了，如果查不到元素也会返回false
* @param distance 滚动方向 UP,DOWN,LEFT,RIGHT
* @param selectors 选择器
* @return false 代表未滚动到位，true 代表滚动完成了

> ```javascript
> 
> function main(){
>     var selectors = clz("android.widget.ListView");
>     var result = isScrollEnd("UP",selectors);
>     if (result){
>         toast("滚动完成");
>     } else {
>         toast("滚动未完成");
>     }
> }
> main();
> ```



## 拖动函数
### drag 拖动坐标
 * 执行条件：无障碍7.0以上或者手势执行为代理服务
 * 从一个坐标到另一个坐标的拖动
 * @param startX 起始坐标的X轴值
 * @param startY 起始坐标的Y轴值
 * @param endX   结束坐标的X轴值
 * @param endY   结束坐标的Y轴值
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 拖动成功, false 拖动失败

> ```javascript
> 
> function main(){
>     var result = drag(10,10,100,100,200);
>     if (result){
>         toast("拖动成功");
>     } else {
>         toast("拖动失败");
>     }
> }
> main();
> ```


### dragTo 拖动选择器
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 通过选择器拖动某个元素到目标元素
* @param selectors 选择器 {@link S}
* @param destObj   目标元素选择器
* @param duration 持续时长 单位毫秒
* @return 布尔型 true 成功 false 失败

> ```javascript
> 
> function main(){
>     var selectors = text("设置");
>     var destObj = text("日历");
>     var result = dragTo(selectors,destObj,200);
>     if (result){
>         toast("拖动成功");
>     } else {
>         toast("拖动失败");
>     }
> }
> main();
> ```



### dragToPoint 拖动到目标选择器
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 通过选择器拖动某个元素到目标X Y 坐标
* @param selectors 原始元素选择器
* @param endX      目标 X 坐标
* @param endY      目标 Y 坐标
* @param duration 持续时长 单位毫秒
* @return 布尔型 true 成功 false 失败

> ```javascript
> 
> function main(){
>     var selectors = text("设置");
>     var result = dragToPoint(selectors,100,100,200);
>     if (result){
>         toast("拖动成功");
>     } else {
>         toast("拖动失败");
>     }
> }
> main();
> ```

## 输入数据
### currentIsOurIme 是否是自带输入法
* 当前是否是我们的输入法
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var result = currentIsOurIme();
>     if (result){
>         toast("是");
>     } else {
>         toast("否");
>     }
> }
> main();
> ```


### inputText  输入数据
* 执行条件：无障碍5.0以上
* 通过选择器输入数据
* @param selectors  选择器
* @param content 数据字符串
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var selectors= clz("android.widget.EditText");
>     var result = inputText(selectors,"我是内容");
>     if (result){
>         toast("是");
>     } else {
>         toast("否");
>     }
> }
> main();
> ```

### imeInputText 输入法输入数据
* 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
* 适合没有节点的情况，例如游戏等
* @param selectors  选择器，可以为空，如果为空，前提是输入框是聚焦的状态
* @param content 数据字符串
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var selectors= clz("android.widget.EditText");
>     var result = imeInputText(selectors,"我是内容");
>     if (result){
>         toast("是");
>     } else {
>         toast("否");
>     }
> }
> main();
> ```


### imeInputKeyCode 输入法输入code
* 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
* 适合没有节点的情况，例如游戏等
* @param selectors  选择器，可以为空，如果为空，前提是输入框是聚焦的状态
* @param content 具体请看 KeyEvent.KEYCODE_*的值，例如66 = enter 67=del,84=SEARCH
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var selectors= clz("android.widget.EditText");
>     var result = imeInputKeyCode(selectors,66);
>     if (result){
>         toast("是");
>     } else {
>         toast("否");
>     }
> }
> main();
> ```


### pasteText 粘贴数据
* 执行条件：无障碍5.0以上
* 通过选择器粘贴数据
* @param selectors  选择器
* @param content 数据字符串
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var selectors= clz("android.widget.EditText");
>     var result = pasteText(selectors,"我是内容");
>     if (result){
>         toast("是");
>     } else {
>         toast("否");
>     }
> }
> main();
> ```





### clearTextField 清除数据
* 执行条件：无障碍5.0以上
* @param selectors 节点选择器
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var selectors= clz("android.widget.EditText");
>     var result = clearTextField(selectors);
>     if (result){
>         toast("是");
>     } else {
>         toast("否");
>     }
> }
> main();
> ```


## 节点操作

### lastNodeEventTime 最近节点事件发生时间
 * 适用版本(EC 5.14.0+)
 * 获取最近的节点事件触发的时间，可通过时间判断节点服务是否可用
 * @return {long} 长整型时间，毫秒级别

> ```javascript
> 
> function main(){
>    startEnv();
>       logd("开始监听");
>    
>       while(true){
>           let d = lastNodeEventTime();
>           logd("time-> "+d);
>           sleep(1000)
>       }
> }
> main();
> ```


### has 节点存在判断
* 通过选择器判断元素是否存在
* @param selectors 选择器
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var selectors = text("设置");
>     var result = has(selectors);
>     if (result){
>         toast("存在节点");
>     } else {
>         toast("不存在节点");
>     }
> }
> main();
> ```



### waitExistActivity 等界面出现
* 等待activity界面出现
* @param activity 界面名称
* @param timeout 超时时间，单位毫秒
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var ac = "com.xxx.MainActivity";
>     var result = waitExistActivity(ac,10000);
>     if (result){
>         toast("存在界面");
>     } else {
>         toast("不存在界面");
>     }
> }
> main();
> ```

### waitExistNode 等节点出现
* 通过选择器判断并等待元素是否存
* @param selectors 选择器
* @param timeout 超时时间，单位毫秒
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var selectors = text("设置");
>     var result = waitExistNode(selectors,10000);
>     if (result){
>         toast("存在节点");
>     } else {
>         toast("不存在节点");
>     }
> }
> main();
> ```


### getText 获取文本
* 获取选择器得到的文本数据
* @param selectors 选择器
* @return {字符串数组|null|字符串集合}

> ```javascript
> 
> function main(){
>     var selectors = clz("android.widget.TextView");
>     var result = getText(selectors);
>     toast("result:"+result);
> }
> main();
> ```


### getNodeInfo 获取节点数组
* 获取节点信息
* @param selectors 选择器
* @param timeout 等待时间，单位是毫秒
* @return {null|NodeInfo数组|节点信息集合}

> ```javascript
> 
> function main(){
>     var result = getNodeInfo(clz("android.widget.TextView"),10*1000);
>     toast("result:"+JSON.stringify(result));
> }
> main();
> ```

### getNodeAttrs 节点属性信息
* 获取节点属性信息
* @param selectors 选择器
* @param attr 属性值,例如 text,className，更多的属性请参考NodeInfo对象属性
* @return {null|字符串数组|Rect对象数组}

> ```javascript
> 
> function main(){
>     var selectors = clz("android.widget.TextView");
>     //获取所有text属性
>     var result = getNodeAttrs(selectors,"text");
>     toast("result:"+result);
>     //获取所有bounds属性
>     result = getNodeAttrs(selectors,"bounds");
>     toast("result:"+result);
> }
> main();
> ```



### getOneNodeInfo 获取单个节点
* 通过选择器 获取第一个节点信息
* @param selectors 选择器
* @param timeout 等待时间，单位是毫秒
* @return NodeInfo 对象或者null

> ```javascript
> 
> function main(){
>     var result = getOneNodeInfo(clz("android.widget.TextView"),10*1000);
>     toast("result:"+JSON.stringify(result));
>     if (result){
>         result.click();
>     }
> }
> main();
> ```




### setFetchNodeMode 获取节点的模式
* 设置获取节点的模式
* @param mode 1 是增强型， 2 是快速型，默认是增强型
* @param fetchInvisibleNode 是否抓取隐藏的元素，默认不抓取
* @param fetchNotImportantNode 是否抓取不重要的元素
* @param algorithm 节点查找算法,默认是nsf，分别有 nsf = 节点静态算法，bsf= 广度优先， dsf=深度度优先

* @return {boolean|*}

> ```javascript
> 
> function main(){
>     var result = setFetchNodeMode(1,true,true,"nsf");
>     toast("result:"+result);
> }
> main();
> ```

### addNodeFlag 加上节点获取的某个标志位
* 加上节点获取的某个标志位
* @param flag 参见 AccessibilityServiceInfo.FLAG_*，如果是0是强制刷新
* @return {null|boolean}

> ```javascript
> 
> function main(){
>     var result = addNodeFlag(0);
>     toast("result:"+result);
> }
> main();
> ```


### removeNodeFlag 移除节点获取的某个标志位
* 移除节点获取的某个标志位
* @param flag 参见 AccessibilityServiceInfo.FLAG_*，如果是0是强制刷新
* @return {null|boolean}

> ```javascript
> 
> function main(){
>     var result = removeNodeFlag(0);
>     toast("result:"+result);
> }
> main();
> ```




### dumpXml 元素变XML
* 将元素节点变成XML
* @return string string|null

> ```javascript
> function main(){
>     var result = dumpXml();
>     if (result){
>         toast("ok");
>     } else {
>         toast("no");
>     }
> }
> main();
> ```


### lockNode 锁定当前节点 
* 锁定当前节点，锁定后，后面就算界面刷新，但是节点还是老的信息，需要和releaseNode进行配合才能进行解锁

> ```javascript
> function main(){
>      logd("锁住节点...")
>          //锁住节点，界面刷新也不动
>          lockNode();
>          for (var i = 0; i < 10; i++) {
>                 var n = text("设置").getOneNodeInfo(1000);
>                         logd("lock "+n)
>                         sleep(1000);
>      
>          }
>          logd("释放节点锁...")
>          //释放节点锁
>          releaseNode();
>          for (var i = 0; i < 10; i++) {
>                 var n = text("设置").getOneNodeInfo(1000);
>                         logd("unlocked "+n)
>                         sleep(1000);
>      
>          }
> }
> main();
> ```






### releaseNode 释放节点的锁
* 释放节点的锁，释放后，当界面刷新的时候，节点信息会变成最新的

> ```javascript
> function main(){
>      logd("锁住节点...")
>          //锁住节点，界面刷新也不动
>          lockNode();
>          for (var i = 0; i < 10; i++) {
>                 var n = text("设置").getOneNodeInfo(1000);
>                         logd("lock "+n)
>                         sleep(1000);
>      
>          }
>          logd("释放节点锁...")
>          //释放节点锁
>          releaseNode();
>          for (var i = 0; i < 10; i++) {
>                 var n = text("设置").getOneNodeInfo(1000);
>                         logd("unlocked "+n)
>                         sleep(1000);
>      
>          }
> }
> main();
> ```





## 系统按键相关
### home 返回主页
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 返回主页
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var result = home();
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
> }
> main();
> ```


### splitScreen 分割屏幕
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 适用版本(EC 5.15.0+)
* 返回主页
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var result = splitScreen();
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
> }
> main();
> ```





### power  模拟电源按键
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 模拟电源按键，无障碍是电源对话框，代理模式是电源键按下
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var result = power();
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
> }
> main();
> ```

### back 返回键
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 返回键
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var result = back();
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
> }
> main();
> ```


### openNotification 打开通知栏
* 执行条件：无障碍5.0以上或者手势执行为代理服务 
* 打开通知栏
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var result = openNotification();
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
> }
> main();
> ```


### openQuickSettings  打开快速设置
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 打开快速设置
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var result = openQuickSettings();
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
> }
> main();
> ```

### recentApps 最近APP任务按键
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 最近APP任务按键
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var result = recentApps();
>     if (result){
>         toast("成功");
>     } else {
>         toast("失败");
>     }
> }
> main();
> ```


### getRunningPkg 当前运行的App包名
* 取得当前运行的App包名
* @return {字符串|null}

> ```javascript
> 
> function main(){
>     var result = getRunningPkg();
> }
> main();
> ```


### getRunningActivity 当前运行的Activity类名
* 取得当前运行的Activity类名
* @return {字符串|null}

> ```javascript
> 
> function main(){
>     var result = getRunningActivity();
> }
> main();
> ```


## 通知栏
### requestNotificationPermission 请求监听状态栏的权限
* 请求监听状态栏的权限
* @param timeout 请求权限超时时间 单位是秒
* @return true 代表请求权限成功，false代表失败

> ```javascript
> 
> function main(){
>     var result = requestNotificationPermission(10);
>     toast("是否有权限:"+result);
> }
> main();
> ```

### hasNotificationPermission 是否有状态栏监听权限
* 检查是否含有状态栏监听权限
* @return true 代表请求权限成功，false代表失败

> ```javascript
> 
> function main(){
>     var result = hasNotificationPermission();
>     toast("是否有权限:"+result);
> }
> main(); 
> ```

### getLastNotification 获取最近通知栏对象
 * 获取最近通知栏对象
 * @param pkg 指定包名
 * @param size 指定获取的条数
 * @return {NotificationInfo数组}

> ```javascript
> 
> function main(){
>     var result = getLastNotification("com.x",100);
>     toast("结果:"+result);
> }
> main();
> ```

### shotNotification 通知发射处理
*  将通知发射处理，相当于点击了通知栏
* @param seqId
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var result = getLastNotification("com.x",1);
>     if (result!=null && result.length>0){
>         var s = shotNotification(result[0].seqId);
>         toast("结果:"+s);
>     }   
> }
> main();
> ```




### ignoreNotification 忽略通知
* 忽略通知，从缓存队列移除，下次将不会获取
* @param seqId
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var result = getLastNotification("com.x",1);
>     if (result!=null && result.length>0){
>         var s = ignoreNotification(result[0].seqId);
>         toast("结果:"+s);
>     }
> }
> main();
> ```

### cancelNotification 取消通知
* 将通知进行取消操作
* @param seqId
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var result = getLastNotification("com.x",1);
>     if (result!=null && result.length>0){
>         var s = cancelNotification(result[0].seqId);
>         toast("结果:"+s);
>     }
> }
> main();
> ```


### getLastToast 获取toast数据
* 获取toast数据
*  @param pkg 指定包名
* @param size 指定获取的条数
* @return {null|ToastInfo数组}

> ```javascript
> 
> function main(){
>     var result = getLastToast("com.xx",100);
>     toast("结果:"+result);
> }
> main();
> ```


## 悬浮窗日志


### requestFloatViewPermission 请求浮窗权限
* 请求展示浮窗的权限
* @param timeout 请求权限超时时间 单位是秒
* @return true 代表请求权限成功，false代表失败

> ```javascript
> 
> function main(){
>     var result = requestFloatViewPermission(10);
>     toast("是否有权限:"+result);
> }
> main();
> ```

### hasFloatViewPermission 检查浮窗权限
* 检查是否含有浮窗权限
* @return true 代表请求权限成功，false代表失败

> ```javascript
> 
> function main(){
>     var result = hasFloatViewPermission();
>     toast("是否有权限:"+result);
> }
> main();
> ```


### showFloatView 展示浮窗
 * 展示浮窗（如果是开发工具调试，请先预览一下工程，然后运行脚本，避免读取不到path文件内容的情况）
 * @param params js的map对象，包含的
 * var map = {"path":"main.html","tag":"test"};  类似这样的参数
 * <br/>
 * 参数解析:
 * tag:字符串 悬浮窗唯一定位的标示
 * path:字符串 IEC 中的布局文件
 * title:字符串 悬浮窗标题
 * titleBg:字符串 悬浮窗背景，16进制，例如#888888，或者#88000000
 * x:整型 悬浮窗起始X坐标
 * y:整型 悬浮窗起始Y坐标
 * w:整型 悬浮窗起始宽度
 * h:整型 悬浮窗起始高度
 * @return true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
> var m = {
>        "path": "main.html",
>        "tag": "tag",
>        "title": "sss",
>        "titleBg": "#888888",
>        "x": 10,
>        "y": 10,
>        "w": 100,
>        "h": 200
>    };
>    var xd = showFloatView(m);
>    logd("showFloatView " + xd);
> }
> main();
> ```

### closeFloatView 关闭浮窗
 * 关闭浮窗
 * @param tag showFloatView 使用的tag参数，对悬浮窗唯一定位的
 * @return true 成功，false代表失败

> ```javascript
>     
> function main(){
>  var m = {
>         "path": "main.html",
>         "tag": "tag",
>         "title": "sss",
>         "titleBg": "#888888",
>         "x": 10,
>         "y": 10,
>         "w": 100,
>         "h": 200
>     };
>     var xd = showFloatView(m);
>     logd("showFloatView " + xd);
>     sleep(3000);
>     closeFloatView("tag");
> }
> main();
> ```


### closeAllFloatView 关闭所有悬浮窗
 * 关闭所有悬浮窗，但不包含日志悬浮窗
 * @return true 成功，false代表失败

> ```javascript
>     
> function main(){
>  var m = {
>         "path": "main.html",
>         "tag": "tag",
>         "title": "sss",
>         "titleBg": "#888888",
>         "x": 10,
>         "y": 10,
>         "w": 100,
>         "h": 200
>     };
>     var xd = showFloatView(m);
>     logd("showFloatView " + xd);
>     sleep(3000);
>     closeAllFloatView();
> }
> main();
> ```


### showCtrlWindow 展示启停浮窗
* 展示启停浮窗
* @return true 代表请求权限成功，false代表失败

> ```javascript
> 
> function main(){
>     var result = showCtrlWindow();
>     toast("是否展示:"+result);
> }
> main();
> ```


### closeCtrlWindow 关闭启停浮窗
* 关闭启停浮窗
* @return true 代表请求权限成功，false代表失败

> ```javascript
> 
> function main(){
>     var result = closeCtrlWindow();
>     toast("是否展示:"+result);
> }
> main();
> ```



### setCtrlViewSizeEx 设置启停控制窗口

 * 设置启停控制窗口参数
 *  适用版本(EC 6.5.0+)
 * @param map 例如
    > ```json
       {
           "x":100,
           "y":100,
           "backgroundColor":"#ffffff"
      }
      解释：
          x: 起始X位置
         y: 起始Y位置
           backgroundColor:背景颜色，例如#336699
    > ```
 * @return bool true代表成功，false代表失败

> ```javascript
>     function main() {
>        requestFloatViewPermission(1000);
>          var m =  {
>                        "x":100,
>                        "y":200,
>                        "backgroundColor":"#ffffff"
>                    }
>     
>     
>          showCtrlWindow();
>          setCtrlViewSizeEx(m);
>          sleep(5000);
>     }
>     main();
> ```




### showLogWindow 展示日志浮窗
* 展示日志浮窗
* @return true 代表请求权限成功，false代表失败

> ```javascript
> 
> function main(){
>     var result = showLogWindow();
>     toast("是否展示:"+result);
> }
> main();
> ```

### closeLogWindow 关闭日志浮窗
* 关闭日志浮窗
* @return true 代表请求权限成功，false代表失败

> ```javascript
> 
> function main(){
>      closeLogWindow();
> }
> main();
> ```


### setLogViewSizeEx 设置日志窗口

 * 设置日志窗口大小扩展函数
 * backgroundImg适用版本(EC 6.0.0+)
 * @param map 例如
    > ```json
       {
           "x":100,
           "y":100,
         "w":100,
          "h":200,
         "textSize":12,
           "backgroundColor":"#ffffff",
          "backgroundImg":"res/a.png",
           "title":"我是日志",
           "backgroundAlpha":255,
           "showTitle":true
      }
      解释：
          x: 起始X位置
         y: 起始Y位置
          w:宽度
           h:高度
           textSize:日志的字体大小
           backgroundColor:背景颜色，例如#336699
           title:日志框标题
           showTitle：是否显示标题
          backgroundImg 背景图片,支持GIF动画，放到工程的res文件夹，录入填写res/a.png
          backgroundAlpha 背景图的透明度 255 - 0
    > ```
 * @return bool true代表成功，false代表失败


> ```javascript
>     function main() {
>        requestFloatViewPermission(1000);
>          var m =  {
>                        "x":100,
>                        "y":200,
>                        "w":600,
>                        "h":600,
>                        "textSize":12,
>                        "backgroundColor":"#ffffff",
>                        "title":"我是日222志",
>                        "showTitle":false
>                    }
>     
>     
>          showLogWindow();
>          setLogViewSizeEx(m);
>          sleep(5000);
>     }
>     main();
> ```

### setLogViewSize 过期函数
* 设置日志窗口大小
* @param w 宽度
* @param h 高度
* @param textSize 日志的字体大小
* @param backgroundColor 背景颜色，例如#336699

> ```javascript
> 
> function main(){
>     setLogViewSize(500,600,14,"#FFFFFF");
> }
> main();
> ```



### setLogText 展示消息
* 展示消息到悬浮窗日志中
* @param msg 消息
* @param color 颜色值例如  #ffffff
* @param size 字体大小

> ```javascript
> 
> function main(){
>     var result = setLogText("开始运行...","#ffffff",18); 
> }
> main();
> ```
> 

## 定时任务

### startJob 开启定时 
 * 开启一个定时脚本任务
 * @param tag 任务的唯一标示，不能为空，脚本中可以使用readConfigString("jobTaskTag")获取当前tag值，判断是那个任务过来执行的
 * @param execTime 定时时间格式: 2020-04-17 19:20:00，或者直接是秒数字，例如 3，代表3秒后
 * @param cancelBeforeRunning
 * @return 整型 jobid

> ```javascript
> 
> function main(){
>     var time="2020-04-17 09:00:00";
>     //使用日期开启一个任务
>     var id =startJob("task1",time,true);
>     logd("job id "+id);    
>     //使用秒数开启，60秒后执行一个任务
>     var id2 =startJob("task2","60",true);
>     logd("job id "+id2);   
> }
> main();
> ```

### cancelAllJob 取消所有定时 
 * 取消所有定时
 * @return bool true 代表有任务被取消

> ```javascript
> 
> function main(){
>     var result = cancelAllJob();
>     logd(result);
> }
> main();
> ```


### cancelJob 取消指定TAG定时 
 * 通过tag对定时任务进行取消
 * @param tag tag名称，startJob的时候tag参数的值
 * @return bool true 代表有任务被取消
> ```javascript
> 
> function main(){
>     
>     var result = cancelJob("task1");
>     logd(result);
> }
> main();
> ```

### getAllJobTag 获取所有定时标签 
 * 取得所有的定时任务标签
 * @return 字符串数组或者null

> ```javascript
> 
> function main(){
>     var result = getAllJobTag();
>     logd(result);
> }
> main();
> ```


## 其他函数

### random 随机函数 
 * 取得某个范围的随机值
 * @param min 最小值
 * @param max 最大值
 * @return 整型 在min和max中间的值, 包含最大和最小值

> ```javascript
> 
> function main(){
>     var result = random(100,1000);
>     sleep(result);
> }
> main();
> ```