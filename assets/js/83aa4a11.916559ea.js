"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[801],{5680:(e,l,a)=>{a.d(l,{xA:()=>p,yg:()=>d});var t=a(6540);function r(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function n(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?n(Object(a),!0).forEach((function(l){r(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function s(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),o=function(e){var l=t.useContext(u),a=l;return e&&(a="function"==typeof e?e(l):i(i({},l),e)),a},p=function(e){var l=o(e.components);return t.createElement(u.Provider,{value:l},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},g=t.forwardRef((function(e,l){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(a),g=r,d=c["".concat(u,".").concat(g)]||c[g]||m[g]||n;return a?t.createElement(d,i(i({ref:l},p),{},{components:a})):t.createElement(d,i({ref:l},p))}));function d(e,l){var a=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=g;var s={};for(var u in l)hasOwnProperty.call(l,u)&&(s[u]=l[u]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<n;o++)i[o]=a[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8776:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var t=a(8168),r=(a(6540),a(5680));const n={title:"Sqlite\u547d\u4ee4\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570"]},i=void 0,s={unversionedId:"zh-cn/funcs/sqlite-api",id:"zh-cn/funcs/sqlite-api",title:"Sqlite\u547d\u4ee4\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570",source:"@site/docs/zh-cn/funcs/sqlite-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/sqlite-api",permalink:"/docs/zh-cn/funcs/sqlite-api",draft:!1,tags:[],version:"current",frontMatter:{title:"Sqlite\u547d\u4ee4\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570"]},sidebar:"docs",previous:{title:"Shell\u547d\u4ee4\u51fd\u6570",permalink:"/docs/zh-cn/funcs/shell-api"},next:{title:"JDBC MySQL\u51fd\u6570",permalink:"/docs/zh-cn/funcs/jdbcmysql-api"}},u={},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"sqlite.connectOrCreateDb \u8fde\u63a5\u6570\u636e\u5e93",id:"sqliteconnectorcreatedb-\u8fde\u63a5\u6570\u636e\u5e93",level:2},{value:"sqlite.createTable \u521b\u5efa\u8868",id:"sqlitecreatetable-\u521b\u5efa\u8868",level:2},{value:"sqlite.insert \u63d2\u5165\u6570\u636e",id:"sqliteinsert-\u63d2\u5165\u6570\u636e",level:2},{value:"sqlite.update \u66f4\u65b0\u6570\u636e",id:"sqliteupdate-\u66f4\u65b0\u6570\u636e",level:2},{value:"sqlite.query \u67e5\u8be2\u6570\u636e",id:"sqlitequery-\u67e5\u8be2\u6570\u636e",level:2},{value:"sqlite.delete \u5220\u9664\u6570\u636e",id:"sqlitedelete-\u5220\u9664\u6570\u636e",level:2},{value:"sqlite.execSql \u6267\u884csql",id:"sqliteexecsql-\u6267\u884csql",level:2},{value:"sqlite.dropDatabase \u5220\u9664\u6570\u636e\u5e93",id:"sqlitedropdatabase-\u5220\u9664\u6570\u636e\u5e93",level:2},{value:"sqlite.dropTable \u5220\u9664\u8868",id:"sqlitedroptable-\u5220\u9664\u8868",level:2},{value:"sqlite.close \u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\uff0c\u91ca\u653e\u8d44\u6e90",id:"sqliteclose-\u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\u91ca\u653e\u8d44\u6e90",level:2},{value:"sqlite.getErrorMsg \u83b7\u53d6\u9519\u8bef\u4fe1\u606f",id:"sqlitegeterrormsg-\u83b7\u53d6\u9519\u8bef\u4fe1\u606f",level:2}],p={toc:o},c="wrapper";function m(e){let{components:l,...a}=e;return(0,r.yg)(c,(0,t.A)({},p,a,{components:l,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sqlite\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u7528\u4e8e\u64cd\u4f5csqlite\u6570\u636e\u5e93"),(0,r.yg)("li",{parentName:"ul"},"sqlite\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fsqlite\uff0c\u4f8b\u5982 sqlite.close()\u8fd9\u6837\u8c03\u7528"),(0,r.yg)("li",{parentName:"ul"},"sqlite \u6559\u7a0b\uff1a",(0,r.yg)("a",{parentName:"li",href:"https://www.runoob.com/sqlite/sqlite-tutorial.html"},"https://www.runoob.com/sqlite/sqlite-tutorial.html")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u9891\u7e41\u8bfb\u5199\u6709\u53ef\u80fd\u9020\u6210sqlite\u7684\u9501\u4f4f\uff0c\u8bf7\u518d\u8bfb\u5199\u6570\u636e\u7684\u65f6\u5019\u8fdb\u884c\u52a0\u4e0asleep\u8fdb\u884c\u6682\u505c50ms"))),(0,r.yg)("h2",{id:"sqliteconnectorcreatedb-\u8fde\u63a5\u6570\u636e\u5e93"},"sqlite.connectOrCreateDb \u8fde\u63a5\u6570\u636e\u5e93"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u521b\u5efa\u6216\u8005\u94fe\u63a5\u4e00\u4e2a\u6570\u636e\u5e93"),(0,r.yg)("li",{parentName:"ul"},"@param dbName \u6570\u636e\u5e93\u8def\u5f84\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var create = sqlite.connectOrCreateDb("/sdcard/test.db");\n  logd("create db result\uff1a" + create);\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqlitecreatetable-\u521b\u5efa\u8868"},"sqlite.createTable \u521b\u5efa\u8868"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u521b\u5efa\u6570\u636e\u8868"),(0,r.yg)("li",{parentName:"ul"},"@param tableName \u8868\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@param columns \u5217\u540d\u79f0\uff0c\u4f8b\u5982 ",'["name","pwd"]'),(0,r.yg)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tableName = "tbl_user";\n  var columns = ["name", "pwd"];\n  var createTable = sqlite.createTable(tableName, columns);\n  logd("createTable result\uff1a" + createTable);\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqliteinsert-\u63d2\u5165\u6570\u636e"},"sqlite.insert \u63d2\u5165\u6570\u636e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u63d2\u5165\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"@param tableName \u8868\u540d"),(0,r.yg)("li",{parentName:"ul"},"@param map \u6570\u636e\u7684map\u8868"),(0,r.yg)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tableName = "tbl_user";\n  var map = {\n    "name": "\u6211\u662f\u540d\u79f0",\n    "pwd": "\u6211\u662f\u5bc6\u7801"\n  };\n  var insert = sqlite.insert(tableName, map);\n  logd("insert result\uff1a" + insert);\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqliteupdate-\u66f4\u65b0\u6570\u636e"},"sqlite.update \u66f4\u65b0\u6570\u636e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u66f4\u65b0\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"@param tablename \u8868\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@param map \u6570\u636e\u7684map\u8868"),(0,r.yg)("li",{parentName:"ul"},"@param where \u6761\u4ef6\u8bed\u53e5"),(0,r.yg)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tableName = "tbl_user";\n  var map = {\n    "name": "\u6211\u662f\u540d\u79f022"\n  };\n  var where = "id>3";\n  var update = sqlite.update(tableName, map, where);\n  logd("update result\uff1a" + update);\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqlitequery-\u67e5\u8be2\u6570\u636e"},"sqlite.query \u67e5\u8be2\u6570\u636e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u67e5\u8be2\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"@param sql sql\u8bed\u53e5"),(0,r.yg)("li",{parentName:"ul"},"@return JSON | \u6570\u636e\u96c6\u5408\u5bf9\u8c61")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tableName = "tbl_user";\n  var sql = "select * from " + tableName;\n  var data = sqlite.query(sql);\n  logd("data result\uff1a" + JSON.stringify(data));\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqlitedelete-\u5220\u9664\u6570\u636e"},"sqlite.delete \u5220\u9664\u6570\u636e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5220\u9664\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"@param sql sql\u8bed\u53e5"),(0,r.yg)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tableName = "tbl_user";\n  var sql = "delete from " + tableName + " where id>3;";\n  var result = sqlite.delete(sql);\n  logd("delete result\uff1a" + result);\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqliteexecsql-\u6267\u884csql"},"sqlite.execSql \u6267\u884csql"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u67e5\u8be2\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"@param sql sql\u8bed\u53e5"),(0,r.yg)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tableName = "tbl_user";\n  var sql = "delete from " + tableName + " where id>3;";\n  var result = sqlite.execSql(sql);\n  logd("execSql result\uff1a" + result);\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqlitedropdatabase-\u5220\u9664\u6570\u636e\u5e93"},"sqlite.dropDatabase \u5220\u9664\u6570\u636e\u5e93"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5220\u9664\u6570\u636e\u5e93"),(0,r.yg)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var result = sqlite.dropDatabase();\n  logd("dropDatabase result\uff1a" + result);\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqlitedroptable-\u5220\u9664\u8868"},"sqlite.dropTable \u5220\u9664\u8868"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5220\u9664\u8868 @param table \u8868\u540d"),(0,r.yg)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tableName = "tbl_user";\n  var result = sqlite.dropTable(tableName);\n  logd("dropTable result\uff1a" + result);\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqliteclose-\u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\u91ca\u653e\u8d44\u6e90"},"sqlite.close \u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\uff0c\u91ca\u653e\u8d44\u6e90"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\uff0c\u91ca\u653e\u8d44\u6e90"),(0,r.yg)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var result = sqlite.close();\n  logd("close result\uff1a" + result);\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"sqlitegeterrormsg-\u83b7\u53d6\u9519\u8bef\u4fe1\u606f"},"sqlite.getErrorMsg \u83b7\u53d6\u9519\u8bef\u4fe1\u606f"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u4e0a\u4e00\u6b21\u6267\u884csql\u7684\u9519\u8bef\u4fe1\u606f"),(0,r.yg)("li",{parentName:"ul"},"@return {string} null\u4ee3\u8868\u65e0\u9519\u8bef\u4fe1\u606f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tableName = "tbl_user";\n  var result = sqlite.dropTable(tableName);\n  logd("dropTable result\uff1a" + result);\n  var result = sqlite.getErrorMsg();\n  logd("getErrorMsg result\uff1a" + result);\n}\n\nmain();\n')))}m.isMDXComponent=!0}}]);