"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[8052],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?t.createElement(f,i(i({ref:n},s),{},{components:r})):t.createElement(f,i({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9208:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={id:"dd",title:"dd"},i="dd",d={unversionedId:"linux/dd",id:"linux/dd",title:"dd",description:"O dd \xe9 um programa de clonagem que mantem as propriedades das parti\xe7\xf5es",source:"@site/docs/linux/dd.mdx",sourceDirName:"linux",slug:"/linux/dd",permalink:"/my-docs/docs/linux/dd",draft:!1,tags:[],version:"current",frontMatter:{id:"dd",title:"dd"},sidebar:"tutorialSidebar",previous:{title:"cut",permalink:"/my-docs/docs/linux/cut"},next:{title:"find",permalink:"/my-docs/docs/linux/find"}},l={},c=[{value:"Clonando Flash Drive para Arquivo",id:"clonando-flash-drive-para-arquivo",level:2},{value:"Escrevendo Imagem no Flash Drive",id:"escrevendo-imagem-no-flash-drive",level:2}],s={toc:c},p="wrapper";function u(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dd"},"dd"),(0,a.kt)("p",null,"O ",(0,a.kt)("inlineCode",{parentName:"p"},"dd")," \xe9 um programa de clonagem que mantem as propriedades das parti\xe7\xf5es\nclonadas, inclusive bits nulos s\xe3o clonados."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"clonando-flash-drive-para-arquivo"},"Clonando Flash Drive para Arquivo"),(0,a.kt)("p",null,"Insira o cart\xe3o SD ou pendrive e verifique o nome do dispositivo (geralmente\nmmcblkX ou sdcX):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fdisk -l\n")),(0,a.kt)("p",null,"No meu caso, o cart\xe3o SD \xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/mmsbkl0"),". Agora voc\xea tem que desmontar o\ndispositivo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo umount /dev/mmcblk0\n")),(0,a.kt)("p",null,"Agora, para criar uma imagem do dispositivo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dd if=/dev/mmcblk0 of=~/sd-card-copy.img\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Isso vai demorar um pouco dependendo do tamanho do armazenamento clonado.")),(0,a.kt)("h2",{id:"escrevendo-imagem-no-flash-drive"},"Escrevendo Imagem no Flash Drive"),(0,a.kt)("p",null,"Escrevendo a imagem para um dispositivo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dd if=~/sd-card-copy.img of=/dev/mmcblk0\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Normalmente a opera\xe7\xe3o de grava\xe7\xe3o \xe9 muito mais lenta que de leitura.")))}u.isMDXComponent=!0}}]);