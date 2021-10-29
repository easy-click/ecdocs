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

## 基础操作

###  ecloud.log 发送日志

* 发送日志到云端
* @param msg 日志信息

> ```javascript
>     
> function main(){
>     ecloud.log("我是CLOUD日志")
> }
> main();
> ```


###  ecloud.getDeviceNo 获取机器编号
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





###  ecloud.getCloudUrl 获取云控的URL地址

 * 获取云控的URL地址
 * @return {string} 云控的URL地址或者null

> ```javascript
> function main(){
>  var d = ecloud.getCloudUrl()
>  logd(d)
> }
> main();
> ```







###  ecloud.getTaskInfo 获取当前任务信息

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



###  ecloud.removeScriptFile 清除脚本

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





## 数据共享表操作

- 数据共享 对应的云控数据管理中的数据分组和数据列表功能
- 表结构是固定好的，用户不可更改

###  ecloud.getData 取得数据
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





###  ecloud.getDataPop 取得并删除数



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



###  ecloud.addData 新增数据

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
>  	var d = ecloud.addData({"groupName":"资源组1","dataName":"111","content":"test数据"})
>  	logd(d)
> }
> main();
> ```











###  ecloud.updateData 修改数据

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





###  ecloud.removeData 删除数据

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



###  ecloud.appendOneLineData 追加一条数据

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



###  ecloud.removeOneLineData 删除一条数据

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





## 动态数据接口

- 动态数据 对应的云控数据管理中的数据分组和数据列表功能
- 表结构不固定，用户自己创建，数据自己填充

###  ecloud.dynamicCreateTable 动态创建更新表

* 创建或者更新动态数据表结构

* 如果columns有增加新的，就自动创建字段，如果少了某个字段，就自动从表中移出字段

* 请谨慎操作表，以免数据丢失！！！

* 适合版本EC 6.16.0+

* @param param 参数

  ```json
  {
  	"tableName": "我是牛逼的表",
  	"tableNameEn": "niubi_table",
  	"columns": [{
  			"columnInfo": "姓名",
  			"columnName": "name",
  			"columnSize": 500
  		},
  		{
  			"columnInfo": "年龄",
  			"columnName": "age",
  			"columnSize": 500
  		},
  		{
  			"columnInfo": "性别",
  			"columnName": "sex",
  			"columnSize": 500
  		}
  	]
  }
  ```

  

* 解释: 

* tableName: 中文表名，相当于名称，但是不是实际表名

* tableNameEn: 英文表名，真实的表名

* columns: 表的字段数据，字段类型统一是字符串

* columnInfo: 字段的注释信息

* columnName: 字段名称，要用英文，不要有空格和特殊字符

* columnSize: 字段长度

* @return {string} JSON字符串，执行转换为JSON对象

* 成功返回示例：{"result":{"data":1}}，data代表操作的成功行数

* 失败返回示例：{"result":{"msg":"我是错误信息"}}



> ```javascript
> function main(){
> 
> let crateTable = {
> 
>                          "tableName": "我是牛逼的表",
>                          "tableNameEn": "niubi_table",
>                          "columns": [
>                              {
>                                  "columnInfo": "姓名",
>                                  "columnName": "name",
>                                  "columnSize": 500
>                              },
>                              {
>                                  "columnInfo": "年龄",
>                                  "columnName": "age",
>                                  "columnSize": 500
>                              },
>                              {
>                                  "columnInfo": "性别",
>                                  "columnName": "sex",
>                                  "columnSize": 500
>                              }
>                          ]
>                      };
> 
> 
> let creae =ecloud.dynamicCreateTable(crateTable)
> logd("===> {}",creae);
> 
> }
> main();
> ```





###  ecloud.dynamicQuery 动态查询表数据

* 动态查询数据

* 适合版本EC 6.16.0+

* @param param 参数

  ```json
  
  {
  	"pageNumber": 1,
  	"pageSize": 4,
  	"fields": "id,name",
  	"query": "and name like '%我是%'",
  	"tableNameEn": "niubi_table",
  	"search": {
  		"id": "1",
  		"name": "我是name"
  	}
  }
  ```

  

* 解释: 

* pageNumber: 页码 从1开始

* pageSize: 每页条数

* fields: 要查下的字段，可以不写，如果填写就是用英文逗号链接，请看例子

* query: 自定义的查询条件，遵循sql的写法

* tableNameEn: 英文的表名

* search：查询条件，和query查询条件二选一，这个查询是等于模式

* search 例子： "id":"1" 代表查询字段id=1的记录

* @return {string} JSON字符串，自行转换为JSON对象

* 成功返回示例：{"result":{"data":[{"name":"3","id":2}]}}，data代表返回的数据数组

* 失败返回示例：{"result":{"msg":"我是错误信息"}}



```javascript
function main(){
	let query={
            "pageNumber":1,
            "pageSize":2,
            "fields":"",
            "query":" and age like '%2%'",
            "tableNameEn": "niubi_table",
            "search": {
             }
    };
	let queryr =ecloud.dynamicQuery(query)
	logd("===> {}",queryr);
}
main();
```

### ecloud.dynamicAdd 动态增加表数据

* 动态增加数据

* 适合版本EC 6.16.0+

  ```json
  {
  	"tableNameEn": "niubi_table",
  	"columns": {
  		"name": "我是牛逼",
  		"age": "niubi_table2",
  		"sex": "niubi_table2"
  	}
  }
  ```

  

* @param param 参数

* 解释:

* tableNameEn: 英文的表名

* columns: 字段和字段值列表

* 例如 "name": "我是牛逼的表"，代表插入一个数据name=我是牛逼的表

* @return {string} JSON字符串，自行转换为JSON对象

* 成功返回示例：{"result":{"data":1}}，data代表操作的成功行数

* 失败返回示例：{"result":{"msg":"我是错误信息"}}

```javascript
function main(){
    let add ={
                "tableNameEn": "niubi_table",
                "columns": {
                    "name": "我是牛逼的表",
                    "age": "niubi_table2",
                    "sex": "niubi_table2"
                }
    	}

    let queryr =ecloud.dynamicAdd(add)
    logd("===> {}",queryr);

}
main();
```



### ecloud.dynamicUpdate 动态更新表数据

* 动态更新数据

* 适合版本EC 6.16.0+

* @param param 参数

  ```json
  {
  	"tableNameEn": "niubi_table",
  	"columns": {
  		"name": "我x是牛逼xxxx的表",
  		"age": "niubi_table2",
  		"sex": "niubi_table2"
  	},
  	"query": "and id=1",
  	"search": {
  		"id": "7"
  	}
  }
  ```

  

* query: 自定义的查询条件，遵循sql的写法

* tableNameEn: 英文的表名

* search：查询条件，和query查询条件二选一，这个查询是等于模式

* search 例子： "id":"1" 代表查询字段id=1的记录

* columns: 要更新的字段和字段值列表

* 例如 "name": "我是牛逼的表"，代表把name的指更新为 我是牛逼的表

* @return {string} JSON字符串，自行转换为JSON对象

* 成功返回示例：{"result":{"data":1}}，data代表操作的成功行数

* 失败返回示例：{"result":{"msg":"我是错误信息"}}

```javascript
function main(){
        let update ={
            "tableNameEn": "niubi_table",
            "columns": {
                "name": "1我x是牛逼xxxx的表",
                "age": "niubi_table2",
                "sex": "niubi_table2"
            },
            "query":"and name like '%我%'",
            "search": {
                "id": "7"
            }
		}

		let updater =ecloud.dynamicUpdate(update)
		logd("===> {}",updater);

}
main();


```



### ecloud.dynamicRemove 动态删除表数据

* 动态删除数据
* 适合版本EC 6.16.0+

  ```json
  {
  	"tableNameEn": "niubi_table",
  	"query": "and name like '%我%'",
  	"search": {
  		"id": "1"
  	}
  }
* @param param 参数
* 解释: 
* query: 自定义的查询条件，遵循sql的写法
* tableNameEn: 英文的表名
* search：查询条件，和query查询条件二选一，这个查询是等于模式
* search 例子： "id":"1" 代表查询字段id=1的记录
* @return {string} JSON字符串，自行转换为JSON对象
* 成功返回示例：{"result":{"data":1}}，data代表操作的成功行数
* 失败返回示例：{"result":{"msg":"我是错误信息"}}

```javascript
function main(){
    
      let del ={
                  "tableNameEn": "niubi_table",

                  "query":"and name like '%我%'",
                  "search": {
                      "id": "7"
                  }
      }

      let delr =ecloud.dynamicRemove(del)
      logd("===> {}",delr);

}
main();


```



## 数据缓存接口

- 该接口用于操作redis缓存一般表现为kv形式
- 支持缓存过期，字符串，set集合
- 如果需要支持boolean、整数，可以转换成字符串处理

###  ecloud.addCache 新增缓存

* 新增一个存放在redis的缓存
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key","expireTime":300,"dataType":1,"content":"数据"}
* key定义：
* cacheKey = 缓存key
* expireTime = 过期时间 单位是秒，为空或者小于等于0代表不过期
* dataType=数据类型，1 字符串，2 set集合用换行符\n分割的
* content=数据，如果dataType=2这个数据将会用换行符\n分割转换为集合存储到redis中
* @return {bool} true代表成功 false ，代表失败



> ```javascript
> function main() {
>     //字符串
>     let stringData = {"cacheKey": "key1", 
>                       "expireTime": 300, 
>                       "dataType": 1, 
>                       "content": "数据"}
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
> 
>     // SET集合
>     let sss = "s1\ns2\ns3";
>     let setData = {"cacheKey": "key1", 
>                    "expireTime": 300, 
>                    "dataType": 2, 
>                    "content": sss}
>     let addSet = ecloud.addCache(setData);
>     logd("addSet {}", addSet);
> }
> 
> main();
> 
> ```



###  ecloud.getCache 获取缓存

* 获取一个缓存，如果缓存失效了 无数据返回
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key"}
* key定义：
* cacheKey = 缓存key
* @return {string} 服务端返回的JSON字符串，解析result节点即可



> ```javascript
> function main() {
>     //字符串
>     let stringData = {
>         "cacheKey": "key1",
>         "expireTime": 300,
>         "dataType": 1,
>         "content": "数据"
>     }
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
> 
>     // SET集合
>     let sss = "s1\ns2\ns3";
>     let setData = {
>         "cacheKey": "key1",
>         "expireTime": -1,
>         "dataType": 2,
>         "content": sss
>     }
>     let addSet = ecloud.addCache(setData);
>     logd("addSet {}", addSet);
> 
> 
>     let data = ecloud.getCache({"cacheKey": "key1"});
>     logd("data {}", JSON.stringify(data));
>     //直接输出
>     logd("data {}", data.result);
>     //分割后 for打印
>     data.result.split("\n").forEach(function (item) {
>         console.log(item)
>     })
> 
> }
> 
> main();
> 
> 
> 
> ```







###  ecloud.updateCache 更新缓存

* 更新一个redis的缓存
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key","expireTime":300,"dataType":1,"content":"数据"}
* key定义：
* cacheKey = 缓存key
* expireTime = 过期时间 单位是秒，为空或者小于等于0代表不过期
* dataType=数据类型，1 字符串，2 set集合用换行符\n分割的
* content=数据，如果dataType=2这个数据将会用换行符\n分割转换为集合存储到redis中
* @return {bool} true代表成功 false ，代表失败



> ```javascript
> function main() {
>     //字符串
>     let stringData = {
>         "cacheKey": "key1",
>         "expireTime": 300,
>         "dataType": 1,
>         "content": "数据"
>     }
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
>     let data = ecloud.getCache({"cacheKey": "key1"});
>     logd("data {}", JSON.stringify(data));
>     //直接输出
>     logd("data {}", data.result);
> 
>     let up = ecloud.updateCache({"cacheKey":"key1","content":"test123"})
> 
>     data = ecloud.getCache({"cacheKey": "key1"});
>     logd("更新后的数据data {}", JSON.stringify(data));
>     //直接输出
>     logd("更新后的数据data {}", data.result);
> 
> }
> 
> main();
> 
> ```







###  ecloud.updateCacheExpire 更新过期时间

* 更新一个redis的缓存过期时间
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key","expireTime":300}
* key定义：
* cacheKey = 缓存key
* expireTime = 过期时间 单位是秒，为空或者小于等于0代表不过期
* @return {bool} true代表成功 false ，代表失败

> ```javascript
> function main() {
>     //字符串
>     let stringData = {
>         "cacheKey": "key1",
>         "expireTime": 300,
>         "dataType": 1,
>         "content": "数据"
>     }
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
>     let data = ecloud.getCache({"cacheKey": "key1"});
>     logd("data {}", JSON.stringify(data));
>     //直接输出
>     logd("data {}", data.result);
>     let up = ecloud.updateCacheExpire({"cacheKey":"key1","expireTime":0})
>     logd("up {}", up);
>     let leftTime = ecloud.getCacheExpire({"cacheKey":"key1"})
>     logd("剩余过期时间 {}", leftTime);
> }
> 
> main();
> 
> 
> ```





###  ecloud.getCacheExpire 获取剩余过期时间

* 获取一个redis的key剩余的过期时间
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key"}
* key定义：
* cacheKey = 缓存key
* @return {long} 返回redis剩余的过期时间 负数代表永不过期

> ```javascript
> function main() {
>     //字符串
>     let stringData = {
>         "cacheKey": "key1",
>         "expireTime": 300,
>         "dataType": 1,
>         "content": "数据"
>     }
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
>     let data = ecloud.getCache({"cacheKey": "key1"});
>     logd("data {}", JSON.stringify(data));
>     //直接输出
>     logd("data {}", data.result);
>     let up = ecloud.updateCacheExpire({"cacheKey":"key1","expireTime":0})
>     logd("up {}", up);
>     let leftTime = ecloud.getCacheExpire({"cacheKey":"key1"})
>     logd("剩余过期时间 {}", leftTime);
> }
> 
> main();
> 
> 
> ```











###  ecloud.removeCache 删除缓存

* 删除一个redis的缓存
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key"}
* key定义：
* cacheKey = 缓存key
* @return {bool} true代表成功 false ，代表失败

> ```javascript
> function main() {
>     //字符串
>     let stringData = {
>         "cacheKey": "key1",
>         "expireTime": 300,
>         "dataType": 1,
>         "content": "数据"
>     }
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
> 
>     let data = ecloud.getCache({"cacheKey": "key1"});
>     logd("data {}", JSON.stringify(data));
>     //直接输出
>     logd("data {}", data.result);
> 
> 
>     let del = ecloud.removeCache({"cacheKey":"key1"})
> 
>     logd("删除 {}", del);
> 
>     data = ecloud.getCache({"cacheKey": "key1"});
>     logd("删除后data {}", JSON.stringify(data));
>     //直接输出
>     logd("删除后data {}", data.result);
> }
> 
> main();
> 
> 
> ```





###  ecloud.appendOneLineCache 追加缓存

* 追加一个redis set的缓存
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key","content":"数据"}
* key定义：
* cacheKey = 缓存key
* content=数据，作为一整行，追加到redis的set集合中
* @return {string} 服务端返回的JSON字符串，解析result节点即可

> ```javascript
> function main() {
>     //字符串
>     let stringData = {
>         "cacheKey": "key1",
>         "expireTime": 300,
>         "dataType": 2,
>         "content": "a\nb\nc"
>     }
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
> 
>     let data = ecloud.getCache({"cacheKey": "key1"});
>     logd("data {}", JSON.stringify(data));
>     //直接输出
>     logd("data {}", data.result);
> 
> 
>     let inc = ecloud.appendOneLineCache({"cacheKey":"key1","content":"test"})
>     logd("==inc {}",inc);
>     inc.result.split("\n").forEach(function (item){
>        console.log("append --- {}",item)
>     })
> 
> }
> 
> main();
> 
> ```



###  ecloud.removeOneLineCache 删除一行缓存

*  删除一个redis set的缓存元素
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key","content":"数据"}
* key定义：
* cacheKey = 缓存key
* content=数据，作为一整行，追加到redis的set集合中
* @return {string} 服务端返回的JSON字符串，解析result节点即可

> ```javascript
> function main() {
>     //字符串
>     let stringData = {
>         "cacheKey": "key1",
>         "expireTime": 300,
>         "dataType": 2,
>         "content": "a\nb\nc"
>     }
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
> 
>     let data = ecloud.getCache({"cacheKey": "key1"});
>     logd("data {}", JSON.stringify(data));
>     //直接输出
>     logd("data {}", data.result);
> 
> 
>     let inc = ecloud.appendOneLineCache({"cacheKey":"key1","content":"test"})
>     logd("==inc {}",inc);
>     inc.result.split("\n").forEach(function (item){
>        console.log("append --- {}",item)
>     })
>     inc = ecloud.removeOneLineCache({"cacheKey":"key1","content":"test"})
>         logd("==inc {}",inc);
>         inc.result.split("\n").forEach(function (item){
>            console.log("append --- {}",item)
>         })
> }
> 
> main();
> 
> ```









###  ecloud.incrementCache 自增缓存

* redis的自增长计数功能，每次调用这个key的值都会+1
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key"}
* key定义：
* cacheKey = 缓存key
* @return {long} 返回redis自增后的值



> ```javascript
> function main() {
>     //字符串
>     let stringData = {
>         "cacheKey": "key1",
>         "expireTime": 300,
>         "dataType": 2,
>         "content": "a\nb\nc"
>     }
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
> 
>     let data = ecloud.getCache({"cacheKey": "key1"});
>     logd("data {}", JSON.stringify(data));
>     //直接输出
>     logd("data {}", data.result);
> 
> 
>     let inc = ecloud.incrementCache({"cacheKey":"key2"})
>     logd("==inc {}",inc);
>     let get =ecloud.getCache({"cacheKey":"key2"})
>     //这里获取的是字符串
>     logd("==get {}",get.result);
> 
> }
> 
> main();
> 
> ```







###  ecloud.decrementCache 自减缓存

* redis的自减计数功能，每次调用这个key的值都会-1
* 适合版本 EC 7.5.0+
* @param map 可扩展参数表
* 例如 {"cacheKey":"缓存key"}
* key定义：
* cacheKey = 缓存key
* @return {long} 返回redis自减的值



> ```javascript
> function main() {
>     //字符串
>     let stringData = {
>         "cacheKey": "key1",
>         "expireTime": 300,
>         "dataType": 2,
>         "content": "a\nb\nc"
>     }
>     let addString = ecloud.addCache(stringData);
>     logd("addString {}", addString);
>     let data = ecloud.getCache({"cacheKey": "key1"});
>     logd("data {}", JSON.stringify(data));
>     //直接输出
>     logd("data {}", data.result);
>     let inc = ecloud.incrementCache({"cacheKey":"key2"})
>     logd("==inc {}",inc);
>     let get =ecloud.decrementCache({"cacheKey":"key2"})
>     //这里获取的是字符串
>     logd("==get {}",get);
> }
> 
> main();
> 
> 
> ```


