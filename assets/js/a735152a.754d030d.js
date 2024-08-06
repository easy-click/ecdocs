"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[4350],{359:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var a=l(4848),i=l(8453);const r={title:"\u63d2\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u63d2\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u63d2\u4ef6\u51fd\u6570"]},d=void 0,t={id:"zh-cn/funcs/plugin-api",title:"\u63d2\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u63d2\u4ef6\u51fd\u6570",source:"@site/iostjdocs/zh-cn/funcs/plugin-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/plugin-api",permalink:"/iostjdocs/zh-cn/funcs/plugin-api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u63d2\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u63d2\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u63d2\u4ef6\u51fd\u6570"]},sidebar:"iostjdocs",previous:{title:"\u8f93\u5165\u6cd5\u51fd\u6570",permalink:"/iostjdocs/zh-cn/funcs/ime-api"},next:{title:"\u6fc0\u6d3b\u5668\u51fd\u6570",permalink:"/iostjdocs/zh-cn/funcs/tjcenter-api"}},s={},o=[{value:"loadPlugin \u8f7d\u5165\u4e00\u4e2a\u63d2\u4ef6",id:"loadplugin-\u8f7d\u5165\u4e00\u4e2a\u63d2\u4ef6",level:2},{value:"makeInstance \u8f7d\u5165\u4e00\u4e2a\u7c7b\u5b9e\u4f8b",id:"makeinstance-\u8f7d\u5165\u4e00\u4e2a\u7c7b\u5b9e\u4f8b",level:2},{value:"getErrorMsg \u9519\u8bef\u4fe1\u606f",id:"geterrormsg-\u9519\u8bef\u4fe1\u606f",level:2},{value:"callMethodStr \u8c03\u7528\u63d2\u4ef6\u5b9e\u4f8b\u51fd\u6570\u8fd4\u56de\u5b57\u7b26\u4e32",id:"callmethodstr-\u8c03\u7528\u63d2\u4ef6\u5b9e\u4f8b\u51fd\u6570\u8fd4\u56de\u5b57\u7b26\u4e32",level:2},{value:"callMethodData \u8c03\u7528\u5b9e\u4f8b\u51fd\u6570",id:"callmethoddata-\u8c03\u7528\u5b9e\u4f8b\u51fd\u6570",level:2},{value:"callMethodReturnData \u8c03\u7528\u5b9e\u4f8b\u51fd\u6570",id:"callmethodreturndata-\u8c03\u7528\u5b9e\u4f8b\u51fd\u6570",level:2},{value:"callMethodAny \u8c03\u7528\u5b9e\u4f8b\u51fd\u6570",id:"callmethodany-\u8c03\u7528\u5b9e\u4f8b\u51fd\u6570",level:2},{value:"readBundleFile \u8bfb\u53d6\u63d2\u4ef6\u7684\u6587\u4ef6",id:"readbundlefile-\u8bfb\u53d6\u63d2\u4ef6\u7684\u6587\u4ef6",level:2},{value:"copyBundleFile \u590d\u5236\u63d2\u4ef6\u7684\u6587\u4ef6\u5230\u67d0\u4e2a\u8def\u5f84",id:"copybundlefile-\u590d\u5236\u63d2\u4ef6\u7684\u6587\u4ef6\u5230\u67d0\u4e2a\u8def\u5f84",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u7531\u4e8eiOS\u7684\u6c99\u76d2\u548c\u7b7e\u540d\u673a\u5236\uff0c\u5bfc\u81f4\u63d2\u4ef6\u662f\u65e0\u6cd5\u52a8\u6001\u52a0\u8f7d\u7684\uff0c\u65e0\u6cd5\u653e\u5230\u811a\u672c\u7684plugin\u76ee\u5f55\u4e2d\uff0c\u8131\u673a\u7248\u672c\u7684\u63d2\u4ef6\u9700\u8981\u6253\u5305\u5230ipa\u4e2d\u8fdb\u884c\u4f7f\u7528"}),"\n",(0,a.jsx)(e.li,{children:"\u8131\u673a\u7248\u672c\u63d2\u4ef6\u53ea\u652f\u6301iOS\u7684.framework \u6587\u4ef6"}),"\n",(0,a.jsxs)(e.li,{children:["\u5177\u4f53\u5982\u4f55\u7f16\u5199\u63d2\u4ef6\u8bf7\u5230\u8fd9\u91cc\u9605\u8bfb\uff0c",(0,a.jsx)(e.a,{href:"/iostjdocs/zh-cn/advance/pluginguid",children:"\u5982\u4f55\u7f16\u5199\u8131\u673a\u63d2\u4ef6?"}),"\uff0chelloworldplugin \u548chelloworldplugin2\u63d2\u4ef6\u4ee3\u7801\u4e0b\u8f7d\u5730\u5740, ",(0,a.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:l(862).A+"",children:"\u70b9\u6211\u4e0b\u8f7d"})]}),"\n",(0,a.jsxs)(e.li,{children:["\u63d2\u4ef6\u6a21\u5757\u5f00\u5934\u7684\u662f ",(0,a.jsx)(e.strong,{children:"pluginLoader"})]}),"\n"]})}),"\n",(0,a.jsx)(e.h2,{id:"loadplugin-\u8f7d\u5165\u4e00\u4e2a\u63d2\u4ef6",children:"loadPlugin \u8f7d\u5165\u4e00\u4e2a\u63d2\u4ef6"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u8f7d\u5165\u4e00\u4e2a\u63d2\u4ef6"}),"\n",(0,a.jsx)(e.li,{children:"\u9002\u914dEC iOS 4.2.0+"}),"\n",(0,a.jsx)(e.li,{children:"@param pluginName \u63d2\u4ef6\u540d\u79f0 \u540d\u79f0"}),"\n",(0,a.jsxs)(e.li,{children:["@return ",(0,a.jsx)(e.code,{children:"\u5e03\u5c14\u578b"})," true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'    function main() {\n  // \u4f8b\u5982\u63d2\u4ef6\u662f helloworldplugin2.framework\u8fd9\u6837\u7684\u6587\u4ef6\u540d\u79f0\uff0c\u63d2\u4ef6\u540d\u79f0\u5c31\u662f helloworldplugin2 \n  let pluginName = "helloworldplugin2"\n  let loaded = pluginLoader.loadPlugin(pluginName)\n  if (!loaded) {\n    loge("\u8f7d\u5165\u63d2\u4ef6\u5931\u8d25")\n    return\n  } else {\n    logd("\u8f7d\u5165\u63d2\u4ef6\u6210\u529f")\n  }\n}\n\nmain();\n'})}),"\n",(0,a.jsx)(e.h2,{id:"makeinstance-\u8f7d\u5165\u4e00\u4e2a\u7c7b\u5b9e\u4f8b",children:"makeInstance \u8f7d\u5165\u4e00\u4e2a\u7c7b\u5b9e\u4f8b"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u8f7d\u5165\u4e00\u4e2a\u7c7b\u5b9e\u4f8b"}),"\n",(0,a.jsx)(e.li,{children:"\u9002\u914dEC iOS 4.2.0+"}),"\n",(0,a.jsx)(e.li,{children:"@param pluginName \u63d2\u4ef6\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param clzName \u7c7b\u540d\u79f0"}),"\n",(0,a.jsxs)(e.li,{children:["@returns ",(0,a.jsx)(e.code,{children:"string"})," \u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u5982\u679c\u662fnull\u6216\u8005\u662f\u7a7a \u4ee3\u8868\u6210\u529f\uff0c\u5176\u4ed6\u7684\u4ee3\u8868\u9519\u8bef\u4fe1\u606f"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'    function main() {\n  let name = "helloworldplugin2"\n  let clzName = "Plugin1"\n  let load = pluginLoader.loadPlugin(name)\n  if (!load) {\n    loge("\u8f7d\u5165\u63d2\u4ef6\u5931\u8d25: " + pluginLoader.getErrorMsg())\n    return\n  }\n  logd("\u8f7d\u5165\u63d2\u4ef6\u6210\u529f {}", name)\n  let ins = pluginLoader.makeInstance(name, clzName)\n  if (ins == null || ins == "") {\n    logd("\u5b9e\u4f8b\u5316\u7c7b\u6210\u529f: " + clzName)\n  } else {\n    loge("\u5b9e\u4f8b\u5316\u7c7b\u5931\u8d25: " + clzName)\n    return\n  }\n}\n\nmain();\n'})}),"\n",(0,a.jsx)(e.h2,{id:"geterrormsg-\u9519\u8bef\u4fe1\u606f",children:"getErrorMsg \u9519\u8bef\u4fe1\u606f"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u83b7\u53d6\u9519\u8bef\u4fe1\u606f"}),"\n",(0,a.jsxs)(e.li,{children:["@return ",(0,a.jsx)(e.code,{children:"string"})," \u6709\u5b57\u7b26\u4e32\u4ee3\u8868\u6709\u9519\u8bef\u4fe1\u606f"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let name = "helloworldplugin2"\n  let clzName = "Plugin1"\n  let load = pluginLoader.loadPlugin(name)\n  if (!load) {\n    loge("\u8f7d\u5165\u63d2\u4ef6\u5931\u8d25: " + pluginLoader.getErrorMsg())\n    return\n  }\n  logd("\u8f7d\u5165\u63d2\u4ef6\u6210\u529f {}", name)\n  let ins = pluginLoader.makeInstance(name, clzName)\n  if (ins == null || ins == "") {\n    logd("\u5b9e\u4f8b\u5316\u7c7b\u6210\u529f: " + clzName)\n  } else {\n    loge("\u5b9e\u4f8b\u5316\u7c7b\u5931\u8d25: " + clzName)\n    return\n  }\n}\n\nmain();\n'})}),"\n",(0,a.jsx)(e.h2,{id:"callmethodstr-\u8c03\u7528\u63d2\u4ef6\u5b9e\u4f8b\u51fd\u6570\u8fd4\u56de\u5b57\u7b26\u4e32",children:"callMethodStr \u8c03\u7528\u63d2\u4ef6\u5b9e\u4f8b\u51fd\u6570\u8fd4\u56de\u5b57\u7b26\u4e32"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u8c03\u7528\u63d2\u4ef6\u5b9e\u4f8b\u51fd\u6570\u8fd4\u56de\u5b57\u7b26\u4e32"}),"\n",(0,a.jsx)(e.li,{children:"\u9002\u914dEC iOS 4.2.0+"}),"\n",(0,a.jsx)(e.li,{children:"@param pluginName \u63d2\u4ef6\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param clzName \u7c7b\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param methodName \u51fd\u6570\u540d\u79f0 \u5b57\u7b26\u4e32"}),"\n",(0,a.jsx)(e.li,{children:"@param args \u53c2\u6570\u5b57\u7b26\u4e32"}),"\n",(0,a.jsxs)(e.li,{children:["@return ",(0,a.jsx)(e.code,{children:"string"})," \u5b57\u7b26\u4e32\u5bf9\u8c61"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let name = "helloworldplugin2"\n  let clzName = "Plugin1"\n  let load = pluginLoader.loadPlugin(name)\n\n  if(!load){\n    loge("\u8f7d\u5165\u63d2\u4ef6\u5931\u8d25: "+pluginLoader.getErrorMsg())\n    return\n  }\n  logd("\u8f7d\u5165\u63d2\u4ef6\u6210\u529f {}",name)\n  let ins = pluginLoader.makeInstance(name,clzName)\n  if(ins == null || ins == ""){\n    logd("\u5b9e\u4f8b\u5316\u7c7b\u6210\u529f: "+clzName)\n  }else{\n    loge("\u5b9e\u4f8b\u5316\u7c7b\u5931\u8d25: "+clzName)\n    return\n  }\n  let args = JSON.stringify({"a":1,"b":""+new Date()})\n  let rs = pluginLoader.callMethodStr(name,clzName,"testMethod",args)\n  logd("testMethod \u8fd4\u56de\u7ed3\u679c "+rs)\n}\n\nmain();\n'})}),"\n",(0,a.jsx)(e.h2,{id:"callmethoddata-\u8c03\u7528\u5b9e\u4f8b\u51fd\u6570",children:"callMethodData \u8c03\u7528\u5b9e\u4f8b\u51fd\u6570"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u8c03\u7528\u5b9e\u4f8b\u51fd\u6570\u8fd4\u56de\u5b57\u7b26\u4e32"}),"\n",(0,a.jsx)(e.li,{children:"\u9002\u914dEC iOS 4.2.0+"}),"\n",(0,a.jsx)(e.li,{children:"@param pluginName \u63d2\u4ef6\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param clzName \u7c7b\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param methodName \u51fd\u6570\u540d\u79f0 \u5b57\u7b26\u4e32"}),"\n",(0,a.jsx)(e.li,{children:"@param data swift\u8bed\u8a00\u4e2dData\u5bf9\u8c61\uff0c\u76f8\u5f53\u4e8e\u5b57\u8282\u6570\u7ec4"}),"\n",(0,a.jsxs)(e.li,{children:["@return ",(0,a.jsx)(e.code,{children:"string"})," \u5b57\u7b26\u4e32\u5bf9\u8c61"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let name = "helloworldplugin2"\n  let clzName = "Plugin1"\n  let load = pluginLoader.loadPlugin(name)\n  if(!load){\n    loge("\u8f7d\u5165\u63d2\u4ef6\u5931\u8d25: "+pluginLoader.getErrorMsg())\n    return\n  }\n  logd("\u8f7d\u5165\u63d2\u4ef6\u6210\u529f {}",name)\n  let ins = pluginLoader.makeInstance(name,clzName)\n  if(ins == null || ins == ""){\n    logd("\u5b9e\u4f8b\u5316\u7c7b\u6210\u529f: "+clzName)\n  }else{\n    loge("\u5b9e\u4f8b\u5316\u7c7b\u5931\u8d25: "+clzName)\n    return\n  }\n  let args = JSON.stringify({"a":1,"b":""+new Date()})\n  let rs = pluginLoader.callMethodReturnData(name,clzName,"testMethod",args)\n  logd("testMethod \u8fd4\u56de\u7ed3\u679c "+rs)\n  \n  let anyR = pluginLoader.callMethodData(name,clzName,"testMethod",rs)\n  logd("callMethodData \u8fd4\u56de\u7ed3\u679c "+anyR)\n}\n\nmain();\n'})}),"\n",(0,a.jsx)(e.h2,{id:"callmethodreturndata-\u8c03\u7528\u5b9e\u4f8b\u51fd\u6570",children:"callMethodReturnData \u8c03\u7528\u5b9e\u4f8b\u51fd\u6570"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u8c03\u7528\u63d2\u4ef6\u5b9e\u4f8b\u51fd\u6570"}),"\n",(0,a.jsx)(e.li,{children:"\u9002\u914dEC iOS 4.2.0+"}),"\n",(0,a.jsx)(e.li,{children:"@param pluginName \u63d2\u4ef6\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param clzName \u7c7b\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param methodName \u51fd\u6570\u540d\u79f0 \u5b57\u7b26\u4e32"}),"\n",(0,a.jsx)(e.li,{children:"@param args \u53c2\u6570\u5b57\u7b26\u4e32"}),"\n",(0,a.jsx)(e.li,{children:"@return Data swift\u8bed\u8a00\u4e2dData\u5bf9\u8c61\uff0c\u76f8\u5f53\u4e8e\u5b57\u8282\u6570\u7ec4"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let name = "helloworldplugin2"\n  let clzName = "Plugin1"\n  let load = pluginLoader.loadPlugin(name)\n  if(!load){\n    loge("\u8f7d\u5165\u63d2\u4ef6\u5931\u8d25: "+pluginLoader.getErrorMsg())\n    return\n  }\n  logd("\u8f7d\u5165\u63d2\u4ef6\u6210\u529f {}",name)\n  let ins = pluginLoader.makeInstance(name,clzName)\n  if(ins == null || ins == ""){\n    logd("\u5b9e\u4f8b\u5316\u7c7b\u6210\u529f: "+clzName)\n  }else{\n    loge("\u5b9e\u4f8b\u5316\u7c7b\u5931\u8d25: "+clzName)\n    return\n  }\n  let args = JSON.stringify({"a":1,"b":""+new Date()})\n  let rs = pluginLoader.callMethodReturnData(name,clzName,"testMethod",args)\n  logd("testMethod \u8fd4\u56de\u7ed3\u679c "+rs)\n  \n  let anyR = pluginLoader.callMethodData(name,clzName,"testMethod",rs)\n  logd("callMethodData \u8fd4\u56de\u7ed3\u679c "+anyR)\n}\n\nmain();\n'})}),"\n",(0,a.jsx)(e.h2,{id:"callmethodany-\u8c03\u7528\u5b9e\u4f8b\u51fd\u6570",children:"callMethodAny \u8c03\u7528\u5b9e\u4f8b\u51fd\u6570"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u8c03\u7528\u63d2\u4ef6\u51fd\u6570\u53c2\u6570\u8fd4\u56de\u503c\u90fd\u662fAny"}),"\n",(0,a.jsx)(e.li,{children:"\u9002\u914dEC iOS 4.2.0+"}),"\n",(0,a.jsx)(e.li,{children:"@param pluginName \u63d2\u4ef6\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param clzName \u7c7b\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param methodName \u51fd\u6570\u540d\u79f0 \u5b57\u7b26\u4e32"}),"\n",(0,a.jsx)(e.li,{children:"@param data \u4efb\u610f\u7c7b\u578b\u7684\u53c2\u6570"}),"\n",(0,a.jsx)(e.li,{children:"@return Any swift\u8bed\u8a00\u4e2d Any \u5bf9\u8c61\uff0cjs\u4e2d\u7684\u4efb\u610f\u7c7b\u578b"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let name = "helloworldplugin2"\n  let clzName = "Plugin1"\n  let load = pluginLoader.loadPlugin(name)\n  if(!load){\n    loge("\u8f7d\u5165\u63d2\u4ef6\u5931\u8d25: "+pluginLoader.getErrorMsg())\n    return\n  }\n  logd("\u8f7d\u5165\u63d2\u4ef6\u6210\u529f {}",name)\n  let ins = pluginLoader.makeInstance(name,clzName)\n  if(ins == null || ins == ""){\n    logd("\u5b9e\u4f8b\u5316\u7c7b\u6210\u529f: "+clzName)\n  }else{\n    loge("\u5b9e\u4f8b\u5316\u7c7b\u5931\u8d25: "+clzName)\n    return\n  }\n  let args = JSON.stringify({"a":1,"b":""+new Date()})\n  let rs = pluginLoader.callMethodAny(name,clzName,"testMethod",args)\n  logd("callMethodAny \u8fd4\u56de\u7ed3\u679c "+rs)\n\n\n\n  logd("\u5f00\u59cb\u622a\u56fe\u6d4b\u8bd5Any\u7c7b\u578b...")\n\n  setComputeMode(1)\n  let img1 = image.captureFullScreen();\n  logd(img1)\n\n  // \u6d4b\u8bd51\n  let uiimage  = image.autoImageToUIImage(img1)\n  logd("autoImageToUIImage uiimage "+uiimage)\n  let x = pluginLoader.callMethodAny(name,clzName,"testMethod",uiimage)\n  logd(x)\n  image.recycle(img1)\n\n\n  let img2 = image.captureFullScreenUIImage({})\n  let xX = pluginLoader.callMethodAny(name,clzName,"testMethod",img2)\n  logd(xX)\n\n\n  let au = image.uiimageToAutoImage(uiimage)\n  logd("au "+au)\n\n  // \u4fdd\u5b58\u5230\u6587\u4ef6\u4e2d\n  image.saveTo(au, file.getSandBoxFilePath("a.jpg"))\n  image.recycle(au)\n  image.recycle(img2)\n  \n}\n\nmain();\n'})}),"\n",(0,a.jsx)(e.h2,{id:"readbundlefile-\u8bfb\u53d6\u63d2\u4ef6\u7684\u6587\u4ef6",children:"readBundleFile \u8bfb\u53d6\u63d2\u4ef6\u7684\u6587\u4ef6"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u8bfb\u53d6\u63d2\u4ef6\u7684\u6587\u4ef6"}),"\n",(0,a.jsx)(e.li,{children:"\u9002\u914dEC iOS 4.2.0+"}),"\n",(0,a.jsx)(e.li,{children:"@param pluginName \u63d2\u4ef6\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param key \u6587\u4ef6\u540d\u79f0\uff0c\u4e0d\u542b\u6709\u540e\u7f00"}),"\n",(0,a.jsx)(e.li,{children:"@param ext \u6587\u4ef6\u540e\u7f00\uff0c\u4e0d\u8981\u52a0."}),"\n",(0,a.jsxs)(e.li,{children:["@return ",(0,a.jsx)(e.code,{children:"string"})," \u6587\u4ef6\u7684\u5b57\u7b26\u4e32\u5185\u5bb9"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let name = "helloworldplugin2"\n  let clzName = "Plugin1"\n  let load = pluginLoader.loadPlugin(name)\n  if(!load){\n    loge("\u8f7d\u5165\u63d2\u4ef6\u5931\u8d25: "+pluginLoader.getErrorMsg())\n    return\n  }\n  logd("\u8f7d\u5165\u63d2\u4ef6\u6210\u529f {}",name)\n  logd("\u8bfb\u53d6\u63d2\u4ef6\u4e2d\u7684test.txt\u6587\u4ef6\u5185\u5bb9")\n  let ins = pluginLoader.readBundleFile(name,"test","txt")\n  logd("readBundleFile \u8fd4\u56de\u7ed3\u679c "+ins)\n}\n\nmain();\n'})}),"\n",(0,a.jsx)(e.h2,{id:"copybundlefile-\u590d\u5236\u63d2\u4ef6\u7684\u6587\u4ef6\u5230\u67d0\u4e2a\u8def\u5f84",children:"copyBundleFile \u590d\u5236\u63d2\u4ef6\u7684\u6587\u4ef6\u5230\u67d0\u4e2a\u8def\u5f84"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u590d\u5236\u63d2\u4ef6\u7684\u6587\u4ef6\u5230\u67d0\u4e2a\u8def\u5f84"}),"\n",(0,a.jsx)(e.li,{children:"\u9002\u914dEC iOS 4.2.0+"}),"\n",(0,a.jsx)(e.li,{children:"@param pluginName \u63d2\u4ef6\u540d\u79f0"}),"\n",(0,a.jsx)(e.li,{children:"@param key \u6587\u4ef6\u540d\u79f0\uff0c\u4e0d\u542b\u6709\u540e\u7f00"}),"\n",(0,a.jsx)(e.li,{children:"@param ext \u6587\u4ef6\u540e\u7f00\uff0c\u4e0d\u8981\u52a0."}),"\n",(0,a.jsx)(e.li,{children:"@param dest \u76ee\u6807\u6587\u4ef6\u5730\u5740"}),"\n",(0,a.jsxs)(e.li,{children:["@return ",(0,a.jsx)(e.code,{children:"bool"})," true\u4ee3\u8868\u6210\u529f"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let name = "helloworldplugin2"\n  let clzName = "Plugin1"\n  let load = pluginLoader.loadPlugin(name)\n  if(!load){\n    loge("\u8f7d\u5165\u63d2\u4ef6\u5931\u8d25: "+pluginLoader.getErrorMsg())\n    return\n  }\n  logd("\u8f7d\u5165\u63d2\u4ef6\u6210\u529f {}",name)\n  let dest = file.getSandBoxFilePath("a.txt")\n  logd("dest" +dest)\n  logd("\u590d\u5236test.txt\u5230"+dest)\n  let ins = pluginLoader.copyBundleFile(name,"test","txt",dest)\n  logd("copyBundleFile \u8fd4\u56de\u7ed3\u679c "+ins)\n}\n\nmain();\n'})})]})}function g(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},862:(n,e,l)=>{l.d(e,{A:()=>a});const a=l.p+"assets/files/tjplugindemo-549308136fa9994a2334b047e283771a.zip"},8453:(n,e,l)=>{l.d(e,{R:()=>d,x:()=>t});var a=l(6540);const i={},r=a.createContext(i);function d(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);