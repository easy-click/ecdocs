## 说明
- 文件模块函数主要是跟文件信息相关联
- 文件模块的对象前缀是file，例如 file.readFile()这样调用




## file.readFile 读取为字符串
* 将文件读取为字符串
* @param path 文件路径
* @return 字符串

> ```javascript
>     
> function main(){
>     var data = file.readFile("/sdcard/test.txt");
>     toast(data);
> }
> main();
> ```


## file.deleteLine 删除文件某一行
 * 删除文件某一行或者根据包含条件删除
 * 运行环境: 无限制
 * 兼容版本: Android 4.4 以上
 *
 * @param path 文件路径
 * @param line 行数，如果是-1 代表这个条件不生效
 * @param contains 包含某个字符串就删除，如果为null代表这个条件不生效
 *
 * @return {bool} true 成功 false 失败

> ```javascript
>     
> function main(){
>   //删除包含 时间 字符串的行
>   let r = file.deleteLine("/sdcard/a.txt",-1,"时间");
>   logd("r "+r);
>   //删除第3行
>    r = file.deleteLine("/sdcard/a.txt",3,null);
>   logd("r "+r);
> }
> main();
> ```


## file.listDir 列出所有文件
 * 列出文件下的所有文件
 * @param path 路径
 * @return 路径字符串数组

> ```javascript
>     
> function main(){
>     var data = file.listDir("/sdcard/");
>     for(var i = 0; i < data.length; i++) {
>         logd("path "+data[i]);  
>     }
> 
> }
> main();
> ```

## file.writeFile 写入文件
* 将字符串存储到文件中
* @param data 字符串 数据
* @param path 文件路径

> ```javascript
>     
> function main(){
>     var data="Test";
>     file.writeFile(data,"/sdcard/test.txt");
> }
> main();
> ```


## file.create 创建
* 创建一个文件
* @param path 文件或者文件夹路径
* @return 布尔型 true 代表创建成功

> ```javascript
>     
> function main(){
>     var create=file.create("/sdcard/test.txt");
>     toast(create);
> }
> main();
> ```        

## file.mkdirs 创建文件夹
* 创建文件夹
* @param path   路径
* @return 布尔型 true 代表成功，false代表失败
> ```javascript
>     
> function main(){
>     var t=file.mkdirs("/sdcard/testdir/");
>     toast(t);
> }
> main();
> ```

## file.readAssets 读取assets
* 从APK的assets文件夹中读取数据为字符串
* @param path assets文件夹中的文件路径，例如 data/a.txt
* @return 字符串

> ```javascript
>     
> function main(){
>     var data=file.readAssets("data/test.txt");
>     toast(data);
> }
> main();
> ```


## file.deleteAllFile 删除
* 删除所有文件或者文件夹
* @param path 文件或者文件路径

> ```javascript
>     
> function main(){
>     file.deleteAllFile("data/test.txt");
> }
> main();
> ```

## file.appendLine 追加字符串
* 写入一行到文件中,追加模式
* @param data 行数据
* @param path 文件或者文件路径
* @return 布尔型 true代表成功 false代表失败
> ```javascript
>     
> function main(){
>     var data="sss";
>     var t=file.appendLine(data,"/sdcard/test.txt");
>     toast(t);
> }
> main();
> ```



## file.readLine 读取一行
* 读取一行数据，如果行号不对，返回的是空
* @param path   路径
* @param lineNo 行号
* @return 字符串 返回一行字符串
> ```javascript
>     
> function main(){
>     var t=file.readLine("/sdcard/test.txt",1);
>     toast(t);
> }
> main();
> ```



## file.readAllLines 读取所有行
* 读取所有数据
* @param path   路径
* @return 字符串数组|null
> ```javascript
>     
> function main(){
>     var t=file.readAllLines("/sdcard/test.txt");
>     toast(t);
> }
> main();
> ```





## file.exists 是否存在
* 文件或者文件夹是否存在
* @param path   路径
* @return 布尔型 true 代表成功，false代表失败
> ```javascript
>     
> function main(){
>     var t=file.exists("/sdcard/testdir/");
>     toast(t);
> }
> main();
> ```


## file.copy 文件复制
 * 复制文件
 *
 * @param src 源文件路径
 * @param dest 目标文件路径
 * @return 布尔型 true 代表成功
> ```javascript
>     
> function main(){
>     var t=file.copy("/sdcard/a.png","/sdcard/b.png");
>     toast(t);
> }
> main();
> ```
 