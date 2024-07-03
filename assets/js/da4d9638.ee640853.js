"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[5790],{5680:(e,a,l)=>{l.d(a,{xA:()=>d,yg:()=>g});var n=l(6540);function t(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function r(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?r(Object(l),!0).forEach((function(a){t(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function p(e,a){if(null==e)return{};var l,n,t=function(e,a){if(null==e)return{};var l,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],a.indexOf(l)>=0||(t[l]=e[l]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var u=n.createContext({}),s=function(e){var a=n.useContext(u),l=a;return e&&(l="function"==typeof e?e(a):i(i({},a),e)),l},d=function(e){var a=s(e.components);return n.createElement(u.Provider,{value:a},e.children)},c="mdxType",o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var l=e.components,t=e.mdxType,r=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(l),m=t,g=c["".concat(u,".").concat(m)]||c[m]||o[m]||r;return l?n.createElement(g,i(i({ref:a},d),{},{components:l})):n.createElement(g,i({ref:a},d))}));function g(e,a){var l=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=l.length,i=new Array(r);i[0]=m;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p[c]="string"==typeof e?e:t,i[1]=p;for(var s=2;s<r;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},422:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=l(8168),t=(l(6540),l(5680));const r={title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570"]},i=void 0,p={unversionedId:"zh-cn/funcs/file-api",id:"zh-cn/funcs/file-api",title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570",source:"@site/docs/zh-cn/funcs/file-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/file-api",permalink:"/docs/zh-cn/funcs/file-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570"]},sidebar:"docs",previous:{title:"\u60ac\u6d6e\u7a97\u51fd\u6570",permalink:"/docs/zh-cn/funcs/floaty-api"},next:{title:"Storage\u5b58\u50a8\u51fd\u6570",permalink:"/docs/zh-cn/funcs/storage-api"}},u={},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"file.readFile \u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32",id:"filereadfile-\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32",level:2},{value:"file.deleteLine \u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c",id:"filedeleteline-\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c",level:2},{value:"file.listDir \u5217\u51fa\u6240\u6709\u6587\u4ef6",id:"filelistdir-\u5217\u51fa\u6240\u6709\u6587\u4ef6",level:2},{value:"file.writeFile \u5199\u5165\u6587\u4ef6",id:"filewritefile-\u5199\u5165\u6587\u4ef6",level:2},{value:"file.create \u521b\u5efa",id:"filecreate-\u521b\u5efa",level:2},{value:"file.mkdirs \u521b\u5efa\u6587\u4ef6\u5939",id:"filemkdirs-\u521b\u5efa\u6587\u4ef6\u5939",level:2},{value:"file.readAssets \u8bfb\u53d6assets",id:"filereadassets-\u8bfb\u53d6assets",level:2},{value:"file.deleteAllFile \u5220\u9664",id:"filedeleteallfile-\u5220\u9664",level:2},{value:"file.appendLine \u8ffd\u52a0\u5b57\u7b26\u4e32",id:"fileappendline-\u8ffd\u52a0\u5b57\u7b26\u4e32",level:2},{value:"file.readLine \u8bfb\u53d6\u4e00\u884c",id:"filereadline-\u8bfb\u53d6\u4e00\u884c",level:2},{value:"file.readAllLines \u8bfb\u53d6\u6240\u6709\u884c",id:"filereadalllines-\u8bfb\u53d6\u6240\u6709\u884c",level:2},{value:"file.exists \u662f\u5426\u5b58\u5728",id:"fileexists-\u662f\u5426\u5b58\u5728",level:2},{value:"file.copy \u6587\u4ef6\u590d\u5236",id:"filecopy-\u6587\u4ef6\u590d\u5236",level:2}],d={toc:s},c="wrapper";function o(e){let{components:a,...l}=e;return(0,t.yg)(c,(0,n.A)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u6587\u4ef6\u4fe1\u606f\u76f8\u5173\u8054"),(0,t.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662ffile\uff0c\u4f8b\u5982 file.readFile()\u8fd9\u6837\u8c03\u7528")),(0,t.yg)("h2",{id:"filereadfile-\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"},"file.readFile \u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5c06\u6587\u4ef6\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var data = file.readFile("/sdcard/test.txt");\n  toast(data);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filedeleteline-\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c"},"file.deleteLine \u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c\u6216\u8005\u6839\u636e\u5305\u542b\u6761\u4ef6\u5220\u9664"),(0,t.yg)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883: \u65e0\u9650\u5236"),(0,t.yg)("li",{parentName:"ul"},"\u517c\u5bb9\u7248\u672c: Android 4.4 \u4ee5\u4e0a"),(0,t.yg)("li",{parentName:"ul"}),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@param line \u884c\u6570\uff0c\u5982\u679c\u662f-1 \u4ee3\u8868\u8fd9\u4e2a\u6761\u4ef6\u4e0d\u751f\u6548"),(0,t.yg)("li",{parentName:"ul"},"@param contains \u5305\u542b\u67d0\u4e2a\u5b57\u7b26\u4e32\u5c31\u5220\u9664\uff0c\u5982\u679c\u4e3anull\u4ee3\u8868\u8fd9\u4e2a\u6761\u4ef6\u4e0d\u751f\u6548"),(0,t.yg)("li",{parentName:"ul"}),(0,t.yg)("li",{parentName:"ul"},"@return {bool} true \u6210\u529f false \u5931\u8d25")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //\u5220\u9664\u5305\u542b \u65f6\u95f4 \u5b57\u7b26\u4e32\u7684\u884c\n  let r = file.deleteLine("/sdcard/a.txt", -1, "\u65f6\u95f4");\n  logd("r " + r);\n  //\u5220\u9664\u7b2c3\u884c\n  r = file.deleteLine("/sdcard/a.txt", 3, null);\n  logd("r " + r);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filelistdir-\u5217\u51fa\u6240\u6709\u6587\u4ef6"},"file.listDir \u5217\u51fa\u6240\u6709\u6587\u4ef6"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5217\u51fa\u6587\u4ef6\u4e0b\u7684\u6240\u6709\u6587\u4ef6"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u8def\u5f84\u5b57\u7b26\u4e32\u6570\u7ec4")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var data = file.listDir("/sdcard/");\n  for (var i = 0; i < data.length; i++) {\n    logd("path " + data[i]);\n  }\n\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filewritefile-\u5199\u5165\u6587\u4ef6"},"file.writeFile \u5199\u5165\u6587\u4ef6"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u5b58\u50a8\u5230\u6587\u4ef6\u4e2d"),(0,t.yg)("li",{parentName:"ul"},"@param data \u5b57\u7b26\u4e32 \u6570\u636e"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var data = "Test";\n  file.writeFile(data, "/sdcard/test.txt");\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filecreate-\u521b\u5efa"},"file.create \u521b\u5efa"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u521b\u5efa\u6210\u529f")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var create = file.create("/sdcard/test.txt");\n  toast(create);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filemkdirs-\u521b\u5efa\u6587\u4ef6\u5939"},"file.mkdirs \u521b\u5efa\u6587\u4ef6\u5939"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6\u5939"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var t = file.mkdirs("/sdcard/testdir/");\n  toast(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filereadassets-\u8bfb\u53d6assets"},"file.readAssets \u8bfb\u53d6assets"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4eceAPK\u7684assets\u6587\u4ef6\u5939\u4e2d\u8bfb\u53d6\u6570\u636e\u4e3a\u5b57\u7b26\u4e32"),(0,t.yg)("li",{parentName:"ul"},"@param path assets\u6587\u4ef6\u5939\u4e2d\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u4f8b\u5982 data/a.txt"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var data = file.readAssets("data/test.txt");\n  toast(data);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filedeleteallfile-\u5220\u9664"},"file.deleteAllFile \u5220\u9664"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5220\u9664\u6240\u6709\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u6216\u8005\u6587\u4ef6\u8def\u5f84")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  file.deleteAllFile("data/test.txt");\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"fileappendline-\u8ffd\u52a0\u5b57\u7b26\u4e32"},"file.appendLine \u8ffd\u52a0\u5b57\u7b26\u4e32"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5199\u5165\u4e00\u884c\u5230\u6587\u4ef6\u4e2d,\u8ffd\u52a0\u6a21\u5f0f"),(0,t.yg)("li",{parentName:"ul"},"@param data \u884c\u6570\u636e"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u6216\u8005\u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true\u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var data = "sss";\n  var t = file.appendLine(data, "/sdcard/test.txt");\n  toast(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filereadline-\u8bfb\u53d6\u4e00\u884c"},"file.readLine \u8bfb\u53d6\u4e00\u884c"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8bfb\u53d6\u4e00\u884c\u6570\u636e\uff0c\u5982\u679c\u884c\u53f7\u4e0d\u5bf9\uff0c\u8fd4\u56de\u7684\u662f\u7a7a"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@param lineNo \u884c\u53f7"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32 \u8fd4\u56de\u4e00\u884c\u5b57\u7b26\u4e32")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var t = file.readLine("/sdcard/test.txt", 1);\n  toast(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filereadalllines-\u8bfb\u53d6\u6240\u6709\u884c"},"file.readAllLines \u8bfb\u53d6\u6240\u6709\u884c"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8bfb\u53d6\u6240\u6709\u6570\u636e"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32\u6570\u7ec4|null")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var t = file.readAllLines("/sdcard/test.txt");\n  toast(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"fileexists-\u662f\u5426\u5b58\u5728"},"file.exists \u662f\u5426\u5b58\u5728"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939\u662f\u5426\u5b58\u5728"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var t = file.exists("/sdcard/testdir/");\n  toast(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filecopy-\u6587\u4ef6\u590d\u5236"},"file.copy \u6587\u4ef6\u590d\u5236"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u590d\u5236\u6587\u4ef6"),(0,t.yg)("li",{parentName:"ul"}),(0,t.yg)("li",{parentName:"ul"},"@param src \u6e90\u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@param dest \u76ee\u6807\u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var t = file.copy("/sdcard/a.png", "/sdcard/b.png");\n  toast(t);\n}\n\nmain();\n')))}o.isMDXComponent=!0}}]);