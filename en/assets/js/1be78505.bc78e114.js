"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[8714,9090],{6716:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var a=n(6540),l=n(9090),o=n(1829),r=n(53),c=n(1312),i=n(3104),s=n(5062);var d=n(7559);const m={backToTopButton:"backToTopButton_RiI4",backToTopButtonShow:"backToTopButtonShow_ssHd"};function u(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,i.gk)();return(0,i.Mq)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(o.current?o.current=!1:a>=r?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,s.$)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.A)("clean-btn",d.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var b=n(4581),p=n(6342),h=n(1773),E=n(8168);function f(e){return a.createElement("svg",(0,E.A)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const g={collapseSidebarButton:"collapseSidebarButton_FykI",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_DTRl"};function v(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.A)("button button--secondary button--outline",g.collapseSidebarButton),onClick:t},a.createElement(f,{className:g.collapseSidebarButtonIcon}))}var _=n(5041),C=n(9532),k=n(1754),A=n(9169),S=n(1422);const N=Symbol("EmptyContext"),T=a.createContext(N);function I(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(T.Provider,{value:o},t)}var x=n(5489),y=n(2303);function w(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,c.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function B(e){let{item:t,onItemClick:n,activePath:l,level:o,index:c,...i}=e;const{items:s,label:m,collapsible:u,className:b,href:h}=t,f=function(e){const t=(0,y.A)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,k._o)(e):void 0),[e,t])}(t),g=(0,k.w8)(t,l),v=(0,A.ys)(h,l),{collapsed:_,setCollapsed:I}=(0,S.u)({initialState:()=>!!u&&(!g&&t.collapsed)});!function(e){let{isActive:t,collapsed:n,setCollapsed:l}=e;const o=(0,C.ZC)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:g,collapsed:_,setCollapsed:I});const{expandedItem:B,setExpandedItem:L}=function(){const e=(0,a.useContext)(T);if(e===N)throw new C.dV("DocSidebarItemsExpandedStateProvider");return e}();function M(e){void 0===e&&(e=!_),L(e?null:c),I(e)}const{docs:{sidebar:{autoCollapseCategories:H}}}=(0,p.p)();return(0,a.useEffect)((()=>{u&&B&&B!==c&&H&&I(!0)}),[u,B,c,I,H]),a.createElement("li",{className:(0,r.A)(d.G.docs.docSidebarItemCategory,d.G.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":_},b)},a.createElement("div",{className:(0,r.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(x.A,(0,E.A)({className:(0,r.A)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!h&&u,"menu__link--active":g}),onClick:u?e=>{n?.(t),h?M(!1):(e.preventDefault(),M())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":u?!_:void 0,href:u?f??"#":f},i),m),h&&u&&a.createElement(w,{categoryLabel:m,onClick:e=>{e.preventDefault(),M()}})),a.createElement(S.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(R,{items:s,tabIndex:_?-1:0,onItemClick:n,activePath:l,level:o+1})))}var L=n(6654),M=n(3679);const H={menuExternalLink:"menuExternalLink_KU1_"};function P(e){let{item:t,onItemClick:n,activePath:l,level:o,index:c,...i}=e;const{href:s,label:m,className:u}=t,b=(0,k.w8)(t,l),p=(0,L.A)(s);return a.createElement("li",{className:(0,r.A)(d.G.docs.docSidebarItemLink,d.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),key:m},a.createElement(x.A,(0,E.A)({className:(0,r.A)("menu__link",!p&&H.menuExternalLink,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},p&&{onClick:n?()=>n(t):void 0},i),m,!p&&a.createElement(M.A,null)))}const F={menuHtmlItem:"menuHtmlItem_hP_2"};function G(e){let{item:t,level:n,index:l}=e;const{value:o,defaultStyle:c,className:i}=t;return a.createElement("li",{className:(0,r.A)(d.G.docs.docSidebarItemLink,d.G.docs.docSidebarItemLinkLevel(n),c&&`${F.menuHtmlItem} menu__list-item`,i),key:l,dangerouslySetInnerHTML:{__html:o}})}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(B,(0,E.A)({item:t},n));case"html":return a.createElement(G,(0,E.A)({item:t},n));default:return a.createElement(P,(0,E.A)({item:t},n))}}function D(e){let{items:t,...n}=e;return a.createElement(I,null,t.map(((e,t)=>a.createElement(W,(0,E.A)({key:t,item:e,index:t},n)))))}const R=(0,a.memo)(D),z={menu:"menu_izAj",menuWithAnnouncementBar:"menuWithAnnouncementBar_l2a_"};function U(e){let{path:t,sidebar:n,className:l}=e;const o=function(){const{isActive:e}=(0,_.Mj)(),[t,n]=(0,a.useState)(e);return(0,i.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,r.A)("menu thin-scrollbar",z.menu,o&&z.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,r.A)(d.G.docs.docSidebarMenu,"menu__list")},a.createElement(R,{items:n,activePath:t,level:1})))}const V="sidebar_RiAD",Y="sidebarWithHideableNavbar_d0QC",j="sidebarHidden_Lg_2",q="sidebarLogo_YUvz";function K(e){let{path:t,sidebar:n,onCollapse:l,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,p.p)();return a.createElement("div",{className:(0,r.A)(V,c&&Y,o&&j)},c&&a.createElement(h.A,{tabIndex:-1,className:q}),a.createElement(U,{path:t,sidebar:n}),i&&a.createElement(v,{onClick:l}))}const Q=a.memo(K);var X=n(9876),$=n(5600);const J=e=>{let{sidebar:t,path:n}=e;const l=(0,X.M)();return a.createElement("ul",{className:(0,r.A)(d.G.docs.docSidebarMenu,"menu__list")},a.createElement(R,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function O(e){return a.createElement($.GX,{component:J,props:e})}const Z=a.memo(O);function ee(e){const t=(0,b.l)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Q,e),l&&a.createElement(Z,e))}var te=n(6347);const ne={expandButton:"expandButton__5cy",expandButtonIcon:"expandButtonIcon_FlNX"};function ae(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ne.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(f,{className:ne.expandButtonIcon}))}const le={docSidebarContainer:"docSidebarContainer_UQUJ",docSidebarContainerHidden:"docSidebarContainerHidden_f7XD"};var oe=n(4207);function re(e){let{children:t}=e;const n=(0,oe.t)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:o}=(0,te.zy)(),[c,i]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&i(!1),l((e=>!e))}),[l,c]);return a.createElement("aside",{className:(0,r.A)(d.G.docs.docSidebarContainer,le.docSidebarContainer,n&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&n&&i(!0)}},a.createElement(re,null,a.createElement(ee,{sidebar:t,path:o,onCollapse:s,isHidden:c})),c&&a.createElement(ae,{toggleSidebar:s}))}const ie={docMainContainer:"docMainContainer_uL0j",docMainContainerEnhanced:"docMainContainerEnhanced_oQfM",docItemWrapperEnhanced:"docItemWrapperEnhanced_HFwV"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,oe.t)();return a.createElement("main",{className:(0,r.A)(ie.docMainContainer,(t||!l)&&ie.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.A)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced)},n))}const de={docPage:"docPage_ualW",docsWrapper:"docsWrapper_mKqt"};function me(e){let{children:t}=e;const n=(0,oe.t)(),[l,r]=(0,a.useState)(!1);return a.createElement(o.A,{wrapperClassName:de.docsWrapper},a.createElement(u,null),a.createElement("div",{className:de.docPage},n&&a.createElement(ce,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(se,{hiddenSidebarContainer:l},t)))}var ue=n(2967),be=n(1003),pe=n(2252),he=n(1707);function Ee(e){const{versionMetadata:t}=e,n=(0,k.mz)(e);if(!n)return a.createElement(l.default,null);const{docElement:o,sidebarName:c,sidebarItems:i}=n;return a.createElement(a.Fragment,null,a.createElement(he.A,{version:t.version,tag:(0,ue.tU)(t.pluginId,t.version)}),a.createElement(be.e3,{className:(0,r.A)(d.G.wrapper.docsPages,d.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(pe.n,{version:t},a.createElement(oe.V,{name:c,items:i},a.createElement(me,null,o)))))}},9090:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(6540),l=n(1829),o=n(1312),r=n(1003);function c(){return a.createElement(a.Fragment,null,a.createElement(r.be,{title:(0,o.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.A,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},2252:(e,t,n)=>{n.d(t,{n:()=>r,r:()=>c});var a=n(6540),l=n(9532);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new l.dV("DocsVersionProvider");return e}}}]);