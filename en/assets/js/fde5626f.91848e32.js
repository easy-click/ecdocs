"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[3279],{5680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>s});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,s=d["".concat(c,".").concat(p)]||d[p]||g[p]||i;return n?r.createElement(s,l(l({ref:t},y),{},{components:n})):r.createElement(s,l({ref:t},y))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const i={title:"Button\u6309\u94ae",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Button\u6309\u94ae",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Button\u6309\u94ae"]},l=void 0,o={unversionedId:"zh-cn/funcs/ui/uidetail/button",id:"zh-cn/funcs/ui/uidetail/button",title:"Button\u6309\u94ae",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Button\u6309\u94ae",source:"@site/docs/zh-cn/funcs/ui/uidetail/button.md",sourceDirName:"zh-cn/funcs/ui/uidetail",slug:"/zh-cn/funcs/ui/uidetail/button",permalink:"/en/docs/zh-cn/funcs/ui/uidetail/button",draft:!1,tags:[],version:"current",frontMatter:{title:"Button\u6309\u94ae",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Button\u6309\u94ae",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot Button\u6309\u94ae"]},sidebar:"docs",previous:{title:"View\u89c6\u56fe",permalink:"/en/docs/zh-cn/funcs/ui/uidetail/view"},next:{title:"TextView\u6587\u672c",permalink:"/en/docs/zh-cn/funcs/ui/uidetail/textview"}},c={},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5c5e\u6027\u8bf4\u660e",id:"\u5c5e\u6027\u8bf4\u660e",level:2},{value:"\u516c\u6709\u5c5e\u6027",id:"\u516c\u6709\u5c5e\u6027",level:3},{value:"\u79c1\u6709\u5c5e\u6027",id:"\u79c1\u6709\u5c5e\u6027",level:3}],y={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.yg)("p",null,"\u6309\u94ae"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},' <Button android:layout_height="wrap_parent"\n             android:layout_width="match_parent"\n             android:tag="btn"\n             android:text="\u6309\u94ae"\n             android:textColor="#669999"\n             android:textSize="14dp"\n             android:gravity="center"\n/>\n')),(0,a.yg)("h2",{id:"\u5c5e\u6027\u8bf4\u660e"},"\u5c5e\u6027\u8bf4\u660e"),(0,a.yg)("h3",{id:"\u516c\u6709\u5c5e\u6027"},"\u516c\u6709\u5c5e\u6027"),(0,a.yg)("p",null,"\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/zh-cn/funcs/ui/ui-native-view#%E5%85%AC%E6%9C%89%E5%B1%9E%E6%80%A7"},"\u516c\u6709\u5c5e\u6027")),(0,a.yg)("h3",{id:"\u79c1\u6709\u5c5e\u6027"},"\u79c1\u6709\u5c5e\u6027"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"\u5c5e\u6027\u540d"),(0,a.yg)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,a.yg)("th",{parentName:"tr",align:"center"},"\u53ef\u9009\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"layout_weight"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u5b50\u5143\u7d20\u6743\u91cd"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u6570\u5b57",(0,a.yg)("br",null),"\u5f53\u7236\u7ea7\u4e3aLinearLayout\u7684\u65f6\u5019\uff0c\u5b50\u63a7\u4ef6\u53ef\u4ee5\u8bbe\u7f6e\u6743\u91cd")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"gravity"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u5185\u90e8\u7684\u63a7\u4ef6\u5bf9\u9f50\u65b9\u5f0f"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("a",{parentName:"td",href:"https://blog.csdn.net/gaojinshan/article/details/44917205"},"\u7528\u6cd5\u53c2\u8003"),(0,a.yg)("br",null),"top",(0,a.yg)("br",null),"bottom",(0,a.yg)("br",null),"left",(0,a.yg)("br",null),"right",(0,a.yg)("br",null),"center_vertical",(0,a.yg)("br",null),"fill_vertical",(0,a.yg)("br",null),"center_horizontal",(0,a.yg)("br",null),"fill_horizontal",(0,a.yg)("br",null),"center",(0,a.yg)("br",null),"fill",(0,a.yg)("br",null),"clip_vertical",(0,a.yg)("br",null),"clip_horizontal",(0,a.yg)("br",null))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"text"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u6309\u94ae\u6587\u5b57"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u5b57\u7b26\u4e32")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"textColor"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u6587\u5b57\u989c\u8272"),(0,a.yg)("td",{parentName:"tr",align:"center"},"16\u8fdb\u5236\uff0c\u4f8b\u5982#FFFFFF")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"textSize"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u6587\u5b57\u5927\u5c0f"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u5177\u4f53\u6570\u5b57+dp")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"maxLength"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u6587\u5b57\u6700\u5927\u957f\u5ea6"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u5177\u4f53\u6570\u5b57")))))}g.isMDXComponent=!0}}]);