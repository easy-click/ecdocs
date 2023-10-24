"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[7830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d"]},i=void 0,c={unversionedId:"zh-cn/funcs/ocr-api",id:"zh-cn/funcs/ocr-api",title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",source:"@site/iosdocs/zh-cn/funcs/ocr-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/ocr-api",permalink:"/en/iosdocs/zh-cn/funcs/ocr-api",draft:!1,tags:[],version:"current",frontMatter:{title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d"]},sidebar:"iosdocs",previous:{title:"OCR\u8bc6\u522b-\u624b\u673a\u5185\u6267\u884c",permalink:"/en/iosdocs/zh-cn/funcs/ocr-agent-api"},next:{title:"\u8f85\u52a9\u6a21\u5757",permalink:"/en/iosdocs/zh-cn/funcs/apphelper-api"}},o={},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"ocr.newOcr \u5b9e\u4f8b\u4e00\u4e2aocr",id:"ocrnewocr-\u5b9e\u4f8b\u4e00\u4e2aocr",level:2},{value:"ocr.initOcr \u521d\u59cb\u5316",id:"ocrinitocr-\u521d\u59cb\u5316",level:2},{value:"ocrLite OCR\u4f8b\u5b506.23.0\u4e4b\u524d",id:"ocrlite-ocr\u4f8b\u5b506230\u4e4b\u524d",level:3},{value:"tess OCR\u4f8b\u5b506.23.0\u4e4b\u540e",id:"tess-ocr\u4f8b\u5b506230\u4e4b\u540e",level:3},{value:"ocr.ocrBitmap \u8bc6\u522b\u6587\u5b57",id:"ocrocrbitmap-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.ocrImage \u8bc6\u522b\u6587\u5b57",id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f",id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f",level:2},{value:"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90",id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OCR\u6a21\u5757\u662f\u5c5e\u4e8e\u5bf9\u56fe\u50cf\u8fdb\u884c\u8bc6\u522b"),(0,a.kt)("li",{parentName:"ul"},"OCR\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662focr\uff0c\u4f8b\u5982 ocr.initOcr()\u8fd9\u6837\u8c03\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u7684OCR\u5305\u542b\u4e86 ocrLite,TesseractOCR")),(0,a.kt)("h2",{id:"ocrnewocr-\u5b9e\u4f8b\u4e00\u4e2aocr"},"ocr.newOcr \u5b9e\u4f8b\u4e00\u4e2aocr"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u4e00\u4e2aocr\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC iOS 6.23.0+")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function main() {\n    let o = ocr.newOcr();\n    // \u8fd9\u91cc\u505a\u521d\u59cb\u5316\u548c\u8bc6\u522b\n    o.releaseAll()\n}\n")),(0,a.kt)("h2",{id:"ocrinitocr-\u521d\u59cb\u5316"},"ocr.initOcr \u521d\u59cb\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316OCR\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"@param map map\u53c2\u6570\u8868"),(0,a.kt)("li",{parentName:"ul"},"key\u5206\u522b\u4e3a\uff1a"),(0,a.kt)("li",{parentName:"ul"},"type : OCR\u7c7b\u578b\uff0c\u503c\u5206\u522b\u4e3a:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ocrLite = ocrLite,"))),(0,a.kt)("li",{parentName:"ul"},'\u5982\u679c\u7c7b\u578b\u662f ocrLite, \u53c2\u6570\u8bbe\u7f6e\u4e3a : {"type":"ocrLite","cpuType:"","baseDir":""},',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"baseDir: ocrLite \u7c7b\u5e93\u5b58\u653e\u8def\u5f84\uff0c\u4e00\u822c\u4f1a\u548cec\u81ea\u5e26\u5728\u540c\u4e2a\u76ee\u5f55\u4e0b,\u6587\u4ef6\u5939\u540d\u79f0\u662f: OcrLiteNcnn"),(0,a.kt)("li",{parentName:"ul"},"cpuType: \u4e3b\u673a\u7684cpu\u7c7b\u578b\uff0c\u5206\u522b\u662fwin-lib-cpu-x64\uff0cwin-lib-cpu-x86,Linux-Lib-CPU,Darwin-Lib-CPU"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679cbaseDir\u548ccpuType\u4e0d\u586b\u5199\uff0c\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u67e5\u627e"))),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u7c7b\u578b\u662ftess:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'\u53c2\u6570\u8bbe\u7f6e\u4e3a: {"type":"tess","path":"d:',"\\","tesseract-ocr","\\",'tessdata","baseDir":"d:',"\\",'tesseract-ocr"}'),(0,a.kt)("li",{parentName:"ul"},"baseDir: \u4ee3\u8868\u662ftesseract\u5b89\u88c5\u8def\u5f84,\u5b89\u88c5\u5305\u4e0b\u8f7d: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tesseract-ocr/tesseract/releases"},"https://github.com/tesseract-ocr/tesseract/releases")," \u6216\u8005\u5b98\u65b9\u738b\u4e0b\u8f7djTessBoxEditor.zip\u5305\u542b\u4e86\u8bad\u7ec3\u5de5\u5177\u548ctesseract\u7684dll"),(0,a.kt)("li",{parentName:"ul"},"path: \u4ee3\u8868\u662ftesseract \u7684 tesssdata \u6587\u4ef6\u5939"),(0,a.kt)("li",{parentName:"ul"},"language: \u8bed\u8a00\u6570\u636e\u96c6\u6587\u4ef6\uff0c \u4f8b\u5982 chi_sim.traineddata \u4ee3\u8868\u662f\u4e2d\u6587\u7b80\u4f53\u8bed\u8a00\uff0c\u53c2\u6570\u5c31\u586b\u5199 chi_sim,\u591a\u4e2a\u53ef\u4ee5\u7528+\u94fe\u63a5\uff0c\u4f8b\u5982:chi_sim+eng+num"),(0,a.kt)("li",{parentName:"ul"},"ocrEngineMode: \u8bc6\u522b\u5f15\u64ce\u7c7b\u578b\uff0c0 OEM_TESSERACT_ONLY \uff0c 1 OEM_LSTM_ONLY,2 OEM_TESSERACT_LSTM_COMBINED,3 OEM_DEFAULT"),(0,a.kt)("li",{parentName:"ul"},"rilLevel: PageIteratorLevel \u53c2\u6570\uff0c-1 \u81ea\u9002\u5e94\uff0c 0: RIL_BLOCK, 1: RIL_PARA, 2: RIL_TEXTLINE, 3: RIL_WORD, 4:RIL_SYMBOL"))),(0,a.kt)("li",{parentName:"ul"},"@return {bool} \u5e03\u5c14\u578b \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,a.kt)("h3",{id:"ocrlite-ocr\u4f8b\u5b506230\u4e4b\u524d"},"ocrLite OCR\u4f8b\u5b50","[6.23.0\u4e4b\u524d]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n  //2.8.0+\u4e2d\u63a7,\u8981\u5728\u4e2d\u63a7\u8bbe\u7f6e\u9875\u5f00\u542fopencv\u529f\u80fd,\u5e76\u91cd\u542f\u4e2d\u63a7\n  let ocrLite = {\n    "type": "ocrLite",\n    "baseDir": "c:/ec/OcrLiteNcnn",\n    "cpuType": "win-lib-cpu-x64"\n  }\n\n  let inited = ocr.initOcr(ocrLite)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + ocr.getErrorMsg());\n    return;\n  }\n\n  for (var ix = 0; ix < 20; ix++) {\n\n    //\u8bfb\u53d6\u4e00\u4e2abitmap\n    let bitmap = image.readBitmap("D:/Screenshot_20210127_152932_com.huawei.android.lau.jpg");\n    if (!bitmap) {\n      loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n      continue;\n    }\n    console.time("1")\n    logd("start---ocr");\n    // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n    let result = ocr.ocrBitmap(bitmap, 20 * 1000, {});\n    logd(result)\n    if (result) {\n      logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n      for (var i = 0; i < result.length; i++) {\n        var value = result[i];\n        logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n      }\n    } else {\n      logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n    }\n\n    logd("\u8017\u65f6: " + console.timeEnd(1) + " ms")\n    image.recycle(bitmap)\n    sleep(1000);\n    logd("ix = " + ix)\n  }\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  ocr.releaseAll();\n}\n\nmain();\n\n')),(0,a.kt)("h3",{id:"tess-ocr\u4f8b\u5b506230\u4e4b\u540e"},"tess OCR\u4f8b\u5b50","[6.23.0\u4e4b\u540e]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n  let pa = {"type":"tess","path":"d:/tesseract-ocr/tessdata","baseDir":"d:\\\\tesseract-ocr"}\n  let tocr = ocr.newOcr()\n  let inited = tocr.initOcr(ocrLite)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + tocr.getErrorMsg());\n    return;\n  }\n\n  for (var ix = 0; ix < 20; ix++) {\n\n    //\u8bfb\u53d6\u4e00\u4e2abitmap\n    let bitmap = image.readBitmap("D:/Screenshot_20210127_152932_com.huawei.android.lau.jpg");\n    if (!bitmap) {\n      loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n      continue;\n    }\n    console.time("1")\n    logd("start---ocr");\n    // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n    let result = tocr.ocrBitmap(bitmap, 20 * 1000, {});\n    logd(result)\n    if (result) {\n      logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n      for (var i = 0; i < result.length; i++) {\n        var value = result[i];\n        logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n      }\n    } else {\n      logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n    }\n\n    logd("\u8017\u65f6: " + console.timeEnd(1) + " ms")\n    image.recycle(bitmap)\n    sleep(1000);\n    logd("ix = " + ix)\n  }\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  tocr.releaseAll();\n}\n\nmain();\n\n')),(0,a.kt)("h2",{id:"ocrocrbitmap-\u8bc6\u522b\u6587\u5b57"},"ocr.ocrBitmap \u8bc6\u522b\u6587\u5b57"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9 BufferedImage \u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'      [\n  {\n    "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n    "confidence": 0.48334712,\n    "x": 11,\n    "y": 25,\n    "width": 100,\n    "height": 100\n  }\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,a.kt)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"@param bitmap \u56fe\u7247"),(0,a.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,a.kt)("li",{parentName:"ul"},'@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 {"token":"xxx"}'),(0,a.kt)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,a.kt)("h2",{id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57"},"ocr.ocrImage \u8bc6\u522b\u6587\u5b57"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9 AutoImage \u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  [\n  {\n    "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n    "confidence": 0.48334712,\n    "x": 11,\n    "y": 25,\n    "width": 100,\n    "height": 100\n  }\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,a.kt)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"@param bitmap \u56fe\u7247"),(0,a.kt)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,a.kt)("li",{parentName:"ul"},'@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 {"token":"xxx"}'),(0,a.kt)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,a.kt)("h2",{id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f"},"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6OCR\u9519\u8bef\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"}),(0,a.kt)("li",{parentName:"ul"},"@return {string} null\u4ee3\u8868\u6ca1\u6709\u9519\u8bef")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,a.kt)("h2",{id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90"},"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91ca\u653eOCR\u5360\u7528\u7684\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"}),(0,a.kt)("li",{parentName:"ul"},"@return {bool} \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")))}s.isMDXComponent=!0}}]);