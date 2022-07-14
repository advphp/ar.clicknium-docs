"use strict";(self.webpackChunkclickcorp=self.webpackChunkclickcorp||[]).push([[6789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||r;return n?i.createElement(d,a(a({ref:t},s),{},{components:n})):i.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1,sidebar_label:"Global Functions"},a="Global functions",l={unversionedId:"api/python/globalfunctions/globalfunctions",id:"api/python/globalfunctions/globalfunctions",title:"Global functions",description:"UI element operations",source:"@site/doc/api/python/globalfunctions/globalfunctions.md",sourceDirName:"api/python/globalfunctions",slug:"/api/python/globalfunctions/",permalink:"/clicknium-docs/api/python/globalfunctions/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Global Functions"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/clicknium-docs/api/python/"},next:{title:"clicknium.find_element",permalink:"/clicknium-docs/api/python/globalfunctions/find_element"}},c={},p=[{value:"UI element operations",id:"ui-element-operations",level:2},{value:"Global operations",id:"global-operations",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"global-functions"},"Global functions"),(0,o.kt)("h2",{id:"ui-element-operations"},"UI element operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/globalfunctions/find_element"},"clicknium.find_element"),": return the UI element defined by the given locator.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/globalfunctions/find_elements"},"clicknium.find_elements"),": return list of all matched Web elements by the given locator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/globalfunctions/is_existing"},"clicknium.is_existing"),": check whether the UI element exists or not"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/globalfunctions/wait_appear"},"clicknium.wait_appear"),": wait for the UI element to appear and return it within specified timeout."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/globalfunctions/wait_disappear"},"clicknium.wait_disappear"),": wait for the UI element to disappear within specified timeout.")),(0,o.kt)("h2",{id:"global-operations"},"Global operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/globalfunctions/send_hotkey"},"clicknium.send_hotkey"),": send hotkey to the cursor's current position."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/globalfunctions/send_text"},"clicknium.send_text"),": send text to  the cursor's current position."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/clicknium-docs/api/python/globalfunctions/get_screenshot"},"clicknium.get_screenshot"),": saves a screenshot of the current window to an image file.")))}u.isMDXComponent=!0}}]);