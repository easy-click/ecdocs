"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[3169],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=o(t),m=r,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const l={title:"\u7ebf\u7a0b\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u7ebf\u7a0b\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u7ebf\u7a0b\u51fd\u6570"]},i=void 0,c={unversionedId:"zh-cn/funcs/thread-api",id:"zh-cn/funcs/thread-api",title:"\u7ebf\u7a0b\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u7ebf\u7a0b\u51fd\u6570",source:"@site/docs/zh-cn/funcs/thread-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/thread-api",permalink:"/docs/zh-cn/funcs/thread-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7ebf\u7a0b\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u7ebf\u7a0b\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u7ebf\u7a0b\u51fd\u6570"]},sidebar:"docs",previous:{title:"\u7f51\u7edc\u51fd\u6570",permalink:"/docs/zh-cn/funcs/http-api"},next:{title:"\u5de5\u5177\u51fd\u6570",permalink:"/docs/zh-cn/funcs/utils-api"}},u={},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"setTimeout \u5ef6\u8fdf\u6267\u884c",id:"settimeout-\u5ef6\u8fdf\u6267\u884c",level:2},{value:"cancelTimeout \u53d6\u6d88\u5ef6\u8fdf\u6267\u884c",id:"canceltimeout-\u53d6\u6d88\u5ef6\u8fdf\u6267\u884c",level:2},{value:"setInterval \u5468\u671f\u6267\u884c",id:"setinterval-\u5468\u671f\u6267\u884c",level:2},{value:"cancelInterval \u53d6\u6d88\u5468\u671f\u6267\u884c",id:"cancelinterval-\u53d6\u6d88\u5468\u671f\u6267\u884c",level:2},{value:"execSync \u540c\u6b65\u6267\u884c",id:"execsync-\u540c\u6b65\u6267\u884c",level:2},{value:"thread.stopAll \u505c\u6b62",id:"threadstopall-\u505c\u6b62",level:2},{value:"thread.execAsync \u5f02\u6b65\u6267\u884c",id:"threadexecasync-\u5f02\u6b65\u6267\u884c",level:2},{value:"thread.execSync \u540c\u6b65\u6267\u884c",id:"threadexecsync-\u540c\u6b65\u6267\u884c",level:2},{value:"thread.cancelThread \u53d6\u6d88\u7ebf\u7a0b",id:"threadcancelthread-\u53d6\u6d88\u7ebf\u7a0b",level:2},{value:"thread.isCancelled \u53d6\u6d88\u5224\u65ad",id:"threadiscancelled-\u53d6\u6d88\u5224\u65ad",level:2}],p={toc:o};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u7ebf\u7a0b\u4fe1\u606f\u76f8\u5173\u8054"),(0,r.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fthread\uff0c\u4f8b\u5982 thread.execFuncSync()\u8fd9\u6837\u8c03\u7528")),(0,r.kt)("h2",{id:"settimeout-\u5ef6\u8fdf\u6267\u884c"},"setTimeout \u5ef6\u8fdf\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u5b9a\u5ef6\u8fdf\u591a\u5c11\u6beb\u79d2\u540e\u6267\u884c\u51fd\u6570\uff0c\u5728\u5b50\u7ebf\u7a0b\u4e2d\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"@param func \u8981\u6267\u884c\u7684\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param timeout \u5ef6\u8fdf\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,r.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u5bf9\u8c61 \u8be5\u5bf9\u8c61\u53ef\u4ee5\u8fdb\u884c\u53d6\u6d88")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var t = setTimeout(function () {\n    toast("\u6211\u662f\u4e00\u79d2\u540e\u6267\u884c\u7684\u4ee3\u7801");\n  }, 1000);\n  //\u6a21\u62df\u811a\u672c\u8fd0\u884c\u4e2d\n  while (true) {\n    sleep(1000)\n  }\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"canceltimeout-\u53d6\u6d88\u5ef6\u8fdf\u6267\u884c"},"cancelTimeout \u53d6\u6d88\u5ef6\u8fdf\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u5ef6\u8fdf\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"@param t \u8981\u53d6\u6d88\u7684\u51fd\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var t = setTimeout(function () {\n    toast("\u6211\u662f\u4e00\u79d2\u540e\u6267\u884c\u7684\u4ee3\u7801");\n  }, 1000);\n  //\u53d6\u6d88\u5c31\u4e0d\u4f1a\u6267\u884c\u4e86\n  cancelTimeout(t);\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"setinterval-\u5468\u671f\u6267\u884c"},"setInterval \u5468\u671f\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u591a\u5c11\u5468\u671f\u8fdb\u884c\u6267\u884c\u4e00\u6b21\uff0c\u5728\u5b50\u7ebf\u7a0b\u4e2d\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"@param func \u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param interval \u5468\u671f\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,r.kt)("li",{parentName:"ul"},"@return \u7ebf\u7a0b\u5bf9\u8c61 \u8be5\u5bf9\u8c61\u53ef\u4ee5\u8fdb\u884c\u53d6\u6d88")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var t = setInterval(function () {\n    toast("\u6211\u662f\u6bcf\u9694\u4e00\u79d2\u6267\u884c\u7684\u4ee3\u7801");\n  }, 1000);\n  //\u6a21\u62df\u811a\u672c\u8fd0\u884c\u4e2d\n  while (true) {\n    sleep(1000)\n  }\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"cancelinterval-\u53d6\u6d88\u5468\u671f\u6267\u884c"},"cancelInterval \u53d6\u6d88\u5468\u671f\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u5468\u671f\u6267\u884c\u7684\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param t \u8981\u53d6\u6d88\u7684\u51fd\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var t = setInterval(function () {\n    toast("\u6211\u662f\u6bcf\u9694\u4e00\u79d2\u6267\u884c\u7684\u4ee3\u7801");\n  }, 1000);\n  cancelInterval(t);\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"execsync-\u540c\u6b65\u6267\u884c"},"execSync \u540c\u6b65\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u67d0\u4e2a\u51fd\u6570\u5e76\u4e14\u7b49\u5f85true\u8fd4\u56de\uff0c\u5982\u679c\u51fd\u6570\u4e2d\u8fd4\u56de\u7684\u662ftrue\uff0c\u8be5\u65b9\u6cd5\u5c06\u7acb\u523b\u6267\u884c\u5b8c\u6bd5"),(0,r.kt)("li",{parentName:"ul"},"@param condition \u6761\u4ef6\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,r.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b \u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u578b\u503c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  execSync(function () {\n    logd("\u6211\u662f\u540c\u6b65\u6267\u884c\u7684\u4ee3\u7801");\n  }, 1000);\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"threadstopall-\u505c\u6b62"},"thread.stopAll \u505c\u6b62"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u7ebf\u7a0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  execSync(function () {\n    logd("\u6211\u662f\u540c\u6b65\u6267\u884c\u7684\u4ee3\u7801");\n  }, 1000);\n  thread.stopAll();\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"threadexecasync-\u5f02\u6b65\u6267\u884c"},"thread.execAsync \u5f02\u6b65\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u6267\u884c\u7ebf\u7a0b\uff0c\u8fd9\u91cc\u4f1a\u5c06Runnable\u653e\u5230\u7ebf\u7a0b\u6c60\u4e2d\u8fdb\u884c\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"@param runnable Runnable\u5bf9\u8c61")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tid = thread.execAsync(function () {\n    while (true) {\n      logd("\u6211\u662f\u5f02\u6b65\u6267\u884c\u7684\u4ee3\u7801");\n      sleep(1000);\n      if (thread.isCancelled(tid)) {\n        break;\n      }\n    }\n  });\n  logd("tid " + tid);\n  //5s\u540e\u53d6\u6d88\u7ebf\u7a0b\n  sleep(5000);\n  logd("\u53d6\u6d88\u7ebf\u7a0b " + tid);\n  thread.cancelThread(tid);\n  sleep(5000);\n  logd("\u7ed3\u675f ");\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"threadexecsync-\u540c\u6b65\u6267\u884c"},"thread.execSync \u540c\u6b65\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u67d0\u4e2a\u51fd\u6570\u5e76\u4e14\u7b49\u5f85true\u8fd4\u56de\uff0c\u5982\u679c\u51fd\u6570\u4e2d\u8fd4\u56de\u7684\u662ftrue\uff0c\u8be5\u65b9\u6cd5\u5c06\u7acb\u523b\u6267\u884c\u5b8c\u6bd5"),(0,r.kt)("li",{parentName:"ul"},"@param condition \u6761\u4ef6\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,r.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b \u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u578b\u503c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  thread.execSync(function () {\n    logd("\u6211\u662f\u540c\u6b65\u6267\u884c\u7684\u4ee3\u7801");\n  }, 1000);\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"threadcancelthread-\u53d6\u6d88\u7ebf\u7a0b"},"thread.cancelThread \u53d6\u6d88\u7ebf\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u7ebf\u7a0b\u7684\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"@param t \u7ebf\u7a0b\u5bf9\u8c61ID"),(0,r.kt)("li",{parentName:"ul"},"@return boolean")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tid = thread.execAsync(function () {\n    while (true) {\n      logd("\u6211\u662f\u5f02\u6b65\u6267\u884c\u7684\u4ee3\u7801");\n      sleep(1000);\n      if (thread.isCancelled(tid)) {\n        break;\n      }\n    }\n  });\n  logd("tid " + tid);\n  //5s\u540e\u53d6\u6d88\u7ebf\u7a0b\n  sleep(5000);\n  logd("\u53d6\u6d88\u7ebf\u7a0b " + tid);\n  thread.cancelThread(tid);\n  sleep(5000);\n  logd("\u7ed3\u675f ");\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"threadiscancelled-\u53d6\u6d88\u5224\u65ad"},"thread.isCancelled \u53d6\u6d88\u5224\u65ad"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u7ebf\u7a0b\u7684\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"@param t \u7ebf\u7a0b\u5bf9\u8c61ID"),(0,r.kt)("li",{parentName:"ul"},"@return boolean true\u4ee3\u8868\u5df2\u7ecf\u53d6\u6d88\u4e86\uff0cfalse\u8868\u793a\u672a\u53d6\u6d88")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var tid = thread.execAsync(function () {\n    while (true) {\n      logd("\u6211\u662f\u5f02\u6b65\u6267\u884c\u7684\u4ee3\u7801");\n      sleep(1000);\n      if (thread.isCancelled(tid)) {\n        break;\n      }\n    }\n  });\n  logd("tid " + tid);\n  //5s\u540e\u53d6\u6d88\u7ebf\u7a0b\n  sleep(5000);\n  logd("\u53d6\u6d88\u7ebf\u7a0b " + tid);\n  thread.cancelThread(tid);\n  sleep(5000);\n  logd("\u7ed3\u675f ");\n}\n\nmain();\n')))}d.isMDXComponent=!0}}]);