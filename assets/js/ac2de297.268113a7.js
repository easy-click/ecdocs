"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[2617],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,d=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=o(t),g=r,f=p["".concat(u,".").concat(g)]||p[g]||s[g]||d;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var d=t.length,i=new Array(d);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<d;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const d={title:"\u7f51\u7edc\u9a8c\u8bc1\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u9a8c\u8bc1\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u9a8c\u8bc1\u51fd\u6570"]},i=void 0,l={unversionedId:"zh-cn/funcs/netcard-api",id:"zh-cn/funcs/netcard-api",title:"\u7f51\u7edc\u9a8c\u8bc1\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u9a8c\u8bc1\u51fd\u6570",source:"@site/iostjdocs/zh-cn/funcs/netcard-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/netcard-api",permalink:"/iostjdocs/zh-cn/funcs/netcard-api",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7f51\u7edc\u9a8c\u8bc1\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u9a8c\u8bc1\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u7f51\u7edc\u9a8c\u8bc1\u51fd\u6570"]},sidebar:"iostjdocs",previous:{title:"\u5de5\u5177\u51fd\u6570",permalink:"/iostjdocs/zh-cn/funcs/utils-api"},next:{title:"\u4f01\u4e1a\u4e91\u63a7",permalink:"/iostjdocs/zh-cn/funcs/ecloud-tj-api"}},u={},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u5361\u5bc6\u76f8\u5173",id:"\u5361\u5bc6\u76f8\u5173",level:2},{value:"ecNetCard.netCardInit \u521d\u59cb\u5316\u5361\u5bc6",id:"ecnetcardnetcardinit-\u521d\u59cb\u5316\u5361\u5bc6",level:3},{value:"ecNetCard.netCardBind \u7ed1\u5b9a\u5361\u5bc6",id:"ecnetcardnetcardbind-\u7ed1\u5b9a\u5361\u5bc6",level:3},{value:"ecNetCard.netCardUnbind \u89e3\u7ed1\u5361\u5bc6",id:"ecnetcardnetcardunbind-\u89e3\u7ed1\u5361\u5bc6",level:3},{value:"\u4e91\u7aef\u53d8\u91cf",id:"\u4e91\u7aef\u53d8\u91cf",level:2},{value:"ecNetCard.netCardGetCloudVar \u83b7\u53d6\u8fdc\u7a0b\u53d8\u91cf",id:"ecnetcardnetcardgetcloudvar-\u83b7\u53d6\u8fdc\u7a0b\u53d8\u91cf",level:3},{value:"ecNetCard.netCardUpdateCloudVar \u66f4\u65b0\u8fdc\u7a0b\u53d8\u91cf",id:"ecnetcardnetcardupdatecloudvar-\u66f4\u65b0\u8fdc\u7a0b\u53d8\u91cf",level:3}],c={toc:o};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u9a8c\u8bc1\u6a21\u5757\u662f\u5b98\u65b9\u5f00\u653e\u7684\u6a21\u5757\uff0c\u9700\u8981\u5230 ",(0,r.kt)("a",{parentName:"li",href:"https://uc.ieasyclick.com"},"https://uc.ieasyclick.com")," \u7528\u6237\u4e2d\u5fc3\u7ba1\u7406\u540e\u53f0\u63d0\u53d6\u5361\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u4e8e3.1.0\u7248\u672c\u7684\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u51fd\u6570\u8c03\u7528\u65b9\u5f0f\uff0c\u65e0\u9700\u96c6\u6210\uff0c\u7b80\u5355\u6613\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u5361\u5bc6\u81ea\u5e26\u5fc3\u8df3\u9a8c\u8bc1\u65e0\u9700\u53e6\u5916\u8c03\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u5361\u5bc6\u81ea\u52a8\u9a8c\u8bc1\u811a\u672c\u7684\u5b89\u5168\u6027\uff0c\u589e\u52a0\u9632\u7834\u89e3\u96be\u5ea6\uff0c\u8fd9\u4e2a\u6709\u533a\u522b\u5e02\u9762\u4e0a\u7684\u7f51\u7edc\u9a8c\u8bc1\u5e73\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u8bba\u662f\u96c6\u6210\u7248\u672c\u7684\u8fd8\u662fSDK\u7248\u672c\u7684\u8c03\u7528\u7684\u65b9\u6cd5\u90fd\u662f\u4e00\u6837\u7684\uff0c\u90fd\u662f",(0,r.kt)("strong",{parentName:"li"},"ecNetCard"),"\u5f00\u5934\u7684\u6a21\u5757")),(0,r.kt)("h2",{id:"\u5361\u5bc6\u76f8\u5173"},"\u5361\u5bc6\u76f8\u5173"),(0,r.kt)("h3",{id:"ecnetcardnetcardinit-\u521d\u59cb\u5316\u5361\u5bc6"},"ecNetCard.netCardInit \u521d\u59cb\u5316\u5361\u5bc6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[\u7f51\u7edc\u9a8c\u8bc1]","\u521d\u59cb\u5316\u5361\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC iOS \u8131\u673a\u7248\u672c 3.1.0+"),(0,r.kt)("li",{parentName:"ul"},"@param appId \u5e94\u7528\u7684appId\uff0c\u7528\u6237\u4e2d\u5fc3\u540e\u53f0\u83b7\u53d6"),(0,r.kt)("li",{parentName:"ul"},"@param appSecret \u5e94\u7528\u7684\u5bc6\u94a5\uff0c\u7528\u6237\u4e2d\u5fc3\u540e\u53f0\u83b7\u53d6"),(0,r.kt)("li",{parentName:"ul"},"@param deviceIdType \u5361\u5bc6\u6388\u6743id\u7c7b\u578b\uff0c1\u4ee3\u8868\u662f\u4f7f\u7528\u8bbe\u5907id\uff0c2\u4ee3\u8868\u662fecid\uff0c3.9.0\u65b0\u589e\u7684\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"@return {bool} true \u6210\u529f false \u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //\u5f00\u59cb\u518d\u8fd9\u91cc\u7f16\u5199\u4ee3\u7801\u4e86\uff01\uff01\n  logd("\u68c0\u67e5\u81ea\u52a8\u5316\u73af\u5883...")\n\n  logd("\u5f00\u59cb\u6267\u884c\u811a\u672c...")\n\n  let appId="sjfjvkpw"\n  let appSecret="ykjscxcs"\n  let cardNo="cbwolrftnw"\n\n\n  let inited= ecNetCard.netCardInit(appId,appSecret,"2")\n  logd("inited card => "+JSON.stringify(inited));\n  let bind = ecNetCard.netCardBind(cardNo)\n  logd("bind "+JSON.stringify(bind))\n  loge("bind {}",JSON.stringify(bind))\n  let bindResult=false;\n  if (bind != null && bind != undefined && bind["code"] == 0) {\n    loge("\u5361\u5bc6\u7ed1\u5b9a\u6210\u529f")\n    loge("\u5269\u4f59\u65f6\u95f4\uff1a"+bind[\'data\'][\'leftDays\']+"\u5929")\n    loge("\u6fc0\u6d3b\u65f6\u95f4\uff1a"+bind[\'data\'][\'startTime\'])\n    loge("\u8fc7\u671f\u65f6\u95f4\uff1a"+bind[\'data\'][\'expireTime\'])\n    bindResult=true;\n  }else{\n    if (bind==null || bind==undefined){\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25,\u65e0\u8fd4\u56de\u503c ")\n    }else{\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25: "+bind["msg"])\n    }\n  }\n\n  sleep(5000)\n  if (!bindResult){\n    return\n  }\n\n  // \u4e91\u7aef\u53d8\u91cf\u6f14\u793a\n  let user_ageJson = ecNetCard.netCardGetCloudVar("user_age")\n  //\u8fd4\u56de\u7684json\u6570\u636e\n  loge("user age=> "+JSON.stringify(user_ageJson))\n  //\u53d6\u5f97\u5bf9\u5e94\u7684\u503c\n  loge("user age\u7684\u5b57=> "+user_ageJson[\'data\'])\n\n  // \u66f4\u65b0user_age\u7684\u503c\n  let up =ecNetCard.netCardUpdateCloudVar("user_age","12222");\n  loge("netCardUpdateCloudVar => "+JSON.stringify(up))\n  if (up[\'code\']==0){\n    loge("netCardUpdateCloudVar \u66f4\u65b0\u6210\u529f")\n  }\n\n\n  // \u89e3\u7ed1\uff08\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u7528\uff09\n  // \u4e5f\u53ef\u4ee5\u5728\u540e\u53f0\u89e3\u7ed1\n  let unddd = ecNetCard.netCardUnbind(cardNo,"12323")\n  loge("netCardUnbind {}",JSON.stringify(unddd))\n  sleep(2000)\n\n\n  while (true){\n    sleep(1000)\n  }\n}\n\nmain();\n')),(0,r.kt)("h3",{id:"ecnetcardnetcardbind-\u7ed1\u5b9a\u5361\u5bc6"},"ecNetCard.netCardBind \u7ed1\u5b9a\u5361\u5bc6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[\u7f51\u7edc\u9a8c\u8bc1]","\u7ed1\u5b9a\u5361\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC iOS \u8131\u673a\u7248\u672c 3.1.0+"),(0,r.kt)("li",{parentName:"ul"},"@param cardNo \u5361\u53f7\uff0c\u7528\u6237\u4e2d\u5fc3\u540e\u53f0\u83b7\u53d6"),(0,r.kt)("li",{parentName:"ul"},'@return {null|JSON} \u8fd4\u56deJSON\u5bf9\u8c61,{"code":0,"msg":"",}')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function main() {\n  //\u5f00\u59cb\u518d\u8fd9\u91cc\u7f16\u5199\u4ee3\u7801\u4e86\uff01\uff01\n  logd("\u68c0\u67e5\u81ea\u52a8\u5316\u73af\u5883...")\n\n  logd("\u5f00\u59cb\u6267\u884c\u811a\u672c...")\n\n  let appId="sjfjvkpw"\n  let appSecret="ykjscxcs"\n  let cardNo="cbwolrftnw"\n\n\n  let inited= ecNetCard.netCardInit(appId,appSecret,"2")\n  logd("inited card => "+JSON.stringify(inited));\n  let bind = ecNetCard.netCardBind(cardNo)\n  logd("bind "+JSON.stringify(bind))\n  loge("bind {}",JSON.stringify(bind))\n  let bindResult=false;\n  if (bind != null && bind != undefined && bind["code"] == 0) {\n    loge("\u5361\u5bc6\u7ed1\u5b9a\u6210\u529f")\n    loge("\u5269\u4f59\u65f6\u95f4\uff1a"+bind[\'data\'][\'leftDays\']+"\u5929")\n    loge("\u6fc0\u6d3b\u65f6\u95f4\uff1a"+bind[\'data\'][\'startTime\'])\n    loge("\u8fc7\u671f\u65f6\u95f4\uff1a"+bind[\'data\'][\'expireTime\'])\n    bindResult=true;\n  }else{\n    if (bind==null || bind==undefined){\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25,\u65e0\u8fd4\u56de\u503c ")\n    }else{\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25: "+bind["msg"])\n    }\n  }\n\n  sleep(5000)\n  if (!bindResult){\n    return\n  }\n\n  // \u4e91\u7aef\u53d8\u91cf\u6f14\u793a\n  let user_ageJson = ecNetCard.netCardGetCloudVar("user_age")\n  //\u8fd4\u56de\u7684json\u6570\u636e\n  loge("user age=> "+JSON.stringify(user_ageJson))\n  //\u53d6\u5f97\u5bf9\u5e94\u7684\u503c\n  loge("user age\u7684\u5b57=> "+user_ageJson[\'data\'])\n\n  // \u66f4\u65b0user_age\u7684\u503c\n  let up =ecNetCard.netCardUpdateCloudVar("user_age","12222");\n  loge("netCardUpdateCloudVar => "+JSON.stringify(up))\n  if (up[\'code\']==0){\n    loge("netCardUpdateCloudVar \u66f4\u65b0\u6210\u529f")\n  }\n\n\n  // \u89e3\u7ed1\uff08\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u7528\uff09\n  // \u4e5f\u53ef\u4ee5\u5728\u540e\u53f0\u89e3\u7ed1\n  let unddd = ecNetCard.netCardUnbind(cardNo,"12323")\n  loge("netCardUnbind {}",JSON.stringify(unddd))\n  sleep(2000)\n\n\n  while (true){\n    sleep(1000)\n  }\n}\n\nmain();\n')),(0,r.kt)("h3",{id:"ecnetcardnetcardunbind-\u89e3\u7ed1\u5361\u5bc6"},"ecNetCard.netCardUnbind \u89e3\u7ed1\u5361\u5bc6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[\u7f51\u7edc\u9a8c\u8bc1]","\u89e3\u7ed1\u5361\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC iOS \u8131\u673a\u7248\u672c 3.1.0+"),(0,r.kt)("li",{parentName:"ul"},"@param cardNo \u5361\u53f7\uff0c\u7528\u6237\u4e2d\u5fc3\u540e\u53f0\u83b7\u53d6"),(0,r.kt)("li",{parentName:"ul"},"@param password \u89e3\u7ed1\u5bc6\u7801 \uff0c\u5982\u679c\u8bbe\u7f6e\u8fc7\u89e3\u7ed1\u5bc6\u7801 \u9700\u8981\u586b\u5199"),(0,r.kt)("li",{parentName:"ul"},'@return {null|JSON} \u8fd4\u56deJSON\u5bf9\u8c61,{"code":0,"msg":"",}')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //\u5f00\u59cb\u518d\u8fd9\u91cc\u7f16\u5199\u4ee3\u7801\u4e86\uff01\uff01\n  logd("\u68c0\u67e5\u81ea\u52a8\u5316\u73af\u5883...")\n\n  logd("\u5f00\u59cb\u6267\u884c\u811a\u672c...")\n\n  let appId="sjfjvkpw"\n  let appSecret="ykjscxcs"\n  let cardNo="cbwolrftnw"\n\n\n  let inited= ecNetCard.netCardInit(appId,appSecret,"2")\n  logd("inited card => "+JSON.stringify(inited));\n  let bind = ecNetCard.netCardBind(cardNo)\n  logd("bind "+JSON.stringify(bind))\n  loge("bind {}",JSON.stringify(bind))\n  let bindResult=false;\n  if (bind != null && bind != undefined && bind["code"] == 0) {\n    loge("\u5361\u5bc6\u7ed1\u5b9a\u6210\u529f")\n    loge("\u5269\u4f59\u65f6\u95f4\uff1a"+bind[\'data\'][\'leftDays\']+"\u5929")\n    loge("\u6fc0\u6d3b\u65f6\u95f4\uff1a"+bind[\'data\'][\'startTime\'])\n    loge("\u8fc7\u671f\u65f6\u95f4\uff1a"+bind[\'data\'][\'expireTime\'])\n    bindResult=true;\n  }else{\n    if (bind==null || bind==undefined){\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25,\u65e0\u8fd4\u56de\u503c ")\n    }else{\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25: "+bind["msg"])\n    }\n  }\n\n  sleep(5000)\n  if (!bindResult){\n    return\n  }\n\n  // \u4e91\u7aef\u53d8\u91cf\u6f14\u793a\n  let user_ageJson = ecNetCard.netCardGetCloudVar("user_age")\n  //\u8fd4\u56de\u7684json\u6570\u636e\n  loge("user age=> "+JSON.stringify(user_ageJson))\n  //\u53d6\u5f97\u5bf9\u5e94\u7684\u503c\n  loge("user age\u7684\u5b57=> "+user_ageJson[\'data\'])\n\n  // \u66f4\u65b0user_age\u7684\u503c\n  let up =ecNetCard.netCardUpdateCloudVar("user_age","12222");\n  loge("netCardUpdateCloudVar => "+JSON.stringify(up))\n  if (up[\'code\']==0){\n    loge("netCardUpdateCloudVar \u66f4\u65b0\u6210\u529f")\n  }\n\n\n  // \u89e3\u7ed1\uff08\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u7528\uff09\n  // \u4e5f\u53ef\u4ee5\u5728\u540e\u53f0\u89e3\u7ed1\n  let unddd = ecNetCard.netCardUnbind(cardNo,"12323")\n  loge("netCardUnbind {}",JSON.stringify(unddd))\n  sleep(2000)\n\n\n  while (true){\n    sleep(1000)\n  }\n}\n\nmain();\n')),(0,r.kt)("h2",{id:"\u4e91\u7aef\u53d8\u91cf"},"\u4e91\u7aef\u53d8\u91cf"),(0,r.kt)("h3",{id:"ecnetcardnetcardgetcloudvar-\u83b7\u53d6\u8fdc\u7a0b\u53d8\u91cf"},"ecNetCard.netCardGetCloudVar \u83b7\u53d6\u8fdc\u7a0b\u53d8\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[\u7f51\u7edc\u9a8c\u8bc1-\u8fdc\u7a0b\u53d8\u91cf]","\u83b7\u53d6\u8fdc\u7a0b\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4f7f\u7528EC\u7684\u5361\u5bc6\uff0c\u624d\u80fd\u4f7f\u7528\u8fdc\u7a0b\u53d8\u91cf\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC iOS \u8131\u673a\u7248\u672c 3.1.0+"),(0,r.kt)("li",{parentName:"ul"},"@param key \u8fdc\u7a0b\u53d8\u91cf\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},'@return {null|JSON} \u8fd4\u56deJSON\u5bf9\u8c61,{"code":0,"msg":""}')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //\u5f00\u59cb\u518d\u8fd9\u91cc\u7f16\u5199\u4ee3\u7801\u4e86\uff01\uff01\n  logd("\u68c0\u67e5\u81ea\u52a8\u5316\u73af\u5883...")\n\n  logd("\u5f00\u59cb\u6267\u884c\u811a\u672c...")\n\n  let appId="sjfjvkpw"\n  let appSecret="ykjscxcs"\n  let cardNo="cbwolrftnw"\n\n\n  let inited= ecNetCard.netCardInit(appId,appSecret,"2")\n  logd("inited card => "+JSON.stringify(inited));\n  let bind = ecNetCard.netCardBind(cardNo)\n  logd("bind "+JSON.stringify(bind))\n  loge("bind {}",JSON.stringify(bind))\n  let bindResult=false;\n  if (bind != null && bind != undefined && bind["code"] == 0) {\n    loge("\u5361\u5bc6\u7ed1\u5b9a\u6210\u529f")\n    loge("\u5269\u4f59\u65f6\u95f4\uff1a"+bind[\'data\'][\'leftDays\']+"\u5929")\n    loge("\u6fc0\u6d3b\u65f6\u95f4\uff1a"+bind[\'data\'][\'startTime\'])\n    loge("\u8fc7\u671f\u65f6\u95f4\uff1a"+bind[\'data\'][\'expireTime\'])\n    bindResult=true;\n  }else{\n    if (bind==null || bind==undefined){\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25,\u65e0\u8fd4\u56de\u503c ")\n    }else{\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25: "+bind["msg"])\n    }\n  }\n\n  sleep(5000)\n  if (!bindResult){\n    return\n  }\n\n  // \u4e91\u7aef\u53d8\u91cf\u6f14\u793a\n  let user_ageJson = ecNetCard.netCardGetCloudVar("user_age")\n  //\u8fd4\u56de\u7684json\u6570\u636e\n  loge("user age=> "+JSON.stringify(user_ageJson))\n  //\u53d6\u5f97\u5bf9\u5e94\u7684\u503c\n  loge("user age\u7684\u5b57=> "+user_ageJson[\'data\'])\n\n  // \u66f4\u65b0user_age\u7684\u503c\n  let up =ecNetCard.netCardUpdateCloudVar("user_age","12222");\n  loge("netCardUpdateCloudVar => "+JSON.stringify(up))\n  if (up[\'code\']==0){\n    loge("netCardUpdateCloudVar \u66f4\u65b0\u6210\u529f")\n  }\n\n\n  // \u89e3\u7ed1\uff08\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u7528\uff09\n  // \u4e5f\u53ef\u4ee5\u5728\u540e\u53f0\u89e3\u7ed1\n  let unddd = ecNetCard.netCardUnbind(cardNo,"12323")\n  loge("netCardUnbind {}",JSON.stringify(unddd))\n  sleep(2000)\n\n\n  while (true){\n    sleep(1000)\n  }\n}\n\nmain();\n')),(0,r.kt)("h3",{id:"ecnetcardnetcardupdatecloudvar-\u66f4\u65b0\u8fdc\u7a0b\u53d8\u91cf"},"ecNetCard.netCardUpdateCloudVar \u66f4\u65b0\u8fdc\u7a0b\u53d8\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[\u7f51\u7edc\u9a8c\u8bc1-\u8fdc\u7a0b\u53d8\u91cf]","\u66f4\u65b0\u8fdc\u7a0b\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u914d\u7248\u672c EC iOS \u8131\u673a\u7248\u672c 3.1.0+"),(0,r.kt)("li",{parentName:"ul"},"@param key \u8fdc\u7a0b\u53d8\u91cf\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"@param value \u8fdc\u7a0b\u53d8\u91cf\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},'@return {null|JSON} \u8fd4\u56deJSON\u5bf9\u8c61,{"code":0,"msg":""}')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  //\u5f00\u59cb\u518d\u8fd9\u91cc\u7f16\u5199\u4ee3\u7801\u4e86\uff01\uff01\n  logd("\u68c0\u67e5\u81ea\u52a8\u5316\u73af\u5883...")\n\n  logd("\u5f00\u59cb\u6267\u884c\u811a\u672c...")\n\n  let appId="sjfjvkpw"\n  let appSecret="ykjscxcs"\n  let cardNo="cbwolrftnw"\n\n\n  let inited= ecNetCard.netCardInit(appId,appSecret,"2")\n  logd("inited card => "+JSON.stringify(inited));\n  let bind = ecNetCard.netCardBind(cardNo)\n  logd("bind "+JSON.stringify(bind))\n  loge("bind {}",JSON.stringify(bind))\n  let bindResult=false;\n  if (bind != null && bind != undefined && bind["code"] == 0) {\n    loge("\u5361\u5bc6\u7ed1\u5b9a\u6210\u529f")\n    loge("\u5269\u4f59\u65f6\u95f4\uff1a"+bind[\'data\'][\'leftDays\']+"\u5929")\n    loge("\u6fc0\u6d3b\u65f6\u95f4\uff1a"+bind[\'data\'][\'startTime\'])\n    loge("\u8fc7\u671f\u65f6\u95f4\uff1a"+bind[\'data\'][\'expireTime\'])\n    bindResult=true;\n  }else{\n    if (bind==null || bind==undefined){\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25,\u65e0\u8fd4\u56de\u503c ")\n    }else{\n      loge("\u5361\u5bc6\u7ed1\u5b9a\u5931\u8d25: "+bind["msg"])\n    }\n  }\n\n  sleep(5000)\n  if (!bindResult){\n    return\n  }\n\n  // \u4e91\u7aef\u53d8\u91cf\u6f14\u793a\n  let user_ageJson = ecNetCard.netCardGetCloudVar("user_age")\n  //\u8fd4\u56de\u7684json\u6570\u636e\n  loge("user age=> "+JSON.stringify(user_ageJson))\n  //\u53d6\u5f97\u5bf9\u5e94\u7684\u503c\n  loge("user age\u7684\u5b57=> "+user_ageJson[\'data\'])\n\n  // \u66f4\u65b0user_age\u7684\u503c\n  let up =ecNetCard.netCardUpdateCloudVar("user_age","12222");\n  loge("netCardUpdateCloudVar => "+JSON.stringify(up))\n  if (up[\'code\']==0){\n    loge("netCardUpdateCloudVar \u66f4\u65b0\u6210\u529f")\n  }\n\n\n  // \u89e3\u7ed1\uff08\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u7528\uff09\n  // \u4e5f\u53ef\u4ee5\u5728\u540e\u53f0\u89e3\u7ed1\n  let unddd = ecNetCard.netCardUnbind(cardNo,"12323")\n  loge("netCardUnbind {}",JSON.stringify(unddd))\n  sleep(2000)\n\n\n  while (true){\n    sleep(1000)\n  }\n}\n\nmain();\n')))}s.isMDXComponent=!0}}]);