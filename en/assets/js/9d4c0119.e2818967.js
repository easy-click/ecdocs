"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[272],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>d});var a=r(6540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,l=function(e,n){if(null==e)return{};var r,a,l={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),g=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=g(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,l=e.mdxType,t=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=g(r),m=l,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||t;return r?a.createElement(d,i(i({ref:n},u),{},{components:r})):a.createElement(d,i({ref:n},u))}));function d(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var t=r.length,i=new Array(t);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var g=2;g<t;g++)i[g]=r[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8844:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>g});var a=r(8168),l=(r(6540),r(5680));const t={title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot OCR\u8bc6\u522b",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7406\u4e8b\u4ef6"]},i=void 0,o={unversionedId:"zh-cn/funcs/ocr-api",id:"zh-cn/funcs/ocr-api",title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot OCR\u8bc6\u522b",source:"@site/docs/zh-cn/funcs/ocr-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/ocr-api",permalink:"/en/docs/zh-cn/funcs/ocr-api",draft:!1,tags:[],version:"current",frontMatter:{title:"OCR\u8bc6\u522b",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot OCR\u8bc6\u522b",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7406\u4e8b\u4ef6"]},sidebar:"docs",previous:{title:"\u56fe\u8272\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/image-api"},next:{title:"\u8bbe\u5907\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/device-api"}},c={},g=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"ocr.newOcr \u5b9e\u4f8b\u4e00\u4e2aocr",id:"ocrnewocr-\u5b9e\u4f8b\u4e00\u4e2aocr",level:2},{value:"ocr.initOcr \u521d\u59cb\u5316",id:"ocrinitocr-\u521d\u59cb\u5316",level:2},{value:"easyedge OCR\u4f8b\u5b50 \u4f4e\u4e8e9.17\u7248\u672c",id:"easyedge-ocr\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c",level:3},{value:"Paddle OCR\u4f8b\u5b50 \u4f4e\u4e8e9.17\u7248\u672c",id:"paddle-ocr\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c",level:3},{value:"Tesseract \u4f8b\u5b50 \u4f4e\u4e8e9.17\u7248\u672c",id:"tesseract-\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c",level:3},{value:"\u767e\u5ea6\u5728\u7ebfOCR\u4f8b\u5b50 \u4f4e\u4e8e9.17\u7248\u672c",id:"\u767e\u5ea6\u5728\u7ebfocr\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c",level:3},{value:"Mlkit OCR\u4f8b\u5b50 \u4f4e\u4e8e9.17\u7248\u672c",id:"mlkit-ocr\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c",level:3},{value:"\u9ad8\u4e8e9.17\u7248\u672c\u4f8b\u5b50",id:"\u9ad8\u4e8e917\u7248\u672c\u4f8b\u5b50",level:3},{value:"ocr.setOcrType \u8bbe\u7f6e\u7c7b\u578b",id:"ocrsetocrtype-\u8bbe\u7f6e\u7c7b\u578b",level:2},{value:"ocr.setDaemonServer \u5b88\u62a4OCR\u670d\u52a1",id:"ocrsetdaemonserver-\u5b88\u62a4ocr\u670d\u52a1",level:2},{value:"ocr.ocrBitmap \u8bc6\u522b\u6587\u5b57",id:"ocrocrbitmap-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.ocrImage \u8bc6\u522b\u6587\u5b57",id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f",id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f",level:2},{value:"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90",id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90",level:2}],u={toc:g},s="wrapper";function p(e){let{components:n,...r}=e;return(0,l.yg)(s,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"OCR\u6a21\u5757\u662f\u5c5e\u4e8e\u5bf9\u56fe\u50cf\u8fdb\u884c\u8bc6\u522b"),(0,l.yg)("li",{parentName:"ul"},"OCR\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662focr\uff0c\u4f8b\u5982 ocr.initOcr()\u8fd9\u6837\u8c03\u7528"),(0,l.yg)("li",{parentName:"ul"},"\u76ee\u524d\u7684OCR\u5305\u542b\u4e86mlkit,ocrLite,\u767e\u5ea6AI\u7684easyedge,paddleocr,Tesseract,paddleOcrOnline\u548c\u767e\u5ea6\u5728\u7ebf\u8bc6\u522b"),(0,l.yg)("li",{parentName:"ul"},"Tesseract \u8bf7\u4e0b\u8f7d\u5bf9\u5e94\u7684\u8bed\u8a00\u5305\u6216\u8005\u81ea\u5df1\u521b\u5efa\u8bed\u8a00\u5305"),(0,l.yg)("li",{parentName:"ul"},"\u7248\u672c\u9ad8\u4e8e9.17.0\u7684\uff0c\u8bf7\u770b \u3010Tesseract \u4f8b\u5b50 ","[\u9ad8\u4e8e9.17\u7248\u672c]","\u3011\u4f8b\u5b50\uff0c\u56e0\u4e3aapi\u5df2\u7ecf\u66f4\u6539\u4e86")),(0,l.yg)("h2",{id:"ocrnewocr-\u5b9e\u4f8b\u4e00\u4e2aocr"},"ocr.newOcr \u5b9e\u4f8b\u4e00\u4e2aocr"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u4e00\u4e2aocr\u5b9e\u4f8b"),(0,l.yg)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC\u5b89\u5353 9.17.0+")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"function main() {\n    let o = ocr.newOcr();\n    // \u8fd9\u91cc\u505a\u521d\u59cb\u5316\u548c\u8bc6\u522b\n    \n    \n    o.releaseAll()\n}\n")),(0,l.yg)("h2",{id:"ocrinitocr-\u521d\u59cb\u5316"},"ocr.initOcr \u521d\u59cb\u5316"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u521d\u59cb\u5316OCR\u6a21\u5757"),(0,l.yg)("li",{parentName:"ul"},"@param map map\u53c2\u6570\u8868"),(0,l.yg)("li",{parentName:"ul"},"key\u5206\u522b\u4e3a\uff1a",(0,l.yg)("br",null)),(0,l.yg)("li",{parentName:"ul"},"type : OCR\u7c7b\u578b\uff0c\u503c\u5206\u522b\u4e3a tess = Tesseract\u6a21\u5757\uff0cbaiduOnline=\u767e\u5ea6\u5728\u5728\u7ebf\u8bc6\u522b\u6a21\u5757\uff0cpaddleocr=\u767e\u5ea6\u79bb\u7ebf\u7684paddleocr\uff0ceasyedge=\u767e\u5ea6AI OCR",(0,l.yg)("br",null)),(0,l.yg)("li",{parentName:"ul"},"ocrLite = ocrLite, paddleOcrOnline = EC\u81ea\u5e26\u7684PC\u7aef\u7684paddleOcr\u670d\u52a1\u7a0b\u5e8f",(0,l.yg)("br",null)),(0,l.yg)("li",{parentName:"ul"},"\u5982\u679c\u7c7b\u578b\u662f tess,\u8bf7\u5c06\u8bad\u7ec3\u7684\u6a21\u578b\u653e\u5230 /sdcard/tessdata/ \u6587\u4ef6\u5939\u4e0b ",(0,l.yg)("br",null)),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u53c2\u6570\u8bbe\u7f6e\u4e3a : ",(0,l.yg)("inlineCode",{parentName:"li"},'{"type":"tess","language":"chi_sim","debug":false,"ocrEngineMode":3}')))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"language: \u8bed\u8a00\u6570\u636e\u96c6\u6587\u4ef6\uff0c \u4f8b\u5982 chi_sim.traineddata \u4ee3\u8868\u662f\u4e2d\u6587\u7b80\u4f53\u8bed\u8a00\uff0c\u53c2\u6570\u5c31\u586b\u5199 chi_sim,\u591a\u4e2a\u53ef\u4ee5\u7528+\u94fe\u63a5\uff0c\u4f8b\u5982:chi_sim+eng+num",(0,l.yg)("br",null)))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"ocrEngineMode: \u8bc6\u522b\u5f15\u64ce\u7c7b\u578b\uff0c0 OEM_TESSERACT_ONLY \uff0c 1 OEM_LSTM_ONLY,2 OEM_TESSERACT_LSTM_COMBINED,3 OEM_DEFAULT",(0,l.yg)("br",null)))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"rilLevel: PageIteratorLevel \u53c2\u6570\uff0c-1 \u81ea\u9002\u5e94\uff0c 0: RIL_BLOCK, 1: RIL_PARA, 2: RIL_TEXTLINE, 3: RIL_WORD, 4:RIL_SYMBOL",(0,l.yg)("br",null)))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"debug: \u4ee3\u7801\u662f\u5426\u8bbe\u7f6e\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4e00\u822c\u8bbe\u7f6efalse\u5373\u53ef",(0,l.yg)("br",null)))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"path\uff1a \u653etessdata\u7684\u6587\u4ef6\u5939\u8def\u5f84\uff0c\u4e0d\u8981\u52a0\u4e0atessdata\uff0c\u662ftessdata\u6587\u4ef6\u5939\u7684\u7236\u7ea7",(0,l.yg)("br",null)))),(0,l.yg)("li",{parentName:"ul"},"\u5982\u679c\u7c7b\u578b\u662f baiduOnline, \u53c2\u6570\u8bbe\u7f6e\u4e3a : ",(0,l.yg)("inlineCode",{parentName:"li"},'{"type":"baiduOnline","ak":"xxx","sk":"xx"}')),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"ak = api key,sk = secret key, \u767e\u5ea6OCR\u6587\u6863\u5730\u5740 : ",(0,l.yg)("a",{parentName:"li",href:"https://ai.baidu.com/ai-doc/OCR/Ck3h7y2ia"},"https://ai.baidu.com/ai-doc/OCR/Ck3h7y2ia"),(0,l.yg)("br",null)))),(0,l.yg)("li",{parentName:"ul"},"\u5982\u679c\u7c7b\u578b\u662f ocrLite,"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u53c2\u6570\u8bbe\u7f6e\u4e3a : ",(0,l.yg)("inlineCode",{parentName:"li"},'{"type":"ocrLite","numThread":4,"padding":10,"maxSideLen":0}')))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"numThread: \u7ebf\u7a0b\u6570\u91cf\u3002 ",(0,l.yg)("br",null)))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"padding: \u56fe\u50cf\u9884\u5904\u7406\uff0c\u5728\u56fe\u7247\u5916\u5468\u6dfb\u52a0\u767d\u8fb9\uff0c\u7528\u4e8e\u63d0\u5347\u8bc6\u522b\u7387\uff0c\u6587\u5b57\u6846\u6ca1\u6709\u6b63\u786e\u6846\u4f4f\u6240\u6709\u6587\u5b57\u65f6\uff0c\u589e\u52a0\u6b64\u503c\u3002",(0,l.yg)("br",null)))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"maxSideLen: \u6309\u56fe\u7247\u6700\u957f\u8fb9\u7684\u957f\u5ea6\uff0c\u6b64\u503c\u4e3a0\u4ee3\u8868\u4e0d\u7f29\u653e\uff0c\u4f8b\uff1a1024\uff0c\u5982\u679c\u56fe\u7247\u957f\u8fb9\u5927\u4e8e1024\u5219\u628a\u56fe\u50cf\u6574\u4f53\u7f29\u5c0f\u52301024\u518d\u8fdb\u884c\u56fe\u50cf\u5206\u5272\u8ba1\u7b97\uff0c\u5982\u679c\u56fe\u7247\u957f\u8fb9\u5c0f\u4e8e1024\u5219\u4e0d\u7f29\u653e\uff0c\u5982\u679c\u56fe\u7247\u957f\u8fb9\u5c0f\u4e8e32\uff0c\u5219\u7f29\u653e\u523032\u3002",(0,l.yg)("br",null)))),(0,l.yg)("li",{parentName:"ul"},"\u5982\u679c\u7c7b\u578b\u8bbe\u7f6e\u4e3a: paddleOcrOnline , \u8bf7\u5230\u7f51\u76d8\u4e2d\u4e0b\u8f7d",(0,l.yg)("strong",{parentName:"li"},"EasyClick-PaddleOcr.zip\u6587\u4ef6\u89e3\u538b\u8fd0\u884c"),(0,l.yg)("br",null))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},'{\n    "type": "paddleOcrOnline",\n    "ocrType":"ONNX_PPOCR_V3",\n    "padding": 50,\n    "maxSideLen": 0,\n    "boxScoreThresh": 0.5,\n    "boxThresh": 0.3,\n    "unClipRatio": 1.6,\n    "doAngleFlag": 0,\n    "mostAngleFlag": 0\n}\n')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"*  - ocrType : \u6a21\u578b ONNX_PPOCR_V3,ONNX_PPOCR_V4,NCNN_PPOCR_V3\n*  - serverUrl\uff1apaddle ocr\u670d\u52a1\u5668\u5730\u5740\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6\u7535\u8111\u90e8\u7f72\uff0c\u7136\u540e\u4e2d\u63a7\u94fe\u63a5\uff0c\u4f8b\u5982 192.168.2.8\uff0c\u90e8\u7f72\u5728\u7535\u8111\u5c31\u6539ip\u5730\u5740\u5373\u53ef\uff0c\u7aef\u53e3\u662f 9022 \u53ef\u4ee5\u4e0d\u5199\n*  - padding \u56fe\u50cf\u5916\u63a5\u767d\u6846\uff0c\u7528\u4e8e\u63d0\u5347\u8bc6\u522b\u7387\uff0c\u6587\u5b57\u6846\u6ca1\u6709\u6b63\u786e\u6846\u4f4f\u6240\u6709\u6587\u5b57\u65f6\uff0c\u589e\u52a0\u6b64\u503c\u3002\u9ed8\u8ba450\u3002<br/>\n*  - maxSideLen \u6309\u56fe\u50cf\u957f\u8fb9\u8fdb\u884c\u603b\u4f53\u7f29\u653e\uff0c\u653e\u5927\u589e\u52a0\u8bc6\u522b\u8017\u65f6\u4f46\u7cbe\u5ea6\u66f4\u9ad8\uff0c\u7f29\u5c0f\u51cf\u5c0f\u8017\u65f6\u4f46\u7cbe\u5ea6\u964d\u4f4e\uff0cmaxSideLen\u4e3a0\u8868\u793a\u4e0d\u7f29\u653e\u3002<br/>\n*  - boxScoreThresh \u6587\u5b57\u6846\u7f6e\u4fe1\u5ea6\u95e8\u9650\uff0c\u6587\u5b57\u6846\u6ca1\u6709\u6b63\u786e\u6846\u4f4f\u6240\u6709\u6587\u5b57\u65f6\uff0c\u51cf\u5c0f\u6b64\u503c <br/>\n*  - boxThresh \u540c\u4e0a\uff0c\u81ea\u884c\u8bd5\u9a8c\u3002<br/>\n*  - unClipRatio \u5355\u4e2a\u6587\u5b57\u6846\u5927\u5c0f\u500d\u7387\uff0c\u8d8a\u5927\u65f6\u5355\u4e2a\u6587\u5b57\u6846\u8d8a\u5927\u3002<br/>\n*  - doAngleFlag \u542f\u7528(1)/\u7981\u7528(0) \u6587\u5b57\u65b9\u5411\u68c0\u6d4b\uff0c\u53ea\u6709\u56fe\u7247\u5012\u7f6e\u7684\u60c5\u51b5\u4e0b(\u65cb\u8f6c90~270\u5ea6\u7684\u56fe\u7247)\uff0c\u624d\u9700\u8981\u542f\u7528\u6587\u5b57\u65b9\u5411\u68c0\u6d4b\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002<br/>\n*  - mostAngleFlag \u542f\u7528(1)/\u7981\u7528(0) \u89d2\u5ea6\u6295\u7968(\u6574\u5f20\u56fe\u7247\u4ee5\u6700\u5927\u53ef\u80fd\u6587\u5b57\u65b9\u5411\u6765\u8bc6\u522b)\uff0c\u5f53\u7981\u7528\u6587\u5b57\u65b9\u5411\u68c0\u6d4b\u65f6\uff0c\u6b64\u9879\u4e5f\u4e0d\u8d77\u4f5c\u7528\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002<br/>\n*  - limit \u4ee3\u8868\u6bcf1\u79d2\u6267\u884cocr\u8bf7\u6c42\u4e2a\u6570 \u9ed8\u8ba41000\u3002\u53ef\u4ee5\u9002\u5f53\u964d\u4f4e\u51cf\u5c11cpu\u5360\u7528<br/>\n*  - checkImage \u68c0\u67e5\u6570\u636e\u662f\u5426\u662f\u56fe\u50cf(1\u662f 0\u5426)\u9ed8\u8ba4\u5173\u95ed\u3002<br/>\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"@return {bool} \u5e03\u5c14\u578b \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,l.yg)("h3",{id:"easyedge-ocr\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c"},"easyedge OCR\u4f8b\u5b50 ","[\u4f4e\u4e8e9.17\u7248\u672c]"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n  logd("isServiceOk " + isServiceOk());\n  startEnv()\n  logd("isServiceOk " + isServiceOk());\n  let request = image.requestScreenCapture(10000, 0);\n  if (!request) {\n    request = image.requestScreenCapture(10000, 0);\n  }\n  logd("\u7533\u8bf7\u622a\u56fe\u7ed3\u679c... " + request)\n  if (!request) {\n    loge("\u7533\u8bf7\u622a\u56fe\u6743\u9650\u5931\u8d25,\u68c0\u67e5\u662f\u5426\u5f00\u542f\u540e\u53f0\u5f39\u51fa,\u60ac\u6d6e\u6846\u7b49\u6743\u9650")\n    exit()\n  }\n  //\u7533\u8bf7\u5b8c\u6743\u9650\u81f3\u5c11\u7b491s(\u5783\u573e\u8bbe\u5907\u591a\u52a0\u70b9)\u518d\u622a\u56fe,\u5426\u5219\u4f1a\u622a\u4e0d\u5230\u56fe\n  sleep(1000)\n\n  let paddleocr = {\n    "type": "paddleocr"\n  }\n\n  let easyedge = {\n    "type": "easyedge",\n\n  }\n  let ocrlite = {\n    "type": "ocrLite",\n\n  }\n  let inited = ocr.initOcr(easyedge)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + ocr.getErrorMsg());\n    return;\n  }\n  // ocrLite \u6a21\u5f0f\u4e0b \u4e0d\u9700\u8981\u521d\u59cb\u5316\u8fd9\u4e2aserver \u6ca1\u7528\u7684\n  let initServer = ocr.initOcrServer(5 * 1000);\n  logd("initServer " + initServer);\n  if (!initServer) {\n    loge("initServer error : " + ocr.getErrorMsg());\n    return;\n  }\n  ocr.setDaemonServer(true, 500);\n  for (var ix = 0; ix < 20; ix++) {\n\n    //\u8bfb\u53d6\u4e00\u4e2abitmap\n    let bitmap = image.readBitmap("/sdcard/Screenshot_20210127_152932_com.huawei.android.lau.jpg");\n    if (!bitmap) {\n      loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n      continue;\n    }\n    console.time("1")\n    logd("start---ocr");\n    // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n    let result = ocr.ocrBitmap(bitmap, 20 * 1000, {});\n    logd(result)\n    if (result) {\n      logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n      for (var i = 0; i < result.length; i++) {\n        var value = result[i];\n        logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n      }\n    } else {\n      logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n    }\n    bitmap.recycle();\n    logd("\u8017\u65f6: " + console.timeEnd(1) + " ms")\n    sleep(1000);\n    logd("ix = " + ix)\n  }\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  ocr.releaseAll();\n}\n\nmain();\n\n')),(0,l.yg)("h3",{id:"paddle-ocr\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c"},"Paddle OCR\u4f8b\u5b50 ","[\u4f4e\u4e8e9.17\u7248\u672c]"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n  logd("isServiceOk " + isServiceOk());\n  startEnv()\n  logd("isServiceOk " + isServiceOk());\n  let request = image.requestScreenCapture(10000, 0);\n  if (!request) {\n    request = image.requestScreenCapture(10000, 0);\n  }\n  logd("\u7533\u8bf7\u622a\u56fe\u7ed3\u679c... " + request)\n  if (!request) {\n    loge("\u7533\u8bf7\u622a\u56fe\u6743\u9650\u5931\u8d25,\u68c0\u67e5\u662f\u5426\u5f00\u542f\u540e\u53f0\u5f39\u51fa,\u60ac\u6d6e\u6846\u7b49\u6743\u9650")\n    exit()\n  }\n  //\u7533\u8bf7\u5b8c\u6743\u9650\u81f3\u5c11\u7b491s(\u5783\u573e\u8bbe\u5907\u591a\u52a0\u70b9)\u518d\u622a\u56fe,\u5426\u5219\u4f1a\u622a\u4e0d\u5230\u56fe\n  sleep(1000)\n\n  let paddleocr = {\n    "type": "paddleocr"\n  }\n\n  let easyedge = {\n    "type": "easyedge",\n  }\n\n  let inited = ocr.initOcr(paddleocr)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + ocr.getErrorMsg());\n    return;\n  }\n\n  let initServer = ocr.initOcrServer(5 * 1000);\n  logd("initServer " + initServer);\n  if (!initServer) {\n    loge("initServer error : " + ocr.getErrorMsg());\n    return;\n  }\n  ocr.setDaemonServer(true, 500);\n  for (var ix = 0; ix < 20; ix++) {\n\n    //\u8bfb\u53d6\u4e00\u4e2abitmap\n    let bitmap = image.readBitmap("/sdcard/Screenshot_20210127_152932_com.huawei.android.lau.jpg");\n    if (!bitmap) {\n      loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n      continue;\n    }\n    console.time("1")\n    logd("start---ocr");\n    // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n    let result = ocr.ocrBitmap(bitmap, 20 * 1000, {});\n    logd(result)\n    if (result) {\n      logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n      for (var i = 0; i < result.length; i++) {\n        var value = result[i];\n        logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n      }\n    } else {\n      logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n    }\n    bitmap.recycle();\n    logd("\u8017\u65f6: " + console.timeEnd(1) + " ms")\n    sleep(1000);\n    logd("ix = " + ix)\n  }\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  ocr.releaseAll();\n}\n\nmain();\n\n')),(0,l.yg)("h3",{id:"tesseract-\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c"},"Tesseract \u4f8b\u5b50 ","[\u4f4e\u4e8e9.17\u7248\u672c]"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  logd("isServiceOk " + isServiceOk());\n  startEnv()\n  logd("isServiceOk " + isServiceOk());\n  let request = image.requestScreenCapture(10000, 0);\n  if (!request) {\n    request = image.requestScreenCapture(10000, 0);\n  }\n  logd("\u7533\u8bf7\u622a\u56fe\u7ed3\u679c... " + request)\n  if (!request) {\n    loge("\u7533\u8bf7\u622a\u56fe\u6743\u9650\u5931\u8d25,\u68c0\u67e5\u662f\u5426\u5f00\u542f\u540e\u53f0\u5f39\u51fa,\u60ac\u6d6e\u6846\u7b49\u6743\u9650")\n    exit()\n  }\n  //\u7533\u8bf7\u5b8c\u6743\u9650\u81f3\u5c11\u7b491s(\u5783\u573e\u8bbe\u5907\u591a\u52a0\u70b9)\u518d\u622a\u56fe,\u5426\u5219\u4f1a\u622a\u4e0d\u5230\u56fe\n  sleep(1000)\n\n  //Tesseract\u6a21\u5757\u521d\u59cb\u5316\u53c2\u6570\n  let tessInitMap = {\n    "type": "tess",\n    "language": "chi_sim",\n    "debug": true\n  }\n\n  let inited = ocr.initOcr(tessInitMap)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + ocr.getErrorMsg());\n    return;\n  }\n\n  //\u8bfb\u53d6\u4e00\u4e2abitmap\n  let bitmap = image.readBitmap("/sdcard/a.png");\n  if (!bitmap) {\n    loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n    return;\n  }\n  // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n  let result = ocr.ocrBitmap(bitmap, 20 * 1000, {});\n  if (result) {\n    logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n    for (var i = 0; i < result.length; i++) {\n      var value = result[i];\n      logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n    }\n  } else {\n    logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n  }\n\n  bitmap.recycle();\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  ocr.releaseAll();\n\n}\n\n\nmain();\n\n')),(0,l.yg)("h3",{id:"\u767e\u5ea6\u5728\u7ebfocr\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c"},"\u767e\u5ea6\u5728\u7ebfOCR\u4f8b\u5b50 ","[\u4f4e\u4e8e9.17\u7248\u672c]"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  logd("isServiceOk " + isServiceOk());\n  startEnv()\n  logd("isServiceOk " + isServiceOk());\n  let request = image.requestScreenCapture(10000, 0);\n  if (!request) {\n    request = image.requestScreenCapture(10000, 0);\n  }\n  logd("\u7533\u8bf7\u622a\u56fe\u7ed3\u679c... " + request)\n  if (!request) {\n    loge("\u7533\u8bf7\u622a\u56fe\u6743\u9650\u5931\u8d25,\u68c0\u67e5\u662f\u5426\u5f00\u542f\u540e\u53f0\u5f39\u51fa,\u60ac\u6d6e\u6846\u7b49\u6743\u9650")\n    exit()\n  }\n  //\u7533\u8bf7\u5b8c\u6743\u9650\u81f3\u5c11\u7b491s(\u5783\u573e\u8bbe\u5907\u591a\u52a0\u70b9)\u518d\u622a\u56fe,\u5426\u5219\u4f1a\u622a\u4e0d\u5230\u56fe\n  sleep(1000)\n\n  let baiduOnlineInitMap = {\n    "type": "baiduOnline",\n    "ak": "xx",\n    "sk": "xx"\n  }\n\n  let inited = ocr.initOcr(baiduOnlineInitMap)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + ocr.getErrorMsg());\n    return;\n  }\n\n  //\u8bfb\u53d6\u4e00\u4e2abitmap\n  let bitmap = image.readBitmap("/sdcard/a.png");\n  if (!bitmap) {\n    loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n    return;\n  }\n  // URL \u53c2\u6570\u53c2\u89c1 \uff1a https://ai.baidu.com/ai-doc/OCR/tk3h7y2aq\n  // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n  let result = ocr.ocrBitmap(bitmap, 20 * 1000, {"url": "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate"});\n  if (result) {\n    logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n    for (var i = 0; i < result.length; i++) {\n      var value = result[i];\n      logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n    }\n  } else {\n    logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c " + ocr.getErrorMsg());\n  }\n\n  bitmap.recycle();\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  ocr.releaseAll();\n\n}\n\nmain();\n\n')),(0,l.yg)("h3",{id:"mlkit-ocr\u4f8b\u5b50-\u4f4e\u4e8e917\u7248\u672c"},"Mlkit OCR\u4f8b\u5b50 ","[\u4f4e\u4e8e9.17\u7248\u672c]"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n  logd("isServiceOk " + isServiceOk());\n  startEnv()\n  logd("isServiceOk " + isServiceOk());\n  let request = image.requestScreenCapture(10000, 0);\n  if (!request) {\n    request = image.requestScreenCapture(10000, 0);\n  }\n  logd("\u7533\u8bf7\u622a\u56fe\u7ed3\u679c... " + request)\n  if (!request) {\n    loge("\u7533\u8bf7\u622a\u56fe\u6743\u9650\u5931\u8d25,\u68c0\u67e5\u662f\u5426\u5f00\u542f\u540e\u53f0\u5f39\u51fa,\u60ac\u6d6e\u6846\u7b49\u6743\u9650")\n    exit()\n  }\n  //\u7533\u8bf7\u5b8c\u6743\u9650\u81f3\u5c11\u7b491s(\u5783\u573e\u8bbe\u5907\u591a\u52a0\u70b9)\u518d\u622a\u56fe,\u5426\u5219\u4f1a\u622a\u4e0d\u5230\u56fe\n  sleep(1000)\n\n  let mlkit = {\n    "type": "mlkit"\n  }\n\n  let inited = ocr.initOcr(mlkit)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + ocr.getErrorMsg());\n    return;\n  }\n  for (var ix = 0; ix < 20; ix++) {\n    let tmpImage = image.captureFullScreen();\n    // orz \u53c2\u6570\u4ee3\u8868\u662f\u65cb\u8f6c\u89d2\u5ea6\uff0c0 \u4ee3\u8868\u4e0d\u65cb\u8f6c 90 \u4ee3\u8868\u5411\u5de6\u65cb\u8f6c90\u5ea6\uff0c\u8fd8\u6709180\uff0c270\uff0c360\u53c2\u6570\n    let result = ocr.ocrImage(tmpImage, 20000, {"orz": 0});\n    logd("\u8017\u65f6 {}", console.timeEnd(1))\n    if (result) {\n      for (let i = 0; i < result.length; i++) {\n        logd(JSON.stringify(result[i]))\n      }\n    }\n    image.recycle(tmpImage)\n  }\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  ocr.releaseAll();\n}\n\nmain();\n\n')),(0,l.yg)("h3",{id:"\u9ad8\u4e8e917\u7248\u672c\u4f8b\u5b50"},"\u9ad8\u4e8e9.17\u7248\u672c\u4f8b\u5b50"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6ce8\u610f 9.17+ ocr\u6709\u5355\u4f8b\u53d8\u6210\u591a\u4f8b\u6a21\u5f0f\uff0c\u8ddf\u7740\u4e0b\u9762\u7684\u65b9\u5f0f\u8d70\uff0c\u66f4\u6539\u521d\u59cb\u5316initOcr\u7684\u53c2\u6570\u5373\u53ef\uff0c\u4e4b\u524d\u7684ocrlite\u3001paddleOcrOnline\u90fd\u662f\u652f\u6301\u7684")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  logd("isServiceOk " + isServiceOk());\n  startEnv()\n  logd("isServiceOk " + isServiceOk());\n  let request = image.requestScreenCapture(10000, 0);\n  if (!request) {\n    request = image.requestScreenCapture(10000, 0);\n  }\n  logd("\u7533\u8bf7\u622a\u56fe\u7ed3\u679c... " + request)\n  if (!request) {\n    loge("\u7533\u8bf7\u622a\u56fe\u6743\u9650\u5931\u8d25,\u68c0\u67e5\u662f\u5426\u5f00\u542f\u540e\u53f0\u5f39\u51fa,\u60ac\u6d6e\u6846\u7b49\u6743\u9650")\n    exit()\n  }\n  //\u7533\u8bf7\u5b8c\u6743\u9650\u81f3\u5c11\u7b491s(\u5783\u573e\u8bbe\u5907\u591a\u52a0\u70b9)\u518d\u622a\u56fe,\u5426\u5219\u4f1a\u622a\u4e0d\u5230\u56fe\n  sleep(1000)\n\n  //Tesseract\u6a21\u5757\u521d\u59cb\u5316\u53c2\u6570\n  let tessInitMap = {\n    "type": "tess",\n    "language": "chi_sim+eng+num",\n    "debug": false\n  }\n\n  // paddleOcrOnline \u53c2\u6570\u4f8b\u5b50\n  let paddleOcrOnlineMap = {\n    "type": "tess",\n    "serverUrl": "192.168.1.20",\n    "ocrType": "ONNX_PPOCR_V3"\n  }\n  let ocrLiteMap = {\n    "type": "ocrLite",\n    "padding": 10\n  }\n  let tsOcr = ocr.newOcr();\n  let inited = tsOcr.initOcr(paddleOcrOnlineMap)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + tsOcr.getErrorMsg());\n    return;\n  }\n\n  //\u8bfb\u53d6\u4e00\u4e2abitmap\n  let bitmap = image.readBitmap("/sdcard/a.png");\n  if (!bitmap) {\n    loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n    return;\n  }\n  // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n  let result = tsOcr.ocrBitmap(bitmap, 20 * 1000, {});\n  if (result) {\n    logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n    for (var i = 0; i < result.length; i++) {\n      var value = result[i];\n      logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n    }\n  } else {\n    logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n  }\n\n  bitmap.recycle();\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  tsOcr.releaseAll();\n\n}\n\nmain();\n\n')),(0,l.yg)("h2",{id:"ocrsetocrtype-\u8bbe\u7f6e\u7c7b\u578b"},"ocr.setOcrType \u8bbe\u7f6e\u7c7b\u578b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u8bbe\u7f6eOCR\u5b9e\u73b0\u65b9\u5f0f"),(0,l.yg)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.17.0+)"),(0,l.yg)("li",{parentName:"ul"},"@param type \u503c\u5206\u522b\u4e3a tess = Tesseract\u6a21\u5757\uff0cbaiduOnline=\u767e\u5ea6\u5728\u5728\u7ebf\u8bc6\u522b\u6a21\u5757"),(0,l.yg)("li",{parentName:"ul"},"@return {bool} \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,l.yg)("h2",{id:"ocrsetdaemonserver-\u5b88\u62a4ocr\u670d\u52a1"},"ocr.setDaemonServer \u5b88\u62a4OCR\u670d\u52a1"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u8bbe\u7f6e\u662f\u5426\u5b88\u62a4OCR\u670d\u52a1"),(0,l.yg)("li",{parentName:"ul"},"\u9002\u5408\u7248\u672c EC 6.9.0+"),(0,l.yg)("li",{parentName:"ul"},"@param daemon true \u4ee3\u8868\u5b88\u62a4\uff0cfalse\u4ee3\u8868\u4e0d\u5b88\u62a4"),(0,l.yg)("li",{parentName:"ul"},"@param delay \u6bcf\u6b21\u5b88\u62a4\u95f4\u9694\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,l.yg)("li",{parentName:"ul"},"@return {bool} \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,l.yg)("h2",{id:"ocrocrbitmap-\u8bc6\u522b\u6587\u5b57"},"ocr.ocrBitmap \u8bc6\u522b\u6587\u5b57"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5bf9Bitmap\u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a"),(0,l.yg)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.17.0+)")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'\n\n[\n  {\n    "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n    "confidence": 0.48334712,\n    "x": 11,\n    "y": 25,\n    "width": 100,\n    "height": 100\n  }\n]\n\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,l.yg)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,l.yg)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,l.yg)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,l.yg)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,l.yg)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,l.yg)("li",{parentName:"ul"},"@param bitmap \u56fe\u7247"),(0,l.yg)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,l.yg)("li",{parentName:"ul"},"@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"li"},'{"token":"xxx"}')),(0,l.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,l.yg)("h2",{id:"ocrocrimage-\u8bc6\u522b\u6587\u5b57"},"ocr.ocrImage \u8bc6\u522b\u6587\u5b57"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5bf9 AutoImage \u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a"),(0,l.yg)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 8.2.0+)")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'  [\n  {\n    "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n    "confidence": 0.48334712,\n    "x": 11,\n    "y": 25,\n    "width": 100,\n    "height": 100\n  }\n]\n\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,l.yg)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,l.yg)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,l.yg)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,l.yg)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,l.yg)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,l.yg)("li",{parentName:"ul"},"@param image \u56fe\u7247"),(0,l.yg)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,l.yg)("li",{parentName:"ul"},"@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"li"},'{"token":"xxx"}')),(0,l.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  //let start = startEnv()\n  //logd("start {}", start)\n\n  let s = image.requestScreenCapture(10000, 0);\n  logd("s {}", s)\n\n\n  logd("\u521d\u59cb\u5316ocrLite")\n\n  let m = {\n    "type": "ocrLite"\n  }\n  m = {"type": "ocrLite", "numThread": 1, "padding": 10, "maxSideLen": 0};\n  let iniit = ocr.initOcr(m);\n  logd("\u521d\u59cb\u5316o " + iniit)\n  image.initOpenCV()\n  sleep(1000)\n  let id = thread.execAsync(function () {\n    while (true) {\n      sleep(1000)\n\n      let tmpImage = image.captureFullScreen();\n      logd("\u622a\u56fe tmpImage {}", tmpImage)\n      let tt = image.binaryzation(tmpImage, 1, 100)\n      console.time(1)\n      let result = ocr.ocrImage(tt, 10000, {"maxSideLen": 1024});\n      if (result) {\n        for (let i = 0; i < result.length; i++) {\n          logd(JSON.stringify(result[i]))\n        }\n      }\n      logd("\u8017\u65f6 {}", console.timeEnd(1))\n      image.recycle(tt)\n      image.recycle(tmpImage)\n    }\n  })\n\n  logd("\u7ebf\u7a0b thread id = {}", id)\n\n  sleep(115 * 1000)\n  thread.cancelThread(id)\n  sleep(1000)\n  //restartScript("/sdcard/release.iec", true, 3)\n}\n\nmain();\n\n')),(0,l.yg)("h2",{id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f"},"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u83b7\u53d6OCR\u9519\u8bef\u6d88\u606f"),(0,l.yg)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.17.0+)"),(0,l.yg)("li",{parentName:"ul"},"@return {string} null\u4ee3\u8868\u6ca1\u6709\u9519\u8bef")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,l.yg)("h2",{id:"ocrreleaseall-\u91ca\u653eocr\u8d44\u6e90"},"ocr.releaseAll \u91ca\u653eOCR\u8d44\u6e90"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u91ca\u653eOCR\u5360\u7528\u7684\u8d44\u6e90"),(0,l.yg)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.17.0+)"),(0,l.yg)("li",{parentName:"ul"},"@return {bool} \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")))}p.isMDXComponent=!0}}]);