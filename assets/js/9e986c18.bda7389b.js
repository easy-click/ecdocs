"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[4702],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(t),k=i,d=c["".concat(o,".").concat(k)]||c[k]||s[k]||l;return t?a.createElement(d,r(r({ref:n},u),{},{components:t})):a.createElement(d,r({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var m=2;m<l;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=t(7462),i=(t(7294),t(3905));const l={title:"\u8f93\u5165\u6cd5\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8f93\u5165\u6cd5\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8f93\u5165\u6cd5\u51fd\u6570"]},r=void 0,p={unversionedId:"zh-cn/funcs/ime-api",id:"zh-cn/funcs/ime-api",title:"\u8f93\u5165\u6cd5\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8f93\u5165\u6cd5\u51fd\u6570",source:"@site/iosdocs/zh-cn/funcs/ime-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/ime-api",permalink:"/iosdocs/zh-cn/funcs/ime-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8f93\u5165\u6cd5\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8f93\u5165\u6cd5\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8f93\u5165\u6cd5\u51fd\u6570"]},sidebar:"iosdocs",previous:{title:"OCR\u8bc6\u522b",permalink:"/iosdocs/zh-cn/funcs/ocr-api"},next:{title:"\u8f85\u52a9\u6a21\u5757",permalink:"/iosdocs/zh-cn/funcs/apphelper-api"}},o={},m=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"imeApi.isOk \u8f93\u5165\u6cd5\u72b6\u6001\u662f\u5426\u53ef\u7528",id:"imeapiisok-\u8f93\u5165\u6cd5\u72b6\u6001\u662f\u5426\u53ef\u7528",level:2},{value:"imeApi.input \u8f93\u5165\u5b57\u7b26\u4e32",id:"imeapiinput-\u8f93\u5165\u5b57\u7b26\u4e32",level:2},{value:"imeApi.paste \u7c98\u8d34\u5b57\u7b26\u4e32",id:"imeapipaste-\u7c98\u8d34\u5b57\u7b26\u4e32",level:2},{value:"imeApi.pressDel \u5220\u9664\u8f93\u5165\u6846\u7684\u5b57\u7b26\u4e32",id:"imeapipressdel-\u5220\u9664\u8f93\u5165\u6846\u7684\u5b57\u7b26\u4e32",level:2},{value:"imeApi.pressEnter \u56de\u8f66\u952e",id:"imeapipressenter-\u56de\u8f66\u952e",level:2},{value:"imeApi.dismiss \u9690\u85cf\u952e\u76d8",id:"imeapidismiss-\u9690\u85cf\u952e\u76d8",level:2},{value:"imeApi.copyToClipboard \u590d\u5236\u8f93\u5165\u6846\u7684\u6570\u636e\u5230\u526a\u5207\u677f",id:"imeapicopytoclipboard-\u590d\u5236\u8f93\u5165\u6846\u7684\u6570\u636e\u5230\u526a\u5207\u677f",level:2},{value:"imeApi.changeKeyboard \u5207\u6362\u5230\u5176\u4ed6\u952e\u76d8",id:"imeapichangekeyboard-\u5207\u6362\u5230\u5176\u4ed6\u952e\u76d8",level:2},{value:"imeApi.removeAllContent \u6e05\u7a7a\u8f93\u5165\u6846\u7684\u5185\u5bb9",id:"imeapiremoveallcontent-\u6e05\u7a7a\u8f93\u5165\u6846\u7684\u5185\u5bb9",level:2},{value:"imeApi.getClipboard \u8bfb\u53d6\u526a\u5207\u677f\u7684\u6570\u636e",id:"imeapigetclipboard-\u8bfb\u53d6\u526a\u5207\u677f\u7684\u6570\u636e",level:2},{value:"imeApi.setClipboard \u8bbe\u7f6e\u526a\u5207\u677f\u6570\u636e",id:"imeapisetclipboard-\u8bbe\u7f6e\u526a\u5207\u677f\u6570\u636e",level:2},{value:"imeApi.openUrl \u6253\u5f00URL\u94fe\u63a5",id:"imeapiopenurl-\u6253\u5f00url\u94fe\u63a5",level:2},{value:"imeApi.getText \u83b7\u53d6\u8f93\u5165\u6846\u6570\u636e",id:"imeapigettext-\u83b7\u53d6\u8f93\u5165\u6846\u6570\u636e",level:2}],u={toc:m};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6cd5\u51fd\u6570\u662f","[\u8131\u673a\u7248\u672c\u4e3b\u7a0b\u5e8f]","\u81ea\u5e26\u7684\u8f93\u5165\u6cd5\u7a0b\u5e8f\uff0c\u4e13\u95e8\u7528\u4e8e\u8f93\u5165\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u542f\u7528\u8f93\u5165\u6cd5\u624d\u80fd\u4f7f\u7528\uff0c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8f93\u5165\uff0c\u9700\u5728\u624b\u673a\u7684\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u952e\u76d8-\u6dfb\u52a0\u65b0\u952e\u76d8-\u542f\u7528 ","[\u4e3b\u7a0b\u5e8f\u7684\u5e94\u7528\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u6253\u5305\u540e\u662f\u81ea\u5b9a\u4e49\u7684\u7a0b\u5e8f\u540d\u79f0)]","\u8f93\u5165\u6cd5\uff0c\u5982\u679c\u627e\u4e0d\u5230\u8fd9\u4e2a\u540d\u79f0\uff0c\u53ef\u4ee5\u91cd\u542f\u8bbe\u5907"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5b8c\u6210\u540e\uff0c\u952e\u76d8\u9875\u9762\u70b9\u51fb\u952e\u76d8\u540d\u79f0\uff0c\u9009\u62e9","[\u5141\u8bb8\u5b8c\u5168\u8bbf\u95ee]"))),(0,i.kt)("li",{parentName:"ul"},"\u542f\u7528\u540e\uff0c\u5728\u8f93\u5165\u6846\u805a\u7126\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u5f39\u51fa\u8f93\u5165\u6cd5\uff0c\u5982\u679c\u6709\u591a\u4e2a\u8f93\u5165\u6cd5\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4e0d\u662f","[\u4e3b\u7a0b\u5e8f\u6613\u70b9\u4e91\u6d4b]","\uff0c\u70b9\u51fb\u952e\u76d8\u5de6\u4e0b\u89d2\u7684","[\u5730\u7403]","\u6309\u94ae\uff0c\u5207\u6362\u952e\u76d8"),(0,i.kt)("li",{parentName:"ul"},"\u5f53","[\u4e3b\u7a0b\u5e8f\u6613\u70b9\u4e91\u6d4b\uff08\u80cc\u666f\u662f\u8272\u9e45\u9ec4\u8272\u7684\uff09]","\u952e\u76d8\u5f39\u51fa\u6765\u540e\uff0c\u5373\u53ef\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u7279\u522b\u8bf4\u660e\uff1a\u53ea\u6709\u5f53\u6613\u70b9\u4e91\u6d4b\u952e\u76d8\u5f39\u51fa\u6765\u7684\u65f6\u5019\uff0c\u51fd\u6570\u624d\u662f\u53ef\u4ee5\u8c03\u7528\u7684\uff0c\u5426\u5219\u90fd\u662f\u5931\u6548\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528 imeApi.isOk() \u5224\u65ad\u952e\u76d8\u662f\u5426\u51c6\u5907\u597d"),(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6cd5\u53ef\u4ee5\u5b8c\u7f8e\u66ff\u4ee3\u4e4b\u524d\u7684\u8f93\u5165\u51fd\u6570\uff0c\u4e14\u4e0d\u4f1a\u51fa\u73b0\u5361\u6b7b\u4ee3\u7406\u7a0b\u5e8f\u7684\u95ee\u9898"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"\u4e0d\u9002\u5408\u573a\u666f: \u5bc6\u7801\u8f93\u5165\u6846\u3001\u8f93\u5165\u6846\u4e0d\u5141\u8bb8\u4e09\u65b9\u8f93\u5165\u6cd5\u60c5\u51b5\u4e0b\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5207\u6362\u5230iOS\u7684\u8f93\u5165\u6cd5 ")))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u4f20\u8f93\u52a9\u624bIPA\u5c31\u662f \u8131\u673a\u7248\u672c\u4e3b\u7a0b\u5e8f\u3002\u4e24\u4e2a\u662f\u540c\u4e00\u4e2a\u5305"),(0,i.kt)("li",{parentName:"ul"},"\u6587\u5316\u4f20\u8f93\u52a9\u624b\u6a21\u5757\u51fd\u6570\u548c\u8f93\u5165\u6cd5\u51fd\u6570\uff0c\u662f\u5171\u7528\u4e00\u4e2aipa\u5305\u7684")))),(0,i.kt)("h2",{id:"imeapiisok-\u8f93\u5165\u6cd5\u72b6\u6001\u662f\u5426\u53ef\u7528"},"imeApi.isOk \u8f93\u5165\u6cd5\u72b6\u6001\u662f\u5426\u53ef\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6cd5\u72b6\u6001\u662f\u5426\u53ef\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@return {boolean} true \u4ee3\u8868\u53ef\u7528 false \u4ee3\u8868\u4e0d\u53ef\u7528")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  logd("\u8f93\u5165\u6cd5\u5df2\u51c6\u5907\u597d")\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapiinput-\u8f93\u5165\u5b57\u7b26\u4e32"},"imeApi.input \u8f93\u5165\u5b57\u7b26\u4e32"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@param content \u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},"@returns {string} \u5982\u679c\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8f93\u5165\u4e0d\u6210\u529f\uff0c\u5982\u679c\u4e0d\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8f93\u5165\u7684\u6570\u636e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.input("\u6211\u662f\u6570\u636e")\n  logd("\u8f93\u5165\u6846\u7684\u6570\u636e\u662f: " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapipaste-\u7c98\u8d34\u5b57\u7b26\u4e32"},"imeApi.paste \u7c98\u8d34\u5b57\u7b26\u4e32"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c98\u8d34\u5b57\u7b26\u4e32\uff0c\u590d\u5236\u5230\u526a\u5207\u677f\u540e\u518d\u63d2\u5165\u5230\u8f93\u5165\u6846"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@param content \u5b57\u7b26\u4e32,\u5982\u679c\u4e3a\u7a7a\uff0c\u76f4\u63a5\u4f7f\u7528\u526a\u5207\u677f\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"@returns {string} \u5982\u679c\u4e3a\u7a7a\uff0c\u4ee3\u8868\u4e0d\u6210\u529f\uff0c\u5982\u679c\u4e0d\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8f93\u5165\u7684\u6570\u636e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.paste("\u6211\u662f\u7c98\u8d34\u6570\u636e")\n  logd("\u8f93\u5165\u6846\u7684\u7c98\u8d34\u6570\u636e\u662f: " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapipressdel-\u5220\u9664\u8f93\u5165\u6846\u7684\u5b57\u7b26\u4e32"},"imeApi.pressDel \u5220\u9664\u8f93\u5165\u6846\u7684\u5b57\u7b26\u4e32"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5220\u9664\u8f93\u5165\u6846\u7684\u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@returns {string} \u5982\u679c\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8f93\u5165\u6846\u65e0\u6570\u636e\uff0c\u5982\u679c\u4e0d\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8f93\u5165\u6846\u5269\u4f59\u6570\u636e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.pressDel()\n  logd("\u8f93\u5165\u6846\u7684\u5269\u4f59\u6570\u636e\u662f: " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapipressenter-\u56de\u8f66\u952e"},"imeApi.pressEnter \u56de\u8f66\u952e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u56de\u8f66\u952e"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@returns {boolean} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.pressEnter()\n  logd("pressEnter: " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapidismiss-\u9690\u85cf\u952e\u76d8"},"imeApi.dismiss \u9690\u85cf\u952e\u76d8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9690\u85cf\u952e\u76d8"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@returns {boolean} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.dismiss()\n  logd("dismiss: " + result)\n\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapicopytoclipboard-\u590d\u5236\u8f93\u5165\u6846\u7684\u6570\u636e\u5230\u526a\u5207\u677f"},"imeApi.copyToClipboard \u590d\u5236\u8f93\u5165\u6846\u7684\u6570\u636e\u5230\u526a\u5207\u677f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u590d\u5236\u8f93\u5165\u6846\u7684\u6570\u636e\u5230\u526a\u5207\u677f"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@returns {string} \u5982\u679c\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8f93\u5165\u6846\u65e0\u6570\u636e\uff0c\u5982\u679c\u4e0d\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8f93\u5165\u6846\u5269\u4f59\u6570\u636e\uff0c\u5e76\u4e14\u5df2\u7ecf\u590d\u5236\u5230\u526a\u5207\u677f\u4e86")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.copyToClipboard()\n  logd("copyToClipboard data: " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapichangekeyboard-\u5207\u6362\u5230\u5176\u4ed6\u952e\u76d8"},"imeApi.changeKeyboard \u5207\u6362\u5230\u5176\u4ed6\u952e\u76d8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5207\u6362\u5230\u5176\u4ed6\u952e\u76d8"),(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u662f\u8fd4\u56de\u7ed3\u679c\u540e\uff0c\u7b49\u5f852\u79d2\u5207\u6362"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@returns {boolean} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.changeKeyboard()\n  logd("changeKeyboard data: " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapiremoveallcontent-\u6e05\u7a7a\u8f93\u5165\u6846\u7684\u5185\u5bb9"},"imeApi.removeAllContent \u6e05\u7a7a\u8f93\u5165\u6846\u7684\u5185\u5bb9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6e05\u7a7a\u8f93\u5165\u6846\u7684\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@returns {boolean} true \u4ee3\u8868\u6210\u529f false \u4ee3\u8868\u5931\u8d25")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.removeAllContent()\n  logd("removeAllContent : " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapigetclipboard-\u8bfb\u53d6\u526a\u5207\u677f\u7684\u6570\u636e"},"imeApi.getClipboard \u8bfb\u53d6\u526a\u5207\u677f\u7684\u6570\u636e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u526a\u5207\u677f\u7684\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS USB\u7248\u672c 6.37.0+"),(0,i.kt)("li",{parentName:"ul"},"@returns {string} \u526a\u5207\u677f\u7684\u6570\u636e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.getClipboard()\n  logd("getClipboard data : " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapisetclipboard-\u8bbe\u7f6e\u526a\u5207\u677f\u6570\u636e"},"imeApi.setClipboard \u8bbe\u7f6e\u526a\u5207\u677f\u6570\u636e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u526a\u5207\u677f\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS \u8131\u673a\u72483.15.0+"),(0,i.kt)("li",{parentName:"ul"},"@param content \u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},"@param type 1 \u4ee3\u8868\u662f\u666e\u901a\u7684\u5b57\u7b26\u4e32\uff0c2 \u4ee3\u8868\u662fURL\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"@returns {boolean} true \u4ee3\u8868\u8bbe\u7f6e\u6210\u529f  false \u4ee3\u8868\u5931\u8d25")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.setClipboard("\u6211\u662f\u526a\u5207\u677f\u7684\u7684\u6570\u636e","1")\n  logd("setClipboard  : " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapiopenurl-\u6253\u5f00url\u94fe\u63a5"},"imeApi.openUrl \u6253\u5f00URL\u94fe\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6253\u5f00URL\u94fe\u63a5"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS \u8131\u673a\u72483.15.0+"),(0,i.kt)("li",{parentName:"ul"},"@param url url\u5730\u5740,\u4f8b\u5982  ",(0,i.kt)("a",{parentName:"li",href:"http://baidu.com"},"http://baidu.com")," \u4e4b\u7c7b\u7684\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"@returns {boolean} true \u4ee3\u8868\u8bbe\u7f6e\u6210\u529f  false \u4ee3\u8868\u5931\u8d25")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.openUrl("http://baidu.com")\n  logd("openUrl  : " + result)\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"imeapigettext-\u83b7\u53d6\u8f93\u5165\u6846\u6570\u636e"},"imeApi.getText \u83b7\u53d6\u8f93\u5165\u6846\u6570\u636e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8f93\u5165\u6846\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914dEC iOS \u8131\u673a\u72483.15.0+"),(0,i.kt)("li",{parentName:"ul"},"@returns {string} \u7a7a\u4ee3\u8868\u65e0\u6570\u636e\u6216\u8005\u672a\u83b7\u53d6\u5230\uff0c\u6709\u6570\u636e\u4ee3\u8868\u83b7\u53d6\u5230\u4e86")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  var ok = imeApi.isOk();\n  if (!ok) {\n    logw("\u8f93\u5165\u6cd5\u72b6\u6001\u4e0d\u53ef\u7528\uff0c\u8bf7\u5230\u624b\u673a-\u8bbe\u7f6e-\u901a\u7528-\u952e\u76d8-\u9009\u9879\u4e2d\u542f\u7528[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b)]\u4e09\u65b9\u952e\u76d8\uff0c\u5982\u679c\u6ca1\u6709\u6b64\u9009\u9879\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u624b\u673a")\n    logw("\u542f\u7528\u8f93\u5165\u6cd5\u540e\uff0c\u9700\u8981\u70b9\u51fb\u8f93\u5165\u6cd5\uff0c\u5f39\u51fa[\u6253\u5305\u7684app\u540d\u79f0(\u9ed8\u8ba4\u662f\u6613\u70b9\u4e91\u6d4b\uff0c\u9e45\u9ec4\u8272\u80cc\u666f)]\u952e\u76d8\u65b9\u53ef\u4f7f\u7528\u51fd\u6570")\n    return\n  }\n  let result = imeApi.getText()\n  logd("getText  : " + result)\n}\n\nmain();\n')))}s.isMDXComponent=!0}}]);