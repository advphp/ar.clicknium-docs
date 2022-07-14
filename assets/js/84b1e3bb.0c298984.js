"use strict";(self.webpackChunkclickcorp=self.webpackChunkclickcorp||[]).push([[2471],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,y=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,sidebar_label:"BaseError"},i="BaseError",c={unversionedId:"api/python/exceptions/baseerror",id:"api/python/exceptions/baseerror",title:"BaseError",description:"- extends: Exception",source:"@site/doc/api/python/exceptions/baseerror.md",sourceDirName:"api/python/exceptions",slug:"/api/python/exceptions/baseerror",permalink:"/clicknium-docs/api/python/exceptions/baseerror",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"BaseError"},sidebar:"tutorialSidebar",previous:{title:"Exceptions",permalink:"/clicknium-docs/api/python/exceptions/"},next:{title:"ArgumentError",permalink:"/clicknium-docs/api/python/exceptions/argumenterror"}},p={},l=[{value:"message",id:"message",level:3},{value:"stacktrace",id:"stacktrace",level:3}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"baseerror"},"BaseError"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/exceptions.html#Exception",title:"Python Built-in Exception"},"Exception"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All Clicknium exceptions inherit from this class.")),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: str")),(0,o.kt)("p",null,"Message of the exception."),(0,o.kt)("h3",{id:"stacktrace"},"stacktrace"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: str")),(0,o.kt)("p",null,"A string representing all the calls prior to the function that raised the exception."))}u.isMDXComponent=!0}}]);