"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[944],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),c=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),y=c(n),s=a,m=y["".concat(d,".").concat(s)]||y[s]||p[s]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5242:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"FlexboxLayout\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot FlexboxLayout\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot FlexboxLayout\u5f39\u6027\u76d2\u5b50\u5e03\u5c40"]},i=void 0,l={unversionedId:"zh-cn/funcs/ui/uidetail/flexboxlayout",id:"zh-cn/funcs/ui/uidetail/flexboxlayout",title:"FlexboxLayout\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot FlexboxLayout\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",source:"@site/docs/zh-cn/funcs/ui/uidetail/flexboxlayout.md",sourceDirName:"zh-cn/funcs/ui/uidetail",slug:"/zh-cn/funcs/ui/uidetail/flexboxlayout",permalink:"/en/docs/zh-cn/funcs/ui/uidetail/flexboxlayout",draft:!1,tags:[],version:"current",frontMatter:{title:"FlexboxLayout\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot FlexboxLayout\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot FlexboxLayout\u5f39\u6027\u76d2\u5b50\u5e03\u5c40"]}},d={},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5c5e\u6027\u8bf4\u660e",id:"\u5c5e\u6027\u8bf4\u660e",level:2},{value:"\u516c\u6709\u5c5e\u6027",id:"\u516c\u6709\u5c5e\u6027",level:3},{value:"\u79c1\u6709\u5c5e\u6027",id:"\u79c1\u6709\u5c5e\u6027",level:3}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,"Flex\u662fFlexible Box\u7684\u7f29\u5199\uff0c\u610f\u4e3a\u300c\u5f39\u6027\u5e03\u5c40\u300d\uff0c\u5728\u524d\u7aefcss\u6837\u5f0f\u4e2d\u5e94\u7528\u751a\u4e3a\u5e7f\u6cdb\uff0c\u4e4b\u524d\u505a\u8fc7React-Native\u548c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff0c\u9875\u9762\u5e03\u5c40\u5927\u591a\u4f7f\u7528flex\u5f39\u6027\u5e03\u5c40\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u5c4f\u5e55\u5c3a\u5bf8\u4e0a\u63d0\u4f9b\u4e00\u81f4\u7684\u5e03\u5c40\u7ed3\u6784\uff0c\u53ef\u4ee5\u7b80\u4fbf\u3001\u5b8c\u6574\u3001\u54cd\u5e94\u5f0f\u5730\u5b9e\u73b0\u5404\u79cd\u9875\u9762\u5e03\u5c40\uff0c\u4eca\u5929\u4e3a\u5927\u5bb6\u6253\u5f00Android\u79fb\u52a8\u7aef\u7684flex\u5e03\u5c40\u5927\u95e8--FlexboxLayout\uff0c\u5728android\u4e2d\u6211\u4eec\u7ecf\u5e38\u6240\u89c1\u7684\u6807\u7b7e\u3001\u6d41\u5f0f\u5e03\u5c40\u7b49\u90fd\u53ef\u4ee5\u7528FlexboxLayout\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<ScrollView xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n            xmlns:android="http://schemas.android.com/apk/res/android"\n            xsi:noNamespaceSchemaLocation="layout.xsd"\n            android:background="#333333"\n            android:layout_height="match_parent"\n            android:layout_width="match_parent">\n    <FlexboxLayout android:layout_height="200dp"\n                   android:layout_width="match_parent"\n                   android:background="#888888"\n                   android:flexDirection="row"\n                   android:flexWrap="wrap">\n\n        <Button android:layout_width="wrap_content"\n                android:layout_weight="1"\n                android:layout_order="1"\n                android:layout_flexGrow="20.0"\n                android:layout_flexShrink="20.0"\n                android:layout_alignSelf="auto"\n                android:layout_height="wrap_content"\n                  android:text="1"/>\n\n        <Button android:layout_width="wrap_content"\n                  android:layout_weight="1"\n                  android:layout_height="wrap_content"\n                  android:text="2"/>\n\n        <Button android:layout_width="wrap_content"\n                android:layout_weight="1"\n                android:layout_height="wrap_content"\n                  android:text="3"/>\n\n        <Button android:layout_width="wrap_content"\n                android:layout_weight="1"\n                android:layout_height="wrap_content"\n                android:text="4"/>\n\n        <Button android:layout_width="wrap_content"\n                android:layout_weight="1"\n                android:layout_height="wrap_content"\n                android:text="5"/>\n        <Button android:layout_width="wrap_content"\n                android:layout_weight="1"\n                android:layout_height="wrap_content"\n                android:text="6"/>\n    </FlexboxLayout>\n</ScrollView>\n\n')),(0,a.kt)("h2",{id:"\u5c5e\u6027\u8bf4\u660e"},"\u5c5e\u6027\u8bf4\u660e"),(0,a.kt)("h3",{id:"\u516c\u6709\u5c5e\u6027"},"\u516c\u6709\u5c5e\u6027"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/zh-cn/funcs/ui/ui-native-view#%E5%85%AC%E6%9C%89%E5%B1%9E%E6%80%A7"},"\u516c\u6709\u5c5e\u6027")),(0,a.kt)("h3",{id:"\u79c1\u6709\u5c5e\u6027"},"\u79c1\u6709\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u53ef\u9009\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"flexDirection"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5c5e\u6027\u51b3\u5b9a\u4e3b\u8f74\u7684\u65b9\u5411\uff08\u5373\u5185\u90e8\u5b50\u5143\u7d20\u7684\u6392\u5217\u65b9\u5411\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"row\uff08\u9ed8\u8ba4\u503c\uff09\uff1a\u6c34\u5e73\u663e\u793a\uff0c\u8d77\u70b9\u5728\u5de6\u7aef",(0,a.kt)("br",null),"row_reverse\uff1a\u6c34\u5e73\u663e\u793a\uff0c\u8d77\u70b9\u5728\u53f3\u7aef\uff0c\u4e0erow\u76f8\u53cd\u7684\u987a\u5e8f",(0,a.kt)("br",null),"column\uff1a\u5782\u76f4\u663e\u793a\uff0c\u8d77\u70b9\u5728\u9876\u90e8",(0,a.kt)("br",null),"column_reverse\uff1a\u5782\u76f4\u663e\u793a\uff0c\u8d77\u70b9\u5728\u5e95\u90e8\uff0c\u4e0ecolumn\u76f8\u53cd\u7684\u987a\u5e8f",(0,a.kt)("br",null),'xml\u4e2d\u4f7f\u7528app:flexDirection="row"\uff0c\u4ee3\u7801\u4e2d\u4f7f\u7528flexboxLayout.setFlexDirection(FlexDirection.ROW)')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"flexWrap"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u51b3\u5b9a\u662f\u5426\u6362\u884c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"nowrap\uff08\u9ed8\u8ba4\u503c\uff09\uff1a\u4e0d\u6362\u884c",(0,a.kt)("br",null),"wrap\uff1a\u6309\u6b63\u5e38\u65b9\u5411\u6362\u884c\uff0c\u7b2c\u4e00\u884c\u5728\u4e0a\u65b9",(0,a.kt)("br",null),"wrap_reverse\uff1a\u6309\u53cd\u65b9\u5411\u6362\u884c\uff0c\u7b2c\u4e00\u884c\u5728\u4e0b\u65b9 /")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"justifyContent"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u51b3\u5b9a\u5143\u7d20\u5728\u4e3b\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"flex_start\uff08\u9ed8\u8ba4\u503c\uff09\uff1a\u4e3b\u8f74\u65b9\u5411\u8d77\u70b9\u5bf9\u9f50",(0,a.kt)("br",null),"flex_end\uff1a\u4e3b\u8f74\u65b9\u5411\u7ec8\u70b9\u5bf9\u9f50",(0,a.kt)("br",null),"center\uff1a \u4e3b\u8f74\u65b9\u5411\u5c45\u4e2d\u5bf9\u9f50",(0,a.kt)("br",null),"space_between\uff1a\u4e3b\u8f74\u65b9\u5411\u4e24\u7aef\u5bf9\u9f50\uff0c\u5143\u7d20\u4e4b\u95f4\u7684\u95f4\u9694\u90fd\u76f8\u7b49\u3002",(0,a.kt)("br",null),"space-around\uff1a\u6bcf\u4e2a\u5143\u7d20\u4e24\u4fa7\u7684\u95f4\u9694\u76f8\u7b49\u3002\u6240\u4ee5\uff0c\u5143\u7d20\u4e4b\u95f4\u7684\u95f4\u9694\u6bd4\u5143\u7d20\u4e0e\u5e03\u5c40\u8fb9\u6846\u7684\u95f4\u9694\u5927\u4e00\u500d\u3002 /")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u66f4\u591a\u5c5e\u6027"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"td",href:"https://www.cnblogs.com/taixiang/p/9177215.html"},"https://www.cnblogs.com/taixiang/p/9177215.html")),(0,a.kt)("td",{parentName:"tr",align:"center"},"/")))))}p.isMDXComponent=!0}}]);