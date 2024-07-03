"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[8939],{5680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>s});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),o=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=o(e.components);return t.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=o(a),m=r,s=g["".concat(c,".").concat(m)]||g[m]||u[m]||l;return a?t.createElement(s,i(i({ref:n},d),{},{components:a})):t.createElement(s,i({ref:n},d))}));function s(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[g]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7841:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var t=a(8168),r=(a(6540),a(5680));const l={title:"\u4e2d\u63a7\u6295\u5c4f\u6a21\u5757",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u8bbe\u5907\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4e2d\u63a7\u6295\u5c4f\u51fd\u6570"]},i=void 0,p={unversionedId:"zh-cn/funcs/center-api",id:"zh-cn/funcs/center-api",title:"\u4e2d\u63a7\u6295\u5c4f\u6a21\u5757",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u8bbe\u5907\u51fd\u6570",source:"@site/docs/zh-cn/funcs/center-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/center-api",permalink:"/en/docs/zh-cn/funcs/center-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e2d\u63a7\u6295\u5c4f\u6a21\u5757",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u8bbe\u5907\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4e2d\u63a7\u6295\u5c4f\u51fd\u6570"]},sidebar:"docs",previous:{title:"HID\u4e8b\u4ef6",permalink:"/en/docs/zh-cn/funcs/hid-event-api"},next:{title:"\u56fe\u8272\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/image-api"}},c={},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"centerApi.getCenterTaskInfo \u83b7\u53d6\u4e2d\u63a7\u4efb\u52a1\u4fe1\u606f",id:"centerapigetcentertaskinfo-\u83b7\u53d6\u4e2d\u63a7\u4efb\u52a1\u4fe1\u606f",level:2},{value:"centerApi.getFileData \u8bfb\u53d6\u6570\u636e\u6587\u4ef6\u5185\u5bb9",id:"centerapigetfiledata-\u8bfb\u53d6\u6570\u636e\u6587\u4ef6\u5185\u5bb9",level:2},{value:"centerApi.addFileData \u65b0\u589e\u6570\u636e\u6587\u4ef6",id:"centerapiaddfiledata-\u65b0\u589e\u6570\u636e\u6587\u4ef6",level:2},{value:"centerApi.deleteFile \u5220\u9664\u6570\u636e\u6587\u4ef6",id:"centerapideletefile-\u5220\u9664\u6570\u636e\u6587\u4ef6",level:2},{value:"centerApi.insertFileData \u63d2\u5165\u6570\u636e",id:"centerapiinsertfiledata-\u63d2\u5165\u6570\u636e",level:2},{value:"centerApi.popFileData \u5f39\u51fa\u6570\u636e",id:"centerapipopfiledata-\u5f39\u51fa\u6570\u636e",level:2},{value:"centerApi.removeOneLineData \u5220\u9664\u4e00\u884c\u6570\u636e",id:"centerapiremoveonelinedata-\u5220\u9664\u4e00\u884c\u6570\u636e",level:2},{value:"centerApi.appendOneLineData \u8ffd\u52a0\u4e00\u884c\u6570\u636e",id:"centerapiappendonelinedata-\u8ffd\u52a0\u4e00\u884c\u6570\u636e",level:2}],d={toc:o},g="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4e2d\u63a7\u6295\u5c4f\u6a21\u5757\uff0c\u662f\u9700\u8981\u914d\u5408EC\u7684\u4e2d\u63a7\u6295\u5c4f\u7cfb\u7edf\u4f7f\u7528\u7684"),(0,r.yg)("li",{parentName:"ul"},"\u4e2d\u63a7\u6295\u5c4f\u8f6f\u4ef6\u5b89\u88c5\u4f7f\u7528\u6587\u6863: ",(0,r.yg)("a",{parentName:"li",href:"/docs/zh-cn/centerscreen/guid"},"\u4e2d\u63a7\u6295\u5c4f\u4f7f\u7528\u624b\u518c")),(0,r.yg)("li",{parentName:"ul"},"\u4e2d\u63a7\u6295\u5c4f\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662f centerApi\uff0c\u4f8b\u5982 centerApi.getFileData\u8fd9\u6837\u8c03\u7528")),(0,r.yg)("h2",{id:"centerapigetcentertaskinfo-\u83b7\u53d6\u4e2d\u63a7\u4efb\u52a1\u4fe1\u606f"},"centerApi.getCenterTaskInfo \u83b7\u53d6\u4e2d\u63a7\u4efb\u52a1\u4fe1\u606f"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u53d6\u5f97\u4e2d\u63a7\u53d1\u8fc7\u6765\u7684\u4efb\u52a1\u53c2\u6570\u4fe1\u606f"),(0,r.yg)("li",{parentName:"ul"},"\u4e2d\u63a7\u542f\u52a8\u811a\u672c\uff0c\u53ef\u4ee5\u914d\u7f6e\u53c2\u6570\uff0c\u5728\u8fd9\u91cc\u4f7f\u7528\u672c\u51fd\u6570\u83b7\u53d6\u53c2\u6570\uff0c\u7ed9\u811a\u672c\u4f7f\u7528"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u5408\u7248\u672c EC \u5b89\u5353 9.29.0+"),(0,r.yg)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u8fd9\u4e2a\u9700\u8981\u4f7f\u7528\u53c2\u6570\u914d\u7f6e,\u8bfb\u53d6\u987a\u5e8f\u662f \u4f18\u5148\u8bfb\u53d6\u5355\u4e2a\u8bbe\u5907\u914d\u7f6e \uff0c\u5982\u679c\u5355\u4e2a\u8bbe\u5907\u914d\u7f6e\u65e0\u4efb\u4f55\u6570\u636e\uff0c\u5c31\u8bfb\u53d6 \u5168\u5c40\u914d\u7f6e\uff0c"),(0,r.yg)("li",{parentName:"ul"},"\u8fd4\u56de\u53c2\u6570\u4e2d \u542b\u6709 ",(0,r.yg)("strong",{parentName:"li"},"from_global")," \u8fd9\u6837\u7684key\uff0c\u4ee3\u8868\u662f\u6765\u6e90\u4e8e\u5168\u5c40\u53c2\u6570"),(0,r.yg)("li",{parentName:"ul"},"@return {JSON} \u5bf9\u8c61")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  while (true) {\n    logd("---\x3e " + new Date())\n    sleep(2000);\n    let info = centerApi.getCenterTaskInfo()\n    logd("info -> " + JSON.stringify(info))\n    if (info) {\n      logd("test param => " + info[\'valueJson\'][\'test\']);\n    }\n    sleep(2000);\n  }\n}\n\nmain()\n')),(0,r.yg)("h2",{id:"centerapigetfiledata-\u8bfb\u53d6\u6570\u636e\u6587\u4ef6\u5185\u5bb9"},"centerApi.getFileData \u8bfb\u53d6\u6570\u636e\u6587\u4ef6\u5185\u5bb9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8bfb\u53d6\u6570\u636e\u6587\u4ef6\u7684\u5185\u5bb9"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u914dEC 9.29.0+"),(0,r.yg)("li",{parentName:"ul"},"@param name \u6587\u4ef6\u540d\u79f0\uff0c\u4e2d\u63a7\u6570\u636e\u529f\u80fd\u7684\u6570\u636e\u6587\u4ef6\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let data = centerApi.getFileData("testfile")\n  logd(JSON.stringify(data))\n  if (!data) {\n    logd("\u65e0\u6570\u636e\u8fd4\u56de");\n  } else {\n    if (data["code"] != 0) {\n      logd("\u9519\u8bef: " + data["msg"]);\n    } else {\n      logd("\u6570\u636e: " + data["data"]);\n    }\n  }\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"centerapiaddfiledata-\u65b0\u589e\u6570\u636e\u6587\u4ef6"},"centerApi.addFileData \u65b0\u589e\u6570\u636e\u6587\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e\u6570\u636e\u6587\u4ef6"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u914dEC 9.29.0+"),(0,r.yg)("li",{parentName:"ul"}),(0,r.yg)("li",{parentName:"ul"},"@param name \u6587\u4ef6\u540d\u79f0\uff0c\u4e2d\u63a7\u6570\u636e\u529f\u80fd\u7684\u6570\u636e\u6587\u4ef6\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@param content \u6587\u4ef6\u5185\u5bb9"),(0,r.yg)("li",{parentName:"ul"},"@param rewrite \u662f\u5426\u5141\u8bb8\u8986\u76d6\u539f\u6709\u6587\u4ef6\uff0c 1 \u662f 2 \u5426\uff0c\u5982\u679c\u53c2\u6570\u662f2\uff0c\u6570\u636e\u6587\u4ef6\u5b58\u5728\uff0c\u5c06\u8fd4\u56de\u9519\u8bef\u4fe1\u606f"),(0,r.yg)("li",{parentName:"ul"},"@param append \u8ffd\u52a0\u6a21\u5f0f\uff0c 1 \u4ee3\u8868\u662f\u8ffd\u52a0\u5185\u5bb9\uff0c2 \u4ee3\u8868\u4e0d\u8ffd\u52a0"),(0,r.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let data = centerApi.addFileData("testfile", "\\n123", "1", "1")\n  logd(JSON.stringify(data))\n  if (!data) {\n    logd("\u65e0\u6570\u636e\u8fd4\u56de");\n  } else {\n    if (data["code"] != 0) {\n      logd("\u9519\u8bef: " + data["msg"]);\n    } else {\n      logd("\u6210\u529f");\n    }\n  }\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"centerapideletefile-\u5220\u9664\u6570\u636e\u6587\u4ef6"},"centerApi.deleteFile \u5220\u9664\u6570\u636e\u6587\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5220\u9664\u6570\u636e\u6587\u4ef6"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u914dEC 9.29.0+"),(0,r.yg)("li",{parentName:"ul"},"@param name \u6587\u4ef6\u540d\u79f0\uff0c\u4e2d\u63a7\u6570\u636e\u529f\u80fd\u7684\u6570\u636e\u6587\u4ef6\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let data = centerApi.deleteFile("testfile")\n  logd(JSON.stringify(data))\n  if (!data) {\n    logd("\u65e0\u6570\u636e\u8fd4\u56de");\n  } else {\n    if (data["code"] != 0) {\n      logd("\u9519\u8bef: " + data["msg"]);\n    } else {\n      logd("\u6210\u529f");\n    }\n  }\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"centerapiinsertfiledata-\u63d2\u5165\u6570\u636e"},"centerApi.insertFileData \u63d2\u5165\u6570\u636e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u63d2\u5165\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u914dEC 9.29.0+"),(0,r.yg)("li",{parentName:"ul"},"@param name \u6587\u4ef6\u540d\u79f0\uff0c\u4e2d\u63a7\u6570\u636e\u529f\u80fd\u7684\u6570\u636e\u6587\u4ef6\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@param content \u8981\u63d2\u5165\u7684\u5185\u5bb9"),(0,r.yg)("li",{parentName:"ul"},"@param create \u662f\u5426\u521b\u5efa\u6587\u4ef6 1 \u662f 2 \u5426\uff0c\u5982\u679c\u53c2\u6570\u662f2\uff0c\u6587\u4ef6\u4e0d\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u8fd4\u56de\u9519\u8bef\u4fe1\u606f"),(0,r.yg)("li",{parentName:"ul"},"@param append \u8ffd\u52a0\u6a21\u5f0f\uff0c 1 \u4ee3\u8868\u662f\u8ffd\u52a0\u5185\u5bb9\uff0c2 \u4ee3\u8868\u4e0d\u8ffd\u52a0"),(0,r.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let data = centerApi.insertFileData("testfile", "123", "1", "2")\n  logd(JSON.stringify(data))\n  if (!data) {\n    logd("\u65e0\u6570\u636e\u8fd4\u56de");\n  } else {\n    if (data["code"] != 0) {\n      logd("\u9519\u8bef: " + data["msg"]);\n    } else {\n      logd("\u6210\u529f");\n    }\n  }\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"centerapipopfiledata-\u5f39\u51fa\u6570\u636e"},"centerApi.popFileData \u5f39\u51fa\u6570\u636e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5f39\u51fa\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u914dEC 9.29.0+"),(0,r.yg)("li",{parentName:"ul"},"@param name \u6587\u4ef6\u540d\u79f0\uff0c\u4e2d\u63a7\u6570\u636e\u529f\u80fd\u7684\u6570\u636e\u6587\u4ef6\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@param popType \u83b7\u53d6\u6570\u636e\u65b9\u5f0f\uff0c1 \u5934\u90e8\u83b7\u53d6\uff0c2 \u5c3e\u90e8\u83b7\u53d6\uff0c3 \u968f\u673a\u83b7\u53d6"),(0,r.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let data = centerApi.popFileData("testfile", "3")\n  logd(JSON.stringify(data))\n  if (!data) {\n    logd("\u65e0\u6570\u636e\u8fd4\u56de");\n  } else {\n    if (data["code"] != 0) {\n      logd("\u9519\u8bef: " + data["msg"]);\n    } else {\n      logd(data["data"]);\n    }\n  }\n}\n\nmain();\n\n')),(0,r.yg)("h2",{id:"centerapiremoveonelinedata-\u5220\u9664\u4e00\u884c\u6570\u636e"},"centerApi.removeOneLineData \u5220\u9664\u4e00\u884c\u6570\u636e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5220\u9664\u4e00\u884c\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u914dEC 9.29.0+"),(0,r.yg)("li",{parentName:"ul"},"@param name \u6587\u4ef6\u540d\u79f0\uff0c\u4e2d\u63a7\u6570\u636e\u529f\u80fd\u7684\u6570\u636e\u6587\u4ef6\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@param content \u8981\u5220\u9664\u7684\u5185\u5bb9"),(0,r.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let data = centerApi.removeOneLineData("testfile", "2")\n  logd(JSON.stringify(data))\n  if (!data) {\n    logd("\u65e0\u6570\u636e\u8fd4\u56de");\n  } else {\n    if (data["code"] != 0) {\n      logd("\u9519\u8bef: " + data["msg"]);\n    } else {\n      logd("\u6210\u529f");\n    }\n  }\n}\n\nmain();\n')),(0,r.yg)("h2",{id:"centerapiappendonelinedata-\u8ffd\u52a0\u4e00\u884c\u6570\u636e"},"centerApi.appendOneLineData \u8ffd\u52a0\u4e00\u884c\u6570\u636e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8ffd\u52a0\u4e00\u884c\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u914dEC 9.29.0+"),(0,r.yg)("li",{parentName:"ul"}),(0,r.yg)("li",{parentName:"ul"},"@param name \u6587\u4ef6\u540d\u79f0\uff0c\u4e2d\u63a7\u6570\u636e\u529f\u80fd\u7684\u6570\u636e\u6587\u4ef6\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@param content \u8981\u8ffd\u52a0\u7684\u5185\u5bb9"),(0,r.yg)("li",{parentName:"ul"},"@param appendType \u8ffd\u52a0\u4f4d\u7f6e 1 \u9996\u90e8 2 \u5c3e\u90e8"),(0,r.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let data = centerApi.appendOneLineData("testfile", "2", "2")\n  logd(JSON.stringify(data))\n  if (!data) {\n    logd("\u65e0\u6570\u636e\u8fd4\u56de");\n  } else {\n    if (data["code"] != 0) {\n      logd("\u9519\u8bef: " + data["msg"]);\n    } else {\n      logd("\u6210\u529f");\n    }\n  }\n}\n\nmain();\n')))}u.isMDXComponent=!0}}]);