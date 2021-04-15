### 说明

- 阐述: 本文档主要描述ecloud云控系统的通信协议，包括任务下发流程、数据回传等，对于不使用EC编写脚本，但是想接入ecloud云控的客户，请详细阅读该文档
- 适用: 本文档适用ecloud 1.6.0以上版本



### 系统任务执行流程

- 该章节描述了ecloud系统如何下发任务，具体如何创建任务请参考ecloud.zip压缩文件中的部署文档说明

- 定义解释：请参见 https://easyclick.gitee.io/docs/#/zh-cn/ecloud/intro

- 重要说明：设备编号是系统唯一认定设备的标识，需要在手机端和云控端一一对应，ecloud 1.6.0以上版本使用的是普通的HTTP协议

- 详细流程

  ![image-20201214223850575](image-20201214223850575.png)





### 详细接口说明

- 通信采用http协议，请求方式为post，数据格式为post json, Java的jsoup请求实例

  ```java
   public static String postJSON(String url, JSONObject jsonObject, int timeout) {
        
          try {
              Connection.Response response
                      = Jsoup.connect(url)
                      .ignoreHttpErrors(true)
                      .ignoreContentType(true)
                      .maxBodySize(100 * 1024 * 1024)
                      .requestBody(jsonObject.toString())
                      .header("Content-Type", "application/json;charset=UTF-8")
                      .timeout(timeout)
                      .method(Connection.Method.POST)
                      .execute();
              if (response != null) {
                  String s = response.body();
                 
                  return s;
              }
          } catch (IOException e) {
              
          }
          return null;
      }
  ```

  



#### 1、心跳任务信息接口

- 该接口传递当前执行的任务信息和消息，也传递设备状态，复用接口模式，传递的数据会在云控系统-监控告警-设备监控中展示出来
- 响应参数有三种情况，1无任务和命令，2 一键命令消息，3 任务消息，具体查看实例
- 接口名称 : http://192.168.0.1:8099/rapi/heartbeat
- 提交方式：POST JSON方式

- 请求参数

  ```json
  {
  	"apkVersion": "5.12.0", // 打包后的APK版本，非EC APK接入的可忽略
  	"ecVersion": "5.12.0", //EC源版本，非EC APK接入的可忽略
  	"imei": "123333",//手机的IMEI号，可以为空
  	"deviceNo": "001",//手机的设备编号，不能为空
  	"androidId": "9283223",//手机的androidid，可以为空
  	"brand": "HUWEI",//手机品牌，可以为空
  	"model": "A69",//手机的机型，可以为空
  	"osVersion": "6.1",//手机的版本号，可以为空
  	"sdCardSpace": 10240000,//手机的存储卡总空间，可以为0
  	"sdCardLeftSpace": 1024000,//手机的剩余存储卡空间，可以为0
  	"availMemory": 102400000,//可用内存，可以为0
  	"totalMemory": 1024000000,//总内存，可以为0
  	"battery": 90,//当前电量，可以为0，最好传递，方便监控告警
  	"batteryTemp": 30,//当前电池温度，可以为0，最好传递，方便监控告警
  	"isCharging": 1,//是否在充电，1是 0否
  	"brightness": 100,//屏幕亮度，可以为0
  	"runMode": "无障碍",//运行模式，代理或者无障碍，非EC APK接入可忽略
  	"serviceOk": 1,// 自动化服务是否正常，1是 0否，非EC APK接入可忽略
  	"action": "heartbeat",//请求类型，固定为heartbeat
  	"taskId": "123",//当前正在执行的任务ID，如果当前正在执行任务为必传，防止多次下发任务
  	"taskName": "测试任务",//当前正在执行任务的名称
  	"cmdSubId": "",//当前执行一键命令的ID，如果正在执行命令，这个值为必传
  	"data": [{//消息节点
      	"taskId":"123",//当前正在执行的任务ID，如果当前正在执行任务为必传，防止多次下发任务
          "taskName":"测试任务",//当前正在执行任务的名称
          "msg":"正在打开APP",//消息，会在云控-设备监控中看到该消息
          "deviceNo":"001",//设备编号
          "createTimestamp":1509273923//当前时间，毫秒级别
      }]
  }
  ```

  

- 响应参数（无任务返回）

  ```json
  {
  	"code": 0,//0 代表正常，其他均不正常
  	"msg": "", //错误消息
  	"data": { //数据体
      "action":"resp" // 无任务和命令响应
  		}
  }
  ```

  

- 响应参数（一键命令返回）

  ```json
  {
  	"code": 0,//0 代表正常，其他均不正常
  	"msg": "", //错误消息
  	"data": { //数据体
      "action":"where", // 任务响应,值为 where：查找设备，
      //inst：安装apk，rebphone：重启手机
      //stsc：停止脚本，shellcmd：执行shell命令
      "cmdSubId":"",//命令的ID
      "content":"下载地址或者shell命令",//当action=inst,这个是apk下载地址
      //当action=shellcmd时，这个值是命令字符串
  		}
  }
  ```

  

- 响应参数（任务返回）

```json
{
	"code": 0,//0 代表正常，其他均不正常
	"msg": "", //错误消息
	"data": { //任务消息体
		"action": "task",//任务类型的返回
		"taskId": "123",//云端主任务ID
		"taskName": "测试任务",//云端主任务名称
		"scriptId": "123",//脚本的云端ID
		"scriptName": "测试脚本",//脚本名称
		"scriptUrl": "http://192.168.0.3:8099/profile/a.js",//脚本的下载地址
		"scriptVersion": "1.0",//脚本的版本号
		"subTasks": [{//子任务集合
			"subTaskId": "132",//子任务云端ID
			"subTaskName": "子任务1",//子任务名称
			"resourceGroupId": "11",//资源组云端ID
			"extraParam": "",//子任务扩展参数字符串
			"resources": [{//设定任务关联的组
				"name": "资源1",//资源名称
				"content": "我是资源1",//资源内容
				"type": 1//资源类型, 1 字符串 2 图片 3 视频 4 文件
			}]
		}],
		"network": {//网络资源对象
			"address": "128.2.3.2",//网络资源地址
			"userName": "1111",// 网络资源用户名
			"password": "3xd",//网络资源密码
			"protocolType": 0,//网络资源协议类型, 0、 PPTP 1、L2TP
			"mppeType": "1",//传输是否需要MPPE加密, 1是/0否
			"shareKey": ""//L2TP用的秘钥
		}
	}
}
```



#### 2、获取资源接口

- 说明：该接口是为了获取云控端设定的资源数据

- 接口名称: http://192.168.0.1:8099/rapi/getResources

- 提交方式：POST JSON方式

- 请求参数: 

  ```json
  {
  	"deviceNo":"001",//当前设备编号
    "groupName":"资源组1",// 资源组名称
    "pageNum":1,//页码 例如 1代表第一页
    "pageSize":10// 每页个数 例如 10 代表一页有10个 
  }
  ```

  

- 响应参数

  ```json
  {
  	"code": 0,//0 代表正常，其他均不正常
  	"msg": "", //错误消息
    "total":100,//记录总数量
  	"rows": [//记录列表
          {
              "name": "1",//资源名称
              "content": "123",//内容
              "type": 1,//资源类型, 1 字符串 2 图片 3 视频 4 文件
              "groupName": "资源组1"//资源组名
          }
      ],
  }
  ```

  





#### 3、获取存储数据接口

- 说明：该接口是为了获取云控端存储的数据

- 接口名称: http://192.168.0.1:8099/rapi/getStorageDatas

- 提交方式：POST JSON方式

- 请求参数: 

  ```json
  {
  	"deviceNo":"001",//当前设备编号
    "groupName":"数据组1",// 数据组名称
    "dataKey":"123455",//数据的唯一标识
    "pageNum":1,//页码 例如 1代表第一页
    "pageSize":10// 每页个数 例如 10 代表一页有10个 
  }
  ```

  

- 响应参数

  ```json
  {
  	"code": 0,//0 代表正常，其他均不正常
  	"msg": "", //错误消息
    "total":100,//记录总数量
  	"rows": [//记录列表
          {
              "dataKey": "1",//数据唯一标识
              "deviceNo": "001",//产生该数据的设备号
              "content": 1,//数据内容
              "groupName": "数据组1"//数据组名
          }
      ],
  }
  ```

  





#### 4、上报数据存储接口

- 说明：该接口是为了上传要存储的数据

- 接口名称: http://192.168.0.1:8099/rapi/uploadStorageData

- 提交方式：POST JSON方式

- 请求参数: 

  ```json
  {
  	"dataKey":"13",//存储数据的唯一标示
    "groupName":"数据组1",//  数据的组名，如果云端没有这个组，会自动创建
    "content":"ddd"//数据内容
  }
  ```

  

- 响应参数

  ```json
  {
  	"code": 0,//0 代表正常，其他均不正常
  	"msg": "" //错误消息
  }
  ```

  



#### 5、上报子任务结果接口

- 说明：该接口是为了上传子任务执行的结果

- 接口名称: http://192.168.0.1:8099/rapi/subTaskResult

- 提交方式：POST JSON方式

- 请求参数: 

  ```json
  {
  	"subTaskId":"13",//子任务ID
    "msg":"成功",//消息
    "type":1,//子任务结果类型，1 成功，2失败
    "taskId":"13",//主任务ID
    "taskName":"测试",//主任务名称
    "subTaskName":"13",//子任务名称
    "deviceNo":"001"//设备编号
  }
  ```

  

- 响应参数

  ```json
  {
  	"code": 0,//0 代表正常，其他均不正常
  	"msg": "" //错误消息
  }
  ```

  

#### 6、上报脚本异常接口

- 说明：该接口是为了上传脚本出现异常问题，方便排错，异常日志会在云控数据报表-异常日志中展现

- 接口名称: http://192.168.0.1:8099/rapi/reportExc

- 提交方式：POST JSON方式

- 请求参数: 

  ```json
  {
  
    "deviceNo":"001",//设备编号
    "scriptName":"测试1",//脚本名称
    "content":"脚本异常内容",//脚本异常内容
    "apkVersion":"1.2",//APK的版本
    "scriptVersion":"1.0"//脚本版本
  
  }
  ```

  

- 响应参数

  ```json
  {
  	"code": 0,//0 代表正常，其他均不正常
  	"msg": "" //错误消息
  }
  ```

  



#### 7、上报命令执行日志接口

- 说明：该接口是为了上传云控一键命令下发的命令到设备，设备执行的步骤和结果数据，数据会在云控一键命令-明细中展示

- 接口名称: http://192.168.0.1:8099/rapi/httpCmdLog

- 提交方式：POST JSON方式

- 请求参数: 

  ```json
  {
  
    "deviceNo":"001",//设备编号
    "cmdSubId":"123",//命令的子编号
    "data":[
      {
        "msg":"执行成功"//执行结果
      }
    ]
  }
  ```

  

- 响应参数

  ```json
  {
  	"code": 0,//0 代表正常，其他均不正常
  	"msg": "" //错误消息
  }
  ```

  















