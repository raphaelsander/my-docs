"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[85],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(b,l(l({ref:a},c),{},{components:t})):r.createElement(b,l({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6078:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(7462),n=(t(7294),t(3905));const o={id:"locate",title:"locate"},l="locate",i={unversionedId:"linux/locate",id:"linux/locate",title:"locate",description:"Programa utilizado para localizar arquivos.",source:"@site/docs/linux/locate.mdx",sourceDirName:"linux",slug:"/linux/locate",permalink:"/my-docs/docs/linux/locate",draft:!1,tags:[],version:"current",frontMatter:{id:"locate",title:"locate"},sidebar:"tutorialSidebar",previous:{title:"grep (global regular expression print)",permalink:"/my-docs/docs/linux/grep"},next:{title:"ls (list)",permalink:"/my-docs/docs/linux/ls"}},s={},u=[{value:"Procurando Arquivos",id:"procurando-arquivos",level:2},{value:"Atualizando DB",id:"atualizando-db",level:2},{value:"Criando DB do Usu\xe1rio",id:"criando-db-do-usu\xe1rio",level:2}],c={toc:u},d="wrapper";function p(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"locate"},"locate"),(0,n.kt)("p",null,"Programa utilizado para localizar arquivos."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"procurando-arquivos"},"Procurando Arquivos"),(0,n.kt)("p",null,"Para procurar arquivos basta passar para o ",(0,n.kt)("inlineCode",{parentName:"p"},"locate")," o nome do arquivo como\nargumento:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"locate access.log\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"locate sshd_config\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Por quest\xf5es de seguran\xe7a, normalmente os arquivos dos usu\xe1rios n\xe3o s\xe3o\nlistados.")),(0,n.kt)("h2",{id:"atualizando-db"},"Atualizando DB"),(0,n.kt)("p",null,"O ",(0,n.kt)("inlineCode",{parentName:"p"},"locate")," utiliza um banco de dados para indexar os arquivos e caso algum\narquivo foi criado recentemente, talvez se faz necess\xe1rio for\xe7ar a atualiza\xe7\xe3o\ndo banco de dados do ",(0,n.kt)("inlineCode",{parentName:"p"},"locate")," sem a necessidade de reiniciar o sistema que\ntamb\xe9m atualiza o banco. Para isso basta executar o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"updatedb")," com\ndireitos de ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo updatedb\n")),(0,n.kt)("h2",{id:"criando-db-do-usu\xe1rio"},"Criando DB do Usu\xe1rio"),(0,n.kt)("p",null,"Se voc\xea deseja criar um banco de dados apenas para o seu usu\xe1rio, voc\xea pode\nusar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"updatedb -l 0 -o $HOME/.mydb.db -U $HOME\n")),(0,n.kt)("p",null,"Ent\xe3o, para pesquisar dentro desse novo DB, use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"locate -d ~/.mydb.db id_rsa\n")),(0,n.kt)("p",null,"Para tornar mais conveniente o uso desse comando, crie dois ",(0,n.kt)("inlineCode",{parentName:"p"},"alias"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'alias lupdatedb="updatedb -l 0 -o $HOME/.mydb.db -U $HOME"\nalias llocate="locate -d ~/.mydb.db"\n')),(0,n.kt)("p",null,"Depois de criado os dois ",(0,n.kt)("inlineCode",{parentName:"p"},"alias"),", basta utiliz\xe1-los:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ lupdatedb\n$ llocate id_rsa\n/home/user/.ssh/id_rsa\n/home/user/.ssh/id_rsa.pub\n")))}p.isMDXComponent=!0}}]);