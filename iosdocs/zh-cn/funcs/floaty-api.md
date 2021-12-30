## 说明
- 悬浮窗模块函数主要是跟悬浮窗相关联
- 悬浮窗模块的对象前缀是floaty，例如 floaty.requestFloatViewPermission()这样调用




## floaty.requestFloatViewPermission 请求悬浮窗权限
* 请求悬浮窗权限
* @return bool true为成功

> ```javascript
>     
> function main(){
>      let tag="123";
>      //关闭tag=123的浮窗
>     floaty.close(tag)
>     //请求权限
>     let p = floaty.requestFloatViewPermission(1000)
>    logd("是否有浮窗权限: "+p);
>    if (!p) {
>        loge("没有浮窗权限，终止执行");
>        return;
>    }
>
>    sleep(1000);
>    //展示main.xml文件的视图，并且返回安卓原生原生的对象
>    let view = floaty.showFloatXml(tag,"main.xml",100,100);
>
>    logd(view);
>    if (view) {
>         // 从悬浮窗中查找视图tag=web的对象 （例子）
>        //let web = view.findViewWithTag("web")
>    }
>
>    sleep(2000)
>    //更新尺寸
>    floaty.updateSize(tag,800,1800)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateX(tag,100)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateY(tag,100)
>    sleep(2000)
>    //更新不可触摸状态
>    floaty.touchable(tag,false)
>    sleep(10000)
>    //更新可以触摸状态
>    floaty.touchable(123,true)
>}
>main();
> ```

## floaty.showFloatXml 显示一个XML悬浮窗
 * 显示一个XML悬浮窗
 * @param tag 悬浮窗的标签
 * @param xml xml路径或者内容
 * @param x 起始X位置
 * @param y 起始Y位置
 * @return {View} android的View对象

> ```javascript
> 
> function main(){
> let tag="123";
> //关闭tag=123的浮窗
> floaty.close(tag)
> //请求权限
> let p = floaty.requestFloatViewPermission(1000)
> logd("是否有浮窗权限: "+p);
> if (!p) {
>  loge("没有浮窗权限，终止执行");
>  return;
> }
>     sleep(1000);
>     //展示main.xml文件的视图，并且返回安卓原生原生的对象
>    let view = floaty.showFloatXml(tag,"main.xml",100,100);
> 
>    logd(view);
>   if (view) {
>          // 从悬浮窗中查找视图tag=web的对象 （例子）
>       //let web = view.findViewWithTag("web")
>    }
>   }
>   main();
> ```




## floaty.showFloatView 显示一个View悬浮窗
 * 显示一个View悬浮窗
 * @param tag 悬浮窗的标签
 * @param view android的View对象
 * @param x 起始X位置
 * @param y 起始Y位置
 * @return {View} android的View对象

> ```javascript
>     
> function main(){
> let tag="123";
>     //关闭tag=123的浮窗
>    floaty.close(tag)
>    //请求权限
>    let p = floaty.requestFloatViewPermission(1000)
>    logd("是否有浮窗权限: "+p);
>    if (!p) {
>        loge("没有浮窗权限，终止执行");
>        return;
>    }
>    sleep(1000);
>   importPackage(android.widget)
>   importPackage(android.graphics)
>   let tv = new TextView(context);
>   tv.setText("TEST");
>   tv.setBackgroundColor(Color.parseColor("#336699"))
>   let view = floaty.showFloatView(tag,tv,100,100);
>   logd(view);
> }
> main();
> ```


## floaty.updateX 设置悬浮窗X坐标
 * 设置悬浮窗X坐标
 * @param tag 悬浮窗的标签
 * @param x X位置
 * @return {bool} true成功 false 失败

> ```javascript
>     
> function main(){
>      let tag="123";
>      //关闭tag=123的浮窗
>     floaty.close(tag)
>     //请求权限
>     let p = floaty.requestFloatViewPermission(1000)
>    logd("是否有浮窗权限: "+p);
>    if (!p) {
>        loge("没有浮窗权限，终止执行");
>        return;
>    }
>
>    sleep(1000);
>    //展示main.xml文件的视图，并且返回安卓原生原生的对象
>    let view = floaty.showFloatXml(tag,"main.xml",100,100);
>
>    logd(view);
>    if (view) {
>         // 从悬浮窗中查找视图tag=web的对象 （例子）
>        //let web = view.findViewWithTag("web")
>    }
>
>    sleep(2000)
>    //更新尺寸
>    floaty.updateSize(tag,800,1800)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateX(tag,100)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateY(tag,100)
>    sleep(2000)
>    //更新不可触摸状态
>    floaty.touchable(tag,false)
>    sleep(10000)
>    //更新可以触摸状态
>    floaty.touchable(123,true)
>}
>main();
> ```

## floaty.updateY 设置悬浮窗Y坐标
 * 设置悬浮窗Y坐标
 * @param tag 悬浮窗的标签
 * @param y Y位置
 * @return {bool} true成功 false 失败

> ```javascript
>     
> function main(){
>      let tag="123";
>      //关闭tag=123的浮窗
>     floaty.close(tag)
>     //请求权限
>     let p = floaty.requestFloatViewPermission(1000)
>    logd("是否有浮窗权限: "+p);
>    if (!p) {
>        loge("没有浮窗权限，终止执行");
>        return;
>    }
>
>    sleep(1000);
>    //展示main.xml文件的视图，并且返回安卓原生原生的对象
>    let view = floaty.showFloatXml(tag,"main.xml",100,100);
>
>    logd(view);
>    if (view) {
>         // 从悬浮窗中查找视图tag=web的对象 （例子）
>        //let web = view.findViewWithTag("web")
>    }
>
>    sleep(2000)
>    //更新尺寸
>    floaty.updateSize(tag,800,1800)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateX(tag,100)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateY(tag,100)
>    sleep(2000)
>    //更新不可触摸状态
>    floaty.touchable(tag,false)
>    sleep(10000)
>    //更新可以触摸状态
>    floaty.touchable(123,true)
>}
>main();
> ```




## floaty.updateSize 设置悬浮窗大小
 * 设置悬浮窗大小
 * @param tag 悬浮窗的标签
 * @param w 宽度
 * @param h 高度
 * @return {bool} true成功 false 失败

> ```javascript
>     
> function main(){
>      let tag="123";
>      //关闭tag=123的浮窗
>     floaty.close(tag)
>     //请求权限
>     let p = floaty.requestFloatViewPermission(1000)
>    logd("是否有浮窗权限: "+p);
>    if (!p) {
>        loge("没有浮窗权限，终止执行");
>        return;
>    }
>
>    sleep(1000);
>    //展示main.xml文件的视图，并且返回安卓原生原生的对象
>    let view = floaty.showFloatXml(tag,"main.xml",100,100);
>
>    logd(view);
>    if (view) {
>         // 从悬浮窗中查找视图tag=web的对象 （例子）
>        //let web = view.findViewWithTag("web")
>    }
>
>    sleep(2000)
>    //更新尺寸
>    floaty.updateSize(tag,800,1800)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateX(tag,100)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateY(tag,100)
>    sleep(2000)
>    //更新不可触摸状态
>    floaty.touchable(tag,false)
>    sleep(10000)
>    //更新可以触摸状态
>    floaty.touchable(123,true)
>}
>main();
> ```


## floaty.close 关闭悬浮窗
 * 关闭悬浮窗
 * @param tag 悬浮窗的标签
 * @return {bool} true成功 false 失败

> ```javascript
>     
> function main(){
>      let tag="123";
>      //关闭tag=123的浮窗
>     floaty.close(tag)
>     //请求权限
>     let p = floaty.requestFloatViewPermission(1000)
>    logd("是否有浮窗权限: "+p);
>    if (!p) {
>        loge("没有浮窗权限，终止执行");
>        return;
>    }
>
>    sleep(1000);
>    //展示main.xml文件的视图，并且返回安卓原生原生的对象
>    let view = floaty.showFloatXml(tag,"main.xml",100,100);
>
>    logd(view);
>    if (view) {
>         // 从悬浮窗中查找视图tag=web的对象 （例子）
>        //let web = view.findViewWithTag("web")
>    }
>
>    sleep(2000)
>    //更新尺寸
>    floaty.updateSize(tag,800,1800)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateX(tag,100)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateY(tag,100)
>    sleep(2000)
>    //更新不可触摸状态
>    floaty.touchable(tag,false)
>    sleep(10000)
>    //更新可以触摸状态
>    floaty.touchable(123,true)
>}
>main();
> ```




## floaty.touchable 设置悬浮窗触摸状态
 * 设置悬浮窗可触摸
 * @param touchable 是否可触摸 true 代表可触摸，false不能触摸
 * @return {bool} true成功 false 失败

> ```javascript
>     
> function main(){
>      let tag="123";
>      //关闭tag=123的浮窗
>     floaty.close(tag)
>     //请求权限
>     let p = floaty.requestFloatViewPermission(1000)
>    logd("是否有浮窗权限: "+p);
>    if (!p) {
>        loge("没有浮窗权限，终止执行");
>        return;
>    }
>
>    sleep(1000);
>    //展示main.xml文件的视图，并且返回安卓原生原生的对象
>    let view = floaty.showFloatXml(tag,"main.xml",100,100);
>
>    logd(view);
>    if (view) {
>         // 从悬浮窗中查找视图tag=web的对象 （例子）
>        //let web = view.findViewWithTag("web")
>    }
>
>    sleep(2000)
>    //更新尺寸
>    floaty.updateSize(tag,800,1800)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateX(tag,100)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateY(tag,100)
>    sleep(2000)
>    //更新不可触摸状态
>    floaty.touchable(tag,false)
>    sleep(10000)
>    //更新可以触摸状态
>    floaty.touchable(123,true)
>}
>main();
> ```




## floaty.focusable 设置悬浮窗聚焦状态
 * 设置悬浮窗可聚焦（视图包含输入框需要聚焦才能进行输入）
 * @param focusable 是否可聚焦 true 代表可聚焦，false不能聚焦
 * @return {bool} true成功 false 失败

> ```javascript
>     
> function main(){
>      let tag="123";
>      //关闭tag=123的浮窗
>     floaty.close(tag)
>     //请求权限
>     let p = floaty.requestFloatViewPermission(1000)
>    logd("是否有浮窗权限: "+p);
>    if (!p) {
>        loge("没有浮窗权限，终止执行");
>        return;
>    }
>
>    sleep(1000);
>    //展示main.xml文件的视图，并且返回安卓原生原生的对象
>    let view = floaty.showFloatXml(tag,"main.xml",100,100);
>    floaty.focusable(tag,true)
>    logd(view);
>    if (view) {
>         // 从悬浮窗中查找视图tag=web的对象 （例子）
>        //let web = view.findViewWithTag("web")
>    }
>
>    sleep(2000)
>    //更新尺寸
>    floaty.updateSize(tag,800,1800)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateX(tag,100)
>
>    sleep(2000)
>    //更新X坐标
>    floaty.updateY(tag,100)
>    sleep(2000)
>    //更新不可触摸状态
>    floaty.touchable(tag,false)
>    sleep(10000)
>    //更新可以触摸状态
>    floaty.touchable(123,true)
>}
>main();
> ```





## floaty.getX 获取浮窗位置X坐标

- 获取浮窗位置X坐标
- 适合版本:EC 6.7.0+
- @param tag 悬浮窗的标签
- @return {int} -1 代表失败 其他都是坐标

```javascript

function main(){
  let tag="123";
  //关闭tag=123的浮窗
 floaty.close(tag)
 //请求权限
 let p = floaty.requestFloatViewPermission(1000)
logd("是否有浮窗权限: "+p);
if (!p) {
    loge("没有浮窗权限，终止执行");
    return;
}

sleep(1000);
//展示main.xml文件的视图，并且返回安卓原生原生的对象
let view = floaty.showFloatXml(tag,"main.xml",100,100);
floaty.focusable(tag,true)
logd(view);
if (view) {
     // 从悬浮窗中查找视图tag=web的对象 （例子）
    //let web = view.findViewWithTag("web")
}

sleep(2000)
logd(floaty.getX(tag))
logd(floaty.getY(tag))
logd(floaty.getWidth(tag))
logd(floaty.getHeight(tag))

}
main();


```



## floaty.getY 获取浮窗位置Y坐标

- 获取浮窗位置y坐标
- 适合版本:EC 6.7.0+
- @param tag 悬浮窗的标签
- @return {int} -1 代表失败 其他都是坐标

```javascript
function main(){
  let tag="123";
  //关闭tag=123的浮窗
 floaty.close(tag)
 //请求权限
 let p = floaty.requestFloatViewPermission(1000)
logd("是否有浮窗权限: "+p);
if (!p) {
    loge("没有浮窗权限，终止执行");
    return;
}

sleep(1000);
//展示main.xml文件的视图，并且返回安卓原生原生的对象
let view = floaty.showFloatXml(tag,"main.xml",100,100);
floaty.focusable(tag,true)
logd(view);
if (view) {
     // 从悬浮窗中查找视图tag=web的对象 （例子）
    //let web = view.findViewWithTag("web")
}

sleep(2000)
logd(floaty.getX(tag))
logd(floaty.getY(tag))
logd(floaty.getWidth(tag))
logd(floaty.getHeight(tag))

}
main();


```





## floaty.getWidth 获取浮窗宽度

- 获取浮窗宽度
- 适合版本:EC 6.7.0+
- @param tag 悬浮窗的标签
- @return {int} -1 代表失败 其他都是坐标

```javascript
function main(){
  let tag="123";
  //关闭tag=123的浮窗
 floaty.close(tag)
 //请求权限
 let p = floaty.requestFloatViewPermission(1000)
logd("是否有浮窗权限: "+p);
if (!p) {
    loge("没有浮窗权限，终止执行");
    return;
}

sleep(1000);
//展示main.xml文件的视图，并且返回安卓原生原生的对象
let view = floaty.showFloatXml(tag,"main.xml",100,100);
floaty.focusable(tag,true)
logd(view);
if (view) {
     // 从悬浮窗中查找视图tag=web的对象 （例子）
    //let web = view.findViewWithTag("web")
}

sleep(2000)
logd(floaty.getX(tag))
logd(floaty.getY(tag))
logd(floaty.getWidth(tag))
logd(floaty.getHeight(tag))

}
main();


```





## floaty.getHeight 获取浮窗高度

- 获取浮窗高度
- 适合版本:EC 6.7.0+
- @param tag 悬浮窗的标签
- @return {int} -1 代表失败 其他都是坐标

```javascript
function main(){
  let tag="123";
  //关闭tag=123的浮窗
 floaty.close(tag)
 //请求权限
 let p = floaty.requestFloatViewPermission(1000)
logd("是否有浮窗权限: "+p);
if (!p) {
    loge("没有浮窗权限，终止执行");
    return;
}

sleep(1000);
//展示main.xml文件的视图，并且返回安卓原生原生的对象
let view = floaty.showFloatXml(tag,"main.xml",100,100);
floaty.focusable(tag,true)
logd(view);
if (view) {
     // 从悬浮窗中查找视图tag=web的对象 （例子）
    //let web = view.findViewWithTag("web")
}

sleep(2000)
logd(floaty.getX(tag))
logd(floaty.getY(tag))
logd(floaty.getWidth(tag))
logd(floaty.getHeight(tag))

}
main();


```

