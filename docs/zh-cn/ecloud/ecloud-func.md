## EC的实例下载
- [下载例子]()

##  ecloud.log 发送日志
* 发送日志到云端
* @param msg 日志信息

> ```javascript
>     
> function main(){
>     ecloud.log("我是CLOUD日志")
> }
> main();
> ```


##  ecloud.getDeviceNo 获取机器编号
 * 获取机器编号
 * @return {string} 机器编码或者null

> ```javascript
>     
> function main(){
>     var d = ecloud.getDeviceNo()
>     logd(d)
> }
> main();
> ```

##  ecloud.getTaskInfo 获取当前任务信息
 * 取得当前任务的信息，当前任务已经被推送到本地了，直接获取
 * @return {JSON} 对象

> ```javascript
>     
> function main(){
>     var d = ecloud.getTaskInfo()
>     logd(d)
> }
> main();
> ```

- 返回值示例
- taskId: 云端主任务ID
- taskName: 云端主任务名称
- sort: 主任务排序
- scriptId: 脚本的云端ID
- scriptName: 脚本名称
- scriptVersion: 脚本的版本号
- network: 网络资源对象
    - address: 网络资源地址
    - userName: 网络资源用户名
    - password: 网络资源密码
    - protocolType: 网络资源协议类型, 0、 PPTP   1、L2TP
    - mppeType: 传输是否需要MPPE加密, 1是/0否
    - shareKey: L2TP用的秘钥
- subTasks: 子任务数组列表
    - subTaskId: 子任务云端ID
    - subTaskName: 子任务
    - resourceGroupId: 资源组云端ID
    - extraParam: 子任务扩展参数字符串
    - sort: 子任务排序值
    - resources: 子任务关联的资源列表对象
        - name: 资源名称
        - content: 资源内容
        - type: 资源类型, 1 字符串  2 图片 3 视频 4 文件
    
    
> ```json
>  # 任务信息函数返回的值
>   {
>       "taskId": "1",
>       "taskName": "X手浏览",
>       "sort": 3,
>       "scriptId": "1",
>       "scriptName": "X手脚本",
>       "scriptUrl": "http://xxx.com/a.iec",
>       "scriptVersion": "1",
>       "network": {
>           "address": "180.1.1.3.2",
>           "userName": "123",
>           "password": "123",
>           "protocolType": "1",
>           "mppeType": "",
>           "shareKey": ""
>       },
>       "subTasks": [
>           {
>               "subTaskId": "1",
>               "subTaskName": "登录",
>               "resourceGroupId": "1",
>               "extraParam": "testtext",
>               "sort": 1,
>               "resources": [
>                   {
>                       "name": "账号1",
>                       "content": "123456",
>                       "type": 1
>                   }
>               ]
>           }
>       ]
>   }
> ```





##  ecloud.getResources 取得一组资源
 * 通过资源组取得一组资源
 * @param map 可扩展参数表
 *   例如 {"groupName":"资源组1"}
 *   key定义：
 *   groupName = 资源组名称
 *   pageNum= 页码 例如 1代表第一页
 *   pageSize= 每页个数 例如 10 代表一页有10个
 *
 * @return {JSON} 资源JSON对象

> ```javascript
>     
> function main(){
>     var d = ecloud.getResources({"groupName":"资源组1","pageNum":1,"pageSize":1000})
>     logd(d)
> }
> main();
> ```

- 返回值示例
- total: 记录总数量
- rows: 记录列表
    - groupName: 资源组名
    - name: 资源名称
    - content: 内容
    - type: 资源类型, 1 字符串  2 图片 3 视频 4 文件
        
        
> ```json
>   {
>       "rows": [
>           {
>               "groupName": "",
>               "name": "",
>               "content": "",
>               "type": 1
>           }
>       ],
>       "total": 10000
>   }
> ```



##  ecloud.getStorageDatas 取得一组数据
 * 通过数据组名取得一组数据
 * @param map 可扩展参数表
 *   例如 {"groupName":"数据组1"}
 *   {"dataKey":"key"}
 *   key定义： groupName = 数据组名称
 *   dataKey = 数据唯一标示
 *   pageNum= 页码 例如 1代表第一页
 *   pageSize= 每页个数 例如 10 代表一页有10个

> ```javascript
>     
> function main(){
>     var d = ecloud.getStorageDatas({"groupName":"资源组1","dataKey":"111","pageNum":1,"pageSize":1000})
>     logd(d)
> }
> main();
> ```

- 返回值示例
- total: 记录总数量
- rows: 记录列表
    - groupName: 数据所在组名
    - dataKey: 数据唯一标识
    - content: 数据内容
    - deviceNo: 产生该数据的设备号

> ```json
>     {
>         "rows": [
>             {
>                 "dataKey": "",
>                 "groupName": "",
>                 "deviceNo": "",
>                 "content": ""
>             }
>         ],
>         "total": 10000
>     }
> ```


##  ecloud.uploadStorageData 上传要存储的数据
 * 上传要存储的数据
 * @param map 可扩展参数表
 *   例如
 * {
 *   "groupName":"123",
 *	"dataKey": "11111",
 *  "content":"123"
 * }
 *   key定义：
 *   groupName = 数据的组名，如果云端没有这个组，会自动创建
 *   dataKey = 存储数据的唯一标示
 *   content = 数据字符串
 * @return {bool} true代表成功 false 代表失败

> ```javascript
>     
> function main(){
>     var d = ecloud.uploadStorageData({"groupName":"资源组1","dataKey":"111","content":"xxx"})
>     logd(d)
> }
> main();
> ```




##  ecloud.subTaskOk 子任务成功
* 子任务成功
 *  @param map 可扩展参数表
 *   例如
 * {
 *   "subTaskId":123,
 *	"msg": "任务成功"
 * }
 * @return {bool} true代表成功 false 代表失败

> ```javascript
>     
> function main(){
>     var d = ecloud.subTaskOk({"subTaskId":"123","msg":"任务成功"})
>     logd(d)
> }
> main();
> ```



##  ecloud.subTaskFail 子任务成功
 * 子任务失败
 *  @param map 可扩展参数表
 *   例如
 * {
 *   "subTaskId":123,
 *	 "msg": "因为找不到XXX失败"
 * }
 * @return {bool} true代表成功 false 代表失败

> ```javascript
>     
> function main(){
>     var d = ecloud.subTaskFail({"subTaskId":"123","msg":"因为找不到XXX失败"})
>     logd(d)
> }
> main();
> ```