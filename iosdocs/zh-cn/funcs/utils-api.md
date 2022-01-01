## 说明



## 解压缩

### utils.zip 压缩
 * 将多个文件压缩成一个zip文件
 * 适用版本(EC 5.17.0+)
 * @param zipFile 目标zip文件的路径
 * @param passwd 目标ip文件密码，空代表无密码
 * @param files 要压缩的文件或者文件夹，文件数组例如: ["/sdcard/a.txt","/sdcard/bb/"]
 * @return {bool} true 代表成功  false代表失败

> ```javascript
>  
> function main() {
> 
>         zipFile ="/sdcard/a.zip"
>         //压缩文件
>         let passwd = "123";
>         let files =["/sdcard/test.json","/sdcard/gifshow"]
>         let re = utils.zip(zipFile,passwd,files);
>         logd("压缩结果: "+re);
> 
>         let ure = utils.unzip(zipFile,passwd,"/sdcard/test111/");
>         logd("解压结果: "+ure);
> 
> 
>        let data = utils.readFileInZip("/sdcard/a.zip",passwd,"test.json")
>         logd("读取数据结果: "+data);
> }
> 
> main()
> ```


### utils.unzip 解压
 * 将zip文件解压到一个文件夹中
 * 适用版本(EC 5.17.0+)
 * @param zipFile 目标zip文件的路径
 * @param passwd 目标ip文件密码
 * @param destDir 要解压到的目标文件夹
 * @return {bool} true 代表成功  false代表失败

> ```javascript
>  
> function main() {
> 
>         zipFile ="/sdcard/a.zip"
>         //压缩文件
>         let passwd = "123";
>         let files =["/sdcard/test.json","/sdcard/gifshow"]
>         let re = utils.zip(zipFile,passwd,files);
>         logd("压缩结果: "+re);
> 
>         let ure = utils.unzip(zipFile,passwd,"/sdcard/test111/");
>         logd("解压结果: "+ure);
> 
> 
>        let data = utils.readFileInZip("/sdcard/a.zip",passwd,"test.json")
>         logd("读取数据结果: "+data);
> }
> 
> main()
> ```







### utils.readFileInZip ZIP中读取
 * 从zip文件中读取数据
 * 适用版本(EC 5.17.0+)
 * @param zipFile zip文件的路径
 * @param passwd zip文件密码
 * @param filePathInZip 文件在zip中的路径，例如 a/b.txt
 * @return {string} 解析后的字符串

> ```javascript
>  
> function main() {
> 
>         zipFile ="/sdcard/a.zip"
>         //压缩文件
>         let passwd = "123";
>         let files =["/sdcard/test.json","/sdcard/gifshow"]
>         let re = utils.zip(zipFile,passwd,files);
>         logd("压缩结果: "+re);
> 
>         let ure = utils.unzip(zipFile,passwd,"/sdcard/test111/");
>         logd("解压结果: "+ure);
> 
> 
>        let data = utils.readFileInZip("/sdcard/a.zip",passwd,"test.json")
>         logd("读取数据结果: "+data);
> }
> 
> main()
> ```










### utils.getRatio 取得比例
* 取得比例，例如10参数，就是返回10%的比例，如果是true，说明随机比例正确，否则不正确
* @param ratio 浮点型 1-100
* @return true或者false


> ```javascript
>     
> function main(){
>     var ratio = utils.getRatio(20f);
>     toast(ratio);
> }
> main();
> ```



### utils.getRangeInt 取得某个范围的随机值
* 取得某个范围的随机值
* @param min 最小值
* @param max 最大值
* @return 在min和max中间的值,包含最大和最小值


> ```javascript
>     
> function main(){
>     var value = utils.getRangeInt(1,100);
>     toast(value);
> }
> main();
> ```


## MD5

### utils.fileMd5 文件的MD5
* 文件的MD5
* @param file 文件路径
* @return 文件MD5字符串或者null


> ```javascript
>     
> function main(){
>     var md5 = utils.fileMd5("/sdcard/a.txt");
> }
> main();
> ```


### utils.dataMd5 数据计算出来的MD5
* 数据计算出来的MD5
* @param data 数据
* @return 数据MD5字符串或者null


> ```javascript
>     
> function main(){
>     var md5 = utils.dataMd5("data");
> }
> main();
> ```


## 随机

### utils.randomInt 随机整型数据
* 随机整型数据
* @param length 位数，要随机产生多少位的整型数据
* @return 整型


> ```javascript
>     
> function main(){
>     var r = utils.randomInt(2);
> }
> main();
> ```

### utils.randomCharNumber 取得随机的数字和字母
* 取得随机的数字和字母
* @param length 长度
* @return 字符串数字混合


> ```javascript
>     
> function main(){
>     var r = utils.randomCharNumber(2);
> }
> main();
> ```
