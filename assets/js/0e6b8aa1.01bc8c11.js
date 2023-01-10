"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[2364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return n?l.createElement(g,i(i({ref:t},s),{},{components:n})):l.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const r={title:"\u5de5\u5177\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u5de5\u5177\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u5de5\u5177\u51fd\u6570"]},i=void 0,o={unversionedId:"zh-cn/funcs/utils-api",id:"zh-cn/funcs/utils-api",title:"\u5de5\u5177\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u5de5\u5177\u51fd\u6570",source:"@site/iostjdocs/zh-cn/funcs/utils-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/utils-api",permalink:"/iostjdocs/zh-cn/funcs/utils-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5de5\u5177\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u5de5\u5177\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u5de5\u5177\u51fd\u6570"]},sidebar:"iostjdocs",previous:{title:"\u591aWorker\u51fd\u6570",permalink:"/iostjdocs/zh-cn/funcs/worker-api"},next:{title:"UI\u7f16\u5199",permalink:"/iostjdocs/zh-cn/funcs/ui/"}},u={},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u526a\u5207\u677f",id:"\u526a\u5207\u677f",level:2},{value:"setClipboardText \u8bbe\u7f6e\u526a\u5207\u677f",id:"setclipboardtext-\u8bbe\u7f6e\u526a\u5207\u677f",level:3},{value:"getClipboardText \u8bfb\u53d6\u526a\u5207\u677f",id:"getclipboardtext-\u8bfb\u53d6\u526a\u5207\u677f",level:3},{value:"\u6253\u5f00URL",id:"\u6253\u5f00url",level:2},{value:"openUrl \u6253\u5f00URL",id:"openurl-\u6253\u5f00url",level:3},{value:"\u76f8\u518c\u76f8\u5173",id:"\u76f8\u518c\u76f8\u5173",level:2},{value:"saveImageToAlbum \u4fdd\u5b58\u56fe\u50cf\u5230\u76f8\u518c",id:"saveimagetoalbum-\u4fdd\u5b58\u56fe\u50cf\u5230\u76f8\u518c",level:3},{value:"saveImageToAlbumPath \u4fdd\u5b58\u56fe\u50cf\u8def\u5f84\u5230\u76f8\u518c",id:"saveimagetoalbumpath-\u4fdd\u5b58\u56fe\u50cf\u8def\u5f84\u5230\u76f8\u518c",level:3},{value:"saveVideoToAlbumPath \u4fdd\u5b58\u89c6\u9891\u8def\u5f84\u5230\u76f8\u518c",id:"savevideotoalbumpath-\u4fdd\u5b58\u89c6\u9891\u8def\u5f84\u5230\u76f8\u518c",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"utils.fileMd5 \u6587\u4ef6\u7684MD5",id:"utilsfilemd5-\u6587\u4ef6\u7684md5",level:3},{value:"\u968f\u673a",id:"\u968f\u673a",level:2},{value:"utils.randomInt \u968f\u673a\u6574\u578b\u6570\u636e",id:"utilsrandomint-\u968f\u673a\u6574\u578b\u6570\u636e",level:3}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("h2",{id:"\u526a\u5207\u677f"},"\u526a\u5207\u677f"),(0,a.kt)("h3",{id:"setclipboardtext-\u8bbe\u7f6e\u526a\u5207\u677f"},"setClipboardText \u8bbe\u7f6e\u526a\u5207\u677f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u526a\u8d34\u677f\u6587\u672c\uff0c\u6ce8\u610f\uff1a\u53ef\u4ee5\u5f00\u542f\u753b\u4e2d\u753b\u6216\u8005 takeMeToFront \u4f7f\u672c\u7a0b\u5e8f\u5728\u524d\u53f0"),(0,a.kt)("li",{parentName:"ul"},"@param text \u6587\u672c"),(0,a.kt)("li",{parentName:"ul"},"@param type 1 \u6587\u672c 2 \u94fe\u63a5"),(0,a.kt)("li",{parentName:"ul"},"@return {boolean} true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  takeMeToFront()\n  var r = utils.setClipboardText("22222", 1);\n  logd(r)\n}\n\nmain();\n')),(0,a.kt)("h3",{id:"getclipboardtext-\u8bfb\u53d6\u526a\u5207\u677f"},"getClipboardText \u8bfb\u53d6\u526a\u5207\u677f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u526a\u8d34\u677f\u6587\u672c\uff0c\u6ce8\u610f\uff1a\u53ef\u4ee5\u5f00\u542f\u753b\u4e2d\u753b\u6216\u8005 takeMeToFront \u4f7f\u672c\u7a0b\u5e8f\u5728\u524d\u53f0"),(0,a.kt)("li",{parentName:"ul"},"@return {string} \u526a\u5207\u677f\u7684\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  takeMeToFront()\n  var r = utils.getClipboardText();\n  logd(r)\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"\u6253\u5f00url"},"\u6253\u5f00URL"),(0,a.kt)("h3",{id:"openurl-\u6253\u5f00url"},"openUrl \u6253\u5f00URL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6253\u5f00url\uff0c\u6ce8\u610f\uff1a\u9700\u8981\u91cd\u65b0\u5728\u524d\u53f0\u8fd0\u884c\uff0c\u5148\u8c03\u7528 takeMeToFront \u51fd\u6570\uff0c\u5c06\u672c\u7a0b\u5e8f\u653e\u524d\u53f0"),(0,a.kt)("li",{parentName:"ul"},"@param url url\u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},"{boolean} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  takeMeToFront()\n  var r = utils.openUrl("http://baidu.com");\n  logd(r)\n}\n\nmain();\n')),(0,a.kt)("h2",{id:"\u76f8\u518c\u76f8\u5173"},"\u76f8\u518c\u76f8\u5173"),(0,a.kt)("h3",{id:"saveimagetoalbum-\u4fdd\u5b58\u56fe\u50cf\u5230\u76f8\u518c"},"saveImageToAlbum \u4fdd\u5b58\u56fe\u50cf\u5230\u76f8\u518c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\u4e2d\u53bb"),(0,a.kt)("li",{parentName:"ul"},"@param img AutoImage\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"{boolean} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  let img = image.captureFullScreen()\n  logd("img getHeight " + image.getHeight(img))\n  logd("img getWidth " + image.getWidth(img))\n  var r = utils.saveImageToAlbum(img);\n  logd(r)\n}\n\nmain();\n')),(0,a.kt)("h3",{id:"saveimagetoalbumpath-\u4fdd\u5b58\u56fe\u50cf\u8def\u5f84\u5230\u76f8\u518c"},"saveImageToAlbumPath \u4fdd\u5b58\u56fe\u50cf\u8def\u5f84\u5230\u76f8\u518c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u56fe\u50cf\u8def\u5f84\u5230\u76f8\u518c"),(0,a.kt)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u7684\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"{boolean} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  let url = "http://192.168.2.10:8199/resource/image/wx.png"\n  let box = file.getInternalDir("documents")\n  logd("sandbox " + box)\n  let filex = box + "/bb.png"\n  logd("file " + filex)\n  let r = http.downloadFile(url, filex, 10000, null)\n  logd("download " + r)\n  let rx = utils.saveImageToAlbumPath(filex)\n  logd("r " + rx)\n}\n\nmain();\n')),(0,a.kt)("h3",{id:"savevideotoalbumpath-\u4fdd\u5b58\u89c6\u9891\u8def\u5f84\u5230\u76f8\u518c"},"saveVideoToAlbumPath \u4fdd\u5b58\u89c6\u9891\u8def\u5f84\u5230\u76f8\u518c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8def\u5f84\u4fdd\u5b58\u89c6\u9891\u5230\u76f8\u518c\u4e2d\u53bb"),(0,a.kt)("li",{parentName:"ul"},"@param path \u89c6\u9891\u6587\u4ef6\u7684\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"{boolean} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  let url = "http://192.168.2.10:8199/resource/image/wx.mp4"\n  let box = file.getInternalDir("documents")\n  logd("sandbox " + box)\n  let filex = box + "/bb.mp4"\n  logd("file " + filex)\n  let r = http.downloadFile(url, filex, 10000, null)\n  logd("download " + r)\n  let rx = utils.saveVideoToAlbumPath(filex)\n  logd("r " + rx)\n}\n\nmain();\n')),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("h3",{id:"utilsfilemd5-\u6587\u4ef6\u7684md5"},"utils.fileMd5 \u6587\u4ef6\u7684MD5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7684MD5"),(0,a.kt)("li",{parentName:"ul"},"@param file \u6587\u4ef6\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"@returns {string|*} \u6587\u4ef6MD5\u5b57\u7b26\u4e32\u6216\u8005null")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n    let docs = file.getInternalDir("documents")\n    var md5 = utils.fileMd5(docs+"/aaa.png");\n    logd(md5)\n}\n\nmain();\n')),(0,a.kt)("h2",{id:"\u968f\u673a"},"\u968f\u673a"),(0,a.kt)("h3",{id:"utilsrandomint-\u968f\u673a\u6574\u578b\u6570\u636e"},"utils.randomInt \u968f\u673a\u6574\u578b\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u968f\u673a\u6574\u578b\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"@param length \u4f4d\u6570\uff0c\u8981\u968f\u673a\u4ea7\u751f\u591a\u5c11\u4f4d\u7684\u6574\u578b\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"@return \u6574\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  var r = utils.randomInt(2);\n}\n\nmain();\n")))}m.isMDXComponent=!0}}]);