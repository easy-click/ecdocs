"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"ScrollView\u6eda\u52a8\u6846",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot ScrollView\u6eda\u52a8\u6846",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot ScrollView\u6eda\u52a8\u6846"]},l=void 0,o={unversionedId:"zh-cn/funcs/ui/uidetail/scrollview",id:"zh-cn/funcs/ui/uidetail/scrollview",title:"ScrollView\u6eda\u52a8\u6846",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot ScrollView\u6eda\u52a8\u6846",source:"@site/docs/zh-cn/funcs/ui/uidetail/scrollview.md",sourceDirName:"zh-cn/funcs/ui/uidetail",slug:"/zh-cn/funcs/ui/uidetail/scrollview",permalink:"/en/docs/zh-cn/funcs/ui/uidetail/scrollview",draft:!1,tags:[],version:"current",frontMatter:{title:"ScrollView\u6eda\u52a8\u6846",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot ScrollView\u6eda\u52a8\u6846",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot ScrollView\u6eda\u52a8\u6846"]},sidebar:"docs",previous:{title:"RelativeLayout\u7edd\u5bf9\u5e03\u5c40",permalink:"/en/docs/zh-cn/funcs/ui/uidetail/relativelayout"},next:{title:"HorizontalScrollView\u6eda\u52a8\u6846",permalink:"/en/docs/zh-cn/funcs/ui/uidetail/h_scrollview"}},c={},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5c5e\u6027\u8bf4\u660e",id:"\u5c5e\u6027\u8bf4\u660e",level:2},{value:"\u516c\u6709\u5c5e\u6027",id:"\u516c\u6709\u5c5e\u6027",level:3},{value:"\u79c1\u6709\u5c5e\u6027",id:"\u79c1\u6709\u5c5e\u6027",level:3}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,"\u53ef\u4ee5\u6eda\u52a8\u7684\u5e03\u5c40\u63a7\u4ef6\uff0c\u5b50\u5143\u7d20\u53ea\u80fd\u6709\u4e00\u4e2a"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<ScrollView\n            android:fillViewport="true"\n            android:layout_width="match_parent"\n            android:layout_height="match_parent">\n        <LinearLayout android:layout_height="match_parent"\n                      android:orientation="vertical"\n                      android:layout_width="match_parent">\n            <TextView android:layout_width="match_parent"\n                      android:layout_height="match_parent"\n                      android:tag="sctest"\n                      />\n        </LinearLayout>\n\n</ScrollView>\n\n')),(0,a.kt)("h2",{id:"\u5c5e\u6027\u8bf4\u660e"},"\u5c5e\u6027\u8bf4\u660e"),(0,a.kt)("h3",{id:"\u516c\u6709\u5c5e\u6027"},"\u516c\u6709\u5c5e\u6027"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/zh-cn/funcs/ui/ui-native-view#%E5%85%AC%E6%9C%89%E5%B1%9E%E6%80%A7"},"\u516c\u6709\u5c5e\u6027")),(0,a.kt)("h3",{id:"\u79c1\u6709\u5c5e\u6027"},"\u79c1\u6709\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u53ef\u9009\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"layout_weight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5b50\u5143\u7d20\u6743\u91cd"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6570\u5b57",(0,a.kt)("br",null),"\u5f53\u7236\u7ea7\u4e3aLinearLayout\u7684\u65f6\u5019\uff0c\u5b50\u63a7\u4ef6\u53ef\u4ee5\u8bbe\u7f6e\u6743\u91cd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"fillViewport"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u586b\u5145\u6240\u6709\u89c6\u56fe"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true: \u662f false:\u5426")))))}p.isMDXComponent=!0}}]);