"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[7806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"cewl",title:"CeWL"},i="CeWL - Custom Word List generator",s={unversionedId:"pentest/cewl",id:"pentest/cewl",title:"CeWL",description:"A CeWL (Custom Word List generator) \xe9 uma ferramenta desenvolvida em Ruby que",source:"@site/docs/pentest/cewl.mdx",sourceDirName:"pentest",slug:"/pentest/cewl",permalink:"/my-docs/docs/pentest/cewl",draft:!1,tags:[],version:"current",frontMatter:{id:"cewl",title:"CeWL"},sidebar:"tutorialSidebar",previous:{title:"ASCII",permalink:"/my-docs/docs/pentest/ascii"},next:{title:"crunch",permalink:"/my-docs/docs/pentest/crunch"}},l={},c=[{value:"Uso B\xe1sico do CeWL",id:"uso-b\xe1sico-do-cewl",level:2},{value:"Extraindo E-mails",id:"extraindo-e-mails",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cewl---custom-word-list-generator"},"CeWL - Custom Word List generator"),(0,a.kt)("p",null,"A CeWL (Custom Word List generator) \xe9 uma ferramenta desenvolvida em Ruby que\npermite gerar ",(0,a.kt)("em",{parentName:"p"},"wordlists")," extra\xeddas de conte\xfados de p\xe1ginas na web."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/digininja/CeWL"},"https://github.com/digininja/CeWL")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"uso-b\xe1sico-do-cewl"},"Uso B\xe1sico do CeWL"),(0,a.kt)("p",null,"Criando wordlist com 7 caracteres em endere\xe7o espec\xedfico:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cewl https://alvo.com/ -m 7 -w words.txt\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Importante o uso da ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," ap\xf3s o dom\xednio, caso contr\xe1rio a sua ",(0,a.kt)("em",{parentName:"p"},"wordlist")," pode\nficar vazia.")),(0,a.kt)("p",null,"Verificando a wordlist:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat words.txt\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Retire apenas as palavras necess\xe1rias.")),(0,a.kt)("h2",{id:"extraindo-e-mails"},"Extraindo E-mails"),(0,a.kt)("p",null,"\xc9 poss\xedvel extrair somente os e-mails com o CeWL e enviar as palavras coletadas\npara ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cewl -e --email_file emails.txt "https://alvo.com/" > /dev/null\n')))}u.isMDXComponent=!0}}]);