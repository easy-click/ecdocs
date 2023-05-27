"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[7192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},o=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(n),s=a,g=o["".concat(d,".").concat(s)]||o[s]||v[s]||l;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=o;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<l;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}o.displayName="MDXCreateElement"},4875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const l={title:"\u8bbe\u5907\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570"]},r=void 0,c={unversionedId:"zh-cn/funcs/device-api",id:"zh-cn/funcs/device-api",title:"\u8bbe\u5907\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570",source:"@site/iosdocs/zh-cn/funcs/device-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/device-api",permalink:"/iosdocs/zh-cn/funcs/device-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8bbe\u5907\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8bbe\u5907\u51fd\u6570"]},sidebar:"iosdocs",previous:{title:"\u8f85\u52a9\u6a21\u5757",permalink:"/iosdocs/zh-cn/funcs/apphelper-api"},next:{title:"\u6587\u4ef6\u51fd\u6570",permalink:"/iosdocs/zh-cn/funcs/file-api"}},d={},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"device.getDeviceInfo \u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f",id:"devicegetdeviceinfo-\u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f",level:2},{value:"device.getDeviceId \u83b7\u53d6id",id:"devicegetdeviceid-\u83b7\u53d6id",level:2},{value:"device.getDeviceAlias \u83b7\u53d6\u8bbe\u5907\u4e2d\u63a7\u522b\u540d",id:"devicegetdevicealias-\u83b7\u53d6\u8bbe\u5907\u4e2d\u63a7\u522b\u540d",level:2},{value:"device.getSerialNo \u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7",id:"devicegetserialno-\u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7",level:2},{value:"device.getDeviceName \u83b7\u53d6\u8bbe\u5907\u540d\u79f0",id:"devicegetdevicename-\u83b7\u53d6\u8bbe\u5907\u540d\u79f0",level:2},{value:"device.applist \u83b7\u53d6\u7a0b\u5e8f\u5217\u8868",id:"deviceapplist-\u83b7\u53d6\u7a0b\u5e8f\u5217\u8868",level:2},{value:"device.getScreenWidthHeightText \u53d6\u5f97\u5c4f\u5e55\u5bbd\u5ea6\u9ad8\u5ea6",id:"devicegetscreenwidthheighttext-\u53d6\u5f97\u5c4f\u5e55\u5bbd\u5ea6\u9ad8\u5ea6",level:2},{value:"device.getScreenWidth \u5c4f\u5e55\u5bbd\u5ea6",id:"devicegetscreenwidth-\u5c4f\u5e55\u5bbd\u5ea6",level:2},{value:"device.getScreenWidth \u5c4f\u5e55\u5bbd\u5ea6",id:"devicegetscreenwidth-\u5c4f\u5e55\u5bbd\u5ea6-1",level:2},{value:"device.getScreenHeight \u5c4f\u5e55\u9ad8\u5ea6",id:"devicegetscreenheight-\u5c4f\u5e55\u9ad8\u5ea6",level:2},{value:"device.getScale \u5c4f\u5e55\u7f29\u653e\u6bd4",id:"devicegetscale-\u5c4f\u5e55\u7f29\u653e\u6bd4",level:2},{value:"device.getModel \u53d6\u5f97\u673a\u578b",id:"devicegetmodel-\u53d6\u5f97\u673a\u578b",level:2},{value:"device.getOSVersion \u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7",id:"devicegetosversion-\u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7",level:2},{value:"device.getBattery \u53d6\u5f97\u7535\u91cf",id:"devicegetbattery-\u53d6\u5f97\u7535\u91cf",level:2},{value:"device.isCharging \u662f\u5426\u6b63\u5728\u5145\u7535",id:"deviceischarging-\u662f\u5426\u6b63\u5728\u5145\u7535",level:2}],p={toc:u};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u8bbe\u5907\u4fe1\u606f\u76f8\u5173\u8054"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fdevice\uff0c")),(0,a.kt)("h2",{id:"devicegetdeviceinfo-\u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f"},"device.getDeviceInfo \u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8bbe\u5907\u7684\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672cEC iOS 3.2.0+"),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7684\u662fJSON"),(0,a.kt)("li",{parentName:"ul"},"orientation\uff1a:\u65b9\u5411 1 \u7ad6\u5c4f 2 \u6a2a\u5c4f"),(0,a.kt)("li",{parentName:"ul"},"screenWidth\uff1a:\u5c4f\u5e55\u5bbd\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"screenHeight\uff1a:\u5c4f\u5e55\u9ad8\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"orientationClick\uff1a\u5f53\u524d\u5750\u6807\u7cfb\u65b9\u5411\uff0c1\u7ad6\u5c4f 2\u6a2a\u5c4f"),(0,a.kt)("li",{parentName:"ul"},"deviceId\uff1a\u8bbe\u5907ID"),(0,a.kt)("li",{parentName:"ul"},"serialNo\uff1a\u8bbe\u5907\u5e8f\u5217\u53f7"),(0,a.kt)("li",{parentName:"ul"},"deviceName\uff1a\u8bbe\u5907\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"productVersion\uff1a\u8bbe\u5907\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"model\uff1a\u8bbe\u5907\u578b\u53f7"),(0,a.kt)("li",{parentName:"ul"},"@return JSON\u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," function main() {\n  var xx = device.getDeviceInfo();\n  logd(xx);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetdeviceid-\u83b7\u53d6id"},"device.getDeviceId \u83b7\u53d6id"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u624b\u673a\u7684id"),(0,a.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  var xx = device.getDeviceId();\n  logd(xx);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetdevicealias-\u83b7\u53d6\u8bbe\u5907\u4e2d\u63a7\u522b\u540d"},"device.getDeviceAlias \u83b7\u53d6\u8bbe\u5907\u4e2d\u63a7\u522b\u540d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u4e2d\u63a7\u8bbe\u5907\u53f7\u522b\u540d"),(0,a.kt)("li",{parentName:"ul"},"@return string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," function main() {\n  var xx = device.getDeviceAlias();\n  logd(xx);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetserialno-\u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7"},"device.getSerialNo \u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8bbe\u5907\u5e8f\u5217\u53f7\uff0c\u5728\u624b\u673a\u7684\u8bbe\u7f6e\u4e2d\u53ef\u4ee5\u67e5\u8be2\u5230"),(0,a.kt)("li",{parentName:"ul"},"@return string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," function main() {\n  var xx = device.getSerialNo();\n  logd(xx);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetdevicename-\u83b7\u53d6\u8bbe\u5907\u540d\u79f0"},"device.getDeviceName \u83b7\u53d6\u8bbe\u5907\u540d\u79f0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8bbe\u5907\u540d\u79f0\uff0c\u5c31\u662f\u624b\u673a\u7684\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"@return string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," function main() {\n  var xx = device.getDeviceName();\n  logd(xx);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"deviceapplist-\u83b7\u53d6\u7a0b\u5e8f\u5217\u8868"},"device.applist \u83b7\u53d6\u7a0b\u5e8f\u5217\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5f53\u524d\u8bbe\u5907\u7684\u5b89\u88c5\u7684\u7a0b\u5e8f\u5217\u8868"),(0,a.kt)("li",{parentName:"ul"},"@return {string} json \u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," function main() {\n  var applistx = device.applist();\n  logd(applistx);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetscreenwidthheighttext-\u53d6\u5f97\u5c4f\u5e55\u5bbd\u5ea6\u9ad8\u5ea6"},"device.getScreenWidthHeightText \u53d6\u5f97\u5c4f\u5e55\u5bbd\u5ea6\u9ad8\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5c4f\u5e55\u5bbd\u5ea6\u9ad8\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"@return {string} \u4f8b\u5982 750,1334")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  var wh = device.getScreenWidthHeightText();\n  logd(wh);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetscreenwidth-\u5c4f\u5e55\u5bbd\u5ea6"},"device.getScreenWidth \u5c4f\u5e55\u5bbd\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5c4f\u5e55\u5bbd\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"[\u5df2\u8fc7\u671f]"," \u6709\u4e34\u754c\u503c\u95ee\u9898\uff0c\u4f7f\u7528getScreenWidthHeightText\u66ff\u4ee3"),(0,a.kt)("li",{parentName:"ul"},"@return \u6574\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  var width = device.getScreenWidth();\n  logd(width);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetscreenwidth-\u5c4f\u5e55\u5bbd\u5ea6-1"},"device.getScreenWidth \u5c4f\u5e55\u5bbd\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5c4f\u5e55\u5bbd\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"[\u5df2\u8fc7\u671f]"," \u6709\u4e34\u754c\u503c\u95ee\u9898\uff0c\u4f7f\u7528getScreenWidthHeightText\u66ff\u4ee3"),(0,a.kt)("li",{parentName:"ul"},"@return \u6574\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  var width = device.getScreenWidth();\n  logd(width);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetscreenheight-\u5c4f\u5e55\u9ad8\u5ea6"},"device.getScreenHeight \u5c4f\u5e55\u9ad8\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5c4f\u5e55\u9ad8\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"[\u5df2\u8fc7\u671f]"," \u6709\u4e34\u754c\u503c\u95ee\u9898\uff0c\u4f7f\u7528getScreenWidthHeightText\u66ff\u4ee3"),(0,a.kt)("li",{parentName:"ul"},"@return \u6574\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  var height = device.getScreenHeight();\n  logd(height);\n}\nmain();\n")),(0,a.kt)("h2",{id:"devicegetscale-\u5c4f\u5e55\u7f29\u653e\u6bd4"},"device.getScale \u5c4f\u5e55\u7f29\u653e\u6bd4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c4f\u5e55\u7f29\u653e\u6bd4"),(0,a.kt)("li",{parentName:"ul"},"@return {float}")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function main() {\n  var d = device.getScale();\n  logd(d);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetmodel-\u53d6\u5f97\u673a\u578b"},"device.getModel \u53d6\u5f97\u673a\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u624b\u673a\u673a\u578b"),(0,a.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," function main() {\n  var model = device.getModel();\n  logd(model);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetosversion-\u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7"},"device.getOSVersion \u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7"),(0,a.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," function main() {\n  var osVersion = device.getOSVersion();\n  toast(osVersion);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"devicegetbattery-\u53d6\u5f97\u7535\u91cf"},"device.getBattery \u53d6\u5f97\u7535\u91cf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u7535\u91cf"),(0,a.kt)("li",{parentName:"ul"},"@return int\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function main() {\n  var res = device.getBattery();\n  logd(res);\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"deviceischarging-\u662f\u5426\u6b63\u5728\u5145\u7535"},"device.isCharging \u662f\u5426\u6b63\u5728\u5145\u7535"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u6b63\u5728\u5145\u7535"),(0,a.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction main() {\n  var res = device.isCharging();\n  logd(res);\n}\n\nmain();\n")))}v.isMDXComponent=!0}}]);