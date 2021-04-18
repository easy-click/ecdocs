
## 说明
这个章节主要讲解选择器类使用和节点信息类

## 选择器对象
- 选择器对象是支持级联选择，可以在无法直接选择到元素的时候，先通过选择父级后再选择子级
- 选择器部分支撑正则匹配，请参考java的正则语法，[教程](https://www.runoob.com/java/java-regular-expressions.html)


## text属性选择 
### 全文本匹配

> ```javascript
> function main(){
>     //获取选择器对象
>     var selector = text("设置");
>     click(selector);
> }
> main();
> ```





### 正则匹配

> ```javascript
> 
> function main(){ 
>   //获取选择器对象
>   var selector = textMatch(".*设置.*");
>   var result = click(selector);
>   if (result) {
>      toast("点击成功");
>   } else {
>     toast("点击失败");   
>   }
> }
> 
> main();
> ```

## id 属性选择

### 全量匹配

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = id("com.xx:id/a1");
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```

### 正则匹配

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = idMatch(".*id8.*");
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```

## clz 属性选择
### 全量匹配

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>    var selector = clz("android.widget.TextView");
>    var result = click(selector);
>    if (result) {
>        toast("点击成功");
>    } else {
>         toast("点击失败");
>    }
> }
> main();
> ```

### 正则匹配


> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>    var selector = clzMatch(".*TextView.*");
>    var result = click(selector);
>    if (result) {
>        toast("点击成功");
>    } else {
>        toast("点击失败");
>    }
> }
> main();
> ```


## pkg 属性选择
### 全量匹配

> ```javascript
> 
> function main(){ 
>    //获取选择器对象
>    var selector = pkg("com.xx");
>    var result = click(selector);
>    if (result) {
>        toast("点击成功");
>    } else {
>        toast("点击失败");
>    }
> }
> main();
> ```

### 正则匹配

> ```javascript
> 
> function main(){ 
>    //获取选择器对象
>    var selector = pkgMatch(".*tencent.*");
>    var result = click(selector);
>    if (result) {
>        toast("点击成功");
>    } else {
>        toast("点击失败");
>    }
> }
> main();
> ```


## desc 文本属性选择

### 全量匹配

> ```javascript
> 
> function main(){ 
>    //获取选择器对象
>    var selector = desc("我是描述");
>    var result = click(selector);
>    if (result) {
>        toast("点击成功");
>    } else {
>        toast("点击失败");
>    }
> }
> main();
> ```



### 正则匹配


> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = descMatch(".*描述.*");
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main()
> ```


## 深度和绘制顺序匹配

### drawingOrder 

> ```javascript
> 
> function main(){ 
>   //获取选择器对象
>   var selector = drawingOrder(1);
>   var result = click(selector);
>   if (result) {
>       toast("点击成功");
>   } else {
>       toast("点击失败");
>   }
> }
> main();
> ```


### depth


> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = depth(1);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }   
> }
> main();
> ```


## 其他匹配规则

### visible 可视化属性匹配 

 * 按照属性 visible 进行匹配
 * @param value 字符串
 * @return {S} 节点选择器
 
> ```javascript
> 
> function main(){    
>     var node = visible(true).getOneNodeInfo(1000);
>     logd("node "+node);
> }
> main();
> ```

### bounds 范围匹配

 * 按照属性 bounds 进行范围
 *
 * @param left 范围左边数值
 *  @param top 范围上边数值
 *  @param right 范围右边数值
 *  @param bottom 范围底边数值
 * @return {S} 节点选择器
 
> ```javascript
> 
> function main(){    
>     //获取选择器对象 0 - 800以内范围内的控件
>     var selector = bounds(0,0,800,800);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```

### checkable

> ```javascript
> 
> function main(){    
>     //获取选择器对象
>     var selector = checkable(true);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```

### checked

> ```javascript
> 
> function main(){    
>     //获取选择器对象
>     var selector = checked(true);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```

### clickable

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = clickable(true);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```

### longClickable

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = longClickable(true);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```

### scrollable


> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = scrollable(true);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```

### focusable

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = focusable(true);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```


### enabled 

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = enabled(true);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```

### focused


> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = focused(true);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```

### selected


> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = selected(true);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```


### index


> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = index(1);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```


### childCount

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = childCount(1);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```

### row

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = row(1);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```




### column

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = column(1);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```

### rowSpan

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = rowSpan(1);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```



### columnSpan

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = columnSpan(1);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```


### rowCount

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = rowCount(1);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```

### columnCount

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     var selector = columnCount(1);
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```

## 级联匹配

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     //选择 父级为android.widget.ScrollView下的子节点clz=android.widget.CheckBox所有节点
>     var selector = clz("android.widget.ScrollView")
>                            .child()
>                           .clz("android.widget.CheckBox");
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main(); 
> ```




## 多属性匹配


> ```javascript
> 
> function main(){ 
>     //获取选择器对象，
>     //选择包含"选择器"并且checked=true并且类名=android.widget.CheckBox的元素
>     var selector = textMatch(".*选择器.*")
>                           .checked(true)
>                           .clz("android.widget.CheckBox");
>     var result = click(selector);
>     if (result) {
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> ```


## 节点信息类
### 说明
节点对象NodeInfo，可以通过获取getNodeInfo方法获取到节点信息的数组,节点包含的信息如下
- id: 字符串，资源的ID
- clz: 字符串，视图类名，例如 android.widget.TextView
- pkg: 字符串，包名，例如com.xx
- desc: 字符串，内容描述
- text: 字符串，文本
- checkable: 布尔型，是否可选中
- checked: 布尔型，是否选中
- clickable: 布尔型，是否可点击
- enabled: 布尔型，是否启用
- focusable: 布尔型，是否可获取焦点
- focused: 布尔型，是否聚焦
- longClickable: 布尔型，是否可长点击
- scrollable: 布尔型，是否滚动
- selected: 布尔型，是否被选择
- childCount: 整型，子节点的个数
- index: 整型 节点的索引
- depth: 整型 节点的层级深度
- drawingOrder: 整型 节点的绘制顺序
- bounds: Rect型，空间对象
    - top: 整型，顶部位置
    - bottom: 整型，底部位置
    - left: 整型，左边位置
    - right: 整型，右边位置
- visibleBounds: Rect型，可视空间对象
    - top: 整型，顶部位置
    - bottom: 整型，底部位置
    - left: 整型，左边位置
    - right: 整型，右边位置


### 选择器获取一个节点 getOneNodeInfo
* 通过选择器 获取第一个节点信息
* @param timeout 等待时间，单位是毫秒, 如果是0，代表不等待
* @return NodeInfo 对象 或者null

> ```javascript
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.CheckBox所有节点，
>     var node = clz("android.widget.CheckBox").getOneNodeInfo(10000);
>     
>     if (node) {
>        var x= node.click();
>        logd(x);
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 选择器获取多个节点 getNodeInfo
* 获取节点信息
* @param timeout 等待时间，单位是毫秒, 如果是0，代表不等待
* @return NodeInfo 节点信息集合

> ```javascript
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.CheckBox所有节点，
>     var node = clz("android.widget.CheckBox").getNodeInfo(10000);
>    //这玩意是个数组
>    for(let i=0;i<node.length;i++){
>        logd(JSON.stringify(node[i]))
>    }
> }
> main(); 
> ```



### 级联获取一个子节点操作 getOneNodeInfo
* 通过选择器 获取第一个节点信息
* @param timeout 等待时间，单位是毫秒, 如果是0，代表不等待
* @return NodeInfo 对象 或者null

> ```javascript
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.ViewGroup 所有节点，
>     var node = clz("android.widget.ViewGroup").getOneNodeInfo(10000);
>     if (node) {
>         //获取子节点
>         node =node.getOneNodeInfo(text("广告"),10000);
>         if (!node){
>             toast("无子节点");
>             return;
>         }
>        var x= node.click();
>        logd(x);
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```

### 级联获取多个子节点操作 getNodeInfo
* 获取节点信息
* @param timeout 等待时间，单位是毫秒, 如果是0，代表不等待
* @return NodeInfo 节点信息集合

> ```javascript
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.ViewGroup 所有节点，
>     var node = clz("android.widget.ViewGroup").getNodeInfo(10000);
>     if (node) {
>         //获取子节点
>         node =node.getNodeInfo(text("广告").clz("android.widget.TextView"),10000);
>         if (!node){
>             toast("无子节点");
>             return;
>         }
>        var x= node.click();
>        logd(x);
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 获取父节点 parent
* 该节点的父级节点
* @return NodeInfo 对象 或者null

> ```javascript
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.CheckBox所有节点
>     var node = clz("android.widget.CheckBox").getOneNodeInfo(10000);
>     if (node) {
>        var x= node.parent();
>        logd(x);
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 获取子节点 child
* 取得单个子节点
* @param index 子节点索引
* @return NodeInfo 对象 或者null

> ```javascript
> function main(){ 
>     //选择 节点 clz=android.widget.ViewGroup 所有节点
>     var node = clz("android.widget.ViewGroup").getOneNodeInfo(10000);
>     if (node) {
>        var x= node.child(0);
>        logd(x);
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 获取所有子节点 allChildren
* 获取所有子节点
* @return NodeInfo 节点集合

> ```javascript
> function main(){ 
>     //选择 节点 clz=android.widget.ViewGroup 所有节点
>     var node = clz("android.widget.ViewGroup").getOneNodeInfo(10000);
>     if (node) {
>        var x= node.allChildren();
>        //这玩意是个数组
>        for(let i=0;i<x.length;i++){
>            logd(x[i])
>        }
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```

### 所有兄弟节点 siblings
* 当前节点的所有兄弟节点
* @return NodeInfo 节点集合

> ```javascript
> function main(){ 
>     //选择 节点 clz=android.widget.ViewGroup 所有节点
>     var node = clz("android.widget.ViewGroup").getOneNodeInfo(10000);
>     if (node) {
>        var x= node.siblings();
>        //这玩意是个数组
>        for(let i=0;i<x.length;i++){
>            logd(x[i])
>        }
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 前面的兄弟节点 previousSiblings
* 在当前节点前面的兄弟节点
* @return NodeInfo 节点集合

> ```javascript
> function main(){ 
>     //选择 节点 clz=android.widget.ViewGroup 所有节点
>     var node = clz("android.widget.ViewGroup").getOneNodeInfo(10000);
>     if (node!=null) {
>        let x= node.previousSiblings();
>        //这玩意是个数组
>        for(let i=0;i<x.length;i++){
>            logd(x[i])
>        }
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 后面的兄弟节点 nextSiblings
* 在当前节点后面的兄弟节点
* @return NodeInfo 节点集合

> ```javascript
> function main(){ 
>     //选择 节点 clz=android.widget.ViewGroup 所有节点
>     var node = clz("android.widget.ViewGroup").getOneNodeInfo(10000);
>     if (node) {
>        let x= node.nextSiblings();
>        //这玩意是个数组
>        for(let i=0;i<x.length;i++){
>            logd(x[i])
>        }
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 节点区域随机点击 click
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 点击节点
* @return bool, true 成功 ,false 失败

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.CheckBox所有节点
>     var node = clz("android.widget.CheckBox").getOneNodeInfo(10000);
>     if (node) {
>         node.click()
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 无指针点击 clickEx 
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 无指针方式点击选择器，节点必须是可点击的才行
* @param selectors 选择器对象
* @return {boolean|布尔型}
 

> ```javascript
> function main(){
>     var node = text("我是文本").getOneNodeInfo(10000);
>     var result = node.clickEx();
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> 
> ```


### 无指针长点击 longClickEx
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 无指针方式长点击选择器，节点必须是可点击的才行
* @param selectors 选择器对象
* @return {boolean|布尔型}
 

> ```javascript
> function main(){
>     var node = text("我是文本").getOneNodeInfo(10000);
>     var result = node.longClickEx();
>     if (result){
>         toast("点击成功");
>     } else {
>         toast("点击失败");
>     }
> }
> main();
> 
> ```

### 节点点击中心点 clickCenter
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 节点点击中心点
* @return bool, true 成功 ,false 失败

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.CheckBox所有节点
>     var node = clz("android.widget.CheckBox").getOneNodeInfo(10000);
>     if (node) {
>         node.clickCenter();
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 节点长点击 longClick
* 执行条件：无障碍7.0以上或者手势执行为代理服务
* 长点击节点
* @return bool, true 成功 ,false 失败

> ```javascript
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.CheckBox所有节点
>     var node = clz("android.widget.CheckBox").getOneNodeInfo(10000);
>     if (node) {
>         node.longClick()
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```





### 节点输入 inputText 
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 对某个节点输入数据
* @param content 要输入的内容
* @return bool, true 成功 ,false 失败

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.EditText 所有节点
>     var node = clz("android.widget.EditText").getOneNodeInfo(10000);
>     if (node) {
>         node.inputText("内容")
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```

### 节点输入法输入 imeInputText
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 使用输入法对某个节点输入数据，前提是已经设置本程序的输入法为默认输入法
* @param content 要输入的内容
* @return bool, true 成功 ,false 失败

> ```javascript
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.EditText 所有节点
>     var node = clz("android.widget.EditText").getOneNodeInfo(10000);
>     if (node) {
>         node.imeInputText("内容")
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```

### imeInputKeyCode 
* 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
* 适合没有节点的情况，例如游戏等
* @param selectors  选择器，可以为空，如果为空，前提是输入框是聚焦的状态
* @param content 具体请看 KeyEvent.KEYCODE_*的值，例如66 = enter 67=del,84=SEARCH
* @return {boolean|布尔型}

> ```javascript
> 
> function main(){
>     var result = clz("android.widget.EditText").getOneNodeInfo(10000);
>     if (result){
>         result.imeInputKeyCode(66);
>         toast("是");
>     } else {
>         toast("否");
>     }
> }
> main();
> ``` 


### 节点数据清除 clearText 
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 清除节点文本数据

> ```javascript
> 
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.EditText 所有节点
>     var node = clz("android.widget.EditText").getOneNodeInfo(10000);
>     if (node) {
>         var r =node.clearText();
>         logd("r -=> "+r);
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 节点刷新 refresh
* 该方法会刷新节点缓存

> ```javascript
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.EditText 所有节点
>     var node = clz("android.widget.EditText").getOneNodeInfo(10000);
>     if (node) {
>         node.refresh();
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 节点有效判断 isValid
* 节点信息是否有效
@return bool|布尔型 true代表有

> ```javascript
> function main(){ 
>     //获取选择器对象
>     //选择 节点 clz=android.widget.EditText 所有节点
>     var node = clz("android.widget.EditText").getOneNodeInfo(10000);
>     if (node) {
>         var x =node.isValid();
>         toast("节点有效性:"+x);
>     } else {
>         toast("无节点");
>     }
> }
> main(); 
> ```


### 向前滚动 scrollForward
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 向前滚动
* @param selectors 选择器对象
* @return {boolean|布尔型}
 

> ```javascript
> function main(){
>     var node = scrollable(true).getOneNodeInfo(10000);
>     var result = node.scrollForward();
>     if (result){
>         toast("滚动成功");
>     } else {
>         toast("滚动失败");
>     }
> }
> main();
> 
> ```

### 向后滚动 scrollBackward 
* 执行条件：无障碍5.0以上或者手势执行为代理服务
* 向后滚动
* @param selectors 选择器对象
* @return {boolean|布尔型}
 

> ```javascript
> function main(){
>     var node = scrollable(true).getOneNodeInfo(10000);
>     var result = node.scrollBackward();
>     if (result){
>         toast("滚动成功");
>     } else {
>         toast("滚动失败");
>     }
> }
> main();
> 
> ```