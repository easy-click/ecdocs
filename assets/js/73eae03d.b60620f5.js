"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[381],{5680:(e,n,t)=>{t.d(n,{xA:()=>o,yg:()=>y});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,y=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return t?i.createElement(y,l(l({ref:n},o),{},{components:t})):i.createElement(y,l({ref:n},o))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=t(8168),r=(t(6540),t(5680));const a={title:"H5 JS\u4e0eUI\u4ea4\u4e92",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 iOS\u514d\u786c\u4ef6 iOS\u811a\u672c \u5b89\u88c5\u5f00\u53d1\u63d2\u4ef6 \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 iOS\u514d\u786c\u4ef6 iOS\u811a\u672c \u5b89\u88c5\u5f00\u53d1\u63d2\u4ef6 \u8d44\u6e90\u4e0b\u8f7d"]},l=void 0,c={unversionedId:"zh-cn/funcs/ui/ui-js-inter",id:"zh-cn/funcs/ui/ui-js-inter",title:"H5 JS\u4e0eUI\u4ea4\u4e92",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 iOS\u514d\u786c\u4ef6 iOS\u811a\u672c \u5b89\u88c5\u5f00\u53d1\u63d2\u4ef6 \u8d44\u6e90\u4e0b\u8f7d",source:"@site/iostjdocs/zh-cn/funcs/ui/ui-js-inter.md",sourceDirName:"zh-cn/funcs/ui",slug:"/zh-cn/funcs/ui/ui-js-inter",permalink:"/iostjdocs/zh-cn/funcs/ui/ui-js-inter",draft:!1,tags:[],version:"current",frontMatter:{title:"H5 JS\u4e0eUI\u4ea4\u4e92",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 iOS\u514d\u786c\u4ef6 iOS\u811a\u672c \u5b89\u88c5\u5f00\u53d1\u63d2\u4ef6 \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 iOS\u514d\u786c\u4ef6 iOS\u811a\u672c \u5b89\u88c5\u5f00\u53d1\u63d2\u4ef6 \u8d44\u6e90\u4e0b\u8f7d"]},sidebar:"iostjdocs",previous:{title:"UI\u7f16\u5199",permalink:"/iostjdocs/zh-cn/funcs/ui/"},next:{title:"\u9ad8\u7ea7\u529f\u80fd",permalink:"/iostjdocs/zh-cn/advance/"}},s={},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"H5\u8c03\u7528ec\u7684\u51fd\u6570",id:"h5\u8c03\u7528ec\u7684\u51fd\u6570",level:2},{value:"EC H5\u9884\u5b9a\u4e49\u51fd\u6570",id:"ec-h5\u9884\u5b9a\u4e49\u51fd\u6570",level:2},{value:"\u81ea\u52a8\u5316\u670d\u52a1\u662f\u5426\u6b63\u5e38 isServiceOk",id:"\u81ea\u52a8\u5316\u670d\u52a1\u662f\u5426\u6b63\u5e38-isserviceok",level:3},{value:"\u542f\u52a8\u811a\u672c start",id:"\u542f\u52a8\u811a\u672c-start",level:3},{value:"\u505c\u6b62\u811a\u672c stopTask",id:"\u505c\u6b62\u811a\u672c-stoptask",level:3},{value:"\u811a\u672c\u662f\u5426\u8fd0\u884c isScriptRunning",id:"\u811a\u672c\u662f\u5426\u8fd0\u884c-isscriptrunning",level:3},{value:"\u83b7\u53d6UI\u914d\u7f6e getConfig",id:"\u83b7\u53d6ui\u914d\u7f6e-getconfig",level:3},{value:"\u79fb\u51faUI\u914d\u7f6e removeConfig",id:"\u79fb\u51faui\u914d\u7f6e-removeconfig",level:3},{value:"\u4fdd\u5b58UI\u914d\u7f6e saveConfig",id:"\u4fdd\u5b58ui\u914d\u7f6e-saveconfig",level:3},{value:"\u83b7\u53d6\u6240\u6709UI\u914d\u7f6e getAllConfig",id:"\u83b7\u53d6\u6240\u6709ui\u914d\u7f6e-getallconfig",level:3},{value:"\u6682\u505c\u548c\u7ee7\u7eed",id:"\u6682\u505c\u548c\u7ee7\u7eed",level:2},{value:"\u6682\u505c\u7ee7\u7eed setScriptPause",id:"\u6682\u505c\u7ee7\u7eed-setscriptpause",level:3},{value:"\u6682\u505c\u72b6\u6001\u5224\u65ad isScriptPause",id:"\u6682\u505c\u72b6\u6001\u5224\u65ad-isscriptpause",level:3},{value:"\u6269\u5c55H5\u529f\u80fd",id:"\u6269\u5c55h5\u529f\u80fd",level:2},{value:"registeH5Function \u5411H5\u6ce8\u5165\u6269\u5c55\u51fd\u6570",id:"registeh5function-\u5411h5\u6ce8\u5165\u6269\u5c55\u51fd\u6570",level:3}],o={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,i.A)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u672c\u7ae0\u8282\u4e3b\u8981\u8bb2\u8ff0JS\u4e0eUI\u5143\u7d20\u8fdb\u884c\u4ea4\u4e92")),(0,r.yg)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728\u5de5\u7a0b\u7684layout\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa\u4e00\u4e2aui.js\u548cindex.html\u6587\u4ef6\uff0c\u5185\u5bb9\u4e3a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  ui.layout("index", "index.html");\n}\n\nmain();\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4ee5\u4e0a\u7684\u64cd\u4f5c\u5373\u53ef\u5b8c\u6210\u4e00\u4e2a\u7b80\u5355\u7684\u5c55\u793a index.html \u7684\u64cd\u4f5c")),(0,r.yg)("h2",{id:"h5\u8c03\u7528ec\u7684\u51fd\u6570"},"H5\u8c03\u7528ec\u7684\u51fd\u6570"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2aiOS\u8131\u673a\u7248\u5de5\u7a0b\uff0c\u9ed8\u8ba4\u7684\u4f8b\u5b50\u90fd\u5728\u91cc\u9762")),(0,r.yg)("h2",{id:"ec-h5\u9884\u5b9a\u4e49\u51fd\u6570"},"EC H5\u9884\u5b9a\u4e49\u51fd\u6570"),(0,r.yg)("h3",{id:"\u81ea\u52a8\u5316\u670d\u52a1\u662f\u5426\u6b63\u5e38-isserviceok"},"\u81ea\u52a8\u5316\u670d\u52a1\u662f\u5426\u6b63\u5e38 isServiceOk"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"// H5\u4e2d\u8c03\u7528\uff0c\u4e0d\u662f\u811a\u672c\n// \u5f02\u6b65\u56de\u8c03\nwindow.ec.isServiceOk(function (resp) {\n  // resp = true \u4ee3\u8868\u81ea\u52a8\u5316\u670d\u52a1\u6b63\u5e38\n});\n")),(0,r.yg)("h3",{id:"\u542f\u52a8\u811a\u672c-start"},"\u542f\u52a8\u811a\u672c start"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"// H5\u4e2d\u8c03\u7528\uff0c\u4e0d\u662f\u811a\u672c\n// \u5f02\u6b65\u56de\u8c03\nwindow.ec.start(function (resp) {\n  // resp = true \u4ee3\u8868\u6b63\u5e38\n});\n")),(0,r.yg)("h3",{id:"\u505c\u6b62\u811a\u672c-stoptask"},"\u505c\u6b62\u811a\u672c stopTask"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"// H5\u4e2d\u8c03\u7528\uff0c\u4e0d\u662f\u811a\u672c\n// \u5f02\u6b65\u56de\u8c03\nwindow.ec.stopTask(function (resp) {\n  // resp = true \u4ee3\u8868\u6b63\u5e38\n});\n")),(0,r.yg)("h3",{id:"\u811a\u672c\u662f\u5426\u8fd0\u884c-isscriptrunning"},"\u811a\u672c\u662f\u5426\u8fd0\u884c isScriptRunning"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"// H5\u4e2d\u8c03\u7528\uff0c\u4e0d\u662f\u811a\u672c\n// \u5f02\u6b65\u56de\u8c03\nwindow.ec.isScriptRunning(function (resp) {\n  // resp = true \u4ee3\u8868\u6b63\u5e38\n});\n")),(0,r.yg)("h3",{id:"\u83b7\u53d6ui\u914d\u7f6e-getconfig"},"\u83b7\u53d6UI\u914d\u7f6e getConfig"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'// H5\u4e2d\u8c03\u7528\uff0c\u4e0d\u662f\u811a\u672c\n// \u5f02\u6b65\u56de\u8c03\nwindow.ec.getConfig("key", function (resp) {\n  console.log(resp)\n});\n\n')),(0,r.yg)("h3",{id:"\u79fb\u51faui\u914d\u7f6e-removeconfig"},"\u79fb\u51faUI\u914d\u7f6e removeConfig"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'// H5\u4e2d\u8c03\u7528\uff0c\u4e0d\u662f\u811a\u672c\n// \u5f02\u6b65\u56de\u8c03\nwindow.ec.removeConfig("key", function (resp) {\n  console.log(resp)\n});\n\n')),(0,r.yg)("h3",{id:"\u4fdd\u5b58ui\u914d\u7f6e-saveconfig"},"\u4fdd\u5b58UI\u914d\u7f6e saveConfig"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'// H5\u4e2d\u8c03\u7528\uff0c\u4e0d\u662f\u811a\u672c\n// \u5f02\u6b65\u56de\u8c03\nwindow.ec.saveConfig("key","data", function (resp) {\n  console.log(resp)\n});\n\n')),(0,r.yg)("h3",{id:"\u83b7\u53d6\u6240\u6709ui\u914d\u7f6e-getallconfig"},"\u83b7\u53d6\u6240\u6709UI\u914d\u7f6e getAllConfig"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"// H5\u4e2d\u8c03\u7528\uff0c\u4e0d\u662f\u811a\u672c\n// \u5f02\u6b65\u56de\u8c03\nwindow.ec.getAllConfig(function (resp) {\n  console.log(resp)\n});\n\n")),(0,r.yg)("h2",{id:"\u6682\u505c\u548c\u7ee7\u7eed"},"\u6682\u505c\u548c\u7ee7\u7eed"),(0,r.yg)("h3",{id:"\u6682\u505c\u7ee7\u7eed-setscriptpause"},"\u6682\u505c\u7ee7\u7eed setScriptPause"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'function pause() {\n  // setScriptPause \n  // {"pause":true,"timeout":3330} \u53c2\u6570\uff0cpause:true\u4ee3\u8868\u6682\u505c\uff0cfalse\u4ee3\u8868\u7ee7\u7eed\uff0c\n  // timeout: pause=true\u7684\u65f6\u5019\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\uff0c\u5927\u4e8e0\u4ee3\u8868\u591a\u957f\u65f6\u95f4\u81ea\u52a8\u6062\u590d\u6267\u884c\uff0c\u7b49\u4e8e0\u4ee3\u8868\u7b49\u5f85\u7528\u6237\u7ee7\u7eed\n  window.ec.setScriptPause({"pause":true,"timeout":3330},function (resp) {\n    checkPause()\n  });\n}\nfunction checkPause() {\n  window.ec.isScriptPause(function (resp) {\n    alert("isScriptPause "+resp)\n  });\n}\n')),(0,r.yg)("h3",{id:"\u6682\u505c\u72b6\u6001\u5224\u65ad-isscriptpause"},"\u6682\u505c\u72b6\u6001\u5224\u65ad isScriptPause"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'function checkPause() {\n  window.ec.isScriptPause(function (resp) {\n    // resp = true \u4ee3\u8868 \u6682\u505c\u4e2d\n    alert("isScriptPause "+resp)\n  });\n}\n')),(0,r.yg)("h2",{id:"\u6269\u5c55h5\u529f\u80fd"},"\u6269\u5c55H5\u529f\u80fd"),(0,r.yg)("h3",{id:"registeh5function-\u5411h5\u6ce8\u5165\u6269\u5c55\u51fd\u6570"},"registeH5Function \u5411H5\u6ce8\u5165\u6269\u5c55\u51fd\u6570"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5411\u7f51\u9875\u4e2d\u6ce8\u5165\u4e00\u4e2aJS\u51fd\u6570\uff0cH5\u53ef\u4ee5\u8c03\u7528\u8be5\u51fd\u6570\uff0c\u4ee5\u5b9e\u73b0\u811a\u672c\u548cHTML\u7684\u4e92\u901a\u6269\u5c55"),(0,r.yg)("li",{parentName:"ul"},"@param funcName \u6ce8\u5165\u7684\u51fd\u6570\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},"@param callback \u56de\u8c03 \u5e38\u89c1\u4f8b\u5b50"),(0,r.yg)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},' // ui.js\u4e2d\u7684\u6ce8\u5165\nfunction main() {\n  //UI\u4e2d\u8fdb\u884c\u6ce8\u5165\u65b0\u7684\u6269\u5c55\n  ui.registeH5Function("customFunction", function (data) {\n    logd("h5 call-> " + data);\n    //\u8fd4\u56de\u7ed9\u7f51\u9875\u7684\u6570\u636e\n    return new Date().toString()\n  })\n  ui.layout("main", "main.html");\n}\n\nmain();\n')),(0,r.yg)("p",null,"\u7f51\u9875\u4e2d\u7684\u8c03\u7528"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="UTF-8">\n   <title>Title</title>\n</head>\n<body>\n<button onclick="test()">\u6d4b\u8bd5\u6269\u5c55\u51fd\u6570</button>\n<script>\n   function test() {\n       //\u8c03\u7528ui.js\u6ce8\u5165\u8fdb\u6765\u7684\u6269\u5c55\n       window.ec.call(\'customFunction\',\n               JSON.stringify({\'action\': \'111\'}),\n               function (resp) {\n                   console.log("ddd  " + resp)\n               });\n\n   }\n<\/script>\n</body>\n</html>\n')))}g.isMDXComponent=!0}}]);