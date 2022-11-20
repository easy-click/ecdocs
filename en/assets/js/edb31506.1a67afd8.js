"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[7192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),v=u(n),s=i,k=v["".concat(o,".").concat(s)]||v[s]||p[s]||l;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=v;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},4875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const l={title:"\u8bbe\u5907\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570"]},r=void 0,c={unversionedId:"zh-cn/funcs/device-api",id:"zh-cn/funcs/device-api",title:"\u8bbe\u5907\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570",source:"@site/iosdocs/zh-cn/funcs/device-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/device-api",permalink:"/en/iosdocs/zh-cn/funcs/device-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8bbe\u5907\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570"]},sidebar:"iosdocs",previous:{title:"OCR\u8bc6\u522b",permalink:"/en/iosdocs/zh-cn/funcs/ocr-api"},next:{title:"\u6587\u4ef6\u51fd\u6570",permalink:"/en/iosdocs/zh-cn/funcs/file-api"}},o={},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"device.getDeviceInfo \u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f",id:"devicegetdeviceinfo-\u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f",level:2},{value:"device.getDeviceId \u83b7\u53d6id",id:"devicegetdeviceid-\u83b7\u53d6id",level:2},{value:"device.getDeviceAlias \u83b7\u53d6\u8bbe\u5907\u4e2d\u63a7\u522b\u540d",id:"devicegetdevicealias-\u83b7\u53d6\u8bbe\u5907\u4e2d\u63a7\u522b\u540d",level:2},{value:"device.getSerialNo \u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7",id:"devicegetserialno-\u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7",level:2},{value:"device.getDeviceName \u83b7\u53d6\u8bbe\u5907\u540d\u79f0",id:"devicegetdevicename-\u83b7\u53d6\u8bbe\u5907\u540d\u79f0",level:2},{value:"device.applist \u83b7\u53d6\u7a0b\u5e8f\u5217\u8868",id:"deviceapplist-\u83b7\u53d6\u7a0b\u5e8f\u5217\u8868",level:2},{value:"device.getScreenWidth \u5c4f\u5e55\u5bbd\u5ea6",id:"devicegetscreenwidth-\u5c4f\u5e55\u5bbd\u5ea6",level:2},{value:"device.getScreenHeight \u5c4f\u5e55\u9ad8\u5ea6",id:"devicegetscreenheight-\u5c4f\u5e55\u9ad8\u5ea6",level:2},{value:"device.getScale \u5c4f\u5e55\u7f29\u653e\u6bd4",id:"devicegetscale-\u5c4f\u5e55\u7f29\u653e\u6bd4",level:2},{value:"device.getModel \u53d6\u5f97\u673a\u578b",id:"devicegetmodel-\u53d6\u5f97\u673a\u578b",level:2},{value:"device.getOSVersion \u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7",id:"devicegetosversion-\u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7",level:2},{value:"device.getBattery \u53d6\u5f97\u7535\u91cf",id:"devicegetbattery-\u53d6\u5f97\u7535\u91cf",level:2},{value:"device.isCharging \u662f\u5426\u6b63\u5728\u5145\u7535",id:"deviceischarging-\u662f\u5426\u6b63\u5728\u5145\u7535",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u8bbe\u5907\u4fe1\u606f\u76f8\u5173\u8054"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fdevice\uff0c")),(0,i.kt)("h2",{id:"devicegetdeviceinfo-\u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f"},"device.getDeviceInfo \u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672cEC iOS 3.2.0+"),(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7684\u662fJSON"),(0,i.kt)("li",{parentName:"ul"},"orientation\uff1a:\u65b9\u5411 1 \u7ad6\u5c4f 2 \u6a2a\u5c4f"),(0,i.kt)("li",{parentName:"ul"},"screenWidth\uff1a:\u5c4f\u5e55\u5bbd\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"screenHeight\uff1a:\u5c4f\u5e55\u9ad8\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"orientationClick\uff1a\u5f53\u524d\u5750\u6807\u7cfb\u65b9\u5411\uff0c1\u7ad6\u5c4f 2\u6a2a\u5c4f"),(0,i.kt)("li",{parentName:"ul"},"deviceId\uff1a\u8bbe\u5907ID"),(0,i.kt)("li",{parentName:"ul"},"serialNo\uff1a\u8bbe\u5907\u5e8f\u5217\u53f7"),(0,i.kt)("li",{parentName:"ul"},"deviceName\uff1a\u8bbe\u5907\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},"productVersion\uff1a\u8bbe\u5907\u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"model\uff1a\u8bbe\u5907\u578b\u53f7"),(0,i.kt)("li",{parentName:"ul"},"@return JSON\u5b57\u7b26\u4e32")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function main(){\n var xx = device.getDeviceInfo();\n logd(xx);\n}\n\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetdeviceid-\u83b7\u53d6id"},"device.getDeviceId \u83b7\u53d6id"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u624b\u673a\u7684id"),(0,i.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var xx = device.getDeviceId();\n    logd(xx);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetdevicealias-\u83b7\u53d6\u8bbe\u5907\u4e2d\u63a7\u522b\u540d"},"device.getDeviceAlias \u83b7\u53d6\u8bbe\u5907\u4e2d\u63a7\u522b\u540d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u4e2d\u63a7\u8bbe\u5907\u53f7\u522b\u540d"),(0,i.kt)("li",{parentName:"ul"},"@return string")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function main(){\n var xx = device.getDeviceAlias();\n logd(xx);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetserialno-\u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7"},"device.getSerialNo \u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7\uff0c\u5728\u624b\u673a\u7684\u8bbe\u7f6e\u4e2d\u53ef\u4ee5\u67e5\u8be2\u5230"),(0,i.kt)("li",{parentName:"ul"},"@return string")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function main(){\n var xx = device.getSerialNo();\n logd(xx);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetdevicename-\u83b7\u53d6\u8bbe\u5907\u540d\u79f0"},"device.getDeviceName \u83b7\u53d6\u8bbe\u5907\u540d\u79f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8bbe\u5907\u540d\u79f0\uff0c\u5c31\u662f\u624b\u673a\u7684\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},"@return string")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function main(){\nvar xx = device.getDeviceName();\nlogd(xx);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"deviceapplist-\u83b7\u53d6\u7a0b\u5e8f\u5217\u8868"},"device.applist \u83b7\u53d6\u7a0b\u5e8f\u5217\u8868"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5f53\u524d\u8bbe\u5907\u7684\u5b89\u88c5\u7684\u7a0b\u5e8f\u5217\u8868"),(0,i.kt)("li",{parentName:"ul"},"@return {string} json \u5b57\u7b26\u4e32")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function main(){\n var applistx = device.applist();\n logd(applistx);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetscreenwidth-\u5c4f\u5e55\u5bbd\u5ea6"},"device.getScreenWidth \u5c4f\u5e55\u5bbd\u5ea6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5c4f\u5e55\u5bbd\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"@return \u6574\u578b")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var width = device.getScreenWidth();\n    toast(width);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetscreenheight-\u5c4f\u5e55\u9ad8\u5ea6"},"device.getScreenHeight \u5c4f\u5e55\u9ad8\u5ea6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5c4f\u5e55\u9ad8\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"@return \u6574\u578b")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var height = device.getScreenHeight();\n    toast(height);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetscale-\u5c4f\u5e55\u7f29\u653e\u6bd4"},"device.getScale \u5c4f\u5e55\u7f29\u653e\u6bd4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c4f\u5e55\u7f29\u653e\u6bd4"),(0,i.kt)("li",{parentName:"ul"},"@return {float}")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var d = device.getScale();\n    toast(d);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetmodel-\u53d6\u5f97\u673a\u578b"},"device.getModel \u53d6\u5f97\u673a\u578b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u624b\u673a\u673a\u578b"),(0,i.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var model = device.getModel();\n    toast(model);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetosversion-\u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7"},"device.getOSVersion \u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var osVersion = device.getOSVersion();\n    toast(osVersion);\n}\nmain();\n"))),(0,i.kt)("h2",{id:"devicegetbattery-\u53d6\u5f97\u7535\u91cf"},"device.getBattery \u53d6\u5f97\u7535\u91cf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u7535\u91cf"),(0,i.kt)("li",{parentName:"ul"},"@return int\u578b")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var res = device.getBattery();\n    logd(res);\n}\nmain();\n"))),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},""))),(0,i.kt)("h2",{id:"deviceischarging-\u662f\u5426\u6b63\u5728\u5145\u7535"},"device.isCharging \u662f\u5426\u6b63\u5728\u5145\u7535"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u662f\u5426\u6b63\u5728\u5145\u7535"),(0,i.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var res = device.isCharging();\n    logd(res);\n}\nmain();\n"))))}p.isMDXComponent=!0}}]);