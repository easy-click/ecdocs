"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[5790],{4111:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var l=i(4848),a=i(8453);const s={title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570"]},r=void 0,d={id:"zh-cn/funcs/file-api",title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570",source:"@site/docs/zh-cn/funcs/file-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/file-api",permalink:"/docs/zh-cn/funcs/file-api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u6587\u4ef6\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u6587\u4ef6\u51fd\u6570"]},sidebar:"docs",previous:{title:"\u60ac\u6d6e\u7a97\u51fd\u6570",permalink:"/docs/zh-cn/funcs/floaty-api"},next:{title:"Storage\u5b58\u50a8\u51fd\u6570",permalink:"/docs/zh-cn/funcs/storage-api"}},t={},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"file.readFile \u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32",id:"filereadfile-\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32",level:2},{value:"file.deleteLine \u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c",id:"filedeleteline-\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c",level:2},{value:"file.listDir \u5217\u51fa\u6240\u6709\u6587\u4ef6",id:"filelistdir-\u5217\u51fa\u6240\u6709\u6587\u4ef6",level:2},{value:"file.writeFile \u5199\u5165\u6587\u4ef6",id:"filewritefile-\u5199\u5165\u6587\u4ef6",level:2},{value:"file.create \u521b\u5efa",id:"filecreate-\u521b\u5efa",level:2},{value:"file.mkdirs \u521b\u5efa\u6587\u4ef6\u5939",id:"filemkdirs-\u521b\u5efa\u6587\u4ef6\u5939",level:2},{value:"file.readAssets \u8bfb\u53d6assets",id:"filereadassets-\u8bfb\u53d6assets",level:2},{value:"file.deleteAllFile \u5220\u9664",id:"filedeleteallfile-\u5220\u9664",level:2},{value:"file.appendLine \u8ffd\u52a0\u5b57\u7b26\u4e32",id:"fileappendline-\u8ffd\u52a0\u5b57\u7b26\u4e32",level:2},{value:"file.readLine \u8bfb\u53d6\u4e00\u884c",id:"filereadline-\u8bfb\u53d6\u4e00\u884c",level:2},{value:"file.readAllLines \u8bfb\u53d6\u6240\u6709\u884c",id:"filereadalllines-\u8bfb\u53d6\u6240\u6709\u884c",level:2},{value:"file.exists \u662f\u5426\u5b58\u5728",id:"fileexists-\u662f\u5426\u5b58\u5728",level:2},{value:"file.copy \u6587\u4ef6\u590d\u5236",id:"filecopy-\u6587\u4ef6\u590d\u5236",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6587\u4ef6\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u6587\u4ef6\u4fe1\u606f\u76f8\u5173\u8054"}),"\n",(0,l.jsx)(n.li,{children:"\u6587\u4ef6\u6a21\u5757\u7684\u5bf9\u8c61\u524d\u7f00\u662ffile\uff0c\u4f8b\u5982 file.readFile()\u8fd9\u6837\u8c03\u7528"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"filereadfile-\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32",children:"file.readFile \u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5c06\u6587\u4ef6\u8bfb\u53d6\u4e3a\u5b57\u7b26\u4e32"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u6587\u4ef6\u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@return \u5b57\u7b26\u4e32"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var data = file.readFile("/sdcard/test.txt");\n  toast(data);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filedeleteline-\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c",children:"file.deleteLine \u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5220\u9664\u6587\u4ef6\u67d0\u4e00\u884c\u6216\u8005\u6839\u636e\u5305\u542b\u6761\u4ef6\u5220\u9664"}),"\n",(0,l.jsx)(n.li,{children:"\u8fd0\u884c\u73af\u5883: \u65e0\u9650\u5236"}),"\n",(0,l.jsx)(n.li,{children:"\u517c\u5bb9\u7248\u672c: Android 4.4 \u4ee5\u4e0a"}),"\n",(0,l.jsx)(n.li,{}),"\n",(0,l.jsx)(n.li,{children:"@param path \u6587\u4ef6\u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@param line \u884c\u6570\uff0c\u5982\u679c\u662f-1 \u4ee3\u8868\u8fd9\u4e2a\u6761\u4ef6\u4e0d\u751f\u6548"}),"\n",(0,l.jsx)(n.li,{children:"@param contains \u5305\u542b\u67d0\u4e2a\u5b57\u7b26\u4e32\u5c31\u5220\u9664\uff0c\u5982\u679c\u4e3anull\u4ee3\u8868\u8fd9\u4e2a\u6761\u4ef6\u4e0d\u751f\u6548"}),"\n",(0,l.jsx)(n.li,{}),"\n",(0,l.jsxs)(n.li,{children:["@return ",(0,l.jsx)(n.code,{children:"{bool}"})," true \u6210\u529f false \u5931\u8d25"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  //\u5220\u9664\u5305\u542b \u65f6\u95f4 \u5b57\u7b26\u4e32\u7684\u884c\n  let r = file.deleteLine("/sdcard/a.txt", -1, "\u65f6\u95f4");\n  logd("r " + r);\n  //\u5220\u9664\u7b2c3\u884c\n  r = file.deleteLine("/sdcard/a.txt", 3, null);\n  logd("r " + r);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filelistdir-\u5217\u51fa\u6240\u6709\u6587\u4ef6",children:"file.listDir \u5217\u51fa\u6240\u6709\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5217\u51fa\u6587\u4ef6\u4e0b\u7684\u6240\u6709\u6587\u4ef6"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@return \u8def\u5f84\u5b57\u7b26\u4e32\u6570\u7ec4"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var data = file.listDir("/sdcard/");\n  for (var i = 0; i < data.length; i++) {\n    logd("path " + data[i]);\n  }\n\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filewritefile-\u5199\u5165\u6587\u4ef6",children:"file.writeFile \u5199\u5165\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5c06\u5b57\u7b26\u4e32\u5b58\u50a8\u5230\u6587\u4ef6\u4e2d"}),"\n",(0,l.jsx)(n.li,{children:"@param data \u5b57\u7b26\u4e32 \u6570\u636e"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u6587\u4ef6\u8def\u5f84"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var data = "Test";\n  file.writeFile(data, "/sdcard/test.txt");\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filecreate-\u521b\u5efa",children:"file.create \u521b\u5efa"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u6587\u4ef6\u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u521b\u5efa\u6210\u529f"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var create = file.create("/sdcard/test.txt");\n  toast(create);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filemkdirs-\u521b\u5efa\u6587\u4ef6\u5939",children:"file.mkdirs \u521b\u5efa\u6587\u4ef6\u5939"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u521b\u5efa\u6587\u4ef6\u5939"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var t = file.mkdirs("/sdcard/testdir/");\n  toast(t);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filereadassets-\u8bfb\u53d6assets",children:"file.readAssets \u8bfb\u53d6assets"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4eceAPK\u7684assets\u6587\u4ef6\u5939\u4e2d\u8bfb\u53d6\u6570\u636e\u4e3a\u5b57\u7b26\u4e32"}),"\n",(0,l.jsx)(n.li,{children:"@param path assets\u6587\u4ef6\u5939\u4e2d\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u4f8b\u5982 data/a.txt"}),"\n",(0,l.jsx)(n.li,{children:"@return \u5b57\u7b26\u4e32"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var data = file.readAssets("data/test.txt");\n  toast(data);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filedeleteallfile-\u5220\u9664",children:"file.deleteAllFile \u5220\u9664"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5220\u9664\u6240\u6709\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u6587\u4ef6\u6216\u8005\u6587\u4ef6\u8def\u5f84"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  file.deleteAllFile("data/test.txt");\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"fileappendline-\u8ffd\u52a0\u5b57\u7b26\u4e32",children:"file.appendLine \u8ffd\u52a0\u5b57\u7b26\u4e32"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5199\u5165\u4e00\u884c\u5230\u6587\u4ef6\u4e2d,\u8ffd\u52a0\u6a21\u5f0f"}),"\n",(0,l.jsx)(n.li,{children:"@param data \u884c\u6570\u636e"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u6587\u4ef6\u6216\u8005\u6587\u4ef6\u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@return \u5e03\u5c14\u578b true\u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var data = "sss";\n  var t = file.appendLine(data, "/sdcard/test.txt");\n  toast(t);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filereadline-\u8bfb\u53d6\u4e00\u884c",children:"file.readLine \u8bfb\u53d6\u4e00\u884c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8bfb\u53d6\u4e00\u884c\u6570\u636e\uff0c\u5982\u679c\u884c\u53f7\u4e0d\u5bf9\uff0c\u8fd4\u56de\u7684\u662f\u7a7a"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@param lineNo \u884c\u53f7"}),"\n",(0,l.jsx)(n.li,{children:"@return \u5b57\u7b26\u4e32 \u8fd4\u56de\u4e00\u884c\u5b57\u7b26\u4e32"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var t = file.readLine("/sdcard/test.txt", 1);\n  toast(t);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filereadalllines-\u8bfb\u53d6\u6240\u6709\u884c",children:"file.readAllLines \u8bfb\u53d6\u6240\u6709\u884c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8bfb\u53d6\u6240\u6709\u6570\u636e"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@return \u5b57\u7b26\u4e32\u6570\u7ec4|null"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var t = file.readAllLines("/sdcard/test.txt");\n  toast(t);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"fileexists-\u662f\u5426\u5b58\u5728",children:"file.exists \u662f\u5426\u5b58\u5728"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939\u662f\u5426\u5b58\u5728"}),"\n",(0,l.jsx)(n.li,{children:"@param path \u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f\uff0cfalse\u4ee3\u8868\u5931\u8d25"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var t = file.exists("/sdcard/testdir/");\n  toast(t);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"filecopy-\u6587\u4ef6\u590d\u5236",children:"file.copy \u6587\u4ef6\u590d\u5236"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u590d\u5236\u6587\u4ef6"}),"\n",(0,l.jsx)(n.li,{}),"\n",(0,l.jsx)(n.li,{children:"@param src \u6e90\u6587\u4ef6\u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@param dest \u76ee\u6807\u6587\u4ef6\u8def\u5f84"}),"\n",(0,l.jsx)(n.li,{children:"@return \u5e03\u5c14\u578b true \u4ee3\u8868\u6210\u529f"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\nfunction main() {\n  var t = file.copy("/sdcard/a.png", "/sdcard/b.png");\n  toast(t);\n}\n\nmain();\n'})})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var l=i(6540);const a={},s=l.createContext(a);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);