## 说明
- 代理事件模块的对象前缀是agentEvent，例如 agentEvent.clickPoint这样调用
- 这里列出来的是代理模式特有的函数，其他调用可以直接使用全局函数

## 设置

### setAgentCallParam  代理全局通信设置超时

* 设置代理模式参数
* 
* @param data 参数表
*  例子: {"remoteCallTimeout":10000}
* remoteCallTimeout: 调用的超时时间，单位是毫秒，默认是10秒
* @return {bool} true 成功 false 失败

> ```javascript
> function main(){
>  var result = agentEvent.setAgentCallParam({"remoteCallTimeout":10000});
>  if (result){
>      logd("是");
>  }else {
>      logd("否");
>  }
> }
> main();
> ```

### 





## 手势及输入事件

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
>         logd("成功");
>     }else {
>         logd("失败");
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
>         logd("成功");
>     }else {
>         logd("失败");
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
>         logd("成功");
>     }else {
>         logd("失败");
>     }
> }
> main();
> ```



