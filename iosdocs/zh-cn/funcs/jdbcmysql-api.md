## 说明
- jdbc模块函数主要是用于操作MYSQL或者ORACLE等数据库
- jdbc模块的对象前缀是jdbc，例如 jdbc.init()这样调用


## jdbc.init 初始化JDBC链接
 * 初始化JDBC链接
 * @param jdbcDriver JDBC得驱动，mysql填写: com.mysql.jdbc.Driver
 * @param dbUrl JDBC链接得URL,例如 jdbc:mysql://{ip}:{port}/{db}?characterEncoding=utf8&useSSL=false&serverTimezone=UTC&rewriteBatchedStatements=true
 * @param user 数据库用户名
 * @param password 数据库密码
 * @return {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>     //mysql 的地址 ip:端口/数据库名
>     let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>     let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>     logd("inited "+inited);
>     let conn = jdbc.connect()
>     logd("connect "+conn);
>     if (!conn) {
>         logd(jdbc.getLastError());
>         exit()
>     }
>     //查询语句
>     let q = "Select * from table1 where id=1"
>     let qur = jdbc.query(q)
>     logd(qur);
>     jdbc.connectionClose()
> }
> main();
> ```

## jdbc.getLastError 获取最近的错误
 * 获取最近的错误
 * @return {string} 错误字符串,null 代表没错误

> ```javascript
>     
> function main(){ 
>     //mysql 的地址 ip:端口/数据库名
>     let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>     let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>     logd("inited "+inited);
>     let conn = jdbc.connect()
>     logd("connect "+conn);
>     if (!conn) {
>         logd(jdbc.getLastError());
>         exit()
>     }
>     //查询语句
>     let q = "Select * from table1 where id=1"
>     let qur = jdbc.query(q)
>     logd(qur);
>     jdbc.connectionClose()
> }
> main();
> ```


## jdbc.connect 链接数据库
 * 链接数据库，该方法在init函数执行后调用
 * @return {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>     //mysql 的地址 ip:端口/数据库名
>     let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>     let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>     logd("inited "+inited);
>     //链接数据库  
>     let conn = jdbc.connect()
>     logd("connect "+conn);
>     if (!conn) {
>         logd(jdbc.getLastError());
>         exit()
>     }
>     //查询语句
>     let q = "Select * from table1 where id=1"
>     let qur = jdbc.query(q)
>     logd(qur);
>     jdbc.connectionClose()
> }
> main();
> ```





## jdbc.query 查询数据
 * 查询数据
 * @param sql sql语句
 * @return JSON | 数据集合对象

> ```javascript
>     
> function main(){
>     //mysql 的地址 ip:端口/数据库名
>     let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>     let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>     logd("inited "+inited);
>     let conn = jdbc.connect()
>     logd("connect "+conn);
>     if (!conn) {
>         logd(jdbc.getLastError());
>         exit()
>     }
>     //查询语句
>     let q = "select * from table1 where id=1"
>     let qur = jdbc.query(q)
>     logd(qur);
>     jdbc.connectionClose()
> }
> main();
> ```


## jdbc.createPreparedStatement 创建一个预处理SQL语
 * 创建一个预处理SQL语句
 * @param sql 预处理语句
 * @return  {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>       //mysql 的地址 ip:端口/数据库名
>       let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>       let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>       logd("inited "+inited);
>       
>       let conn = jdbc.connect()
>       logd("connect "+conn);
>       if (!conn) {
>           logd(jdbc.getLastError());
>         exit()
>       }
>   
>       //查询语句
>       let q = "select * from table1 where id=? or uname=?"
>       //创建一个查询
>       let qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetInt(1,1)
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'test')
>       
>       }
>       //预处理查询
>       let data =jdbc.psqlQuery()
>       logd(data);
>       
>       //关闭预处理语句
>       jdbc.psqlClose()
>         
>       //插入数据
>       q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"
>       qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetString(1,"我是名称")
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'我是内容')
>           //设置时间戳
>           jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>       }
>       rowcount = jdbc.psqlExecuteUpdate();
>       logi("插入语句执行影响行数 -> " + rowcount);
>       if (rowcount<=0) {
>           loge("插入错误: "+jdbc.getLastError())
>       }
>       jdbc.connectionClose()
> }
> main();
> ```


## jdbc.psqlQuery 执行预处理语句
 * 执行之前创建得预处理语句
 * @return {string} JSON字符串

> ```javascript
>     
> function main(){
>       //mysql 的地址  ip:端口/数据库名
>       let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>       let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>       logd("inited "+inited);
>       
>       let conn = jdbc.connect()
>       logd("connect "+conn);
>       if (!conn) {
>           logd(jdbc.getLastError());
>         exit()
>       }
>       
>       //查询语句
>       let q = "select * from table1 where id=? or uname=?"
>       //创建一个查询
>       let qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetInt(1,1)
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'test')
>       
>       }
>       //预处理查询
>       let data =jdbc.psqlQuery()
>       logd(data);
>       
>       //关闭预处理语句
>       jdbc.psqlClose()
>       
>       //插入数据
>       q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"
>       qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetString(1,"我是名称")
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'我是内容')
>           //设置时间戳
>           jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>       }
>       rowcount = jdbc.psqlExecuteUpdate();
>       logi("插入语句执行影响行数 -> " + rowcount);
>       if (rowcount<=0) {
>           loge("插入错误: "+jdbc.getLastError())
>       }
>       jdbc.connectionClose()
> }
> main();
> ```



## jdbc.psqlSetString 设置字符串参数
 * 预处理语句设置字符串条件参数
 * @param index 条件索引
 * @param input 字符串
 * @return  {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>       //mysql 的地址 ip:端口/数据库名
>       let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>       let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>       logd("inited "+inited);
>       
>       let conn = jdbc.connect()
>       logd("connect "+conn);
>       if (!conn) {
>           logd(jdbc.getLastError());
>         exit()
>       }
>       
>       //查询语句
>       let q = "select * from table1 where id=? or uname=?"
>       //创建一个查询
>       let qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetInt(1,1)
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'test')
>       
>       }
>       //预处理查询
>       let data =jdbc.psqlQuery()
>       logd(data);
>       
>       //关闭预处理语句
>       jdbc.psqlClose()
>       
>       //插入数据
>       q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"
>       qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetString(1,"我是名称")
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'我是内容')
>           //设置时间戳
>           jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>       }
>       rowcount = jdbc.psqlExecuteUpdate();
>       logi("插入语句执行影响行数 -> " + rowcount);
>       if (rowcount<=0) {
>           loge("插入错误: "+jdbc.getLastError())
>       }
>       jdbc.connectionClose()
> }
> main();
> ```
> ```

## jdbc.psqlSetLong 设置long条件参数
* 预处理语句设置long条件参数
 * @param index 条件索引
 * @param input long数据
 * @return  {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>    jdbc.psqlSetLong(1,1000);
> }
> main();
> ```

## jdbc.psqlSetInt 设置int条件参数
 * @param index 条件索引
 * @param input int数据
 * @return  {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>       //mysql 的地址 ip:端口/数据库名
>       let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>       let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>       logd("inited "+inited);
>       
>       let conn = jdbc.connect()
>       logd("connect "+conn);
>       if (!conn) {
>           logd(jdbc.getLastError());
>         exit()
>       }
>       
>       //查询语句
>       let q = "select * from table1 where id=? or uname=?"
>       //创建一个查询
>       let qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetInt(1,1)
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'test')
>       
>       }
>       //预处理查询
>       let data =jdbc.psqlQuery()
>       logd(data);
>       
>       //关闭预处理语句
>       jdbc.psqlClose()
>       
>       //插入数据
>       q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"
>       qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetString(1,"我是名称")
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'我是内容')
>           //设置时间戳
>           jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>       }
>       rowcount = jdbc.psqlExecuteUpdate();
>       logi("插入语句执行影响行数 -> " + rowcount);
>       if (rowcount<=0) {
>           loge("插入错误: "+jdbc.getLastError())
>       }
>       jdbc.connectionClose()
> }
> main();
> ```



## jdbc.psqlSetFloat 设置float条件参数
 * 预处理语句设置float条件参数
 * @param index 条件索引
 * @param input float数据
 * @return  {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>    jdbc.psqlSetFloat(1,1.0)  
> }
> main();
> ```



## jdbc.psqlSetBoolean 设置boolean条件参数
 * 设置boolean条件参数
 * @param index 条件索引
 * @param input boolean数据
 * @return  {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>   jdbc.psqlSetBoolean(1,true) 
> }
> main();
> ```



## jdbc.psqlSetDate 设置日期条件参数
 * 预处理语句设置日期条件参数
 * @param index 条件索引
 * @param dataFormat 日期格式，例如 yyyy-MM-dd
 * @param input 日期字符串
 * @return  {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>       //mysql 的地址 ip:端口/数据库名
>       let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>       let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>       logd("inited "+inited);
>       
>       let conn = jdbc.connect()
>       logd("connect "+conn);
>       if (!conn) {
>           logd(jdbc.getLastError());
>         exit()
>       }
>       
>       //查询语句
>       let q = "select * from table1 where id=? or uname=?"
>       //创建一个查询
>       let qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetInt(1,1)
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'test')
>       
>       }
>       //预处理查询
>       let data =jdbc.psqlQuery()
>       logd(data);
>       
>       //关闭预处理语句
>       jdbc.psqlClose()
>       
>       //插入数据
>       q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"
>       qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetString(1,"我是名称")
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'我是内容')
>           //设置日期
>           jdbc.psqlSetDate(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>       }
>       rowcount = jdbc.psqlExecuteUpdate();
>       logi("插入语句执行影响行数 -> " + rowcount);
>       if (rowcount<=0) {
>           loge("插入错误: "+jdbc.getLastError())
>       }
>       jdbc.connectionClose()
> }
> main();
> ```


## jdbc.psqlSetTimestamp 设置时间戳条件参数
 * 预处理语句设置时间戳条件参数
 * @param index 条件索引
 * @param dataFormat 日期格式，例如 yyyy-MM-dd
 * @param input 日期字符串
 * @return  {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>       //mysql 的地址 ip:端口/数据库名
>       let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>       let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>       logd("inited "+inited);
>       
>       let conn = jdbc.connect()
>       logd("connect "+conn);
>       if (!conn) {
>           logd(jdbc.getLastError());
>         exit()
>       }
>       
>       //查询语句
>       let q = "select * from table1 where id=? or uname=?"
>       //创建一个查询
>       let qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetInt(1,1)
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'test')
>       
>       }
>       //预处理查询
>       let data =jdbc.psqlQuery()
>       logd(data);
>       
>       //关闭预处理语句
>       jdbc.psqlClose()
>       
>       //插入数据
>       q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"
>       qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetString(1,"我是名称")
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'我是内容')
>           //设置时间戳
>           jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>       }
>       rowcount = jdbc.psqlExecuteUpdate();
>       logi("插入语句执行影响行数 -> " + rowcount);
>       if (rowcount<=0) {
>           loge("插入错误: "+jdbc.getLastError())
>       }
>       jdbc.psqlClose()
>       jdbc.connectionClose()
> }
> main();
> ```


## jdbc.psqlAddBatch 批量提交
 * 是否设定为批量提交
 * @return {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>           //mysql 的地址 ip:端口/数据库名
>           let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>           let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>           logd("inited "+inited);
>           
>           let conn = jdbc.connect()
>           logd("connect "+conn);
>           if (!conn) {
>               logd(jdbc.getLastError());
>         exit()
>           }
>           
>           
>           
>           //插入数据
>           let q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"
>           let qur = jdbc.createPreparedStatement(q)
>           
>           
>           if (qur) {
>           
>               for (var i = 0; i < 10; i++) {
>                   //设置第一个索引的参数
>                       jdbc.psqlSetString(1,"我是名称")
>                       //设置第二个索引参数
>                       jdbc.psqlSetString(2,'我是内容')
>                       //设置时间戳
>                       jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>                   r= jdbc.psqlAddBatch()
>                   if (!r) {
>                       logd(jdbc.getLastError());
>                   }
>               }
>           }
>           
>           rowcount = jdbc.psqlExecuteUpdate();
>           logi("插入语句执行影响行数 -> " + rowcount);
>           if (rowcount<=0) {
>               loge("插入错误: "+jdbc.getLastError())
>           }
>           jdbc.psqlClose()
>           jdbc.connectionClose()
>           
> }
> main();
> ```

## jdbc.psqlExecuteUpdate 执行更新操作
 * 执行更新操作
 * @return {int} 更新影响到行数量

> ```javascript
>     
> function main(){
>       //mysql 的地址  ip:端口/数据库名
>       let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>       let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>       logd("inited "+inited);
>       
>       let conn = jdbc.connect()
>       logd("connect "+conn);
>       if (!conn) {
>           logd(jdbc.getLastError());
>         exit()
>       }
>       
>       //更新数据
>       let q = "update table1 set uname=?,ucontent=?,create_time=? where id=?;"
>       let qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetString(1,"我是名称")
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'我是内容')
>           //设置时间戳
>           jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>           //设置id
>           jdbc.psqlSetInt(4,1)
>       }
>       let rowcount = jdbc.psqlExecuteUpdate();
>       logi("插入语句执行影响行数 -> " + rowcount);
>       if (rowcount<=0) {
>           loge("插入错误: "+jdbc.getLastError())
>       }  
>       //插入数据
>       q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"
>       qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetString(1,"我是名称")
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'我是内容')
>           //设置时间戳
>           jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>       }
>       rowcount = jdbc.psqlExecuteUpdate();
>       logi("插入语句执行影响行数 -> " + rowcount);
>       if (rowcount<=0) {
>           loge("插入错误: "+jdbc.getLastError())
>       }
>       jdbc.psqlClose() 
>       jdbc.connectionClose()
> }
> main();
> ```

## jdbc.psqlClose 结束预处理语句
 * 结束预处理语句
 * @return {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>     jdbc.psqlClose()
> }
> main();
> ```

## jdbc.connectionClose 关闭数据库链接
 * 关闭数据库链接
 * @return {bool} true 代表成功 false 代表失败

> ```javascript
>     
> function main(){
>       //mysql 的地址  ip:端口/数据库名
>       let mysqlUrl ="jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"
>       let inited = jdbc.init("com.mysql.jdbc.Driver",mysqlUrl,"root","root123456");
>       logd("inited "+inited);
>       
>       let conn = jdbc.connect()
>       logd("connect "+conn);
>       if (!conn) {
>           logd(jdbc.getLastError());
>           exit()
>       }
>       
>       //查询语句
>       let q = "select * from table1 where id=? or uname=?"
>       //创建一个查询
>       let qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetInt(1,1)
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'test')
>       
>       }
>       //预处理查询
>       let data =jdbc.psqlQuery()
>       logd(data);
>       
>       //关闭预处理语句
>       jdbc.psqlClose()
>       
>       //插入数据
>       q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"
>       qur = jdbc.createPreparedStatement(q)
>       if (qur) {
>           //设置第一个索引的参数
>           jdbc.psqlSetString(1,"我是名称")
>           //设置第二个索引参数
>           jdbc.psqlSetString(2,'我是内容')
>           //设置时间戳
>           jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")
>       }
>       rowcount = jdbc.psqlExecuteUpdate();
>       logi("插入语句执行影响行数 -> " + rowcount);
>       if (rowcount<=0) {
>           loge("插入错误: "+jdbc.getLastError())
>       }
>       jdbc.psqlClose()
>       jdbc.connectionClose()
> }
> main();
> ```



