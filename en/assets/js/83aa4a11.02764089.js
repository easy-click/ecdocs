"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[186],{3905:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return d}});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=a.createContext({}),o=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(l),d=n,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return l?a.createElement(k,i(i({ref:t},c),{},{components:l})):a.createElement(k,i({ref:t},c))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var o=2;o<r;o++)i[o]=l[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},5979:function(e,t,l){l.r(t),l.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var a=l(3117),n=l(102),r=(l(7294),l(3905)),i=["components"],u={title:"Sqlite\u547d\u4ee4\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570"]},s=void 0,o={unversionedId:"zh-cn/funcs/sqlite-api",id:"zh-cn/funcs/sqlite-api",title:"Sqlite\u547d\u4ee4\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570",source:"@site/docs/zh-cn/funcs/sqlite-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/sqlite-api",permalink:"/en/docs/zh-cn/funcs/sqlite-api",draft:!1,tags:[],version:"current",frontMatter:{title:"Sqlite\u547d\u4ee4\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Sqlite\u547d\u4ee4\u51fd\u6570"]},sidebar:"docs",previous:{title:"Shell\u547d\u4ee4\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/shell-api"},next:{title:"JDBC MySQL\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/jdbcmysql-api"}},c={},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"sqlite.connectOrCreateDb \u8fde\u63a5\u6570\u636e\u5e93",id:"sqliteconnectorcreatedb-\u8fde\u63a5\u6570\u636e\u5e93",level:2},{value:"sqlite.createTable \u521b\u5efa\u8868",id:"sqlitecreatetable-\u521b\u5efa\u8868",level:2},{value:"sqlite.insert \u63d2\u5165\u6570\u636e",id:"sqliteinsert-\u63d2\u5165\u6570\u636e",level:2},{value:"sqlite.update \u66f4\u65b0\u6570\u636e",id:"sqliteupdate-\u66f4\u65b0\u6570\u636e",level:2},{value:"sqlite.query \u67e5\u8be2\u6570\u636e",id:"sqlitequery-\u67e5\u8be2\u6570\u636e",level:2},{value:"sqlite.delete \u5220\u9664\u6570\u636e",id:"sqlitedelete-\u5220\u9664\u6570\u636e",level:2},{value:"sqlite.execSql \u6267\u884csql",id:"sqliteexecsql-\u6267\u884csql",level:2},{value:"sqlite.dropDatabase \u5220\u9664\u6570\u636e\u5e93",id:"sqlitedropdatabase-\u5220\u9664\u6570\u636e\u5e93",level:2},{value:"sqlite.dropTable \u5220\u9664\u8868",id:"sqlitedroptable-\u5220\u9664\u8868",level:2},{value:"sqlite.close \u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\uff0c\u91ca\u653e\u8d44\u6e90",id:"sqliteclose-\u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\u91ca\u653e\u8d44\u6e90",level:2},{value:"sqlite.getErrorMsg \u83b7\u53d6\u9519\u8bef\u4fe1\u606f",id:"sqlitegeterrormsg-\u83b7\u53d6\u9519\u8bef\u4fe1\u606f",level:2}],m={toc:p};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sqlite\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u7528\u4e8e\u64cd\u4f5csqlite\u6570\u636e\u5e93"),(0,r.kt)("li",{parentName:"ul"},"sqlite\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fsqlite\uff0c\u4f8b\u5982 sqlite.close()\u8fd9\u6837\u8c03\u7528"),(0,r.kt)("li",{parentName:"ul"},"sqlite \u6559\u7a0b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://www.runoob.com/sqlite/sqlite-tutorial.html"},"https://www.runoob.com/sqlite/sqlite-tutorial.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9891\u7e41\u8bfb\u5199\u6709\u53ef\u80fd\u9020\u6210sqlite\u7684\u9501\u4f4f\uff0c\u8bf7\u518d\u8bfb\u5199\u6570\u636e\u7684\u65f6\u5019\u8fdb\u884c\u52a0\u4e0asleep\u8fdb\u884c\u6682\u505c50ms"))),(0,r.kt)("h2",{id:"sqliteconnectorcreatedb-\u8fde\u63a5\u6570\u636e\u5e93"},"sqlite.connectOrCreateDb \u8fde\u63a5\u6570\u636e\u5e93"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6216\u8005\u94fe\u63a5\u4e00\u4e2a\u6570\u636e\u5e93"),(0,r.kt)("li",{parentName:"ul"},"@param dbName \u6570\u636e\u5e93\u8def\u5f84\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var create = sqlite.connectOrCreateDb("/sdcard/test.db");\n    logd("create db result\uff1a"+create);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqlitecreatetable-\u521b\u5efa\u8868"},"sqlite.createTable \u521b\u5efa\u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6570\u636e\u8868"),(0,r.kt)("li",{parentName:"ul"},"@param tableName \u8868\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"@param columns \u5217\u540d\u79f0\uff0c\u4f8b\u5982 ",'["name","pwd"]'),(0,r.kt)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var tableName="tbl_user";\n    var columns=["name","pwd"];\n    var createTable = sqlite.createTable(tableName,columns);\n    logd("createTable result\uff1a"+createTable);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqliteinsert-\u63d2\u5165\u6570\u636e"},"sqlite.insert \u63d2\u5165\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d2\u5165\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param tableName \u8868\u540d"),(0,r.kt)("li",{parentName:"ul"},"@param map \u6570\u636e\u7684map\u8868"),(0,r.kt)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var tableName="tbl_user";\n    var map={\n            "name":"\u6211\u662f\u540d\u79f0",\n            "pwd":"\u6211\u662f\u5bc6\u7801"\n            };\n    var insert = sqlite.insert(tableName,map);\n    logd("insert result\uff1a"+insert);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqliteupdate-\u66f4\u65b0\u6570\u636e"},"sqlite.update \u66f4\u65b0\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param tablename \u8868\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"@param map \u6570\u636e\u7684map\u8868"),(0,r.kt)("li",{parentName:"ul"},"@param where \u6761\u4ef6\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var tableName="tbl_user";\n    var map={\n            "name":"\u6211\u662f\u540d\u79f022"\n            };\n    var where="id>3";\n    var update = sqlite.update(tableName,map,where);\n    logd("update result\uff1a"+update);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqlitequery-\u67e5\u8be2\u6570\u636e"},"sqlite.query \u67e5\u8be2\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param sql sql\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"@return JSON | \u6570\u636e\u96c6\u5408\u5bf9\u8c61")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var tableName="tbl_user";\n    var sql="select * from "+tableName;\n    var data = sqlite.query(sql);\n    logd("data result\uff1a"+JSON.stringify(data));\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqlitedelete-\u5220\u9664\u6570\u636e"},"sqlite.delete \u5220\u9664\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param sql sql\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var tableName="tbl_user";\n    var sql="delete from "+tableName+" where id>3;";\n    var result = sqlite.delete(sql);\n    logd("delete result\uff1a"+ result);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqliteexecsql-\u6267\u884csql"},"sqlite.execSql \u6267\u884csql"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param sql sql\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var tableName="tbl_user";\n    var sql="delete from "+tableName+" where id>3;";\n    var result = sqlite.execSql(sql);\n    logd("execSql result\uff1a"+ result);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqlitedropdatabase-\u5220\u9664\u6570\u636e\u5e93"},"sqlite.dropDatabase \u5220\u9664\u6570\u636e\u5e93"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u6570\u636e\u5e93"),(0,r.kt)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = sqlite.dropDatabase();\n    logd("dropDatabase result\uff1a"+ result);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqlitedroptable-\u5220\u9664\u8868"},"sqlite.dropTable \u5220\u9664\u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u8868\n@param table \u8868\u540d"),(0,r.kt)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var tableName="tbl_user";\n    var result = sqlite.dropTable(tableName);\n    logd("dropTable result\uff1a"+ result);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqliteclose-\u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\u91ca\u653e\u8d44\u6e90"},"sqlite.close \u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\uff0c\u91ca\u653e\u8d44\u6e90"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5\uff0c\u91ca\u653e\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"@return boolean true \u4ee3\u8868\u8bf7\u6c42\u6743\u9650\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = sqlite.close();\n    logd("close result\uff1a"+ result);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"sqlitegeterrormsg-\u83b7\u53d6\u9519\u8bef\u4fe1\u606f"},"sqlite.getErrorMsg \u83b7\u53d6\u9519\u8bef\u4fe1\u606f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u4e0a\u4e00\u6b21\u6267\u884csql\u7684\u9519\u8bef\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"@return {string} null\u4ee3\u8868\u65e0\u9519\u8bef\u4fe1\u606f")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var tableName="tbl_user";\n    var result = sqlite.dropTable(tableName);\n    logd("dropTable result\uff1a"+ result);\n    var result = sqlite.getErrorMsg();\n    logd("getErrorMsg result\uff1a"+ result);\n}\nmain();\n'))))}d.isMDXComponent=!0}}]);