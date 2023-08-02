"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[5193],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),y=r,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={title:"EasyClick\u4e91\u63a7\u6587\u6863_\u5b89\u5353\u4e91\u63a7_iOS\u4e91\u63a7_\u6296\u97f3\u4e91\u63a7_\u5feb\u624b\u4e91\u63a7_\u6e38\u620f\u4e91\u63a7_\u4e91\u63a7\u5f00\u653eAPI",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"\u4e91\u63a7\u5f00\u653eAPI",description:"EasyClick \u4e91\u63a7\u5e73\u53f0\u4e13\u95e8\u7528\u4e8e\u7528\u4e8e\u7ba1\u7406\u811a\u672c\u3001\u4efb\u52a1, \u5b89\u88c5\u4e91\u63a7\u975e\u5e38\u7b80\u5355\uff0c\u4f7f\u7528\u5b9d\u5854\u4e00\u952e\u5b89\u88c5mysql\uff0credis\u5957\u4ef6\uff0c\u7136\u540e\u590d\u5236\u4e91\u63a7\u7a0b\u5e8f\u5230\u7f51\u7ad9\u76ee\u5f55\uff0c\u66f4\u6539mysql\u914d\u7f6e\uff0c\u542f\u52a8ecloud\u4e8c\u8fdb\u5236\u6587\u4ef6\u5373\u53ef",keywords:["EasyClick","\u624b\u673a\u81ea\u52a8\u5316\u811a\u672c","\u81ea\u52a8\u5316\u8f6f\u4ef6","\u4e91\u63a7\u5e73\u53f0\u5b89\u88c5","\u6296\u97f3\u4e91\u63a7","\u5feb\u624b\u4e91\u63a7","\u6e38\u620f\u4e91\u63a7"]},i="\u4e91\u63a7\u5f00\u653eAPI",l={unversionedId:"zh-cn/ecloud2/openapi",id:"zh-cn/ecloud2/openapi",title:"EasyClick\u4e91\u63a7\u6587\u6863_\u5b89\u5353\u4e91\u63a7_iOS\u4e91\u63a7_\u6296\u97f3\u4e91\u63a7_\u5feb\u624b\u4e91\u63a7_\u6e38\u620f\u4e91\u63a7_\u4e91\u63a7\u5f00\u653eAPI",description:"EasyClick \u4e91\u63a7\u5e73\u53f0\u4e13\u95e8\u7528\u4e8e\u7528\u4e8e\u7ba1\u7406\u811a\u672c\u3001\u4efb\u52a1, \u5b89\u88c5\u4e91\u63a7\u975e\u5e38\u7b80\u5355\uff0c\u4f7f\u7528\u5b9d\u5854\u4e00\u952e\u5b89\u88c5mysql\uff0credis\u5957\u4ef6\uff0c\u7136\u540e\u590d\u5236\u4e91\u63a7\u7a0b\u5e8f\u5230\u7f51\u7ad9\u76ee\u5f55\uff0c\u66f4\u6539mysql\u914d\u7f6e\uff0c\u542f\u52a8ecloud\u4e8c\u8fdb\u5236\u6587\u4ef6\u5373\u53ef",source:"@site/docs/zh-cn/ecloud2/openapi.md",sourceDirName:"zh-cn/ecloud2",slug:"/zh-cn/ecloud2/openapi",permalink:"/docs/zh-cn/ecloud2/openapi",draft:!1,tags:[],version:"current",frontMatter:{title:"EasyClick\u4e91\u63a7\u6587\u6863_\u5b89\u5353\u4e91\u63a7_iOS\u4e91\u63a7_\u6296\u97f3\u4e91\u63a7_\u5feb\u624b\u4e91\u63a7_\u6e38\u620f\u4e91\u63a7_\u4e91\u63a7\u5f00\u653eAPI",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"\u4e91\u63a7\u5f00\u653eAPI",description:"EasyClick \u4e91\u63a7\u5e73\u53f0\u4e13\u95e8\u7528\u4e8e\u7528\u4e8e\u7ba1\u7406\u811a\u672c\u3001\u4efb\u52a1, \u5b89\u88c5\u4e91\u63a7\u975e\u5e38\u7b80\u5355\uff0c\u4f7f\u7528\u5b9d\u5854\u4e00\u952e\u5b89\u88c5mysql\uff0credis\u5957\u4ef6\uff0c\u7136\u540e\u590d\u5236\u4e91\u63a7\u7a0b\u5e8f\u5230\u7f51\u7ad9\u76ee\u5f55\uff0c\u66f4\u6539mysql\u914d\u7f6e\uff0c\u542f\u52a8ecloud\u4e8c\u8fdb\u5236\u6587\u4ef6\u5373\u53ef",keywords:["EasyClick","\u624b\u673a\u81ea\u52a8\u5316\u811a\u672c","\u81ea\u52a8\u5316\u8f6f\u4ef6","\u4e91\u63a7\u5e73\u53f0\u5b89\u88c5","\u6296\u97f3\u4e91\u63a7","\u5feb\u624b\u4e91\u63a7","\u6e38\u620f\u4e91\u63a7"]},sidebar:"docs",previous:{title:"\u4e91\u63a7\u811a\u672c\u51fd\u6570",permalink:"/docs/zh-cn/ecloud2/ecloud-func"},next:{title:"\u9ad8\u7ea7\u529f\u80fd",permalink:"/docs/zh-cn/advance/"}},p={},c=[{value:"\u83b7\u53d6\u4efb\u52a1\u4fe1\u606f\u63a5\u53e3",id:"\u83b7\u53d6\u4efb\u52a1\u4fe1\u606f\u63a5\u53e3",level:2},{value:"\u4efb\u52a1\u63a7\u5236\u63a5\u53e3",id:"\u4efb\u52a1\u63a7\u5236\u63a5\u53e3",level:2}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e91\u63a7\u5f00\u653eapi"},"\u4e91\u63a7\u5f00\u653eAPI"),(0,r.kt)("h2",{id:"\u83b7\u53d6\u4efb\u52a1\u4fe1\u606f\u63a5\u53e3"},"\u83b7\u53d6\u4efb\u52a1\u4fe1\u606f\u63a5\u53e3"),(0,r.kt)("p",null,"POST : \u4e91\u63a7\u5730\u5740/openapi/getTask\n\u4f8b\u5982: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.1.182:8099/openapi/getTask"},"http://192.168.1.182:8099/openapi/getTask"),"\nContent-Type: application/json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dataSecret": "\u540e\u53f0\u914d\u7f6e\u7684API\u4e91\u63a7\u901a\u4fe1\u5bc6\u94a5"\n  // \u914d\u7f6e\u5728config.toml\u6587\u4ef6\u4e2d\u7684appkey\u9009\u9879\uff0c\u9ed8\u8ba4\u662f test123\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u6570\u636e:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "cacheScript": 1,\n    "delaySecond": 0,\n    "execNumber": 9999,\n    "cronText": "* * * * * ?",\n    "deviceNos": "006,001,003x,test222", // \u4efb\u52a1\u6267\u884c\u8bbe\u5907\n    "downloadUrl": "http://192.168.2.7:8098/pub_upload/2022-10-07/cnfdy1l2biiwpl8qcm.iec",\n    "execType": 1,\n    "scheduleTime": null,\n    "scheduleType": 0,\n    "execStatus": 1,\n    "endTime": null,\n    "scriptId": 16, \n    "scriptMd5": "b7ec603dffd9527c98e505bdd0eea137",\n    "scriptName": "html5",\n    "scriptVersion": "1",\n    "sort": 1,\n    "taskId": 11, // \u4efb\u52a1\u7684ID \u4e00\u822c\u53ea\u5173\u5fc3\u8fd9\u4e2a\u5373\u53ef\n    "taskName": "23", // \u4efb\u52a1\u540d\u79f0\n    "tenantId": 1, // \u79df\u6237\u7684id\n    // \u53c2\u6570\u914d\u7f6e\n    "valueConfig": "[{\\"id\\":3,\\"key\\":\\"\u6211\u662f\u591a\u9009\u6846\\",\\"options\\":[\\"111\\",\\"2222\\",\\"333\\"],\\"type\\":\\"3\\",\\"value\\":[\\"111\\",\\"222\\",\\"333\\"]},{\\"id\\":2,\\"type\\":\\"2\\",\\"key\\":\\"b\\",\\"value\\":\\"111\\",\\"options\\":[\\"111\\",\\"2\\"]},{\\"id\\":1,\\"type\\":\\"\\",\\"key\\":\\"a\\",\\"value\\":\\"111333\\",\\"options\\":\\"111\\"},{\\"id\\":1,\\"key\\":\\"\u6211\u662f\u6587\u672c\\",\\"options\\":\\"\\",\\"type\\":\\"\\",\\"value\\":\\"\u6211\u662f\u6587\u672c\u7684\u503c\\"},{\\"id\\":2,\\"key\\":\\"\u6211\u662f\u5355\u9009\u6846\\",\\"options\\":[\\"\u6211\u662f\u9009\u4e2d\\",\\"2222\\"],\\"type\\":\\"2\\",\\"value\\":\\"\u6211\u662f\u9009\u4e2d\\"}]",\n    // \u53c2\u6570\u683c\u5f0f\u5316\u7684\u503c\n    "valueJson": {\n      "a": "111333",\n      "b": "111",\n      "\u6211\u662f\u5355\u9009\u6846": "\u6211\u662f\u9009\u4e2d",\n      "\u6211\u662f\u591a\u9009\u6846": [\n        "111",\n        "222",\n        "333"\n      ],\n      "\u6211\u662f\u6587\u672c": "\u6211\u662f\u6587\u672c\u7684\u503c"\n    }\n  },\n  {\n    "cacheScript": 1,\n    "delaySecond": 222,\n    "execNumber": 133,\n    "cronText": "* * * * * ?",\n    "deviceNos": "003,test222,001,002",\n    "downloadUrl": "http://192.168.2.7:8098/pub_upload/2022-10-07/cnfdy1l2biiwpl8qcm.iec",\n    "execType": 2,\n    "scheduleTime": null,\n    "scheduleType": 3,\n    "execStatus": 1,\n    "endTime": null,\n    "scriptId": 16,\n    "scriptMd5": "b7ec603dffd9527c98e505bdd0eea137",\n    "scriptName": "html5",\n    "scriptVersion": "1",\n    "sort": 1,\n    "taskId": 10,\n    "taskName": "33",\n    "tenantId": 1,\n    "valueConfig": "[{\\"id\\":3,\\"key\\":\\"\u6211\u662f\u591a\u9009\u6846\\",\\"options\\":[\\"111\\",\\"2222\\",\\"333\\"],\\"type\\":\\"3\\",\\"value\\":[\\"111\\",\\"222\\",\\"333\\"]},{\\"id\\":2,\\"type\\":\\"2\\",\\"key\\":\\"b\\",\\"value\\":\\"111\\",\\"options\\":[\\"111\\",\\"2\\"]},{\\"id\\":1,\\"type\\":\\"\\",\\"key\\":\\"a\\",\\"value\\":\\"111333\\",\\"options\\":\\"111\\"},{\\"id\\":1,\\"key\\":\\"\u6211\u662f\u6587\u672c\\",\\"options\\":\\"\\",\\"type\\":\\"\\",\\"value\\":\\"\u6211\u662f\u6587\u672c\u7684\u503c\\"},{\\"id\\":2,\\"key\\":\\"\u6211\u662f\u5355\u9009\u6846\\",\\"options\\":[\\"\u6211\u662f\u9009\u4e2d\\",\\"2222\\"],\\"type\\":\\"2\\",\\"value\\":\\"\u6211\u662f\u9009\u4e2d\\"}]",\n    "valueJson": {\n      "a": "111333",\n      "b": "111",\n      "\u6211\u662f\u5355\u9009\u6846": "\u6211\u662f\u9009\u4e2d",\n      "\u6211\u662f\u591a\u9009\u6846": [\n        "111",\n        "222",\n        "333"\n      ],\n      "\u6211\u662f\u6587\u672c": "\u6211\u662f\u6587\u672c\u7684\u503c"\n    }\n  }\n]\n\n')),(0,r.kt)("h2",{id:"\u4efb\u52a1\u63a7\u5236\u63a5\u53e3"},"\u4efb\u52a1\u63a7\u5236\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6267\u884c\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u505c\u6b62\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u79fb\u51fa\u3001\u589e\u52a0\u6267\u884c\u8bbe\u5907"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u79fb\u51fa\u3001\u589e\u52a0\u53c2\u6570\u7b49")),(0,r.kt)("p",null,"POST : \u4e91\u63a7\u5730\u5740/openapi/changeTask\n\u4f8b\u5982: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.1.182:8099/openapi/changeTask"},"http://192.168.1.182:8099/openapi/changeTask"),"\nContent-Type: application/json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dataSecret":"\u540e\u53f0\u914d\u7f6e\u7684API\u4e91\u63a7\u901a\u4fe1\u5bc6\u94a5", // \u914d\u7f6e\u5728config.toml\u6587\u4ef6\u4e2d\u7684appkey\u9009\u9879\uff0c\u9ed8\u8ba4\u662f test123\n  "taskId":"1",// \u4efb\u52a1ID\uff0c\u5728\u4e91\u63a7\u5efa\u597d\u7684\n    "status":"0",// 1 \u505c\u6b62\u672c\u5730\uff0c2 \u505c\u6b62\u8fdc\u7a0b 0 \u5f00\u542f\n    "addDevices":"001,002,003",//\u9700\u8981\u589e\u52a0\u6267\u884c\u7684\u8bbe\u5907\n    "removeDevices":"007,009",//\u9700\u8981\u51cf\u5c11\u6267\u884c\u7684\u8bbe\u5907\n  // \u8981\u589e\u52a0\u7684\u53c2\u6570\u89e3\u91ca\n  //key = \u4ee3\u8868\u53c2\u6570\u540d\u79f0\n  //type = \u53c2\u6570\u7c7b\u578b\uff0c1\u4ee3\u8868\u662f\u6587\u672c 2 \u4ee3\u8868\u662f\u5355\u9009\u6846  3\u4ee3\u8868\u662f\u591a\u9009\u6846\n  // value = \u4ee3\u8868\u662f\u53c2\u6570\u503c\uff0c\u5982\u679c\u662f\u6587\u672c\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u5c31\u662f\u5b57\u7b26\u4e32\n  // \u5982\u679c\u662f\u5355\u9009\u6846\uff0c\u4e5f\u586b\u5199\u5b57\u7b26\u4e32\n  // \u5982\u679c\u662f\u591a\u9009\u6846\uff0c\u586b\u5199json\u6570\u7ec4\uff0c\u56e0\u4e3a\u662f\u591a\u9009\uff0c\u5fc5\u987b\u662f\u6570\u7ec4\n  // options = \u4ee3\u8868\u662f\u5019\u9009\u9009\u62e9\uff0c\u5982\u679c\u662f\u6587\u672c\uff0c\u8bf7\u5ffd\u7565\n  // \u5982\u679c\u662f\u5355\u9009\u6846\uff0c\u8bf7\u586b\u5199json\u6570\u7ec4\n  // \u5982\u679c\u662f\u591a\u9009\u6846\uff0c\u8bf7\u586b\u5199json\u6570\u7ec4\n  "addParamEx":[\n    {\n      "key":"\u6211\u662f\u6587\u672c",\n      "type":"1",\n      "value":"\u6211\u662f\u6587\u672c\u7684\u503c"\n    },\n    {\n      "key":"\u6211\u662f\u5355\u9009\u6846",\n      "type":"2",\n      "value":"2222",\n      "options":["\u6211\u662f\u9009\u4e2d","2222"]\n    },\n    {\n      "key":"\u6211\u662f\u591a\u9009\u6846",\n      "type":"3",\n      "value":["111","222"],\n      "options":["111","2222","333"]\n    }\n  ],\n  "removeParam":["ke1"]\n}\n\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sequence"},"title: \u4e0b\u5355\u81ea\u52a8\u6267\u884c\u6d41\u7a0b\nparticipant \u5ba2\u6237\nparticipant \u4e0b\u5355\u7cfb\u7edf\nparticipant \u4e91\u63a7\u7cfb\u7edf\nparticipant \u8bbe\u5907\n\n\u5ba2\u6237->\u4e0b\u5355\u7cfb\u7edf: \u5ba2\u6237\u4e0b\u5355\u5e76\u652f\u4ed8\u5b8c\u6210\n\u4e0b\u5355\u7cfb\u7edf->\u4e91\u63a7\u7cfb\u7edf: \u8c03\u7528(/api/changeTask) \u6267\u884c\u4efb\u52a1\u67d0\u4e2a\u4efb\u52a1\uff0c\\n\u5e76\u52a0\u5165\u67d0\u5199\u8bbe\u5907\u548c\u53c2\u6570\n\u4e91\u63a7\u7cfb\u7edf->\u4e91\u63a7\u7cfb\u7edf: \u6539\u53d8\u4efb\u52a1\u72b6\u6001\\n\u53c2\u6570\u3001\u8bbe\u5907\u7b49\n\u4e91\u63a7\u7cfb\u7edf->\u8bbe\u5907: \u4e0b\u53d1\u4efb\u52a1\u5230\u8bbe\u5907\n\u8bbe\u5907->\u8bbe\u5907: \u5faa\u73af\u6267\u884c\u811a\u672c\n\u8bbe\u5907->\u4e91\u63a7\u7cfb\u7edf: \u8c03\u7528(/api/changeTask)\u8fbe\u5230\u6761\u4ef6\\n\u5c06\u81ea\u5df1\u4ece\u4efb\u52a1\u7684\u8bbe\u5907\u4e2d\u79fb\u51fa\n\n\n")))}u.isMDXComponent=!0}}]);