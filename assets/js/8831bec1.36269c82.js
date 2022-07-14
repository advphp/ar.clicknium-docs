"use strict";(self.webpackChunkclickcorp=self.webpackChunkclickcorp||[]).push([[6876],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>w});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),w=o,d=u["".concat(p,".").concat(w)]||u[w]||b[w]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function w(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1132:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={},i="Browser",c={unversionedId:"api/python/webdriver/browser/browser",id:"api/python/webdriver/browser/browser",title:"Browser",description:"Browser class provides methods to browser operations.",source:"@site/doc/api/python/webdriver/browser/browser.md",sourceDirName:"api/python/webdriver/browser",slug:"/api/python/webdriver/browser/",permalink:"/clicknium-docs/api/python/webdriver/browser/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"attach_by_title_url",permalink:"/clicknium-docs/api/python/webdriver/attach_by_title_url"},next:{title:"get_tab",permalink:"/clicknium-docs/api/python/webdriver/browser/get_tab"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],l={toc:s};function b(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browser"},"Browser"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Browser class provides methods to browser operations.")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tabs"),": List[",(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/webdriver/browser/browsertab/"},"BrowserTab"),"], get browser's all tabs.")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/webdriver/browser/new_tab"},"new_tab"),": open a new tab in current browser, return ",(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/webdriver/browser/browsertab/"},"BrowserTab"),".  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/webdriver/browser/get_tab"},"get_tab"),": get tab by specified title and/or url, return ",(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/webdriver/browser/browsertab/"},"BrowserTab"),".  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/webdriver/browser/get_active_tab"},"get_active_tab"),": get the current active tab of the browser., return ",(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/webdriver/browser/browsertab/"},"BrowserTab"),".  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/webdriver/browser/close"},"close"),": close the browser.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/webdriver/browser/maximize"},"maximize"),": maximize the browser window.")))}b.isMDXComponent=!0}}]);