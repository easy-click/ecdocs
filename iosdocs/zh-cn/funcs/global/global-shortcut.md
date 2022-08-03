## 说明

全局模块中封装的快捷事件



## 点击函数
### clickPoint 坐标点击
* 点击坐标
* @param x x坐标
* @param y y坐标
* @return {boolean|布尔型}


> ```javascript
> function main(){
>     var result = clickPoint(100,100);
>     if (result){
>         logd("点击成功");
>     } else {
>         logd("点击失败");
>     }
> }
> main();
> ```






### longClickPoint 坐标长点击
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


### doubleClickPoint 坐标双击
* 双击击坐标
* @param x x坐标
* @param y y坐标
* @return {boolean|布尔型}


> ```javascript
> 
> function main(){
>     var result = doubleClickPoint(100,100);
>     if (result){
>         logd("点击成功");
>     } else {
>         logd("点击失败");
>     }
> }
> main();
> ```


### press 坐标长按
 * 长按住事件
 * @param x x坐标
 * @param y y坐标
 * @param delay 长按时间  毫秒
 * @return {bool} true 成功 false 失败


> ```javascript
> 
> function main(){
>     var result = press(100,100,5000);
>     if (result){
>         logd("长按成功");
>     } else {
>         logd("长按失败");
>     }
> }
> main();
> ```





## 多点触摸

### multiTouch 多点触摸
* 多点触摸<br/>
* 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2
* x: X坐标
* y: Y坐标
* pointer：设置第几个手指触摸点，分别是 1，2，3等，代表第n个手指
* delay: 该动作延迟多少毫秒执行，这个是值当前这个事件先延迟后执行
* @param touch1 第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":20},{"action":2,"x":1,"y":1,"pointer":1,"delay":20}]
* @param touch2 第2个手指的触摸点数组
* @param touch3 第3个手指的触摸点数组
* @param touch4 第4个手指的触摸点数组
* @param touch5 第5个手指的触摸点数组
* @param timeout 多点触摸总执行的超时时间，单位是毫秒
* @return boolean|布尔型

> ```javascript
> function main() {
>    
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
>    var x = multiTouch(touch1, touch2, null,null,null, 30000);
>    logd("xxs " + x);
> }
> main();
> ```

















## 滑动函数



### swipeToPoint 坐标点滑动
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
>         logd("滑动成功");
>     } else {
>         logd("滑动失败");
>     }
> }
> main();
> ```














## 拖动函数
### drag 拖动坐标
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
>         logd("拖动成功");
>     } else {
>         logd("拖动失败");
>     }
> }
> main();
> ```


## 输入数据

### inputText  输入数据
* 输入文字
* @param content 内容
* @param duration 执行时间，单位是毫秒
* @return {bool} true 成功，false 失败

> ```javascript
> 
> function main(){
>     var result = inputText("我是内容",100);
>     if (result){
>         logd("是");
>     } else {
>         logd("否");
>     }
> }
> main();
> ```

### ioHIDEvent  模拟键盘

* 模拟人机交互，例如键盘输入和快捷键，具体健值请看
* <a href="http://ieasyclick.com/iosdocs/#/zh-cn/advance/keyboard">http://ieasyclick.com/iosdocs/#/zh-cn/advance/keyboard</a>
* @param eventPageID 人机交互类型
* @param eventUsageID 人机交互值
* @param delay 时长一般设置为 0.2 即可，可能有延迟
* @return boolean|布尔型

> ```javascript
> function main(){
> 	let x = ioHIDEvent("0x07","0x11",0.2)
> 	logd(x)
> 
> }
> main();
> ```



```

```



## 系统按键相关
### home 返回主页

* 返回主页
* @return {null|布尔型}

> ```javascript
> 
> function main(){
>     var result = home();
>     if (result){
>         logd("成功");
>     } else {
>         logd("失败");
>     }
> }
> main();
> ```





### openApp 使用bundleID 打开App

* 使用bundleID 打开App, 这个不同于appLaunch函数，这个通过命令进行的
* @param bundleId app的 bundleID
* @return {boolean} true 成功，false 失败成功

> ```javascript
> function main(){
>  var result = openApp("com.tencent.xin");
>  if (result){
>      logd("成功");
>  } else {
>      logd("失败");
>  }
> }
> main();
> ```



### stopApp 使用bundleID 停止App

* 使用bundleID 停止App, 这个不同于 appKillByBundleId 函数，这个通过命令进行的
* @param bundleId app的 bundleID
* @return {boolean} true 成功，false 失败成功

> ```javascript
> function main(){
>  var result = stopApp("com.tencent.xin");
>  if (result){
>      logd("成功");
>  } else {
>      logd("失败");
>  }
> }
> main();
> ```





### appLaunch 运行程序

 *  运行程序
  * @param bundleId app的 bundleID
 *  @return int 整型 进程的id

> ```javascript
> 
> function main(){
>     var result = appLaunch("com.tencent.xin");
>     if (result>0){
>         logd("成功");
>     } else {
>         logd("失败");
>     }
> }
> main();
> ```


### appKillByBundleId 杀死程序

 * 使用bundleID杀死一个进程
 * @param bundleId app的 bundleID
 * @return {boolean} true 成功，false 失败成功

> ```javascript
> 
> function main(){
>     var result = appKillByBundleId("com.tencent.xin");
>     if (result){
>         logd("成功");
>     } else {
>         logd("失败");
>     }
> }
> main();
> ```





### installApp 使用 路径 安装app

* 使用 路径 安装app (无需启动自动化)
* @param bundleId app的 bundleID
* @param path ipa的路径 和桥接在同一个电脑上
* @return {string} ok 代表 成功，其他字符串 失败

> ```javascript
> function main(){
> var result = installApp("com.test.xin","c:/a.ipa");
>    logd("result "+result);
> if (result=="ok"){
>   logd("成功");
> } else {
>   logd("失败");
> }
> }
> main();
> ```



### uninstallApp 使用bundleID 卸载app

* 使用bundleID 卸载app (无需启动自动化)
* @param bundleId app的 bundleID
* @return {string} ok 代表 成功，其他字符串 失败

> ```javascript
> function main(){
> var result = uninstallApp("com.test.xin");
> logd("result "+result);
> if (result=="ok"){
>   logd("成功");
> } else {
>   logd("失败");
> }
> }
> main();
> ```






## 其他函数



### resetUsbConn 重置usb链接 

* 重置USB链接，如果开起来自动化可以使用这个尝试
* @return {boolean} true 成功，false 失败

> ```javascript
> function main(){
>  var result = resetUsbConn();
>  logd(result);
> }
> main();
> ```





### setAgentSetting 设置代理程序的配置

* 设置代理程序的配置
 * @param ext 是一个map，例如 {"screenStreamQuality":100}
 *  screenStreamQuality 代表投屏质量 1 - 100
 *  screenStreamFramerate 代表投屏帧率 10 - 60
 * @return {bool} true 成功，false 失败

> ```javascript
> function main(){
>   // 如果不想设置某个属性，可以不在map填写
> 	var result = setAgentSetting({"screenStreamQuality":60,"screenStreamFramerate":20});
> 	logd(result);
> }
> main();
> ```





### setAgentTimeout 设置代理请求超时

* @param envTimeout 启动自动化超时时间，单位是毫秒，可以设置为 10000 - 15000
* @param readTimeout 其他的请求超时时间，单位是毫秒，可以设置为 2000 - 5000
* @return {boolean} true代表成功


> ```javascript
> function main(){
> 	setAgentTimeout(10000,3000);
> }
> main();
> 
> ```



### activeAppInfo 当前运行的程序 bundleId

* @param 当前运行的程序 bundleId
* @return {string} 当前运行的程序 bundleId


> ```javascript
> function main(){
> 	let d=	activeAppInfo();
> logd(d);
> }
> main();
> 
> ```



