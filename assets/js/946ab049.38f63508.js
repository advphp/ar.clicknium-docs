"use strict";(self.webpackChunkclickcorp=self.webpackChunkclickcorp||[]).push([[905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},A=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,A=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(l,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(m,i(i({ref:t},A),{},{components:n})):r.createElement(m,i({ref:t},A))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Project Management",c={unversionedId:"developtools/vscode/project_management",id:"developtools/vscode/project_management",title:"Project Management",description:"Overview",source:"@site/doc/developtools/vscode/project_management.md",sourceDirName:"developtools/vscode",slug:"/developtools/vscode/project_management",permalink:"/clicknium-docs/developtools/vscode/project_management",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Code IntelliSense",permalink:"/clicknium-docs/developtools/vscode/codeintelliSense"},next:{title:"Project Package",permalink:"/clicknium-docs/developtools/vscode/project_package"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Create Project",id:"create-project",level:2},{value:"Project Structure",id:"project-structure",level:3},{value:"Run/Debug Project",id:"rundebug-project",level:2},{value:"Run the project",id:"run-the-project",level:3},{value:"Debug the project",id:"debug-the-project",level:3},{value:"Basics",id:"basics",level:4},{value:"Monitor Variables",id:"monitor-variables",level:4},{value:"Debug Console",id:"debug-console",level:4}],A={toc:p};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-management"},"Project Management"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Clicknium project encapsulates python automation files to guarantee the automation scripts having same result in developing, debugging, execution and distribution. "),(0,o.kt)("h2",{id:"create-project"},"Create Project"),(0,o.kt)("p",null,"In Visual Studio Code, press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+P")," to show the Command Palette, input or select ",(0,o.kt)("inlineCode",{parentName:"p"},"Clicknium: Create Project"),", and then select a folder where the project is stored according to the pop-up window.\n",(0,o.kt)("img",{alt:"project create",src:n(6233).Z,width:"1387",height:"921"})),(0,o.kt)("p",null,"When the project is created, a pop-up window in the lower right corner shows the general project intialization information and the output panel shows details. After initialization, the current Python virtual enviroment can be seen when you open app.py.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"project create",src:n(5651).Z,width:"218",height:"55"})),(0,o.kt)("h3",{id:"project-structure"},"Project Structure"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project structure",src:n(852).Z,width:"452",height:"273"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"app.py"),":a python file where the main function is the execution entry of the project.\n",(0,o.kt)("img",{alt:"project appyy",src:n(8953).Z,width:"1796",height:"371"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"clicknium.yaml"),":configuration file where you can\xa0configure python version, python packages, project entry file and locator store references, etc for the project.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"project appyaml",src:n(7241).Z,width:"309",height:"371"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"startUp"),": The project entry file, if you want to change the project run entry file to another file, fill the file name without suffix in this field.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"log"),'\uff1aThe project log. Its property "folder" indicates the location of the log files to be saved. If its value is not specified, it will use default location %LOCALAPPDATA%\\Clicknium\\Log.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"requirements"),"\uff1arunning project dependency.",(0,o.kt)("br",{parentName:"p"}),"\n","","Python: Python version is 3.7.0 by default. In creating project, if Visual Studio Code already has at least one supported version Python installed, clicknium extension will choose current selected python interpreter to create the project, the python version in this configuration file will be updated accordingly. If Visual Studio Code does not have Python installed, clicknium extension will install Python 3.7.0 as described in configuration file by default."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"project appyaml",src:n(5234).Z,width:"1421",height:"702"}),(0,o.kt)("br",{parentName:"p"}),"\n","","Packages\uff1aPython package dependency. In this configuration, you can add one or more Python packages required by this project in the format of package-version. If the version is blank or null, the latest version will be used automatically.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"project appyamlpython",src:n(6719).Z,width:"309",height:"209"}),(0,o.kt)("br",{parentName:"p"}),"\n","","If there is no required Python package dependency\uff0cit will be configured as [].",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"project appyamlpython",src:n(1040).Z,width:"213",height:"101"}),(0,o.kt)("br",{parentName:"p"}),"\n","","locators: The cloud locator repository dependency, configured in the same way as Python package dependency.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"logo.ico"),"\uff1aThe icon of executable file after packaging the project. You may replace this file if you want customize the executable file icon.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},".gitignore"),"\uff1aWhen using Git, you can add or remove files that you want to ignore."))),(0,o.kt)("h2",{id:"rundebug-project"},"Run/Debug Project"),(0,o.kt)("h3",{id:"run-the-project"},"Run the project"),(0,o.kt)("p",null,'In Visual Studio Code, press "Ctrl+Shift+P" to show the Command Palette, input or select "Clicknium: Run Project". The clicknium extension will deploy and run the project based on clicknium.yaml.\n',(0,o.kt)("img",{alt:"project run",src:n(5865).Z,width:"1387",height:"921"})," "),(0,o.kt)("h3",{id:"debug-the-project"},"Debug the project"),(0,o.kt)("h4",{id:"basics"},"Basics"),(0,o.kt)("p",null,"In Visual Studio Code, set a breakpoint to the code where you want to pause,\npress ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+P"),' to show the Command Palette, input or select "Clicknium: Debug Project". The clicknium extension will start projec debugging with debug buttons shown at the top of Visual Studio Code.',(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"project debug",src:n(9299).Z,width:"226",height:"56"}),(0,o.kt)("br",{parentName:"p"}),"\n","","Continue (F5) / Pause (F6)",(0,o.kt)("br",{parentName:"p"}),"\n","","Step over (F10)",(0,o.kt)("br",{parentName:"p"}),"\n","","Step in (F11)",(0,o.kt)("br",{parentName:"p"}),"\n","","Step out (Shift + F11)",(0,o.kt)("br",{parentName:"p"}),"\n","","Restart (Ctrl+Shift+F5)",(0,o.kt)("br",{parentName:"p"}),"\n","","Stop (Shift + F5)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"project debug",src:n(8561).Z,width:"1387",height:"921"})),(0,o.kt)("h4",{id:"monitor-variables"},"Monitor Variables"),(0,o.kt)("p",null,"In the upper left corner of Visual Studio Code, you can see the variables is debugging the running values.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project debug",src:n(4544).Z,width:"1390",height:"925"})),(0,o.kt)("h4",{id:"debug-console"},"Debug Console"),(0,o.kt)("p",null,'In Visual Studio Code, open the debug console by "View -> Debug Console"   '),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project debug console",src:n(5758).Z,width:"1390",height:"925"})))}s.isMDXComponent=!0},6233:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_project-35b4fa83ca7da4fc39980a42a47538b5.gif"},852:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_project_1-c9566d3324c8c0ca163a463d8bd26812.png"},8953:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_project_apppy-b1b5bee1db91f1774e2267f0dc51a45a.png"},5651:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},7241:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_project_appyaml-2868e5e62bf3ac6027547e0f1a5267ad.png"},6719:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},1040:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},5234:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_project_appyaml_python_config-add9a1865a2c82300fa1b981e8f986da.png"},8561:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug_project-eb26e4905e76a385d18a52e9ef99d6ac.gif"},4544:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug_project_1-a061f6889d9ab87b461dd6dd88b3eccb.png"},5758:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug_project_2-40605fb25da4c09095d3e6ec74a3afc6.png"},9299:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},5865:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run_project-466c087f15ecddb8b05d4e58e5c6c864.gif"}}]);