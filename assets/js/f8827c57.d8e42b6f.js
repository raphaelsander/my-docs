"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[5477],{6225:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(4848),o=s(8453);const i={id:"cewl",title:"cewl"},r=void 0,a={id:"pentest/cewl",title:"cewl",description:"A CeWL (Custom Word List Generator) \xe9 uma ferramenta desenvolvida em Ruby que",source:"@site/docs/pentest/cewl.mdx",sourceDirName:"pentest",slug:"/pentest/cewl",permalink:"/my-docs/docs/pentest/cewl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"cewl",title:"cewl"},sidebar:"tutorialSidebar",previous:{title:"ascii",permalink:"/my-docs/docs/pentest/ascii"},next:{title:"crunch",permalink:"/my-docs/docs/pentest/crunch"}},c={},d=[{value:"Uso B\xe1sico do CeWL",id:"uso-b\xe1sico-do-cewl",level:2},{value:"Extraindo E-mails",id:"extraindo-e-mails",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A CeWL (Custom Word List Generator) \xe9 uma ferramenta desenvolvida em Ruby que\npermite gerar ",(0,t.jsx)(n.em,{children:"wordlists"})," extra\xeddas de conte\xfados de p\xe1ginas na web."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/digininja/CeWL",children:"https://github.com/digininja/CeWL"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"uso-b\xe1sico-do-cewl",children:"Uso B\xe1sico do CeWL"}),"\n",(0,t.jsx)(n.p,{children:"Criando wordlist com 7 caracteres em endere\xe7o espec\xedfico:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cewl https://alvo.com/ -m 7 -w words.txt\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Importante o uso da ",(0,t.jsx)(n.code,{children:"/"})," ap\xf3s o dom\xednio, caso contr\xe1rio a sua ",(0,t.jsx)(n.em,{children:"wordlist"})," pode\nficar vazia."]})}),"\n",(0,t.jsx)(n.p,{children:"Verificando a wordlist:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat words.txt\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Retire apenas as palavras necess\xe1rias."})}),"\n",(0,t.jsx)(n.h2,{id:"extraindo-e-mails",children:"Extraindo E-mails"}),"\n",(0,t.jsxs)(n.p,{children:["\xc9 poss\xedvel extrair somente os e-mails com o CeWL e enviar as palavras coletadas\npara ",(0,t.jsx)(n.code,{children:"/dev/null"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'cewl -e --email_file emails.txt "https://alvo.com/" > /dev/null\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);