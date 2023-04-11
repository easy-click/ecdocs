"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[917],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||c;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=f;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<c;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const c={},o=void 0,p={unversionedId:"zh-cn/ecloud2/apichangeTask",id:"zh-cn/ecloud2/apichangeTask",title:"apichangeTask",description:"POST : \u4e91\u63a7\u5730\u5740/openapi/changeTask",source:"@site/docs/zh-cn/ecloud2/apichangeTask.md",sourceDirName:"zh-cn/ecloud2",slug:"/zh-cn/ecloud2/apichangeTask",permalink:"/en/docs/zh-cn/ecloud2/apichangeTask",draft:!1,tags:[],version:"current",frontMatter:{}},i={},l=[],s={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"POST : \u4e91\u63a7\u5730\u5740/openapi/changeTask"),(0,a.kt)("p",null,"\u4f8b\u5982: ",(0,a.kt)("a",{parentName:"p",href:"http://192.168.1.182:8099/openapi/changeTask"},"http://192.168.1.182:8099/openapi/changeTask")),(0,a.kt)("p",null,"Content-Type: application/json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "dataSecret":"\u540e\u53f0\u914d\u7f6e\u7684API\u4e91\u63a7\u901a\u4fe1\u5bc6\u94a5", // \u9ed8\u8ba4\u662f123456\n  "taskId":"1",// \u4efb\u52a1ID\uff0c\u5728\u4e91\u63a7\u5efa\u597d\u7684\n    "status":"0",// 1 \u505c\u6b62\u672c\u5730\uff0c2 \u505c\u6b62\u8fdc\u7a0b 0 \u5f00\u542f\n    "addDevices":"001,002,003",//\u9700\u8981\u589e\u52a0\u6267\u884c\u7684\u8bbe\u5907\n  "removeDevices":"007,009",//\u9700\u8981\u51cf\u5c11\u6267\u884c\u7684\u8bbe\u5907\n    "addParam":{\n    //\u589e\u52a0\u7684\u53c2\u6570 \u7528\u4e8e\u4e0b\u53d1\u7ed9\u811a\u672c\uff0c\u76f8\u5f53\u4e8e\u4e91\u63a7\u4e2d\u7684\u53c2\u6570\u8bbe\u7f6e\u529f\u80fd\n    "ke1":["111","222"],\n    "ke2":["111","222"]\n  },\n  "removeParam":["ke1"]\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sequence"},"title: \u4e0b\u5355\u81ea\u52a8\u6267\u884c\u6d41\u7a0b\nparticipant \u5ba2\u6237\nparticipant \u4e0b\u5355\u7cfb\u7edf\nparticipant \u4e91\u63a7\u7cfb\u7edf\nparticipant \u8bbe\u5907\n\n\u5ba2\u6237->\u4e0b\u5355\u7cfb\u7edf: \u5ba2\u6237\u4e0b\u5355\u5e76\u652f\u4ed8\u5b8c\u6210\n\u4e0b\u5355\u7cfb\u7edf->\u4e91\u63a7\u7cfb\u7edf: \u8c03\u7528(/api/changeTask) \u6267\u884c\u4efb\u52a1\u67d0\u4e2a\u4efb\u52a1\uff0c\\n\u5e76\u52a0\u5165\u67d0\u5199\u8bbe\u5907\u548c\u53c2\u6570\n\u4e91\u63a7\u7cfb\u7edf->\u4e91\u63a7\u7cfb\u7edf: \u6539\u53d8\u4efb\u52a1\u72b6\u6001\\n\u53c2\u6570\u3001\u8bbe\u5907\u7b49\n\u4e91\u63a7\u7cfb\u7edf->\u8bbe\u5907: \u4e0b\u53d1\u4efb\u52a1\u5230\u8bbe\u5907\n\u8bbe\u5907->\u8bbe\u5907: \u5faa\u73af\u6267\u884c\u811a\u672c\n\u8bbe\u5907->\u4e91\u63a7\u7cfb\u7edf: \u8c03\u7528(/api/changeTask)\u8fbe\u5230\u6761\u4ef6\\n\u5c06\u81ea\u5df1\u4ece\u4efb\u52a1\u7684\u8bbe\u5907\u4e2d\u79fb\u51fa\n\n\n")))}u.isMDXComponent=!0}}]);