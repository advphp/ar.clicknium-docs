"use strict";(self.webpackChunkclickcorp=self.webpackChunkclickcorp||[]).push([[516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},p="child",o={unversionedId:"api/python/sap/sapelement/child",id:"api/python/sap/sapelement/child",title:"child",description:"def child(self, index: int)",source:"@site/doc/api/python/sap/sapelement/child.md",sourceDirName:"api/python/sap/sapelement",slug:"/api/python/sap/sapelement/child",permalink:"/clicknium-docs/api/python/sap/sapelement/child",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SapElement",permalink:"/clicknium-docs/api/python/sap/sapelement/"},next:{title:"select_item",permalink:"/clicknium-docs/api/python/sap/sapelement/select_item"}},l={},c=[],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"child"},"child"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"def child(self, index: int)")),"  "),(0,a.kt)("p",null,"Get child element with index."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Remarks:")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"The index starts from 0."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:"),(0,a.kt)("br",{parentName:"p"}),"\n","","\u2003",(0,a.kt)("strong",{parentName:"p"},"index","[Required]"),": int",(0,a.kt)("br",{parentName:"p"}),"\n","","\u2003","\u2003"," index specified, get the nth child"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:"),(0,a.kt)("br",{parentName:"p"}),"\n","","\u2003",(0,a.kt)("a",{parentName:"p",href:"/clicknium-docs/api/python/sap/sapelement/"},"SapElement")," object if it is found, or None if not"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from clicknium import clicknium as cc, locator, ui\n    \n# get sap driver\nsap_driver = cc.sap\n\n# login sap application\nsap_driver.login("path", "connection", "client", "username", "password")\n\n# find sap element\nsap_ele = sap_driver.find_element(locator.sap.item_q)\n\n# get first child\nfirst_child = sap_ele.child[0]\n')))}m.isMDXComponent=!0}}]);