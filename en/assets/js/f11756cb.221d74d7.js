"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[7433],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),N=u(a),k=l,s=N["".concat(m,".").concat(k)]||N[k]||c[k]||r;return a?n.createElement(s,p(p({ref:t},o),{},{components:a})):n.createElement(s,p({ref:t},o))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=N;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var u=2;u<r;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},8501:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=a(3117),l=a(102),r=(a(7294),a(3905)),p=["components"],i={},m=void 0,u={unversionedId:"zh-cn/ecloud2/ecloudapi/ecloud-api",id:"zh-cn/ecloud2/ecloudapi/ecloud-api",title:"ecloud-api",description:"\u8bf4\u660e",source:"@site/docs/zh-cn/ecloud2/ecloudapi/ecloud-api.md",sourceDirName:"zh-cn/ecloud2/ecloudapi",slug:"/zh-cn/ecloud2/ecloudapi/ecloud-api",permalink:"/en/docs/zh-cn/ecloud2/ecloudapi/ecloud-api",draft:!1,tags:[],version:"current",frontMatter:{}},o={},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:3},{value:"\u7cfb\u7edf\u4efb\u52a1\u6267\u884c\u6d41\u7a0b",id:"\u7cfb\u7edf\u4efb\u52a1\u6267\u884c\u6d41\u7a0b",level:3},{value:"\u8be6\u7ec6\u63a5\u53e3\u8bf4\u660e",id:"\u8be6\u7ec6\u63a5\u53e3\u8bf4\u660e",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:4},{value:"1\u3001\u5fc3\u8df3\u4efb\u52a1\u4fe1\u606f\u63a5\u53e3",id:"1\u5fc3\u8df3\u4efb\u52a1\u4fe1\u606f\u63a5\u53e3",level:4},{value:"2\u3001\u83b7\u53d6\u5b58\u50a8\u6570\u636e\u63a5\u53e3",id:"2\u83b7\u53d6\u5b58\u50a8\u6570\u636e\u63a5\u53e3",level:4},{value:"3\u3001\u4e0a\u62a5\u6570\u636e\u5b58\u50a8\u63a5\u53e3",id:"3\u4e0a\u62a5\u6570\u636e\u5b58\u50a8\u63a5\u53e3",level:4},{value:"4\u3001\u66f4\u65b0\u6570\u636e\u5b58\u50a8\u63a5\u53e3",id:"4\u66f4\u65b0\u6570\u636e\u5b58\u50a8\u63a5\u53e3",level:4},{value:"5\u3001\u5220\u9664\u6570\u636e\u5b58\u50a8\u63a5\u53e3",id:"5\u5220\u9664\u6570\u636e\u5b58\u50a8\u63a5\u53e3",level:4},{value:"6\u3001\u8ffd\u52a0\u4e00\u6761\u6570\u636e\u63a5\u53e3",id:"6\u8ffd\u52a0\u4e00\u6761\u6570\u636e\u63a5\u53e3",level:4},{value:"6\u3001\u5220\u9664\u4e00\u6761\u6570\u636e\u63a5\u53e3",id:"6\u5220\u9664\u4e00\u6761\u6570\u636e\u63a5\u53e3",level:4},{value:"6\u3001\u4e0a\u62a5\u811a\u672c\u5f02\u5e38\u63a5\u53e3",id:"6\u4e0a\u62a5\u811a\u672c\u5f02\u5e38\u63a5\u53e3",level:4},{value:"7\u3001\u4e0a\u62a5\u547d\u4ee4\u6267\u884c\u65e5\u5fd7\u63a5\u53e3",id:"7\u4e0a\u62a5\u547d\u4ee4\u6267\u884c\u65e5\u5fd7\u63a5\u53e3",level:4}],N={toc:c};function k(e){var t=e.components,i=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},N,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9610\u8ff0: \u672c\u6587\u6863\u4e3b\u8981\u63cf\u8ff0ecloud\u4e91\u63a7\u7cfb\u7edf\u7684\u901a\u4fe1\u534f\u8bae\uff0c\u5305\u62ec\u4efb\u52a1\u4e0b\u53d1\u6d41\u7a0b\u3001\u6570\u636e\u56de\u4f20\u7b49\uff0c\u5bf9\u4e8e\u4e0d\u4f7f\u7528EC\u7f16\u5199\u811a\u672c\uff0c\u4f46\u662f\u60f3\u63a5\u5165ecloud\u4e91\u63a7\u7684\u5ba2\u6237\uff0c\u8bf7\u8be6\u7ec6\u9605\u8bfb\u8be5\u6587\u6863"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528: \u672c\u6587\u6863\u9002\u7528ecloud 2.0 \u4ee5\u4e0a\u7248\u672c")),(0,r.kt)("h3",{id:"\u7cfb\u7edf\u4efb\u52a1\u6267\u884c\u6d41\u7a0b"},"\u7cfb\u7edf\u4efb\u52a1\u6267\u884c\u6d41\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8be5\u7ae0\u8282\u63cf\u8ff0\u4e86ecloud\u7cfb\u7edf\u5982\u4f55\u4e0b\u53d1\u4efb\u52a1\uff0c\u5177\u4f53\u5982\u4f55\u521b\u5efa\u4efb\u52a1\u8bf7\u53c2\u8003ecloud.zip\u538b\u7f29\u6587\u4ef6\u4e2d\u7684\u90e8\u7f72\u6587\u6863\u8bf4\u660e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u89e3\u91ca\uff1a\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://easyclick.gitee.io/docs/#/zh-cn/ecloud2/intro"},"https://easyclick.gitee.io/docs/#/zh-cn/ecloud2/intro"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u91cd\u8981\u8bf4\u660e\uff1a\u8bbe\u5907\u7f16\u53f7\u662f\u7cfb\u7edf\u552f\u4e00\u8ba4\u5b9a\u8bbe\u5907\u7684\u6807\u8bc6\uff0c\u9700\u8981\u5728\u624b\u673a\u7aef\u548c\u4e91\u63a7\u7aef\u4e00\u4e00\u5bf9\u5e94\uff0cecloud 2.0 \u4ee5\u4e0a\u7248\u672c\u4f7f\u7528\u7684\u662f\u666e\u901a\u7684HTTP\u534f\u8bae")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8be6\u7ec6\u6d41\u7a0b"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20210601101850451",src:a(6937).Z,width:"1678",height:"1304"})))),(0,r.kt)("h3",{id:"\u8be6\u7ec6\u63a5\u53e3\u8bf4\u660e"},"\u8be6\u7ec6\u63a5\u53e3\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u901a\u4fe1\u91c7\u7528http\u534f\u8bae\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e3apost\uff0c\u6570\u636e\u683c\u5f0f\u4e3apost json, Java\u7684jsoup\u8bf7\u6c42\u5b9e\u4f8b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},' public static String postJSON(String url, JSONObject jsonObject, int timeout) {\n      \n        try {\n            Connection.Response response\n                    = Jsoup.connect(url)\n                    .ignoreHttpErrors(true)\n                    .ignoreContentType(true)\n                    .maxBodySize(100 * 1024 * 1024)\n                    .requestBody(jsonObject.toString())\n                    .header("Content-Type", "application/json;charset=UTF-8")\n                    .timeout(timeout)\n                    .method(Connection.Method.POST)\n                    .execute();\n            if (response != null) {\n                String s = response.body();\n               \n                return s;\n            }\n        } catch (IOException e) {\n            \n        }\n        return null;\n    }\n')))),(0,r.kt)("h4",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,r.kt)("p",null,"1\u3001\u7edf\u4e00\u8bf7\u6c42\u63a5\u53e3\u53c2\u6570\u662fJSON\u683c\u5f0f\uff0cdata\u8282\u70b9\u662f\u5b9e\u9645\u7684\u8bf7\u6c42\u6570\u636e\uff0c\u8bf7\u5bf9data \u7684JSON\u6570\u636e\u8fdb\u884cbase64\u7f16\u7801\u540e\uff0c\u653e\u5230data\u8282\u70b9\u4e2d"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "deviceNo":"001",//\u8bbe\u5907\u7f16\u53f7\n "data":"eyJkZXZpY2VObyI6IjAwMSIsImFuZHJvaWRJZCI6IjMzMzY5MzdlNDBmMmE4NDAiLCJicmFuZCI6\\nIkhPTk9SIiwibW9kZWwiOiJZQUwtQUw1MCIsIm9zVmVyc2lvbiI6IjEwIiwic2RDYXJkU3BhY2Ui\\nOjExODQwNzI5OTA3Miwic2RDYXJkTGVmdFNwYWNlIjozMDIwMjQ0MTcyOCwidG90YWxNZW1vcnki\\nOjU5NTAzNDUyMTYsImF2YWlsTWVtb3J5Ijo2NTAyMTEzMjgsImJhdHRlcnkiOjU1LCJiYXR0ZXJ5\\nVGVtcCI6MjcsImlzQ2hhcmdpbmciOjEsImJyaWdodG5lc3MiOjY4LCJhcGtWZXJzaW9uIjoiNi45\\nLjAiLCJlY1ZlcnNpb24iOiI2LjkuMCIsInJ1bk1vZGUiOiLml6Dpmpznoo0iLCJzZXJ2aWNlT2si\\nOjAsImNtZFN1YklkIjoiIiwiYWN0aW9uIjoiaGVhcnRiZWF0In0=\\n"\n}\n')),(0,r.kt)("p",null,"data\u5728base64\u89e3\u7801\u540e\uff0c\u662f\u771f\u6b63\u8981\u63d0\u4ea4\u7684JSON\u6570\u636e"),(0,r.kt)("p",null,"2\u3001\u7edf\u4e00\u8fd4\u56de\u53c2\u6570"),(0,r.kt)("p",null,"data\u662f\u8fd4\u56de\u7684\u53c2\u6570base64\u52a0\u5bc6\u7684\u6570\u636e\uff0c\u8bf7\u6267\u884c\u8fdb\u884cbase64\u89e3\u5bc6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 0,//0 \u4ee3\u8868\u6b63\u5e38\uff0c\u5176\u4ed6\u5747\u4e0d\u6b63\u5e38\n    "msg": "", //\u9519\u8bef\u6d88\u606f\n    "data":"xxxxxx"\n}\n')),(0,r.kt)("p",null,"3\u3001\u4ee5\u4e0b\u63a5\u53e3\u5c06\u4e0d\u5bf9\u8bf7\u6c42\u548c\u8fd4\u56de\u8fdb\u884c\u63cf\u8ff0\uff0c\u53ea\u5bf9\u8bf7\u6c42\u5b9e\u9645\u7684data\u8282\u70b9\u5305\u542b\u7684\u5b57\u6bb5\u8fdb\u884c\u63cf\u8ff0"),(0,r.kt)("h4",{id:"1\u5fc3\u8df3\u4efb\u52a1\u4fe1\u606f\u63a5\u53e3"},"1\u3001\u5fc3\u8df3\u4efb\u52a1\u4fe1\u606f\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8be5\u63a5\u53e3\u4f20\u9012\u5f53\u524d\u6267\u884c\u7684\u4efb\u52a1\u4fe1\u606f\u548c\u6d88\u606f\uff0c\u4e5f\u4f20\u9012\u8bbe\u5907\u72b6\u6001\uff0c\u590d\u7528\u63a5\u53e3\u6a21\u5f0f\uff0c\u4f20\u9012\u7684\u6570\u636e\u4f1a\u5728\u4e91\u63a7\u7cfb\u7edf-\u76d1\u63a7\u544a\u8b66-\u8bbe\u5907\u76d1\u63a7\u4e2d\u5c55\u793a\u51fa\u6765")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570\u6709\u4e09\u79cd\u60c5\u51b5\uff0c1\u65e0\u4efb\u52a1\u548c\u547d\u4ee4\uff0c2 \u4e00\u952e\u547d\u4ee4\u6d88\u606f\uff0c3 \u4efb\u52a1\u6d88\u606f\uff0c\u5177\u4f53\u67e5\u770b\u5b9e\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u540d\u79f0 : ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1:8099/rapi/heartbeat"},"http://192.168.0.1:8099/rapi/heartbeat"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f\uff1aPOST JSON\u65b9\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"data\u662f\u5b9e\u9645\u63d0\u4ea4\u7684JSON\u6570\u636e\u7684base64\u7f16\u7801"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "deviceNo":"001",//\u8bbe\u5907\u7f16\u53f7\n "data":"eyJkZXZpY2VObyI6IjAwMSIsImFuZHJvaWRJZCI6IjMzMzY5MzdlNDBmMmE4NDAiLCJicmFuZCI6\\nIkhPTk9SIiwibW9kZWwiOiJZQUwtQUw1MCIsIm9zVmVyc2lvbiI6IjEwIiwic2RDYXJkU3BhY2Ui\\nOjExODQwNzI5OTA3Miwic2RDYXJkTGVmdFNwYWNlIjozMDIwMjQ0MTcyOCwidG90YWxNZW1vcnki\\nOjU5NTAzNDUyMTYsImF2YWlsTWVtb3J5Ijo2NTAyMTEzMjgsImJhdHRlcnkiOjU1LCJiYXR0ZXJ5\\nVGVtcCI6MjcsImlzQ2hhcmdpbmciOjEsImJyaWdodG5lc3MiOjY4LCJhcGtWZXJzaW9uIjoiNi45\\nLjAiLCJlY1ZlcnNpb24iOiI2LjkuMCIsInJ1bk1vZGUiOiLml6Dpmpznoo0iLCJzZXJ2aWNlT2si\\nOjAsImNtZFN1YklkIjoiIiwiYWN0aW9uIjoiaGVhcnRiZWF0In0=\\n"\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"data\u5bf9\u5e94\u7684JSON\u5b57\u6bb5\u5b9a\u4e49"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "apkVersion": "5.12.0", // \u6253\u5305\u540e\u7684APK\u7248\u672c\uff0c\u975eEC APK\u63a5\u5165\u7684\u53ef\u5ffd\u7565\n    "ecVersion": "5.12.0", //EC\u6e90\u7248\u672c\uff0c\u975eEC APK\u63a5\u5165\u7684\u53ef\u5ffd\u7565\n    "imei": "123333",//\u624b\u673a\u7684IMEI\u53f7\uff0c\u53ef\u4ee5\u4e3a\u7a7a\n    "deviceNo": "001",//\u624b\u673a\u7684\u8bbe\u5907\u7f16\u53f7\uff0c\u4e0d\u80fd\u4e3a\u7a7a\n    "androidId": "9283223",//\u624b\u673a\u7684androidid\uff0c\u53ef\u4ee5\u4e3a\u7a7a\n    "brand": "HUWEI",//\u624b\u673a\u54c1\u724c\uff0c\u53ef\u4ee5\u4e3a\u7a7a\n    "model": "A69",//\u624b\u673a\u7684\u673a\u578b\uff0c\u53ef\u4ee5\u4e3a\u7a7a\n    "osVersion": "6.1",//\u624b\u673a\u7684\u7248\u672c\u53f7\uff0c\u53ef\u4ee5\u4e3a\u7a7a\n    "sdCardSpace": 10240000,//\u624b\u673a\u7684\u5b58\u50a8\u5361\u603b\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4e3a0\n    "sdCardLeftSpace": 1024000,//\u624b\u673a\u7684\u5269\u4f59\u5b58\u50a8\u5361\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4e3a0\n    "availMemory": 102400000,//\u53ef\u7528\u5185\u5b58\uff0c\u53ef\u4ee5\u4e3a0\n    "totalMemory": 1024000000,//\u603b\u5185\u5b58\uff0c\u53ef\u4ee5\u4e3a0\n    "battery": 90,//\u5f53\u524d\u7535\u91cf\uff0c\u53ef\u4ee5\u4e3a0\uff0c\u6700\u597d\u4f20\u9012\uff0c\u65b9\u4fbf\u76d1\u63a7\u544a\u8b66\n    "batteryTemp": 30,//\u5f53\u524d\u7535\u6c60\u6e29\u5ea6\uff0c\u53ef\u4ee5\u4e3a0\uff0c\u6700\u597d\u4f20\u9012\uff0c\u65b9\u4fbf\u76d1\u63a7\u544a\u8b66\n    "isCharging": 1,//\u662f\u5426\u5728\u5145\u7535\uff0c1\u662f 0\u5426\n    "brightness": 100,//\u5c4f\u5e55\u4eae\u5ea6\uff0c\u53ef\u4ee5\u4e3a0\n    "runMode": "\u65e0\u969c\u788d",//\u8fd0\u884c\u6a21\u5f0f\uff0c\u4ee3\u7406\u6216\u8005\u65e0\u969c\u788d\uff0c\u975eEC APK\u63a5\u5165\u53ef\u5ffd\u7565\n    "serviceOk": 1,// \u81ea\u52a8\u5316\u670d\u52a1\u662f\u5426\u6b63\u5e38\uff0c1\u662f 0\u5426\uff0c\u975eEC APK\u63a5\u5165\u53ef\u5ffd\u7565\n    "action": "heartbeat",//\u8bf7\u6c42\u7c7b\u578b\uff0c\u56fa\u5b9a\u4e3aheartbeat\n    "taskId": "123",//\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1ID\uff0c\u5982\u679c\u5f53\u524d\u6b63\u5728\u6267\u884c\u4efb\u52a1\u4e3a\u5fc5\u4f20\uff0c\u9632\u6b62\u591a\u6b21\u4e0b\u53d1\u4efb\u52a1\n    "taskName": "\u6d4b\u8bd5\u4efb\u52a1",//\u5f53\u524d\u6b63\u5728\u6267\u884c\u4efb\u52a1\u7684\u540d\u79f0\n    "cmdSubId": "",//\u5f53\u524d\u6267\u884c\u4e00\u952e\u547d\u4ee4\u7684ID\uff0c\u5982\u679c\u6b63\u5728\u6267\u884c\u547d\u4ee4\uff0c\u8fd9\u4e2a\u503c\u4e3a\u5fc5\u4f20\n    "msg":"\u6b63\u5728\u6253\u5f00APP",//\u6d88\u606f\uff0c\u4f1a\u5728\u4e91\u63a7-\u8bbe\u5907\u76d1\u63a7\u4e2d\u770b\u5230\u8be5\u6d88\u606f\n  "createTimestamp":1509273923//\u5f53\u524d\u65f6\u95f4\uff0c\u6beb\u79d2\u7ea7\u522b\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570\uff08\u65e0\u4efb\u52a1\u8fd4\u56de\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "resp"\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570\uff08\u4e00\u952e\u547d\u4ee4\u8fd4\u56de\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "where", // \u4efb\u52a1\u54cd\u5e94,\u503c\u4e3a where\uff1a\u67e5\u627e\u8bbe\u5907\uff0c\n    //inst\uff1a\u5b89\u88c5apk\uff0crebphone\uff1a\u91cd\u542f\u624b\u673a\n    //stsc\uff1a\u505c\u6b62\u811a\u672c\uff0cshellcmd\uff1a\u6267\u884cshell\u547d\u4ee4\n    //stsc2: \u505c\u6b62\u811a\u672c\n    "cmdSubId": "", //\u547d\u4ee4\u7684ID\n    "content": "\u4e0b\u8f7d\u5730\u5740\u6216\u8005shell\u547d\u4ee4" //\u5f53action=inst,\u8fd9\u4e2a\u662fapk\u4e0b\u8f7d\u5730\u5740\n    //\u5f53action=shellcmd\u65f6\uff0c\u8fd9\u4e2a\u503c\u662f\u547d\u4ee4\u5b57\u7b26\u4e32\n}\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u53c2\u6570\uff08\u4efb\u52a1\u8fd4\u56de\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "task", //\u4efb\u52a1\u7c7b\u578b\u7684\u8fd4\u56de\n    "taskId": "123", //\u4e91\u7aef\u4e3b\u4efb\u52a1ID\n    "taskName": "\u6d4b\u8bd5\u4efb\u52a1", //\u4e91\u7aef\u4e3b\u4efb\u52a1\u540d\u79f0\n    "scriptId": "123", //\u811a\u672c\u7684\u4e91\u7aefID\n    "scriptName": "\u6d4b\u8bd5\u811a\u672c", //\u811a\u672c\u540d\u79f0\n    "scriptUrl": "http://192.168.0.3:8099/profile/a.js", //\u811a\u672c\u7684\u4e0b\u8f7d\u5730\u5740\n    "scriptVersion": "1.0", //\u811a\u672c\u7684\u7248\u672c\u53f7\n    "scriptMd5": "xxxxx", //\u811a\u672c\u6587\u4ef6\u7684MD5\uff0c\u7528\u4e8e\u6821\u9a8c\u6bd4\u8f83\u6587\u4ef6\u4e0b\u8f7d\u7ed3\u679c\n    "valueJson": { //\u4efb\u52a1\u7684\u53c2\u6570\u8bbe\u5b9a\uff0c\u4e91\u63a7\u540e\u53f0\u7684\u4efb\u52a1-\u53c2\u6570\u8bbe\u5b9a\u529f\u80fd\u4fdd\u5b58\u7684\u6570\u636e\n        "x1": "1",\n        "x2": "1111",\n        "x3": "3xd",\n        "x4": "1",\n        "aaa": "1",\n        "bb": ""\n    }\n}\n')),(0,r.kt)("h4",{id:"2\u83b7\u53d6\u5b58\u50a8\u6570\u636e\u63a5\u53e3"},"2\u3001\u83b7\u53d6\u5b58\u50a8\u6570\u636e\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u662f\u4e3a\u4e86\u83b7\u53d6\u4e91\u63a7\u7aef\u5b58\u50a8\u7684\u6570\u636e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u540d\u79f0: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1:8099/rapi/getData"},"http://192.168.0.1:8099/rapi/getData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f\uff1aPOST JSON\u65b9\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"data\u5bf9\u5e94\u7684JSON\u5b57\u6bb5\u5b9a\u4e49 "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "deviceNo":"001",//\u5f53\u524d\u8bbe\u5907\u7f16\u53f7\n  "groupName":"\u6570\u636e\u7ec41",// \u6570\u636e\u7ec4\u540d\u79f0\n  "dataName":"123455"//\u6570\u636e\u7684\u552f\u4e00\u6807\u8bc6\n}\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ //\u8bb0\u5f55\u5217\u8868\n    {\n        "id": "1", //\u6570\u636eid\n        "name": "xxx", //\u6570\u636e\u7684\u540d\u79f0\n        "content": "xxx" //\u6570\u636e\u5185\u5bb9\n    }\n]\n')))),(0,r.kt)("h4",{id:"3\u4e0a\u62a5\u6570\u636e\u5b58\u50a8\u63a5\u53e3"},"3\u3001\u4e0a\u62a5\u6570\u636e\u5b58\u50a8\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u662f\u4e3a\u4e86\u4e0a\u4f20\u8981\u5b58\u50a8\u7684\u6570\u636e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u540d\u79f0: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1:8099/rapi/addData"},"http://192.168.0.1:8099/rapi/addData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f\uff1aPOST JSON\u65b9\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dataKey":"13",//\u5b58\u50a8\u6570\u636e\u7684\u552f\u4e00\u6807\u793a\n  "groupName":"\u6570\u636e\u7ec41",//  \u6570\u636e\u7684\u7ec4\u540d\uff0c\u5982\u679c\u4e91\u7aef\u6ca1\u6709\u8fd9\u4e2a\u7ec4\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\n  "content":"ddd"//\u6570\u636e\u5185\u5bb9\n}\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": 1//\u5927\u4e8e0\u4ee3\u8868\u6b63\u5e38\uff0c\u5176\u4ed6\u4ee3\u8868\u4e0d\u6b63\u5e38\n}\n')))),(0,r.kt)("h4",{id:"4\u66f4\u65b0\u6570\u636e\u5b58\u50a8\u63a5\u53e3"},"4\u3001\u66f4\u65b0\u6570\u636e\u5b58\u50a8\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u662f\u4e3a\u4e86\u66f4\u65b0\u5b58\u50a8\u7684\u6570\u636e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u540d\u79f0: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1:8099/rapi/updateData"},"http://192.168.0.1:8099/rapi/updateData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f\uff1aPOST JSON\u65b9\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dataKey":"13",//\u5b58\u50a8\u6570\u636e\u7684\u552f\u4e00\u6807\u793a\n  "groupName":"\u6570\u636e\u7ec41",//  \u6570\u636e\u7684\u7ec4\u540d\n  "content":"ddd"//\u6570\u636e\u5185\u5bb9\n}\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": 1//\u5927\u4e8e0\u4ee3\u8868\u6b63\u5e38\uff0c\u5176\u4ed6\u4ee3\u8868\u4e0d\u6b63\u5e38\n}\n')))),(0,r.kt)("h4",{id:"5\u5220\u9664\u6570\u636e\u5b58\u50a8\u63a5\u53e3"},"5\u3001\u5220\u9664\u6570\u636e\u5b58\u50a8\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u662f\u4e3a\u4e86\u5220\u9664\u5b58\u50a8\u7684\u6570\u636e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u540d\u79f0: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1:8099/rapi/removeData"},"http://192.168.0.1:8099/rapi/removeData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f\uff1aPOST JSON\u65b9\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dataKey":"13",//\u5b58\u50a8\u6570\u636e\u7684\u552f\u4e00\u6807\u793a\n  "groupName":"\u6570\u636e\u7ec41"//  \u6570\u636e\u7684\u7ec4\u540d\n}\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": 1//\u5927\u4e8e0\u4ee3\u8868\u6b63\u5e38\uff0c\u5176\u4ed6\u4ee3\u8868\u4e0d\u6b63\u5e38\n}\n')))),(0,r.kt)("h4",{id:"6\u8ffd\u52a0\u4e00\u6761\u6570\u636e\u63a5\u53e3"},"6\u3001\u8ffd\u52a0\u4e00\u6761\u6570\u636e\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u662f\u4e3a\u4e86\u8ffd\u52a0\u5b58\u50a8\u7684\u6570\u636e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u540d\u79f0: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1:8099/rapi/appendOneLineData"},"http://192.168.0.1:8099/rapi/appendOneLineData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f\uff1aPOST JSON\u65b9\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dataKey":"13",//\u5b58\u50a8\u6570\u636e\u7684\u552f\u4e00\u6807\u793a\n  "groupName":"\u6570\u636e\u7ec41",//  \u6570\u636e\u7684\u7ec4\u540d\n  "content":"ddd"//\u6570\u636e\u5185\u5bb9\n}\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": 1//\u5927\u4e8e0\u4ee3\u8868\u6b63\u5e38\uff0c\u5176\u4ed6\u4ee3\u8868\u4e0d\u6b63\u5e38\n}\n')))),(0,r.kt)("h4",{id:"6\u5220\u9664\u4e00\u6761\u6570\u636e\u63a5\u53e3"},"6\u3001\u5220\u9664\u4e00\u6761\u6570\u636e\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u662f\u4e3a\u4e86\u5220\u9664\u4e00\u6761\u5b58\u50a8\u7684\u6570\u636e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u540d\u79f0: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1:8099/rapi/removeOneLineData"},"http://192.168.0.1:8099/rapi/removeOneLineData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f\uff1aPOST JSON\u65b9\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dataKey":"13",//\u5b58\u50a8\u6570\u636e\u7684\u552f\u4e00\u6807\u793a\n  "groupName":"\u6570\u636e\u7ec41",//  \u6570\u636e\u7684\u7ec4\u540d\n  "content":"ddd"//\u6570\u636e\u5185\u5bb9\n}\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": 1//\u5927\u4e8e0\u4ee3\u8868\u6b63\u5e38\uff0c\u5176\u4ed6\u4ee3\u8868\u4e0d\u6b63\u5e38\n}\n')))),(0,r.kt)("h4",{id:"6\u4e0a\u62a5\u811a\u672c\u5f02\u5e38\u63a5\u53e3"},"6\u3001\u4e0a\u62a5\u811a\u672c\u5f02\u5e38\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u662f\u4e3a\u4e86\u4e0a\u4f20\u811a\u672c\u51fa\u73b0\u5f02\u5e38\u95ee\u9898\uff0c\u65b9\u4fbf\u6392\u9519\uff0c\u5f02\u5e38\u65e5\u5fd7\u4f1a\u5728\u4e91\u63a7\u6570\u636e\u62a5\u8868-\u5f02\u5e38\u65e5\u5fd7\u4e2d\u5c55\u73b0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u540d\u79f0: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1:8099/rapi/reportExc"},"http://192.168.0.1:8099/rapi/reportExc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f\uff1aPOST JSON\u65b9\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n  "deviceNo":"001",//\u8bbe\u5907\u7f16\u53f7\n  "scriptName":"\u6d4b\u8bd51",//\u811a\u672c\u540d\u79f0\n  "content":"\u811a\u672c\u5f02\u5e38\u5185\u5bb9",//\u811a\u672c\u5f02\u5e38\u5185\u5bb9\n  "apkVersion":"1.2",//APK\u7684\u7248\u672c\n  "scriptVersion":"1.0"//\u811a\u672c\u7248\u672c\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n}\n")))),(0,r.kt)("h4",{id:"7\u4e0a\u62a5\u547d\u4ee4\u6267\u884c\u65e5\u5fd7\u63a5\u53e3"},"7\u3001\u4e0a\u62a5\u547d\u4ee4\u6267\u884c\u65e5\u5fd7\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u662f\u4e3a\u4e86\u4e0a\u4f20\u4e91\u63a7\u4e00\u952e\u547d\u4ee4\u4e0b\u53d1\u7684\u547d\u4ee4\u5230\u8bbe\u5907\uff0c\u8bbe\u5907\u6267\u884c\u7684\u6b65\u9aa4\u548c\u7ed3\u679c\u6570\u636e\uff0c\u6570\u636e\u4f1a\u5728\u4e91\u63a7\u4e00\u952e\u547d\u4ee4-\u660e\u7ec6\u4e2d\u5c55\u793a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u540d\u79f0: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1:8099/rapi/httpCmdLog"},"http://192.168.0.1:8099/rapi/httpCmdLog"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f\uff1aPOST JSON\u65b9\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n  "deviceNo":"001",//\u8bbe\u5907\u7f16\u53f7\n  "cmdSubId":"123",//\u547d\u4ee4\u7684\u5b50\u7f16\u53f7\n  "msg":"\u6267\u884c\u6210\u529f",//\u6d88\u606f\n  "createTimestamp":1509273923//\u5f53\u524d\u65f6\u95f4\uff0c\u6beb\u79d2\u7ea7\u522b\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n}\n")))))}k.isMDXComponent=!0},6937:function(e,t,a){t.Z=a.p+"assets/images/image-20210601101850451-a790561d14872546f07842622db7f9dd.png"}}]);