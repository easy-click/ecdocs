"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[1581],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),v=d(n),p=i,m=v["".concat(o,".").concat(p)]||v[p]||k[p]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=v;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},9756:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return k}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],c={title:"\u8bbe\u5907\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u8bbe\u5907\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u8bbe\u5907\u51fd\u6570"]},o=void 0,d={unversionedId:"zh-cn/funcs/device-api",id:"zh-cn/funcs/device-api",title:"\u8bbe\u5907\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u8bbe\u5907\u51fd\u6570",source:"@site/docs/zh-cn/funcs/device-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/device-api",permalink:"/docs/zh-cn/funcs/device-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8bbe\u5907\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u8bbe\u5907\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u8bbe\u5907\u51fd\u6570"]},sidebar:"docs",previous:{title:"OCR\u8bc6\u522b",permalink:"/docs/zh-cn/funcs/ocr-api"},next:{title:"\u60ac\u6d6e\u7a97\u51fd\u6570",permalink:"/docs/zh-cn/funcs/floaty-api"}},u={},k=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"device.tcDeviceId \u4e09\u65b9\u7edf\u8ba1\u552f\u4e00\u8bbe\u5907\u6807\u8bc6",id:"devicetcdeviceid-\u4e09\u65b9\u7edf\u8ba1\u552f\u4e00\u8bbe\u5907\u6807\u8bc6",level:2},{value:"device.getIMEI \u83b7\u53d6IMEI",id:"devicegetimei-\u83b7\u53d6imei",level:2},{value:"device.getScreenWidth \u5c4f\u5e55\u5bbd\u5ea6",id:"devicegetscreenwidth-\u5c4f\u5e55\u5bbd\u5ea6",level:2},{value:"device.getScreenHeight \u5c4f\u5e55\u9ad8\u5ea6",id:"devicegetscreenheight-\u5c4f\u5e55\u9ad8\u5ea6",level:2},{value:"device.getAndroidId \u53d6\u5f97Android ID",id:"devicegetandroidid-\u53d6\u5f97android-id",level:2},{value:"device.getBrand \u53d6\u5f97\u54c1\u724c",id:"devicegetbrand-\u53d6\u5f97\u54c1\u724c",level:2},{value:"device.getModel \u53d6\u5f97\u673a\u578b",id:"devicegetmodel-\u53d6\u5f97\u673a\u578b",level:2},{value:"device.getImsi \u53d6\u5f97\u5361\u53f7",id:"devicegetimsi-\u53d6\u5f97\u5361\u53f7",level:2},{value:"device.getSerial \u53d6\u5f97\u624b\u673a\u4e32\u53f7",id:"devicegetserial-\u53d6\u5f97\u624b\u673a\u4e32\u53f7",level:2},{value:"device.getSdkInt \u53d6\u5f97SDK \u7248\u672c\u53f7",id:"devicegetsdkint-\u53d6\u5f97sdk-\u7248\u672c\u53f7",level:2},{value:"device.getOSVersion \u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7",id:"devicegetosversion-\u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7",level:2},{value:"device.getMacAddress \u83b7\u53d6mac\u5730\u5740",id:"devicegetmacaddress-\u83b7\u53d6mac\u5730\u5740",level:2},{value:"device.getBattery \u53d6\u5f97\u7535\u91cf",id:"devicegetbattery-\u53d6\u5f97\u7535\u91cf",level:2},{value:"device.getTotalMem \u53d6\u5f97\u603b\u5185\u5b58",id:"devicegettotalmem-\u53d6\u5f97\u603b\u5185\u5b58",level:2},{value:"device.getAvailMem \u53d6\u5f97\u53ef\u7528\u5185\u5b58",id:"devicegetavailmem-\u53d6\u5f97\u53ef\u7528\u5185\u5b58",level:2},{value:"device.isCharging \u662f\u5426\u6b63\u5728\u5145\u7535",id:"deviceischarging-\u662f\u5426\u6b63\u5728\u5145\u7535",level:2},{value:"device.vibrate \u53d1\u51fa\u9707\u52a8",id:"devicevibrate-\u53d1\u51fa\u9707\u52a8",level:2},{value:"device.cancelVibration \u53d6\u6d88\u9707\u52a8",id:"devicecancelvibration-\u53d6\u6d88\u9707\u52a8",level:2},{value:"device.keepAwake \u4fdd\u6301\u8bbe\u5907\u5524\u9192",id:"devicekeepawake-\u4fdd\u6301\u8bbe\u5907\u5524\u9192",level:2},{value:"device.keepScreenOn \u4fdd\u6301\u5c4f\u5e55\u5524\u9192\u72b6\u6001",id:"devicekeepscreenon-\u4fdd\u6301\u5c4f\u5e55\u5524\u9192\u72b6\u6001",level:2},{value:"device.keepScreenDim \u4fdd\u6301\u8bbe\u5907\u660f\u6697\u72b6\u6001",id:"devicekeepscreendim-\u4fdd\u6301\u8bbe\u5907\u660f\u6697\u72b6\u6001",level:2},{value:"device.cancelKeepingAwake \u53d6\u6d88\u4fdd\u6301\u5524\u9192\u72b6\u6001",id:"devicecancelkeepingawake-\u53d6\u6d88\u4fdd\u6301\u5524\u9192\u72b6\u6001",level:2}],v={toc:k};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u8bbe\u5907\u4fe1\u606f\u76f8\u5173\u8054"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fdevice\uff0c\u4f8b\u5982 device.getIMEI()\u8fd9\u6837\u8c03\u7528")),(0,r.kt)("h2",{id:"devicetcdeviceid-\u4e09\u65b9\u7edf\u8ba1\u552f\u4e00\u8bbe\u5907\u6807\u8bc6"},"device.tcDeviceId \u4e09\u65b9\u7edf\u8ba1\u552f\u4e00\u8bbe\u5907\u6807\u8bc6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97talkingdata\u4e09\u65b9\u7edf\u8ba1\u5b9a\u4e49\u7684\u552f\u4e00\u8bbe\u5907\u6807\u8bc6"),(0,r.kt)("li",{parentName:"ul"},"@return {\u5b57\u7b26\u4e32}")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var d = device.tcDeviceId();\n    //\u5982\u679c\u60f3\u4f20\u7ed9\u5bf9\u8c61,\u9700\u5f3a\u8f6c\u4e00\u4e0b,\u5426\u5219\u4f1a\u62a5\u9519\n    d+=""\n    toast(d);\n}\nmain();\n'))),(0,r.kt)("h2",{id:"devicegetimei-\u83b7\u53d6imei"},"device.getIMEI \u83b7\u53d6IMEI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u624b\u673a\u7684IMEI"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var imei = device.getIMEI();\n    toast(imei);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetscreenwidth-\u5c4f\u5e55\u5bbd\u5ea6"},"device.getScreenWidth \u5c4f\u5e55\u5bbd\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5c4f\u5e55\u5bbd\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"@return \u6574\u578b")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var width = device.getScreenWidth();\n    toast(width);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetscreenheight-\u5c4f\u5e55\u9ad8\u5ea6"},"device.getScreenHeight \u5c4f\u5e55\u9ad8\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5c4f\u5e55\u9ad8\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"@return \u6574\u578b")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var height = device.getScreenHeight();\n    toast(height);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetandroidid-\u53d6\u5f97android-id"},"device.getAndroidId \u53d6\u5f97Android ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97Android ID"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var androidId = device.getAndroidId();\n    toast(androidId);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetbrand-\u53d6\u5f97\u54c1\u724c"},"device.getBrand \u53d6\u5f97\u54c1\u724c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u624b\u673a\u54c1\u724c"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var brand = device.getBrand();\n    toast(brand);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetmodel-\u53d6\u5f97\u673a\u578b"},"device.getModel \u53d6\u5f97\u673a\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u624b\u673a\u673a\u578b"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var model = device.getModel();\n    toast(model);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetimsi-\u53d6\u5f97\u5361\u53f7"},"device.getImsi \u53d6\u5f97\u5361\u53f7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u624b\u673a\u5361\u53f7"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var imsi = device.getImsi();\n    toast(imsi);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetserial-\u53d6\u5f97\u624b\u673a\u4e32\u53f7"},"device.getSerial \u53d6\u5f97\u624b\u673a\u4e32\u53f7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u624b\u673a\u4e32\u53f7"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var serial = device.getSerial();\n    toast(serial);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetsdkint-\u53d6\u5f97sdk-\u7248\u672c\u53f7"},"device.getSdkInt \u53d6\u5f97SDK \u7248\u672c\u53f7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u624b\u673aSDK \u7248\u672c\u53f7\uff0c\u4f8b\u5982 23"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var sdkInt = device.getSdkInt();\n    toast(sdkInt);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetosversion-\u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7"},"device.getOSVersion \u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u624b\u673a\u7248\u672c\u53f7,\u4f8b\u5982 6.0\u7b49\u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var osVersion = device.getOSVersion();\n    toast(osVersion);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetmacaddress-\u83b7\u53d6mac\u5730\u5740"},"device.getMacAddress \u83b7\u53d6mac\u5730\u5740"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6mac\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"@return \u5b57\u7b26\u4e32")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var res = device.getMacAddress();\n    toast(res);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetbattery-\u53d6\u5f97\u7535\u91cf"},"device.getBattery \u53d6\u5f97\u7535\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u7535\u91cf"),(0,r.kt)("li",{parentName:"ul"},"@return int\u578b")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var res = device.getBattery();\n    toast(res);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegettotalmem-\u53d6\u5f97\u603b\u5185\u5b58"},"device.getTotalMem \u53d6\u5f97\u603b\u5185\u5b58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u603b\u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},"@return long\u578b")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var res = device.getTotalMem();\n    toast(res);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicegetavailmem-\u53d6\u5f97\u53ef\u7528\u5185\u5b58"},"device.getAvailMem \u53d6\u5f97\u53ef\u7528\u5185\u5b58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u53ef\u7528\u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},"@return long\u578b")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var res = device.getAvailMem();\n    toast(res);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"deviceischarging-\u662f\u5426\u6b63\u5728\u5145\u7535"},"device.isCharging \u662f\u5426\u6b63\u5728\u5145\u7535"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u6b63\u5728\u5145\u7535"),(0,r.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var res = device.isCharging();\n    toast(res);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicevibrate-\u53d1\u51fa\u9707\u52a8"},"device.vibrate \u53d1\u51fa\u9707\u52a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d1\u51fa\u9707\u52a8 \u5355\u4f4d\u662f\u6beb\u79d2")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n     device.vibrate(1*1000);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicecancelvibration-\u53d6\u6d88\u9707\u52a8"},"device.cancelVibration \u53d6\u6d88\u9707\u52a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u9707\u52a8")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n     device.cancelVibration();\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicekeepawake-\u4fdd\u6301\u8bbe\u5907\u5524\u9192"},"device.keepAwake \u4fdd\u6301\u8bbe\u5907\u5524\u9192"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u6301\u8bbe\u5907\u5524\u9192"),(0,r.kt)("li",{parentName:"ul"},"@param flag \u53c2\u8003\u5b89\u5353PowerManager\u4e2d\u7684\u5524\u9192\u6807\u51c6")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n     importClass(android.os.PowerManager)\n     device.keepAwake(PowerManager.SCREEN_DIM_WAKE_LOCK|PowerManager.ACQUIRE_CAUSES_WAKEUP);\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicekeepscreenon-\u4fdd\u6301\u5c4f\u5e55\u5524\u9192\u72b6\u6001"},"device.keepScreenOn \u4fdd\u6301\u5c4f\u5e55\u5524\u9192\u72b6\u6001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u6301\u5c4f\u5e55\u5524\u9192\u72b6\u6001")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n     device.keepScreenOn();\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicekeepscreendim-\u4fdd\u6301\u8bbe\u5907\u660f\u6697\u72b6\u6001"},"device.keepScreenDim \u4fdd\u6301\u8bbe\u5907\u660f\u6697\u72b6\u6001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u6301\u8bbe\u5907\u660f\u6697\u72b6\u6001")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n     device.keepScreenDim();\n}\nmain();\n"))),(0,r.kt)("h2",{id:"devicecancelkeepingawake-\u53d6\u6d88\u4fdd\u6301\u5524\u9192\u72b6\u6001"},"device.cancelKeepingAwake \u53d6\u6d88\u4fdd\u6301\u5524\u9192\u72b6\u6001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u4fdd\u6301\u5524\u9192\u72b6\u6001")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n     device.cancelKeepingAwake();\n}\nmain();\n"))))}p.isMDXComponent=!0}}]);