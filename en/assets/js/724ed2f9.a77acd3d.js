"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[8572],{5680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>y});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),g=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=g(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=g(r),m=a,y=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return r?t.createElement(y,i(i({ref:n},p),{},{components:r})):t.createElement(y,i({ref:n},p))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=r[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5110:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var t=r(8168),a=(r(6540),r(5680));const l={title:"OCR\u8bc6\u522b-\u624b\u673a\u5185\u6267\u884c",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d"]},i=void 0,o={unversionedId:"zh-cn/funcs/ocr-agent-api",id:"zh-cn/funcs/ocr-agent-api",title:"OCR\u8bc6\u522b-\u624b\u673a\u5185\u6267\u884c",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",source:"@site/iosdocs/zh-cn/funcs/ocr-agent-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/ocr-agent-api",permalink:"/en/iosdocs/zh-cn/funcs/ocr-agent-api",draft:!1,tags:[],version:"current",frontMatter:{title:"OCR\u8bc6\u522b-\u624b\u673a\u5185\u6267\u884c",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 OCR\u8bc6\u522b \u8d44\u6e90\u4e0b\u8f7d"]},sidebar:"iosdocs",previous:{title:"\u56fe\u8272\u51fd\u6570",permalink:"/en/iosdocs/zh-cn/funcs/image-api"},next:{title:"OCR\u8bc6\u522b",permalink:"/en/iosdocs/zh-cn/funcs/ocr-api"}},c={},g=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"ocrAgent.initOcr \u521d\u59cb\u5316",id:"ocragentinitocr-\u521d\u59cb\u5316",level:2},{value:"ocrAgent.ocrImage \u8bc6\u522b\u6587\u5b57",id:"ocragentocrimage-\u8bc6\u522b\u6587\u5b57",level:2},{value:"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f",id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f",level:2},{value:"ocrAgent.releaseAll \u91ca\u653eOCR\u8d44\u6e90",id:"ocragentreleaseall-\u91ca\u653eocr\u8d44\u6e90",level:2}],p=(s="Br",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var s;const u={toc:g},m="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"OCR\u6a21\u5757\u662f\u5c5e\u4e8e\u5bf9\u56fe\u50cf\u8fdb\u884c\u8bc6\u522b"),(0,a.yg)("li",{parentName:"ul"},"OCR\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662f ocrAgent\uff0c\u4f8b\u5982 ocrAgent.initOcr()\u8fd9\u6837\u8c03\u7528"),(0,a.yg)("li",{parentName:"ul"},"\u76ee\u524d\u7684OCR\u5305\u542b\u4e86 appleVision")),(0,a.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("ul",{parentName:"div"},(0,a.yg)("li",{parentName:"ul"},"\u8fd9\u4e2a\u6a21\u5757\u8fd0\u7b97\u662f\u5728\u624b\u673a\u5185\u6267\u884c\u7684\uff0c\u6570\u636e\u4e5f\u662f\u5b58\u5728\u624b\u673a\u5185")))),(0,a.yg)("h2",{id:"ocragentinitocr-\u521d\u59cb\u5316"},"ocrAgent.initOcr \u521d\u59cb\u5316"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u521d\u59cb\u5316OCR\u6a21\u5757"),(0,a.yg)("li",{parentName:"ul"},"@param map map\u53c2\u6570\u8868"),(0,a.yg)("li",{parentName:"ul"},"key\u5206\u522b\u4e3a\uff1a"),(0,a.yg)("li",{parentName:"ul"},"type : OCR\u7c7b\u578b\uff0c\u503c\u5206\u522b\u4e3a appleVision = ios\u81ea\u5e26\u7684Vision\u6a21\u5757"),(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c\u7c7b\u578b\u662f appleVision, \u53c2\u6570\u8bbe\u7f6e\u4e3a : ",(0,a.yg)("inlineCode",{parentName:"li"},'{"type":"appleVision","level":"fast","languages":"zh-Hans,en-US"}'),(0,a.yg)(p,{mdxType:"Br"})),(0,a.yg)("li",{parentName:"ul"},"level: fast,\u4ee3\u8868\u5feb\u901f\u7684\uff0caccurate:\u4ee3\u8868\u7cbe\u51c6\u7684"),(0,a.yg)("li",{parentName:"ul"},"languages: \u8bc6\u522b\u7684\u8bed\u8a00\uff0c\u9ed8\u8ba4\u662fzh-Hans,en-US\u4e2d\u6587\u7b80\u4f53\u548c\u82f1\u6587\uff0c"),(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301\u7684\u6709 ",(0,a.yg)("inlineCode",{parentName:"li"},'["en-US", "fr-FR", "it-IT", "de-DE", "es-ES", "pt-BR", "zh-Hans", "zh-Hant"]')),(0,a.yg)("li",{parentName:"ul"},"@return {bool} \u5e03\u5c14\u578b \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"appleVision OCR\u4f8b\u5b50")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'  function main() {\n  let appleVision = {\n    "type": "appleVision"\n  }\n  let inited = ocrAgent.initOcr(appleVision)\n  logd("\u521d\u59cb\u5316\u7ed3\u679c -" + inited);\n  if (!inited) {\n    loge("error : " + ocrAgent.getErrorMsg());\n    return;\n  }\n\n  for (var ix = 0; ix < 20; ix++) {\n\n    //\u8bfb\u53d6\u4e00\u4e2abitmap\n    let img = imageAgent.captureFullScreen();\n    if (!img) {\n      loge("\u8bfb\u53d6\u56fe\u7247\u5931\u8d25");\n      continue;\n    }\n    console.time("1")\n    logd("start---ocr");\n    // \u5bf9\u56fe\u7247\u8fdb\u884c\u8bc6\u522b\n    let result = ocrAgent.ocrImage(img, 20 * 1000, {});\n    logd(result)\n    if (result) {\n      logd("ocr\u7ed3\u679c-\u300b " + JSON.stringify(result));\n      for (var i = 0; i < result.length; i++) {\n        var value = result[i];\n        logd("\u6587\u5b57 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);\n      }\n    } else {\n      logw("\u672a\u8bc6\u522b\u5230\u7ed3\u679c");\n    }\n\n    logd("\u8017\u65f6: " + console.timeEnd(1) + " ms")\n    imageAgent.recycle(img)\n    sleep(1000);\n    logd("ix = " + ix)\n  }\n  //\u91ca\u653e\u6240\u6709\u8d44\u6e90\n  ocrAgent.releaseAll();\n}\n\nmain();\n')),(0,a.yg)("h2",{id:"ocragentocrimage-\u8bc6\u522b\u6587\u5b57"},"ocrAgent.ocrImage \u8bc6\u522b\u6587\u5b57"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5bf9 AutoImage \u8fdb\u884cOCR\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u7c7b\u4f3c\u4e8e\u4e0e\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'  [\n  {\n    "label": "\u5947\u8da3\u88c5\u626e\u4e09\u9636\u76d8\u5316",\n    "confidence": 0.48334712,\n    "x": 11,\n    "y": 25,\n    "width": 100,\n    "height": 100\n  }\n]\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"label: \u4ee3\u8868\u662f\u8bc6\u522b\u7684\u6587\u5b57"),(0,a.yg)("li",{parentName:"ul"},"confidence\uff1a\u4ee3\u8868\u8bc6\u522b\u7684\u51c6\u786e\u5ea6"),(0,a.yg)("li",{parentName:"ul"},"x: \u4ee3\u8868X\u5f00\u59cb\u5750\u6807"),(0,a.yg)("li",{parentName:"ul"},"Y: \u4ee3\u8868Y\u5f00\u59cb\u5750\u6807"),(0,a.yg)("li",{parentName:"ul"},"width: \u4ee3\u8868\u5bbd\u5ea6"),(0,a.yg)("li",{parentName:"ul"},"height: \u4ee3\u8868\u9ad8\u5ea6"),(0,a.yg)("li",{parentName:"ul"},"@param bitmap \u56fe\u7247"),(0,a.yg)("li",{parentName:"ul"},"@param timeout \u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\u6beb\u79d2"),(0,a.yg)("li",{parentName:"ul"},"@param extra \u6269\u5c55\u53c2\u6570\uff0cmap\u5f62\u5f0f\uff0c\u4f8b\u5982 ",(0,a.yg)("inlineCode",{parentName:"li"},'{"token":"xxx"}')),(0,a.yg)("li",{parentName:"ul"},"@return {JSON} JSON\u5bf9\u8c61")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,a.yg)("h2",{id:"ocrgeterrormsg-\u83b7\u53d6\u9519\u8bef\u6d88\u606f"},"ocr.getErrorMsg \u83b7\u53d6\u9519\u8bef\u6d88\u606f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u83b7\u53d6OCR\u9519\u8bef\u6d88\u606f"),(0,a.yg)("li",{parentName:"ul"}),(0,a.yg)("li",{parentName:"ul"},"@return {string} null\u4ee3\u8868\u6ca1\u6709\u9519\u8bef")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")),(0,a.yg)("h2",{id:"ocragentreleaseall-\u91ca\u653eocr\u8d44\u6e90"},"ocrAgent.releaseAll \u91ca\u653eOCR\u8d44\u6e90"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u91ca\u653eOCR\u5360\u7528\u7684\u8d44\u6e90"),(0,a.yg)("li",{parentName:"ul"}),(0,a.yg)("li",{parentName:"ul"},"@return {bool} \u6210\u529f\u6216\u8005\u5931\u8d25")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"\u4ee3\u7801\u4f8b\u5b50\u5e38\u89c1\nOCR\u521d\u59cb\u5316\n")))}y.isMDXComponent=!0}}]);