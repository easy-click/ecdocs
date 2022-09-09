"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[3061],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=o(a),m=l,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6842:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return s}});var n=a(3117),l=a(102),r=(a(7294),a(3905)),i=["components"],u={title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570"]},p=void 0,o={unversionedId:"zh-cn/funcs/file-api",id:"zh-cn/funcs/file-api",title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570",source:"@site/docs/zh-cn/funcs/file-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/file-api",permalink:"/en/docs/zh-cn/funcs/file-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570"]},sidebar:"docs",previous:{title:"\u60ac\u6d6e\u7a97\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/floaty-api"},next:{title:"Storage\u5b58\u50a8\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/storage-api"}},c={},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"file.readFile \u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32",id:"filereadfile-\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32",level:2},{value:"file.deleteLine \u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c",id:"filedeleteline-\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c",level:2},{value:"file.listDir \u5217\u51fa\u6240\u6709\u6587\u4ef6",id:"filelistdir-\u5217\u51fa\u6240\u6709\u6587\u4ef6",level:2},{value:"file.writeFile \u5199\u5165\u6587\u4ef6",id:"filewritefile-\u5199\u5165\u6587\u4ef6",level:2},{value:"file.create \u521b\u5efa",id:"filecreate-\u521b\u5efa",level:2},{value:"file.mkdirs \u521b\u5efa\u6587\u4ef6\u5939",id:"filemkdirs-\u521b\u5efa\u6587\u4ef6\u5939",level:2},{value:"file.readAssets \u8bfb\u53d6assets",id:"filereadassets-\u8bfb\u53d6assets",level:2},{value:"file.deleteAllFile \u5220\u9664",id:"filedeleteallfile-\u5220\u9664",level:2},{value:"file.appendLine \u8ffd\u52a0\u5b57\u7b26\u4e32",id:"fileappendline-\u8ffd\u52a0\u5b57\u7b26\u4e32",level:2},{value:"file.readLine \u8bfb\u53d6\u4e00\u884c",id:"filereadline-\u8bfb\u53d6\u4e00\u884c",level:2},{value:"file.readAllLines \u8bfb\u53d6\u6240\u6709\u884c",id:"filereadalllines-\u8bfb\u53d6\u6240\u6709\u884c",level:2},{value:"file.exists \u662f\u5426\u5b58\u5728",id:"fileexists-\u662f\u5426\u5b58\u5728",level:2},{value:"file.copy \u6587\u4ef6\u590d\u5236",id:"filecopy-\u6587\u4ef6\u590d\u5236",level:2}],d={toc:s};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u6587\u4ef6\u4fe1\u606f\u76f8\u5173\u8054"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662ffile\uff0c\u4f8b\u5982 file.readFile()\u8fd9\u6837\u8c03\u7528")),(0,r.kt)("h2",{id:"filereadfile-\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"},"file.readFile \u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u6587\u4ef6\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var data = file.readFile("/sdcard/test.txt");\n    toast(data);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"filedeleteline-\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c"},"file.deleteLine \u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c\u6216\u8005\u6839\u636e\u5305\u542b\u6761\u4ef6\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883: \u65e0\u9650\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u7248\u672c: Android 4.4 \u4ee5\u4e0a"),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@param line \u884c\u6570\uff0c\u5982\u679c\u662f-1 \u4ee3\u8868\u8fd9\u4e2a\u6761\u4ef6\u4e0d\u751f\u6548"),(0,r.kt)("li",{parentName:"ul"},"@param contains \u5305\u542b\u67d0\u4e2a\u5b57\u7b26\u4e32\u5c31\u5220\u9664\uff0c\u5982\u679c\u4e3anull\u4ee3\u8868\u8fd9\u4e2a\u6761\u4ef6\u4e0d\u751f\u6548"),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u6210\u529f false \u5931\u8d25")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n  //\u5220\u9664\u5305\u542b \u65f6\u95f4 \u5b57\u7b26\u4e32\u7684\u884c\n  let r = file.deleteLine("/sdcard/a.txt",-1,"\u65f6\u95f4");\n  logd("r "+r);\n  //\u5220\u9664\u7b2c3\u884c\n   r = file.deleteLine("/sdcard/a.txt",3,null);\n  logd("r "+r);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"filelistdir-\u5217\u51fa\u6240\u6709\u6587\u4ef6"},"file.listDir \u5217\u51fa\u6240\u6709\u6587\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5217\u51fa\u6587\u4ef6\u4e0b\u7684\u6240\u6709\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@return \u8def\u5f84\u5b57\u7b26\u4e32\u6570\u7ec4")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var data = file.listDir("/sdcard/");\n    for(var i = 0; i < data.length; i++) {\n        logd("path "+data[i]);  \n    }\n\n}\nmain();\n'))),(0,r.kt)("h2",{id:"filewritefile-\u5199\u5165\u6587\u4ef6"},"file.writeFile \u5199\u5165\u6587\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u5b58\u50a8\u5230\u6587\u4ef6\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"@param data \u5b57\u7b26\u4e32 \u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var data="Test";\n    file.writeFile(data,"/sdcard/test.txt");\n}\nmain();\n'))),(0,r.kt)("h2",{id:"filecreate-\u521b\u5efa"},"file.create \u521b\u5efa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u521b\u5efa\u6210\u529f")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var create=file.create("/sdcard/test.txt");\n    toast(create);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"filemkdirs-\u521b\u5efa\u6587\u4ef6\u5939"},"file.mkdirs \u521b\u5efa\u6587\u4ef6\u5939"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6\u5939"),(0,r.kt)("li",{parentName:"ul"},"@param path   \u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var t=file.mkdirs("/sdcard/testdir/");\n    toast(t);\n}\nmain();\n'))))),(0,r.kt)("h2",{id:"filereadassets-\u8bfb\u53d6assets"},"file.readAssets \u8bfb\u53d6assets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4eceAPK\u7684assets\u6587\u4ef6\u5939\u4e2d\u8bfb\u53d6\u6570\u636e\u4e3a\u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"@param path assets\u6587\u4ef6\u5939\u4e2d\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u4f8b\u5982 data/a.txt"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var data=file.readAssets("data/test.txt");\n    toast(data);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"filedeleteallfile-\u5220\u9664"},"file.deleteAllFile \u5220\u9664"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u6240\u6709\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939"),(0,r.kt)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u6216\u8005\u6587\u4ef6\u8def\u5f84")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    file.deleteAllFile("data/test.txt");\n}\nmain();\n'))),(0,r.kt)("h2",{id:"fileappendline-\u8ffd\u52a0\u5b57\u7b26\u4e32"},"file.appendLine \u8ffd\u52a0\u5b57\u7b26\u4e32"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5199\u5165\u4e00\u884c\u5230\u6587\u4ef6\u4e2d,\u8ffd\u52a0\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"@param data \u884c\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u6216\u8005\u6587\u4ef6\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true\u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var data="sss";\n    var t=file.appendLine(data,"/sdcard/test.txt");\n    toast(t);\n}\nmain();\n'))))),(0,r.kt)("h2",{id:"filereadline-\u8bfb\u53d6\u4e00\u884c"},"file.readLine \u8bfb\u53d6\u4e00\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u4e00\u884c\u6570\u636e\uff0c\u5982\u679c\u884c\u53f7\u4e0d\u5bf9\uff0c\u8fd4\u56de\u7684\u662f\u7a7a"),(0,r.kt)("li",{parentName:"ul"},"@param path   \u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@param lineNo \u884c\u53f7"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32 \u8fd4\u56de\u4e00\u884c\u5b57\u7b26\u4e32",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var t=file.readLine("/sdcard/test.txt",1);\n    toast(t);\n}\nmain();\n'))))),(0,r.kt)("h2",{id:"filereadalllines-\u8bfb\u53d6\u6240\u6709\u884c"},"file.readAllLines \u8bfb\u53d6\u6240\u6709\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u6240\u6709\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"@param path   \u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32\u6570\u7ec4|null",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var t=file.readAllLines("/sdcard/test.txt");\n    toast(t);\n}\nmain();\n'))))),(0,r.kt)("h2",{id:"fileexists-\u662f\u5426\u5b58\u5728"},"file.exists \u662f\u5426\u5b58\u5728"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939\u662f\u5426\u5b58\u5728"),(0,r.kt)("li",{parentName:"ul"},"@param path   \u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var t=file.exists("/sdcard/testdir/");\n    toast(t);\n}\nmain();\n'))))),(0,r.kt)("h2",{id:"filecopy-\u6587\u4ef6\u590d\u5236"},"file.copy \u6587\u4ef6\u590d\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u590d\u5236\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"},"@param src \u6e90\u6587\u4ef6\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@param dest \u76ee\u6807\u6587\u4ef6\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var t=file.copy("/sdcard/a.png","/sdcard/b.png");\n    toast(t);\n}\nmain();\n'))))))}m.isMDXComponent=!0}}]);