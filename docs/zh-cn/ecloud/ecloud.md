## 云控平台
- 云控在EC产品序列中属于 新媒体矩阵营销平台 ，用于客户管理多设备多资源协同工作
- EC中内置了和云端通信的能力，直接调用接口即可
- 具体如何使用请进群

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

##  ecloud.getTaskInfo 获取机器编号
 * 取得当前任务的信息，当前任务已经被推送到本地了，直接获取
 * @return {JSON} 对象

> ```javascript
>     
> function main(){
>     var d = ecloud.getDeviceNo()
>     logd(d)
> }
> main();
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