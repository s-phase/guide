"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Known Issues",sidebar_position:4,slug:"/8310cf21-a663-4b59-b865-48efd7eabce1"},s=void 0,i={unversionedId:"Known-Issues",id:"Known-Issues",title:"Known Issues",description:"Unresolved",source:"@site/docs/Known-Issues.md",sourceDirName:".",slug:"/8310cf21-a663-4b59-b865-48efd7eabce1",permalink:"/en/docs/8310cf21-a663-4b59-b865-48efd7eabce1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Known-Issues.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Known Issues",sidebar_position:4,slug:"/8310cf21-a663-4b59-b865-48efd7eabce1"},sidebar:"tutorialSidebar",previous:{title:"Oranges",permalink:"/en/docs/oranges"},next:{title:"Links to Headings with slug",permalink:"/en/docs/links-to-headings"}},c={},l=[{value:"Unresolved",id:"a3d49a2a2eb44951b6a6f64104c90760",level:2},{value:"Resolved",id:"177acbd410494657875ca9ada24233f7",level:2},{value:"#21",id:"6677c06a15ce442e8ece81a169e27a7a",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a3d49a2a2eb44951b6a6f64104c90760"},"Unresolved"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"177acbd410494657875ca9ada24233f7"},"Resolved"),(0,a.kt)("h3",{id:"6677c06a15ce442e8ece81a169e27a7a"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/sillsdev/docu-notion/issues/21"},"#21")),(0,a.kt)("p",null,"Normal paragraph with ","<","breaking syntax",">"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"List item 1 is normal"),(0,a.kt)("li",{parentName:"ol"},"List item 2 has ","<","syntax",">"," which causes issues for the html parser (& what about :  / \\ ","[ ]"," { } ; \u201c \u2018)?!"),(0,a.kt)("li",{parentName:"ol"},"See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sillsdev/docu-notion/issues/21"},"https://github.com/sillsdev/docu-notion/issues/21"))),(0,a.kt)("p",null,"What about a link with ",(0,a.kt)("a",{parentName:"p",href:"/oranges"},"<","angle brackets",">"),"?"))}d.isMDXComponent=!0}}]);