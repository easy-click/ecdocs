## 说明

- 本章节主要讲述JS与UI元素进行交互
- 和UI交互的的js模块对象统一以 ui开头，例如 ui.toast("msg")

## 如何使用

- 在工程的layout文件夹下新建一个ui.js文件，内容为
> ```javascript
> function main(){
>     ui.toast("我是JS控制的UI");
> }
> main();
> ```

- 加载layout的main.xml文件并展示出来，内容为
> ```javascript
> function main(){
>     ui.toast("我是JS控制的UI");
>     ui.layout("标签1","main.xml");
> }
> main();
> ```

- 以上的操作即可完成一个简单的展示main.xml布局的操作

## 高级操作

- 编写一个ui.js

> ```javascript
> /**
>  * 该文件由EasyClick开发工具自动创建
>  */
> function main() {
>     ui.toast("我是ui的Toast函数");
>     var set = ui.layout("参数设置", "main.xml");
>     ui.layout("其他说明", "main2.xml");
>     ui.logd("设置UI结果: " + set);
> 
>     //Switch 开关按钮的用法
>     var auto_env = ui.getViewValue(ui.auto_env);
>     ui.logd("tag为 auto_env 的值: " + auto_env);
>     //开关按钮的事件
>     ui.setEvent(ui.auto_env, "checkedChange", function (view, isChecked) {
>         ui.logd("tag为 auto_env isChecked " + isChecked);
>         if (isChecked) {
>             startAutoEnv();
>         }
>     });
>     if (ui.isServiceOk()) {
>         ui.auto_env.setChecked(true);
>     } else {
>         ui.auto_env.setChecked(false);
>     }
> 
>     //EditText 编辑框的用法
>     var name = ui.getViewValue(ui.name);
>     ui.logd("tag为name的值: " + name);
>     ui.name.setText("我是name的值");
>     //Spinner 下拉选择框用法
>     var sex = ui.getViewValue(ui.sex);
>     ui.logd("tag为 sex 的值: " + sex);
>     //下拉选择框的事件
>     ui.setEvent(ui.sex, "itemSelected", function (position, value) {
>         ui.logd("tag为 sex itemSelected " + value);
>     });
> 
>     //RadioButton 单选框用法
>     var three = ui.getViewValue(ui.three);
>     ui.logd("tag为 three 的值: " + three);
>     //单选框的事件
>     ui.setEvent(ui.three, "checkedChange", function (view, isChecked) {
>         ui.logd("tag为 three isChecked " + isChecked);
>     });
>     //CheckBox 复选框用法
>     var dance = ui.getViewValue(ui.dance);
>     ui.logd("tag为 dance 的值: " + dance);
>     //复选框的事件
>     ui.setEvent(ui.dance, "checkedChange", function (view, isChecked) {
>         ui.logd("tag为 dance isChecked " + isChecked);
>     });
> 
>     //saveAllBtn 保存参数事件
>     ui.setEvent(ui.saveAllBtn, "click", function (view) {
>         var s = ui.saveAllConfig();
>         ui.logd("保存所有参数结果 " + s)
>     });
> 
>     //系统设置按钮
>     ui.setEvent(ui.systemSetting, "click", function (view) {
>         ui.openECSystemSetting();
> 
>     });
>     //启动脚本按钮
>     ui.setEvent(ui.startBtn, "click", function (view) {
>         ui.start();
>     });
>     //启动环境按钮
>     ui.setEvent(ui.envBtn, "click", function (view) {
>         //异步启动环境，如果成功了就设置auto_env 按钮的状态
>         startAutoEnv();
>     });
>     //获取所有的UI参数
>     ui.logd("获取所有的UI参数：" + ui.getConfigJSON());
>     //设置值的用法，这里先注释掉
>     // ui.setViewValue(ui.name, "我是设置的");
>     // ui.setViewValue(ui.auto_env, false);
>     // ui.setViewValue(ui.sex, "男生|女生");
>     // ui.setViewValue(ui.three, true);
>     // ui.setViewValue(ui.dance, false)
>     //内存临时存储变量和数据
>     ui.putShareData("nameVar",ui.name);
>     ui.putShareData("value","我是value");
> 
> 
> }
> 
> function startAutoEnv() {
>     ui.startEnvAsync(function (r) {
>         ui.logd("启动环境结果: " + r);
>         ui.auto_env.setChecked(r);
>     });
> }

> main();
> ```

## 脚本如何与JS交互

- 以下代码是在js/main.js中运行的

> ```javascript
>   
>   function main() {
>       //脚本获取UI中的对象，肯定是要先有界面才行
>      //这里可以直接引用UI对象
>       //假设在xml中，我们配置一个一个tag=name 的输入框，EditText
>         //获取UI模块设置的变量和数据
>       logd(ui.getShareData("nameVar"))
>       logd(ui.getShareData("value"))
> 
> 
>       //第一种方式，变量引用
>       //重置JS变量
>       ui.resetUIVar()
>       //打印一下UI中的name变量
>       logd("ui.name "+ui.name)
>       if (ui.name) {
>           //UI主线程中处理
>           getHandler().post(function (){
>                ui.name.setText("Fsdafsadfsa")
>                ui.logd("输入框内容为 : "+ui.name.getEditableText());
>           });
>    
>       }
>       sleep(2000);
>       //第二种方式， findViewByTag
>       var name = ui.findViewByTag("name");
>       if (name) {
>           //UI主线程中处理
>           getHandler().post(function (){
>               name.setText("懵逼了")
>                ui.logd("输入框内容为 : "+name.getEditableText());
>           });
>    
>       }
>     
>     
>     sleep(5000);
>    
>   }
>    
>   main();
> ```



## 消息类
### 消息函数 toast

* 显示Toast信息
* @param msg 信息

> ```javascript
> function main(){
>     ui.toast("我是JS控制的UI");
> }
> main();
> ```

### 日志函数 logd


* 调试日志打印
* @param msg 打印的消息

> ```javascript
> function main(){
>     ui.logd("我是消息");
> }
> main();
> ```


## 布局UI类

### 设置布局 layout

 * 创建一个布局并设置到当前的页面中
 * @param name tab标签的名称
 * @param content 可以是layout文件夹中的文件名称，也可以直接是xml文件的内容
 * @return 布尔型 true代表成功， false代表失败

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
>     ui.logd("参数说明创建结果: " + u1);
>     ui.logd("其他说明创建结果: " + u2);
> }
> main();
> ```



### 解析布局 parseView

* 解析布局并返回
* @param content 可以是layout文件夹中的文件名称，也可以直接是xml文件的内容
* @return View android的View对象，解析有问题就是null

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.parseView("main.xml");
>     ui.logd("创建结果: " + u1);
> }
>  main();
> ```

### 查找视图 resetUIVar

 * 将所有的tag转换成UI的属性直接调用

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
>     ui.resetUIVar();
> }
> 
> main();
>  ```


### 查找视图 findViewByTag

 * 通过tag查找到一个视图
 * @param tag 标签值
 * @return View android原生的View对象

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
>     //查找tag=name的视图
>     var nameView =ui.findViewByTag("name");
>     ui.logd("name view is:"+nameView);
> }
> 
> main();
>  ```

### 保存数据到存储区 putShareData

* 存储数据到存储区中，脚本可以使用,可用于存储变量和数据
* @param key 键
* @param value 值
* @return 布尔型 true成功 false失败

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
>     //保存到存储区
>     ui.putShareData("name","我是临时数据");
> }
> 
> main();
>  ```



### 从存储区读取数据 getShareData

 * 从存储区获取在UI模块存储的数据
 * @param key 键
 * @return 存储的数据

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
>     //从存储区读取数据
>     var d= ui.getShareData("name");
>     logd("d => "+d)
> }
> 
> main();
>  ```


### 从存储区清空数据 clearAllShareData
 
 * 清理所有存储区的数据
 * @return true 或者 false

> ```javascript
> function main() {
>     ui.clearAllShareData();
> }
> 
> main();
>  ```


### 设置事件 setEvent

 * 设置事件
 * @param view 要设置事件的视图，可以是事件的tag值
 * @param eventType 时间类型： click：点击，checkedChange：单选和多选按钮的选中状态改变事件，itemClick：列表的项目点击，itemSelected：列表的项目选中
 * @param eventCallback 事件回调函数
 * @return 布尔型 true代表设置成功， false代表设置失败

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
>      //下拉选择框的事件
>      ui.setEvent(ui.sex, "itemSelected", function (position, value) {
>             ui.logd("tag为 sex itemSelected " + value);
>      });
>      ui.setEvent(ui.dance, "checkedChange", function (view, isChecked) {
>          ui.logd("tag为 dance isChecked " + isChecked);
>      });
>      ui.setEvent(ui.startBtn, "click", function (view) {
>          ui.start();
>      });
> 
> }
> 
> main();
>  ```



### 获取根视图 getRootView


 * 取得当前的根视图对象，因为有可能是多标签的页面，返回的有可能是个集合
 * @return View 对象列表

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
>      //下拉选择框的事件
>      var views= ui.getRootView();
>      ui.logd("views "+views)
>      for (var i = 0; i < views.length; i++) {
>          var value=views[i];
>          ui.logd("view-> "+value)
>      }
> }
> 
> main();
>  ```


### 设置视图值 setViewValue

 * 设置视图的值
 * @param tagOrView 视图的tag或者视图对象
 * @param value 值，字符串或者是布尔型
 * @return 布尔型 true代表成功 false代表失败

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
>     //ui.name 是值xml中tag=name的视图对象
>     ui.setViewValue(ui.name,"我是设置的名称")
> 
> }
> 
> main();
>  ```



### 获取视图值 getViewValue


 * 取得视图的值
 * @param tagOrView 视图的tag或者视图对象
 * @return 字符串或者布尔型

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
>     //ui.name 是值xml中tag=name的视图对象
>     ui.setViewValue(ui.name,"我是设置的名称");
>     var v = ui.getViewValue(ui.name);
> 
>     ui.logd("获取name的值为: "+v);
> 
> }
> 
> main();
>  ```


### 取得UI配置值 getConfigJSON
* 取得所有UI配置
* @return JSON字符串

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
> 
>     ui.setViewValue(ui.name,"我是name");
>     //保存所有的值
>     ui.saveAllConfig();
> 
>     var data = ui.getConfigJSON();
>     ui.logd("data "+data);
> 
>     data= JSON.parse(data);
>     //打印name的值，如果没有值要先保存一下
>     ui.logd(data.name);
> 
> 
> }
> 
> main();
>  ```


### 取得单个UI值 getConfig


 * 取得单个UI配置项
 * @param key 配置的key
 * @return 字符串

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
> 
>     ui.setViewValue(ui.name,"我是name");
>     //保存所有的值
>     ui.saveAllConfig();
> 
>     //单独保存某些值
>     ui.saveConfig("sex","女同学");
>     ui.saveConfig("music",true);
> 
>     var data = ui.getConfigJSON();
>     ui.logd("data "+data);
> 
>     data= JSON.parse(data);
>     //打印name的值，如果没有值要先保存一下
>     ui.logd(data.name);
>     //获取单个值
>     ui.logd(ui.getConfig("name"));
> }
> 
> main();
>  ```



### 保存所有UI值 saveAllConfig

 * 根据设置的tag，保存所有配置
 * @return 布尔型 true 保存成功，false 保存失败

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
> 
>     ui.setViewValue(ui.name,"我是name");
>     //保存所有的值
>     ui.saveAllConfig();
> 
>     //单独保存某些值
>     ui.saveConfig("sex","女同学");
>     ui.saveConfig("music",true);
> 
>     var data = ui.getConfigJSON();
>     ui.logd("data "+data);
> 
>     data= JSON.parse(data);
>     //打印name的值，如果没有值要先保存一下
>     ui.logd(data.name);
> }
> 
> main();
>  ```

### 保存单个UI值 saveConfig


 * 保存UI参数值
 * @param key UI的key
 * @param value UI的值
 * @return 布尔型 true代表成功 false代表失败

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
> 
>     ui.setViewValue(ui.name,"我是name");
>     //保存所有的值
>     ui.saveAllConfig();
> 
>     //单独保存某些值
>     ui.saveConfig("sex","女同学");
>     ui.saveConfig("music",true);
> 
>     var data = ui.getConfigJSON();
>     ui.logd("data "+data);
> 
>     data= JSON.parse(data);
>     //打印name的值，如果没有值要先保存一下
>     ui.logd(data.name);
> }
> 
> main();
>  ```

### 读取图像资源 resResAsDrawable

 * 读取IEC包中的res文件夹某个文件资源，并变成android的Drawable对象返回
 * @param path res文件夹中的资源文件路径
 * @return Drawable 图像对象或者null

> ```javascript
> function main() {
>     // xml文件在layout文件夹下
>     var u1=ui.layout("参数说明", "main.xml");
>     var u2=ui.layout("其他说明", "main2.xml");
> 
>     //checkbox.png 存放在res文件夹下
>     var bg = ui.resResAsDrawable("checkbox.png");
>     //设置动态背景色
>     ui.music.setBackgroundDrawable(bg);
>     //设置按钮的背景
>     ui.music.setButtonDrawable(bg);
> 
> }
> 
> main();
>  ```

## 对话框

### alert

 * alert，弹窗
 * @param map 例如{"title":""},key的固定只有
 * title 标题
 * msg: 消息
 * cancelText: 取消按钮文字
 * okText: 确定按钮文字
 * cancelable: 是否可取消
 * @param okBtnCallback 点击确认按钮的回调
 * @param cancelBtnCallback 点击取消按钮的回调
 * @param dismissListener 对话框消失的回调
 * @return 布尔型 true 代表成功，false 代表失败

> ```javascript
> 
> function main() {
> var p = {
>         "title": "沙雕确认",
>         "msg": "你是沙雕吗？",
>         "cancelable": true,
>         "cancelText": "不是",
>         "okText": "我是"
>     };
>     ui.alert(p, 
>         function (dialog, v) {
>             logd("ok btn click  : ")
>             //让对话消失掉
>             dialog.doDismiss();
>             return true;
>         },
>         function (dialog, v) {
>             logd("cancel btn click ")
>             //让对话消失掉
>             dialog.doDismiss();
>             return true;
>         },
>         function () {
>             logd("mission btn click ")
>             return true;
>         });
> 
> }
> 
> main();
>  ```


### inputDialog

 * inputDialog 输入框弹窗
 * @param map 例如{"title":""},key的固定只有
 * title 标题
 * msg: 消息
 * cancelText: 取消按钮文字
 * okText: 确定按钮文字
 * cancelable: 是否可取消
 * @param okBtnCallback 点击确认按钮的回调
 * @param cancelBtnCallback 点击取消按钮的回调
 * @param dismissListener 对话框消失的回调
 * @return 布尔型 true 代表成功，false 代表失败

> ```javascript
> 
> function main() {
> var p = {
>         "title": "沙雕确认",
>         "msg": "你是沙雕吗？",
>         "cancelable": true,
>         "cancelText": "不是",
>         "okText": "我是"
>     };
>     ui.inputDialog(p, 
>         function (dialog, v,text) {
>             //text 是输入的文字
>             logd("ok btn click  : "+text)
>             //让对话消失掉
>             dialog.doDismiss();
>             return true;
>         },
>         function (dialog, v,text) {
>             logd("cancel btn click "+text)
>             //让对话消失掉
>             dialog.doDismiss();
>             return true;
>         },
>         function () {
>             logd("mission btn click ")
>             return true;
>         });
> 
> }
> 
> main();
>  ```


### customDialog 
 
 * 自定义对话框
 *  @param params 例如{"cancelable":""},key的固定只有
 * fullScreen 是否全屏
 * cancelable: 是否可取消
 * @param view 原生的视图
 * @param onViewBind 视图绑定时候回调函数
 * @param dismissListener 对话框消失的回调
 * @return 布尔型 true 代表成功，false 代表失败
 
> ```javascript
> 
> function main() {
>     //用安卓原生的控件
>     importPackage(android.widget)
>      var textView = new TextView(ui.getContext());
>      textView.setText("sdfasfsad");
>     // 使用xml解析出来的控件
>      var textView = ui.parseView("main2.xml");
>      ui.customDialog({
>              "fullScreen": true,
>              "cancelable": true
>          },
>          textView,
>          function (dialog, v) {
>             //这里面可以拿到视图对象，然后进行设置各种事件
>          }, function () {
>              logd("dsssss")
>          })
> 
> }
> 
> main();
>  ```

## 浮窗类

### 浮窗权限 hasFloatViewPermission


 * 是否有浮窗权限
 * @return 布尔型 true代表有权限 false代表无权限

> ```javascript
> 
> function main() {
>     var r = ui.hasFloatViewPermission();
>     if (!r) {
>         var req = ui.requestFloatViewPermission(10000);
>         ui.logd("申请浮窗权限: "+req);
>     }
>     r = ui.hasFloatViewPermission();
>     ui.logd("是否有浮窗权限: "+r);
> 
> }
> 
> main();
>  ```


### 请求浮窗权限 requestFloatViewPermissionAsync 

 * 异步请求浮窗权限
 * @param timeout 超时时间
 * @param callback 回调函数
 * @return 布尔型 true代表有权限 false代表无权限

> ```javascript
> function main() {
>     var r = ui.hasFloatViewPermission();
>     if (!r) {
>         ui.requestFloatViewPermissionAsync(20000,function(r){
>            ui.logd("申请浮窗权限: "+r);
>         });
> 
>     }
>     r = ui.hasFloatViewPermission();
>     ui.logd("是否有浮窗权限: "+r);
> 
> }
> 
> main();
>  ```


### 展示控制浮窗 showCtrlWindow


 * 展示控制浮窗
 * @return 布尔型 true代表成功，false代表失败

> ```javascript
> function main() {
>     var r = ui.hasFloatViewPermission();
>     ui.logd("是否有浮窗权限:"+r)
>     if (!r) {
>         return
>     }
>     //展示浮窗
>     ui.showCtrlWindow();
>     ui.logd("显示消息")
>     //3秒后在UI线程消失掉
>     ui.getHandler().postDelayed(function (){
>        ui.closeCtrlWindow();
>     },3000);
> }
> 
> main();
>  ```




### 关闭控制浮窗 closeCtrlWindow


 * 关闭控制浮窗
 * @return 布尔型 true代表成功，false代表失败

> ```javascript
> function main() {
>     var r = ui.hasFloatViewPermission();
>     ui.logd("是否有浮窗权限:"+r)
>     if (!r) {
>         return
>     }
>     //展示浮窗
>     ui.showCtrlWindow();
>     ui.logd("显示消息")
>     //3秒后在UI线程消失掉
>     ui.getHandler().postDelayed(function (){
>        ui.closeCtrlWindow();
>     },3000);
> }
> 
> main();
>  ```



### 展示日志浮窗 showLogWindow


 * 显示日志浮窗
 * @return 布尔型 true代表成功，false代表失败

> ```javascript
> function main() {
>     var r = ui.hasFloatViewPermission();
>     ui.logd("是否有浮窗权限:"+r)
>     if (!r) {
>         return
>     }
>     //展示浮窗
>     ui.showLogWindow();
>     ui.logd("显示消息")
>     //3秒后在UI线程消失掉
>     ui.getHandler().postDelayed(function (){
>        ui.closeLogWindow();
>     },3000);
> }
> 
> main();
>  ```


### 关闭日志浮窗 closeLogWindow

 * 关闭日志浮窗
 * @return 布尔型 true代表成功，false代表失败

> ```javascript
> function main() {
>     var r = ui.hasFloatViewPermission();
>     ui.logd("是否有浮窗权限:"+r)
>     if (!r) {
>         return
>     }
>     //展示浮窗
>     ui.showLogWindow();
>     ui.logd("显示消息")
>     //3秒后在UI线程消失掉
>     ui.getHandler().postDelayed(function (){
>        ui.closeLogWindow();
>     },3000);
> }
> 
> main();
>  ```

## 脚本启动

### 是否是无障碍模式 isAccMode

 * 是否是无障碍运行模式
 * @return 布尔型 true 是 false 否

> ```javascript
> function main() {
>   ui.logd("无障碍模式: "+ui.isAccMode());
>   ui.logd("代理模式: "+ui.isAgentMode());
> 
>   // 设置运行模式
>   ui.setRunningMode(1);
> 
>   ui.logd("无障碍模式: "+ui.isAccMode());
>   ui.logd("代理模式: "+ui.isAgentMode());
> }
> 
> main();
>  ```


### 是否是代理模式 isAgentMode



 * 是否是代理运行模式
 * @return 布尔型 true 是 false 否

> ```javascript
> function main() {
>   ui.logd("无障碍模式: "+ui.isAccMode());
>   ui.logd("代理模式: "+ui.isAgentMode());
> 
>   // 设置运行模式
>   ui.setRunningMode(1);
> 
>   ui.logd("无障碍模式: "+ui.isAccMode());
>   ui.logd("代理模式: "+ui.isAgentMode());
> }
> 
> main();
>  ```


### 自动化服务是否正常 isServiceOk

 * 自动化服务是否正常
 * @return 布尔型 true 是 false 否

> ```javascript
> function main() {
>   ui.logd("无障碍模式: "+ui.isAccMode());
>   ui.logd("代理模式: "+ui.isAgentMode());
> 
>   // 设置运行模式
>   ui.setRunningMode(1);
> 
>   ui.logd("无障碍模式: "+ui.isAccMode());
>   ui.logd("代理模式: "+ui.isAgentMode());
> 
> 
>   var ok = ui.isServiceOk();
>   if (!ok) {
>     ui.startEnvAsync(function (r) {
>           ui.logd("启动环境结果: " + r);
>          
>       });
>   }
> }
> 
> main();
>  ```


### 设置运行模式 setRunningMode

 * 设置运行模式
 * @param mode 1 代表是代理模式  2 代表无障碍模式
 * @return 布尔型 true 是 false 否

> ```javascript
> function main() {
>   ui.logd("无障碍模式: "+ui.isAccMode());
>   ui.logd("代理模式: "+ui.isAgentMode());
> 
>   // 设置运行模式
>   ui.setRunningMode(1);
> 
>   ui.logd("无障碍模式: "+ui.isAccMode());
>   ui.logd("代理模式: "+ui.isAgentMode());
> }
> 
> main();
>  ```

### 异步启动自动化环境 startEnvAsync

 * 启动环境
 * @return 布尔型 true代表启动成功，false代表启动失败

> ```javascript
> function main() {
>   var ok = ui.isServiceOk();
>   if (!ok) {
>     ui.startEnvAsync(function (r) {
>           ui.logd("启动环境结果: " + r);
>       });
>   }
> }
> 
> main();
>  ```

### 启动测试脚本 start

 * 启动脚本
 * @return 布尔型 true代表启动成功，false代表启动失败

> ```javascript
> function main() {
>   ui.layout("参数设置", "main.xml");
>   //xml中有个tag=startBtn的按钮
>    //启动脚本按钮
>       ui.setEvent(ui.startBtn, "click", function (view) {
>           ui.start();
>       });
> }
> 
> main();
>  ```


### 停止测试脚本 stopTask
 * 停止测试脚本
 * @return 布尔型 true代表启动成功，false代表启动失败

> ```javascript
> function main() {
>   ui.layout("参数设置", "main.xml");
>   //xml中有个tag=stopBtn的按钮
>    //启动脚本按钮
>       ui.setEvent(ui.stopBtn, "click", function (view) {
>           ui.stopTask();
>       });
> }
> 
> main();
>  ```


## 定时任务

### 开启定时任务 startJob

 * 开启一个定时脚本任务
 * @param tag 任务的唯一标示，不能为空，脚本中可以使用readConfigString("jobTaskTag")获取当前tag值，判断是那个任务过来执行的
 * @param execTime 定时时间格式: 2020-04-17 19:20:00，或者直接是秒数字，例如 3，代表3秒后
 * @param cancelBeforeRunning
 * @return 整型 jobid
 
> ```javascript
> function main() {
>   var set = ui.layout("参数设置", "main.xml");
>   //按照日志定时的任务
>   var time="2020-05-15 15:47:00";
>   var tag="job1";
>   var jobid = ui.startJob(tag,time,true);
>   ui.logd("按照日志定时的任务:"+jobid)
> 
>    //按照多少秒执行
>  var time2="10";
>   var tag2="job2";
>   var jobid2 = ui.startJob(tag2,time2,false);
>   ui.logd("按照多少秒执行:"+jobid2)
> 
>   var tags=ui.getAllJobTag();
>   ui.logd("定时任务的标签:"+tags)
> 
>   //取消任务
>    ui.cancelAllJob();
>    //按照标签取消任务
>    ui.cancelJob("job2");
> }
> 
> main();
>  ```

### 取消定时任务 cancelJob


 * 取消指定标签的任务
 * @param tag 标签
 * @return 布尔型 true代表成功，false代表失败
 
> ```javascript
> function main() {
>   var set = ui.layout("参数设置", "main.xml");
>   //按照日志定时的任务
>   var time="2020-05-15 15:47:00";
>   var tag="job1";
>   var jobid = ui.startJob(tag,time,true);
>   ui.logd("按照日志定时的任务:"+jobid)
> 
>    //按照多少秒执行
>  var time2="10";
>   var tag2="job2";
>   var jobid2 = ui.startJob(tag2,time2,false);
>   ui.logd("按照多少秒执行:"+jobid2)
> 
>   var tags=ui.getAllJobTag();
>   ui.logd("定时任务的标签:"+tags)
> 
>   //取消任务
>    ui.cancelAllJob();
>    //按照标签取消任务
>    ui.cancelJob("job2");
> }
> 
> main();
>  ```


### 取消所有定时任务 cancelAllJob




 * 取消所有的定时任务
 * @return 布尔型 true代表成功，false代表失败
 
> ```javascript
> function main() {
>   var set = ui.layout("参数设置", "main.xml");
>   //按照日志定时的任务
>   var time="2020-05-15 15:47:00";
>   var tag="job1";
>   var jobid = ui.startJob(tag,time,true);
>   ui.logd("按照日志定时的任务:"+jobid)
> 
>    //按照多少秒执行
>  var time2="10";
>   var tag2="job2";
>   var jobid2 = ui.startJob(tag2,time2,false);
>   ui.logd("按照多少秒执行:"+jobid2)
> 
>   var tags=ui.getAllJobTag();
>   ui.logd("定时任务的标签:"+tags)
> 
>   //取消任务
>    ui.cancelAllJob();
>    //按照标签取消任务
>    ui.cancelJob("job2");
> }
> 
> main();
>  ```


### 所有定时任务标签 getAllJobTag



 * 获取所有定时任务TAG
 * @return JSON字符串
 
> ```javascript
> function main() {
>   var set = ui.layout("参数设置", "main.xml");
>   //按照日志定时的任务
>   var time="2020-05-15 15:47:00";
>   var tag="job1";
>   var jobid = ui.startJob(tag,time,true);
>   ui.logd("按照日志定时的任务:"+jobid)
> 
>    //按照多少秒执行
>  var time2="10";
>   var tag2="job2";
>   var jobid2 = ui.startJob(tag2,time2,false);
>   ui.logd("按照多少秒执行:"+jobid2)
> 
>   var tags=ui.getAllJobTag();
>   ui.logd("定时任务的标签:"+tags)
> 
>   //取消任务
>    ui.cancelAllJob();
>    //按照标签取消任务
>    ui.cancelJob("job2");
> }
> 
> main();
>  ```



## 其他扩展

### 监听Activity 状态 onActivityEvent

 * 监听UI所在的activity事件
 * @param eventType 事件类型，分别为：onResume：Activity恢复时， onPause: Activity暂停时， onStop：Activity停止时， onDestroy：Activity销毁时
 * @param callback 回调函数

> ```javascript
> function main() {
>  //监听Activity的事件设置
>     ui.onActivityEvent("onResume", function (eventType) {
>         // 可以在这里判断服务是否正常
>         ui.logd("activity onResume " + ui.isServiceOk());
>     });
> 
>     ui.onActivityEvent("onPause", function (eventType) {
>         ui.logd("activity onPause");
>     });
> 
>     ui.onActivityEvent("onStop", function (eventType) {
>         ui.logd("activity onStop");
>     });
>     ui.onActivityEvent("onDestroy", function (eventType) {
>         ui.logd("activity onDestroy");
>     });
> }
> 
> main();
>  ```

### UI对应的Activity getActivity

 * 取得当前的activity对象
 * @return Activity 对象或者null

> ```javascript
> function main() {
>   var activity=ui.getActivity();
>   ui.logd("activity "+activity);
>   //android context对象也是自带的
>   importPackage(android.widget);
>   importPackage(android.graphics);
>   //直接使用java对象
>   var tv = new android.widget.TextView(context);
>   tv.setText("我是js和java交互的文本对象");
>   tv.setTextColor(Color.parseColor("#888888"))
>   activity.setContentView(tv);
> }
> 
> main();
>  ```



### 原生的Handler getHandler

 * 取得当前的Handler对象
 * @return Handler 对象或者null

> ```javascript
> function main() {
>     //展示浮窗
>     ui.showLogWindow();
>     ui.logd("显示消息")
>     //3秒后在UI线程消失掉
>     ui.getHandler().postDelayed(function (){
>        ui.closeLogWindow();
>     },3000);
> }
> 
> main();
>  ```



### 设置EC的系统参数 setECSystemConfig
 * 设置EC的系统参数
 * @param params  map形式例如 {"running_mode":"无障碍"},<br/>
 * {<br/>
 *     "running_mode":"无障碍",<br/>
 *     "auto_start_service":"是",<br/>
 *      "volume_start_tc":"否",<br/>
 *      "log_float_window":"否",<br/>
 *      "ctrl_float_window":"否"<br/>
 *      "service_start_run_script":"否"<br/>
 * }<br/>
 *  参数解释有：<br/>
 *  running_mode :  值有 无障碍，代理两种
 *  auto_start_service : 开机启动服务 值有 是，否 两种
 *  log_float_window : 日志悬浮窗展示 值有 是，否 两种
 *  ctrl_float_window : 启停控制悬浮窗展示 值有 是，否 两种
*  service_start_run_script : 服务被重启后自动重新运行 值有 是，否 两种
 *
 * @return 布尔型 true 是 false 否
 
> ```javascript
> function main(){
>     var m = {
>           "running_mode":"无障碍",
>           "auto_start_service":"是",
>            "log_float_window":"否",
>            "ctrl_float_window":"否"
>       };
>     ui.setECSystemConfig(m);
> }
> main();
> ```


### 打开EC系统设置 openECSystemSetting
 * 打开EC的系统设置
 * @return 布尔型 true代表成功 false代表失败
 
> ```javascript
> function main() {
>    
>     ui.openECSystemSetting();
> }
> 
> main();
>  ```



### 打开其他应用程序 openActivity
 * 打开一个activity，通过map参数
 * @param map 例如{"action":""},key的固定只有
 * action,
 * uri,pkg,className,flag,其他的都是参数了
 * @return 布尔型 true 代表成功，false 代表失败
 
> ```javascript
> function main() {
>     //打开安装包界面
>         var m ={
>                  "action":"android.intent.action.VIEW",
>                  "uri":"file:///sdcard/a.apk",
>                  "type":"application/vnd.android.package-archive"
>              };
>              var x = ui.openActivity(m);
>              ui.logd("x "+x);
>     
>         var map={
>             "uri":"xx://xx/live/6701887916223941379",
>         };
>         ui.openActivity(map);
> }
> 
> main();
>  ```