## EC的实例代码

- 以下是云控实例代码

> ```javascript
>     function main() {
>   
>        //如果自动化服务正常
>        if (!autoServiceStart(3)) {
>            logd("自动化服务启动失败，无法执行脚本");
>            exit();
>            return;
>        }
>        logd("开始执行脚本...{} = {}", ecloud.getDeviceNo(), ecloud.getCloudUrl());
>        let ts = ecloud.getTaskInfo();
>        logd(ts);
>        if (ts == null) {
>            logd("没有任务信息");
>            return;
>        }
>        logd("任务信息:" + JSON.stringify(ts));
>        logd(ts["taskName"]);
>        if (ts.valueJson) {
>            //获取任务-参数设定中 名称 = haoma  的值
>            logd("valueJson " + ts.valueJson["haoma"]);
>            //获取任务-参数设定中 名称 = 账号  的值
>            logd("valueJson " + ts.valueJson['账号']);
>            //打印参数
>            logd("valueJson " + ts.valueJson);
>    
>        }
>    
>        //这里开始编写你要的业务逻辑
>        clickSettingTask();
>        sleep(3000)
>        //对数据进行增删改查、追加和移出一条的演示
>        dataOptDemo()
>    
>    }
>    
>    /**
>     * 打开设置按钮
>     **/
>    function clickSettingTask() {
>        //这里模拟业务逻辑
>        sleep(4000);
>    
>    }
>    
>    function dataOptDemo() {
>        // 按照组名获取数据
>        let data = ecloud.getData({
>            "groupName": "账号组2"
>        });
>        if (data) {
>            logd("账号组2数据: " + JSON.stringify(data));
>        }
>    
>        //组名+指定的数据名 获取数据
>        data = ecloud.getData({
>            "groupName": "账号组2",
>           "dataName": "001-1112"
>        });
>       if (data) {
>         logd("账号组2数据 + dataName : " + JSON.stringify(data));
>     }
> 
>     // 模拟上传数据
>     let d = ecloud.addData({
>         "groupName": "账号组2",
>         "dataName": ecloud.getDeviceNo() + "-111",
>         "content": "xxx" + new Date()
>     });
>     logd("第一次创建账号组2 数据结果 -> " + d)
> 
>    
>     //模拟更新数据
>     let update2 = ecloud.updateData({
>         "groupName": "账号组2",
>         "dataName": ecloud.getDeviceNo() + "-111",
>         "content": "牛逼" + new Date()
>     });
>     logd("更新 数据结果 -> " + d)
>     sleep(3000)
> 
>     //按照组 + 数据名移出数据
>     // let remove2 = ecloud.removeData({
>     //     "groupName": "账号组2",
>     //     "dataName": ecloud.getDeviceNo() + "-111"
>     //
>     // });
>     // logd("组+数据 移出 数据结果 -> " + remove2)
> 
>     //按照组 + 数据名移出数据
>     let remove3 = ecloud.removeData({
>         "groupName": "账号组2"
> 
>     });
>     logd("组 移出 数据结果 -> " + remove3)
> 
>     //再次演示创建数据
>     let d2 = ecloud.addData({
>         "groupName": "账号组2",
>         "dataName": ecloud.getDeviceNo() + "-111",
>         "content": "星星xxx" + new Date()
>     });
>     logd("第二次创建账号组2 数据结果 -> " + d2)
>     sleep(3000)
>     //这里演示 进行增加数据
>     let append1 = ecloud.appendOneLineData({
>         "groupName": "账号组2",
>         "dataName": ecloud.getDeviceNo() + "-111",
>         "content": "我是要增加的数据1"
>        });
>     logd("追加数据 数据结果 -> " + append1)
> 
>     // 第二次追加数据
>     let append2 = ecloud.appendOneLineData({
>         "groupName": "账号组2",
>         "dataName": ecloud.getDeviceNo() + "-111",
>         "content": "我是要增加的数据2"
>     });
>     logd("追加数据 数据结果 -> " + append2)
> 
>     //第一次移出数据
>              let removeline1 = ecloud.removeOneLineData({
>         "groupName": "账号组2",
>         "dataName": ecloud.getDeviceNo() + "-111",
>         "content": "我是要增加的数据1"
>     });
>     logd("删除一条 数据结果 -> " + removeline1)
>     sleep(3000)
> }
> 
> 
>    function autoServiceStart(time) {
>     for (var i = 0; i < time; i++) {
>         if (isServiceOk()) {
>             return true;
>         }
>         var started = startEnv();
>         logd("第" + (i + 1) + "次启动服务结果: " + started);
>         if (isServiceOk()) {
>             return true;
>         }
>     }
>     return isServiceOk();
> }
> 
> main();
> ```

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





##  ecloud.getCloudUrl 获取云控的URL地址

 * 获取云控的URL地址
 * @return {string} 云控的URL地址或者null

> ```javascript
> function main(){
>  var d = ecloud.getCloudUrl()
>  logd(d)
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
- scriptId: 脚本的云端ID
- scriptName: 脚本名称
- scriptVersion: 脚本的版本号
- scriptName: 脚本名称
- scriptUrl: 脚本的地址
- valueJson: 附加参数
> ```json
>  # 任务信息函数返回的值
>   {
>       "taskId": "1",
>       "taskName": "X手浏览",
>       "sort": 3,
>       "scriptId": "1",
>       "scriptName": "X手脚本",
>       "scriptUrl": "http://baidu.com/a.iec",
>       "scriptVersion": "1",
>       "valueJson": {
>         "a1":"test",
>         "a2":"test"
>       }
>    }
>    ```





##  ecloud.getData 取得数据
 * 通过数据组名或者数据名称取得数据, 前提是要中云控中存在这个数据
 * @param map 可扩展参数表
 * 例如 {"groupName":"数据组1","dataName":"key"}
 *   key定义： groupName = 数据组名称
 * dataName = 数据名称

   

> ```javascript
>     
> function main(){
>     var d = ecloud.getData({"groupName":"资源组1","dataName":"111"})
>     logd(d)
> }
> main();
> ```

- 返回值示例
- id: 数据id，不用管这个
- name: 数据的名称
- content: 数据的内容

> ```json
>     [
>             {
>                 "id": "",
>                 "name": "",
>                 "content": ""
>             }
>         ]
>    
>    ```





##  ecloud.getDataPop 取得并删除数



* 通过数据组名或者数据名称取得数据,获取后云控自动删除, 前提是要中云控中存在这个数据
* @param map 可扩展参数表
* 例如 {"groupName":"数据组1","dataName":"key","getType":1,"size":1}
* key定义： groupName = 数据组名称
* dataName = 数据名称
* getType = 获取数据方式，1 头部获取，2 尾部获取，3 随机获取
* size = 需要获取的数据条数
* @return {null|json数组} 空或者JSON数组



> ```javascript
> function main(){
> var d = ecloud.getDataPop({"groupName":"资源组1","dataName":"111","getType":1,"size":10})
> logd(d)
>   logd(d[0])
> }
> main();
> ```

- 返回值示例

> ```json
>  ["aaa","bbb"]
>    
>    ```



##  ecloud.addData 新增数据

 * 新增一组数据，如果组名存在了，会自动最近数据

 * @param map 可扩展参数表

 * 例如 {"groupName":"数据组1","dataName":"key","content":"数据"}

 * key定义：

 *  groupName = 数据组名称

 * dataName = 数据名称

 * content=内容

 * @return {bool} true代表成功 false ，代表失败

   

> ```javascript
> function main(){
>  var d = ecloud.addData({"groupName":"资源组1","dataName":"111","content":"test数据"})
>  logd(d)
> }
> main();
> ```











##  ecloud.updateData 修改数据

 * 修改某个组下面的数据，组名和数据名必填

 * @param map 可扩展参数表

 * 例如 

 * {"groupName":"数据组1","dataName":"key","content":"数据"}

 * key定义：

 *  groupName = 数据组名称

 * dataName = 数据名称

 * content=内容

 * @return {bool} true代表成功 false ，代表失败

   

> ```javascript
> function main(){
>  var d = ecloud.updateData({"groupName":"资源组1","dataName":"111","content":"test数据"})
>  logd(d)
> }
> main();
> ```





##  ecloud.removeData 删除数据

 * 删除某个组下面的数据，如果只填写组名，该组下面全部被删除，如果组名和数据名都有，就删除该组下数据名相同的数据

 * @param map 可扩展参数表

 * 例如 {"groupName":"数据组1","dataName":"key"}

 * key定义：

 *  groupName = 数据组名称

 * dataName = 数据名称

 * @return {bool} true代表成功 false ，代表失败

   

> ```javascript
> function main(){
>  var d = ecloud.removeData({"groupName":"资源组1","dataName":"111"})
>  logd(d)
> }
> main();
> ```



##  ecloud.appendOneLineData 追加一条数据

 * 查询该组下面的数据名的内容，并向内容尾追加一条数据

 * @param map 可扩展参数表

 * 例如 {"groupName":"数据组1","dataName":"key","content":"数据"}

 * key定义：

 *  groupName = 数据组名称

 * dataName = 数据名称

 * content=内容

 * @return {bool} true代表成功 false ，代表失败

   

> ```javascript
> function main(){
>  var d = ecloud.appendOneLineData({"groupName":"资源组1","dataName":"111","content":"test数据"})
>  logd(d)
> }
> main();
> ```



##  ecloud.removeOneLineData 删除一条数据

 * 查询该组下面的数据名的内容，并删除其中一条与content相等的数据

 * @param map 可扩展参数表

 * 例如 {"groupName":"数据组1","dataName":"key","content":"数据"}

 * key定义：

 *  groupName = 数据组名称

 * dataName = 数据名称

 * content=内容

 * @return {bool} true代表成功 false ，代表失败

   

> ```javascript
> function main(){
>  var d = ecloud.removeOneLineData({"groupName":"资源组1","dataName":"111","content":"test数据"})
>  logd(d)
> }
> main();
> ```



##  ecloud.removeScriptFile 清除脚本

 * 删除脚本文件保证安全

 * 适合版本： EC 6.11.0+

 * @return {bool} true代表成功 false ，代表失败

   

> ```javascript
> function main(){
> var d = ecloud.removeScriptFile()
> logd(d)
> }
> main();
> ```







