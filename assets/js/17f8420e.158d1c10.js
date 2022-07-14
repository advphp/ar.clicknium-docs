"use strict";(self.webpackChunkclickcorp=self.webpackChunkclickcorp||[]).push([[5809],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="ExtensionOperationError",p={unversionedId:"api/python/exceptions/extensionoperationerror",id:"api/python/exceptions/extensionoperationerror",title:"ExtensionOperationError",description:"- extends: BaseError",source:"@site/doc/api/python/exceptions/extensionoperationerror.md",sourceDirName:"api/python/exceptions",slug:"/api/python/exceptions/extensionoperationerror",permalink:"/clicknium-docs/api/python/exceptions/extensionoperationerror",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ElementNotFoundError",permalink:"/clicknium-docs/api/python/exceptions/elementcannotfounderror"},next:{title:"InvalidOperationError",permalink:"/clicknium-docs/api/python/exceptions/invalidoperationerror"}},l={},c=[{value:"message",id:"message",level:3},{value:"stacktrace",id:"stacktrace",level:3},{value:"extention_type",id:"extention_type",level:3},{value:"operation",id:"operation",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extensionoperationerror"},"ExtensionOperationError"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: ",(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/exceptions/baseerror"},"BaseError"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'ExtensionOperationError is raised when an extension fails in operation "install", "update" or "uninstall".')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#message"},"message")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#stacktrace"},"stacktrace")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#extention_type"},"extention_type")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#operation"},"operation"))),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: str")),(0,o.kt)("p",null,"Message of the exception."),(0,o.kt)("h3",{id:"stacktrace"},"stacktrace"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: str")),(0,o.kt)("p",null,"A string representing all the calls prior to the function that raised the exception."),(0,o.kt)("h3",{id:"extention_type"},"extention_type"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: str")),(0,o.kt)("p",null,"Type of the extension."),(0,o.kt)("h3",{id:"operation"},"operation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: str")),(0,o.kt)("p",null,"Operation of the extension."))}u.isMDXComponent=!0}}]);