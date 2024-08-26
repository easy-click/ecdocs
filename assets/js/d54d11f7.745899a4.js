"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[5045],{8914:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});var i=l(4848),o=l(8453);const t={title:"YOLO\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 YOLO\u51fd\u6570 \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 YOLO\u51fd\u6570 \u8d44\u6e90\u4e0b\u8f7d"]},r=void 0,s={id:"zh-cn/funcs/yolo-api",title:"YOLO\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 YOLO\u51fd\u6570 \u8d44\u6e90\u4e0b\u8f7d",source:"@site/iosdocs/zh-cn/funcs/yolo-api.md",sourceDirName:"zh-cn/funcs",slug:"/zh-cn/funcs/yolo-api",permalink:"/iosdocs/zh-cn/funcs/yolo-api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"YOLO\u51fd\u6570",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 YOLO\u51fd\u6570 \u8d44\u6e90\u4e0b\u8f7d",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c iOS\u514d\u8d8a\u72f1 YOLO\u51fd\u6570 \u8d44\u6e90\u4e0b\u8f7d"]},sidebar:"iosdocs",previous:{title:"\u56fe\u8272\u51fd\u6570",permalink:"/iosdocs/zh-cn/funcs/image-api"},next:{title:"OCR\u8bc6\u522b-\u624b\u673a\u5185\u6267\u884c",permalink:"/iosdocs/zh-cn/funcs/ocr-agent-api"}},c={},a=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"yolov8Api.newYolov8 \u521d\u59cb\u5316yolov8\u5b9e\u4f8b",id:"yolov8apinewyolov8-\u521d\u59cb\u5316yolov8\u5b9e\u4f8b",level:2},{value:"Yolov8Util.getDefaultConfig \u83b7\u53d6 yolov8 \u9ed8\u8ba4\u914d\u7f6e",id:"yolov8utilgetdefaultconfig-\u83b7\u53d6-yolov8-\u9ed8\u8ba4\u914d\u7f6e",level:2},{value:"Yolov8Util.initYoloModel \u521d\u59cb\u5316yolov8\u6a21\u578b",id:"yolov8utilinityolomodel-\u521d\u59cb\u5316yolov8\u6a21\u578b",level:2},{value:"Yolov8Util.detectBitmap \u68c0\u6d4b\u56fe\u7247",id:"yolov8utildetectbitmap-\u68c0\u6d4b\u56fe\u7247",level:2},{value:"Yolov8Util.detectImage \u68c0\u6d4bAutoImage",id:"yolov8utildetectimage-\u68c0\u6d4bautoimage",level:2},{value:"Yolov8Util.release \u63d2\u5165\u6570\u636e",id:"yolov8utilrelease-\u63d2\u5165\u6570\u636e",level:2},{value:"Yolov8Util.getErrorMsg \u83b7\u53d6YOLOV8\u9519\u8bef\u6d88\u606f",id:"yolov8utilgeterrormsg-\u83b7\u53d6yolov8\u9519\u8bef\u6d88\u606f",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/zh-cn/advance/yolov8",children:"YOLO\u4f7f\u7528\u8bf4\u660e"})," \u8bf7\u770b\u5b89\u5353\u7248\u672c\u7684\uff0c\u8bad\u7ec3\u6559\u7a0b\u90fd\u662f\u4e00\u6837"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"yolov8apinewyolov8-\u521d\u59cb\u5316yolov8\u5b9e\u4f8b",children:"yolov8Api.newYolov8 \u521d\u59cb\u5316yolov8\u5b9e\u4f8b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u521d\u59cb\u5316yolov8\u5b9e\u4f8b"}),"\n",(0,i.jsx)(n.li,{children:"\u9002\u914dEC 7.8.0+"}),"\n",(0,i.jsxs)(n.li,{children:["@return  ",(0,i.jsx)(n.code,{children:"Yolov8Util"})," \u5bf9\u8c61"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function main() {\n  // \u521d\u59cb\u5316YOLO\u5b9e\u4f8b\n  let yolov8s = yolov8Api.newYolov8();\n  // \u521d\u59cb\u5316\u914d\u7f6e\u9009\u9879\n  let config = yolov8s.getDefaultConfig("yolov8s-640", 640, 0.25, 0.35, "ALL", 1, [\n    "aixin",\n    "pinglun"\n  ])\n  logd("config : " + JSON.stringify(config))\n  // \u521d\u59cb\u5316 \u8bad\u7ec3\u8fc7\u7684\u6a21\u578b\n  let paramPath = "c:/model.ncnn.param";\n  let binPath = "c:/model.ncnn.bin";\n  let inted = yolov8s.initYoloModel(config, paramPath, binPath);\n  if (inted) {\n    logd("\u521d\u59cb\u5316yolov8s\u6210\u529f");\n  } else {\n    logd("\u521d\u59cb\u5316yolov8s\u5931\u8d25: " + yolov8s.getErrorMsg());\n    return;\n  }\n  let bitmap = image.readBitmap("c:/a.png");\n  let result = yolov8s.detectBitmap(bitmap, []);\n  // \u6216\u8005\u7528 \n  let img = image.readImage("c:/a.png")\n  let result2 = image.detectImage("c:/a.png", [])\n  image.recycle(img);\n  // \u8fd9\u4e2a\u5e26\u53c2\u6570\u7684\u4ee3\u8868\u53ea\u8fc7\u6ee4pinglun\u7684\u5206\u7c7b\u6570\u636e\n  //let result = yolov8s.detectBitmap(bitmap, ["pinglun"]);\n  if (result == null || result == "") {\n    logd("yolov8s \u65e0\u7ed3\u679c: " + yolov8s.getErrorMsg());\n  } else {\n    logd("yolov8s \u7ed3\u679c: " + result);\n  }\n  // \u5728\u9700\u8981\u7684\u65f6\u5019\u91ca\u653e\uff0c\u4e0d\u8981\u7528\u4e00\u6b21\u91ca\u653e\u4e00\u6b21\n  yolov8s.release();\n}\n\nmain();\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"yolov8utilgetdefaultconfig-\u83b7\u53d6-yolov8-\u9ed8\u8ba4\u914d\u7f6e",children:"Yolov8Util.getDefaultConfig \u83b7\u53d6 yolov8 \u9ed8\u8ba4\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u83b7\u53d6 yolov8 \u9ed8\u8ba4\u914d\u7f6e"}),"\n",(0,i.jsx)(n.li,{children:"\u9002\u914dEC 7.8.0+"}),"\n",(0,i.jsx)(n.li,{children:"@param model_name \u6a21\u578b\u540d\u79f0 \u9ed8\u8ba4\u5199 yolov8s-640 \u5373\u53ef"}),"\n",(0,i.jsx)(n.li,{children:"@param input_size yolov8\u8bad\u7ec3\u65f6\u5019\u7684imgsz\u53c2\u6570\uff0c\u9ed8\u8ba4\u5199640\u5373\u53ef"}),"\n",(0,i.jsx)(n.li,{children:"@param box_thr \u68c0\u6d4b\u6846\u7cfb\u6570\uff0c\u9ed8\u8ba4\u51990.25\u5373\u53ef"}),"\n",(0,i.jsx)(n.li,{children:"@param iou_thr \u8f93\u51fa\u7cfb\u6570\uff0c\uff0c\u9ed8\u8ba4\u51990.35 \u5373\u53ef"}),"\n",(0,i.jsx)(n.li,{children:"@param bind_cpu \u662f\u5426\u7ed1\u5b9aCPU\uff0c\u9009\u9879\u4e3aALL,BIG,LITTLE \u4e09\u4e2a,\u9ed8\u8ba4\u5199ALL"}),"\n",(0,i.jsx)(n.li,{children:"@param use_vulkan_compute \u662f\u5426\u542f\u7528\u786c\u4ef6\u52a0\u901f\uff0c1\u662f\uff0c0\u5426"}),"\n",(0,i.jsx)(n.li,{children:'@param obj_names JSON\u6570\u7ec4\uff0c\u8bad\u7ec3\u7684\u65f6\u5019\u5206\u7c7b\u540d\u79f0\u4f8b\u5982 ["star","common","face"]'}),"\n",(0,i.jsx)(n.li,{children:"@return JSON\u6570\u636e"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"   \u4ee3\u7801\u4f8b\u5b50\u8bf7\u770b `\u521d\u59cb\u5316yolov8\u5b9e\u4f8b`\n"})}),"\n",(0,i.jsx)(n.h2,{id:"yolov8utilinityolomodel-\u521d\u59cb\u5316yolov8\u6a21\u578b",children:"Yolov8Util.initYoloModel \u521d\u59cb\u5316yolov8\u6a21\u578b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u521d\u59cb\u5316yolov8\u6a21\u578b"}),"\n",(0,i.jsx)(n.li,{children:"\u5177\u4f53\u5982\u4f55\u751f\u6210param\u548cbin\u6587\u4ef6\uff0c\u8bf7\u53c2\u8003\u6587\u4ef6\u7684yolo\u4f7f\u7528\u7ae0\u8282\uff0c\u901a\u8fc7yolo\u7684pt\u8f6c\u6210ncnn\u7684param\u3001bin\u6587\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u9002\u914dEC 7.8.0+"}),"\n",(0,i.jsx)(n.li,{children:"@param map \u53c2\u6570\u8868 \u53c2\u8003 getDefaultConfig\u51fd\u6570\u83b7\u53d6\u9ed8\u8ba4\u7684\u53c2\u6570"}),"\n",(0,i.jsx)(n.li,{children:"@param paramPath param\u6587\u4ef6\u8def\u5f84"}),"\n",(0,i.jsx)(n.li,{children:"@param binPath bin\u6587\u4ef6\u8def\u5f84"}),"\n",(0,i.jsx)(n.li,{children:"@return boolean true\u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"   \u4ee3\u7801\u4f8b\u5b50\u8bf7\u770b `\u521d\u59cb\u5316yolov8\u5b9e\u4f8b`\n"})}),"\n",(0,i.jsx)(n.h2,{id:"yolov8utildetectbitmap-\u68c0\u6d4b\u56fe\u7247",children:"Yolov8Util.detectBitmap \u68c0\u6d4b\u56fe\u7247"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u68c0\u6d4b\u56fe\u7247"}),"\n",(0,i.jsx)(n.li,{children:"\u9002\u914dEC 7.8.0+"}),"\n",(0,i.jsx)(n.li,{children:"\u8fd4\u56de\u6570\u636e\u4f8b\u5982"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'[{"name":"heart","confidence":0.92,"left":957,"top":986,"right":1050,"bottom":1078}]'})}),"\n",(0,i.jsx)(n.li,{children:"name: \u4ee3\u8868\u662f\u5206\u7c7b\uff0cconfidence:\u4ee3\u8868\u53ef\u4fe1\u5ea6\uff0cleft,top,right,bottom\u4ee3\u8868\u7ed3\u679c\u5750\u6807\u9009\u6846"}),"\n",(0,i.jsx)(n.li,{children:"@param bitmap \u5b89\u5353\u7684bitmap\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.li,{children:"@param obj_names JSON\u6570\u7ec4\uff0c\u4e0d\u5199\u4ee3\u8868\u4e0d\u8fc7\u6ee4\uff0c\u5199\u4e86\u4ee3\u8868\u53ea\u53d6\u586b\u5199\u7684\u5206\u7c7b"}),"\n",(0,i.jsx)(n.li,{children:"@return string \u5b57\u7b26\u4e32\u6570\u636e"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"   \u4ee3\u7801\u4f8b\u5b50\u8bf7\u770b `\u521d\u59cb\u5316yolov8\u5b9e\u4f8b`\n"})}),"\n",(0,i.jsx)(n.h2,{id:"yolov8utildetectimage-\u68c0\u6d4bautoimage",children:"Yolov8Util.detectImage \u68c0\u6d4bAutoImage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u68c0\u6d4b\u56fe\u7247"}),"\n",(0,i.jsx)(n.li,{children:"\u9002\u914dEC 7.8.0+"}),"\n",(0,i.jsx)(n.li,{children:"\u8fd4\u56de\u6570\u636e\u4f8b\u5982"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'[{"name":"heart","confidence":0.92,"left":957,"top":986,"right":1050,"bottom":1078}]'})}),"\n",(0,i.jsx)(n.li,{children:"name: \u4ee3\u8868\u662f\u5206\u7c7b\uff0cconfidence:\u4ee3\u8868\u53ef\u4fe1\u5ea6\uff0cleft,top,right,bottom\u4ee3\u8868\u7ed3\u679c\u5750\u6807\u9009\u6846"}),"\n",(0,i.jsx)(n.li,{children:"@param image AutoImage\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.li,{children:"@param obj_names JSON\u6570\u7ec4\uff0c\u4e0d\u5199\u4ee3\u8868\u4e0d\u8fc7\u6ee4\uff0c\u5199\u4e86\u4ee3\u8868\u53ea\u53d6\u586b\u5199\u7684\u5206\u7c7b"}),"\n",(0,i.jsx)(n.li,{children:"@return string \u5b57\u7b26\u4e32\u6570\u636e"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"   \u4ee3\u7801\u4f8b\u5b50\u8bf7\u770b `\u521d\u59cb\u5316yolov8\u5b9e\u4f8b`\n"})}),"\n",(0,i.jsx)(n.h2,{id:"yolov8utilrelease-\u63d2\u5165\u6570\u636e",children:"Yolov8Util.release \u63d2\u5165\u6570\u636e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u91ca\u653eyolov8\u8d44\u6e90"}),"\n",(0,i.jsx)(n.li,{children:"\u9002\u914dEC 7.8.0+"}),"\n",(0,i.jsx)(n.li,{children:"@return boolean"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"   \u4ee3\u7801\u4f8b\u5b50\u8bf7\u770b `\u521d\u59cb\u5316yolov8\u5b9e\u4f8b`\n   \u91ca\u653e\u51fd\u6570\u5728\u811a\u672c\u7ed3\u675f\u7684\u7684\u65f6\u5019\u91ca\u653e\uff0c\u65e0\u9700\u8981\u6bcf\u6b21\u4f7f\u7528\u90fd\u91ca\u653e\n"})}),"\n",(0,i.jsx)(n.h2,{id:"yolov8utilgeterrormsg-\u83b7\u53d6yolov8\u9519\u8bef\u6d88\u606f",children:"Yolov8Util.getErrorMsg \u83b7\u53d6YOLOV8\u9519\u8bef\u6d88\u606f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u83b7\u53d6YOLOV8\u9519\u8bef\u6d88\u606f"}),"\n",(0,i.jsx)(n.li,{children:"\u9002\u914dEC 7.8.0+"}),"\n",(0,i.jsx)(n.li,{children:"@return string \u5b57\u7b26\u4e32"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"   \u4ee3\u7801\u4f8b\u5b50\u8bf7\u770b `\u521d\u59cb\u5316yolov8\u5b9e\u4f8b`\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>s});var i=l(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);