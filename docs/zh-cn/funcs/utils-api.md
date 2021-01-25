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




### utils.openIntentAction 通过Action打开某个界面
 * 通过Action打开某个界面
 * @param action action动作，例如 android.settings.ACCESSIBILITY_SETTINGS = 辅助功能，
 * 如果改方法不满足要求，可以直接使用intent进行打开：
 * 常用的action有：
 * android.settings.ACCESSIBILITY_SETTINGS //辅助功能
 * android.settings.ADD_ACCOUNT_SETTINGS //添加账户
 * android.settings.AIRPLANE_MODE_SETTINGS //系统设置首页
 * android.settings.APN_SETTINGS //APN设置
 * android.settings.APPLICATION_SETTINGS //应用管理
 * android.settings.BATTERY_SAVER_SETTINGS //节电助手
 * android.settings.BLUETOOTH_SETTINGS //蓝牙
 * android.settings.CAPTIONING_SETTINGS //字幕
 * android.settings.CAST_SETTINGS //无线显示
 * android.settings.DATA_ROAMING_SETTINGS //移动网络
 * android.settings.DATE_SETTINGS //日期和时间设置
 * android.settings.DEVICE_INFO_SETTINGS //关于手机
 * android.settings.DISPLAY_SETTINGS //显示设置
 * android.settings.DREAM_SETTINGS //互动屏保设置
 * android.settings.HARD_KEYBOARD_SETTINGS //实体键盘
 * android.settings.HOME_SETTINGS //应用权限,默认应用设置,特殊权限
 * android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS //忽略电池优化设置
 * android.settings.INPUT_METHOD_SETTINGS //可用虚拟键盘设置
 * android.settings.INPUT_METHOD_SUBTYPE_SETTINGS //安卓键盘语言设置(AOSP)
 * android.settings.INTERNAL_STORAGE_SETTINGS //内存和存储
 * android.settings.LOCALE_SETTINGS //语言偏好设置
 * android.settings.LOCATION_SOURCE_SETTINGS //定位服务设置
 * android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS //所有应用
 * android.settings.MANAGE_APPLICATIONS_SETTINGS //应用管理
 * android.settings.MANAGE_DEFAULT_APPS_SETTINGS //与ACTION_HOME_SETTINGS相同
 * android.settings.action.MANAGE_OVERLAY_PERMISSION //在其他应用上层显示,悬浮窗
 * android.settings.MANAGE_UNKNOWN_APP_SOURCES //安装未知应用 安卓8.0
 * android.settings.action.MANAGE_WRITE_SETTINGS //可修改系统设置 权限
 * android.settings.MEMORY_CARD_SETTINGS //内存与存储
 * android.settings.NETWORK_OPERATOR_SETTINGS //可用网络选择
 * android.settings.NFCSHARING_SETTINGS //NFC设置
 * android.settings.NFC_SETTINGS //网络中的 更多设置
 * android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS //通知权限设置
 * android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS //勿扰权限设置
 * android.settings.ACTION_PRINT_SETTINGS //打印服务设置
 * android.settings.PRIVACY_SETTINGS //备份和重置
 * android.settings.SECURITY_SETTINGS //安全设置
 * android.settings.SHOW_REGULATORY_INFO //监管信息
 * android.settings.SOUND_SETTINGS //声音设置
 * android.settings.SYNC_SETTINGS //添加账户设置
 * android.settings.USAGE_ACCESS_SETTINGS //有权查看使用情况的应用
 * android.settings.USER_DICTIONARY_SETTINGS //个人词典
 * android.settings.VOICE_INPUT_SETTINGS //辅助应用和语音输入
 * android.settings.VPN_SETTINGS //VPN设置
 * android.settings.VR_LISTENER_SETTINGS //VR助手
 * android.settings.WEBVIEW_SETTINGS //选择webview
 * android.settings.WIFI_IP_SETTINGS //高级WLAN设置
 * android.settings.WIFI_SETTINGS //选择WIFI,连接WIFI
 * com.android.settings.Settings$DevelopmentSettingsActivity
 * @return {null|boolean|*}
> ```javascript
>     
> function main(){
>    utils.openIntentAction("android.settings.ACCESSIBILITY_SETTINGS");
> }
> main();
> ```

- 直接使用Intent打开方式


> ```javascript
>     
>         importClass(android.content.Intent);
>         importClass(android.net.Uri)
>         var intent = new Intent();
>         intent.setAction("android.settings.APPLICATION_DETAILS_SETTINGS");
>         intent.setData(Uri.parse("package:com.gibb.easyclick"))
>         intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
>         try {
>              context.startActivity(intent);
>         } catch (e) {
>             loge(e)
>         }
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


## 解压缩

### utils.zip 压缩
 * 将多个文件压缩成一个zip文件
 * 适用版本(EC 5.17.0+)
 * @param zipFile 目标zip文件的路径
 * @param passwd 目标ip文件密码，空代表无密码
 * @param files 要压缩的文件或者文件夹，文件数组例如: ["/sdcard/a.txt","/sdcard/bb/"]
 * @return {bool} true 代表成功  false代表失败

> ```javascript
>  
> function main() {
> 
>         zipFile ="/sdcard/a.zip"
>         //压缩文件
>         let passwd = "123";
>         let files =["/sdcard/test.json","/sdcard/gifshow"]
>         let re = utils.zip(zipFile,passwd,files);
>         logd("压缩结果: "+re);
> 
>         let ure = utils.unzip(zipFile,passwd,"/sdcard/test111/");
>         logd("解压结果: "+ure);
> 
> 
>        let data = utils.readFileInZip("/sdcard/a.zip",passwd,"test.json")
>         logd("读取数据结果: "+data);
> }
> 
> main()
> ```


### utils.unzip 解压
 * 将zip文件解压到一个文件夹中
 * 适用版本(EC 5.17.0+)
 * @param zipFile 目标zip文件的路径
 * @param passwd 目标ip文件密码
 * @param destDir 要解压到的目标文件夹
 * @return {bool} true 代表成功  false代表失败

> ```javascript
>  
> function main() {
> 
>         zipFile ="/sdcard/a.zip"
>         //压缩文件
>         let passwd = "123";
>         let files =["/sdcard/test.json","/sdcard/gifshow"]
>         let re = utils.zip(zipFile,passwd,files);
>         logd("压缩结果: "+re);
> 
>         let ure = utils.unzip(zipFile,passwd,"/sdcard/test111/");
>         logd("解压结果: "+ure);
> 
> 
>        let data = utils.readFileInZip("/sdcard/a.zip",passwd,"test.json")
>         logd("读取数据结果: "+data);
> }
> 
> main()
> ```







### utils.readFileInZip ZIP中读取
 * 从zip文件中读取数据
 * 适用版本(EC 5.17.0+)
 * @param zipFile zip文件的路径
 * @param passwd zip文件密码
 * @param filePathInZip 文件在zip中的路径，例如 a/b.txt
 * @return {string} 解析后的字符串

> ```javascript
>  
> function main() {
> 
>         zipFile ="/sdcard/a.zip"
>         //压缩文件
>         let passwd = "123";
>         let files =["/sdcard/test.json","/sdcard/gifshow"]
>         let re = utils.zip(zipFile,passwd,files);
>         logd("压缩结果: "+re);
> 
>         let ure = utils.unzip(zipFile,passwd,"/sdcard/test111/");
>         logd("解压结果: "+ure);
> 
> 
>        let data = utils.readFileInZip("/sdcard/a.zip",passwd,"test.json")
>         logd("读取数据结果: "+data);
> }
> 
> main()
> ```








## 二维码


### utils.createQRCode 生成一个二维码
 * 生成一个二维码
 * 适用版本(EC 5.15.0+)
 * @param content 二维码字符串内容
 * @param width 图像宽度
 * @param height 图像高度
 * @param logo 图像中心的logo，非必填项，Bitmap 对象，文件转Bitmap请看image模块
 * @return {Bitmap} Android的Bitmap对象，保存到文件请看image模块

> ```javascript
> 
>     function main() {
>     
>         //生成一个二维码bitmap 带logo的
>         let bot = utils.createQRCode("我是大佬的弟弟",1000,1000,image.readBitmap("/sdcard/yyb2.png"));
>         logd("bot "+bot);
>         //保存的到文件
>         let saved = image.saveBitmap(bot,"png",100,"/sdcard/tmp.png");
>         logd("saved "+saved);
>         //回收掉防止内存暴涨
>          if (bot) {
>                 bot.recycle()
>             }
>         //扫描二维码
>         let bitmap = image.readBitmap("/sdcard/tmp.png")
>         let data = utils.decodeQRCode(bitmap);
>         logd("data "+data);
>         //回收掉防止内存暴涨
>         if (bitmap) {
>             bitmap.recycle()
>         }
>     }
>     
>     main();
> ```


### utils.decodeQRCode 解析一个二维码
 * 解析一个二维码
 * 适用版本(EC 5.15.0+)
 * @param src 图像 Bitmap 对象，文件转Bitmap请看image模块
 * @return {string} 解析后的字符串

> ```javascript
> 
>     function main() {
>     
>         //生成一个二维码bitmap 带logo的
>         let bot = utils.createQRCode("我是大佬的弟弟",1000,1000,image.readBitmap("/sdcard/yyb2.png"));
>         logd("bot "+bot);
>         //保存的到文件
>         let saved = image.saveBitmap(bot,"png",100,"/sdcard/tmp.png");
>         logd("saved "+saved);
>         //回收掉防止内存暴涨
>          if (bot) {
>                 bot.recycle()
>             }
>         //扫描二维码
>         let bitmap = image.readBitmap("/sdcard/tmp.png")
>         let data = utils.decodeQRCode(bitmap);
>         logd("data "+data);
>         //回收掉防止内存暴涨
>         if (bitmap) {
>             bitmap.recycle()
>         }
>     }
>     
>     main();
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


### utils.playMp3 播放MP3音乐
* 播放MP3音乐
* 支持版本 EC 5.12.0 以上
* @param path 文件路径 例如 /sdcard/a.mp3
* @param loop 是否循环播放 true代表是
* @return {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>    let d = utils.playMp3("/sdcard/a.mp3",true)
>    logd("dd "+d)
>    sleep(30*1000)
>    utils.stopMp3()
>    logd("stop play ")
> }
> main();
> ```



### utils.stopMp3 停止播放mp3音乐
* 停止播放mp3音乐
* 支持版本 EC 5.12.0 以上
* @return {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>    let d = utils.playMp3("/sdcard/a.mp3",true)
>    logd("dd "+d)
>    sleep(30*1000)
>    utils.stopMp3()
>    logd("stop play ")
> }
> main();
> ```