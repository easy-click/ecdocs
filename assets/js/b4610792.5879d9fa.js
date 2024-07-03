"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[2756],{5680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>y});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),p=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=t,y=u["".concat(c,".").concat(m)]||u[m]||g[m]||l;return r?a.createElement(y,i(i({ref:n},s),{},{components:r})):a.createElement(y,i({ref:n},s))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:t,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2882:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(8168),t=(r(6540),r(5680));const l={title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d"]},i=void 0,o={unversionedId:"zh-cn/funcs/ocr-api",id:"zh-cn/funcs/ocr-api",title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",source:"@site/iosdocs/zh-cn/funcs/ocr-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/ocr-api",permalink:"/iosdocs/zh-cn/funcs/ocr-api",draft:!1,tags:[],version:"current",frontMatter:{title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d"]},sidebar:"iosdocs",previous:{title:"OCR\u8bc6\u522b-\u624b\u673a\u5185\u6267\u884c",permalink:"/iosdocs/zh-cn/funcs/ocr-agent-api"},next:{title:"\u8f93\u5165\u6cd5\u51fd\u6570",permalink:"/iosdocs/zh-cn/funcs/ime-api"}},c={},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"ocr.newOcr \u5b9e\u4f8b\u4e00\u4e2aocr",id:"ocrnewocr-\u5b9e\u4f8b\u4e00\u4e2aocr",level:2},{value:"ocr.initOcr \u521d\u59cb\u5316",id:"ocrinitocr-\u521d\u59cb\u5316",level:2},{value:"ocrLite OCR\u4f8b\u5b506.23.0\u4e4b\u524d",id:"ocrlite-ocr\u4f8b\u5b506230\u4e4b\u524d",level:3},{value:"tess OCR\u4f8b\u5b506.23.0\u4e4b\u540e",id:"tess-ocr\u4f8b\u5b506230\u4e4b\u540e",level:3},{value:"ocr.ocrBitmap \u8bc6\u522b\u6587\u5b57",id:"ocrocrbitmap-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.ocrImage \u8bc6\u522b\u6587\u5b57",id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f",id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f",level:2},{value:"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90",id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90",level:2}],s={toc:p},u="wrapper";function g(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"OCR\u6a21\u5757\u662f\u5c5e\u4e8e\u5bf9\u56fe\u50cf\u8fdb\u884c\u8bc6\u522b"),(0,t.yg)("li",{parentName:"ul"},"OCR\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662focr\uff0c\u4f8b\u5982 ocr.initOcr()\u8fd9\u6837\u8c03\u7528"),(0,t.yg)("li",{parentName:"ul"},"\u76ee\u524d\u7684OCR\u5305\u542b\u4e86 ocrLite,TesseractOCR")),(0,t.yg)("h2",{id:"ocrnewocr-\u5b9e\u4f8b\u4e00\u4e2aocr"},"ocr.newOcr \u5b9e\u4f8b\u4e00\u4e2aocr"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u4e00\u4e2aocr\u5b9e\u4f8b"),(0,t.yg)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC iOS 6.23.0+")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function main() {\n    let o = ocr.newOcr();\n    // \u8fd9\u91cc\u505a\u521d\u59cb\u5316\u548c\u8bc6\u522b\n    o.releaseAll()\n}\n")),(0,t.yg)("h2",{id:"ocrinitocr-\u521d\u59cb\u5316"},"ocr.initOcr \u521d\u59cb\u5316"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u521d\u59cb\u5316OCR\u6a21\u5757"),(0,t.yg)("li",{parentName:"ul"},"@param map map\u53c2\u6570\u8868"),(0,t.yg)("li",{parentName:"ul"},"key\u5206\u522b\u4e3a:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"type : OCR\u7c7b\u578b\uff0c\u503c\u5206\u522b\u4e3a ocrLite = ocrLite \u6a21\u5757\uff0c tess = tesseractOcr\uff0cpaddleOcr=\u767e\u5ea6\u7684\u98de\u6868OCR"))),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u7c7b\u578b\u662f baiduOnline",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u53c2\u6570\u8bbe\u7f6e\u4e3a : ",(0,t.yg)("inlineCode",{parentName:"li"},'{"type":"baiduOnline","ak":"xxx","sk":"xx"}')))),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u7c7b\u578b\u662f:tess")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},'  * \u53c2\u6570\u8bbe\u7f6e\u4e3a: \u9700\u8981\u8bbe\u7f6e tesseract \u7684\u5b89\u88c5\u8def\u5f84\u548ctess\u7684\u8def\u5f84,<br/>\n  * \u4f8b\u5b50 : ``{"type":"tess","baseDir:"d:\\\\tesseract-ocr","path":"d:\\\\tesseract-ocr\\\\tessdata","language":"chi_sim","ocrEngineMode":3}``<br/>\n  *  - baseDir: \u4ee3\u8868\u662ftesseract\u5b89\u88c5\u8def\u5f84,\u5b89\u88c5\u5305\u4e0b\u8f7d: https://github.com/tesseract-ocr/tesseract/releases \u6216\u8005\u5b98\u65b9\u738b\u4e0b\u8f7djTessBoxEditor.zip\u5305\u542b\u4e86\u8bad\u7ec3\u5de5\u5177\u548ctesseract\u7684dll<br/>\n  *  - path: \u4ee3\u8868\u662ftesseract \u7684 tesssdata \u6587\u4ef6\u5939<br/>\n  *  - language: \u8bed\u8a00\u6570\u636e\u96c6\u6587\u4ef6\uff0c \u4f8b\u5982 chi_sim.traineddata \u4ee3\u8868\u662f\u4e2d\u6587\u7b80\u4f53\u8bed\u8a00\uff0c\u53c2\u6570\u5c31\u586b\u5199 chi_sim,\u591a\u4e2a\u53ef\u4ee5\u7528+\u94fe\u63a5\uff0c\u4f8b\u5982:chi_sim+eng+num<br/>\n  *  - ocrEngineMode: \u8bc6\u522b\u5f15\u64ce\u7c7b\u578b\uff0c0 OEM_TESSERACT_ONLY \uff0c 1 OEM_LSTM_ONLY,2 OEM_TESSERACT_LSTM_COMBINED,3 OEM_DEFAULT<br/>\n  *  - rilLevel: PageIteratorLevel \u53c2\u6570\uff0c-1 \u81ea\u9002\u5e94\uff0c 0: RIL_BLOCK, 1: RIL_PARA, 2: RIL_TEXTLINE, 3: RIL_WORD, 4:RIL_SYMBOL<br/>\n  \n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u7c7b\u578b\u8bbe\u7f6e\u4e3a: paddleOcr ",(0,t.yg)("br",null)),(0,t.yg)("li",{parentName:"ul"},"\u4f8b\u5b50")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'     {\n      "type": "paddleOcr",\n      "ocrType":"ONNX_PPOCR_V3",\n      "padding": 50,\n      "maxSideLen": 0,\n      "boxScoreThresh": 0.5,\n      "boxThresh": 0.3,\n      "unClipRatio": 1.6,\n      "doAngleFlag": 0,\n      "mostAngleFlag": 0\n    }\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"ocrType : \u6a21\u578b ONNX_PPOCR_V3,ONNX_PPOCR_V4,NCNN_PPOCR_V3\nserverUrl\uff1apaddle ocr\u670d\u52a1\u5668\u5730\u5740\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6\u7535\u8111\u90e8\u7f72\uff0c\u7136\u540e\u4e2d\u63a7\u94fe\u63a5\uff0c\u9ed8\u8ba4\u662f http://127.0.0.1:9022 \u90e8\u7f72\u5728\u5176\u4ed6\u7535\u8111\u5c31\u6539ip\u5730\u5740\u5373\u53ef\uff0c\u7aef\u53e3\u4fdd\u7559\npadding \u56fe\u50cf\u5916\u63a5\u767d\u6846\uff0c\u7528\u4e8e\u63d0\u5347\u8bc6\u522b\u7387\uff0c\u6587\u5b57\u6846\u6ca1\u6709\u6b63\u786e\u6846\u4f4f\u6240\u6709\u6587\u5b57\u65f6\uff0c\u589e\u52a0\u6b64\u503c\u3002\u9ed8\u8ba450\u3002<br/>\nmaxSideLen \u6309\u56fe\u50cf\u957f\u8fb9\u8fdb\u884c\u603b\u4f53\u7f29\u653e\uff0c\u653e\u5927\u589e\u52a0\u8bc6\u522b\u8017\u65f6\u4f46\u7cbe\u5ea6\u66f4\u9ad8\uff0c\u7f29\u5c0f\u51cf\u5c0f\u8017\u65f6\u4f46\u7cbe\u5ea6\u964d\u4f4e\uff0cmaxSideLen\u4e3a0\u8868\u793a\u4e0d\u7f29\u653e\u3002<br/>\nboxScoreThresh \u6587\u5b57\u6846\u7f6e\u4fe1\u5ea6\u95e8\u9650\uff0c\u6587\u5b57\u6846\u6ca1\u6709\u6b63\u786e\u6846\u4f4f\u6240\u6709\u6587\u5b57\u65f6\uff0c\u51cf\u5c0f\u6b64\u503c <br/>\nboxThresh \u540c\u4e0a\uff0c\u81ea\u884c\u8bd5\u9a8c\u3002<br/>\nunClipRatio \u5355\u4e2a\u6587\u5b57\u6846\u5927\u5c0f\u500d\u7387\uff0c\u8d8a\u5927\u65f6\u5355\u4e2a\u6587\u5b57\u6846\u8d8a\u5927\u3002<br/>\ndoAngleFlag \u542f\u7528(1)/\u7981\u7528(0) \u6587\u5b57\u65b9\u5411\u68c0\u6d4b\uff0c\u53ea\u6709\u56fe\u7247\u5012\u7f6e\u7684\u60c5\u51b5\u4e0b(\u65cb\u8f6c90~270\u5ea6\u7684\u56fe\u7247)\uff0c\u624d\u9700\u8981\u542f\u7528\u6587\u5b57\u65b9\u5411\u68c0\u6d4b\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002<br/>\nmostAngleFlag \u542f\u7528(1)/\u7981\u7528(0) \u89d2\u5ea6\u6295\u7968(\u6574\u5f20\u56fe\u7247\u4ee5\u6700\u5927\u53ef\u80fd\u6587\u5b57\u65b9\u5411\u6765\u8bc6\u522b)\uff0c\u5f53\u7981\u7528\u6587\u5b57\u65b9\u5411\u68c0\u6d4b\u65f6\uff0c\u6b64\u9879\u4e5f\u4e0d\u8d77\u4f5c\u7528\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002<br/>\nfront \u63a7\u5236\u53f0(1)/\u6258\u76d8\u6a21\u5f0f(0) \uff0c\u9ed8\u8ba4\u5173\u95ed\u3002<br/>\ndaemon \u5b88\u62a4ocr\u670d\u52a1\u8fdb\u7a0b(1)/\u5426(0) \u9ed8\u8ba4\u5173\u95ed\u3002<br/>\nlimit \u4ee3\u8868\u6bcf1\u79d2\u6267\u884cocr\u8bf7\u6c42\u4e2a\u6570 \u9ed8\u8ba41000\u3002\u53ef\u4ee5\u9002\u5f53\u964d\u4f4e\u51cf\u5c11cpu\u5360\u7528<br/>\ncheckImage \u68c0\u67e5\u6570\u636e\u662f\u5426\u662f\u56fe\u50cf(1\u662f 0\u5426)\u9ed8\u8ba4\u5173\u95ed\u3002<br/> \n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"@return {boolean} \u5e03\u5c14\u578b \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,t.yg)("h3",{id:"ocrlite-ocr\u4f8b\u5b506230\u4e4b\u524d"},"ocrLite OCR\u4f8b\u5b50","[6.23.0\u4e4b\u524d]"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n  //2.8.0+\u4e2d\u63a7,\u8981\u5728\u4e2d\u63a7\u8bbe\u7f6e\u9875\u5f00\u542fopencv\u529f\u80fd,\u5e76\u91cd\u542f\u4e2d\u63a7\n  let ocrLite = {\n    "type": "ocrLite",\n    "baseDir": "c:/ec/OcrLiteNcnn",\n    "ocrType": "win-lib-cpu-x64"\n  }\n\n\n  let inited = ocr.initOcr(ocrLite)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + ocr.getErrorMsg());\n    return;\n  }\n\n  for (var ix = 0; ix < 20; ix++) {\n    //\u8bfb\u53d6\u4e00\u4e2abitmap\n    let bitmap = image.readBitmap("D:/Screenshot_20210127_152932_com.huawei.android.lau.jpg");\n    if (!bitmap) {\n      loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n      continue;\n    }\n    console.time("1")\n    logd("start---ocr");\n    // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n    let result = ocr.ocrBitmap(bitmap, 20 * 1000, {});\n    logd(result)\n    if (result) {\n      logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n      for (var i = 0; i < result.length; i++) {\n        var value = result[i];\n        logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n      }\n    } else {\n      logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n    }\n\n    logd("\u8017\u65f6: " + console.timeEnd(1) + " ms")\n    image.recycle(bitmap)\n    sleep(1000);\n    logd("ix = " + ix)\n  }\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  ocr.releaseAll();\n}\n\nmain();\n\n')),(0,t.yg)("h3",{id:"tess-ocr\u4f8b\u5b506230\u4e4b\u540e"},"tess OCR\u4f8b\u5b50","[6.23.0\u4e4b\u540e]"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n  let tess = {"type":"tess","path":"d:/tesseract-ocr/tessdata","baseDir":"d:\\\\tesseract-ocr"}\n\n  let ocrLite = {\n    "type": "ocrLite",\n    "baseDir": "c:/ec/OcrLiteNcnn",\n    "ocrType": "win-lib-cpu-x64"\n  }\n\n\n  // \u5165\u4f7f\u7528paddleocr\uff0c\u5c31\u81ea\u5df1\u6539\u4e0b\u53c2\u6570\u5373\u53ef\n  let paddleOcr = {\n    "type": "paddleOcr",\n    "ocrType": "ONNX_PPOCR_V3\n  }\n\n\n  \n  let tocr = ocr.newOcr()\n  let inited = tocr.initOcr(ocrLite)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + tocr.getErrorMsg());\n    return;\n  }\n\n  for (var ix = 0; ix < 20; ix++) {\n\n    //\u8bfb\u53d6\u4e00\u4e2abitmap\n    let bitmap = image.readBitmap("D:/Screenshot_20210127_152932_com.huawei.android.lau.jpg");\n    if (!bitmap) {\n      loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n      continue;\n    }\n    console.time("1")\n    logd("start---ocr");\n    // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n    let result = tocr.ocrBitmap(bitmap, 20 * 1000, {});\n    logd(result)\n    if (result) {\n      logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n      for (var i = 0; i < result.length; i++) {\n        var value = result[i];\n        logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n      }\n    } else {\n      logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n    }\n\n    logd("\u8017\u65f6: " + console.timeEnd(1) + " ms")\n    image.recycle(bitmap)\n    sleep(1000);\n    logd("ix = " + ix)\n  }\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  // paddleOcr\u4f1a\u5173\u95edocr\u7a0b\u5e8f\uff0c\u5982\u679c\u4e0d\u8003\u8651\u5173\u95ed \u4e0d\u7528\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\n  tocr.releaseAll();\n}\n\nmain();\n\n')),(0,t.yg)("h2",{id:"ocrocrbitmap-\u8bc6\u522b\u6587\u5b57"},"ocr.ocrBitmap \u8bc6\u522b\u6587\u5b57"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5bf9 BufferedImage \u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'      [\n  {\n    "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n    "confidence": 0.48334712,\n    "x": 11,\n    "y": 25,\n    "width": 100,\n    "height": 100\n  }\n]\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,t.yg)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,t.yg)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,t.yg)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,t.yg)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,t.yg)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,t.yg)("li",{parentName:"ul"},"@param bitmap \u56fe\u7247"),(0,t.yg)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,t.yg)("li",{parentName:"ul"},"@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 ",(0,t.yg)("inlineCode",{parentName:"li"},'{"token":"xxx"}')),(0,t.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,t.yg)("h2",{id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57"},"ocr.ocrImage \u8bc6\u522b\u6587\u5b57"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5bf9 AutoImage \u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'  [\n  {\n    "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n    "confidence": 0.48334712,\n    "x": 11,\n    "y": 25,\n    "width": 100,\n    "height": 100\n  }\n]\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,t.yg)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,t.yg)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,t.yg)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,t.yg)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,t.yg)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,t.yg)("li",{parentName:"ul"},"@param bitmap \u56fe\u7247"),(0,t.yg)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,t.yg)("li",{parentName:"ul"},"@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 ",(0,t.yg)("inlineCode",{parentName:"li"},'{"token":"xxx"}')),(0,t.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,t.yg)("h2",{id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f"},"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u83b7\u53d6OCR\u9519\u8bef\u6d88\u606f"),(0,t.yg)("li",{parentName:"ul"}),(0,t.yg)("li",{parentName:"ul"},"@return {string} null\u4ee3\u8868\u6ca1\u6709\u9519\u8bef")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,t.yg)("h2",{id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90"},"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u91ca\u653eOCR\u5360\u7528\u7684\u8d44\u6e90"),(0,t.yg)("li",{parentName:"ul"}),(0,t.yg)("li",{parentName:"ul"},"@return {bool} \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")))}g.isMDXComponent=!0}}]);