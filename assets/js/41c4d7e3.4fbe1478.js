"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[8084],{342:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=r(4848),o=r(8453);const s={id:"fierce",title:"fierce"},i=void 0,a={id:"pentest/fierce",title:"fierce",description:"O projeto Fierce \xe9 uma ferramenta de c\xf3digo aberto, utilizada em ciberseguran\xe7a",source:"@site/docs/pentest/fierce.mdx",sourceDirName:"pentest",slug:"/pentest/fierce",permalink:"/my-docs/docs/pentest/fierce",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"fierce",title:"fierce"},sidebar:"tutorialSidebar",previous:{title:"fcrackzip",permalink:"/my-docs/docs/pentest/fcrackzip"},next:{title:"findmyhash",permalink:"/my-docs/docs/pentest/findmyhash"}},c={},d=[{value:"Uso B\xe1sico",id:"uso-b\xe1sico",level:2},{value:"Somente Dom\xednios",id:"somente-dom\xednios",level:2}];function l(e){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"O projeto Fierce \xe9 uma ferramenta de c\xf3digo aberto, utilizada em ciberseguran\xe7a\npara realizar a enumera\xe7\xe3o de DNS. Ele \xe9 projetado para ajudar os profissionais\nde seguran\xe7a a coletar subdom\xednios atrav\xe9s de brute force."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"uso-b\xe1sico",children:"Uso B\xe1sico"}),"\n",(0,t.jsx)(n.p,{children:"Para efetuar o levantamento dos nameservers via bruteforce:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"fierce -dns alvo.com -w wordlist.txt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"somente-dom\xednios",children:"Somente Dom\xednios"}),"\n",(0,t.jsx)(n.p,{children:"Filtrando brute force e exibindo apenas os subdom\xednios para uma poss\xedvel\nwordlist:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"for x in $(cat fierce_bruteforce.txt | grep Found | awk '{print $2}'); do\n    echo ${x::-1};\ndone\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);