## 什么是热更新
- 热更新一般用于不用安装程序即可将关键的代码进行更新
- EC的热更新主要用于更新打包后的自动化测试脚本
- !!![沙雕警告]!!!热更的是编译的iec文件,不是打包的脚本apk
- 注意: 一定要保持update.json文件和服务端接口返回的版本好一直，否则可能导致异常情况

## EC如何热更新

- 打开工程下面的update.json，内容如下:

> ```json
>!!![提醒沙雕]!!!热更的是编译的iec文件,不是打包的脚本apk
>!!![提醒沙雕]!!!这两句是给沙雕看的,不是让你写进json文件的,json不支持任何注释
> {
>    "update_url": "http://baidu.com/update",
>    "version": "1.0.0"
>  }
> 
> ```

- 参数解析
    - update_url: 代表服务端的更新接口，需要自己编写服务端接口
    - version: 代表当前脚本的版本号

## EC 加载新包

### 客户端请求
- 以上配置好后，打包运行，程序会自动使用GET方式请求 update_url对应的地址并且会带上参数；
    例如 ：http://baidu.com/update?version=1.0.0   请自行在服务端做版本比较

### 服务端返回   
- 服务端返回格式如下：
> ```json
> !!![提醒沙雕]!!!热更的是编译的iec文件,不是打包的脚本apk
> !!![正常提醒]!!!如无需更新,服务器直接返回空字符串即可,不要返回json
> !!![提醒沙雕]!!!这几句是给沙雕看的,不是让你写进json文件的,json不支持任何注释,包括下面//里内容
> //普通更新
> {
> "download_url": "http://baidu.com/aaa.iec",
> "version": "1.1.0",
> "dialog":true,
> "msg": "优化部分问题",
> "force": false
> }
> //严格方法,校验md5,防止更新失败
> {
> "download_url": "http://baidu.com/aaa.iec",
> "version": "1.1.0",
> "dialog":true,
> "msg": "优化部分问题",
> "force": false,
>   "md5":"服务器自行校验的iec文件的md5值"
> }
> 
> ```
- download_url： 代表新包的下载地址
- version：代表新包的版本号
- md5: iec文件的MD5，如果有这个值会强制校验文件的准确性，保证文件一定是完整的
- 返回这样的格式的JSON后，EC会下载最新的IEC包并加载使用。
- 5.0.0.RC3 新增参数
    - dialog: 代表是否用对话框的形式展示，true 代表是对话框，false代表不是
    - msg: 对话框中要显示的消息
    - force : 代码对话框模式下是否强制更新，true 代表强制更新，无法取消，false 代表不是强制更新

## UI启动更新

- 如果上述配置无误，打开界面会自动更新

## 脚本内热更新
- 脚本执行期间可以做热更新操作，需要配合代码来进行执行

### hotupdater.updateReq 请求更新

 * 请求热更新接口，如果是false，也有可能是无需更新，可以使用getErrorMsg查看具体得信息
 * 适用版本(EC 5.20.0+)
 * @return {bool} true 代表需要更新 false代表无需更新

> ```javascript
>     function main() {
>         let version = 7;
>         toast("Hello World -> "+version);
>         //请求服务器是否有新版本
>         let updateResult = hotupdater.updateReq();
>         logd("请求更新是否有: "+updateResult);
>         if (!updateResult) {
>             logw("请求失败错误信息: "+hotupdater.getErrorMsg());
>         }else{
>             logd("请求数据: "+hotupdater.getUpdateResp());
>             //有更新得情况下进行下载新的版本
>             let path = hotupdater.updateDownload();
>             logd("下载路径为: "+path);
>             if (!path) {
>                 logw("下载IEC文件错误信息: "+hotupdater.getErrorMsg());
>             }else{
>                 restartScript(path,true,3)
>                 return;
>             }
>         }
>         sleep(1000);
>         for (var i = 0; i < 10; i++) {
>             logd(time()+" "+version);
>             sleep(5000)
>         }
>     }
>     main();
> ```

### hotupdater.updateDownload 请求下载IEC

 * 下载热更新请求到得IEC文件
 * 适用版本(EC 5.20.0+)
 * @return {string} 下载后热更新文件得路径，如果为空，也有可能是无需更新

> ```javascript
>     function main() {
>         let version = 7;
>         toast("Hello World -> "+version);
>         //请求服务器是否有新版本
>         let updateResult = hotupdater.updateReq();
>         logd("请求更新是否有: "+updateResult);
>         if (!updateResult) {
>             logw("请求失败错误信息: "+hotupdater.getErrorMsg());
>         }else{
>             logd("请求数据: "+hotupdater.getUpdateResp());
>             //有更新得情况下进行下载新的版本
>             let path = hotupdater.updateDownload();
>             logd("下载路径为: "+path);
>             if (!path) {
>                 logw("下载IEC文件错误信息: "+hotupdater.getErrorMsg());
>             }else{
>                 restartScript(path,true,3)
>                 return;
>             }
>         }
>         sleep(1000);
>         for (var i = 0; i < 10; i++) {
>             logd(time()+" "+version);
>             sleep(5000)
>         }
>     }
>     main();
> ```



### hotupdater.getUpdateResp 获取请求结果

 * 获取热更新得请求结果
 * 适用版本(EC 5.20.0+)
 * @return {string} 字符串

> ```javascript
>     function main() {
>         let version = 7;
>         toast("Hello World -> "+version);
>         //请求服务器是否有新版本
>         let updateResult = hotupdater.updateReq();
>         logd("请求更新是否有: "+updateResult);
>         if (!updateResult) {
>             logw("请求失败错误信息: "+hotupdater.getErrorMsg());
>         }else{
>             logd("请求数据: "+hotupdater.getUpdateResp());
>             //有更新得情况下进行下载新的版本
>             let path = hotupdater.updateDownload();
>             logd("下载路径为: "+path);
>             if (!path) {
>                 logw("下载IEC文件错误信息: "+hotupdater.getErrorMsg());
>             }else{
>                 restartScript(path,true,3)
>                 return;
>             }
>         }
>         sleep(1000);
>         for (var i = 0; i < 10; i++) {
>             logd(time()+" "+version);
>             sleep(5000)
>         }
>     }
>     main();
> ```

### hotupdater.getErrorMsg 获取错误信息

 * 获取热更新重新的错误
 * 适用版本(EC 5.20.0+)
 * @return {string} 字符串

> ```javascript
>     function main() {
>         let version = 7;
>         toast("Hello World -> "+version);
>         //请求服务器是否有新版本
>         let updateResult = hotupdater.updateReq();
>         logd("请求更新是否有: "+updateResult);
>         if (!updateResult) {
>             logw("请求失败错误信息: "+hotupdater.getErrorMsg());
>         }else{
>             logd("请求数据: "+hotupdater.getUpdateResp());
>             //有更新得情况下进行下载新的版本
>             let path = hotupdater.updateDownload();
>             logd("下载路径为: "+path);
>             if (!path) {
>                 logw("下载IEC文件错误信息: "+hotupdater.getErrorMsg());
>             }else{
>                 restartScript(path,true,3)
>                 return;
>             }
>         }
>         sleep(1000);
>         for (var i = 0; i < 10; i++) {
>             logd(time()+" "+version);
>             sleep(5000)
>         }
>     }
>     main();
> ```