"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[8291],{5037:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var r=s(4848),a=s(8453);const d={id:"dig",title:"dig"},i=void 0,o={id:"linux/dig",title:"dig",description:"dig \xe9 uma ferramenta flex\xedvel para interrogar servidores de nomes DNS. Ele",source:"@site/docs/linux/dig.mdx",sourceDirName:"linux",slug:"/linux/dig",permalink:"/my-docs/docs/linux/dig",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dig",title:"dig"},sidebar:"tutorialSidebar",previous:{title:"dd",permalink:"/my-docs/docs/linux/dd"},next:{title:"find",permalink:"/my-docs/docs/linux/find"}},t={},c=[{value:"Checando Nameserver",id:"checando-nameserver",level:2},{value:"Transfer\xeancia de Zona",id:"transfer\xeancia-de-zona",level:2},{value:"Endere\xe7os A (IPv4)",id:"endere\xe7os-a-ipv4",level:2}];function l(e){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dig"})," \xe9 uma ferramenta flex\xedvel para interrogar servidores de nomes DNS. Ele\nrealiza pesquisas de DNS e exibe as respostas retornadas do nome servidores que\nforam consultados. A maioria dos administradores de DNS usa dig para solucionar\nproblemas de DNS devido \xe0 sua flexibilidade, facilidade de uso e clareza de\nsa\xedda. Outras ferramentas de pesquisa tendem a ter menos funcionalidades do que\n",(0,r.jsx)(n.code,{children:"dig"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"checando-nameserver",children:"Checando Nameserver"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dig -t ns site.com\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dig -t mx site.com\n"})}),"\n",(0,r.jsx)(n.h2,{id:"transfer\xeancia-de-zona",children:"Transfer\xeancia de Zona"}),"\n",(0,r.jsx)(n.p,{children:"Para for\xe7ar a transfer\xeancia de zona:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dig -t axfr site.com @ns1.site.com\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dig -t axfr site.com @ns2.site.com\n"})}),"\n",(0,r.jsx)(n.h2,{id:"endere\xe7os-a-ipv4",children:"Endere\xe7os A (IPv4)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ dig tesla.com +short\n23.9.66.10\n104.119.104.74\n184.85.228.70\n23.201.26.71\n184.30.18.203\n96.16.108.43\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(6540);const a={},d=r.createContext(a);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);