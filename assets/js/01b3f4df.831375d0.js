"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[9656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"nikto",title:"nikto"},i="nikto",s={unversionedId:"pentest/nikto",id:"pentest/nikto",title:"nikto",description:"nikto \xe9 uma ferramenta de seguran\xe7a altamente reconhecida que automatiza a",source:"@site/docs/pentest/nikto.mdx",sourceDirName:"pentest",slug:"/pentest/nikto",permalink:"/my-docs/docs/pentest/nikto",draft:!1,tags:[],version:"current",frontMatter:{id:"nikto",title:"nikto"},sidebar:"tutorialSidebar",previous:{title:"nc (netcat)",permalink:"/my-docs/docs/pentest/nc"},next:{title:"NMAP",permalink:"/my-docs/docs/pentest/nmap"}},c={},l=[{value:"Uso B\xe1sico",id:"uso-b\xe1sico",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nikto"},"nikto"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nikto")," \xe9 uma ferramenta de seguran\xe7a altamente reconhecida que automatiza a\ndetec\xe7\xe3o de vulnerabilidades em servidores web. \xc9 uma escolha popular para\ntestadores de penetra\xe7\xe3o e administradores de sistemas preocupados com a\nseguran\xe7a de seus servidores e sites."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sullo/nikto"},"https://github.com/sullo/nikto")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"uso-b\xe1sico"},"Uso B\xe1sico"),(0,o.kt)("p",null,"Aqui est\xe1 um exemplo b\xe1sico de como usar o ",(0,o.kt)("inlineCode",{parentName:"p"},"nikto")," para realizar uma verifica\xe7\xe3o\nde vulnerabilidades em um site:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nikto -h http://alvo.com.br\n")))}m.isMDXComponent=!0}}]);