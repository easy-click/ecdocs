"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[8583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d"]},i=void 0,o={unversionedId:"zh-cn/funcs/ocr-api",id:"zh-cn/funcs/ocr-api",title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",source:"@site/iostjdocs/zh-cn/funcs/ocr-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/ocr-api",permalink:"/en/iostjdocs/zh-cn/funcs/ocr-api",draft:!1,tags:[],version:"current",frontMatter:{title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d"]},sidebar:"iostjdocs",previous:{title:"\u56fe\u8272\u51fd\u6570",permalink:"/en/iostjdocs/zh-cn/funcs/image-api"},next:{title:"\u8bbe\u5907\u51fd\u6570",permalink:"/en/iostjdocs/zh-cn/funcs/device-api"}},c={},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"ocr.initOcr \u521d\u59cb\u5316",id:"ocrinitocr-\u521d\u59cb\u5316",level:2},{value:"ocr.ocrImage \u8bc6\u522b\u6587\u5b57",id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f",id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f",level:2},{value:"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90",id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90",level:2}],p=(s="Br",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var s;const m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OCR\u6a21\u5757\u662f\u5c5e\u4e8e\u5bf9\u56fe\u50cf\u8fdb\u884c\u8bc6\u522b"),(0,a.kt)("li",{parentName:"ul"},"OCR\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662focr\uff0c\u4f8b\u5982 ocr.initOcr()\u8fd9\u6837\u8c03\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u7684OCR\u5305\u542b\u4e86 ocrLite")),(0,a.kt)("h2",{id:"ocrinitocr-\u521d\u59cb\u5316"},"ocr.initOcr \u521d\u59cb\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316OCR\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"@param map map\u53c2\u6570\u8868"),(0,a.kt)("li",{parentName:"ul"},"key\u5206\u522b\u4e3a\uff1a"),(0,a.kt)("li",{parentName:"ul"},"type : OCR\u7c7b\u578b\uff0c\u503c\u5206\u522b\u4e3a appleVision = ios\u81ea\u5e26\u7684Vision\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},'\u5982\u679c\u7c7b\u578b\u662f appleVision, \u53c2\u6570\u8bbe\u7f6e\u4e3a : {"type":"appleVision","level":"fast","languages":"zh-Hans,en-US"}',(0,a.kt)(p,{mdxType:"Br"})),(0,a.kt)("li",{parentName:"ul"},"level: fast,\u4ee3\u8868\u5feb\u901f\u7684\uff0caccurate:\u4ee3\u8868\u7cbe\u51c6\u7684"),(0,a.kt)("li",{parentName:"ul"},"languages: \u8bc6\u522b\u7684\u8bed\u8a00\uff0c\u9ed8\u8ba4\u662fzh-Hans,en-US\u4e2d\u6587\u7b80\u4f53\u548c\u82f1\u6587\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u6709 ",'["en-US", "fr-FR", "it-IT", "de-DE", "es-ES", "pt-BR", "zh-Hans", "zh-Hant"]'),(0,a.kt)("li",{parentName:"ul"},"@return {bool} \u5e03\u5c14\u578b \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ocrLite OCR\u4f8b\u5b50")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n  let ocrLite = {\n    "type": "appleVision"\n  }\n  let inited = ocr.initOcr(ocrLite)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + ocr.getErrorMsg());\n    return;\n  }\n\n  for (var ix = 0; ix < 20; ix++) {\n\n    //\u8bfb\u53d6\u4e00\u4e2abitmap\n    let img = image.captureFullScreen();\n    if (!img) {\n      loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n      continue;\n    }\n    console.time("1")\n    logd("start---ocr");\n    // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n    let result = ocr.ocrImage(img, 20 * 1000, {});\n    logd(result)\n    if (result) {\n      logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n      for (var i = 0; i < result.length; i++) {\n        var value = result[i];\n        logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n      }\n    } else {\n      logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n    }\n\n    logd("\u8017\u65f6: " + console.timeEnd(1) + " ms")\n    image.recycle(img)\n    sleep(1000);\n    logd("ix = " + ix)\n  }\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  ocr.releaseAll();\n}\n\nmain();\n\n')),(0,a.kt)("h2",{id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57"},"ocr.ocrImage \u8bc6\u522b\u6587\u5b57"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9 AutoImage \u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  [\n  {\n    "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n    "confidence": 0.48334712,\n    "x": 11,\n    "y": 25,\n    "width": 100,\n    "height": 100\n  }\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,a.kt)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"@param bitmap \u56fe\u7247"),(0,a.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,a.kt)("li",{parentName:"ul"},'@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 {"token":"xxx"}'),(0,a.kt)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,a.kt)("h2",{id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f"},"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6OCR\u9519\u8bef\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"}),(0,a.kt)("li",{parentName:"ul"},"@return {string} null\u4ee3\u8868\u6ca1\u6709\u9519\u8bef")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,a.kt)("h2",{id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90"},"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91ca\u653eOCR\u5360\u7528\u7684\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"}),(0,a.kt)("li",{parentName:"ul"},"@return {bool} \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")))}d.isMDXComponent=!0}}]);