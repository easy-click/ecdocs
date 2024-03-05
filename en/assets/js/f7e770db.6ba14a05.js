"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[3840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),i=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(n),k=a,m=c["".concat(g,".").concat(k)]||c[k]||p[k]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={title:"Storage\u5b58\u50a8\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570"]},o=void 0,s={unversionedId:"zh-cn/funcs/storage-api",id:"zh-cn/funcs/storage-api",title:"Storage\u5b58\u50a8\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570",source:"@site/docs/zh-cn/funcs/storage-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/storage-api",permalink:"/en/docs/zh-cn/funcs/storage-api",draft:!1,tags:[],version:"current",frontMatter:{title:"Storage\u5b58\u50a8\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Storage\u5b58\u50a8\u51fd\u6570"]},sidebar:"docs",previous:{title:"\u6587\u4ef6\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/file-api"},next:{title:"\u7f51\u7edc\u51fd\u6570",permalink:"/en/docs/zh-cn/funcs/http-api"}},g={},i=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61",id:"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61",level:2},{value:"storages.create \u521b\u5efa\u5b58\u50a8",id:"storagescreate-\u521b\u5efa\u5b58\u50a8",level:3},{value:"\u5b58\u50a8\u6570\u636e",id:"\u5b58\u50a8\u6570\u636e",level:2},{value:"storage.keys \u6240\u6709key\u83b7\u53d6",id:"storagekeys-\u6240\u6709key\u83b7\u53d6",level:3},{value:"storage.all \u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c",id:"storageall-\u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c",level:3},{value:"storage.putString \u5b58\u50a8\u5b57\u7b26\u4e32",id:"storageputstring-\u5b58\u50a8\u5b57\u7b26\u4e32",level:3},{value:"storage.putInt \u5b58\u50a8\u6574\u578b\u6570\u636e",id:"storageputint-\u5b58\u50a8\u6574\u578b\u6570\u636e",level:3},{value:"storage.putBoolean \u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e",id:"storageputboolean-\u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e",level:3},{value:"storage.putEncrypt \u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32",id:"storageputencrypt-\u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32",level:3},{value:"storage.getBoolean \u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e",id:"storagegetboolean-\u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e",level:3},{value:"storage.getDecryptString \u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32",id:"storagegetdecryptstring-\u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32",level:3},{value:"storage.remove \u79fb\u51fakey\u5bf9\u5e94\u7684\u503c",id:"storageremove-\u79fb\u51fakey\u5bf9\u5e94\u7684\u503c",level:3}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u5b58\u50a8\u76f8\u5173\u6570\u636e\uff0ckey-value\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},"\u5de5\u5177\u7c7b\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662f storages\uff0c\u4f8b\u5982 storages.create()\u8fd9\u6837\u8c03\u7528")),(0,a.kt)("h2",{id:"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61"},"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61"),(0,a.kt)("h3",{id:"storagescreate-\u521b\u5efa\u5b58\u50a8"},"storages.create \u521b\u5efa\u5b58\u50a8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5b58\u50a8\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,a.kt)("li",{parentName:"ul"},"@param name \u5b58\u50a8\u5bf9\u8c61\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"@return {StorageApiWrapper} \u5b58\u50a8\u5bf9\u8c61\u5b9e\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n}\n\nmain();\n')),(0,a.kt)("h2",{id:"\u5b58\u50a8\u6570\u636e"},"\u5b58\u50a8\u6570\u636e"),(0,a.kt)("h3",{id:"storagekeys-\u6240\u6709key\u83b7\u53d6"},"storage.keys \u6240\u6709key\u83b7\u53d6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709key\u83b7\u53d6"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.16.0+)"),(0,a.kt)("li",{parentName:"ul"},"@return {string} JSON\u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putString("key", "sdfasfd");\n  logd(r);\n  logd(storage.keys());\n}\n\nmain();\n')),(0,a.kt)("h3",{id:"storageall-\u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c"},"storage.all \u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6240\u6709\u7684key\u548c\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.16.0+)"),(0,a.kt)("li",{parentName:"ul"},"@return {string} JSON\u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putString("key", "sdfasfd");\n  logd(r);\n  logd(storage.all());\n}\n\nmain();\n')),(0,a.kt)("h3",{id:"storageputstring-\u5b58\u50a8\u5b57\u7b26\u4e32"},"storage.putString \u5b58\u50a8\u5b57\u7b26\u4e32"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5b57\u7b26\u4e32"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,a.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,a.kt)("li",{parentName:"ul"},"@param value \u5b57\u7b26\u4e32"),(0,a.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putString("key", "sdfasfd");\n  logd(r);\n  //\u83b7\u53d6\u6570\u636e,\u6682\u65f6\u6709bug,\u9700 +""\n  logd(storage.getString("key", "") + "");\n}\n\nmain();\n')),(0,a.kt)("h3",{id:"storageputint-\u5b58\u50a8\u6574\u578b\u6570\u636e"},"storage.putInt \u5b58\u50a8\u6574\u578b\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6574\u578b\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,a.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,a.kt)("li",{parentName:"ul"},"@param value \u6574\u578b\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putInt("key", 1);\n  logd(r);\n  //\u83b7\u53d6\u6570\u636e\n  logd(storage.getInt("key", 0));\n}\n\nmain();\n')),(0,a.kt)("h3",{id:"storageputboolean-\u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e"},"storage.putBoolean \u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5e03\u5c14\u578b\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,a.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,a.kt)("li",{parentName:"ul"},"@param value \u5e03\u5c14\u578b\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putBoolean("key", true);\n  logd(r);\n  //\u83b7\u53d6\u6570\u636e\n  logd(storage.getBoolean("key", false));\n}\n\nmain();\n`\n\n### storage.putFloat \u5b58\u50a8\u6d6e\u70b9\u578b\u6570\u636e\n * \u5b58\u50a8\u6d6e\u70b9\u578b\u6570\u636e\n * \u9002\u7528\u7248\u672c(EC 5.15.0+)\n * @param key \u952e\n * @param value \u6d6e\u70b9\u578b\u6570\u636e\n * @return {bool} true\u6210\u529f false \u5931\u8d25\n\n')),(0,a.kt)("p",null,"javascript"),(0,a.kt)("p",null,'function main() {\nlet storage = storages.create("123");\nlogd(storage);\n//\u5b58\u50a8\u6570\u636e\nlet r = storage.putFloat("key", 1.0);\nlogd(r);\n//\u83b7\u53d6\u6570\u636e\nlogd(storage.getFloat("key", 0));\n}'),(0,a.kt)("p",null,"main();\n`"),(0,a.kt)("h3",{id:"storageputencrypt-\u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32"},"storage.putEncrypt \u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5e76\u52a0\u5bc6\u5b57\u7b26\u4e32\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,a.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,a.kt)("li",{parentName:"ul"},"@param value \u5b57\u7b26\u4e32\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'javascript\n\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putEncrypt("key", "3232");\n  logd(r);\n  //\u83b7\u53d6\u6570\u636e\n  logd(storage.getDecryptString("key"));\n}\n\nmain();\n`\n\n\n\n\n## \u83b7\u53d6\u6570\u636e\n\n### storage.getString \u83b7\u53d6\u5b57\u7b26\u4e32\u6570\u636e\n * \u83b7\u53d6\u5b57\u7b26\u4e32\u6570\u636e\n * \u9002\u7528\u7248\u672c(EC 5.15.0+)\n * @param key \u952e\n * @return {string} \u5b57\u7b26\u4e32\n\n')),(0,a.kt)("p",null,"javascript"),(0,a.kt)("p",null,'function main() {\nlet storage = storages.create("123");\nlogd(storage);\n//\u5b58\u50a8\u6570\u636e\nlet r = storage.putString("key", "sdfasfd");\nlogd(r);\n//\u83b7\u53d6\u6570\u636e,\u6682\u65f6\u6709bug,\u9700 +""\nlogd(storage.getString("key", "") + "");\n}'),(0,a.kt)("p",null,"main();"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n### storage.getInt \u83b7\u53d6\u6574\u578b\u6570\u636e\n\n* \u83b7\u53d6\u6574\u578b\u6570\u636e\n* \u9002\u7528\u7248\u672c(EC 5.15.0+)\n* @param key \u952e\n* @return {string} \u6574\u578b\n\n```javascript\n\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putInt("key", 1);\n  logd(r);\n  //\u83b7\u53d6\u6570\u636e\n  logd(storage.getInt("key", 0));\n}\n\nmain();\n')),(0,a.kt)("h3",{id:"storagegetboolean-\u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e"},"storage.getBoolean \u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5e03\u5c14\u578b\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,a.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,a.kt)("li",{parentName:"ul"},"@return {string} \u5e03\u5c14\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putBoolean("key", true);\n  logd(r);\n  //\u83b7\u53d6\u6570\u636e\n  logd(storage.getBoolean("key", false));\n}\n\nmain();\n`\n\n### storage.getFloat \u83b7\u53d6\u6d6e\u70b9\u578b\u6570\u636e\n * \u83b7\u53d6\u6d6e\u70b9\u578b\u6570\u636e\n * \u9002\u7528\u7248\u672c(EC 5.15.0+)\n * @param key \u952e\n * @return {string} \u6d6e\u70b9\u578b\n\n')),(0,a.kt)("p",null,"javascript"),(0,a.kt)("p",null,'function main() {\nlet storage = storages.create("123");\nlogd(storage);\n//\u5b58\u50a8\u6570\u636e\nlet r = storage.putFloat("key", 1.0);\nlogd(r);\n//\u83b7\u53d6\u6570\u636e\nlogd(storage.getFloat("key", 0));\n}'),(0,a.kt)("p",null,"main();\n`"),(0,a.kt)("h3",{id:"storagegetdecryptstring-\u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32"},"storage.getDecryptString \u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u89e3\u5bc6\u5b57\u7b26\u4e32\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,a.kt)("li",{parentName:"ul"},"@param key \u952e"),(0,a.kt)("li",{parentName:"ul"},"@return {string} \u89e3\u5bc6\u540e\u7684\u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'javascript\n\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putEncrypt("key", "3232");\n  logd(r);\n  //\u83b7\u53d6\u6570\u636e\n  logd(storage.getDecryptString("key"));\n}\n\nmain();\n`\n\n## \u6e05\u7406\u548c\u5176\u4ed6\n### storage.clear \u6e05\u7a7a\u5b58\u50a8\n * \u6e05\u7a7a\u5b58\u50a8\n * \u9002\u7528\u7248\u672c(EC 5.15.0+)\n * @return {bool} true\u6210\u529f false \u5931\u8d25\n\n')),(0,a.kt)("p",null,"javascript"),(0,a.kt)("p",null,'function main() {\nlet storage = storages.create("123");\nlogd(storage);\n//\u5b58\u50a8\u6570\u636e\nlet r = storage.putEncrypt("key", "3232");\nlogd(r);\n//\u83b7\u53d6\u6570\u636e\nlogd(storage.getDecryptString("key"));\nlogd(storage.clear());\nlogd(storage.getDecryptString("key"));\n}'),(0,a.kt)("p",null,"main();\n`"),(0,a.kt)("h3",{id:"storageremove-\u79fb\u51fakey\u5bf9\u5e94\u7684\u503c"},"storage.remove \u79fb\u51fakey\u5bf9\u5e94\u7684\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u79fb\u51fakey\u5bf9\u5e94\u7684\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u7248\u672c(EC 5.15.0+)"),(0,a.kt)("li",{parentName:"ul"},"@return {bool} true\u6210\u529f false \u5931\u8d25")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'javascript\n\nfunction main() {\n  let storage = storages.create("123");\n  logd(storage);\n  //\u5b58\u50a8\u6570\u636e\n  let r = storage.putEncrypt("key", "3232");\n  logd(r);\n  //\u83b7\u53d6\u6570\u636e\n  logd(storage.getDecryptString("key"));\n  logd(storage.remove("key"));\n  logd(storage.getDecryptString("key"));\n  main();\n  `\n\n\n### storage.contains \u662f\u5426\u5305\u542b\u67d0\u4e2akey\n * \u662f\u5426\u5305\u542b\u67d0\u4e2akey\n * \u9002\u7528\u7248\u672c(EC 5.15.0+)\n * @return {bool} true\u6210\u529f false \u5931\u8d25\n\n')),(0,a.kt)("p",null,"  javascript"),(0,a.kt)("p",null,'  function main() {\nlet storage = storages.create("123");\nlogd(storage);\n//\u5b58\u50a8\u6570\u636e\nlet r = storage.putEncrypt("key", "3232");\nlogd(r);\n//\u83b7\u53d6\u6570\u636e\nlogd(storage.getDecryptString("key"));\nlogd(storage.contains("key"));\nlogd(storage.getDecryptString("key"));\nmain();'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}p.isMDXComponent=!0}}]);