## 说明
- 设备模块函数主要是跟设备信息相关联
- 设备模块的对象前缀是device，例如 device.getIMEI()这样调用

##  device.tcDeviceId 三方统计唯一设备标识
 * 取得talkingdata三方统计定义的唯一设备标识
 * @return {字符串}

> ```javascript
>     
> function main(){
>     var d = device.tcDeviceId();
>     //如果想传给对象,需强转一下,否则json解析会报错
>     d+=""
>     toast(d);
> }
> main();
> ```

##  device.getIMEI 获取IMEI
* 获取手机的IMEI
* @return 字符串


> ```javascript
>     
> function main(){
>     var imei = device.getIMEI();
>     toast(imei);
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

##  device.getAndroidId 取得Android ID
* 取得Android ID
* @return 字符串


> ```javascript
>     
> function main(){
>     var androidId = device.getAndroidId();
>     toast(androidId);
> }
> main();
> ```

##  device.getBrand 取得品牌
* 取得手机品牌
* @return 字符串


> ```javascript
>     
> function main(){
>     var brand = device.getBrand();
>     toast(brand);
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

##  device.getImsi 取得卡号
* 取得手机卡号
* @return 字符串


> ```javascript
>     
> function main(){
>     var imsi = device.getImsi();
>     toast(imsi);
> }
> main();
> ```


##  device.getSerial 取得手机串号
* 取得手机串号
* @return 字符串


> ```javascript
>     
> function main(){
>     var serial = device.getSerial();
>     toast(serial);
> }
> main();
> ```


##  device.getSdkInt 取得SDK 版本号
* 取得手机SDK 版本号，例如 23
* @return 字符串


> ```javascript
>     
> function main(){
>     var sdkInt = device.getSdkInt();
>     toast(sdkInt);
> }
> main();
> ```

##  device.getOSVersion 取得手机版本号
* 取得手机版本号,例如 6.0等字符串
* @return 字符串


> ```javascript
>     
> function main(){
>     var osVersion = device.getOSVersion();
>     toast(osVersion);
> }
> main();
> ```


## device.getMacAddress 获取mac地址
* 获取mac地址
* @return 字符串


> ```javascript
>     
> function main(){
>     var res = device.getMacAddress();
>     toast(res);
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
>     toast(res);
> }
> main();
> ```

## device.getTotalMem 取得总内存
* 取得总内存
* @return long型


> ```javascript
>     
> function main(){
>     var res = device.getTotalMem();
>     toast(res);
> }
> main();
> ```

## device.getAvailMem 取得可用内存
* 取得可用内存
* @return long型


> ```javascript
>     
> function main(){
>     var res = device.getAvailMem();
>     toast(res);
> }
> main();
> ```



## device.isCharging 是否正在充电
* 是否正在充电
* @return 布尔型


> ```javascript
>     
> function main(){
>     var res = device.isCharging();
>     toast(res);
> }
> main();
> ```

## device.vibrate 发出震动
* 发出震动 单位是毫秒

> ```javascript
>     
> function main(){
>      device.vibrate(1*1000);
> }
> main();
> ```

## device.cancelVibration 取消震动
* 取消震动

> ```javascript
>     
> function main(){
>      device.cancelVibration();
> }
> main();
> ```



## device.keepAwake 保持设备唤醒
* 保持设备唤醒
* @param flag 参考安卓PowerManager中的唤醒标准

> ```javascript
>     
> function main(){
>      importClass(android.os.PowerManager)
>      device.keepAwake(PowerManager.SCREEN_DIM_WAKE_LOCK|PowerManager.ACQUIRE_CAUSES_WAKEUP);
> }
> main();
> ```



## device.keepScreenOn 保持屏幕唤醒状态
* 保持屏幕唤醒状态

> ```javascript
>     
> function main(){
>      device.keepScreenOn();
> }
> main();
> ```



## device.keepScreenDim 保持设备昏暗状态
* 保持设备昏暗状态

> ```javascript
>     
> function main(){
>      device.keepScreenDim();
> }
> main();
> ```



## device.cancelKeepingAwake 取消保持唤醒状态
* 取消保持唤醒状态

> ```javascript
>     
> function main(){
>      device.cancelKeepingAwake();
> }
> main();
> ```