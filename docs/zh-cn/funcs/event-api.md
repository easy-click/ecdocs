## 说明
- 代理事件模块运行的所有函数，是需要使用电脑激活才能使用的，免root
- 代理事件模块的对象前缀是agentEvent，例如 agentEvent.clickPoint这样调用
- 这里列出来的是代理模式特有的函数，其他调用可以直接使用全局函数


## 输入数据
### setCurrentIme  设置当前的输入法
* 设置当前的输入法，用于输入数据
* @return {boolean|布尔型}

> ```javascript
>     
> function main(){
>     var result = agentEvent.setCurrentIme();
>     if (result){
>         toast("是");
>     }else {
>         toast("否");
>     }
> }
> main();
> ``` 

### restoreIme  恢复到之前的输入法
* 恢复到之前的输入法
* @return {boolean|布尔型}

> ```javascript
>     
> function main(){
>     var result = agentEvent.restoreIme();
>     if (result){
>         toast("是");
>     }else {
>         toast("否");
>     }
> }
> main();
> ``` 


## 截图


### fastScreenshot  快速截屏幕的截图
* 快速截屏幕的截图
* @param filename 文件路径
* @return 字符串 截图的路径

> ```javascript
>     
> function main(){
>     var result = agentEvent.fastScreenshot("/sdcard/a.jpg");
>     toast("result:"+result);
> }
> main();
> ``` 





## 手势及输入事件
### inputEvent 执行输入事件
* 执行输入事件
* @param action    动作，请看类:  MotionEvent.ACTION_*
* @param x         x坐标   
* @param y         y坐标   
* @param metaState 控制按键，比如说shift键，alt键，ctrl键等控制键, 0或者 1 any meta info
* @return 布尔型 true 代表成功 false代表失败

> ```javascript
>     
> function main(){
>     var result = agentEvent.inputEvent(1,10,10,0);
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```


### touchDown 执行按下
* 执行按下输入事件
* @param x         x坐标   
* @param y         y坐标   
* @return 布尔型 true 代表成功 false代表失败

> ```javascript
>     
> function main(){
>     var result = agentEvent.touchDown(10,10);
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```

### touchMove 执行移动
* 执行移动输入事件
* @param x         x坐标   
* @param y         y坐标   
* @return 布尔型 true 代表成功 false代表失败

> ```javascript
>     
> function main(){
>     var result = agentEvent.touchMove(10,10);
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```


### touchUp 执行弹起输入
* 执行弹起输入事件
* @param x         x坐标   
* @param y         y坐标   
* @return 布尔型 true 代表成功 false代表失败

> ```javascript
>     
> function main(){
>     var result = agentEvent.touchUp(10,10);
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```




### pressKey 模拟按键
* 模拟按键,例如home back等
* @param key 对应的值分别为 home, back, left, right, up, down, center, menu, search, enter, delete(or del), recent(recent apps), volume_up, volume_down, volume_mute, camera, power
* @return 布尔型 true 成功, false 失败

> ```javascript
>     
> function main(){
>     var result = agentEvent.pressKey("home");
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```



### pressKeyCode 模拟键盘输入
* 模拟键盘输入
* @param keyCode 键盘的key，参见KeyEvent.KEYCODE_*
* @return 布尔型 true 代表成功，false 代表失败

> ```javascript
>     
> function main(){
>     var result = agentEvent.pressKeyCode(65);
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```


### pressKeyCodeWithMetaState 模拟键盘输入
* 模拟键盘输入
* @param keyCode   keyCode 键盘的key，参见KeyEvent.KEYCODE_*
* @param metaState metaState  控制按键，比如说shift键，alt键，ctrl键等控制键, 0或者 1
* @return 布尔型 true 代表成功，false 代表失败。

> ```javascript
>     
> function main(){
>     var result = agentEvent.pressKeyCodeWithMetaState(65,1);
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```



## 系统按键相关


### menu  打开菜单
* 打开菜单
* @return {null|布尔型}

> ```javascript
>     
> function main(){
>     var result = agentEvent.menu();
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```

### enter  Enter键
* Enter键
* @return {null|布尔型}

>     var result = agentEvent.enter();
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```

### delete 删除键
* 删除键
* @return {null|布尔型}

> ```javascript
>     
> function main(){
>     var result = agentEvent.delete();
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```


### search 搜索
* 搜索
* @return {null|布尔型}

> ```javascript
>     
> function main(){
>     var result = agentEvent.search();
>     if (result){
>         toast("成功");
>     }else {
>         toast("失败");
>     }
> }
> main();
> ```





## 屏幕控制
### closeScreen 关闭屏幕
* 关闭屏幕，屏幕不亮，但是依然可以自动点击，不同于sleepScreen
* @return 布尔型 true 成功，false 失败

> ```javascript
>     
> function main(){
>     var x =agentEvent.closeScreen();
> }
> main();
> ```

### lightScreen 点亮屏幕
* 点亮屏幕，和closeScreen相反的动作
* @return 布尔型 true 成功，false 失败

> ```javascript
>     
> function main(){
>     var x =agentEvent.lightScreen();
> }
> main();
> ```

