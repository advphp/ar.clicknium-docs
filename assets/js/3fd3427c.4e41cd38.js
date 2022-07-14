"use strict";(self.webpackChunkclickcorp=self.webpackChunkclickcorp||[]).push([[2866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,b=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},i="clicknium.is_existing",c={unversionedId:"api/python/globalfunctions/is_existing",id:"api/python/globalfunctions/is_existing",title:"clicknium.is_existing",description:"*def is_existing(",source:"@site/doc/api/python/globalfunctions/is_existing.md",sourceDirName:"api/python/globalfunctions",slug:"/api/python/globalfunctions/is_existing",permalink:"/clicknium-docs/api/python/globalfunctions/is_existing",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"clicknium.find_elements",permalink:"/clicknium-docs/api/python/globalfunctions/find_elements"},next:{title:"clicknium.wait_appear",permalink:"/clicknium-docs/api/python/globalfunctions/wait_appear"}},l={},s=[],p={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickniumis_existing"},"clicknium.is_existing"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"def is_existing(\nlocator: Union","[_Locator, str]",",\nlocator_variables: dict = {},\ntimeout: int = 30\n) -> bool")),"  "),(0,o.kt)("p",null,"Check whether the UI element exists or not."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:"),(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003",(0,o.kt)("strong",{parentName:"p"},"locator","[Required]"),": str | _Locator",(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003","\u2003"," locator string, the visit path of locator for target UI element, eg: 'locator.chrome.bing.search_sb_form_q', locator store is chrome, and locator name is search_sb_form_q. For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/clicknium-docs/automation/locator"},"Locator"),".",(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003",(0,o.kt)("strong",{parentName:"p"},"locator_variables"),": dict",(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003","\u2003"," locator variables, set to initialize parameters in locator, eg: ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "row": 1,  "column": 1}'),", more about variables, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/clicknium-docs/automation/parametric_locator"},"Parametric Locator"),".",(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003",(0,o.kt)("strong",{parentName:"p"},"timeout"),": int",(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003","\u2003"," timeout for locating the target UI element, the unit is second, and the default value is 30 seconds. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:"),(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003","Return True if the UI element exists, otherwise return False."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from clicknium import clicknium as cc, locator\n\ncc.is_existing(locator.chrome.bing.search_sb_form_q)\n\n#parametric locator\nvariables = {"name":"test"}\ncc.is_existing(locator.chrome.bing.search_sb_form_q, variables)\n')))}m.isMDXComponent=!0}}]);