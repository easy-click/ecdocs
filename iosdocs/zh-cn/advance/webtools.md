





## 使用说明

利用网页在ios的浏览器打开网页地址，即可正常使用功能

## 部署

### 局域网部署

- 中控自带的桥接会自动启动，工具地址是: http://桥接所在电脑IP:端口/tools?deviceId=aaa, 

- 例如: http://192.168.1.200:8020/tools?deviceId=aaa

预览(不同按钮颜色为了找色方便): 

<img src="zh-cn/images/image-20220711100908095.png" alt="image-20220711100908095" style="zoom: 33%;" />

### 服务器部署模式

- 网盘下载 ios-bridge-linux-2.9.0.zip, 解压到服务器，命令行运行: ios-bridge文件
- 默认程序端口是在8020，请在安全组放行端口
- 在浏览器打开地址 http://服务器IP:8020/tools?deviceId=aaa  , 服务器IP 替换为你正式的服务器ip



## 功能说明

### 功能按钮说明

- 获取上传内容按钮 -  通过api上传数据到桥接，点击 **获取上传内容** 按钮，即可获取上传的内容
- 上传输入框内容按钮 -  将网页输入框内容上传数据到桥接，程序通过api获取上传的内容

- 复制输入框内容按钮 - 内容输入到输入框，点击复制输入框按钮，即可复制内容到剪切板
- 打开地址按钮 - 用于打开输入框内的url，或者 url scheme



### 网页地址参数说明

- 网页的URL一般都可以携带地址的
- deviceId : 设备ID 必填，每个设备的deviceId不同，每个打开的URL地址也不一样

- autoFetch : 自动抓取服务端的数据  1 是  其他否
- autoFetchInterval : 自动抓取数据的 周期 单位是毫秒默认是1000ms
- autoOpenUrl : 抓到数据后 是否自动打开url scheme ,  1 是  其他否
- 全部地址: http://192.168.1.200:8020/tools?deviceId=aaa&autoFetch=1&autoFetchInterval=1000&autoOpenUrl=1

## API说明

### API上传数据功能

```json
说明: 上传内容到网页上
接口名称: /postApiData
提交方式: POST
数据格式: JSON
接口地址例子:http://192.168.1.200:8020/postApiData
数据例子: 
{
  "data": "你好xxx",
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}

提交参数说明:
-	data : 提交的字符串数据
-	deviceId : 设备ID，要与网页URL的参数ID一致，请看[网页地址参数说明]

返回参数说明:
{
  "code": 0,
  "data": true,
  "msg": "success"
}
- code : 返回码，0 代表成功 其他代表错误
- data : true 代替提交成功， false 代表失败
- msg : 错误消息

```



### API获取数据功能

```json
说明: 获取网页点击[上传输入框内容]的数据
接口名称: /getPageData
提交方式: POST
数据格式: JSON
接口地址例子:http://192.168.1.200:8020/getPageData
数据例子: 
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}

提交参数说明:
-	deviceId : 设备ID，要与网页URL的参数ID一致，请看[网页地址参数说明]

返回参数说明:
{
  "code": 0,
  "data": "123",
  "msg": "success"
}
- code : 返回码，0 代表成功 其他代表错误
- data : 实际网页上传的数据
- msg : 错误消息

```



