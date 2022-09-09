"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[7830],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,d=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7372:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],c={title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b  \u8d44\u6e90\u4e0b\u8f7d"]},o=void 0,u={unversionedId:"zh-cn/funcs/ocr-api",id:"zh-cn/funcs/ocr-api",title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",source:"@site/iosdocs/zh-cn/funcs/ocr-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/ocr-api",permalink:"/iosdocs/zh-cn/funcs/ocr-api",draft:!1,tags:[],version:"current",frontMatter:{title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b  \u8d44\u6e90\u4e0b\u8f7d"]},sidebar:"iosdocs",previous:{title:"\u56fe\u8272\u51fd\u6570",permalink:"/iosdocs/zh-cn/funcs/image-api"},next:{title:"\u8bbe\u5907\u51fd\u6570",permalink:"/iosdocs/zh-cn/funcs/device-api"}},p={},m=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"ocr.initOcr \u521d\u59cb\u5316",id:"ocrinitocr-\u521d\u59cb\u5316",level:2},{value:"ocr.ocrBitmap \u8bc6\u522b\u6587\u5b57",id:"ocrocrbitmap-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.ocrImage \u8bc6\u522b\u6587\u5b57",id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f",id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f",level:2},{value:"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90",id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90",level:2}],s={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OCR\u6a21\u5757\u662f\u5c5e\u4e8e\u5bf9\u56fe\u50cf\u8fdb\u884c\u8bc6\u522b"),(0,l.kt)("li",{parentName:"ul"},"OCR\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662focr\uff0c\u4f8b\u5982 ocr.initOcr()\u8fd9\u6837\u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u7684OCR\u5305\u542b\u4e86 ocrLite")),(0,l.kt)("h2",{id:"ocrinitocr-\u521d\u59cb\u5316"},"ocr.initOcr \u521d\u59cb\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316OCR\u6a21\u5757")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@param map map\u53c2\u6570\u8868")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"key\u5206\u522b\u4e3a\uff1a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"type : OCR\u7c7b\u578b\uff0c\u503c\u5206\u522b\u4e3a:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ocrLite = ocrLite,"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u5982\u679c\u7c7b\u578b\u662f ocrLite, \u53c2\u6570\u8bbe\u7f6e\u4e3a : {"type":"ocrLite","cpuType:"","baseDir":""},'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"baseDir: ocrLite \u7c7b\u5e93\u5b58\u653e\u8def\u5f84\uff0c\u4e00\u822c\u4f1a\u548cec\u81ea\u5e26\u5728\u540c\u4e2a\u76ee\u5f55\u4e0b,\u6587\u4ef6\u5939\u540d\u79f0\u662f: OcrLiteNcnn"),(0,l.kt)("li",{parentName:"ul"},"cpuType: \u4e3b\u673a\u7684cpu\u7c7b\u578b\uff0c\u5206\u522b\u662fwin-lib-cpu-x64\uff0cwin-lib-cpu-x86,Linux-Lib-CPU,Darwin-Lib-CPU"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679cbaseDir\u548ccpuType\u4e0d\u586b\u5199\uff0c\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u67e5\u627e"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@return {bool} \u5e03\u5c14\u578b \u6210\u529f\u6216\u8005\u5931\u8d25"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ocrLite OCR\u4f8b\u5b50")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n    //2.8.0+\u4e2d\u63a7,\u8981\u5728\u4e2d\u63a7\u8bbe\u7f6e\u9875\u5f00\u542fopencv\u529f\u80fd,\u5e76\u91cd\u542f\u4e2d\u63a7\n    let ocrLite = {\n        "type": "ocrLite",\n       "baseDir":"c:/ec/OcrLiteNcnn",\n       "cpuType":"win-lib-cpu-x64"\n    }\n   \n    let inited = ocr.initOcr(ocrLite)\n    logd("\u521d\u59cb\u5316\u7ed3\u679c -> " + inited);\n    if (!inited) {\n        loge("error : " + ocr.getErrorMsg());\n        return;\n    }\n  \n    for (var ix = 0; ix < 20; ix++) {\n   \n        //\u8bfb\u53d6\u4e00\u4e2abitmap\n        let bitmap = image.readBitmap("D:/Screenshot_20210127_152932_com.huawei.android.lau.jpg");\n        if (!bitmap) {\n            loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n            continue;\n        }\n        console.time("1")\n        logd("start---ocr");\n        // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n        let result = ocr.ocrBitmap(bitmap, 20 * 1000, {});\n        logd(result)\n        if (result) {\n            logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n            for (var i = 0; i < result.length; i++) {\n                var value = result[i];\n                logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n            }\n        } else {\n            logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n        }\n    \n        logd("\u8017\u65f6: " + console.timeEnd(1) + " ms")\n        image.recycle(bitmap )\n        sleep(1000);\n        logd("ix = "+ix)\n    }\n    //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n    ocr.releaseAll();\n  }\n  main();\n\n'))),(0,l.kt)("h2",{id:"ocrocrbitmap-\u8bc6\u522b\u6587\u5b57"},"ocr.ocrBitmap \u8bc6\u522b\u6587\u5b57"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9 BufferedImage \u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'      [{\n        "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n        "confidence": 0.48334712,\n        "x": 11,\n        "y": 25,\n        "width": 100,\n        "height": 100\n      }]\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,l.kt)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"@param bitmap \u56fe\u7247"),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},'@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 {"token":"xxx"}'),(0,l.kt)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61 ")),(0,l.kt)("h2",{id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57"},"ocr.ocrImage \u8bc6\u522b\u6587\u5b57"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9 AutoImage \u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  [{\n    "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n    "confidence": 0.48334712,\n    "x": 11,\n    "y": 25,\n    "width": 100,\n    "height": 100\n  }]\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,l.kt)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,l.kt)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"@param bitmap \u56fe\u7247"),(0,l.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},'@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 {"token":"xxx"}'),(0,l.kt)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61 ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1 OCR\u521d\u59cb\u5316\n")),(0,l.kt)("h2",{id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f"},"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6OCR\u9519\u8bef\u6d88\u606f"),(0,l.kt)("li",{parentName:"ul"}),(0,l.kt)("li",{parentName:"ul"},"@return {string} null\u4ee3\u8868\u6ca1\u6709\u9519\u8bef")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1 OCR\u521d\u59cb\u5316\n")),(0,l.kt)("h2",{id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90"},"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u91ca\u653eOCR\u5360\u7528\u7684\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"}),(0,l.kt)("li",{parentName:"ul"},"@return {bool} \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1 OCR\u521d\u59cb\u5316\n")))}k.isMDXComponent=!0}}]);