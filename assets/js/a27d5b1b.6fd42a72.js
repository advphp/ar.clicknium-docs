"use strict";(self.webpackChunkclickcorp=self.webpackChunkclickcorp||[]).push([[5479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:8},a="clicknium.send_text",c={unversionedId:"api/python/globalfunctions/send_text",id:"api/python/globalfunctions/send_text",title:"clicknium.send_text",description:"*def send_text(",source:"@site/doc/api/python/globalfunctions/send_text.md",sourceDirName:"api/python/globalfunctions",slug:"/api/python/globalfunctions/send_text",permalink:"/clicknium-docs/api/python/globalfunctions/send_text",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"clicknium.send_hotkey",permalink:"/clicknium-docs/api/python/globalfunctions/send_hotkey"},next:{title:"clicknium.get_screenshot",permalink:"/clicknium-docs/api/python/globalfunctions/get_screenshot"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickniumsend_text"},"clicknium.send_text"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"def send_text(\nself,\ntext: str\n) -> None")),"  "),(0,o.kt)("p",null,"Send text to the cursor's current position."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Remarks:"),(0,o.kt)("br",{parentName:"p"}),"\n","This method is to send text to the system. If you need to send the text to a specific UI element, you need to set the UI element to focused state before calling this method. Or you may use ",(0,o.kt)("a",{parentName:"p",href:"/clicknium-docs/api/python/uielement/set_text"},"set_text")," which is bound to a UI element.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:"),(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003",(0,o.kt)("strong",{parentName:"p"},"text","[Requried]"),": str",(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003","\u2003"," text string to be sent.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:"),(0,o.kt)("br",{parentName:"p"}),"\n","","\u2003","None"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from clicknium import clicknium\n\nclicknium.find_element(locator.chrome.bing.search_sb_form_q).set_focus()\n\nclicknium.send_text("clicknium")\n')))}u.isMDXComponent=!0}}]);