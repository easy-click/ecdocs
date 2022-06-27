## 说明
- 设备模块函数主要是跟设备信息相关联
- 设备模块的对象前缀是device，



##  device.getDeviceId 获取id
* 获取手机的id
* @return 字符串


> ```javascript
>     
> function main(){
>     var xx = device.getDeviceId();
>     logd(xx);
> }
> main();
> ```





##  device.getDeviceAlias 获取设备中控别名

* 获取中控设备号别名
* @return string


> ```javascript
> function main(){
>  var xx = device.getDeviceAlias();
>  logd(xx);
> }
> main();
> ```



##  device.getSerialNo 获取设备序列号

*  获取设备序列号，在手机的设置中可以查询到
* @return string


> ```javascript
> function main(){
>  var xx = device.getSerialNo();
>  logd(xx);
> }
> main();
> ```



##  device.getDeviceName 获取设备名称

*  获取设备名称，就是手机的名称
*  @return string


> ```javascript
> function main(){
> var xx = device.getDeviceName();
> logd(xx);
> }
> main();
> ```









##  device.applist 获取程序列表

* 获取当前设备的安装的程序列表
* @return {string} json 字符串


> ```javascript
> function main(){
>  var applistx = device.applist();
>  logd(applistx);
> }
> main();
> ```







##  device.getScreenWidth 屏幕宽度

* 取得屏幕宽度
* @return 整型


> ```javascript
>     
> function main(){
>     var width = device.getScreenWidth();
>     toast(width);
> }
> main();
> ```



##  device.getScreenHeight 屏幕高度
* 取得屏幕高度
* @return 整型


> ```javascript
>     
> function main(){
>     var height = device.getScreenHeight();
>     toast(height);
> }
> main();
> ```

##  device.getScale 屏幕缩放比
* 屏幕缩放比
* @return {float}


> ```javascript
>     
> function main(){
>     var d = device.getScale();
>     toast(d);
> }
> main();
> ```



##  device.getModel 取得机型
* 取得手机机型
* @return 字符串



> ```javascript
>     
> function main(){
>     var model = device.getModel();
>     toast(model);
> }
> main();
> ```







##  device.getOSVersion 取得手机版本号

* @return 字符串


> ```javascript
>     
> function main(){
>     var osVersion = device.getOSVersion();
>     toast(osVersion);
> }
> main();
> ```



## device.getBattery 取得电量
* 取得电量
* @return int型


> ```javascript
>     
> function main(){
>     var res = device.getBattery();
>     logd(res);
> }
> main();
> ```


> ```
> 
> ```




## device.isCharging 是否正在充电
* 是否正在充电
* @return 布尔型


> ```javascript
>     
> function main(){
>     var res = device.isCharging();
>     logd(res);
> }
> main();
> ```

