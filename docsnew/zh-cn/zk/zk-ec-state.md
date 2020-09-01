# 说明
- 这个接口主要用于控制EC运行脚本包，或者停止脚本运行的
- 请求地址接口为 /script
- 以下例子均为USB连接的情况下，设备接口转到本机的 20390端口为例，请求地址为 http://127.0.0.1:20390/script
- 以下的例子均是使用nodejs做post json请求，如果你使用其他语言，可以自行更改


## run 运行脚本(POST上传文件)
* 运行脚本
> ```javascript
> var FormData = require('form-data');
> var http = require('http');
> var fs = require('fs');
> // type =run 代表运行
>  var url="http://127.0.0.1:20390/script?type=run";
> var form = new FormData();
> //远程端接收iec文件的key是 file
> form.append('file', fs.createReadStream('C:\test.iec'));
> form.submit(url, function(err, res) {
>   console.log(res);
> });
> }
> ```

## run 运行脚本(GET方式)
* 运行脚本
> ```javascript
> const http = require("http")
> // type =run 代表运行
> // path 代表IEC脚本包在手机上的路径
>  var url="http://127.0.0.1:20390/script?type=run&path=/sdcard/a.iec";
> http.get(url, (res) => {
>   console.log(`Got response: ${res}`);
>   res.resume();
> }).on('error', (e) => {
>   console.log(`Got error: ${e.message}`);
> });
> ```

## stop 停止脚本(GET方式)
* 停止脚本
> ```javascript
> const http = require("http")
> // type =stop 停止
>  var url="http://127.0.0.1:20390/script?type=stop";
> http.get(url, (res) => {
>   console.log(`Got response: ${res}`);
>   res.resume();
> }).on('error', (e) => {
>   console.log(`Got error: ${e.message}`);
> });
> ```
