"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[1922],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>f});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,f=u["".concat(i,".").concat(g)]||u[g]||y[g]||o;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=g;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[u]="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(8168),a=(t(6540),t(5680));const o={},c=void 0,p={unversionedId:"zh-cn/ecloud2/apichangeTask",id:"zh-cn/ecloud2/apichangeTask",title:"apichangeTask",description:"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001",source:"@site/docs/zh-cn/ecloud2/apichangeTask.md",sourceDirName:"zh-cn/ecloud2",slug:"/zh-cn/ecloud2/apichangeTask",permalink:"/docs/zh-cn/ecloud2/apichangeTask",draft:!1,tags:[],version:"current",frontMatter:{}},i={},l=[{value:"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001",id:"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001",level:2}],s={toc:l},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001"},"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u6267\u884c\u4efb\u52a1"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u505c\u6b62\u4efb\u52a1"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u79fb\u51fa\u3001\u589e\u52a0\u6267\u884c\u8bbe\u5907"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u79fb\u51fa\u3001\u589e\u52a0\u53c2\u6570\u7b49")),(0,a.yg)("p",null,"POST : \u4e91\u63a7\u5730\u5740/openapi/changeTask\n\u4f8b\u5982: ",(0,a.yg)("a",{parentName:"p",href:"http://192.168.1.182:8099/openapi/changeTask"},"http://192.168.1.182:8099/openapi/changeTask"),"\nContent-Type: application/json"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n  "dataSecret":"\u540e\u53f0\u914d\u7f6e\u7684API\u4e91\u63a7\u901a\u4fe1\u5bc6\u94a5", // \u914d\u7f6e\u5728config.toml\u6587\u4ef6\u4e2d\u7684appkey\u9009\u9879\uff0c\u9ed8\u8ba4\u662f test123\n  "taskId":"1",// \u4efb\u52a1ID\uff0c\u5728\u4e91\u63a7\u5efa\u597d\u7684\n    "status":"0",// 1 \u505c\u6b62\u672c\u5730\uff0c2 \u505c\u6b62\u8fdc\u7a0b 0 \u5f00\u542f\n    "addDevices":"001,002,003",//\u9700\u8981\u589e\u52a0\u6267\u884c\u7684\u8bbe\u5907\n    "removeDevices":"007,009",//\u9700\u8981\u51cf\u5c11\u6267\u884c\u7684\u8bbe\u5907\n  // \u8981\u589e\u52a0\u7684\u53c2\u6570\u89e3\u91ca\n  //key = \u4ee3\u8868\u53c2\u6570\u540d\u79f0\n  //type = \u53c2\u6570\u7c7b\u578b\uff0c1\u4ee3\u8868\u662f\u6587\u672c 2 \u4ee3\u8868\u662f\u5355\u9009\u6846  3\u4ee3\u8868\u662f\u591a\u9009\u6846\n  // value = \u4ee3\u8868\u662f\u53c2\u6570\u503c\uff0c\u5982\u679c\u662f\u6587\u672c\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u5c31\u662f\u5b57\u7b26\u4e32\n  // \u5982\u679c\u662f\u5355\u9009\u6846\uff0c\u4e5f\u586b\u5199\u5b57\u7b26\u4e32\n  // \u5982\u679c\u662f\u591a\u9009\u6846\uff0c\u586b\u5199json\u6570\u7ec4\uff0c\u56e0\u4e3a\u662f\u591a\u9009\uff0c\u5fc5\u987b\u662f\u6570\u7ec4\n  // options = \u4ee3\u8868\u662f\u5019\u9009\u9009\u62e9\uff0c\u5982\u679c\u662f\u6587\u672c\uff0c\u8bf7\u5ffd\u7565\n  // \u5982\u679c\u662f\u5355\u9009\u6846\uff0c\u8bf7\u586b\u5199json\u6570\u7ec4\n  // \u5982\u679c\u662f\u591a\u9009\u6846\uff0c\u8bf7\u586b\u5199json\u6570\u7ec4\n  "addParamEx":[\n    {\n      "key":"\u6211\u662f\u6587\u672c",\n      "type":"1",\n      "value":"\u6211\u662f\u6587\u672c\u7684\u503c"\n    },\n    {\n      "key":"\u6211\u662f\u5355\u9009\u6846",\n      "type":"2",\n      "value":"2222",\n      "options":["\u6211\u662f\u9009\u4e2d","2222"]\n    },\n    {\n      "key":"\u6211\u662f\u591a\u9009\u6846",\n      "type":"3",\n      "value":["111","222"],\n      "options":["111","2222","333"]\n    }\n  ],\n  "removeParam":["ke1"]\n}\n\n\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sequence"},"title: \u4e0b\u5355\u81ea\u52a8\u6267\u884c\u6d41\u7a0b\nparticipant \u5ba2\u6237\nparticipant \u4e0b\u5355\u7cfb\u7edf\nparticipant \u4e91\u63a7\u7cfb\u7edf\nparticipant \u8bbe\u5907\n\n\u5ba2\u6237->\u4e0b\u5355\u7cfb\u7edf: \u5ba2\u6237\u4e0b\u5355\u5e76\u652f\u4ed8\u5b8c\u6210\n\u4e0b\u5355\u7cfb\u7edf->\u4e91\u63a7\u7cfb\u7edf: \u8c03\u7528(/api/changeTask) \u6267\u884c\u4efb\u52a1\u67d0\u4e2a\u4efb\u52a1\uff0c\\n\u5e76\u52a0\u5165\u67d0\u5199\u8bbe\u5907\u548c\u53c2\u6570\n\u4e91\u63a7\u7cfb\u7edf->\u4e91\u63a7\u7cfb\u7edf: \u6539\u53d8\u4efb\u52a1\u72b6\u6001\\n\u53c2\u6570\u3001\u8bbe\u5907\u7b49\n\u4e91\u63a7\u7cfb\u7edf->\u8bbe\u5907: \u4e0b\u53d1\u4efb\u52a1\u5230\u8bbe\u5907\n\u8bbe\u5907->\u8bbe\u5907: \u5faa\u73af\u6267\u884c\u811a\u672c\n\u8bbe\u5907->\u4e91\u63a7\u7cfb\u7edf: \u8c03\u7528(/api/changeTask)\u8fbe\u5230\u6761\u4ef6\\n\u5c06\u81ea\u5df1\u4ece\u4efb\u52a1\u7684\u8bbe\u5907\u4e2d\u79fb\u51fa\n\n\n")))}y.isMDXComponent=!0}}]);