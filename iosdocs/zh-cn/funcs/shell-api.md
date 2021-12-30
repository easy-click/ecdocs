
## 说明
- 代理模式下才能使用该函数，用户执行shell命令
- shell模块的对象前缀是shell，例如 shell.installApp()这样调用



## shell.installApp 安装APP
* 安装 apk
* @param path 文件路径
* @return true 代表安装成功，false 代表安装失败

> ```javascript
>     
> function main(){
>     var result = shell.installApp("/sdcard/app.apk");
> }
> main();
> ```


## shell.uninstallApp 卸载APP
* 卸载应用程序
* @param packageName 应用程序的包名
* @return true 代表卸载成功，false 代表卸载失败


> ```javascript
>     
> function main(){
>     var result = shell.uninstallApp("com.xx");
> }
> main();
> ```



## shell.stopApp 停止APP
* 停止正在执行的应用
* @param packageName 应用程序的包名
* @return true 代表成功，false 代表失败


> ```javascript
>     
> function main(){
>     var result = shell.stopApp("com.xx");
> }
> main();
> ```





## shell.execCommand  执行Shell命令
* 执行Shell命令，会自动区分代理还是root
* @param command 命令，例如安装App ： pm install /sdcard/app.apk
* @return 命令执行后返回的字符串结果


> ```javascript
>     
> function main(){
>     var result = shell.execCommand("pm install /sdcard/app.apk");
> }
> main();
> ```



## shell.sudo 执行ROOT下命令
* 执行root模式下，相关的命令，需要有root权限
* @param command 命令，例如安装App ： pm install /sdcard/app.apk
* @return 命令执行后返回的字符串结果


> ```javascript
>     
> function main(){
>     var result = shell.sudo("pm install /sdcard/app.apk");
> }
> main();
> ```
>


## shell.su 请求授予root
 * 请求授予root权限
 * 适用版本(EC 6.0.0+)
 * 运行环境: 无限制
 * @return {boolean} true代表有root权限

> ```javascript
>     
> function main(){
>     var result = shell.su();
> }
> main();
> ```
>

## shell.execAgentCommand 代理模式下执行shell
* 执行shell命令。需要启动代理服务
* @param command 命令，例如安装App ： pm install /sdcard/app.apk
* @return 命令执行后返回的字符串结果


> ```javascript
>     
> function main(){
>     var result = shell.execAgentCommand("pm install /sdcard/app.apk");
> }
> main();
> ```





## shell.execAgentCommandEx 代理模式下执行shell

* 执行shell命令，包含正常和错误结果，返回的是JSON数组，自己判断正确还是错误
* 适合EC 7.6.0+ 版本
* @param command 命令字符串
* @return JSON数组 shell结果


> ```javascript
> function main(){
>  	startEnv()
> 
>   let cmd="ls /sdcard/"
>   let d= agentEvent.execShellCommandEx(cmd)
>   if (d) {
>       for (var i = 0; i < d.length; i++) {
>           var value=d[i];
>           logd(value);
> 
>       }
>   }
> }
> main();
> ```

