"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[3353],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?t.createElement(f,c(c({ref:r},p),{},{components:n})):t.createElement(f,c({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3437:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(7462),a=(n(7294),n(3905));const o={id:"rancher",title:"Rancher"},c="Rancher",i={unversionedId:"devops/rancher",id:"devops/rancher",title:"Rancher",description:"O Rancher \xe9 uma ferramenta de gerenciamento do Kubernetes para implantar e",source:"@site/docs/devops/rancher.mdx",sourceDirName:"devops",slug:"/devops/rancher",permalink:"/my-docs/docs/devops/rancher",draft:!1,tags:[],version:"current",frontMatter:{id:"rancher",title:"Rancher"},sidebar:"tutorialSidebar",previous:{title:"Ansible",permalink:"/my-docs/docs/devops/ansible"},next:{title:"Linux",permalink:"/my-docs/docs/category/linux"}},l={},u=[{value:"Execu\xe7\xe3o Local",id:"execu\xe7\xe3o-local",level:2}],p={toc:u},s="wrapper";function d(e){let{components:r,...n}=e;return(0,a.kt)(s,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rancher"},"Rancher"),(0,a.kt)("p",null,"O Rancher \xe9 uma ferramenta de gerenciamento do Kubernetes para implantar e\nexecutar clusters em qualquer lugar e em qualquer provedor."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"execu\xe7\xe3o-local"},"Execu\xe7\xe3o Local"),(0,a.kt)("p",null,"Para executar o Rancher localmente sobre o Docker para fins de estudo ou\ngerenciar qualquer cluster Kubernetes existente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run --privileged -d \\\n    --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    rancher/rancher\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Para acessar o Rancher use o IP do host onde foi instalado.")),(0,a.kt)("p",null,"Refer\xeancia: ",(0,a.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/reference-guides/single-node-rancher-in-docker/http-proxy-configuration"},"Single Node Rancher")))}d.isMDXComponent=!0}}]);