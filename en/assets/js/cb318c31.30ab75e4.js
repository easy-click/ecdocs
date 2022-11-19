"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[6113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,v=m["".concat(i,".").concat(k)]||m[k]||p[k]||r;return n?a.createElement(v,u(u({ref:t},c),{},{components:n})):a.createElement(v,u({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,u=new Array(r);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var s=2;s<r;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={title:"\u4ee3\u7406\u4e8b\u4ef6",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7406\u4e8b\u4ef6",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7406\u4e8b\u4ef6"]},u=void 0,o={unversionedId:"zh-cn/funcs/event-api",id:"zh-cn/funcs/event-api",title:"\u4ee3\u7406\u4e8b\u4ef6",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7406\u4e8b\u4ef6",source:"@site/docs/zh-cn/funcs/event-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/event-api",permalink:"/en/docs/zh-cn/funcs/event-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ee3\u7406\u4e8b\u4ef6",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7406\u4e8b\u4ef6",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7406\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u65e0\u969c\u788d\u4e8b\u4ef6",permalink:"/en/docs/zh-cn/funcs/acevent-api"},next:{title:"\u56fe\u8272\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/image-api"}},i={},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:2},{value:"setAgentCallParam  \u4ee3\u7406\u5168\u5c40\u901a\u4fe1\u8bbe\u7f6e\u8d85\u65f6",id:"setagentcallparam--\u4ee3\u7406\u5168\u5c40\u901a\u4fe1\u8bbe\u7f6e\u8d85\u65f6",level:3},{value:"\u8f93\u5165\u6570\u636e",id:"\u8f93\u5165\u6570\u636e",level:2},{value:"setCurrentIme  \u8bbe\u7f6e\u5f53\u524d\u7684\u8f93\u5165\u6cd5",id:"setcurrentime--\u8bbe\u7f6e\u5f53\u524d\u7684\u8f93\u5165\u6cd5",level:3},{value:"restoreIme  \u6062\u590d\u5230\u4e4b\u524d\u7684\u8f93\u5165\u6cd5",id:"restoreime--\u6062\u590d\u5230\u4e4b\u524d\u7684\u8f93\u5165\u6cd5",level:3},{value:"\u622a\u56fe",id:"\u622a\u56fe",level:2},{value:"fastScreenshot  \u5feb\u901f\u622a\u5c4f\u5e55\u7684\u622a\u56fe",id:"fastscreenshot--\u5feb\u901f\u622a\u5c4f\u5e55\u7684\u622a\u56fe",level:3},{value:"\u624b\u52bf\u53ca\u8f93\u5165\u4e8b\u4ef6",id:"\u624b\u52bf\u53ca\u8f93\u5165\u4e8b\u4ef6",level:2},{value:"inputEvent \u6267\u884c\u8f93\u5165\u4e8b\u4ef6",id:"inputevent-\u6267\u884c\u8f93\u5165\u4e8b\u4ef6",level:3},{value:"touchDown \u6267\u884c\u6309\u4e0b",id:"touchdown-\u6267\u884c\u6309\u4e0b",level:3},{value:"touchMove \u6267\u884c\u79fb\u52a8",id:"touchmove-\u6267\u884c\u79fb\u52a8",level:3},{value:"touchUp \u6267\u884c\u5f39\u8d77\u8f93\u5165",id:"touchup-\u6267\u884c\u5f39\u8d77\u8f93\u5165",level:3},{value:"pressKey \u6a21\u62df\u6309\u952e",id:"presskey-\u6a21\u62df\u6309\u952e",level:3},{value:"pressKeyCode \u6a21\u62df\u952e\u76d8\u8f93\u5165",id:"presskeycode-\u6a21\u62df\u952e\u76d8\u8f93\u5165",level:3},{value:"pressKeyCodeWithMetaState \u6a21\u62df\u952e\u76d8\u8f93\u5165",id:"presskeycodewithmetastate-\u6a21\u62df\u952e\u76d8\u8f93\u5165",level:3},{value:"\u7cfb\u7edf\u6309\u952e\u76f8\u5173",id:"\u7cfb\u7edf\u6309\u952e\u76f8\u5173",level:2},{value:"menu  \u6253\u5f00\u83dc\u5355",id:"menu--\u6253\u5f00\u83dc\u5355",level:3},{value:"enter  Enter\u952e",id:"enter--enter\u952e",level:3},{value:"delete \u5220\u9664\u952e",id:"delete-\u5220\u9664\u952e",level:3},{value:"search \u641c\u7d22",id:"search-\u641c\u7d22",level:3},{value:"\u5c4f\u5e55\u63a7\u5236",id:"\u5c4f\u5e55\u63a7\u5236",level:2},{value:"closeScreen \u5173\u95ed\u5c4f\u5e55",id:"closescreen-\u5173\u95ed\u5c4f\u5e55",level:3},{value:"lightScreen \u70b9\u4eae\u5c4f\u5e55",id:"lightscreen-\u70b9\u4eae\u5c4f\u5e55",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u4e8b\u4ef6\u6a21\u5757\u8fd0\u884c\u7684\u6240\u6709\u51fd\u6570\uff0c\u662f\u9700\u8981\u4f7f\u7528\u7535\u8111\u6fc0\u6d3b\u624d\u80fd\u4f7f\u7528\u7684\uff0c\u514droot"),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u4e8b\u4ef6\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fagentEvent\uff0c\u4f8b\u5982 agentEvent.clickPoint\u8fd9\u6837\u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u5217\u51fa\u6765\u7684\u662f\u4ee3\u7406\u6a21\u5f0f\u7279\u6709\u7684\u51fd\u6570\uff0c\u5176\u4ed6\u8c03\u7528\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5168\u5c40\u51fd\u6570")),(0,l.kt)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,l.kt)("h3",{id:"setagentcallparam--\u4ee3\u7406\u5168\u5c40\u901a\u4fe1\u8bbe\u7f6e\u8d85\u65f6"},"setAgentCallParam  \u4ee3\u7406\u5168\u5c40\u901a\u4fe1\u8bbe\u7f6e\u8d85\u65f6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4ee3\u7406\u6a21\u5f0f\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u5408\u7248\u672c EC 7.0.0+"),(0,l.kt)("li",{parentName:"ul"},"@param data \u53c2\u6570\u8868"),(0,l.kt)("li",{parentName:"ul"},'\u4f8b\u5b50: {"remoteCallTimeout":10000}'),(0,l.kt)("li",{parentName:"ul"},"remoteCallTimeout: \u4ee3\u7406\u8c03\u7528\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\uff0c\u9ed8\u8ba4\u662f10\u79d2"),(0,l.kt)("li",{parentName:"ul"},"@return {bool} true \u6210\u529f false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function main(){\n var result = agentEvent.setAgentCallParam({"remoteCallTimeout":10000});\n if (result){\n     toast("\u662f");\n }else {\n     toast("\u5426");\n }\n}\nmain();\n'))),(0,l.kt)("h3",{id:""}),(0,l.kt)("h2",{id:"\u8f93\u5165\u6570\u636e"},"\u8f93\u5165\u6570\u636e"),(0,l.kt)("h3",{id:"setcurrentime--\u8bbe\u7f6e\u5f53\u524d\u7684\u8f93\u5165\u6cd5"},"setCurrentIme  \u8bbe\u7f6e\u5f53\u524d\u7684\u8f93\u5165\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5f53\u524d\u7684\u8f93\u5165\u6cd5\uff0c\u7528\u4e8e\u8f93\u5165\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"@return {boolean|\u5e03\u5c14\u578b}")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.setCurrentIme();\n    if (result){\n        toast("\u662f");\n    }else {\n        toast("\u5426");\n    }\n}\nmain();\n'))),(0,l.kt)("h3",{id:"restoreime--\u6062\u590d\u5230\u4e4b\u524d\u7684\u8f93\u5165\u6cd5"},"restoreIme  \u6062\u590d\u5230\u4e4b\u524d\u7684\u8f93\u5165\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6062\u590d\u5230\u4e4b\u524d\u7684\u8f93\u5165\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"@return {boolean|\u5e03\u5c14\u578b}")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.restoreIme();\n    if (result){\n        toast("\u662f");\n    }else {\n        toast("\u5426");\n    }\n}\nmain();\n'))),(0,l.kt)("h2",{id:"\u622a\u56fe"},"\u622a\u56fe"),(0,l.kt)("h3",{id:"fastscreenshot--\u5feb\u901f\u622a\u5c4f\u5e55\u7684\u622a\u56fe"},"fastScreenshot  \u5feb\u901f\u622a\u5c4f\u5e55\u7684\u622a\u56fe"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5feb\u901f\u622a\u5c4f\u5e55\u7684\u622a\u56fe"),(0,l.kt)("li",{parentName:"ul"},"@param filename \u6587\u4ef6\u8def\u5f84"),(0,l.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32 \u622a\u56fe\u7684\u8def\u5f84")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.fastScreenshot("/sdcard/a.jpg");\n    toast("result:"+result);\n}\nmain();\n'))),(0,l.kt)("h2",{id:"\u624b\u52bf\u53ca\u8f93\u5165\u4e8b\u4ef6"},"\u624b\u52bf\u53ca\u8f93\u5165\u4e8b\u4ef6"),(0,l.kt)("h3",{id:"inputevent-\u6267\u884c\u8f93\u5165\u4e8b\u4ef6"},"inputEvent \u6267\u884c\u8f93\u5165\u4e8b\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u8f93\u5165\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"@param action    \u52a8\u4f5c\uff0c\u8bf7\u770b\u7c7b:  MotionEvent.ACTION_*"),(0,l.kt)("li",{parentName:"ul"},"@param x         x\u5750\u6807   "),(0,l.kt)("li",{parentName:"ul"},"@param y         y\u5750\u6807   "),(0,l.kt)("li",{parentName:"ul"},"@param metaState \u63a7\u5236\u6309\u952e\uff0c\u6bd4\u5982\u8bf4shift\u952e\uff0calt\u952e\uff0cctrl\u952e\u7b49\u63a7\u5236\u952e, 0\u6216\u8005 1 any meta info"),(0,l.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.inputEvent(1,10,10,0);\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h3",{id:"touchdown-\u6267\u884c\u6309\u4e0b"},"touchDown \u6267\u884c\u6309\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u6309\u4e0b\u8f93\u5165\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"@param x         x\u5750\u6807   "),(0,l.kt)("li",{parentName:"ul"},"@param y         y\u5750\u6807   "),(0,l.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.touchDown(10,10);\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h3",{id:"touchmove-\u6267\u884c\u79fb\u52a8"},"touchMove \u6267\u884c\u79fb\u52a8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u79fb\u52a8\u8f93\u5165\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"@param x         x\u5750\u6807   "),(0,l.kt)("li",{parentName:"ul"},"@param y         y\u5750\u6807   "),(0,l.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.touchMove(10,10);\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h3",{id:"touchup-\u6267\u884c\u5f39\u8d77\u8f93\u5165"},"touchUp \u6267\u884c\u5f39\u8d77\u8f93\u5165"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u5f39\u8d77\u8f93\u5165\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"@param x         x\u5750\u6807   "),(0,l.kt)("li",{parentName:"ul"},"@param y         y\u5750\u6807   "),(0,l.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.touchUp(10,10);\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h3",{id:"presskey-\u6a21\u62df\u6309\u952e"},"pressKey \u6a21\u62df\u6309\u952e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a21\u62df\u6309\u952e,\u4f8b\u5982home back\u7b49"),(0,l.kt)("li",{parentName:"ul"},"@param key \u5bf9\u5e94\u7684\u503c\u5206\u522b\u4e3a home, back, left, right, up, down, center, menu, search, enter, delete(or del), recent(recent apps), volume_up, volume_down, volume_mute, camera, power"),(0,l.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u6210\u529f, false \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.pressKey("home");\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h3",{id:"presskeycode-\u6a21\u62df\u952e\u76d8\u8f93\u5165"},"pressKeyCode \u6a21\u62df\u952e\u76d8\u8f93\u5165"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a21\u62df\u952e\u76d8\u8f93\u5165"),(0,l.kt)("li",{parentName:"ul"},"@param keyCode \u952e\u76d8\u7684key\uff0c\u53c2\u89c1KeyEvent.KEYCODE_*"),(0,l.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.pressKeyCode(65);\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h3",{id:"presskeycodewithmetastate-\u6a21\u62df\u952e\u76d8\u8f93\u5165"},"pressKeyCodeWithMetaState \u6a21\u62df\u952e\u76d8\u8f93\u5165"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a21\u62df\u952e\u76d8\u8f93\u5165"),(0,l.kt)("li",{parentName:"ul"},"@param keyCode   keyCode \u952e\u76d8\u7684key\uff0c\u53c2\u89c1KeyEvent.KEYCODE_*"),(0,l.kt)("li",{parentName:"ul"},"@param metaState metaState  \u63a7\u5236\u6309\u952e\uff0c\u6bd4\u5982\u8bf4shift\u952e\uff0calt\u952e\uff0cctrl\u952e\u7b49\u63a7\u5236\u952e, 0\u6216\u8005 1"),(0,l.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.pressKeyCodeWithMetaState(65,1);\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h2",{id:"\u7cfb\u7edf\u6309\u952e\u76f8\u5173"},"\u7cfb\u7edf\u6309\u952e\u76f8\u5173"),(0,l.kt)("h3",{id:"menu--\u6253\u5f00\u83dc\u5355"},"menu  \u6253\u5f00\u83dc\u5355"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6253\u5f00\u83dc\u5355"),(0,l.kt)("li",{parentName:"ul"},"@return {null|\u5e03\u5c14\u578b}")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.menu();\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h3",{id:"enter--enter\u952e"},"enter  Enter\u952e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enter\u952e"),(0,l.kt)("li",{parentName:"ul"},"@return {null|\u5e03\u5c14\u578b}")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},'var result = agentEvent.enter();\nif (result){\n    toast("\u6210\u529f");\n}else {\n    toast("\u5931\u8d25");\n}\n}\nmain();\n\n```\n'))),(0,l.kt)("h3",{id:"delete-\u5220\u9664\u952e"},"delete \u5220\u9664\u952e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u952e"),(0,l.kt)("li",{parentName:"ul"},"@return {null|\u5e03\u5c14\u578b}")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.delete();\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h3",{id:"search-\u641c\u7d22"},"search \u641c\u7d22"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u641c\u7d22"),(0,l.kt)("li",{parentName:"ul"},"@return {null|\u5e03\u5c14\u578b}")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = agentEvent.search();\n    if (result){\n        toast("\u6210\u529f");\n    }else {\n        toast("\u5931\u8d25");\n    }\n}\nmain();\n'))),(0,l.kt)("h2",{id:"\u5c4f\u5e55\u63a7\u5236"},"\u5c4f\u5e55\u63a7\u5236"),(0,l.kt)("h3",{id:"closescreen-\u5173\u95ed\u5c4f\u5e55"},"closeScreen \u5173\u95ed\u5c4f\u5e55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u95ed\u5c4f\u5e55\uff0c\u5c4f\u5e55\u4e0d\u4eae\uff0c\u4f46\u662f\u4f9d\u7136\u53ef\u4ee5\u81ea\u52a8\u70b9\u51fb\uff0c\u4e0d\u540c\u4e8esleepScreen"),(0,l.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u6210\u529f\uff0cfalse \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var x =agentEvent.closeScreen();\n}\nmain();\n"))),(0,l.kt)("h3",{id:"lightscreen-\u70b9\u4eae\u5c4f\u5e55"},"lightScreen \u70b9\u4eae\u5c4f\u5e55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u4eae\u5c4f\u5e55\uff0c\u548ccloseScreen\u76f8\u53cd\u7684\u52a8\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b true \u6210\u529f\uff0cfalse \u5931\u8d25")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var x =agentEvent.lightScreen();\n}\nmain();\n"))))}p.isMDXComponent=!0}}]);