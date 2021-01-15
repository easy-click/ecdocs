## 说明
- 线程模块函数主要是跟线程信息相关联
- 线程模块的对象前缀是thread，例如 thread.execFuncSync()这样调用




## setTimeout 延迟执行
 * 设定延迟多少毫秒后执行函数，在子线程中执行
 * @param func 要执行的函数
 * @param timeout 延迟时间，单位是毫秒
 * 线程对象  该对象可以进行取消

> ```javascript
>     
> function main(){
>     var t=setTimeout(function() {
>         toast("我是一秒后执行的代码");
>     },1000);
>     while(true){
>        //阻塞程序,模拟脚本运行中
>        sleep(1000)
>     }
> }
> main();
> ```

## cancelTimeout  取消延迟执行
 * 取消延迟执行
 * @param t 要取消的函数
> ```javascript
>     
> function main(){
>     var t=setTimeout(function() {
>         toast("我是一秒后执行的代码");
>     },1000);
>     //取消就不会执行了
>     cancelTimeout(t);
> }
> main();
> ```

## setInterval 周期执行
 * 设置多少周期进行执行一次，在子线程中执行
 * @param func 函数
 * @param interval 周期时间，单位是毫秒
 * @return 线程对象  该对象可以进行取消

> ```javascript
>     
> function main(){
>     var t=setInterval(function() {
>         toast("我是每隔一秒执行的代码");
>     },1000);
>     while(true){
>        //阻塞程序,模拟脚本运行中
>        sleep(1000)
>     }
> }
> main();
> ```

## cancelInterval 取消周期执行
 * 取消周期执行的函数
 * @param t 要取消的函数
 
> ```javascript
>     
> function main(){
>     var t=setInterval(function() {
>         toast("我是每隔一秒执行的代码");
>     },1000);
>     cancelInterval(t);
> }
> main();
> ```


## execSync 同步执行
* 执行某个函数并且等待true返回，如果函数中返回的是true，该方法将立刻执行完毕
 * @param condition 条件函数
 * @param timeout   超时时间，单位是毫秒
 * @return 布尔型 返回一个布尔型值
> ```javascript
>     
> function main(){
>     execSync(function() {
>         logd("我是同步执行的代码");  
>     },1000);
> }
> main();
> ```

## thread.stopAll 停止
* 取消所有正在运行的线程
> ```javascript
>     
> function main(){
>     execSync(function() {
>         logd("我是同步执行的代码");  
>     },1000);
>     thread.stopAll();
> }
> main();
> ```

## thread.execAsync 异步执行
* 异步执行线程，这里会将Runnable放到线程池中进行管理
* @param runnable Runnable对象

> ```javascript
>     
> function main(){
>     var tid =thread.execAsync(function() {
>                 while (true){
>                     logd("我是异步执行的代码");
>                     sleep(1000);
>                     if(thread.isCancelled(tid)){
>                         break;
>                     }
>                  }
>             });
>             logd("tid "+tid);
>           //5s后取消线程
>           sleep(5000);
>           logd("取消线程 "+tid);
>           thread.cancelThread(tid);
>           sleep(5000);
>           logd("结束 "); 
> }
> main();
> ```

## thread.execSync 同步执行
* 执行某个函数并且等待true返回，如果函数中返回的是true，该方法将立刻执行完毕
 * @param condition 条件函数
 * @param timeout   超时时间，单位是毫秒
 * @return 布尔型 返回一个布尔型值

> ```javascript
>     
> function main(){
>     thread.execSync(function() {
>         logd("我是同步执行的代码");  
>     },1000);
> }
> main();
> ```


## thread.cancelThread 取消线程
 * 取消线程的执行
 * @param t 线程对象ID
 * @return boolean

> ```javascript
>     
> function main(){
>     var tid =thread.execAsync(function() {
>                 while (true){
>                     logd("我是异步执行的代码");
>                     sleep(1000);
>                     if(thread.isCancelled(tid)){
>                         break;
>                     }
>                  }
>             });
>             logd("tid "+tid);
>           //5s后取消线程
>           sleep(5000);
>           logd("取消线程 "+tid);
>           thread.cancelThread(tid);
>           sleep(5000);
>           logd("结束 "); 
> }
> main();
> ```



## thread.isCancelled 取消判断
 * 取消线程的执行
 * @param t 线程对象ID
 * @return boolean true代表已经取消了，false表示未取消

> ```javascript
>     
> function main(){
>     var tid =thread.execAsync(function() {
>                 while (true){
>                     logd("我是异步执行的代码");
>                     sleep(1000);
>                     if(thread.isCancelled(tid)){
>                         break;
>                     }
>                  }
>             });
>             logd("tid "+tid);
>           //5s后取消线程
>           sleep(5000);
>           logd("取消线程 "+tid);
>           thread.cancelThread(tid);
>           sleep(5000);
>           logd("结束 "); 
> }
> main();
> ```