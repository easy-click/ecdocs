"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[1922],{9494:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(4848),c=t(8453);const s={},i=void 0,o={id:"zh-cn/ecloud2/apichangeTask",title:"apichangeTask",description:"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001",source:"@site/docs/zh-cn/ecloud2/apichangeTask.md",sourceDirName:"zh-cn/ecloud2",slug:"/zh-cn/ecloud2/apichangeTask",permalink:"/en/docs/zh-cn/ecloud2/apichangeTask",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},r={},l=[{value:"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001",id:"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001",level:2}];function p(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001",children:"\u66f4\u6539\u4e91\u63a7\u4efb\u52a1\u72b6\u6001"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u53ef\u4ee5\u6267\u884c\u4efb\u52a1"}),"\n",(0,a.jsx)(e.li,{children:"\u53ef\u4ee5\u505c\u6b62\u4efb\u52a1"}),"\n",(0,a.jsx)(e.li,{children:"\u53ef\u4ee5\u79fb\u51fa\u3001\u589e\u52a0\u6267\u884c\u8bbe\u5907"}),"\n",(0,a.jsx)(e.li,{children:"\u53ef\u4ee5\u79fb\u51fa\u3001\u589e\u52a0\u53c2\u6570\u7b49"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["POST : \u4e91\u63a7\u5730\u5740/openapi/changeTask\n\u4f8b\u5982: ",(0,a.jsx)(e.a,{href:"http://192.168.1.182:8099/openapi/changeTask",children:"http://192.168.1.182:8099/openapi/changeTask"}),"\nContent-Type: application/json"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'\n{\n  "dataSecret":"\u540e\u53f0\u914d\u7f6e\u7684API\u4e91\u63a7\u901a\u4fe1\u5bc6\u94a5", // \u914d\u7f6e\u5728config.toml\u6587\u4ef6\u4e2d\u7684appkey\u9009\u9879\uff0c\u9ed8\u8ba4\u662f test123\n  "taskId":"1",// \u4efb\u52a1ID\uff0c\u5728\u4e91\u63a7\u5efa\u597d\u7684\n\t"status":"0",// 1 \u505c\u6b62\u672c\u5730\uff0c2 \u505c\u6b62\u8fdc\u7a0b 0 \u5f00\u542f\n\t"addDevices":"001,002,003",//\u9700\u8981\u589e\u52a0\u6267\u884c\u7684\u8bbe\u5907\n    "removeDevices":"007,009",//\u9700\u8981\u51cf\u5c11\u6267\u884c\u7684\u8bbe\u5907\n  // \u8981\u589e\u52a0\u7684\u53c2\u6570\u89e3\u91ca\n  //key = \u4ee3\u8868\u53c2\u6570\u540d\u79f0\n  //type = \u53c2\u6570\u7c7b\u578b\uff0c1\u4ee3\u8868\u662f\u6587\u672c 2 \u4ee3\u8868\u662f\u5355\u9009\u6846  3\u4ee3\u8868\u662f\u591a\u9009\u6846\n  // value = \u4ee3\u8868\u662f\u53c2\u6570\u503c\uff0c\u5982\u679c\u662f\u6587\u672c\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u5c31\u662f\u5b57\u7b26\u4e32\n  // \u5982\u679c\u662f\u5355\u9009\u6846\uff0c\u4e5f\u586b\u5199\u5b57\u7b26\u4e32\n  // \u5982\u679c\u662f\u591a\u9009\u6846\uff0c\u586b\u5199json\u6570\u7ec4\uff0c\u56e0\u4e3a\u662f\u591a\u9009\uff0c\u5fc5\u987b\u662f\u6570\u7ec4\n  // options = \u4ee3\u8868\u662f\u5019\u9009\u9009\u62e9\uff0c\u5982\u679c\u662f\u6587\u672c\uff0c\u8bf7\u5ffd\u7565\n  // \u5982\u679c\u662f\u5355\u9009\u6846\uff0c\u8bf7\u586b\u5199json\u6570\u7ec4\n  // \u5982\u679c\u662f\u591a\u9009\u6846\uff0c\u8bf7\u586b\u5199json\u6570\u7ec4\n  "addParamEx":[\n    {\n      "key":"\u6211\u662f\u6587\u672c",\n      "type":"1",\n      "value":"\u6211\u662f\u6587\u672c\u7684\u503c"\n    },\n    {\n      "key":"\u6211\u662f\u5355\u9009\u6846",\n      "type":"2",\n      "value":"2222",\n      "options":["\u6211\u662f\u9009\u4e2d","2222"]\n    },\n    {\n      "key":"\u6211\u662f\u591a\u9009\u6846",\n      "type":"3",\n      "value":["111","222"],\n      "options":["111","2222","333"]\n    }\n  ],\n  "removeParam":["ke1"]\n}\n\n\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sequence",children:"title: \u4e0b\u5355\u81ea\u52a8\u6267\u884c\u6d41\u7a0b\nparticipant \u5ba2\u6237\nparticipant \u4e0b\u5355\u7cfb\u7edf\nparticipant \u4e91\u63a7\u7cfb\u7edf\nparticipant \u8bbe\u5907\n\n\u5ba2\u6237->\u4e0b\u5355\u7cfb\u7edf: \u5ba2\u6237\u4e0b\u5355\u5e76\u652f\u4ed8\u5b8c\u6210\n\u4e0b\u5355\u7cfb\u7edf->\u4e91\u63a7\u7cfb\u7edf: \u8c03\u7528(/api/changeTask) \u6267\u884c\u4efb\u52a1\u67d0\u4e2a\u4efb\u52a1\uff0c\\n\u5e76\u52a0\u5165\u67d0\u5199\u8bbe\u5907\u548c\u53c2\u6570\n\u4e91\u63a7\u7cfb\u7edf->\u4e91\u63a7\u7cfb\u7edf: \u6539\u53d8\u4efb\u52a1\u72b6\u6001\\n\u53c2\u6570\u3001\u8bbe\u5907\u7b49\n\u4e91\u63a7\u7cfb\u7edf->\u8bbe\u5907: \u4e0b\u53d1\u4efb\u52a1\u5230\u8bbe\u5907\n\u8bbe\u5907->\u8bbe\u5907: \u5faa\u73af\u6267\u884c\u811a\u672c\n\u8bbe\u5907->\u4e91\u63a7\u7cfb\u7edf: \u8c03\u7528(/api/changeTask)\u8fbe\u5230\u6761\u4ef6\\n\u5c06\u81ea\u5df1\u4ece\u4efb\u52a1\u7684\u8bbe\u5907\u4e2d\u79fb\u51fa\n\n\n"})})]})}function d(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>o});var a=t(6540);const c={},s=a.createContext(c);function i(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);