"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[1909],{2263:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var l=i(4848),d=i(8453);const o={title:"\u8282\u70b9\u51fd\u6570-\u624b\u673a\u5185\u6267\u884c",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8282\u70b9\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8282\u70b9\u51fd\u6570"]},t=void 0,s={id:"zh-cn/funcs/node-agent-api",title:"\u8282\u70b9\u51fd\u6570-\u624b\u673a\u5185\u6267\u884c",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8282\u70b9\u51fd\u6570",source:"@site/iosdocs/zh-cn/funcs/node-agent-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/node-agent-api",permalink:"/en/iosdocs/zh-cn/funcs/node-agent-api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u8282\u70b9\u51fd\u6570-\u624b\u673a\u5185\u6267\u884c",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8282\u70b9\u51fd\u6570",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 \u8282\u70b9\u51fd\u6570"]},sidebar:"iosdocs",previous:{title:"\u5168\u5c40\u5feb\u6377\u4e8b\u4ef6",permalink:"/en/iosdocs/zh-cn/funcs/global/global-shortcut"},next:{title:"\u8282\u70b9\u51fd\u6570",permalink:"/en/iosdocs/zh-cn/funcs/node-api"}},r={},a=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"nodeAgent.setFetchNodeParam \u8bbe\u7f6e\u8282\u70b9\u53c2\u6570",id:"nodeagentsetfetchnodeparam-\u8bbe\u7f6e\u8282\u70b9\u53c2\u6570",level:2},{value:"nodeAgent.getNodeInfo \u83b7\u53d6\u8282\u70b9\u96c6\u5408",id:"nodeagentgetnodeinfo-\u83b7\u53d6\u8282\u70b9\u96c6\u5408",level:2},{value:"nodeAgent.getOneNodeInfo \u83b7\u53d6\u5355\u8282\u70b9",id:"nodeagentgetonenodeinfo-\u83b7\u53d6\u5355\u8282\u70b9",level:2},{value:"nodeAgent.parent \u67e5\u8be2\u8282\u70b9\u7684\u7236\u7ea7",id:"nodeagentparent-\u67e5\u8be2\u8282\u70b9\u7684\u7236\u7ea7",level:2},{value:"nodeAgent.child \u53d6\u5f97\u5355\u4e2a\u5b50\u8282\u70b9",id:"nodeagentchild-\u53d6\u5f97\u5355\u4e2a\u5b50\u8282\u70b9",level:2},{value:"nodeAgent.allChildren \u53d6\u5f97\u6240\u6709\u5b50\u8282\u70b9",id:"nodeagentallchildren-\u53d6\u5f97\u6240\u6709\u5b50\u8282\u70b9",level:2},{value:"nodeAgent.siblings \u53d6\u5f97\u6240\u6709\u5144\u5f1f\u8282\u70b9",id:"nodeagentsiblings-\u53d6\u5f97\u6240\u6709\u5144\u5f1f\u8282\u70b9",level:2},{value:"nodeAgent.previousSiblings \u53d6\u5f97\u524d\u9762\u7684\u5144\u5f1f\u8282\u70b9",id:"nodeagentprevioussiblings-\u53d6\u5f97\u524d\u9762\u7684\u5144\u5f1f\u8282\u70b9",level:2},{value:"nodeAgent.nextSiblings \u53d6\u5f97\u540e\u9762\u7684\u5144\u5f1f\u8282\u70b9",id:"nodeagentnextsiblings-\u53d6\u5f97\u540e\u9762\u7684\u5144\u5f1f\u8282\u70b9",level:2},{value:"nodeAgent.getOneChildNodeInfo \u7ea7\u8054\u7b5b\u9009\u5b50\u8282\u70b9",id:"nodeagentgetonechildnodeinfo-\u7ea7\u8054\u7b5b\u9009\u5b50\u8282\u70b9",level:2},{value:"nodeAgent.getChildNodeInfo \u7ea7\u8054\u7b5b\u9009\u591a\u4e2a\u5b50\u8282\u70b9",id:"nodeagentgetchildnodeinfo-\u7ea7\u8054\u7b5b\u9009\u591a\u4e2a\u5b50\u8282\u70b9",level:2},{value:"nodeAgent.lockNode \u9501\u5b9a\u8282\u70b9",id:"nodeagentlocknode-\u9501\u5b9a\u8282\u70b9",level:2},{value:"nodeAgent.releaseNode \u91ca\u653e\u8282\u70b9",id:"nodeagentreleasenode-\u91ca\u653e\u8282\u70b9",level:2},{value:"nodeAgent.dumpXml \u5bfc\u51fa\u8282\u70b9",id:"nodeagentdumpxml-\u5bfc\u51fa\u8282\u70b9",level:2}];function c(n){const e={admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8282\u70b9\u6a21\u5757\u51fd\u6570\u4e3b\u8981\u662f\u8ddf\u8282\u70b9\u64cd\u4f5c\u76f8\u5173\u8054"}),"\n",(0,l.jsx)(e.li,{children:"\u8be5\u6a21\u5757\u6ca1\u6709\u6a21\u5757\u524d\u7f00\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u51fd\u6570"}),"\n",(0,l.jsxs)(e.li,{children:["\u7531\u4e8eIOS\u7684\u9650\u5236\uff0c\u53ef\u80fd",(0,l.jsx)(e.strong,{children:"\u90e8\u5206\u673a\u5668\u83b7\u53d6\u8282\u70b9\u8fc7\u6162"}),"\uff0c\u5efa\u8bae\u83b7\u53d6\u8282\u70b9\u540e\u8fdb\u884c\u9501\u5b9a\u8282\u70b9\u540e\uff0c\u5728\u8fdb\u884c\u67e5\u627e"]}),"\n",(0,l.jsx)(e.li,{children:"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8bbe\u7f6e\u8282\u70b9\u83b7\u53d6\u53c2\u6570\u7684\u65b9\u5f0f\u8fdb\u884c"}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u4e0d\u9002\u5408\u7684\u9875\u9762\uff1a\u6bd4\u5982\u9002\u914d\u64ad\u653e\u9875\u9762\u7b49"})}),"\n"]}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsx)(e.mdxAdmonitionTitle,{}),(0,l.jsx)(e.p,{children:"\u8fd9\u4e2a\u6a21\u5757\u8fd0\u7b97\u662f\u5728\u624b\u673a\u5185\u6267\u884c\u7684\uff0c\u6570\u636e\u4e5f\u662f\u5b58\u5728\u624b\u673a\u5185"})]}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentsetfetchnodeparam-\u8bbe\u7f6e\u8282\u70b9\u53c2\u6570",children:"nodeAgent.setFetchNodeParam \u8bbe\u7f6e\u8282\u70b9\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8bbe\u7f6e\u83b7\u53d6\u8282\u70b9\u7684\u57fa\u7840\u53c2\u6570\uff0c\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u6709\u6548\u51cf\u5c11\u83b7\u53d6\u8282\u70b9\u7684\u6570\u91cf\u548c\u6d88\u8017\u7684\u65f6\u95f4"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsxs)(e.li,{children:["@param ext \u662f\u4e00\u4e2amap\uff0c\u4f8b\u5982 ",(0,l.jsx)(e.code,{children:'{"visibleFilter":1}'})]}),"\n",(0,l.jsx)(e.li,{children:"visibleFilter 1 \u4ee3\u8868\u4e0d\u7ba1visible\u662ftrue\u8fd8\u662ffalse\u90fd\u83b7\u53d6\uff0c2 \u4ee3\u8868\u53ea\u83b7\u53d6 visible=true\u7684\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"labelFilter 1 \u4ee3\u8868\u4e0d\u7ba1label\u662f\u5426\u6709\u503c\u90fd\u83b7\u53d6\uff0c2 \u4ee3\u8868\u53ea\u83b7\u53d6label\u6709\u503c\u7684\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"boundsFilter 1 \u4ee3\u8868\u4e0d\u8fc7\u6ee4 2 bounds \u533a\u57df\u5c5e\u6027x,y,w,h\u90fd\u5c0f\u4e8e0\u5c31\u88ab\u8fc7\u6ee4"}),"\n",(0,l.jsx)(e.li,{children:"maxDepth \u4ee3\u8868\u8981\u83b7\u53d6\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u8d8a\u5c11\u901f\u5ea6\u8d8a\u5feb\uff0c\u5efa\u8bae 1 - 500"}),"\n",(0,l.jsx)(e.li,{children:"excludedAttributes \u4ee3\u8868\u8981\u8fc7\u6ee4\u7684\u5c5e\u6027\uff0c\u7528\u82f1\u6587\u9017\u53f7\u5206\u5272\uff0c\u53ef\u4ee5\u589e\u52a0\u6293\u53d6\u901f\u5ea6\uff0c\u4f8b\u5982 visible,selected,enable"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{bool}"})," true \u6210\u529f\uff0cfalse \u5931\u8d25"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:' function main() {\n  var data = nodeAgent.setFetchNodeParam({\n    "labelFilter": "2",\n    "maxDepth": "20",\n    "visibleFilter": "2",\n    "boundsFilter": "1",\n    "excludedAttributes": ""\n  })\n  logd(data);\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentgetnodeinfo-\u83b7\u53d6\u8282\u70b9\u96c6\u5408",children:"nodeAgent.getNodeInfo \u83b7\u53d6\u8282\u70b9\u96c6\u5408"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsx)(e.li,{children:"@param selectors \u8282\u70b9\u9009\u62e9\u5668"}),"\n",(0,l.jsx)(e.li,{children:"@param timeout \u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{array}"})," \u8282\u70b9\u5bf9\u8c61\u96c6\u5408"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  var data = nodeAgent.getNodeInfo(label("aaa"), 1000);\n  logd(JSON.stringify(data));\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentgetonenodeinfo-\u83b7\u53d6\u5355\u8282\u70b9",children:"nodeAgent.getOneNodeInfo \u83b7\u53d6\u5355\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsx)(e.li,{children:"@param selectors \u8282\u70b9\u9009\u62e9\u5668"}),"\n",(0,l.jsx)(e.li,{children:"@param timeout \u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{NodeInfo}"})," \u8282\u70b9\u5bf9\u8c61"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  var data = nodeAgent.getOneNodeInfo(label("aaa"), 1000);\n  logd(JSON.stringify(data));\n}\n\nmain();\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentparent-\u67e5\u8be2\u8282\u70b9\u7684\u7236\u7ea7",children:"nodeAgent.parent \u67e5\u8be2\u8282\u70b9\u7684\u7236\u7ea7"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u67e5\u8be2\u8282\u70b9\u7684\u7236\u7ea7"}),"\n",(0,l.jsx)(e.li,{children:"@param nodeInfo NodeInfo \u8282\u70b9\u5bf9\u8c61"}),"\n",(0,l.jsxs)(e.li,{children:["@return NodeInfo ",(0,l.jsx)(e.code,{children:"{NodeInfo \u5bf9\u8c61|null}"})]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n  if (n) {\n    logd(JSON.stringify(n))\n    let p = nodeAgent.parent(n)\n    let allc = nodeAgent.getOneChildNodeInfo(p, name("\u5c0f\u7ea2\u4e66"), 10000);\n    logd("getOneChildNodeInfo JSON " + JSON.stringify(allc))\n  }\n}\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentchild-\u53d6\u5f97\u5355\u4e2a\u5b50\u8282\u70b9",children:"nodeAgent.child \u53d6\u5f97\u5355\u4e2a\u5b50\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u53d6\u5f97\u5355\u4e2a\u5b50\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsx)(e.li,{children:"@param nodeInfo NodeInfo \u8282\u70b9\u5bf9\u8c61"}),"\n",(0,l.jsx)(e.li,{children:"@param index \u2013 \u5b50\u8282\u70b9\u7d22\u5f15"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{NodeInfo}"})," NodeInfo \u5bf9\u8c61 \u6216\u8005null"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n  if (n) {\n    logd(JSON.stringify(n))\n    let p = nodeAgent.parent(n)\n    let allc = nodeAgent.child(p, 0);\n    logd("child JSON " + JSON.stringify(allc))\n  }\n}\n\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentallchildren-\u53d6\u5f97\u6240\u6709\u5b50\u8282\u70b9",children:"nodeAgent.allChildren \u53d6\u5f97\u6240\u6709\u5b50\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u53d6\u5f97\u6240\u6709\u5b50\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsx)(e.li,{children:"@param nodeInfo NodeInfo \u8282\u70b9\u5bf9\u8c61"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{array}"})," NodeInfo \u8282\u70b9\u96c6\u5408"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n  if (n) {\n    logd(JSON.stringify(n))\n    logd(n.bounds.centerX())\n    logd(n.bounds.centerY())\n    let parentX = nodeAgent.parent(n);\n    logd("parent JSON " + JSON.stringify(parentX))\n    logd(JSON.stringify(nodeAgent.allChildren(parentX)));\n  }\n\n}\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentsiblings-\u53d6\u5f97\u6240\u6709\u5144\u5f1f\u8282\u70b9",children:"nodeAgent.siblings \u53d6\u5f97\u6240\u6709\u5144\u5f1f\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5f53\u524d\u8282\u70b9\u7684\u6240\u6709\u5144\u5f1f\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsx)(e.li,{children:"@param nodeInfo NodeInfo \u8282\u70b9\u5bf9\u8c61"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{array}"})," NodeInfo \u8282\u70b9\u96c6\u5408"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n  if (n) {\n    logd(JSON.stringify(n))\n    let allc = nodeAgent.siblings(n);\n    logd("siblings JSON " + JSON.stringify(allc))\n    if (allc) {\n      for (let i = 0; i < allc.length; i++) {\n        logd("siblings " + JSON.stringify(allc[i]))\n      }\n    }\n  }\n}\n\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentprevioussiblings-\u53d6\u5f97\u524d\u9762\u7684\u5144\u5f1f\u8282\u70b9",children:"nodeAgent.previousSiblings \u53d6\u5f97\u524d\u9762\u7684\u5144\u5f1f\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5728\u5f53\u524d\u8282\u70b9\u524d\u9762\u7684\u5144\u5f1f\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsx)(e.li,{children:"@param nodeInfo NodeInfo \u8282\u70b9\u5bf9\u8c61"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{array}"})," NodeInfo \u8282\u70b9\u96c6\u5408"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n  if (n) {\n    logd(JSON.stringify(n))\n    let allc = nodeAgent.previousSiblings(n);\n    logd("previousSiblings JSON " + JSON.stringify(allc))\n    if (allc) {\n      for (let i = 0; i < allc.length; i++) {\n        logd("previousSiblings " + JSON.stringify(allc[i]))\n      }\n    }\n  }\n}\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentnextsiblings-\u53d6\u5f97\u540e\u9762\u7684\u5144\u5f1f\u8282\u70b9",children:"nodeAgent.nextSiblings \u53d6\u5f97\u540e\u9762\u7684\u5144\u5f1f\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5728\u5f53\u524d\u8282\u70b9\u540e\u9762\u7684\u5144\u5f1f\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsx)(e.li,{children:"@param nodeInfo NodeInfo \u8282\u70b9\u5bf9\u8c61"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{array}"})," NodeInfo \u8282\u70b9\u96c6\u5408"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n  if (n) {\n    logd(JSON.stringify(n))\n    let allc = nodeAgent.nextSiblings(n);\n    logd("nextSiblings JSON " + JSON.stringify(allc))\n    if (allc) {\n      for (let i = 0; i < allc.length; i++) {\n        logd("nextSiblings " + JSON.stringify(allc[i]))\n      }\n    }\n  }\n}\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentgetonechildnodeinfo-\u7ea7\u8054\u7b5b\u9009\u5b50\u8282\u70b9",children:"nodeAgent.getOneChildNodeInfo \u7ea7\u8054\u7b5b\u9009\u5b50\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5728\u5f53\u524d\u8282\u70b9\u540e\u9762\u7684\u5144\u5f1f\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsx)(e.li,{children:"@param nodeInfo NodeInfo \u8282\u70b9\u5bf9\u8c61"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{NodeInfo}"})," NodeInfo \u8282\u70b9\u5bf9\u8c61"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n  if (n) {\n    logd(JSON.stringify(n))\n    let p = nodeAgent.parent(n)\n    let allc = nodeAgent.getOneChildNodeInfo(p, name("\u5c0f\u7ea2\u4e66"), 10000);\n    logd("getOneChildNodeInfo JSON " + JSON.stringify(allc))\n  }\n}\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentgetchildnodeinfo-\u7ea7\u8054\u7b5b\u9009\u591a\u4e2a\u5b50\u8282\u70b9",children:"nodeAgent.getChildNodeInfo \u7ea7\u8054\u7b5b\u9009\u591a\u4e2a\u5b50\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7ea7\u8054\u7b5b\u9009\u591a\u4e2a\u5b50\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsx)(e.li,{children:"@param nodeInfo NodeInfo \u8282\u70b9\u5bf9\u8c61"}),"\n",(0,l.jsx)(e.li,{children:"@param selectors \u8282\u70b9\u9009\u62e9\u5668"}),"\n",(0,l.jsx)(e.li,{children:"@param timeout \u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{array}"})," NodeInfo \u8282\u70b9\u96c6\u5408"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n  if (n) {\n    logd(JSON.stringify(n))\n    let p = nodeAgent.parent(n)\n    let allc = nodeAgent.getChildNodeInfo(p, name("\u5c0f\u7ea2\u4e66"), 10000);\n    logd("getChildNodeInfo JSON " + JSON.stringify(allc))\n  }\n}\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentlocknode-\u9501\u5b9a\u8282\u70b9",children:"nodeAgent.lockNode \u9501\u5b9a\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u9501\u5b9a\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  nodeAgent.lockNode()\n  for (let i = 0; i < 100; i++) {\n    sleep(1000)\n    let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n    if (n) {\n      logd(JSON.stringify(n))\n      let p = nodeAgent.parent(n)\n      let allc = nodeAgent.getChildNodeInfo(p, name("\u5c0f\u7ea2\u4e66"), 10000);\n      logd("getOneChildNodeInfo JSON " + JSON.stringify(allc))\n    } else {\n      logd("\u65e0\u8282\u70b9\u4fe1\u606f")\n    }\n  }\n  nodeAgent.releaseNode()\n}\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentreleasenode-\u91ca\u653e\u8282\u70b9",children:"nodeAgent.releaseNode \u91ca\u653e\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u91ca\u653e\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'function main() {\n  nodeAgent.lockNode()\n  for (let i = 0; i < 100; i++) {\n    sleep(1000)\n    let n = nodeAgent.getOneNodeInfo(name("Other").name("\u6587\u4ef6"), 1000)\n    if (n) {\n      logd(JSON.stringify(n))\n      let p = nodeAgent.parent(n)\n      let allc = nodeAgent.getChildNodeInfo(p, name("\u5c0f\u7ea2\u4e66"), 10000);\n      logd("getOneChildNodeInfo JSON " + JSON.stringify(allc))\n    } else {\n      logd("\u65e0\u8282\u70b9\u4fe1\u606f")\n    }\n  }\n  nodeAgent.releaseNode()\n}\n\nmain()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"nodeagentdumpxml-\u5bfc\u51fa\u8282\u70b9",children:"nodeAgent.dumpXml \u5bfc\u51fa\u8282\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5bfc\u51fa\u8282\u70b9"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7248\u672c: EC iOS \u4e2d\u63a7 5.0.0+"}),"\n",(0,l.jsxs)(e.li,{children:["@return ",(0,l.jsx)(e.code,{children:"{string}"})," \u8282\u70b9\u5b57\u7b26\u4e32"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"function main() {\n  logd(nodeAgent.dumpXml())\n}\nmain()\n"})})]})}function g(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>s});var l=i(6540);const d={},o=l.createContext(d);function t(n){const e=l.useContext(o);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:t(n.components),l.createElement(o.Provider,{value:e},n.children)}}}]);