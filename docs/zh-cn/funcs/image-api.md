
## 说明

- 截图函数需要Andrioid 5.0 以上版本才能使用
- 无障碍模式下截图是需要权限的，如果弹出了运行截图，请授权
- 代理模式下的截图不需要权限，建议长期运行使用代理模式
- 图色模块的对象前缀是image，例如 image.requestScreenCapture()这样调用
- 图色模块需要对颜色进行查找，开发工具自带找色功能，请参考[找色找图操作](/zh-cn/funcs/devtools/dev-tools-screen.md#找色操作)


## 设置
### image.setInitParam 初始化参数
* 设置图色模块初始化参数，可用于多分辨率兼容
* @param params 超时时间，单位是毫秒
* @return true 代表成功 false代表失败

> ```javascript
> 
> function main() {
>     //action_timeout 找图找色动作的最大时间，超时后会自动返回避免阻塞
>     var a = image.setInitParam({"action_timeout":1000});
> }
> main();
> ```

## 申请截图
### image.requestScreenCapture 申请截图权限
* 向系统申请屏幕截图权限，返回是否请求成功。
* 第一次使用该函数会弹出截图权限请求，建议选择“总是允许”。
* 这个函数只是申请截图权限，并不会真正执行截图，真正的截图函数是captureScreen()。
* 该函数在截图脚本中只需执行一次，而无需每次调用captureScreen()都调用一次。
 * @param timeout 超时时间，单位是毫秒
 * @param type 截屏的类型，0 自动选择，1 代表授权模式，2 代表无需权限模式（该模式前提条件：运行模式为代理模式）
* @return true 代表成功 false代表失败

> ```javascript
> 
> function main() {
>     logd("isServiceOk "+isServiceOk());
>       startEnv()
>       logd("isServiceOk "+isServiceOk());
>        var request = image.requestScreenCapture(10000,0);
>        if (!request) {
>           request = image.requestScreenCapture(10000,0);
>        }
>        logd("申请截图结果... "+request)
> }
> main();
> ```




### image.releaseScreenCapture 释放截屏请求
* 释放截屏请求


> ```javascript
> 
> function main() {
>     image.releaseScreenCapture();
> }
> main();
> ```

## 截图
### image.captureScreen 截取屏幕Image对象
* 截取当前屏幕并返回一个Image对象。
* 没有截图权限时执行该函数会返回null
* 两次调用可能返回相同的Image对象。这是因为设备截图的更新需要一定的时间，短时间内（一般来说是16ms）连续调用则会返回同一张截图。
* 截图需要转换为Bitmap格式，从而该函数执行需要一定的时间(0~20ms)。
* 另外在requestScreenCapture()执行成功后需要一定时间后才有截图可用，因此如果立即调用captureScreen()，会等待一定时间后(一般为几百ms)才返回截图。
* 如果区域空或则有负数的，就会是全屏
* @param retryNumber 重试次数，直到能截到图为止，默认是3
* @param x 截图的起始X坐标
* @param y 截图的起始Y坐标
* @param ex 终点X坐标
* @param ey 终点Y坐标
* @return AutoImage对象或者null


> ```javascript
> 
> function main() {
>     logd("isServiceOk "+isServiceOk());
>          startEnv()
>          logd("isServiceOk "+isServiceOk());
>      
>           var request = image.requestScreenCapture(10000,0);
>      
>           if (!request) {
>              request = image.requestScreenCapture(10000,0);
>           }
>           logd("申请截图结果... "+request)
>           if (!request) {
>              return;
>           }
>           home();
>           sleep(1000);
>           for (var i = 0; i < 10; i++) {
>               var cap = image.captureScreen(3,0,0,300,400)
>               logd("截图数据: " +cap)
>               sleep(1000)
>           }
> }
> main();
> ```


### image.captureFullScreen 截取全屏Image对象
* 截取当前屏幕并返回一个Image对象。
* @return AutoImage对象或者null

> ```javascript
> 
>   function main() {
>       logd("isServiceOk "+isServiceOk());
>       startEnv()
>       logd("isServiceOk "+isServiceOk());
>    
>        var request = image.requestScreenCapture(10000,0);
>    
>        if (!request) {
>           request = image.requestScreenCapture(10000,0);
>        }
>        logd("申请截图结果... "+request)
>        if (!request) {
>           return;
>        }
>        home();
>        sleep(1000);
>        for (var i = 0; i < 10; i++) {
>            var cap = image.captureFullScreen()
>            logd("截图数据: " +cap)
>            sleep(1000)
>        }
>   }
> main();
> ```

### image.captureFullScreenEx 截取全屏屏Image对象扩展
* 抓取全屏函数，代理模式下并且requestScreenCapture函数的type为0的时候，会使用截屏函数，尽力消除色差问题。
* @return AutoImage对象或者null

> ```javascript
> 
>   function main() {
>       logd("isServiceOk "+isServiceOk());
>       startEnv()
>       logd("isServiceOk "+isServiceOk());
>    
>        var request = image.requestScreenCapture(10000,0);
>    
>        if (!request) {
>           request = image.requestScreenCapture(10000,0);
>        }
>        logd("申请截图结果... "+request)
>        if (!request) {
>           return;
>        }
>        home();
>        sleep(1000);
>        for (var i = 0; i < 10; i++) {
>            var cap = image.captureFullScreenEx()
>            logd("截图数据: " +cap)
>            sleep(1000)
>        }
>   }
> main();
> ```

### image.captureScreenBitmap 截取屏幕Bitmap对象
 * 将屏幕抓取为Bitmap对象，如果中间有-1或者宽度、宽度为-1，将会是全屏
 * @param format jpg或者png，代理模式下有用
 * @param x 开始X坐标
 * @param y 开始Y坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param q 图片质量，1 - 100，越高越好，代理模式下有用
 * @return Bitmap null或者bitmap对象


> ```javascript
> 
>   function main() {
>       logd("isServiceOk "+isServiceOk());
>       startEnv()
>       logd("isServiceOk "+isServiceOk());
>    
>        var request = image.requestScreenCapture(10000,0);
>    
>        if (!request) {
>           request = image.requestScreenCapture(10000,0);
>        }
>        logd("申请截图结果... "+request)
>        if (!request) {
>           return;
>        }
>        home();
>        sleep(1000);
>        for (var i = 0; i < 10; i++) {
>            var cap = image.captureScreenBitmap("jpg",100,100,200,300,100);
>            logd("截图数据: " +cap)
>            sleep(1000)
>        }
>   }
> main();
> ```


### image.captureToFile 截取屏幕到文件
* 截取当前屏幕并以PNG格式保存到path中。如果文件不存在会被创建；文件存在会被覆盖。
* 如果区域空或则有负数的，就会是全屏
* @param retryNumber 重试次数，直到能截到图为止，默认是3
* @param x 截图的起始X坐标
* @param y 截图的起始Y坐标
* @param ex 终点X坐标
* @param ey 终点Y坐标
* @param path 截图保存路径
* @return true 截图成功 false 代表不成功


> ```javascript
> 
>   function main() {
>       logd("isServiceOk "+isServiceOk());
>       startEnv()
>       logd("isServiceOk "+isServiceOk());
>    
>        var request = image.requestScreenCapture(10000,0);
>    
>        if (!request) {
>           request = image.requestScreenCapture(10000,0);
>        }
>        logd("申请截图结果... "+request)
>        if (!request) {
>           return;
>        }
>        home();
>        sleep(1000);
>        for (var i = 0; i < 10; i++) {
>            var cap = image.captureToFile(3,0,0,300,400,"/sdcard/a"+i+".png");
>            logd("截图数据: " +cap)
>            sleep(1000)
>        }
>   }

> main();
> ```

## 比色

### image.cmpColor 单点比色
 * 单点或者多点比色，找到所有符合标准的点，如果都符合返回true，否则是false
 * @param image1 图片
 * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return 布尔型，true代表找到了 false代表未找到

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       var aimage = image.captureFullScreen();
>       if (aimage != null) {
>            var points3 ="205|1130|0xff944b-0x101010,211|1158|0xff8e42,191|1175|0xfcfbf7";
>           var points = image.cmpColor(aimage,points3, 0.9, 0, 0, 0, 0);
>           logd("points "+points);
>       }
> 
> }
> main();
> ```




### image.cmpColorEx 单点比色扩展
 * 单点或者多点比色，找到所有符合标准的点，自动截图，如果都符合返回true，否则是false
 * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return 布尔型，true代表找到了 false代表未找到

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>            var points3 ="205|1130|0xff944b-0x101010,211|1158|0xff8e42,191|1175|0xfcfbf7";
>           var points = image.cmpColorEx(points3, 0.9, 0, 0, 0, 0);
>           logd("points "+points);
> 
> }
> main();
> ```



### image.cmpMultiColor 多点比色
 * 多点或者多点数组比色，找到所有符合标准的点，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 * @param image1 图片
 * @param points     数组类似这样 ["6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"]
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return 整型，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>        var aimage = image.captureFullScreen();
>       if (aimage != null) {
>        var points1 ="205|112230|0xff944b,211|1158|0xff8e42,191|1175|0xfcfbf7";
>        var points2 ="205|113022|0xff944b,211|1158|0xff8e42,191|1175|0xfcfbf7";
>        var points3 ="205|1130|0xff944b,211|1158|0xff8e42,191|1175|0xfcfbf7";
>           var points = image.cmpMultiColor(aimage,[points1,points2,points3], 0.9, 0, 0, 0, 0);
>           logd("points "+points);
>     }
> }
> main();
> ```

### image.cmpMultiColorEx 多点比色扩展
 * 多点或者多点数组比色，找到所有符合标准的点，自动截屏，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 * @param points     数组类似这样 ["6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"]
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return 整型，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>        var points1 ="205|112230|0xff944b,211|1158|0xff8e42,191|1175|0xfcfbf7";
>        var points2 ="205|113022|0xff944b,211|1158|0xff8e42,191|1175|0xfcfbf7";
>        var points3 ="205|1130|0xff944b,211|1158|0xff8e42,191|1175|0xfcfbf7";
>           var points = image.cmpMultiColorEx([points1,points2,points3], 0.9, 0, 0, 0, 0);
>           logd("points "+points);
> }
> main();
> ```



## 找色

### image.findColor 单点找色
* 在图片中找到颜色和color完全相等的某个点，并返回该点的左边；如果没有找到，则返回null。
* @param image 图片
* @param color     要寻找的颜色
* @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
* @param x 区域的X起始坐标
* @param y 区域的Y起始坐标
* @param ex 终点X坐标
* @param ey 终点Y坐标
* @param limit 限制个数
* @param orz 方向，分别从1-8
* @return 多个Point 坐标点数组或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       var aimage = image.captureFullScreen();
>       if (aimage != null) {
>           var points = image.findColor(aimage,"0xCDD7E9-0x101010", 0.9, 0, 0, 0, 0, 10,1);
>           logd("points "+points);
>       }
> 
> }
> main();
> ```



### image.findColorJ 单点找色(JSON)
* 在图片中找到颜色和color完全相等的点，参数从JSON中获取如果没有找到，则返回null。
* @param image 图片
* @param jsonFileName     res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
* @return 多个Point 坐标点数组或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       var aimage = image.captureFullScreen();
>       if (aimage != null) {
>           var points = image.findColorJ(aimage,"金币");
>           logd("points "+points);
>       }
> 
> }
> main();
> ```


### image.findColorEx 自动截屏单点找色
* 在当前屏幕中找到颜色和color完全相等的点，并返回该点的左边；如果没有找到，则返回null。
* @param color     要寻找的颜色
* @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
* @param x 区域的X起始坐标
* @param y 区域的Y起始坐标
* @param ex 终点X坐标
* @param ey 终点Y坐标
* @param limit 限制个数
* @param orz 方向，分别从1-8
* @return 多个Point 坐标点数组或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       var points = image.findColorEx("0xCDD7E9-0x101010", 0.9, 0, 0, 0, 0, 10,1);
>       logd("points "+points);
> 
> }
> main();
> ```


### image.findColorExJ 自动截屏单点找色(JSON)
* 当前屏幕中找到颜色和color完全相等的点，参数从JSON中获取如果没有找到，则返回null。
* @param jsonFileName     res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
* @return 多个Point 坐标点数组或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       var points = image.findColorExJ("金币");
>       logd("points "+points);
> 
> }
> main();
> ```




### image.findMultiColor 多点找色
* 多点找色，找到所有符合标准的点，类似于按键精灵的多点找色。
* @param image      要找色的图片
* @param firstColor 第一个点的颜色
* @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
* @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
* @param x 区域的X起始坐标
* @param y 区域的Y起始坐标
* @param ex 终点X坐标
* @param ey 终点Y坐标
* @param limit 限制个数
* @param orz 方向，分别从1-8
* @return 多个Point 坐标点数组或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       var aimage = image.captureFullScreen();
>       if (aimage != null) {
>           var points = image.findMultiColor(aimage,"0xDD7A5F-0x101010", "29|25|0xBB454B-0x101010,58|44|0xA6363A-0x101010", 0.9, 0, 0, 0, 0, 10,1);
>           logd("points "+points);
>       }
> 
> }
> main();
> ```





### image.findMultiColorJ 多点找色(JSON)
* 多点找色，找到所有符合标准的点，参数从JSON文件中读取，类似于按键精灵的多点找色
* @param image      要找色的图片
* @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
* @return 多个Point 坐标点数组或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       var aimage = image.captureFullScreen();
>       if (aimage != null) {
>           var points = image.findMultiColorJ(aimage,"金币");
>           logd("points "+points);
>       }
> 
> }
> main();
> ```


### image.findMultiColorEx 自动截屏多点找色
* 多点找色，找到所有符合标准的点，类似于按键精灵的多点找色。
* @param firstColor 第一个点的颜色
* @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
* @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
* @param x 区域的X起始坐标
* @param y 区域的Y起始坐标
* @param ex 终点X坐标
* @param ey 终点Y坐标
* @param limit 限制个数
* @param orz 方向，分别从1-8
* @return 多个Point 坐标点数组或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       
>       var points = image.findMultiColorEx("0xDD7A5F-0x101010", "29|25|0xBB454B-0x101010,58|44|0xA6363A-0x101010", 0.9, 0, 0, 0, 0, 10,1);
>       logd("points "+points);
>       
> 
> }
> main();
> ```


### image.findMultiColorExJ 自动截屏多点找色(JSON)
* 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片,参数从JSON文件中读取，类似于按键精灵的多点找色
* @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
* @return 多个Point 坐标点数组或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       var points = image.findMultiColorExJ("金币");
>       logd("points "+points);
>       
> 
> }
> main();
> ```


## 找图

### image.findImage 找图
* 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
* @param image     大图片
* @param template  小图片（模板）
* @param x         找图区域 x 起始坐标
* @param y         找图区域 y 起始坐标
* @param ex 终点X坐标
* @param ey 终点Y坐标
* @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
* @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
* @return Rect 区域坐标对象或者null
  

> ```javascript
> 
> function main() {
>     var request = image.requestScreenCapture(10000,0);
>     if (request){
>         toast("申请成功");
>     }else {
>        toast("申请失败");
>         exit();
>     }
>     sleep(5000);
>     //从工程目录下res文件夹下读取sms.png文件
>    var sms=readResAutoImage("sms.png");
>     //在当前屏幕中查找，并且限制只查找一个
>     var point = image.findImageEx( sms, 1);
>     logd("point "+point);
>     //抓取屏幕
>    var aimage = image.captureFullScreen();
>     logd("aimage "+aimage);
>     if (aimage != null) {
>         //在图片中查找
>         point = image.findImage(aimage, sms,0,0,0,0,1, 1);
>         logd("point "+point);
>     }
> }
> 
> main();
> ```


### image.findImageEx 自动截屏找图
* 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
* @param template  小图片（模板）
* @param x         找图区域 x 起始坐标
* @param y         找图区域 y 起始坐标
* @param ex 终点X坐标
* @param ey 终点Y坐标
* @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
* @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
* @return Rect 区域坐标对象数组或者null
  

> ```javascript
> 
> function main() {
>     var request = image.requestScreenCapture(10000,0);
>     if (request){
>         toast("申请成功");
>     }else {
>        toast("申请失败");
>         exit();
>     }
>     sleep(5000);
>     //从工程目录下res文件夹下读取sms.png文件
>    var sms=readResAutoImage("sms.png");
>     //在当前屏幕中查找，并且限制只查找一个
>     var point = image.findImageEx(sms,0,0,0,0,1, 1);
>     logd("point "+point);
> }
> 
> main();
> ```











### image.matchTemplate 图片模板匹配
* OpenCV模板匹配封装
* @param image         大图片
* @param template      小图片（模板）
* @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
* @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
* @param rect          找图区域。参见findColor函数关于 rect 的说明。
* @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
* @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
* @return Match集合 或者null
  

> ```javascript
> 
> function main() {
>      var req = image.requestScreenCapture(10000,0);
>      if (!req) {
>          req = image.requestScreenCapture(10000,0);
>      }
>      if (!req) {
>          toast("申请权限失败");
>          return;
>      }
>      var aimage = image.captureFullScreen();
>      if (aimage != null) {
>         var temp = readResAutoImage("tmp.png");
>         var rectp= new Rect();
>         rectp.left=10;
>         rectp.top=100;
>         rectp.right=100;
>         rectp.bottom=400;
>          var x = image.matchTemplate(aimage, temp,0.9,0.9,rectp,-1,1);
>          logd(x);
>      }
> }
> main();
> ```



### image.matchTemplateEx 图片模板匹配
* OpenCV模板匹配封装，在当前屏幕截图中进行匹配
* @param template      小图片（模板）
* @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
* @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
* @param rect          找图区域。参见findColor函数关于 rect 的说明。
* @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
* @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
* @return Match集合 或者null
  

> ```javascript
> 
> function main() {
>      var req = image.requestScreenCapture(10000,0);
>      if (!req) {
>          req = image.requestScreenCapture(10000,0);
>      }
>      if (!req) {
>          toast("申请权限失败");
>          return;
>      }
>      var aimage = image.captureFullScreen();
>      if (aimage != null) {
>         var temp = readResAutoImage("tmp.png");
>         var rectp= new Rect();
>         rectp.left=10;
>         rectp.top=100;
>         rectp.right=100;
>         rectp.bottom=400;
>          var x = image.matchTemplateEx( temp,0.9,0.9,rectp,-1,1);
>          logd(x);
>      }
> }
> main();
> ```


## 二值化

### image.binaryzation 二值化Image
 * 对AutoImage图片进行二值化
 * @param img AutoImage图片对象
 * @param type 二值化类型，一般写1即可
 * 0    灰度值大于阈值为最大值，其他值为
 * 1    灰度值大于阈值为0，其他值为最大值
 * 2    灰度值大于阈值的为阈值，其他值不变
 * 3    灰度值大于阈值的不变，其他值为0
 * 4    灰度值大于阈值的为零，其他值不变
 * 7    暂不支持
 * 8    大津法自动寻求全局阈值
 * 16    三角形法自动寻求全局阈值
 * @param threshold 二值化系数，0 ~ 255
 * @return AutoImage 对象或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       for (var i = 0; i < 1000; i++) {
>              sleep(1000);
>              var s = new Date().getTime();
>              var d = image.captureFullScreenEx();
>              if (d) {
>                  var saved =image.saveTo(d,"/sdcard/testb.png");
>                  var s = new Date().getTime();
>                  var bd = image.binaryzation(d,1,200);
>                  logd("time "+(new Date().getTime()-s))
>                  logd(bd.uuid);
>                  if (bd) {
>                      var saved =image.saveTo(bd,"/sdcard/testb2.png");
>                      logd("saved "+saved)
>                      exit()
>                  }
>              }
>          }
> 
> }
> main();
> ```


### image.binaryzationBitmap 二值化Bitmap
 * 对安卓的 Bitmap 图片进行二值化
 * @param bitmap Bitmap 图片对象
 * @param type 二值化类型，一般写1即可
 * 0    灰度值大于阈值为最大值，其他值为
 * 1    灰度值大于阈值为0，其他值为最大值
 * 2    灰度值大于阈值的为阈值，其他值不变
 * 3    灰度值大于阈值的不变，其他值为0
 * 4    灰度值大于阈值的为零，其他值不变
 * 7    暂不支持
 * 8    大津法自动寻求全局阈值
 * 16    三角形法自动寻求全局阈值
 * @param threshold 二值化系数，0 ~ 255
 * @return Bitmap 对象或者null

> ```javascript
> 
> function main() {
>       var req = image.requestScreenCapture(10000,0);
>         if (!req) {
>          req = image.requestScreenCapture(10000,0);
>       }
>       if (!req) {
>           toast("申请权限失败");
>           return;
>       }
>       for (var i = 0; i < 1000; i++) {
>              sleep(1000);
>              var s = new Date().getTime();
>              var d = image.captureScreenBitmap("jpg",100,100,200,300,100);
>              if (d) {
>                  var s = new Date().getTime();
>                  var bd = image.binaryzationBitmap(d,1,200);
>                  logd("time "+(new Date().getTime()-s))
>                  logd(bd);
>                  if (bd) {
>                      exit()
>                  }
>              }
>          }
> 
> }
> main();
> ```

## OCR 文字识别



### image.initOcr 初始化OCR模块
 * 初始化OCR模块，百度PaddleOCR，具体请看相关文档，默认自带了Paddle的训练模型
 * @param map map参数表
 * key分别为：
 *  modelDir: 百度Paddle OCR训练模型目录
 * labelFile: 百度Paddle OCR 文字文本路径
 * @return {bool} 布尔型 成功或者失败

> ```javascript
> 
> function main() {
>   let r = image.initOcr({});
>   logd(r)
>      var request = image.requestScreenCapture(10000,0);
>          if (!request) {
>             request = image.requestScreenCapture(10000,0);
>          }
>          logd("申请截图结果... "+request)
>   
>   while(true){
>       sleep(1000)
>       //let b = image.readBitmap("/sdcard/test.png");
>          var b = image.captureScreenBitmap("jpg",0,0,0,0,100);
>       if (b) {
>           let rs = image.ocrBitmap(b,10000);
>           if (rs) {
>               logd("rs "+JSON.stringify(rs));
>           }
>           b.recycle();
>       }
>   }
> image.releaseOcr();
> }
> main();
> ```



### image.ocrBitmap 对Bitmap进行OCR
 * 对Bitmap进行OCR，返回的是JSON数据，其中数据类似于与：
 *  [{"label":"奇趣装扮三阶盘化","confidence":0.48334712,"points":[{"x":11,"y":25},{"x":239,"y":10},{"x":241,"y":43},{"x":13,"y":59}]},{"label":"快来加入威房箱物","confidence":0.6789893,"points":[{"x":183,"y":264},{"x":429,"y":249},{"x":432,"y":298},{"x":186,"y":313}]},{"label":"养成","confidence":0.5535166,"points":[{"x":317,"y":305},{"x":463,"y":284},{"x":470,"y":333},{"x":324,"y":354}]}]
 *  <br/>
 *  label: 代表是识别的文字
 *  confidence：代表识别的准确度
 * points: 代表坐标，有4个值，分别是：左上方，右上方，右下方，左下方
 * @param bitmap 图片
 * @param timeout 超时时间 单位毫秒
 * @return {JSON} JSON对象

> ```javascript
> 
> function main() {
>   let r = image.initOcr({});
>   logd(r)
>      var request = image.requestScreenCapture(10000,0);
>          if (!request) {
>             request = image.requestScreenCapture(10000,0);
>          }
>          logd("申请截图结果... "+request)
>   
>   while(true){
>       sleep(1000)
>       //let b = image.readBitmap("/sdcard/test.png");
>          var b = image.captureScreenBitmap("jpg",0,0,0,0,100);
>       if (b) {
>           let rs = image.ocrBitmap(b,10000);
>           if (rs) {
>               logd("rs "+JSON.stringify(rs));
>           }
>           b.recycle();
>       }
>     image.releaseOcr();
>   }
> }
> main();
> ```


### image.releaseOcr 释放OCR占用的资源
 * 释放OCR占用的资源
 * @return {bool} 成功或者失败

> ```javascript
> 
> function main() {
>   let r = image.initOcr({});
>   logd(r)
>      var request = image.requestScreenCapture(10000,0);
>          if (!request) {
>             request = image.requestScreenCapture(10000,0);
>          }
>          logd("申请截图结果... "+request)
>   
>   while(true){
>       sleep(1000)
>       //let b = image.readBitmap("/sdcard/test.png");
>          var b = image.captureScreenBitmap("jpg",0,0,0,0,100);
>       if (b) {
>           let rs = image.ocrBitmap(b,10000);
>           if (rs) {
>               logd("rs "+JSON.stringify(rs));
>           }
>           b.recycle();
>       }
>     image.releaseOcr();
>   }
> }
> main();
> ```


## 其他
### image.readImage 读取文件为Image
* 读取在路径path的图片文件并返回一个{@link AutoImage}对象。如果文件不存在或者文件无法解码则返回null。
* @param path 图片路径
* @return AutoImage 对象或者null


> ```javascript
> 
> function main() {
>     var autoimg = image.readImage("/sdcard/a.png");
> }
> main();
> ```

### image.readBitmap 读取文件为Bitmap
* 读取在路径path的图片文件并返回一个{@link AutoImage}对象。如果文件不存在或者文件无法解码则返回null。
* @param path 图片路径
* @return android的bitmap对象或者null


> ```javascript
> 
> function main() {
>     var autoimg = image.readBitmap("/sdcard/a.png");
> }
> main();
> ```

### image.pixelInImage 图像坐标点颜色
* 返回图片image在点(x, y)处的像素的ARGB值。
* 该值的格式为0xAARRGGBB，是一个"32位整数"
* 坐标系以图片左上角为原点。以图片左侧边为y轴，上侧边为x轴。
* @param image 图片
* @param x     要获取的像素的横坐标。
* @param y     要获取的像素的纵坐标。
* @return 整型


> ```javascript
> 
> function main() {
>     var imageX = image.captureFullScreen();
>     var color = image.pixelInImage(imageX,100,100);
> }
> main();
> ```



### image.getPixelBitmap 取得Bitmap单点颜色
 * 取得Bitmap图片的某个点的颜色值
 * @param bitmap 图片对象
 * @param x x坐标点
 * @param y y坐标点
 * @return int 颜色值


> ```javascript
> 
> function main() {
>     var bitmap = image.captureScreenBitmap("jpg",800,800,100,100,100);
>     var color = image.getPixelBitmap(bitmap,100,100);
> }
> main();
> ```



### image.getPixelsBitmap 取得Bitmap区域颜色
 * 取得Bitmap图片的某个区域点的颜色值，等同于 Bitmap.getPixels
 * @param bitmap 图片对象
 * @param arraySize 要返回的区域数组的大小
 * @param offset      写入到pixels[]中的第一个像素索引值
 * @param stride      pixels[]中的行间距个数值(必须大于等于位图宽度)。可以为负数
 * @param x          　从位图中读取的第一个像素的x坐标值。
 * @param y           从位图中读取的第一个像素的y坐标值
 * @param width    　　从每一行中读取的像素宽度
 * @param height 　　　读取的行数
 * @return int 颜色值数组


> ```javascript
> 
> function main() {
>     var bitmap = image.captureScreenBitmap("jpg",800,800,100,100,100);
>      var w = bitmap.getWidth();
>      var h =bitmap.getHeight();
>    var mPixels =  image.getPixelsBitmap(bitmap,w*h, 0, w, 0, 0,w, h);
> }
> main();
> ```


## 图片转换
### image.saveTo 保存到文件
* 保存到文件中
* @param img 图片对象
* @param path 路径
* @return bool true代表成功，false 代表失败

> ```javascript
> 
> function main() {
>     var imageX = image.captureFullScreen();
>     var r = image.saveTo(imageX,"/sdard/a.png");
>     toast("result "+r);
> }
> main();
> ```




### image.toBase64Format Image转base64
*  转成base64的字符串, jpg格式较小，可以减少内存
 * @param img 图片对象
 * @param format 格式  jpg或者 png
 * @param q 质量  1-100，质量越大 越清晰
 * @return 字符串

> ```javascript
> 
> function main() {
>     var imageX = image.captureFullScreen();
>     var r = image.toBase64Format(imageX,"jpg",50);
>     toast("result "+r);
> }
> main();
> ```


### image.clip 剪切图片
 * 剪切图片
 * @param img 图片对象
 * @param x x起始坐标
 * @param y y起始坐标
* @param ex 终点X坐标
* @param ey 终点Y坐标
 * @return AutoImage 对象或者null
 
> ```javascript
> 
> function main() {
>     var imageX = image.captureFullScreen();
>     var r = image.clip(imageX,100,100,300,400);
>     toast("result "+r);
> }
> main();
> ```

### image.pixel 图片某点颜色值
 * 取得图片的某个点的颜色值
 * @param img 图片对象
 * @param x x坐标点
 * @param y y坐标点
 * @return int 颜色值
 
 
> ```javascript
> 
> function main() {
>     var imageX = image.captureFullScreen();
>     var r = image.pixel(imageX,100,100);
>     toast("result "+r);
> }
> main();
> ```



### image.isRecycled 图片回收判断
 * 是否被回收了
 * @param img 图片对象
 * @return bool true代表已经被回收了
 
 
> ```javascript
> 
> function main() {
>     var imageX = image.captureFullScreen();
>     var r = image.isRecycled(imageX);
>     toast("result "+r);
> }
> main();
> ```


### image.recycle 回收图片
 * 回收图片 
 * @param img 图片对象
 
> ```javascript
> 
> function main() {
>     var imageX = image.captureFullScreen();
>      image.recycle(imageX);
>   
> }
> main();
> ```


### image.clipBitmap (剪裁bitmap)
 * 剪裁图片，请自行判断参数，正确性
 * @param bitmap 图片
 * @param x 开始X坐标
 * @param y 开始Y坐标
 * @param w 剪裁宽度
 * @param h 剪裁高度
 * @return {Bitmap} 安卓的Bitmap对象
 
> ```javascript
> 
> function main() {
>   var request = image.requestScreenCapture(10000,0);
>    if (!request) {
>        request = image.requestScreenCapture(10000,0);
>    }
>
>    logd("申请截图结果... "+request)
>
>    for (var i = 0; i < 100; i++) {
>        var d =image.captureScreenBitmap("jpg",0,0,0,0,100);
>        logd(d)
>        sleep(1000);
>        if (d) {
>            d= image.clipBitmap(d,100,100,200,200);
>            var ds = image.bitmapBase64(d,"jpg",100);
>            logd(ds)
>            loge(image.base64Bitmap(ds,0))
>        }
>
>    }
>   
> }
> main();
> ```






### image.base64Bitmap (base64转bitmap)
 * base64字符串转为Bitmap图片
 * @param data base64 数据
 * @param flag base64格式的标示，一般为0，
 * 可选参数为 ：0 默认， 1 无填充模式，2 无换行模式，4 换行模式
 * @return {Bitmap} 安卓的Bitmap对象
 
> ```javascript
> 
> function main() {
>   var request = image.requestScreenCapture(10000,0);
>    if (!request) {
>        request = image.requestScreenCapture(10000,0);
>    }
>
>    logd("申请截图结果... "+request)
>
>    for (var i = 0; i < 100; i++) {
>        var d =image.captureScreenBitmap("jpg",0,0,0,0,100);
>        logd(d)
>        sleep(1000);
>        if (d) {
>            d= image.clipBitmap(d,100,100,200,200);
>            var ds = image.bitmapBase64(d,"jpg",100);
>            logd(ds)
>            loge(image.base64Bitmap(ds,0))
>        }
>
>    }
>   
> }
> main();
> ```




### image.bitmapBase64 (bitmap转base64)
 * bitmap转为base64
 * @param bitmap 图片
 * @param format 格式，jpg或者png
 * @param q 质量  1 - 100
 * @return {string} base64字符串
 
> ```javascript
> 
> function main() {
>   var request = image.requestScreenCapture(10000,0);
>    if (!request) {
>        request = image.requestScreenCapture(10000,0);
>    }
>
>    logd("申请截图结果... "+request)
>
>    for (var i = 0; i < 100; i++) {
>        var d =image.captureScreenBitmap("jpg",0,0,0,0,100);
>        logd(d)
>        sleep(1000);
>        if (d) {
>            d= image.clipBitmap(d,100,100,200,200);
>            var ds = image.bitmapBase64(d,"jpg",100);
>            logd(ds)
>            loge(image.base64Bitmap(ds,0))
>        }
>
>    }
>   
> }
> main();
> ```




### image.imageToBitmap (AutoImage转Bitmap)
 * 将AutoImage转换为安卓原生的Bitmap对象
 * @param img {AutoImage}
 * @return  {Bitmap} 对象
 
> ```javascript
> 
> function main() {
>   var request = image.requestScreenCapture(10000,0);
>    if (!request) {
>        request = image.requestScreenCapture(10000,0);
>    }
>
>    logd("申请截图结果... "+request)
>
>    for (var i = 0; i < 100; i++) {
>        var d =image.captureFullScreenEx("jpg",0,0,0,0,100);
>        logd(d)
>        sleep(1000);
>        if (d) {
>            var ds= image.imageToBitmap(d);
>            logd(ds)
>            ds.recycle();
>            image.recyle(d);
>        }
>
>    }
>   
> }
> main();
> ```