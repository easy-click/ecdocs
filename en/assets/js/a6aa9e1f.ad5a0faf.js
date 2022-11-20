"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[3089],{2754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),r=a(2263),n=a(3527),s=a(5712),o=a(5999),i=a(1750);function c(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(i.Z,{permalink:a,title:l.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&l.createElement(i.Z,{permalink:r,title:l.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var m=a(1944),u=a(5281),d=a(4739),g=a(6010);function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:n,blogTitle:s,permalink:o}=t,i="/"===o?a:s;return l.createElement(l.Fragment,null,l.createElement(m.d,{title:i,description:n}),l.createElement(d.Z,{tag:"blog_posts_list"}))}function h(e){const{metadata:t,items:a,sidebar:r}=e;return l.createElement(n.Z,{sidebar:r},a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(c,{metadata:t}))}function E(e){return l.createElement(m.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogListPage)},l.createElement(p,e),l.createElement(h,e))}},8824:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(7294),r=a(2263);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}},3527:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(9960),r=a(6550),n=a(5999),s=a(6010),o=a(7294);const i="sidebar_o0vc",c="sidebarItemTitle_SxnF",m="sidebarItemList_V7da",u="sidebarItem_WiIx",d="sidebarItemLink_YMi1",g="sidebarItemLinkActive_nlIT";function p(e){let{sidebar:t}=e;const a=(0,r.TH)().pathname;return console.log(a),a.includes("blog")?o.createElement("nav",{className:(0,s.Z)(i,"thin-scrollbar"),"aria-label":(0,n.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},o.createElement("div",{className:(0,s.Z)(c,"margin-bottom--md")},t.title),o.createElement("ul",{className:m},t.items.map((e=>o.createElement("li",{key:e.permalink,className:u},o.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title)))))):null}var h=a(8484);const E="container_box_Sy7i",b="title_h_8e",v="blogLayout_dYEJ";function f(e){const{sidebar:t,toc:a,children:l,...n}=e,i=t&&t.items.length>0,c=(0,r.TH)().pathname,{title:m}=t,u=c.includes("/blog"),[d,g]=o.useState(!1),[f,N]=o.useState(!1);return(0,o.useEffect)((()=>{"/usescene"==c||"/case"==c||"/en/usescene"==c||"/en/case"==c?g(!0):c.includes("blog")&&N(!0)})),o.createElement(h.Z,n,o.createElement("div",{className:(0,s.Z)("container margin-vert--lg",{[v]:u})},"\u4f7f\u7528\u573a\u666f"===m&&"/usescene"==c||"/en/usescene"==c?o.createElement("h1",{className:b},"\u4f7f\u7528\u573a\u666f"):"\u5408\u4f5c\u4f19\u4f34"===m&&"/case"==c||"/en/case"==c?o.createElement("h1",{className:b},"\u5408\u4f5c\u4f19\u4f34"):"",o.createElement("div",{className:"row"},i&&"\u6240\u6709\u6587\u7ae0"===m&&o.createElement("aside",{className:"col col--3"},o.createElement(p,{sidebar:t})),o.createElement("main",{className:(0,s.Z)("col",{"col--7":i&&"\u6240\u6709\u6587\u7ae0"===m,"col--10":!d&&!f,[E]:d}),itemScope:!0,itemType:"http://schema.org/Blog"},l),a&&o.createElement("div",{className:"col col--2"},a))))}},5712:(e,t,a)=>{a.d(t,{Z:()=>x});var l=a(9960),r=a(8824),n=a(5999),s=a(4996),o=a(8780),i=a(3905),c=a(7294),m=a(6010);function u(e){return e.href?c.createElement(l.Z,e):c.createElement(c.Fragment,null,e.children)}function d(e){let{author:t}=e;const{name:a,title:l,url:r,imageURL:n,email:s}=t,o=r||s&&`mailto:${s}`||void 0;return c.createElement("div",{className:"avatar margin-bottom--sm"},n&&c.createElement(u,{href:o,className:"avatar__photo-link"},c.createElement("img",{className:"avatar__photo",src:n,alt:a})),a&&c.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},c.createElement("div",{className:"avatar__name"},c.createElement(u,{href:o,itemProp:"url"},c.createElement("span",{itemProp:"name"},a))),l&&c.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const g="authorCol_FlmR",p="imageOnlyAuthorRow_trpF",h="imageOnlyAuthorCol_S2np";function E(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const l=t.every((e=>{let{name:t}=e;return!t}));return c.createElement("div",{className:(0,m.Z)("margin-top--md margin-bottom--sm",l?p:"row")},t.map(((e,t)=>c.createElement("div",{className:(0,m.Z)(!l&&"col col--6",l?h:g),key:t},c.createElement(d,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}var b=a(6753),v=a(5452),f=a(8727),N=a(6550);const _="container_box_khXK",Z="title_dhtx",k="desc_HDck",P="logo_rC3z",T="blogPostTitle_uMeh",w="blogPostData_Vfxe",y="blogPostDetailsFull_enUA";function x(e){const t=function(){const{selectMessage:e}=(0,r.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,s.C)(),{children:u,frontMatter:d,assets:g,metadata:p,truncated:h,isBlogPostPage:x=!1}=e,{date:I,formattedDate:F,permalink:A,tags:L,readingTime:M,title:R,editUrl:C,authors:U,description:$}=p,S=g.image??d.image,B=!x&&h,D=L.length>0,O=x?"h1":"h2",H=(0,N.TH)().pathname,{images:z}=d;return x||!H.includes("case")&&!H.includes("usescene")?c.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c.createElement("header",null,c.createElement(O,{className:T,itemProp:"headline"},x?R:c.createElement(l.Z,{itemProp:"url",to:A},R)),c.createElement("div",{className:(0,m.Z)(w,"margin-vert--md")},c.createElement("time",{dateTime:I,itemProp:"datePublished"},F),void 0!==M&&c.createElement(c.Fragment,null," \xb7 ",t(M))),c.createElement(E,{authors:U,assets:g})),S&&c.createElement("meta",{itemProp:"image",content:a(S,{absolute:!0})}),c.createElement("div",{id:x?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},c.createElement(i.Zo,{components:v.Z},u)),(D||h)&&c.createElement("footer",{className:(0,m.Z)("row docusaurus-mt-lg",{[y]:x})},D&&c.createElement("div",{className:(0,m.Z)("col",{"col--9":B})},c.createElement(f.Z,{tags:L})),x&&C&&c.createElement("div",{className:"col margin-top--sm"},c.createElement(b.Z,{editUrl:C})),B&&c.createElement("div",{className:(0,m.Z)("col text--right",{"col--3":D})},c.createElement(l.Z,{to:p.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:R})},c.createElement("b",null,c.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))):c.createElement(c.Fragment,null,c.createElement("a",{className:`${_}`,href:A},c.createElement("div",null,c.createElement("div",{className:P},c.createElement("img",{src:z||"",alt:""})),c.createElement("div",{className:Z},c.createElement("p",{style:{textAlign:"center"}},R)),c.createElement("div",{className:k},$))))}}}]);