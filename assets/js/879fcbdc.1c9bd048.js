"use strict";(self.webpackChunkclickcorp=self.webpackChunkclickcorp||[]).push([[3316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,d=m["".concat(l,".").concat(u)]||m[u]||b[u]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4460:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="child",c={unversionedId:"api/python/webdriver/browser/browsertab/webelement/child",id:"api/python/webdriver/browser/browsertab/webelement/child",title:"child",description:"def child(self, index: int)",source:"@site/doc/api/python/webdriver/browser/browsertab/webelement/child.md",sourceDirName:"api/python/webdriver/browser/browsertab/webelement",slug:"/api/python/webdriver/browser/browsertab/webelement/child",permalink:"/clicknium-docs/api/python/webdriver/browser/browsertab/webelement/child",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"WebElement",permalink:"/clicknium-docs/api/python/webdriver/browser/browsertab/webelement/"},next:{title:"set_property",permalink:"/clicknium-docs/api/python/webdriver/browser/browsertab/webelement/set_property"}},l={},p=[],s={toc:p};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"child"},"child"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"def child(self, index: int)")),"  "),(0,o.kt)("p",null,"Get child element with index."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Remarks:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The index starts from 0."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:"),(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003",(0,o.kt)("strong",{parentName:"p"},"index","[Required]"),": int",(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003","\u2003"," index specified, get the nth child"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:"),(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003",(0,o.kt)("a",{parentName:"p",href:"/clicknium-docs/api/python/webdriver/browser/browsertab/webelement/"},"WebElement")," object if it is found, or None if not"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from clicknium import clicknium as cc, locator, ui\n    \nchrome_tab = cc.chrome.open("https://bing.com")\n\n# get web element\nele = chrome_tab.find_element(locator.chrome.bing.search_sb_form_q)\n\n# get element\'s first child\nfirst_child = ele.child[0]\n')))}b.isMDXComponent=!0}}]);