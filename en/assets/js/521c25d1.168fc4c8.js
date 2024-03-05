"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[7251],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>v});var i=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,i,l=function(n,e){if(null==n)return{};var t,i,l={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var c=i.createContext({}),u=function(n){var e=i.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s=function(n){var e=u(n.components);return i.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,c=n.parentName,s=a(n,["components","mdxType","originalType","parentName"]),p=u(t),v=l,h=p["".concat(c,".").concat(v)]||p[v]||d[v]||r;return t?i.createElement(h,o(o({ref:e},s),{},{components:t})):i.createElement(h,o({ref:e},s))}));function v(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,o=new Array(r);o[0]=p;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a.mdxType="string"==typeof n?n:l,o[1]=a;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8338:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=t(7462),l=(t(7294),t(3905));const r={title:"HID\u4e8b\u4ef6",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot HID\u4e8b\u4ef6",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot HID\u4e8b\u4ef6"]},o=void 0,a={unversionedId:"zh-cn/funcs/hid-event-api",id:"zh-cn/funcs/hid-event-api",title:"HID\u4e8b\u4ef6",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot HID\u4e8b\u4ef6",source:"@site/docs/zh-cn/funcs/hid-event-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/hid-event-api",permalink:"/en/docs/zh-cn/funcs/hid-event-api",draft:!1,tags:[],version:"current",frontMatter:{title:"HID\u4e8b\u4ef6",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot HID\u4e8b\u4ef6",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot HID\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u4ee3\u7406\u4e8b\u4ef6",permalink:"/en/docs/zh-cn/funcs/event-api"},next:{title:"\u4e2d\u63a7\u6295\u5c4f\u6a21\u5757",permalink:"/en/docs/zh-cn/funcs/center-api"}},c={},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"setHidCenter \u8bbe\u7f6eHID\u4e3b\u63a7\u5730\u5740",id:"sethidcenter-\u8bbe\u7f6ehid\u4e3b\u63a7\u5730\u5740",level:3},{value:"initUsbDevice \u521d\u59cb\u5316HID\u8bbe\u5907",id:"initusbdevice-\u521d\u59cb\u5316hid\u8bbe\u5907",level:3},{value:"checkFirstPoint \u77eb\u6b63HID\u5750\u6807",id:"checkfirstpoint-\u77eb\u6b63hid\u5750\u6807",level:3},{value:"closeUsbDevice \u5173\u95edHID\u8bbe\u5907",id:"closeusbdevice-\u5173\u95edhid\u8bbe\u5907",level:3},{value:"clickPoint \u70b9\u51fb\u5750\u6807",id:"clickpoint-\u70b9\u51fb\u5750\u6807",level:3},{value:"doubleClickPoint \u53cc\u51fb\u5750\u6807",id:"doubleclickpoint-\u53cc\u51fb\u5750\u6807",level:3},{value:"mouseMove \u79fb\u52a8\u9f20\u6807\u5230\u5750\u6807\u70b9",id:"mousemove-\u79fb\u52a8\u9f20\u6807\u5230\u5750\u6807\u70b9",level:3},{value:"press \u957f\u6309\u5750\u6807",id:"press-\u957f\u6309\u5750\u6807",level:3},{value:"multiTouch \u591a\u70b9\u89e6\u6478",id:"multitouch-\u591a\u70b9\u89e6\u6478",level:3}],s={toc:u};function d(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,i.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HID\u4e8b\u4ef6\u6a21\u5757\u8fd0\u884c\u7684\u6240\u6709\u51fd\u6570\uff0c\u662f\u9700\u8981\u4f7f\u7528EasyClick HID\u4e3b\u63a7\u7a0b\u5e8f\u6fc0\u6d3bHID\u540e\u624d\u53ef\u4ee5\u8c03\u7528\u7684"),(0,l.kt)("li",{parentName:"ul"},"HID\u4e3b\u63a7\u7a0b\u5e8f\u4f7f\u7528\u8bf7\u770b \u9ad8\u7ea7\u529f\u80fd - HID\u4e3b\u63a7\u7528\u6cd5 : ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh-cn/advance/hid"},"HID\u4e3b\u63a7")),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u4e8b\u4ef6\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662f hidEvent\uff0c\u4f8b\u5982 hidEvent.click \u8fd9\u6837\u8c03\u7528")),(0,l.kt)("h3",{id:"sethidcenter-\u8bbe\u7f6ehid\u4e3b\u63a7\u5730\u5740"},"setHidCenter \u8bbe\u7f6eHID\u4e3b\u63a7\u5730\u5740"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6eHID\u4e3b\u63a7\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC \u5b89\u5353 9.15.0+"),(0,l.kt)("li",{parentName:"ul"},"@param hidCenterUrl HID\u4e3b\u63a7\u7a0b\u5e8f\u8fd0\u884c\u7684\u7f51\u5740"),(0,l.kt)("li",{parentName:"ul"},"@return {string} null \u4ee3\u8868\u6210\u529f\uff0c\u5176\u4ed6\u4ee3\u8868\u9519\u8bef\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let i = initHid()\n  if (!i) {\n    return\n  }\n}\n\nfunction initHid() {\n  // \u5148\u8bbe\u7f6e\u4e00\u4e0b\u5c40\u57df\u7f51\u5185\u7684HID\u7a0b\u5e8f\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7FRP\u8f6f\u4ef6\u6620\u5c04\u5230\u5916\u7f51\uff0c\u7136\u540e\u586b\u5199\u5916\u7f51\u5730\u5740\n  hidEvent.setHidCenter("http://192.168.2.14:8988")\n  hidEvent.closeUsbDevice();\n  let init = hidEvent.initUsbDevice()\n  if (init == null) {\n    logd("\u521d\u59cb\u5316HID\u8bbe\u5907\u6210\u529f")\n  } else {\n    loge("\u521d\u59cb\u5316\u5931\u8d25:" + init);\n    return false\n  }\n  // \u5f00\u59cb\u77eb\u6b63\u5c4f\u5e55\u5750\u6807\n  let po = hidEvent.checkFirstPoint()\n  if (po == null) {\n    logd("\u77eb\u6b63\u5750\u6807\u6210\u529f")\n  } else {\n    loge("\u77eb\u6b63\u5750\u6807\u5931\u8d25:" + init);\n    return false\n  }\n  return true;\n}\n\nmain();\n\n')),(0,l.kt)("h3",{id:"initusbdevice-\u521d\u59cb\u5316hid\u8bbe\u5907"},"initUsbDevice \u521d\u59cb\u5316HID\u8bbe\u5907"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316HID\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC \u5b89\u5353 9.15.0+"),(0,l.kt)("li",{parentName:"ul"},"@return {string} null \u4ee3\u8868\u6210\u529f\uff0c\u5176\u4ed6\u4ee3\u8868\u9519\u8bef\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let i = initHid()\n  if (!i) {\n    return\n  }\n}\n\nfunction initHid() {\n  // \u5148\u8bbe\u7f6e\u4e00\u4e0b\u5c40\u57df\u7f51\u5185\u7684HID\u7a0b\u5e8f\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7FRP\u8f6f\u4ef6\u6620\u5c04\u5230\u5916\u7f51\uff0c\u7136\u540e\u586b\u5199\u5916\u7f51\u5730\u5740\n  hidEvent.setHidCenter("http://192.168.2.14:8988")\n  hidEvent.closeUsbDevice();\n  let init = hidEvent.initUsbDevice()\n  if (init == null) {\n    logd("\u521d\u59cb\u5316HID\u8bbe\u5907\u6210\u529f")\n  } else {\n    loge("\u521d\u59cb\u5316\u5931\u8d25:" + init);\n    return false\n  }\n  // \u5f00\u59cb\u77eb\u6b63\u5c4f\u5e55\u5750\u6807\n  let po = hidEvent.checkFirstPoint()\n  if (po == null) {\n    logd("\u77eb\u6b63\u5750\u6807\u6210\u529f")\n  } else {\n    loge("\u77eb\u6b63\u5750\u6807\u5931\u8d25:" + init);\n    return false\n  }\n  return true;\n}\n\nmain();\n\n')),(0,l.kt)("h3",{id:"checkfirstpoint-\u77eb\u6b63hid\u5750\u6807"},"checkFirstPoint \u77eb\u6b63HID\u5750\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 initUsbDevice \u518d\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC \u5b89\u5353 9.15.0+"),(0,l.kt)("li",{parentName:"ul"},"@return {string} null \u4ee3\u8868\u6210\u529f\uff0c\u5176\u4ed6\u4ee3\u8868\u9519\u8bef\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let i = initHid()\n  if (!i) {\n    return\n  }\n}\n\nfunction initHid() {\n  // \u5148\u8bbe\u7f6e\u4e00\u4e0b\u5c40\u57df\u7f51\u5185\u7684HID\u7a0b\u5e8f\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7FRP\u8f6f\u4ef6\u6620\u5c04\u5230\u5916\u7f51\uff0c\u7136\u540e\u586b\u5199\u5916\u7f51\u5730\u5740\n  hidEvent.setHidCenter("http://192.168.2.14:8988")\n  hidEvent.closeUsbDevice();\n  let init = hidEvent.initUsbDevice()\n  if (init == null) {\n    logd("\u521d\u59cb\u5316HID\u8bbe\u5907\u6210\u529f")\n  } else {\n    loge("\u521d\u59cb\u5316\u5931\u8d25:" + init);\n    return false\n  }\n  // \u5f00\u59cb\u77eb\u6b63\u5c4f\u5e55\u5750\u6807\n  let po = hidEvent.checkFirstPoint()\n  if (po == null) {\n    logd("\u77eb\u6b63\u5750\u6807\u6210\u529f")\n  } else {\n    loge("\u77eb\u6b63\u5750\u6807\u5931\u8d25:" + init);\n    return false\n  }\n  return true;\n}\n\nmain();\n\n')),(0,l.kt)("h3",{id:"closeusbdevice-\u5173\u95edhid\u8bbe\u5907"},"closeUsbDevice \u5173\u95edHID\u8bbe\u5907"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u95edHID\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"\u8be5\u64cd\u4f5c\u4f1a\u53d6\u6d88HID\u4e3b\u63a7\u548c\u8bbe\u5907\u7684\u901a\u4fe1\uff0c\u5728\u9002\u5f53\u7684\u65f6\u5019\u8fdb\u884c\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC \u5b89\u5353 9.15.0+"),(0,l.kt)("li",{parentName:"ul"},"@return {string} null \u4ee3\u8868\u6210\u529f\uff0c\u5176\u4ed6\u4ee3\u8868\u9519\u8bef\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let i = initHid()\n  if (!i) {\n    return\n  }\n}\n\nfunction initHid() {\n  // \u5148\u8bbe\u7f6e\u4e00\u4e0b\u5c40\u57df\u7f51\u5185\u7684HID\u7a0b\u5e8f\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7FRP\u8f6f\u4ef6\u6620\u5c04\u5230\u5916\u7f51\uff0c\u7136\u540e\u586b\u5199\u5916\u7f51\u5730\u5740\n  hidEvent.setHidCenter("http://192.168.2.14:8988")\n  hidEvent.closeUsbDevice();\n  let init = hidEvent.initUsbDevice()\n  if (init == null) {\n    logd("\u521d\u59cb\u5316HID\u8bbe\u5907\u6210\u529f")\n  } else {\n    loge("\u521d\u59cb\u5316\u5931\u8d25:" + init);\n    return false\n  }\n  // \u5f00\u59cb\u77eb\u6b63\u5c4f\u5e55\u5750\u6807\n  let po = hidEvent.checkFirstPoint()\n  if (po == null) {\n    logd("\u77eb\u6b63\u5750\u6807\u6210\u529f")\n  } else {\n    loge("\u77eb\u6b63\u5750\u6807\u5931\u8d25:" + init);\n    return false\n  }\n  return true;\n}\n\nmain();\n\n')),(0,l.kt)("h3",{id:"clickpoint-\u70b9\u51fb\u5750\u6807"},"clickPoint \u70b9\u51fb\u5750\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC \u5b89\u5353 9.15.0+"),(0,l.kt)("li",{parentName:"ul"},"@param x x\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"@param y y\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"@return {string} null \u4ee3\u8868\u6210\u529f\uff0c\u5176\u4ed6\u4ee3\u8868\u9519\u8bef\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  let i = initHid()\n  if (!i) {\n    return\n  }\n  // \u70b9\u51fb\u5750\u6807 0,0\u7684\u5730\u65b9\n  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())\n  if (click == null) {\n    logd("\u70b9\u51fb\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u70b9\u51fb\u5750\u6807\u5931\u8d25" + click)\n  }\n  sleep(1000)\n  let doub = hidEvent.doubleClickPoint(300, 400)\n  if (doub == null) {\n    logd("\u53cc\u51fb\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u53cc\u51fb\u5750\u6807\u5931\u8d25" + doub)\n  }\n\n  sleep(1000)\n  let ps = hidEvent.press(600, 800, 2000)\n  if (ps == null) {\n    logd("\u957f\u6309 \u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u957f\u6309 \u5750\u6807\u5931\u8d25" + ps)\n  }\n\n  sleep(1000)\n  let ps1 = hidEvent.press(device.getScreenWidth(), device.getScreenHeight(), 2000)\n  if (ps1 == null) {\n    logd("\u957f\u6309 \u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u957f\u6309 \u5750\u6807\u5931\u8d25" + ps1)\n  }\n\n\n  mtouch()\n\n\n}\n\nfunction initHid() {\n  // \u5148\u8bbe\u7f6e\u4e00\u4e0b\u5c40\u57df\u7f51\u5185\u7684HID\u7a0b\u5e8f\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7FRP\u8f6f\u4ef6\u6620\u5c04\u5230\u5916\u7f51\uff0c\u7136\u540e\u586b\u5199\u5916\u7f51\u5730\u5740\n  hidEvent.setHidCenter("http://192.168.2.14:8988")\n  hidEvent.closeUsbDevice();\n  let init = hidEvent.initUsbDevice()\n  if (init == null) {\n    logd("\u521d\u59cb\u5316HID\u8bbe\u5907\u6210\u529f")\n  } else {\n    loge("\u521d\u59cb\u5316\u5931\u8d25:" + init);\n    return false\n  }\n  // \u5f00\u59cb\u77eb\u6b63\u5c4f\u5e55\u5750\u6807\n  let po = hidEvent.checkFirstPoint()\n  if (po == null) {\n    logd("\u77eb\u6b63\u5750\u6807\u6210\u529f")\n  } else {\n    loge("\u77eb\u6b63\u5750\u6807\u5931\u8d25:" + init);\n    return false\n  }\n  return true;\n}\n\n\nfunction mtouch() {\n  let data = [\n    {\n      "action": 0,\n      "x": 250,\n      "y": 1800,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 250,\n      "y": 1700,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 300,\n      "y": 1700,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 330,\n      "y": 1650,\n      "pointer": 1,\n      "delay": 200\n    },\n    {\n      "action": 2,\n      "x": 400,\n      "y": 1650,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 1,\n      "x": 600,\n      "y": 400,\n      "pointer": 1,\n      "delay": 100\n    }\n  ]\n\n  let tou = hidEvent.multiTouch(data, 1000)\n  if (tou == null) {\n    logd("\u591a\u70b9\u89e6\u6478 \u6210\u529f")\n  } else {\n    loge("\u591a\u70b9\u89e6\u6478 \u5931\u8d25:" + tou);\n    return false\n  }\n}\n\n\nmain();\n\n\n')),(0,l.kt)("h3",{id:"doubleclickpoint-\u53cc\u51fb\u5750\u6807"},"doubleClickPoint \u53cc\u51fb\u5750\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC \u5b89\u5353 9.15.0+"),(0,l.kt)("li",{parentName:"ul"},"@param x x\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"@param y y\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"@return {string} null \u4ee3\u8868\u6210\u529f\uff0c\u5176\u4ed6\u4ee3\u8868\u9519\u8bef\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  let i = initHid()\n  if (!i) {\n    return\n  }\n  // \u70b9\u51fb\u5750\u6807 0,0\u7684\u5730\u65b9\n  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())\n  if (click == null) {\n    logd("\u70b9\u51fb\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u70b9\u51fb\u5750\u6807\u5931\u8d25" + click)\n  }\n  sleep(1000)\n  let doub = hidEvent.doubleClickPoint(300, 400)\n  if (doub == null) {\n    logd("\u53cc\u51fb\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u53cc\u51fb\u5750\u6807\u5931\u8d25" + doub)\n  }\n\n  sleep(1000)\n  let ps = hidEvent.press(600, 800, 2000)\n  if (ps == null) {\n    logd("\u957f\u6309 \u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u957f\u6309 \u5750\u6807\u5931\u8d25" + ps)\n  }\n\n  sleep(1000)\n  let ps1 = hidEvent.press(device.getScreenWidth(), device.getScreenHeight(), 2000)\n  if (ps1 == null) {\n    logd("\u957f\u6309 \u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u957f\u6309 \u5750\u6807\u5931\u8d25" + ps1)\n  }\n\n\n  mtouch()\n\n\n}\n\nfunction initHid() {\n  // \u5148\u8bbe\u7f6e\u4e00\u4e0b\u5c40\u57df\u7f51\u5185\u7684HID\u7a0b\u5e8f\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7FRP\u8f6f\u4ef6\u6620\u5c04\u5230\u5916\u7f51\uff0c\u7136\u540e\u586b\u5199\u5916\u7f51\u5730\u5740\n  hidEvent.setHidCenter("http://192.168.2.14:8988")\n  hidEvent.closeUsbDevice();\n  let init = hidEvent.initUsbDevice()\n  if (init == null) {\n    logd("\u521d\u59cb\u5316HID\u8bbe\u5907\u6210\u529f")\n  } else {\n    loge("\u521d\u59cb\u5316\u5931\u8d25:" + init);\n    return false\n  }\n  // \u5f00\u59cb\u77eb\u6b63\u5c4f\u5e55\u5750\u6807\n  let po = hidEvent.checkFirstPoint()\n  if (po == null) {\n    logd("\u77eb\u6b63\u5750\u6807\u6210\u529f")\n  } else {\n    loge("\u77eb\u6b63\u5750\u6807\u5931\u8d25:" + init);\n    return false\n  }\n  return true;\n}\n\n\nfunction mtouch() {\n  let data = [\n    {\n      "action": 0,\n      "x": 250,\n      "y": 1800,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 250,\n      "y": 1700,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 300,\n      "y": 1700,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 330,\n      "y": 1650,\n      "pointer": 1,\n      "delay": 200\n    },\n    {\n      "action": 2,\n      "x": 400,\n      "y": 1650,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 1,\n      "x": 600,\n      "y": 400,\n      "pointer": 1,\n      "delay": 100\n    }\n  ]\n\n  let tou = hidEvent.multiTouch(data, 1000)\n  if (tou == null) {\n    logd("\u591a\u70b9\u89e6\u6478 \u6210\u529f")\n  } else {\n    loge("\u591a\u70b9\u89e6\u6478 \u5931\u8d25:" + tou);\n    return false\n  }\n}\n\n\nmain();\n\n\n')),(0,l.kt)("h3",{id:"mousemove-\u79fb\u52a8\u9f20\u6807\u5230\u5750\u6807\u70b9"},"mouseMove \u79fb\u52a8\u9f20\u6807\u5230\u5750\u6807\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC \u5b89\u5353 9.15.0+"),(0,l.kt)("li",{parentName:"ul"},"@param x x\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"@param y y\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"@return {string} null \u4ee3\u8868\u6210\u529f\uff0c\u5176\u4ed6\u4ee3\u8868\u9519\u8bef\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  let i = initHid()\n  if (!i) {\n    return\n  }\n  // \u70b9\u51fb\u5750\u6807 0,0\u7684\u5730\u65b9\n  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())\n  if (click == null) {\n    logd("\u70b9\u51fb\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u70b9\u51fb\u5750\u6807\u5931\u8d25" + click)\n  }\n  sleep(1000)\n  let doub = hidEvent.mouseMove(300, 400)\n  if (doub == null) {\n    logd("\u79fb\u52a8\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u79fb\u52a8\u5750\u6807\u5931\u8d25" + doub)\n  }\n}\n\nfunction initHid() {\n  // \u5148\u8bbe\u7f6e\u4e00\u4e0b\u5c40\u57df\u7f51\u5185\u7684HID\u7a0b\u5e8f\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7FRP\u8f6f\u4ef6\u6620\u5c04\u5230\u5916\u7f51\uff0c\u7136\u540e\u586b\u5199\u5916\u7f51\u5730\u5740\n  hidEvent.setHidCenter("http://192.168.2.14:8988")\n  hidEvent.closeUsbDevice();\n  let init = hidEvent.initUsbDevice()\n  if (init == null) {\n    logd("\u521d\u59cb\u5316HID\u8bbe\u5907\u6210\u529f")\n  } else {\n    loge("\u521d\u59cb\u5316\u5931\u8d25:" + init);\n    return false\n  }\n  // \u5f00\u59cb\u77eb\u6b63\u5c4f\u5e55\u5750\u6807\n  let po = hidEvent.checkFirstPoint()\n  if (po == null) {\n    logd("\u77eb\u6b63\u5750\u6807\u6210\u529f")\n  } else {\n    loge("\u77eb\u6b63\u5750\u6807\u5931\u8d25:" + init);\n    return false\n  }\n  return true;\n}\n\nmain();\n\n\n')),(0,l.kt)("h3",{id:"press-\u957f\u6309\u5750\u6807"},"press \u957f\u6309\u5750\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u957f\u6309\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC \u5b89\u5353 9.15.0+"),(0,l.kt)("li",{parentName:"ul"},"@param x x\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"@param y y\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"@param delay \u6309\u4f4f\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},"@return {string} null \u4ee3\u8868\u6210\u529f\uff0c\u5176\u4ed6\u4ee3\u8868\u9519\u8bef\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  let i = initHid()\n  if (!i) {\n    return\n  }\n  // \u70b9\u51fb\u5750\u6807 0,0\u7684\u5730\u65b9\n  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())\n  if (click == null) {\n    logd("\u70b9\u51fb\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u70b9\u51fb\u5750\u6807\u5931\u8d25" + click)\n  }\n  sleep(1000)\n  let doub = hidEvent.doubleClickPoint(300, 400)\n  if (doub == null) {\n    logd("\u53cc\u51fb\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u53cc\u51fb\u5750\u6807\u5931\u8d25" + doub)\n  }\n\n  sleep(1000)\n  let ps = hidEvent.press(600, 800, 2000)\n  if (ps == null) {\n    logd("\u957f\u6309 \u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u957f\u6309 \u5750\u6807\u5931\u8d25" + ps)\n  }\n\n  sleep(1000)\n  let ps1 = hidEvent.press(device.getScreenWidth(), device.getScreenHeight(), 2000)\n  if (ps1 == null) {\n    logd("\u957f\u6309 \u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u957f\u6309 \u5750\u6807\u5931\u8d25" + ps1)\n  }\n\n\n  mtouch()\n\n\n}\n\nfunction initHid() {\n  // \u5148\u8bbe\u7f6e\u4e00\u4e0b\u5c40\u57df\u7f51\u5185\u7684HID\u7a0b\u5e8f\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7FRP\u8f6f\u4ef6\u6620\u5c04\u5230\u5916\u7f51\uff0c\u7136\u540e\u586b\u5199\u5916\u7f51\u5730\u5740\n  hidEvent.setHidCenter("http://192.168.2.14:8988")\n  hidEvent.closeUsbDevice();\n  let init = hidEvent.initUsbDevice()\n  if (init == null) {\n    logd("\u521d\u59cb\u5316HID\u8bbe\u5907\u6210\u529f")\n  } else {\n    loge("\u521d\u59cb\u5316\u5931\u8d25:" + init);\n    return false\n  }\n  // \u5f00\u59cb\u77eb\u6b63\u5c4f\u5e55\u5750\u6807\n  let po = hidEvent.checkFirstPoint()\n  if (po == null) {\n    logd("\u77eb\u6b63\u5750\u6807\u6210\u529f")\n  } else {\n    loge("\u77eb\u6b63\u5750\u6807\u5931\u8d25:" + init);\n    return false\n  }\n  return true;\n}\n\n\nfunction mtouch() {\n  let data = [\n    {\n      "action": 0,\n      "x": 250,\n      "y": 1800,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 250,\n      "y": 1700,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 300,\n      "y": 1700,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 330,\n      "y": 1650,\n      "pointer": 1,\n      "delay": 200\n    },\n    {\n      "action": 2,\n      "x": 400,\n      "y": 1650,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 1,\n      "x": 600,\n      "y": 400,\n      "pointer": 1,\n      "delay": 100\n    }\n  ]\n\n  let tou = hidEvent.multiTouch(data, 1000)\n  if (tou == null) {\n    logd("\u591a\u70b9\u89e6\u6478 \u6210\u529f")\n  } else {\n    loge("\u591a\u70b9\u89e6\u6478 \u5931\u8d25:" + tou);\n    return false\n  }\n}\n\n\nmain();\n\n\n')),(0,l.kt)("h3",{id:"multitouch-\u591a\u70b9\u89e6\u6478"},"multiTouch \u591a\u70b9\u89e6\u6478"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u591a\u70b9\u89e6\u6478"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC \u5b89\u5353 9.15.0+"),(0,l.kt)("li",{parentName:"ul"},"\u89e6\u6478\u53c2\u6570: action :\u4e00\u822c\u60c5\u51b5\u4e0b \u6309\u4e0b\u4e3a0\uff0c\u5f39\u8d77\u4e3a1\uff0c\u79fb\u52a8\u4e3a2"),(0,l.kt)("li",{parentName:"ul"},"x: X\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"y: Y\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"pointer\uff1a\u8bbe\u7f6e\u7b2c\u51e0\u4e2a\u624b\u6307\u89e6\u6478\u70b9\uff0c\u5206\u522b\u662f 1\uff0c2\uff0c3\u7b49\uff0c\u4ee3\u8868\u7b2cn\u4e2a\u624b\u6307"),(0,l.kt)("li",{parentName:"ul"},"delay: \u8be5\u52a8\u4f5c\u5ef6\u8fdf\u591a\u5c11\u6beb\u79d2\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"@param touch1\n\u7b2c1\u4e2a\u624b\u6307\u7684\u89e6\u6478\u70b9\u6570\u7ec4,\u4f8b\u5982\uff1a",'[{"action":0,"x":1,"y":1,"pointer":1,"delay":20},{"action":2,"x":1,"y":1,"pointer":1,"delay":20}]'),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u591a\u70b9\u89e6\u6478\u6267\u884c\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},"@return boolean|\u5e03\u5c14\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  let i = initHid()\n  if (!i) {\n    return\n  }\n  // \u70b9\u51fb\u5750\u6807 0,0\u7684\u5730\u65b9\n  let click = hidEvent.clickPoint(device.getScreenWidth(), device.getScreenHeight())\n  if (click == null) {\n    logd("\u70b9\u51fb\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u70b9\u51fb\u5750\u6807\u5931\u8d25" + click)\n  }\n  sleep(1000)\n  let doub = hidEvent.doubleClickPoint(300, 400)\n  if (doub == null) {\n    logd("\u53cc\u51fb\u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u53cc\u51fb\u5750\u6807\u5931\u8d25" + doub)\n  }\n\n  sleep(1000)\n  let ps = hidEvent.press(600, 800, 2000)\n  if (ps == null) {\n    logd("\u957f\u6309 \u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u957f\u6309 \u5750\u6807\u5931\u8d25" + ps)\n  }\n\n  sleep(1000)\n  let ps1 = hidEvent.press(device.getScreenWidth(), device.getScreenHeight(), 2000)\n  if (ps1 == null) {\n    logd("\u957f\u6309 \u5750\u6807\u6210\u529f")\n  } else {\n    console.log("\u957f\u6309 \u5750\u6807\u5931\u8d25" + ps1)\n  }\n\n\n  mtouch()\n\n\n}\n\nfunction initHid() {\n  // \u5148\u8bbe\u7f6e\u4e00\u4e0b\u5c40\u57df\u7f51\u5185\u7684HID\u7a0b\u5e8f\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7FRP\u8f6f\u4ef6\u6620\u5c04\u5230\u5916\u7f51\uff0c\u7136\u540e\u586b\u5199\u5916\u7f51\u5730\u5740\n  hidEvent.setHidCenter("http://192.168.2.14:8988")\n  hidEvent.closeUsbDevice();\n  let init = hidEvent.initUsbDevice()\n  if (init == null) {\n    logd("\u521d\u59cb\u5316HID\u8bbe\u5907\u6210\u529f")\n  } else {\n    loge("\u521d\u59cb\u5316\u5931\u8d25:" + init);\n    return false\n  }\n  // \u5f00\u59cb\u77eb\u6b63\u5c4f\u5e55\u5750\u6807\n  let po = hidEvent.checkFirstPoint()\n  if (po == null) {\n    logd("\u77eb\u6b63\u5750\u6807\u6210\u529f")\n  } else {\n    loge("\u77eb\u6b63\u5750\u6807\u5931\u8d25:" + init);\n    return false\n  }\n  return true;\n}\n\n\nfunction mtouch() {\n  let data = [\n    {\n      "action": 0,\n      "x": 250,\n      "y": 1800,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 250,\n      "y": 1700,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 300,\n      "y": 1700,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 2,\n      "x": 330,\n      "y": 1650,\n      "pointer": 1,\n      "delay": 200\n    },\n    {\n      "action": 2,\n      "x": 400,\n      "y": 1650,\n      "pointer": 1,\n      "delay": 100\n    },\n    {\n      "action": 1,\n      "x": 600,\n      "y": 400,\n      "pointer": 1,\n      "delay": 100\n    }\n  ]\n\n  let tou = hidEvent.multiTouch(data, 1000)\n  if (tou == null) {\n    logd("\u591a\u70b9\u89e6\u6478 \u6210\u529f")\n  } else {\n    loge("\u591a\u70b9\u89e6\u6478 \u5931\u8d25:" + tou);\n    return false\n  }\n}\n\n\nmain();\n\n\n')))}d.isMDXComponent=!0}}]);