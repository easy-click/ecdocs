"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[4095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(n),c=l,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={title:"\u7f51\u7edc\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u51fd\u6570"]},o=void 0,i={unversionedId:"zh-cn/funcs/http-api",id:"zh-cn/funcs/http-api",title:"\u7f51\u7edc\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u51fd\u6570",source:"@site/iosdocs/zh-cn/funcs/http-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/http-api",permalink:"/iosdocs/zh-cn/funcs/http-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7f51\u7edc\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u51fd\u6570"]},sidebar:"iosdocs",previous:{title:"\u5b58\u50a8\u51fd\u6570",permalink:"/iosdocs/zh-cn/funcs/storage-api"},next:{title:"\u7ebf\u7a0b\u51fd\u6570",permalink:"/iosdocs/zh-cn/funcs/thread-api"}},p={},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"http.request \u4e07\u80fd\u8bf7\u6c42\u51fd\u6570",id:"httprequest-\u4e07\u80fd\u8bf7\u6c42\u51fd\u6570",level:2},{value:"http.requestEx \u4e07\u80fd\u8bf7\u6c42\u51fd\u6570(\u6269\u5c55)",id:"httprequestex-\u4e07\u80fd\u8bf7\u6c42\u51fd\u6570\u6269\u5c55",level:2},{value:"http.downloadFile \u4e0b\u8f7d\u6587\u4ef6",id:"httpdownloadfile-\u4e0b\u8f7d\u6587\u4ef6",level:2},{value:"http.downloadFileDefault \u4e0b\u8f7d\u6587\u4ef6",id:"httpdownloadfiledefault-\u4e0b\u8f7d\u6587\u4ef6",level:2},{value:"http.httpGetDefault GET\u8bf7\u6c42",id:"httphttpgetdefault-get\u8bf7\u6c42",level:2},{value:"http.httpGet GET\u8bf7\u6c42",id:"httphttpget-get\u8bf7\u6c42",level:2},{value:"http.httpPost POST\u8bf7\u6c42",id:"httphttppost-post\u8bf7\u6c42",level:2},{value:"http.postJSON \u53d1\u9001JSON",id:"httppostjson-\u53d1\u9001json",level:2},{value:"http.newWebsocket websocket\u901a\u4fe1",id:"httpnewwebsocket-websocket\u901a\u4fe1",level:2},{value:"WebSocket \u5bf9\u8c61\u51fd\u6570",id:"websocket-\u5bf9\u8c61\u51fd\u6570",level:3},{value:"connect \u540c\u6b65\u8fde\u63a5",id:"connect-\u540c\u6b65\u8fde\u63a5",level:4},{value:"reset \u91cd\u7f6e\u8fde\u63a5",id:"reset-\u91cd\u7f6e\u8fde\u63a5",level:4},{value:"isClosed \u662f\u5426\u5173\u95ed",id:"isclosed-\u662f\u5426\u5173\u95ed",level:4},{value:"isConnected \u662f\u5426\u8fde\u63a5",id:"isconnected-\u662f\u5426\u8fde\u63a5",level:4},{value:"close \u5173\u95ed",id:"close-\u5173\u95ed",level:4},{value:"sendText \u53d1\u9001\u6587\u672c",id:"sendtext-\u53d1\u9001\u6587\u672c",level:4},{value:"sendBinary \u53d1\u9001\u5b57\u8282",id:"sendbinary-\u53d1\u9001\u5b57\u8282",level:4},{value:"onOpen \u6253\u5f00\u56de\u8c03",id:"onopen-\u6253\u5f00\u56de\u8c03",level:4},{value:"onText \u6587\u4ef6\u56de\u8c03",id:"ontext-\u6587\u4ef6\u56de\u8c03",level:4},{value:"onClose \u5173\u95ed\u56de\u8c03",id:"onclose-\u5173\u95ed\u56de\u8c03",level:4},{value:"onError \u9519\u8bef\u56de\u8c03",id:"onerror-\u9519\u8bef\u56de\u8c03",level:4},{value:"onBinary \u4e8c\u8fdb\u5236\u6d88\u606f\u56de\u8c03",id:"onbinary-\u4e8c\u8fdb\u5236\u6d88\u606f\u56de\u8c03",level:4},{value:"setReadTimeout \u8bbe\u7f6e\u8bfb\u6570\u636e\u8d85\u65f6\u65f6\u95f4",id:"setreadtimeout-\u8bbe\u7f6e\u8bfb\u6570\u636e\u8d85\u65f6\u65f6\u95f4",level:4},{value:"setWriteTimeout \u8bbe\u7f6e\u5199\u6570\u636e\u8d85\u65f6\u65f6\u95f4",id:"setwritetimeout-\u8bbe\u7f6e\u5199\u6570\u636e\u8d85\u65f6\u65f6\u95f4",level:4},{value:"setPingInterval \u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4",id:"setpinginterval-\u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4",level:4},{value:"setConnectionLostTimeout \u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4",id:"setconnectionlosttimeout-\u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4",level:4},{value:"setAutoReconnect \u8bbe\u7f6e\u81ea\u52a8\u91cd\u8fde",id:"setautoreconnect-\u8bbe\u7f6e\u81ea\u52a8\u91cd\u8fde",level:4}],u=(m="Br",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var m;const k={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u7f51\u7edc\u8bf7\u6c42\u4fe1\u606f\u76f8\u5173\u8054"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fhttp\uff0c\u4f8b\u5982 http.downloadFile()\u8fd9\u6837\u8c03\u7528")),(0,l.kt)("h2",{id:"httprequest-\u4e07\u80fd\u8bf7\u6c42\u51fd\u6570"},"http.request \u4e07\u80fd\u8bf7\u6c42\u51fd\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP\u4e07\u80fd\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"@param param  map\u53c2\u6570\uff0c\u5305\u542b\u7684\u53c2\u6570\u6709",(0,l.kt)(u,{mdxType:"Br"}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"url:\u5b57\u7b26\u4e32 \u8bf7\u6c42\u7684\u5730\u5740",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"timeout:\u6574\u578b\u6beb\u79d2\uff0c\u8d85\u65f6\u65f6\u95f4",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"method: POST ,GET,PUT \u5b57\u7b26\u4e32\uff0c\u4ee3\u8868\u8bf7\u6c42\u7684\u65b9\u6cd5",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},'proxy: \u4ee3\u7406\u5730\u5740\uff0cmap\u53c2\u6570 \u5305\u542b\u4e3b\u673a\u548c\u7aef\u53e3 \u4f8b\u5982 {"host":"11","port":111}',(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"followRedirects:\u662f\u5426\u81ea\u52a8\u8df3\u8f6c true \u6216\u8005 false",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"requestBody: \u8bf7\u6c42\u7684body\u4f53\uff0c\u5982\u679c\u662fJSON\uff0c\u5c31\u662fJSON\u5b57\u7b26\u4e32",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"userAgent:\u5b57\u7b26\u4e32 HTTP \u7684UA ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"ignoreContentType:\u662f\u5426\u5ffd\u7565\u5185\u5bb9\u7c7b\u578b true \u6216\u8005 false ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"ignoreHttpErrors:\u662f\u5426\u5ffd\u7565\u9519\u8bef true \u6216\u8005 false  ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"maxBodySize : \u6574\u578b\uff0cHTTP BODY\u6700\u5927\u503c  ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"referrer:\u5b57\u7b26\u4e32\uff0c\u8bf7\u6c42\u6765\u6e90  ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},'header:  HTTP \u8bf7\u6c42\u5934\uff0cmap\u53c2\u6570,\u4f8b\u5982 {"UA":"test"}'),(0,l.kt)("li",{parentName:"ul"},'cookie: HTTP \u8bf7\u6c42Cookie\uff0cmap\u53c2\u6570, \u4f8b\u5982 {"a":1} '),(0,l.kt)("li",{parentName:"ul"},'data:HTTP POST\u7684\u6570\u636e\uff0cmap\u53c2\u6570, \u4f8b\u5982 {"a":1} '),(0,l.kt)("li",{parentName:"ul"},"file:\u8981\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u96c6\u5408\u53c2\u6570\uff0c\u4f8b\u5982"),(0,l.kt)("li",{parentName:"ul"},'[{"key":"a1","fileName":"a.txt","filePath":"D:/"},{"key":"a1","fileName":"a.jpg","filePath":"D:/","contentType":"image/jpg"}]',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5176\u4e2dcontentType\u53ef\u6709\u53ef\u65e0"))),(0,l.kt)("li",{parentName:"ul"},"responseCharset: \u5b57\u7b26\u4e32\uff0c\u5f3a\u5236\u8bbe\u7f6e\u54cd\u5e94\u5185\u5bb9\u7684\u7f16\u7801\u96c6"))),(0,l.kt)("li",{parentName:"ul"},"@return Response \u5bf9\u8c61\u6216\u8005null")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    http_request();\n}\n\nfunction http_request() {\n   //url:string\n   //timeout:int ms\n   //method: post ,get\n   //proxy: {"host":"11","port":111}\n   //followRedirects:true false\n   //requestBody: string\n   //userAgent:string\n   //ignoreContentType:true false\n   //ignoreHttpErrors:true false\n   //maxBodySize : int\n   //referrer:string\n   //header:{"UA":"test"}\n   //cookie:{"a":1}\n   //data:{"a":1}\n   //file:[{}]\n   //responseCharset: string\n   var md = utils.dataMd5("12345");\n   var md2 = utils.fileMd5("D:/sb.png");\n   var url = "http://192.168.0.5:8081/api/request";\n   var proxy = {"host": "192.168.0.5", "port": "100"};\n   var userAgent = "xxx";\n   var followRedirects = false;\n   var requestBody = JSON.stringify({"A": 111});\n   var ignoreContentType = true;\n   var ignoreHttpErrors = true;\n   var referrer = "xxx";\n   var header = {\n       "Content-Type": " application/json;  charset=UTF-8",\n       "User-Agent": "from test",\n       "ddd": md,\n       "dd2": md2,\n       "imei": device.getIMEI()\n   };\n   var cookie = {\n       "cookie1": "tst1",\n       "cookie2": "tst2"\n   };\n   var data = {\n       "a1": "aaa",\n       "pwd2": md,\n       "md2": md2\n   };\n   var file = [\n       {\n           "key": "file",\n           "fileName": "f.png",\n           "filePath": "D:/sb.png"\n       },\n       {\n           "key": "file",\n           "fileName": "f2.png",\n           "filePath": "D:/sde.png",\n           "contentType": "image/png"\n       }\n   ];\n   var params = {\n       "url": url,\n       "method": "POST",\n       "userAgent": userAgent,\n       "referrer": "baidu.com",\n       "cookie": cookie,\n       "data": data,\n       "file": file\n   };\n   var x = http.request(params);\n   if (x) {\n       logd("header=> " + x.header);\n       logd("cookie=> " + x.cookie);\n       logd("statusCode=> " + x.statusCode);\n       logd("statusMessage=> " + x.statusMessage);\n       logd("charset=> " + x.charset);\n       logd("contentType=> " + x.contentType);\n       logd("body=> " + x.body);\n   } else {\n       loge("\u65e0\u7ed3\u679c");\n   }\n}\nmain();\n'))),(0,l.kt)("h2",{id:"httprequestex-\u4e07\u80fd\u8bf7\u6c42\u51fd\u6570\u6269\u5c55"},"http.requestEx \u4e07\u80fd\u8bf7\u6c42\u51fd\u6570(\u6269\u5c55)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP\u4e07\u80fd\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"@param param  map\u53c2\u6570\uff0c\u5305\u542b\u7684\u53c2\u6570\u6709",(0,l.kt)(u,{mdxType:"Br"}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"url:\u5b57\u7b26\u4e32 \u8bf7\u6c42\u7684\u5730\u5740",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"timeout:\u6574\u578b\u6beb\u79d2\uff0c\u8d85\u65f6\u65f6\u95f4",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"method: POST ,GET,PUT \u5b57\u7b26\u4e32\uff0c\u4ee3\u8868\u8bf7\u6c42\u7684\u65b9\u6cd5",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},'proxy: \u4ee3\u7406\u5730\u5740\uff0cmap\u53c2\u6570 \u5305\u542b\u4e3b\u673a\u548c\u7aef\u53e3 \u4f8b\u5982 {"host":"11","port":111}',(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"followRedirects:\u662f\u5426\u81ea\u52a8\u8df3\u8f6c true \u6216\u8005 false",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"requestBody: \u8bf7\u6c42\u7684body\u4f53\uff0c\u5982\u679c\u662fJSON\uff0c\u5c31\u662fJSON\u5b57\u7b26\u4e32",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"userAgent:\u5b57\u7b26\u4e32 HTTP \u7684UA ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"ignoreContentType:\u662f\u5426\u5ffd\u7565\u5185\u5bb9\u7c7b\u578b true \u6216\u8005 false ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"ignoreHttpErrors:\u662f\u5426\u5ffd\u7565\u9519\u8bef true \u6216\u8005 false  ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"maxBodySize : \u6574\u578b\uff0cHTTP BODY\u6700\u5927\u503c  ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},"referrer:\u5b57\u7b26\u4e32\uff0c\u8bf7\u6c42\u6765\u6e90  ",(0,l.kt)(u,{mdxType:"Br"})),(0,l.kt)("li",{parentName:"ul"},'header:  HTTP \u8bf7\u6c42\u5934\uff0cmap\u53c2\u6570,\u4f8b\u5982 {"UA":"test"}'),(0,l.kt)("li",{parentName:"ul"},'cookie: HTTP \u8bf7\u6c42Cookie\uff0cmap\u53c2\u6570, \u4f8b\u5982 {"a":1} '),(0,l.kt)("li",{parentName:"ul"},'data:HTTP POST\u7684\u6570\u636e\uff0cmap\u53c2\u6570, \u4f8b\u5982 {"a":1} '),(0,l.kt)("li",{parentName:"ul"},"file:\u8981\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u96c6\u5408\u53c2\u6570\uff0c\u4f8b\u5982"),(0,l.kt)("li",{parentName:"ul"},'[{"key":"a1","fileName":"a.txt","filePath":"D:/"},{"key":"a1","fileName":"a.jpg","filePath":"D:/","contentType":"image/jpg"}]',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5176\u4e2dcontentType\u53ef\u6709\u53ef\u65e0"))),(0,l.kt)("li",{parentName:"ul"},"responseCharset: \u5b57\u7b26\u4e32\uff0c\u5f3a\u5236\u8bbe\u7f6e\u54cd\u5e94\u5185\u5bb9\u7684\u7f16\u7801\u96c6"))),(0,l.kt)("li",{parentName:"ul"},"@return Response \u5bf9\u8c61\u6216\u8005null")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    http_request();\n}\n\nfunction http_request() {\n   //url:string\n   //timeout:int ms\n   //method: post ,get\n   //proxy: {"host":"11","port":111}\n   //followRedirects:true false\n   //requestBody: string\n   //userAgent:string\n   //ignoreContentType:true false\n   //ignoreHttpErrors:true false\n   //maxBodySize : int\n   //referrer:string\n   //header:{"UA":"test"}\n   //cookie:{"a":1}\n   //data:{"a":1}\n   //file:[{}]\n   //responseCharset: string\n   var md = utils.dataMd5("12345");\n   var md2 = utils.fileMd5("D:/sb.png");\n   var url = "http://192.168.0.5:8081/api/request";\n   var proxy = {"host": "192.168.0.5", "port": "100"};\n   var userAgent = "xxx";\n   var followRedirects = false;\n   var requestBody = JSON.stringify({"A": 111});\n   var ignoreContentType = true;\n   var ignoreHttpErrors = true;\n   var referrer = "xxx";\n   var header = {\n       "Content-Type": " application/json;  charset=UTF-8",\n       "User-Agent": "from test",\n       "ddd": md,\n       "dd2": md2,\n       "imei": device.getIMEI()\n   };\n   var cookie = {\n       "cookie1": "tst1",\n       "cookie2": "tst2"\n   };\n   var data = {\n       "a1": "aaa",\n       "pwd2": md,\n       "md2": md2\n   };\n   var file = [\n       {\n           "key": "file",\n           "fileName": "f.png",\n           "filePath": "D:/sb.png"\n       },\n       {\n           "key": "file",\n           "fileName": "f2.png",\n           "filePath": "D:/sde.png",\n           "contentType": "image/png"\n       }\n   ];\n   var params = {\n       "url": url,\n       "method": "POST",\n       "userAgent": userAgent,\n       "referrer": "baidu.com",\n       "cookie": cookie,\n       "data": data,\n       "file": file\n   };\n   var x = http.requestEx(params);\n   if (x) {\n       logd("header=> " + x.header);\n        //\u76f4\u63a5\u53d6\u503c\n       logd("header=> " + x.header["Location"]);\n        for (var d  in x.header){\n                     logd("header key "+d +"  "+x.header[d]);\n                }\n       logd("cookie=> " + x.cookie);\nfor (var d  in x.cookie){\n                logd("cookie key "+d +"  "+x.cookie[d]);\n         }\n       logd("cookie=> " + x.cookie["aa"]);\n       logd("statusCode=> " + x.statusCode);\n       logd("statusMessage=> " + x.statusMessage);\n       logd("charset=> " + x.charset);\n       logd("contentType=> " + x.contentType);\n       logd("body=> " + x.body);\n   } else {\n       loge("\u65e0\u7ed3\u679c");\n   }\n}\nmain();\n'))),(0,l.kt)("h2",{id:"httpdownloadfile-\u4e0b\u8f7d\u6587\u4ef6"},"http.downloadFile \u4e0b\u8f7d\u6587\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u8fdc\u7a0b\u6587\u4ef6\u5230\u672c\u5730,\u652f\u6301\u65ad\u70b9\u7eed\u4f20"),(0,l.kt)("li",{parentName:"ul"},"@param remoteUrl \u8fdc\u7a0b\u6587\u4ef6URL"),(0,l.kt)("li",{parentName:"ul"},"@param file      \u8981\u4fdd\u5b58\u5230\u672c\u5730\u7684\u6587\u4ef6\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"@param timeout   \u4e0b\u8f7d\u8d85\u65f6\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},"@param headers \u2013 \u5934\u6807\u5fd7\u4f8b\u5982{\u201ca\u201d:\u201c11\u201d}"),(0,l.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var url = "https://imtt.dd.qq.com/16891/apk/DF4FD15AF9A9B51BA74D2710CF738EEF.apk?fsname=com.ishugui_3.9.2.3068_3923068.apk&csr=1bbd";\n    var x = http.downloadFile(url, "D:/ss.apk", 10 * 1000, {"User-Agent": "test"});\n    logd("download result->     " + x);\n}\nmain();\n'))),(0,l.kt)("h2",{id:"httpdownloadfiledefault-\u4e0b\u8f7d\u6587\u4ef6"},"http.downloadFileDefault \u4e0b\u8f7d\u6587\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u8fdc\u7a0b\u6587\u4ef6\u5230\u672c\u5730,\u652f\u6301\u65ad\u70b9\u7eed\u4f20\uff0c\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u4e3a30\u79d2"),(0,l.kt)("li",{parentName:"ul"},"@param remoteUrl \u8fdc\u7a0b\u6587\u4ef6URL"),(0,l.kt)("li",{parentName:"ul"},"@param file      \u8981\u4fdd\u5b58\u5230\u672c\u5730\u7684\u6587\u4ef6\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"@param headers \u2013 \u5934\u6807\u5fd7\u4f8b\u5982{\u201ca\u201d:\u201c11\u201d}"),(0,l.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var url = "https://imtt.dd.qq.com/16891/apk/DF4FD15AF9A9B51BA74D2710CF738EEF.apk?fsname=com.ishugui_3.9.2.3068_3923068.apk&csr=1bbd";\n    var x = http.downloadFileDefault(url, "D:/ss.apk", {"User-Agent": "test"});\n    toast("download result->     " + x);\n}\nmain();\n'))),(0,l.kt)("h2",{id:"httphttpgetdefault-get\u8bf7\u6c42"},"http.httpGetDefault GET\u8bf7\u6c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Http GET \u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"@param url \u8bf7\u6c42\u7684URL"),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},"@param headers \u2013 \u5934\u6807\u5fd7\u4f8b\u5982{\u201ca\u201d:\u201c11\u201d}"),(0,l.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32 \u8bf7\u6c42\u540e\u8fd4\u56de\u7684\u5b57\u7b26\u4e32")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var url = "http://192.168.0.5:8081/api/httpGet?a=1";\n    var x = http.httpGetDefault(url, 10 * 1000, {"User-Agent": "test"});\n    logd(" result->     " + x);\n    loge("result ->     " + x);\n}\nmain();\n'))),(0,l.kt)("h2",{id:"httphttpget-get\u8bf7\u6c42"},"http.httpGet GET\u8bf7\u6c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Http GET \u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"@param url     \u8bf7\u6c42\u7684URL"),(0,l.kt)("li",{parentName:"ul"},'@param params  \u53c2\u6570Map\u8868 \u4f8b\u5982 {"a":"1"} \u8fd9\u6837\u7684\u53c2\u6570\u6216\u8005\u5b57\u7b26\u4e32'),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},"@param headers \u2013 \u5934\u6807\u5fd7\u4f8b\u5982{\u201ca\u201d:\u201c11\u201d}"),(0,l.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32 \u8bf7\u6c42\u540e\u8fd4\u56de\u7684\u5b57\u7b26\u4e32")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var url = "http://192.168.0.5:8081/api/httpGet?a=1";\n    var pa = {"b": "22"};\n    var x = http.httpGet(url, pa, 10 * 1000, {"User-Agent": "test"});\n    logd(" result->     " + x);\n    loge("result ->     " + x);\n}\nmain();\n'))),(0,l.kt)("h2",{id:"httphttppost-post\u8bf7\u6c42"},"http.httpPost POST\u8bf7\u6c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Http Post \u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"@param url     \u8bf7\u6c42\u7684URL"),(0,l.kt)("li",{parentName:"ul"},'@param params  \u53c2\u6570\uff0c\u4f8b\u5982 {"a":"1"} \u8fd9\u6837\u7684\u53c2\u6570\u6216\u8005\u5b57\u7b26\u4e32'),(0,l.kt)("li",{parentName:"ul"},'@param files  \u8981\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u4f8b\u5982 {"file1":"D:/1.png"}\u8fd9\u6837\u7684\u6587\u4ef6\u53c2\u6570'),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},"@param headers \u2013 \u5934\u6807\u5fd7\u4f8b\u5982{\u201ca\u201d:\u201c11\u201d}"),(0,l.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32 \u8bf7\u6c42\u540e\u8fd4\u56de\u7684\u5b57\u7b26\u4e32")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    //\u4e0d\u5e26\u6587\u4ef6\u7684\u8bf7\u6c42\n    var url = "http://192.168.0.5:8081/api/httpPost";\n    var pa = {"b": "\u6211\u662fb\u7684\u503c"};\n    var x = http.httpPost(url, pa, null, 10 * 1000, {"User-Agent": "test"});\n    toast(" result->     " + x);\n    loge("result ->     " + x);\n}\nmain();\n'))),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    //\u5e26\u4e0a\u4f20\u6587\u4ef6\u7684\u8bf7\u6c42\n    var url = "http://192.168.0.5:8081/api/httpPost";\n    var pa = {"b": "\u6211\u662fb\u7684\u503c"};\n    var files = {"file1": "D:/p.json", "file2": "D:/z.xml"};\n    var x = http.httpPost(url, pa, files, 10 * 1000, {"User-Agent": "test"});\n    logd(" result->     " + x);\n    loge("result ->     " + x);\n}\nmain();\n'))),(0,l.kt)("h2",{id:"httppostjson-\u53d1\u9001json"},"http.postJSON \u53d1\u9001JSON"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP POST JSON\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"@param url \u8bf7\u6c42\u7684URL"),(0,l.kt)("li",{parentName:"ul"},"@param json  json\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u2013 \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},"@param headers \u2013 \u5934\u6807\u5fd7\u4f8b\u5982{\u201ca\u201d:\u201c11\u201d}"),(0,l.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32 \u8bf7\u6c42\u540e\u8fd4\u56de\u7684\u5b57\u7b26\u4e32")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var url = "http://192.168.0.5:8081/api/postJSON";\n    var pa = {"b": "\u6211\u662fb\u7684\u503c"};\n    var x = http.postJSON(url, pa, 10 * 1000, {"User-Agent": "test"});\n    logd(" result->     " + x);\n    loge("result ->     " + x);\n}\nmain();\n'))),(0,l.kt)("h2",{id:"httpnewwebsocket-websocket\u901a\u4fe1"},"http.newWebsocket websocket\u901a\u4fe1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2awebsocket"),(0,l.kt)("li",{parentName:"ul"},"@param url \u8981\u8fde\u63a5\u7684\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"@param header \u53c2\u6570\u5934"),(0,l.kt)("li",{parentName:"ul"},"@param type \u7c7b\u5e93\u7c7b\u578b\uff0c1 = okhttp3, 2 = javawebsocket"),(0,l.kt)("li",{parentName:"ul"},"@return {@link WebSocket } WebSocket\u5bf9\u8c61")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n    let result = [];\n    //\u65b0\u5efa\u4e00\u4e2aws\u8fde\u63a5\n    var ws = http.newWebsocket("ws://192.168.1.76:8081/websocket/device/call?deviceNo=111", null, 2);\n    // \u8bbe\u7f6etype=1\u7684\u65f6\u5019\u94fe\u63a5\u53c2\u6570\n    ws.setCallTimeout(5);\n    ws.setReadTimeout(5);\n    ws.setWriteTimeout(5);\n    //\u5fc3\u8df3\u68c0\u6d4b\n    ws.setPingInterval(1)\n\n    //\u8bbe\u7f6etype=2\u7684\u65f6\u5019\u5fc3\u8df3\u68c0\u6d4b\u65f6\u95f4\n    ws.setConnectionLostTimeout(5)\n    //\u8bbe\u7f6e\u8fde\u63a5\u6253\u5f00\u7684\u65f6\u5019\u76d1\u542c\u5668\n    ws.onOpen(function(ws1, code, msg) {\n        logi("onOpen code " + code + "  msg:" + msg);\n    })\n    //\u8bbe\u7f6e\u6709\u6587\u672c\u4fe1\u606f\u76d1\u542c\u5668\n    ws.onText(function(ws1, text) {\n        logi(" onText " + text);\n    })\n    //\u8bbe\u7f6e\u5173\u95ed\u65f6\u5019\u7684\u76d1\u542c\u5668\n    ws.onClose(function(ws1, code, reason) {\n        logi(" onClose  " + code + "  reason : " + reason + " remote:");\n    })\n      ws.onError(function(ws1, msg) {\n        logi(" onError  " + msg);\n        result[0] = "error";\n    })\n    // bytes \u662f java\u7684bytes\u6570\u7ec4 \u5bf9\u8c61\n    ws.onBinary(function(ws1, bytes) {\n        //\u8f6c\u6210java\u7684\n        logi(" onBinary  " + new java.lang.String(bytes));\n    })\n\n    //\u5f00\u59cb\u8fde\u63a5   \u963b\u585e\u7684\n    let r = ws.connect(10000);\n    //\u8bbe\u7f6e\u81ea\u52a8\u91cd\u8fde\n    ws.setAutoReconnect(true);\n    logd("connect {} rr = {}", result[0], r);\n\n    while (true) {\n        logd("isconnect " + ws.isConnected());\n        sleep(1000) \n              if (ws.isConnected()) {\n            b = ws.sendText("new Date-> " + new Date())\n                      logd("send => " + b);\n            sleep(1000)\n            // java\u7684\u5b57\u7b26\u4e32\u8f6c\u5b57\u8282\n            ws.sendBinary(new java.lang.String("test").getBytes());\n        } else {\n            //\u91cd\u7f6e\u94fe\u63a5\n            //                let reset = ws.reset();\n            //                logd("reset {}",reset)\n            //                if (reset) {\n            //                    logd("\u5f00\u59cb\u91cd\u8fde...");\n            //                    let rc = ws.connect(10000);\n            //                    logd("\u91cd\u8fde--\x3e "+rc);\n            //                }\n        }\n    }\n    logd("isClosed " + ws.isClosed())\n      sleep(1000)\n    //\u5173\u95ed\u8fde\u63a5\n    ws.close();\n}\nmain();\n'))),(0,l.kt)("h3",{id:"websocket-\u5bf9\u8c61\u51fd\u6570"},"WebSocket \u5bf9\u8c61\u51fd\u6570"),(0,l.kt)("h4",{id:"connect-\u540c\u6b65\u8fde\u63a5"},"connect \u540c\u6b65\u8fde\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u5f02\u6b65\u8fde\u63a5"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"reset-\u91cd\u7f6e\u8fde\u63a5"},"reset \u91cd\u7f6e\u8fde\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u91cd\u7f6e\u8fde\u63a5"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"isclosed-\u662f\u5426\u5173\u95ed"},"isClosed \u662f\u5426\u5173\u95ed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u5df2\u7ecf\u5173\u95ed"),(0,l.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u5df2\u7ecf\u5173\u95ed\uff0cfalse \u672a\u5173\u95ed"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"isconnected-\u662f\u5426\u8fde\u63a5"},"isConnected \u662f\u5426\u8fde\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u5df2\u7ecf\u8fde\u63a5\u4e86"),(0,l.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u5df2\u7ecf\u8fde\u63a5\uff0cfalse \u672a\u5173\u95ed"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"close-\u5173\u95ed"},"close \u5173\u95ed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u95ed\u94fe\u63a5"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"sendtext-\u53d1\u9001\u6587\u672c"},"sendText \u53d1\u9001\u6587\u672c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u6587\u672c\u6d88\u606f"),(0,l.kt)("li",{parentName:"ul"},"@param text \u6587\u672c\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"sendbinary-\u53d1\u9001\u5b57\u8282"},"sendBinary \u53d1\u9001\u5b57\u8282"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u5b57\u8282\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"@param bin java byte \u6570\u7ec4\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"onopen-\u6253\u5f00\u56de\u8c03"},"onOpen \u6253\u5f00\u56de\u8c03"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u8fde\u63a5\u6253\u5f00\u7684\u65f6\u5019\u4e8b\u4ef6\u56de\u8c03"),(0,l.kt)("li",{parentName:"ul"},"@param callback \u56de\u8c03\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"ontext-\u6587\u4ef6\u56de\u8c03"},"onText \u6587\u4ef6\u56de\u8c03"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6709\u6587\u672c\u4fe1\u606f\u53d1\u9001\u8fc7\u6765\u7684\u65f6\u5019\u56de\u8c03"),(0,l.kt)("li",{parentName:"ul"},"@param callback \u56de\u8c03\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"onclose-\u5173\u95ed\u56de\u8c03"},"onClose \u5173\u95ed\u56de\u8c03"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u5173\u95ed\u7684\u65f6\u5019\u56de\u8c03"),(0,l.kt)("li",{parentName:"ul"},"@param callback \u56de\u8c03\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"onerror-\u9519\u8bef\u56de\u8c03"},"onError \u9519\u8bef\u56de\u8c03"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\u56de\u8c03"),(0,l.kt)("li",{parentName:"ul"},"@param callback \u56de\u8c03\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"onbinary-\u4e8c\u8fdb\u5236\u6d88\u606f\u56de\u8c03"},"onBinary \u4e8c\u8fdb\u5236\u6d88\u606f\u56de\u8c03"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6709\u4e8c\u8fdb\u5236\u6570\u636e\u8fc7\u6765\u7684\u65f6\u5019\u56de\u8c03"),(0,l.kt)("li",{parentName:"ul"},"@param callback \u56de\u8c03\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"setreadtimeout-\u8bbe\u7f6e\u8bfb\u6570\u636e\u8d85\u65f6\u65f6\u95f4"},"setReadTimeout \u8bbe\u7f6e\u8bfb\u6570\u636e\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u521b\u5efawebsocket\u94fe\u63a5\u7c7b\u578b=1\u7684\u65f6\u5019\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8bfb\u6570\u636e\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u5355\u4f4d\u662f\u79d2"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"setwritetimeout-\u8bbe\u7f6e\u5199\u6570\u636e\u8d85\u65f6\u65f6\u95f4"},"setWriteTimeout \u8bbe\u7f6e\u5199\u6570\u636e\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u521b\u5efawebsocket\u94fe\u63a5\u7c7b\u578b=1\u7684\u65f6\u5019\u4f7f\u7528")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u5199\u6570\u636e\u8d85\u65f6\u65f6\u95f4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@param timeout \u5355\u4f4d\u662f\u79d2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"p",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("li",{parentName:"ul"})),(0,l.kt)("h4",{id:"setpinginterval-\u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4"},"setPingInterval \u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u521b\u5efawebsocket\u94fe\u63a5\u7c7b\u578b=1\u7684\u65f6\u5019\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u5355\u4f4d\u662f\u79d2"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"setconnectionlosttimeout-\u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4"},"setConnectionLostTimeout \u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u521b\u5efawebsocket\u94fe\u63a5\u7c7b\u578b=2\u7684\u65f6\u5019\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u5355\u4f4d\u662f\u79d2"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))),(0,l.kt)("h4",{id:"setautoreconnect-\u8bbe\u7f6e\u81ea\u52a8\u91cd\u8fde"},"setAutoReconnect \u8bbe\u7f6e\u81ea\u52a8\u91cd\u8fde"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u81ea\u52a8\u91cd\u8fde"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ee3\u7801\u770b",(0,l.kt)("a",{parentName:"li",href:"/iosdocs/zh-cn/funcs/http-api#httpnewwebsocket-websocket%E9%80%9A%E4%BF%A1"},"\u4f8b\u5b50"))))}c.isMDXComponent=!0}}]);