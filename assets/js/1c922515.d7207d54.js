"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[2527],{5680:(e,a,l)=>{l.d(a,{xA:()=>d,yg:()=>m});var n=l(6540);function t(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function i(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?i(Object(l),!0).forEach((function(a){t(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function p(e,a){if(null==e)return{};var l,n,t=function(e,a){if(null==e)return{};var l,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],a.indexOf(l)>=0||(t[l]=e[l]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var u=n.createContext({}),g=function(e){var a=n.useContext(u),l=a;return e&&(l="function"==typeof e?e(a):r(r({},a),e)),l},d=function(e){var a=g(e.components);return n.createElement(u.Provider,{value:a},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var l=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),o=g(l),f=t,m=o["".concat(u,".").concat(f)]||o[f]||c[f]||i;return l?n.createElement(m,r(r({ref:a},d),{},{components:l})):n.createElement(m,r({ref:a},d))}));function m(e,a){var l=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=l.length,r=new Array(i);r[0]=f;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p[o]="string"==typeof e?e:t,r[1]=p;for(var g=2;g<i;g++)r[g]=l[g];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}f.displayName="MDXCreateElement"},5003:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var n=l(8168),t=(l(6540),l(5680));const i={title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u6587\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u6587\u4ef6\u51fd\u6570"]},r=void 0,p={unversionedId:"zh-cn/funcs/file-api",id:"zh-cn/funcs/file-api",title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u6587\u4ef6\u51fd\u6570",source:"@site/iostjdocs/zh-cn/funcs/file-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/file-api",permalink:"/iostjdocs/zh-cn/funcs/file-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u6587\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u6587\u4ef6\u51fd\u6570"]},sidebar:"iostjdocs",previous:{title:"\u8bbe\u5907\u51fd\u6570",permalink:"/iostjdocs/zh-cn/funcs/device-api"},next:{title:"\u7f51\u7edc\u51fd\u6570",permalink:"/iostjdocs/zh-cn/funcs/http-api"}},u={},g=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"file.getInternalDir \u83b7\u53d6\u5185\u90e8\u5b58\u50a8\u5730\u5740",id:"filegetinternaldir-\u83b7\u53d6\u5185\u90e8\u5b58\u50a8\u5730\u5740",level:2},{value:"file.getSandBoxDir \u83b7\u53d6\u6c99\u76d2\u7684\u6587\u4ef6\u5939\u8def\u5f84",id:"filegetsandboxdir-\u83b7\u53d6\u6c99\u76d2\u7684\u6587\u4ef6\u5939\u8def\u5f84",level:2},{value:"file.getSandBoxFilePath \u83b7\u53d6\u6c99\u76d2\u4e2d\u7684\u6587\u4ef6\u8def\u5f84",id:"filegetsandboxfilepath-\u83b7\u53d6\u6c99\u76d2\u4e2d\u7684\u6587\u4ef6\u8def\u5f84",level:2},{value:"file.readFile \u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32",id:"filereadfile-\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32",level:2},{value:"file.deleteLine \u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c",id:"filedeleteline-\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c",level:2},{value:"file.listDir \u5217\u51fa\u6240\u6709\u6587\u4ef6",id:"filelistdir-\u5217\u51fa\u6240\u6709\u6587\u4ef6",level:2},{value:"file.writeFile \u5199\u5165\u6587\u4ef6",id:"filewritefile-\u5199\u5165\u6587\u4ef6",level:2},{value:"file.create \u521b\u5efa",id:"filecreate-\u521b\u5efa",level:2},{value:"file.mkdirs \u521b\u5efa\u6587\u4ef6\u5939",id:"filemkdirs-\u521b\u5efa\u6587\u4ef6\u5939",level:2},{value:"file.deleteAllFile \u5220\u9664",id:"filedeleteallfile-\u5220\u9664",level:2},{value:"file.appendLine \u8ffd\u52a0\u5b57\u7b26\u4e32",id:"fileappendline-\u8ffd\u52a0\u5b57\u7b26\u4e32",level:2},{value:"file.readLine \u8bfb\u53d6\u4e00\u884c",id:"filereadline-\u8bfb\u53d6\u4e00\u884c",level:2},{value:"file.readAllLines \u8bfb\u53d6\u6240\u6709\u884c",id:"filereadalllines-\u8bfb\u53d6\u6240\u6709\u884c",level:2},{value:"file.exists \u662f\u5426\u5b58\u5728",id:"fileexists-\u662f\u5426\u5b58\u5728",level:2},{value:"file.copy \u6587\u4ef6\u590d\u5236",id:"filecopy-\u6587\u4ef6\u590d\u5236",level:2}],d={toc:g},o="wrapper";function c(e){let{components:a,...l}=e;return(0,t.yg)(o,(0,n.A)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u6587\u4ef6\u4fe1\u606f\u76f8\u5173\u8054"),(0,t.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662ffile\uff0c\u4f8b\u5982 file.readFile()\u8fd9\u6837\u8c03\u7528"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u83b7\u53d6\u8bbe\u5907\u6c99\u76d2\u6587\u4ef6\u5939\u4e2d\u6587\u4ef6\u8def\u5f84 \u8bf7\u4f7f\u7528 file.getSandBoxFilePath\u8fd9\u4e2a\u51fd\u6570")),(0,t.yg)("h2",{id:"filegetinternaldir-\u83b7\u53d6\u5185\u90e8\u5b58\u50a8\u5730\u5740"},"file.getInternalDir \u83b7\u53d6\u5185\u90e8\u5b58\u50a8\u5730\u5740"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u5185\u90e8\u5b58\u50a8\u5730\u5740"),(0,t.yg)("li",{parentName:"ul"},"@param type\uff0cdocuments,library,temp,libraryCaches\uff0cdocuments\u6587\u4ef6\u5939\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7\u7231\u601d\u5bfc\u51fa"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  var data = file.getInternalDir("documents");\n  logd(data);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filegetsandboxdir-\u83b7\u53d6\u6c99\u76d2\u7684\u6587\u4ef6\u5939\u8def\u5f84"},"file.getSandBoxDir \u83b7\u53d6\u6c99\u76d2\u7684\u6587\u4ef6\u5939\u8def\u5f84"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u5f53\u524d\u8bbe\u5907\u6c99\u76d2\u7684\u6587\u4ef6\u5939\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function main() {\n  var data = file.getSandBoxDir();\n  logd(data);\n}\n\nmain();\n")),(0,t.yg)("h2",{id:"filegetsandboxfilepath-\u83b7\u53d6\u6c99\u76d2\u4e2d\u7684\u6587\u4ef6\u8def\u5f84"},"file.getSandBoxFilePath \u83b7\u53d6\u6c99\u76d2\u4e2d\u7684\u6587\u4ef6\u8def\u5f84"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u62fc\u63a5\u51fa\u4e00\u4e2a\u5e26\u6c99\u76d2\u8def\u5f84\u7684\u6587\u4ef6\u5730\u5740"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  var data = file.getSandBoxFilePath("a.txt");\n  logd(data);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filereadfile-\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"},"file.readFile \u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5c06\u6587\u4ef6\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p = file.getSandBoxFilePath("a.txt");\n  var data = file.readFile(p);\n  logd(data);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filedeleteline-\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c"},"file.deleteLine \u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c\u6216\u8005\u6839\u636e\u5305\u542b\u6761\u4ef6\u5220\u9664"),(0,t.yg)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883: \u65e0\u9650\u5236"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@param line \u884c\u6570\uff0c\u5982\u679c\u662f-1 \u4ee3\u8868\u8fd9\u4e2a\u6761\u4ef6\u4e0d\u751f\u6548"),(0,t.yg)("li",{parentName:"ul"},"@param contains \u5305\u542b\u67d0\u4e2a\u5b57\u7b26\u4e32\u5c31\u5220\u9664\uff0c\u5982\u679c\u4e3anull\u4ee3\u8868\u8fd9\u4e2a\u6761\u4ef6\u4e0d\u751f\u6548"),(0,t.yg)("li",{parentName:"ul"},"@return {bool} true \u6210\u529f false \u5931\u8d25")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p = file.getSandBoxFilePath("a.txt");\n  //\u5220\u9664\u5305\u542b \u65f6\u95f4 \u5b57\u7b26\u4e32\u7684\u884c\n  let r = file.deleteLine(p, -1, "\u65f6\u95f4");\n  logd("r " + r);\n  //\u5220\u9664\u7b2c3\u884c\n  r = file.deleteLine(p, 3, null);\n  logd("r " + r);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filelistdir-\u5217\u51fa\u6240\u6709\u6587\u4ef6"},"file.listDir \u5217\u51fa\u6240\u6709\u6587\u4ef6"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5217\u51fa\u6587\u4ef6\u4e0b\u7684\u6240\u6709\u6587\u4ef6"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u8def\u5f84\u5b57\u7b26\u4e32\u6570\u7ec4")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p = file.getSandBoxDir();\n  var data = file.listDir(p);\n  for (var i = 0; i < data.length; i++) {\n    logd("path " + data[i]);\n  }\n\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filewritefile-\u5199\u5165\u6587\u4ef6"},"file.writeFile \u5199\u5165\u6587\u4ef6"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u5b58\u50a8\u5230\u6587\u4ef6\u4e2d"),(0,t.yg)("li",{parentName:"ul"},"@param data \u5b57\u7b26\u4e32 \u6570\u636e"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var data = "Test";\n  let p = file.getSandBoxFilePath("a.txt");\n  file.writeFile(data, p);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filecreate-\u521b\u5efa"},"file.create \u521b\u5efa"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u521b\u5efa\u6210\u529f")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p = file.getSandBoxFilePath("a.txt");\n  var create = file.create(p);\n  logd(create);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filemkdirs-\u521b\u5efa\u6587\u4ef6\u5939"},"file.mkdirs \u521b\u5efa\u6587\u4ef6\u5939"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6\u5939"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p = file.getSandBoxDir();\n  p = p +"/ad"\n  var t = file.mkdirs(p);\n  logd(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filedeleteallfile-\u5220\u9664"},"file.deleteAllFile \u5220\u9664"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5220\u9664\u6240\u6709\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u6216\u8005\u6587\u4ef6\u8def\u5f84")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p = file.getSandBoxFilePath("a.txt");\n  file.deleteAllFile(p);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"fileappendline-\u8ffd\u52a0\u5b57\u7b26\u4e32"},"file.appendLine \u8ffd\u52a0\u5b57\u7b26\u4e32"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5199\u5165\u4e00\u884c\u5230\u6587\u4ef6\u4e2d,\u8ffd\u52a0\u6a21\u5f0f"),(0,t.yg)("li",{parentName:"ul"},"@param data \u884c\u6570\u636e"),(0,t.yg)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u6216\u8005\u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true\u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var data = "sss";\n  let p = file.getSandBoxFilePath("a.txt");\n  var t = file.appendLine(data, p);\n  logd(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filereadline-\u8bfb\u53d6\u4e00\u884c"},"file.readLine \u8bfb\u53d6\u4e00\u884c"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8bfb\u53d6\u4e00\u884c\u6570\u636e\uff0c\u5982\u679c\u884c\u53f7\u4e0d\u5bf9\uff0c\u8fd4\u56de\u7684\u662f\u7a7a"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@param lineNo \u884c\u53f7"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32 \u8fd4\u56de\u4e00\u884c\u5b57\u7b26\u4e32")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p = file.getSandBoxFilePath("a.txt");\n  var t = file.readLine(p, 1);\n  logd(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filereadalllines-\u8bfb\u53d6\u6240\u6709\u884c"},"file.readAllLines \u8bfb\u53d6\u6240\u6709\u884c"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8bfb\u53d6\u6240\u6709\u6570\u636e"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32\u6570\u7ec4|null")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p = file.getSandBoxFilePath("a.txt");\n  var t = file.readAllLines(p);\n  logd(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"fileexists-\u662f\u5426\u5b58\u5728"},"file.exists \u662f\u5426\u5b58\u5728"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939\u662f\u5426\u5b58\u5728"),(0,t.yg)("li",{parentName:"ul"},"@param path \u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p = file.getSandBoxFilePath("a.txt");\n  var t = file.exists(p);\n  logd(t);\n}\n\nmain();\n')),(0,t.yg)("h2",{id:"filecopy-\u6587\u4ef6\u590d\u5236"},"file.copy \u6587\u4ef6\u590d\u5236"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u590d\u5236\u6587\u4ef6"),(0,t.yg)("li",{parentName:"ul"}),(0,t.yg)("li",{parentName:"ul"},"@param src \u6e90\u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@param dest \u76ee\u6807\u6587\u4ef6\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let p1 = file.getSandBoxFilePath("a1.txt");\n  let p2 = file.getSandBoxFilePath("a2.txt");\n  var t = file.copy(p1, p2);\n  logd(t);\n}\n\nmain();\n')))}c.isMDXComponent=!0}}]);