## 说明
- 工具类模块函数主要是跟Android常用的信息相关联
- 工具类模块的对象前缀是utils，例如 utils.requestShowLogPermission()这样调用



## 打开App相关

### utils.openApp 打开APP
* 打开APP
* @param packageName 程序的包名
* @return 布尔型 true 代表成功，false 代表失败

> ```javascript
>     
> function main(){
>     utils.openApp("com.xx");
> }
> main();
> ```


### utils.openAppByName 打开APP(应用名称)
* 打开APP，通过应用名称
* @param appName 程序名称，比如今日头条
* @return 布尔型 true 代表成功，false 代表失败

> ```javascript
>     
> function main(){
>     utils.openAppByName("xx");
> }
> main();
> ```



### utils.openActivity 打开activity
* 打开一个activity，通过map参数
    * @param map 例如{"action":""},key的固定只有
    * action: 标准的android action字符串
    * uri: uri可以是http网址，也可以是文件file:///地址，也可以是 URLSchema语法 
    * type: uri对应的type，等同于MIME类型，例如安装apk包的type是 application/vnd.android.package-archive
    * pkg: 要打开的activity对应的包名
    * className: 要打开的 className 对应的类名
    * flag: androi打开activity 标准的flag标志位，特殊情况下可以填写
    * 其他的都是属于intent参数了
* @return 布尔型 true 代表成功，false 代表失败


> ```javascript
>     
> function main(){
>     //打开安装包界面
>     var m ={
>              "action":"android.intent.action.VIEW",
>              "uri":"file:///sdcard/a.apk",
>              "type":"application/vnd.android.package-archive"
>          };
>          var x = utils.openActivity(m);
>          logd("x "+x);
> 
>     var map={
>         "uri":"xx://xx/live/6701887916223941379",
>     };
>     utils.openActivity(map);
> }
> main();
> ```



## 图库相关

### utils.insertImageToAlbum 图片插入相册
* 将图片插入到相册中，此方法会立刻更新相册数据
* @param path 图片路径

> ```javascript
>     
> function main(){
>     utils.insertImageToAlbum("/sdcard/a.png");
> }
> main();
> ```



### utils.insertVideoToAlbum 视频插入相册
* 将视频插入到相册中，此方法会立刻更新相册数据
* @param path 视频路径

> ```javascript
>     
> function main(){
>     utils.insertVideoToAlbum("/sdcard/a.mp4");
> }
> main();
> ```


## 其他

### utils.readConfigInt 读取整型配置
* 读取JSON中的整型数据
* @param jsonObject JSON对象
* @param key  配置项目
* @return 整型，找不到就返回0


> ```javascript
>     
> function main(){
>     var testData = utils.readConfigInt(jsonObject,"test_key");
> }
> main();
> ```

### utils.readJSONString 读取JSON中字符串
* 读取JSON中的字符串数据
* @param jsonObject JSON对象
* @param key        配置项目
* @return 字符串 找不到就返回空字符串


> ```javascript
>     
> function main(){
>     var testData = utils.readConfigString(jsonObject,"test_key");
> }
> main();
> ```



### utils.isObjectNull 判断一个对象为空
* 判断一个对象为空
* @param o 对象
* @return true或者false


> ```javascript
>     
> function main(){
>     var isNull = utils.isObjectNull("test_key");
> }
> main();
> ```




### utils.isObjectNotNull 判断一个对象不为空
* 判断一个对象不为空
* @param o 对象
* @return true或者false


> ```javascript
>     
> function main(){
>     var isNull = utils.isObjectNotNull("test_key");
> }
> main();
> ```




### utils.getRatio 取得比例
* 取得比例，例如10参数，就是返回10%的比例，如果是true，说明随机比例正确，否则不正确
* @param ratio 浮点型 1-100
* @return true或者false


> ```javascript
>     
> function main(){
>     var ratio = utils.getRatio(20f);
>     toast(ratio);
> }
> main();
> ```



### utils.getRangeInt 取得某个范围的随机值
* 取得某个范围的随机值
* @param min 最小值
* @param max 最大值
* @return 在min和max中间的值,包含最大和最小值


> ```javascript
>     
> function main(){
>     var value = utils.getRangeInt(1,100);
>     toast(value);
> }
> main();
> ```


### utils.isTrue 判断布尔型对象是否为真
* 判断布尔型对象是否为真
* @param r 布尔型对象
* @return true 或者 false


> ```javascript
>     
> function main(){
>     var value = utils.isTrue(true);
> }
> main();
> ```


### utils.fileMd5 文件的MD5
* 文件的MD5
* @param file 文件路径
* @return 文件MD5字符串或者null


> ```javascript
>     
> function main(){
>     var md5 = utils.fileMd5("/sdcard/a.txt");
> }
> main();
> ```


### utils.dataMd5 数据计算出来的MD5
* 数据计算出来的MD5
* @param data 数据
* @return 数据MD5字符串或者null


> ```javascript
>     
> function main(){
>     var md5 = utils.dataMd5("data");
> }
> main();
> ```



### utils.randomInt 随机整型数据
* 随机整型数据
* @param length 位数，要随机产生多少位的整型数据
* @return 整型


> ```javascript
>     
> function main(){
>     var r = utils.randomInt(2);
> }
> main();
> ```

### utils.randomCharNumber 取得随机的数字和字母
* 取得随机的数字和字母
* @param length 长度
* @return 字符串数字混合


> ```javascript
>     
> function main(){
>     var r = utils.randomCharNumber(2);
> }
> main();
> ```




### utils.getApkPkgName 取得App文件的包名
* 取得App文件的包名
* @param filePath 文件路径
* @return 字符串


> ```javascript
>     
> function main(){
>     var pkgName = utils.getApkPkgName("/sdcard/app.apk");
> }
> main();
> ```



### utils.isAppExist App是否已经安装
* App是否已经安装
* @param packageName 应用程序的包名
* @return true 代表已经安装，false代表未安装


> ```javascript
>     
> function main(){
>     var result = utils.isAppExist("com.xx");
> }
> main();
> ```

### utils.getAppVersionCode 程序的版本标示
* 取得已安装的程序的版本整型标示
* @param packageName 应用程序的包名
* @return 整型


> ```javascript
>     
> function main(){
>     var versionCode = utils.getAppVersionCode("com.xx");
> }
> main();
> ```


### utils.getAppVersionName 版本字符串标示
* 取得已安装的程序的版本字符串标示
* @param packageName 应用程序的包名
* @return 字符串 例如 1.0.0


> ```javascript
>     
> function main(){
>     var r = utils.getAppVersionName("com.xx");
> }
> main();
> ```





### utils.setClipboardText 设置剪贴板文本
* 设置剪贴板文本
* @param text 文本
* @return boolean

> ```javascript
>     
> function main(){
>     var r = utils.setClipboardText("com.xx");
>     toast("设置结果:"+r);
> }
> main();
> ```



### utils.getClipboardText 读取剪贴板文本
* 读取剪贴板文本
* @return string

> ```javascript
>     
> function main(){
>     var r = utils.getClipboardText();
>     toast("读取结果:"+r);
> }
> main();
> ```