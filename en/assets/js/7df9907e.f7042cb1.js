"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[48],{3905:(e,l,t)=>{t.d(l,{Zo:()=>i,kt:()=>d});var a=t(7294);function n(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){n(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function o(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var l=a.useContext(s),t=l;return e&&(t="function"==typeof e?e(l):p(p({},l),e)),t},i=function(e){var l=u(e.components);return a.createElement(s.Provider,{value:l},e.children)},c={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},m=a.forwardRef((function(e,l){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(k,p(p({ref:l},i),{},{components:t})):a.createElement(k,p({ref:l},i))}));function d(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var r=t.length,p=new Array(r);p[0]=m;var o={};for(var s in l)hasOwnProperty.call(l,s)&&(o[s]=l[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var u=2;u<r;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7673:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(7462),n=(t(7294),t(3905));const r={title:"Shell\u547d\u4ee4\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Shell\u547d\u4ee4\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Shell\u547d\u4ee4\u51fd\u6570"]},p=void 0,o={unversionedId:"zh-cn/funcs/shell-api",id:"zh-cn/funcs/shell-api",title:"Shell\u547d\u4ee4\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Shell\u547d\u4ee4\u51fd\u6570",source:"@site/docs/zh-cn/funcs/shell-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/shell-api",permalink:"/en/docs/zh-cn/funcs/shell-api",draft:!1,tags:[],version:"current",frontMatter:{title:"Shell\u547d\u4ee4\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Shell\u547d\u4ee4\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Shell\u547d\u4ee4\u51fd\u6570"]},sidebar:"docs",previous:{title:"\u5de5\u5177\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/utils-api"},next:{title:"Sqlite\u547d\u4ee4\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/sqlite-api"}},s={},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"shell.installApp \u5b89\u88c5APP",id:"shellinstallapp-\u5b89\u88c5app",level:2},{value:"shell.uninstallApp \u5378\u8f7dAPP",id:"shelluninstallapp-\u5378\u8f7dapp",level:2},{value:"shell.stopApp \u505c\u6b62APP",id:"shellstopapp-\u505c\u6b62app",level:2},{value:"shell.execCommand  \u6267\u884cShell\u547d\u4ee4",id:"shellexeccommand--\u6267\u884cshell\u547d\u4ee4",level:2},{value:"shell.sudo \u6267\u884cROOT\u4e0b\u547d\u4ee4",id:"shellsudo-\u6267\u884croot\u4e0b\u547d\u4ee4",level:2},{value:"shell.su \u8bf7\u6c42\u6388\u4e88root",id:"shellsu-\u8bf7\u6c42\u6388\u4e88root",level:2},{value:"shell.execAgentCommand \u4ee3\u7406\u6a21\u5f0f\u4e0b\u6267\u884cshell",id:"shellexecagentcommand-\u4ee3\u7406\u6a21\u5f0f\u4e0b\u6267\u884cshell",level:2},{value:"shell.execAgentCommandEx \u4ee3\u7406\u6a21\u5f0f\u4e0b\u6267\u884cshell",id:"shellexecagentcommandex-\u4ee3\u7406\u6a21\u5f0f\u4e0b\u6267\u884cshell",level:2},{value:"shell.addSuBin \u65b0\u589eroot\u547d\u4ee4",id:"shelladdsubin-\u65b0\u589eroot\u547d\u4ee4",level:2}],i={toc:u};function c(e){let{components:l,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,t,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u6a21\u5f0f\u4e0b\u624d\u80fd\u4f7f\u7528\u8be5\u51fd\u6570\uff0c\u7528\u6237\u6267\u884cshell\u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"shell\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662fshell\uff0c\u4f8b\u5982 shell.installApp()\u8fd9\u6837\u8c03\u7528")),(0,n.kt)("h2",{id:"shellinstallapp-\u5b89\u88c5app"},"shell.installApp \u5b89\u88c5APP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 apk"),(0,n.kt)("li",{parentName:"ul"},"@param path \u6587\u4ef6\u8def\u5f84"),(0,n.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u5b89\u88c5\u6210\u529f\uff0cfalse \u4ee3\u8868\u5b89\u88c5\u5931\u8d25")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = shell.installApp("/sdcard/app.apk");\n}\nmain();\n'))),(0,n.kt)("h2",{id:"shelluninstallapp-\u5378\u8f7dapp"},"shell.uninstallApp \u5378\u8f7dAPP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5378\u8f7d\u5e94\u7528\u7a0b\u5e8f"),(0,n.kt)("li",{parentName:"ul"},"@param packageName \u5e94\u7528\u7a0b\u5e8f\u7684\u5305\u540d"),(0,n.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u5378\u8f7d\u6210\u529f\uff0cfalse \u4ee3\u8868\u5378\u8f7d\u5931\u8d25")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = shell.uninstallApp("com.xx");\n}\nmain();\n'))),(0,n.kt)("h2",{id:"shellstopapp-\u505c\u6b62app"},"shell.stopApp \u505c\u6b62APP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u505c\u6b62\u6b63\u5728\u6267\u884c\u7684\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"@param packageName \u5e94\u7528\u7a0b\u5e8f\u7684\u5305\u540d"),(0,n.kt)("li",{parentName:"ul"},"@return true \u4ee3\u8868\u6210\u529f\uff0cfalse \u4ee3\u8868\u5931\u8d25")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = shell.stopApp("com.xx");\n}\nmain();\n'))),(0,n.kt)("h2",{id:"shellexeccommand--\u6267\u884cshell\u547d\u4ee4"},"shell.execCommand  \u6267\u884cShell\u547d\u4ee4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6267\u884cShell\u547d\u4ee4\uff0c\u4f1a\u81ea\u52a8\u533a\u5206\u4ee3\u7406\u8fd8\u662froot"),(0,n.kt)("li",{parentName:"ul"},"@param command \u547d\u4ee4\uff0c\u4f8b\u5982\u5b89\u88c5App \uff1a pm install /sdcard/app.apk"),(0,n.kt)("li",{parentName:"ul"},"@return \u547d\u4ee4\u6267\u884c\u540e\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u7ed3\u679c")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = shell.execCommand("pm install /sdcard/app.apk");\n}\nmain();\n'))),(0,n.kt)("h2",{id:"shellsudo-\u6267\u884croot\u4e0b\u547d\u4ee4"},"shell.sudo \u6267\u884cROOT\u4e0b\u547d\u4ee4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6267\u884croot\u6a21\u5f0f\u4e0b\uff0c\u76f8\u5173\u7684\u547d\u4ee4\uff0c\u9700\u8981\u6709root\u6743\u9650"),(0,n.kt)("li",{parentName:"ul"},"@param command \u547d\u4ee4\uff0c\u4f8b\u5982\u5b89\u88c5App \uff1a pm install /sdcard/app.apk"),(0,n.kt)("li",{parentName:"ul"},"@return \u547d\u4ee4\u6267\u884c\u540e\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u7ed3\u679c")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = shell.sudo("pm install /sdcard/app.apk");\n}\nmain();\n'))),(0,n.kt)("h2",{id:"shellsu-\u8bf7\u6c42\u6388\u4e88root"},"shell.su \u8bf7\u6c42\u6388\u4e88root"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u6388\u4e88root\u6743\u9650"),(0,n.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 6.0.0+)"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883: \u65e0\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},"@return {boolean} true\u4ee3\u8868\u6709root\u6743\u9650")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"    \nfunction main(){\n    var result = shell.su();\n}\nmain();\n"))),(0,n.kt)("h2",{id:"shellexecagentcommand-\u4ee3\u7406\u6a21\u5f0f\u4e0b\u6267\u884cshell"},"shell.execAgentCommand \u4ee3\u7406\u6a21\u5f0f\u4e0b\u6267\u884cshell"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6267\u884cshell\u547d\u4ee4\u3002\u9700\u8981\u542f\u52a8\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"@param command \u547d\u4ee4\uff0c\u4f8b\u5982\u5b89\u88c5App \uff1a pm install /sdcard/app.apk"),(0,n.kt)("li",{parentName:"ul"},"@return \u547d\u4ee4\u6267\u884c\u540e\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u7ed3\u679c")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'    \nfunction main(){\n    var result = shell.execAgentCommand("pm install /sdcard/app.apk");\n}\nmain();\n'))),(0,n.kt)("h2",{id:"shellexecagentcommandex-\u4ee3\u7406\u6a21\u5f0f\u4e0b\u6267\u884cshell"},"shell.execAgentCommandEx \u4ee3\u7406\u6a21\u5f0f\u4e0b\u6267\u884cshell"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6267\u884cshell\u547d\u4ee4\uff0c\u5305\u542b\u6b63\u5e38\u548c\u9519\u8bef\u7ed3\u679c\uff0c\u8fd4\u56de\u7684\u662fJSON\u6570\u7ec4\uff0c\u81ea\u5df1\u5224\u65ad\u6b63\u786e\u8fd8\u662f\u9519\u8bef"),(0,n.kt)("li",{parentName:"ul"},"\u9002\u5408EC 7.6.0+ \u7248\u672c"),(0,n.kt)("li",{parentName:"ul"},"@param command \u547d\u4ee4\u5b57\u7b26\u4e32"),(0,n.kt)("li",{parentName:"ul"},"@return JSON\u6570\u7ec4 shell\u7ed3\u679c")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'function main(){\n    startEnv()\n\n  let cmd="ls /sdcard/"\n  let d= agentEvent.execShellCommandEx(cmd)\n  if (d) {\n      for (var i = 0; i < d.length; i++) {\n          var value=d[i];\n          logd(value);\n\n      }\n  }\n}\nmain();\n'))),(0,n.kt)("h2",{id:"shelladdsubin-\u65b0\u589eroot\u547d\u4ee4"},"shell.addSuBin \u65b0\u589eroot\u547d\u4ee4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589eroot\u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883: \u65e0\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},"@param cmd \u65b0\u7684\u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"@return {boolean} true")),(0,n.kt)("blockquote",null,(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'function main(){\n  shell.addSuBin("222ddd")\n  //\u589e\u52a0\u5b8c\u6210\u540e \u4f7f\u7528su\u8bf7\u6c42\u4e00\u4e0broot\u6388\u6743\n var result = shell.su();\n}\nmain();\n'))),(0,n.kt)("h2",{id:""}))}c.isMDXComponent=!0}}]);