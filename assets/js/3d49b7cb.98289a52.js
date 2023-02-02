"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[2496],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>m});var l=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,l,r=function(n,e){if(null==n)return{};var t,l,r={},c=Object.keys(n);for(l=0;l<c.length;l++)t=c[l],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(l=0;l<c.length;l++)t=c[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=l.createContext({}),d=function(n){var e=l.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},s=function(n){var e=d(n.components);return l.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(n,e){var t=n.components,r=n.mdxType,c=n.originalType,i=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),p=d(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return t?l.createElement(b,a(a({ref:e},s),{},{components:t})):l.createElement(b,a({ref:e},s))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var c=t.length,a=new Array(c);a[0]=p;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=n,o.mdxType="string"==typeof n?n:r,a[1]=o;for(var d=2;d<c;d++)a[d]=t[d];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8858:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var l=t(7462),r=(t(7294),t(3905));const c={title:"JDBC MySQL\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 JDBC MySQL\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 JDBC MySQL\u51fd\u6570"]},a=void 0,o={unversionedId:"zh-cn/funcs/jdbcmysql-api",id:"zh-cn/funcs/jdbcmysql-api",title:"JDBC MySQL\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 JDBC MySQL\u51fd\u6570",source:"@site/iosdocs/zh-cn/funcs/jdbcmysql-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/jdbcmysql-api",permalink:"/iosdocs/zh-cn/funcs/jdbcmysql-api",draft:!1,tags:[],version:"current",frontMatter:{title:"JDBC MySQL\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 JDBC MySQL\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 JDBC MySQL\u51fd\u6570"]},sidebar:"iosdocs",previous:{title:"\u5de5\u5177\u51fd\u6570",permalink:"/iosdocs/zh-cn/funcs/utils-api"},next:{title:"\u9ad8\u7ea7\u529f\u80fd",permalink:"/iosdocs/zh-cn/advance/"}},i={},d=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"jdbc.init \u521d\u59cb\u5316JDBC\u94fe\u63a5",id:"jdbcinit-\u521d\u59cb\u5316jdbc\u94fe\u63a5",level:2},{value:"jdbc.getLastError \u83b7\u53d6\u6700\u8fd1\u7684\u9519\u8bef",id:"jdbcgetlasterror-\u83b7\u53d6\u6700\u8fd1\u7684\u9519\u8bef",level:2},{value:"jdbc.connect \u94fe\u63a5\u6570\u636e\u5e93",id:"jdbcconnect-\u94fe\u63a5\u6570\u636e\u5e93",level:2},{value:"jdbc.query \u67e5\u8be2\u6570\u636e",id:"jdbcquery-\u67e5\u8be2\u6570\u636e",level:2},{value:"jdbc.createPreparedStatement \u521b\u5efa\u4e00\u4e2a\u9884\u5904\u7406SQL\u8bed",id:"jdbccreatepreparedstatement-\u521b\u5efa\u4e00\u4e2a\u9884\u5904\u7406sql\u8bed",level:2},{value:"jdbc.psqlQuery \u6267\u884c\u9884\u5904\u7406\u8bed\u53e5",id:"jdbcpsqlquery-\u6267\u884c\u9884\u5904\u7406\u8bed\u53e5",level:2},{value:"jdbc.psqlSetString \u8bbe\u7f6e\u5b57\u7b26\u4e32\u53c2\u6570",id:"jdbcpsqlsetstring-\u8bbe\u7f6e\u5b57\u7b26\u4e32\u53c2\u6570",level:2},{value:"jdbc.psqlSetLong \u8bbe\u7f6elong\u6761\u4ef6\u53c2\u6570",id:"jdbcpsqlsetlong-\u8bbe\u7f6elong\u6761\u4ef6\u53c2\u6570",level:2},{value:"jdbc.psqlSetInt \u8bbe\u7f6eint\u6761\u4ef6\u53c2\u6570",id:"jdbcpsqlsetint-\u8bbe\u7f6eint\u6761\u4ef6\u53c2\u6570",level:2},{value:"jdbc.psqlSetFloat \u8bbe\u7f6efloat\u6761\u4ef6\u53c2\u6570",id:"jdbcpsqlsetfloat-\u8bbe\u7f6efloat\u6761\u4ef6\u53c2\u6570",level:2},{value:"jdbc.psqlSetBoolean \u8bbe\u7f6eboolean\u6761\u4ef6\u53c2\u6570",id:"jdbcpsqlsetboolean-\u8bbe\u7f6eboolean\u6761\u4ef6\u53c2\u6570",level:2},{value:"jdbc.psqlSetDate \u8bbe\u7f6e\u65e5\u671f\u6761\u4ef6\u53c2\u6570",id:"jdbcpsqlsetdate-\u8bbe\u7f6e\u65e5\u671f\u6761\u4ef6\u53c2\u6570",level:2},{value:"jdbc.psqlSetTimestamp \u8bbe\u7f6e\u65f6\u95f4\u6233\u6761\u4ef6\u53c2\u6570",id:"jdbcpsqlsettimestamp-\u8bbe\u7f6e\u65f6\u95f4\u6233\u6761\u4ef6\u53c2\u6570",level:2},{value:"jdbc.psqlAddBatch \u6279\u91cf\u63d0\u4ea4",id:"jdbcpsqladdbatch-\u6279\u91cf\u63d0\u4ea4",level:2},{value:"jdbc.psqlExecuteUpdate \u6267\u884c\u66f4\u65b0\u64cd\u4f5c",id:"jdbcpsqlexecuteupdate-\u6267\u884c\u66f4\u65b0\u64cd\u4f5c",level:2},{value:"jdbc.psqlClose \u7ed3\u675f\u9884\u5904\u7406\u8bed\u53e5",id:"jdbcpsqlclose-\u7ed3\u675f\u9884\u5904\u7406\u8bed\u53e5",level:2},{value:"jdbc.connectionClose \u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5",id:"jdbcconnectionclose-\u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5",level:2}],s={toc:d};function u(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,l.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jdbc\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u7528\u4e8e\u64cd\u4f5cMYSQL\u6216\u8005ORACLE\u7b49\u6570\u636e\u5e93"),(0,r.kt)("li",{parentName:"ul"},"jdbc\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fjdbc\uff0c\u4f8b\u5982 jdbc.init()\u8fd9\u6837\u8c03\u7528")),(0,r.kt)("h2",{id:"jdbcinit-\u521d\u59cb\u5316jdbc\u94fe\u63a5"},"jdbc.init \u521d\u59cb\u5316JDBC\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316JDBC\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"@param jdbcDriver JDBC\u5f97\u9a71\u52a8\uff0cmysql\u586b\u5199: com.mysql.jdbc.Driver"),(0,r.kt)("li",{parentName:"ul"},"@param dbUrl JDBC\u94fe\u63a5\u5f97URL,\u4f8b\u5982 jdbc:mysql://{ip}:\n{port}/{db}?characterEncoding=utf8&useSSL=false&serverTimezone=UTC&rewriteBatchedStatements=true"),(0,r.kt)("li",{parentName:"ul"},"@param user \u6570\u636e\u5e93\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"@param password \u6570\u636e\u5e93\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "Select * from table1 where id=1"\n  let qur = jdbc.query(q)\n  logd(qur);\n  jdbc.connectionClose()\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"jdbcgetlasterror-\u83b7\u53d6\u6700\u8fd1\u7684\u9519\u8bef"},"jdbc.getLastError \u83b7\u53d6\u6700\u8fd1\u7684\u9519\u8bef"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6700\u8fd1\u7684\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"@return {string} \u9519\u8bef\u5b57\u7b26\u4e32,null \u4ee3\u8868\u6ca1\u9519\u8bef")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "Select * from table1 where id=1"\n  let qur = jdbc.query(q)\n  logd(qur);\n  jdbc.connectionClose()\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"jdbcconnect-\u94fe\u63a5\u6570\u636e\u5e93"},"jdbc.connect \u94fe\u63a5\u6570\u636e\u5e93"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u94fe\u63a5\u6570\u636e\u5e93\uff0c\u8be5\u65b9\u6cd5\u5728init\u51fd\u6570\u6267\u884c\u540e\u8c03\u7528"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n  //\u94fe\u63a5\u6570\u636e\u5e93  \n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "Select * from table1 where id=1"\n  let qur = jdbc.query(q)\n  logd(qur);\n  jdbc.connectionClose()\n}\n\nmain();\n\n')),(0,r.kt)("h2",{id:"jdbcquery-\u67e5\u8be2\u6570\u636e"},"jdbc.query \u67e5\u8be2\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param sql sql\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"@return JSON | \u6570\u636e\u96c6\u5408\u5bf9\u8c61")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "select * from table1 where id=1"\n  let qur = jdbc.query(q)\n  logd(qur);\n  jdbc.connectionClose()\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"jdbccreatepreparedstatement-\u521b\u5efa\u4e00\u4e2a\u9884\u5904\u7406sql\u8bed"},"jdbc.createPreparedStatement \u521b\u5efa\u4e00\u4e2a\u9884\u5904\u7406SQL\u8bed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u9884\u5904\u7406SQL\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"@param sql \u9884\u5904\u7406\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "select * from table1 where id=? or uname=?"\n  //\u521b\u5efa\u4e00\u4e2a\u67e5\u8be2\n  let qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetInt(1, 1)\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'test\')\n\n  }\n  //\u9884\u5904\u7406\u67e5\u8be2\n  let data = jdbc.psqlQuery()\n  logd(data);\n\n  //\u5173\u95ed\u9884\u5904\u7406\u8bed\u53e5\n  jdbc.psqlClose()\n\n  //\u63d2\u5165\u6570\u636e\n  q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"\n  qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n    //\u8bbe\u7f6e\u65f6\u95f4\u6233\n    jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n  }\n  rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  jdbc.connectionClose()\n}\nmain();\n')),(0,r.kt)("h2",{id:"jdbcpsqlquery-\u6267\u884c\u9884\u5904\u7406\u8bed\u53e5"},"jdbc.psqlQuery \u6267\u884c\u9884\u5904\u7406\u8bed\u53e5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e4b\u524d\u521b\u5efa\u5f97\u9884\u5904\u7406\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"@return {string} JSON\u5b57\u7b26\u4e32")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740  ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "select * from table1 where id=? or uname=?"\n  //\u521b\u5efa\u4e00\u4e2a\u67e5\u8be2\n  let qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetInt(1, 1)\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'test\')\n\n  }\n  //\u9884\u5904\u7406\u67e5\u8be2\n  let data = jdbc.psqlQuery()\n  logd(data);\n\n  //\u5173\u95ed\u9884\u5904\u7406\u8bed\u53e5\n  jdbc.psqlClose()\n  //\u63d2\u5165\u6570\u636e\n  q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"\n  qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n    //\u8bbe\u7f6e\u65f6\u95f4\u6233\n    jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n  }\n  rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  jdbc.connectionClose()\n}\nmain();\n')),(0,r.kt)("h2",{id:"jdbcpsqlsetstring-\u8bbe\u7f6e\u5b57\u7b26\u4e32\u53c2\u6570"},"jdbc.psqlSetString \u8bbe\u7f6e\u5b57\u7b26\u4e32\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9884\u5904\u7406\u8bed\u53e5\u8bbe\u7f6e\u5b57\u7b26\u4e32\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param index \u6761\u4ef6\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"@param input \u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "select * from table1 where id=? or uname=?"\n  //\u521b\u5efa\u4e00\u4e2a\u67e5\u8be2\n  let qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetInt(1, 1)\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'test\')\n\n  }\n  //\u9884\u5904\u7406\u67e5\u8be2\n  let data = jdbc.psqlQuery()\n  logd(data);\n\n  //\u5173\u95ed\u9884\u5904\u7406\u8bed\u53e5\n  jdbc.psqlClose()\n\n  //\u63d2\u5165\u6570\u636e\n  q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"\n  qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n    //\u8bbe\u7f6e\u65f6\u95f4\u6233\n    jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n  }\n  rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  jdbc.connectionClose()\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"jdbcpsqlsetlong-\u8bbe\u7f6elong\u6761\u4ef6\u53c2\u6570"},"jdbc.psqlSetLong \u8bbe\u7f6elong\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9884\u5904\u7406\u8bed\u53e5\u8bbe\u7f6elong\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param index \u6761\u4ef6\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"@param input long\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n   jdbc.psqlSetLong(1,1000);\n}\nmain();\n")),(0,r.kt)("h2",{id:"jdbcpsqlsetint-\u8bbe\u7f6eint\u6761\u4ef6\u53c2\u6570"},"jdbc.psqlSetInt \u8bbe\u7f6eint\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@param index \u6761\u4ef6\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"@param input int\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "select * from table1 where id=? or uname=?"\n  //\u521b\u5efa\u4e00\u4e2a\u67e5\u8be2\n  let qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetInt(1, 1)\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'test\')\n\n  }\n  //\u9884\u5904\u7406\u67e5\u8be2\n  let data = jdbc.psqlQuery()\n  logd(data);\n\n  //\u5173\u95ed\u9884\u5904\u7406\u8bed\u53e5\n  jdbc.psqlClose()\n\n  //\u63d2\u5165\u6570\u636e\n  q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"\n  qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n    //\u8bbe\u7f6e\u65f6\u95f4\u6233\n    jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n  }\n  rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  jdbc.connectionClose()\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"jdbcpsqlsetfloat-\u8bbe\u7f6efloat\u6761\u4ef6\u53c2\u6570"},"jdbc.psqlSetFloat \u8bbe\u7f6efloat\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9884\u5904\u7406\u8bed\u53e5\u8bbe\u7f6efloat\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param index \u6761\u4ef6\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"@param input float\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  jdbc.psqlSetFloat(1, 1.0)\n}\n\nmain();\n")),(0,r.kt)("h2",{id:"jdbcpsqlsetboolean-\u8bbe\u7f6eboolean\u6761\u4ef6\u53c2\u6570"},"jdbc.psqlSetBoolean \u8bbe\u7f6eboolean\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6eboolean\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param index \u6761\u4ef6\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"@param input boolean\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  jdbc.psqlSetBoolean(1, true)\n}\n\nmain();\n")),(0,r.kt)("h2",{id:"jdbcpsqlsetdate-\u8bbe\u7f6e\u65e5\u671f\u6761\u4ef6\u53c2\u6570"},"jdbc.psqlSetDate \u8bbe\u7f6e\u65e5\u671f\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9884\u5904\u7406\u8bed\u53e5\u8bbe\u7f6e\u65e5\u671f\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param index \u6761\u4ef6\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"@param dataFormat \u65e5\u671f\u683c\u5f0f\uff0c\u4f8b\u5982 yyyy-MM-dd"),(0,r.kt)("li",{parentName:"ul"},"@param input \u65e5\u671f\u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "select * from table1 where id=? or uname=?"\n  //\u521b\u5efa\u4e00\u4e2a\u67e5\u8be2\n  let qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetInt(1, 1)\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'test\')\n\n  }\n  //\u9884\u5904\u7406\u67e5\u8be2\n  let data = jdbc.psqlQuery()\n  logd(data);\n\n  //\u5173\u95ed\u9884\u5904\u7406\u8bed\u53e5\n  jdbc.psqlClose()\n\n  //\u63d2\u5165\u6570\u636e\n  q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"\n  qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n    //\u8bbe\u7f6e\u65e5\u671f\n    jdbc.psqlSetDate(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n  }\n  rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  jdbc.connectionClose()\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"jdbcpsqlsettimestamp-\u8bbe\u7f6e\u65f6\u95f4\u6233\u6761\u4ef6\u53c2\u6570"},"jdbc.psqlSetTimestamp \u8bbe\u7f6e\u65f6\u95f4\u6233\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9884\u5904\u7406\u8bed\u53e5\u8bbe\u7f6e\u65f6\u95f4\u6233\u6761\u4ef6\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param index \u6761\u4ef6\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"@param dataFormat \u65e5\u671f\u683c\u5f0f\uff0c\u4f8b\u5982 yyyy-MM-dd"),(0,r.kt)("li",{parentName:"ul"},"@param input \u65e5\u671f\u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "select * from table1 where id=? or uname=?"\n  //\u521b\u5efa\u4e00\u4e2a\u67e5\u8be2\n  let qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetInt(1, 1)\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'test\')\n\n  }\n  //\u9884\u5904\u7406\u67e5\u8be2\n  let data = jdbc.psqlQuery()\n  logd(data);\n\n  //\u5173\u95ed\u9884\u5904\u7406\u8bed\u53e5\n  jdbc.psqlClose()\n\n  //\u63d2\u5165\u6570\u636e\n  q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"\n  qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n    //\u8bbe\u7f6e\u65f6\u95f4\u6233\n    jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n  }\n  rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  jdbc.psqlClose()\n  jdbc.connectionClose()\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"jdbcpsqladdbatch-\u6279\u91cf\u63d0\u4ea4"},"jdbc.psqlAddBatch \u6279\u91cf\u63d0\u4ea4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u8bbe\u5b9a\u4e3a\u6279\u91cf\u63d0\u4ea4"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740 ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n\n\n  //\u63d2\u5165\u6570\u636e\n  let q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"\n  let qur = jdbc.createPreparedStatement(q)\n\n\n  if (qur) {\n\n    for (var i = 0; i < 10; i++) {\n      //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n      jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n      //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n      jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n      //\u8bbe\u7f6e\u65f6\u95f4\u6233\n      jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n      r = jdbc.psqlAddBatch()\n      if (!r) {\n        logd(jdbc.getLastError());\n      }\n    }\n  }\n\n  rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  jdbc.psqlClose()\n  jdbc.connectionClose()\n\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"jdbcpsqlexecuteupdate-\u6267\u884c\u66f4\u65b0\u64cd\u4f5c"},"jdbc.psqlExecuteUpdate \u6267\u884c\u66f4\u65b0\u64cd\u4f5c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u66f4\u65b0\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"@return {int} \u66f4\u65b0\u5f71\u54cd\u5230\u884c\u6570\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740  ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n\n  //\u66f4\u65b0\u6570\u636e\n  let q = "update table1 set uname=?,ucontent=?,create_time=? where id=?;"\n  let qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n    //\u8bbe\u7f6e\u65f6\u95f4\u6233\n    jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n    //\u8bbe\u7f6eid\n    jdbc.psqlSetInt(4, 1)\n  }\n  let rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  //\u63d2\u5165\u6570\u636e\n  q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"\n  qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n    //\u8bbe\u7f6e\u65f6\u95f4\u6233\n    jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n  }\n  rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  jdbc.psqlClose()\n  jdbc.connectionClose()\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"jdbcpsqlclose-\u7ed3\u675f\u9884\u5904\u7406\u8bed\u53e5"},"jdbc.psqlClose \u7ed3\u675f\u9884\u5904\u7406\u8bed\u53e5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ed3\u675f\u9884\u5904\u7406\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  jdbc.psqlClose()\n}\n\nmain();\n")),(0,r.kt)("h2",{id:"jdbcconnectionclose-\u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5"},"jdbc.connectionClose \u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed\u6570\u636e\u5e93\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //mysql \u7684\u5730\u5740  ip:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\n  let mysqlUrl = "jdbc:mysql://192.168.0.3:3306/test?characterEncoding=utf8&autoReconnect=true"\n  let inited = jdbc.init("com.mysql.cj.jdbc.Driver", mysqlUrl, "root", "root123456");\n  logd("inited " + inited);\n\n  let conn = jdbc.connect()\n  logd("connect " + conn);\n  if (!conn) {\n    logd(jdbc.getLastError());\n    exit()\n  }\n\n  //\u67e5\u8be2\u8bed\u53e5\n  let q = "select * from table1 where id=? or uname=?"\n  //\u521b\u5efa\u4e00\u4e2a\u67e5\u8be2\n  let qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetInt(1, 1)\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'test\')\n\n  }\n  //\u9884\u5904\u7406\u67e5\u8be2\n  let data = jdbc.psqlQuery()\n  logd(data);\n\n  //\u5173\u95ed\u9884\u5904\u7406\u8bed\u53e5\n  jdbc.psqlClose()\n\n  //\u63d2\u5165\u6570\u636e\n  q = "insert table1(`uname`,`ucontent`,`create_time`)values(?,?,?);"\n  qur = jdbc.createPreparedStatement(q)\n  if (qur) {\n    //\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7d22\u5f15\u7684\u53c2\u6570\n    jdbc.psqlSetString(1, "\u6211\u662f\u540d\u79f0")\n    //\u8bbe\u7f6e\u7b2c\u4e8c\u4e2a\u7d22\u5f15\u53c2\u6570\n    jdbc.psqlSetString(2, \'\u6211\u662f\u5185\u5bb9\')\n    //\u8bbe\u7f6e\u65f6\u95f4\u6233\n    jdbc.psqlSetTimestamp(3, "yyyy-MM-dd hh:mm:ss", "2020-10-02 12:02:11")\n  }\n  rowcount = jdbc.psqlExecuteUpdate();\n  logi("\u63d2\u5165\u8bed\u53e5\u6267\u884c\u5f71\u54cd\u884c\u6570 -" + rowcount);\n  if (rowcount <= 0) {\n    loge("\u63d2\u5165\u9519\u8bef: " + jdbc.getLastError())\n  }\n  jdbc.psqlClose()\n  jdbc.connectionClose()\n}\n\nmain();\n')))}u.isMDXComponent=!0}}]);