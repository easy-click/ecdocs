## 说明
- sqlite模块函数主要是用于操作sqlite数据库
- sqlite模块的对象前缀是sqlite，例如 sqlite.close()这样调用
- sqlite 教程：https://www.runoob.com/sqlite/sqlite-tutorial.html
- **频繁读写有可能造成sqlite的锁住，请再读写数据的时候进行加上sleep进行暂停50ms**


## sqlite.connectOrCreateDb 连接数据库
 * 创建或者链接一个数据库
 * @param dbName 数据库名称
 * @return boolean true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
>     var create = sqlite.connectOrCreateDb("test.db");
>     logd("create db result："+create);
> }
> main();
> ```

## sqlite.createTable 创建表
 * 创建数据表
 * @param tableName 表名称
 * @param columns 列名称，例如 ["name","pwd"]
 * @return boolean true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
>     var tableName="tbl_user";
>     var columns=["name","pwd"];
>     var createTable = sqlite.createTable(tableName,columns);
>     logd("createTable result："+createTable);
> }
> main();
> ```


## sqlite.insert 插入数据
 * 插入数据
 * @param tableName 表名
 * @param map 数据的map表
 * @return boolean true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
>     var tableName="tbl_user";
>     var map={
>             "name":"我是名称",
>             "pwd":"我是密码"
>             };
>     var insert = sqlite.insert(tableName,map);
>     logd("insert result："+insert);
> }
> main();
> ```



## sqlite.update 更新数据
 * 更新数据
 * @param tablename 表名称
 * @param map 数据的map表
 * @param where 条件语句
 * @return boolean true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
>     var tableName="tbl_user";
>     var map={
>             "name":"我是名称22"
>             };
>     var where="id>3";
>     var update = sqlite.update(tableName,map,where);
>     logd("update result："+update);
> }
> main();
> ```

## sqlite.query 查询数据
 * 查询数据
 * @param sql sql语句
 * @return JSON | 数据集合对象

> ```javascript
>     
> function main(){
>     var tableName="tbl_user";
>     var sql="select * from "+tableName;
>     var data = sqlite.query(sql);
>     logd("data result："+JSON.stringify(data));
> }
> main();
> ```


## sqlite.delete 删除数据
 * 删除数据
 * @param sql sql语句
 * @return boolean true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
>     var tableName="tbl_user";
>     var sql="delete from "+tableName+" where id>3;";
>     var result = sqlite.delete(sql);
>     logd("delete result："+ result);
> }
> main();
> ```




## sqlite.execSql 执行sql
 * 查询数据
 * @param sql sql语句
 * @return boolean true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
>     var tableName="tbl_user";
>     var sql="delete from "+tableName+" where id>3;";
>     var result = sqlite.execSql(sql);
>     logd("execSql result："+ result);
> }
> main();
> ```

## sqlite.dropDatabase 删除数据库
 * 删除数据库
 * @return boolean true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
>     var result = sqlite.dropDatabase();
>     logd("dropDatabase result："+ result);
> }
> main();
> ```

## sqlite.dropTable 删除表
 * 删除表
 @param table 表名
 * @return boolean true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
>     var tableName="tbl_user";
>     var result = sqlite.dropTable(tableName);
>     logd("dropTable result："+ result);
> }
> main();
> ```



## sqlite.close 关闭数据库链接，释放资源
 * 关闭数据库链接，释放资源
 * @return boolean true 代表请求权限成功，false代表失败

> ```javascript
>     
> function main(){
>     var result = sqlite.close();
>     logd("close result："+ result);
> }
> main();
> ```

## sqlite.getErrorMsg 获取错误信息
* 获取上一次执行sql的错误信息
 * @return {string} null代表无错误信息

> ```javascript
>     
> function main(){
>     var tableName="tbl_user";
>     var result = sqlite.dropTable(tableName);
>     logd("dropTable result："+ result);
>     var result = sqlite.getErrorMsg();
>     logd("getErrorMsg result："+ result);
> }
> main();
> ```





