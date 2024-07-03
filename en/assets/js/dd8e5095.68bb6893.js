"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[907],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,f=s["".concat(l,".").concat(d)]||s[d]||y[d]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[s]="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(8168),i=(n(6540),n(5680));const o={title:"\u4ee3\u7801\u7f16\u5199UI",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7801\u7f16\u5199UI",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7801\u7f16\u5199UI"]},c=void 0,a={unversionedId:"zh-cn/funcs/ui/ui-recycleview",id:"zh-cn/funcs/ui/ui-recycleview",title:"\u4ee3\u7801\u7f16\u5199UI",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7801\u7f16\u5199UI",source:"@site/docs/zh-cn/funcs/ui/ui-recycleview.md",sourceDirName:"zh-cn/funcs/ui",slug:"/zh-cn/funcs/ui/ui-recycleview",permalink:"/en/docs/zh-cn/funcs/ui/ui-recycleview",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ee3\u7801\u7f16\u5199UI",description:"EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7801\u7f16\u5199UI",keywords:["EasyClick \u81ea\u52a8\u5316\u811a\u672c android\u514droot \u4ee3\u7801\u7f16\u5199UI"]},sidebar:"docs",previous:{title:"\u6a21\u677f\u5f0fUI",permalink:"/en/docs/zh-cn/funcs/ui/ui-js-template"},next:{title:"\u539f\u751fUI\u63a7\u4ef6",permalink:"/en/docs/zh-cn/funcs/ui/ui-native-view"}},l={},u=[],p={toc:u},s="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199UI"),(0,i.yg)("li",{parentName:"ul"},"\u8fd9\u91cc\u6f14\u793a\u7684\u662f\u4f7f\u7528androidx\u4e2d\u7684RecyclerView")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},'    function main() {\n\n        importPackage(androidx.recyclerview.widget);\n        importPackage(android.widget)\n\n        let recyclerView = new RecyclerView(context);\n        logd(recyclerView)\n        // //\u8bbe\u7f6e\u5e03\u5c40\u7ba1\u7406\u5668\n        layoutManager = new LinearLayoutManager(context);\n        recyclerView.setLayoutManager(layoutManager);\n        var activity = ui.getActivity();\n        ui.logd("activity " + activity);\n        activity.setContentView(recyclerView);\n        ui.logd("activity22 " + activity);\n\n        let giftBoxList = [];\n        for (var i = 0; i < 10; i++) {\n                giftBoxList.push(new GiftBox(i + "\u4e2a", i * 2 + "\u65a4", i * 3 + "\u888b"));\n        }\n        ui.logd("giftBoxList " + giftBoxList);\n        let recycleAdapter = createGiftBoxAdapter(giftBoxList);\n        ui.logd("recycleAdapter " + recycleAdapter);\n        recyclerView.setAdapter(recycleAdapter);\n\n}\n\nfunction createGiftBoxAdapter(giftBoxList) {\n        return RecyclerView.Adapter({\n                onCreateViewHolder: function(parent, viewType) {\n                        // \u89c6\u56fe\u521b\u5efa\n                        let view;\n                        let holder;\n                        //\u76f4\u63a5\u751f\u6210 \u6216\u8005 \u4ecexml\u89e3\u6790\u51fa\u6765\n                        view = new TextView(context);\n                        holder = JavaAdapter(RecyclerView.ViewHolder, {},\n                        view);\n\n                        return holder;\n                },\n                onBindViewHolder: function(holder, position) {\n                        // \u6570\u636e\u7ed1\u5b9a\n                        giftBox = giftBoxList[position];\n                        holder.itemView.setText(giftBox.getLollipops());\n                        ui.logd("giftBox " + giftBox)\n\n                },\n                getItemCount: function() {\n                        return giftBoxList.length;\n                }\n\n        });\n}\n\nfunction GiftBox(lollipops, melonSeeds, peanut) {\n        this.lollipops = lollipops;\n        this.melonSeeds = melonSeeds;\n        this.peanut = peanut;\n}\nGiftBox.prototype.getLollipops = function() {\n        return this.lollipops;\n};\nGiftBox.prototype.getMelonSeeds = function() {\n        return this.melonSeeds;\n};\nGiftBox.prototype.getPeanut = function() {\n        return this.peanut;\n};\nGiftBox.prototype.getGiftType = function() {\n        return random(0, 1);\n};\n\nmain();\n')))}y.isMDXComponent=!0}}]);