"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[7920],{8824:(e,t,n)=>{n.d(t,{c:()=>u});var a=n(7294),l=n(2263);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${a.length}: ${e}`);const l=n.select(t),r=n.pluralForms.indexOf(l);return a[Math.min(r,a.length-1)]}(n,t,e)}}},1473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var a=n(7294),l=n(2263),r=n(8484),s=n(5742),c=n(9960),o=n(5999),u=n(373),m=n(902),i=n(8824),h=n(2239),p=n(6550),d=n(412);const g=function(){const e=(0,p.k6)(),t=(0,p.TH)(),{siteConfig:{baseUrl:n}}=(0,l.Z)();return{searchValue:d.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}};var f=n(22),y=n(8202),E=n(2539),w=n(726),S=n(1073),b=n(311),I=n(3926),k=n(1029);const F="searchQueryInput_CFBF",P="searchResultItem_U687",R="searchResultItemPath_uIbk",v="searchResultItemSummary_oZHr";function _(){const{siteConfig:{baseUrl:e}}=(0,l.Z)(),t=(0,h.gA)();let n=e;try{const{preferredVersion:e}=(0,u.J)((null==t?void 0:t.pluginId)??k.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(_){if(k.l9&&!(_ instanceof m.i6))throw _}const{selectMessage:r}=(0,i.c)(),{searchValue:c,updateSearchPath:p}=g(),[d,E]=(0,a.useState)(c),[w,S]=(0,a.useState)(),[I,P]=(0,a.useState)(),R=(0,a.useMemo)((()=>d?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:d}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[d]);(0,a.useEffect)((()=>{p(d),w&&(d?w(d,(e=>{P(e)})):P(void 0))}),[d,w]);const v=(0,a.useCallback)((e=>{E(e.target.value)}),[]);return(0,a.useEffect)((()=>{c&&c!==d&&E(c)}),[c]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,f.w)(n);S((()=>(0,y.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,R)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,R),a.createElement("input",{type:"search",name:"q",className:F,"aria-label":"Search",onChange:v,value:d,autoComplete:"off",autoFocus:!0}),!w&&d&&a.createElement("div",null,a.createElement(b.Z,null)),I&&(I.length>0?a.createElement("p",null,r(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,I&&I.map((e=>a.createElement(C,{key:e.document.i,searchResult:e}))))))}function C(e){let{searchResult:{document:t,type:n,page:l,tokens:r,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:l.b).slice(),i=u?t.s:t.t;return o||m.push(l.t),a.createElement("article",{className:P},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,E.C)(i,r):(0,w.o)(i,(0,S.m)(s,"t"),r,100)}})),m.length>0&&a.createElement("p",{className:R},(0,I.e)(m)),u&&a.createElement("p",{className:v,dangerouslySetInnerHTML:{__html:(0,w.o)(t.t,(0,S.m)(s,"t"),r,100)}}))}const q=function(){return a.createElement(r.Z,null,a.createElement(_,null))}}}]);