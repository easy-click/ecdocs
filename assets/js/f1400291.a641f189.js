"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[4704],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(t),y=i,f=p["".concat(l,".").concat(y)]||p[y]||s[y]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:i,o[1]=d;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=t(8168),i=(t(6540),t(5680));const a={title:"View\u89c6\u56fe",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot View\u89c6\u56fe",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot View\u89c6\u56fe"]},o=void 0,d={unversionedId:"zh-cn/funcs/ui/uidetail/view",id:"zh-cn/funcs/ui/uidetail/view",title:"View\u89c6\u56fe",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot View\u89c6\u56fe",source:"@site/docs/zh-cn/funcs/ui/uidetail/view.md",sourceDirName:"zh-cn/funcs/ui/uidetail",slug:"/zh-cn/funcs/ui/uidetail/view",permalink:"/docs/zh-cn/funcs/ui/uidetail/view",draft:!1,tags:[],version:"current",frontMatter:{title:"View\u89c6\u56fe",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot View\u89c6\u56fe",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot View\u89c6\u56fe"]},sidebar:"docs",previous:{title:"HorizontalScrollView\u6eda\u52a8\u6846",permalink:"/docs/zh-cn/funcs/ui/uidetail/h_scrollview"},next:{title:"Button\u6309\u94ae",permalink:"/docs/zh-cn/funcs/ui/uidetail/button"}},l={},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5c5e\u6027\u8bf4\u660e",id:"\u5c5e\u6027\u8bf4\u660e",level:2},{value:"\u516c\u6709\u5c5e\u6027",id:"\u516c\u6709\u5c5e\u6027",level:3},{value:"\u79c1\u6709\u5c5e\u6027",id:"\u79c1\u6709\u5c5e\u6027",level:3}],u={toc:c},p="wrapper";function s(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.yg)("p",null,"View\uff0c\u6700\u57fa\u7840\u7684\u89c6\u56fe"),(0,i.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},' <View android:visibility="visible"\n          android:clickable="true"\n          android:padding="1dp"\n          android:background="#FFFFFF"\n          android:layout_gravity="center|top"\n          android:layout_height="match_parent"\n          android:layout_margin="1dp"\n          android:layout_marginBottom="1dp"\n          android:layout_marginLeft="1dp"\n          android:layout_marginRight="1dp"\n          android:layout_marginTop="1dp"\n          android:layout_weight="1"\n          android:layout_width="wrap_parent"\n          android:minHeight="100dp"\n          android:minWidth="100dp"\n          android:paddingBottom="1dp"\n          android:paddingLeft="1dp"\n          android:paddingRight="1dp"\n          android:paddingTop="1dp"\n          android:cornerRadius="10dp"\n          android:tag="view"/>\n')),(0,i.yg)("h2",{id:"\u5c5e\u6027\u8bf4\u660e"},"\u5c5e\u6027\u8bf4\u660e"),(0,i.yg)("h3",{id:"\u516c\u6709\u5c5e\u6027"},"\u516c\u6709\u5c5e\u6027"),(0,i.yg)("p",null,"\u8bf7\u53c2\u8003 ",(0,i.yg)("a",{parentName:"p",href:"/docs/zh-cn/funcs/ui/ui-native-view#%E5%85%AC%E6%9C%89%E5%B1%9E%E6%80%A7"},"\u516c\u6709\u5c5e\u6027")),(0,i.yg)("h3",{id:"\u79c1\u6709\u5c5e\u6027"},"\u79c1\u6709\u5c5e\u6027"),(0,i.yg)("p",null,"\u65e0"))}s.isMDXComponent=!0}}]);