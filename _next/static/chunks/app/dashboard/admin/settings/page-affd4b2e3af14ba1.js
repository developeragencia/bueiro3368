(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1775],{22130:(e,a,s)=>{"use strict";s.d(a,{BT:()=>o,Wu:()=>c,ZB:()=>d,Zp:()=>l,aR:()=>n,wL:()=>m});var r=s(95155),t=s(12115),i=s(21567);let l=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,r.jsx)("div",{ref:a,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",s),...t})});l.displayName="Card";let n=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,r.jsx)("div",{ref:a,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",s),...t})});n.displayName="CardHeader";let d=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,r.jsx)("div",{ref:a,className:(0,i.cn)("font-semibold leading-none tracking-tight",s),...t})});d.displayName="CardTitle";let o=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,r.jsx)("div",{ref:a,className:(0,i.cn)("text-sm text-muted-foreground",s),...t})});o.displayName="CardDescription";let c=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,r.jsx)("div",{ref:a,className:(0,i.cn)("p-6 pt-0",s),...t})});c.displayName="CardContent";let m=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,r.jsx)("div",{ref:a,className:(0,i.cn)("flex items-center p-6 pt-0",s),...t})});m.displayName="CardFooter"},37480:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});let r=(0,s(82800).A)("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]])},38684:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});let r=(0,s(82800).A)("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]])},44857:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});let r=(0,s(82800).A)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},58629:(e,a,s)=>{"use strict";s.d(a,{B8:()=>P,UC:()=>E,bL:()=>S,l9:()=>D});var r=s(12115),t=s(93610),i=s(18166),l=s(67357),n=s(17028),d=s(23360),o=s(4256),c=s(1488),m=s(67668),x=s(95155),u="Tabs",[h,p]=(0,i.A)(u,[l.RG]),g=(0,l.RG)(),[j,b]=h(u),y=r.forwardRef((e,a)=>{let{__scopeTabs:s,value:r,onValueChange:t,defaultValue:i,orientation:l="horizontal",dir:n,activationMode:u="automatic",...h}=e,p=(0,o.jH)(n),[g,b]=(0,c.i)({prop:r,onChange:t,defaultProp:i});return(0,x.jsx)(j,{scope:s,baseId:(0,m.B)(),value:g,onValueChange:b,orientation:l,dir:p,activationMode:u,children:(0,x.jsx)(d.sG.div,{dir:p,"data-orientation":l,...h,ref:a})})});y.displayName=u;var v="TabsList",f=r.forwardRef((e,a)=>{let{__scopeTabs:s,loop:r=!0,...t}=e,i=b(v,s),n=g(s);return(0,x.jsx)(l.bL,{asChild:!0,...n,orientation:i.orientation,dir:i.dir,loop:r,children:(0,x.jsx)(d.sG.div,{role:"tablist","aria-orientation":i.orientation,...t,ref:a})})});f.displayName=v;var N="TabsTrigger",k=r.forwardRef((e,a)=>{let{__scopeTabs:s,value:r,disabled:i=!1,...n}=e,o=b(N,s),c=g(s),m=A(o.baseId,r),u=F(o.baseId,r),h=r===o.value;return(0,x.jsx)(l.q7,{asChild:!0,...c,focusable:!i,active:h,children:(0,x.jsx)(d.sG.button,{type:"button",role:"tab","aria-selected":h,"aria-controls":u,"data-state":h?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:m,...n,ref:a,onMouseDown:(0,t.m)(e.onMouseDown,e=>{i||0!==e.button||!1!==e.ctrlKey?e.preventDefault():o.onValueChange(r)}),onKeyDown:(0,t.m)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&o.onValueChange(r)}),onFocus:(0,t.m)(e.onFocus,()=>{let e="manual"!==o.activationMode;h||i||!e||o.onValueChange(r)})})})});k.displayName=N;var w="TabsContent",C=r.forwardRef((e,a)=>{let{__scopeTabs:s,value:t,forceMount:i,children:l,...o}=e,c=b(w,s),m=A(c.baseId,t),u=F(c.baseId,t),h=t===c.value,p=r.useRef(h);return r.useEffect(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,x.jsx)(n.C,{present:i||h,children:s=>{let{present:r}=s;return(0,x.jsx)(d.sG.div,{"data-state":h?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":m,hidden:!r,id:u,tabIndex:0,...o,ref:a,style:{...e.style,animationDuration:p.current?"0s":void 0},children:r&&l})}})});function A(e,a){return"".concat(e,"-trigger-").concat(a)}function F(e,a){return"".concat(e,"-content-").concat(a)}C.displayName=w;var S=y,P=f,D=k,E=C},62884:(e,a,s)=>{"use strict";s.d(a,{Xi:()=>o,av:()=>c,j7:()=>d,tU:()=>n});var r=s(95155),t=s(12115),i=s(58629),l=s(21567);let n=i.bL,d=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,r.jsx)(i.B8,{ref:a,className:(0,l.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",s),...t})});d.displayName=i.B8.displayName;let o=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,r.jsx)(i.l9,{ref:a,className:(0,l.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",s),...t})});o.displayName=i.l9.displayName;let c=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,r.jsx)(i.UC,{ref:a,className:(0,l.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...t})});c.displayName=i.UC.displayName},66462:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});let r=(0,s(82800).A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},69322:(e,a,s)=>{Promise.resolve().then(s.bind(s,75322))},75322:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>f});var r=s(95155),t=s(12115),i=s(83514),l=s(53979),n=s(22130),d=s(73312),o=s(33900),c=s(62884),m=s(68236),x=s(86122),u=s(86744),h=s(66462),p=s(21773),g=s(81476),j=s(37480),b=s(87780),y=s(44857),v=s(38684);function f(){let[e,a]=(0,t.useState)("general"),[s,f]=(0,t.useState)({siteName:"Bueiro Digital",siteDescription:"Plataforma de rastreamento de UTMs",companyName:"Bueiro Digital Tecnologia Ltda",companyEmail:"contato@bueiro.digital",supportEmail:"suporte@bueiro.digital",defaultLanguage:"pt-BR",dateFormat:"DD/MM/YYYY",timeFormat:"24h",timezone:"America/Sao_Paulo"}),[N,k]=(0,t.useState)({sessionTimeout:"30",minPasswordLength:"8",requirePasswordUppercase:!0,requirePasswordNumbers:!0,requirePasswordSymbols:!0,maxLoginAttempts:"5",twoFactorAuth:!1,passwordExpiryDays:"90"}),[w,C]=(0,t.useState)({smtpServer:"smtp.bueiro.digital",smtpPort:"587",smtpUsername:"noreply@bueiro.digital",smtpPassword:"********",emailFromName:"Bueiro Digital",emailFromAddress:"noreply@bueiro.digital",enableSsl:!0}),A=(e,a)=>{f({...s,[e]:a})},F=(e,a)=>{k({...N,[e]:a})},S=(e,a)=>{C({...w,[e]:a})},P=()=>{console.log("Salvando configura\xe7\xf5es...")};return(0,r.jsx)(l.A,{children:(0,r.jsx)(i.L,{requiredPermissions:"gerenciar_configuracoes",children:(0,r.jsxs)("div",{className:"container mx-auto py-6 px-4 lg:px-8",children:[(0,r.jsx)("div",{className:"flex items-center justify-between mb-6",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{className:"text-2xl font-bold text-gray-900 flex items-center",children:[(0,r.jsx)(m.A,{className:"mr-2 h-6 w-6 text-primary"}),"Configura\xe7\xf5es do Sistema"]}),(0,r.jsx)("p",{className:"text-gray-500 mt-1",children:"Configure par\xe2metros globais do sistema"})]})}),(0,r.jsxs)(c.tU,{defaultValue:"general",className:"space-y-6",children:[(0,r.jsx)("div",{className:"bg-white rounded-lg p-2 border",children:(0,r.jsxs)(c.j7,{className:"grid grid-cols-3 lg:grid-cols-6 gap-2",children:[(0,r.jsxs)(c.Xi,{value:"general",onClick:()=>a("general"),children:[(0,r.jsx)(x.A,{className:"h-4 w-4 mr-2"}),(0,r.jsx)("span",{children:"Geral"})]}),(0,r.jsxs)(c.Xi,{value:"security",onClick:()=>a("security"),children:[(0,r.jsx)(u.A,{className:"h-4 w-4 mr-2"}),(0,r.jsx)("span",{children:"Seguran\xe7a"})]}),(0,r.jsxs)(c.Xi,{value:"email",onClick:()=>a("email"),children:[(0,r.jsx)(h.A,{className:"h-4 w-4 mr-2"}),(0,r.jsx)("span",{children:"E-mail"})]}),(0,r.jsxs)(c.Xi,{value:"integrations",onClick:()=>a("integrations"),children:[(0,r.jsx)(p.A,{className:"h-4 w-4 mr-2"}),(0,r.jsx)("span",{children:"Integra\xe7\xf5es"})]}),(0,r.jsxs)(c.Xi,{value:"backups",onClick:()=>a("backups"),children:[(0,r.jsx)(g.A,{className:"h-4 w-4 mr-2"}),(0,r.jsx)("span",{children:"Backups"})]}),(0,r.jsxs)(c.Xi,{value:"advanced",onClick:()=>a("advanced"),children:[(0,r.jsx)(j.A,{className:"h-4 w-4 mr-2"}),(0,r.jsx)("span",{children:"Avan\xe7ado"})]})]})}),(0,r.jsx)(c.av,{value:"general",children:(0,r.jsxs)(n.Zp,{children:[(0,r.jsxs)(n.aR,{children:[(0,r.jsx)(n.ZB,{children:"Configura\xe7\xf5es Gerais"}),(0,r.jsx)(n.BT,{children:"Configure informa\xe7\xf5es b\xe1sicas do sistema"})]}),(0,r.jsx)(n.Wu,{className:"space-y-6",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"siteName",className:"block text-sm font-medium text-gray-700 mb-1",children:"Nome do Site"}),(0,r.jsx)(o.p,{id:"siteName",value:s.siteName,onChange:e=>A("siteName",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"siteDescription",className:"block text-sm font-medium text-gray-700 mb-1",children:"Descri\xe7\xe3o do Site"}),(0,r.jsx)(o.p,{id:"siteDescription",value:s.siteDescription,onChange:e=>A("siteDescription",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"companyName",className:"block text-sm font-medium text-gray-700 mb-1",children:"Nome da Empresa"}),(0,r.jsx)(o.p,{id:"companyName",value:s.companyName,onChange:e=>A("companyName",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"companyEmail",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email da Empresa"}),(0,r.jsx)(o.p,{id:"companyEmail",type:"email",value:s.companyEmail,onChange:e=>A("companyEmail",e.target.value)})]})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"supportEmail",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email de Suporte"}),(0,r.jsx)(o.p,{id:"supportEmail",type:"email",value:s.supportEmail,onChange:e=>A("supportEmail",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"defaultLanguage",className:"block text-sm font-medium text-gray-700 mb-1",children:"Idioma Padr\xe3o"}),(0,r.jsxs)("select",{id:"defaultLanguage",className:"w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm",value:s.defaultLanguage,onChange:e=>A("defaultLanguage",e.target.value),children:[(0,r.jsx)("option",{value:"pt-BR",children:"Portugu\xeas (Brasil)"}),(0,r.jsx)("option",{value:"en-US",children:"English (US)"}),(0,r.jsx)("option",{value:"es",children:"Espa\xf1ol"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"dateFormat",className:"block text-sm font-medium text-gray-700 mb-1",children:"Formato de Data"}),(0,r.jsxs)("select",{id:"dateFormat",className:"w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm",value:s.dateFormat,onChange:e=>A("dateFormat",e.target.value),children:[(0,r.jsx)("option",{value:"DD/MM/YYYY",children:"DD/MM/YYYY"}),(0,r.jsx)("option",{value:"MM/DD/YYYY",children:"MM/DD/YYYY"}),(0,r.jsx)("option",{value:"YYYY-MM-DD",children:"YYYY-MM-DD"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"timezone",className:"block text-sm font-medium text-gray-700 mb-1",children:"Fuso Hor\xe1rio"}),(0,r.jsxs)("select",{id:"timezone",className:"w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm",value:s.timezone,onChange:e=>A("timezone",e.target.value),children:[(0,r.jsx)("option",{value:"America/Sao_Paulo",children:"America/Sao_Paulo (GMT-3)"}),(0,r.jsx)("option",{value:"UTC",children:"UTC (GMT+0)"}),(0,r.jsx)("option",{value:"America/New_York",children:"America/New_York (GMT-5)"})]})]})]})]})}),(0,r.jsxs)(n.wL,{className:"flex justify-end space-x-2 border-t bg-gray-50 p-4",children:[(0,r.jsx)(d.$,{variant:"outline",children:"Cancelar"}),(0,r.jsxs)(d.$,{onClick:P,children:[(0,r.jsx)(b.A,{className:"mr-2 h-4 w-4"}),"Salvar Altera\xe7\xf5es"]})]})]})}),(0,r.jsx)(c.av,{value:"security",children:(0,r.jsxs)(n.Zp,{children:[(0,r.jsxs)(n.aR,{children:[(0,r.jsx)(n.ZB,{children:"Configura\xe7\xf5es de Seguran\xe7a"}),(0,r.jsx)(n.BT,{children:"Defina pol\xedticas de senha e configura\xe7\xf5es de seguran\xe7a"})]}),(0,r.jsx)(n.Wu,{className:"space-y-6",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"minPasswordLength",className:"block text-sm font-medium text-gray-700 mb-1",children:"Comprimento M\xednimo da Senha"}),(0,r.jsx)(o.p,{id:"minPasswordLength",type:"number",min:"6",max:"20",value:N.minPasswordLength,onChange:e=>F("minPasswordLength",e.target.value)})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("input",{id:"requirePasswordUppercase",type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",checked:N.requirePasswordUppercase,onChange:e=>F("requirePasswordUppercase",e.target.checked)}),(0,r.jsx)("label",{htmlFor:"requirePasswordUppercase",className:"text-sm font-medium text-gray-700",children:"Exigir letras mai\xfasculas"})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("input",{id:"requirePasswordNumbers",type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",checked:N.requirePasswordNumbers,onChange:e=>F("requirePasswordNumbers",e.target.checked)}),(0,r.jsx)("label",{htmlFor:"requirePasswordNumbers",className:"text-sm font-medium text-gray-700",children:"Exigir n\xfameros"})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("input",{id:"requirePasswordSymbols",type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",checked:N.requirePasswordSymbols,onChange:e=>F("requirePasswordSymbols",e.target.checked)}),(0,r.jsx)("label",{htmlFor:"requirePasswordSymbols",className:"text-sm font-medium text-gray-700",children:"Exigir s\xedmbolos especiais"})]})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"sessionTimeout",className:"block text-sm font-medium text-gray-700 mb-1",children:"Tempo Limite da Sess\xe3o (minutos)"}),(0,r.jsx)(o.p,{id:"sessionTimeout",type:"number",min:"5",value:N.sessionTimeout,onChange:e=>F("sessionTimeout",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"maxLoginAttempts",className:"block text-sm font-medium text-gray-700 mb-1",children:"M\xe1ximo de Tentativas de Login"}),(0,r.jsx)(o.p,{id:"maxLoginAttempts",type:"number",min:"3",max:"10",value:N.maxLoginAttempts,onChange:e=>F("maxLoginAttempts",e.target.value)})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("input",{id:"twoFactorAuth",type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",checked:N.twoFactorAuth,onChange:e=>F("twoFactorAuth",e.target.checked)}),(0,r.jsx)("label",{htmlFor:"twoFactorAuth",className:"text-sm font-medium text-gray-700",children:"Habilitar autentica\xe7\xe3o de dois fatores"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"passwordExpiryDays",className:"block text-sm font-medium text-gray-700 mb-1",children:"Expira\xe7\xe3o de Senha (dias)"}),(0,r.jsx)(o.p,{id:"passwordExpiryDays",type:"number",min:"0",max:"365",value:N.passwordExpiryDays,onChange:e=>F("passwordExpiryDays",e.target.value)}),(0,r.jsx)("p",{className:"text-xs text-gray-500 mt-1",children:"Use 0 para nunca expirar"})]})]})]})}),(0,r.jsxs)(n.wL,{className:"flex justify-end space-x-2 border-t bg-gray-50 p-4",children:[(0,r.jsx)(d.$,{variant:"outline",children:"Cancelar"}),(0,r.jsxs)(d.$,{onClick:P,children:[(0,r.jsx)(b.A,{className:"mr-2 h-4 w-4"}),"Salvar Altera\xe7\xf5es"]})]})]})}),(0,r.jsx)(c.av,{value:"email",children:(0,r.jsxs)(n.Zp,{children:[(0,r.jsxs)(n.aR,{children:[(0,r.jsx)(n.ZB,{children:"Configura\xe7\xf5es de Email"}),(0,r.jsx)(n.BT,{children:"Configure o servidor de email para envio de notifica\xe7\xf5es"})]}),(0,r.jsx)(n.Wu,{className:"space-y-6",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"smtpServer",className:"block text-sm font-medium text-gray-700 mb-1",children:"Servidor SMTP"}),(0,r.jsx)(o.p,{id:"smtpServer",value:w.smtpServer,onChange:e=>S("smtpServer",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"smtpPort",className:"block text-sm font-medium text-gray-700 mb-1",children:"Porta SMTP"}),(0,r.jsx)(o.p,{id:"smtpPort",type:"number",value:w.smtpPort,onChange:e=>S("smtpPort",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"smtpUsername",className:"block text-sm font-medium text-gray-700 mb-1",children:"Usu\xe1rio SMTP"}),(0,r.jsx)(o.p,{id:"smtpUsername",value:w.smtpUsername,onChange:e=>S("smtpUsername",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"smtpPassword",className:"block text-sm font-medium text-gray-700 mb-1",children:"Senha SMTP"}),(0,r.jsx)(o.p,{id:"smtpPassword",type:"password",value:w.smtpPassword,onChange:e=>S("smtpPassword",e.target.value)})]})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"emailFromName",className:"block text-sm font-medium text-gray-700 mb-1",children:"Nome do Remetente"}),(0,r.jsx)(o.p,{id:"emailFromName",value:w.emailFromName,onChange:e=>S("emailFromName",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"emailFromAddress",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email do Remetente"}),(0,r.jsx)(o.p,{id:"emailFromAddress",type:"email",value:w.emailFromAddress,onChange:e=>S("emailFromAddress",e.target.value)})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2 pt-4",children:[(0,r.jsx)("input",{id:"enableSsl",type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",checked:w.enableSsl,onChange:e=>S("enableSsl",e.target.checked)}),(0,r.jsx)("label",{htmlFor:"enableSsl",className:"text-sm font-medium text-gray-700",children:"Habilitar SSL/TLS"})]}),(0,r.jsx)("div",{className:"pt-4",children:(0,r.jsx)(d.$,{variant:"outline",className:"w-full",children:"Enviar Email de Teste"})})]})]})}),(0,r.jsxs)(n.wL,{className:"flex justify-end space-x-2 border-t bg-gray-50 p-4",children:[(0,r.jsx)(d.$,{variant:"outline",children:"Cancelar"}),(0,r.jsxs)(d.$,{onClick:P,children:[(0,r.jsx)(b.A,{className:"mr-2 h-4 w-4"}),"Salvar Altera\xe7\xf5es"]})]})]})}),(0,r.jsx)(c.av,{value:"backups",children:(0,r.jsxs)(n.Zp,{children:[(0,r.jsxs)(n.aR,{children:[(0,r.jsx)(n.ZB,{children:"Backups e Exporta\xe7\xe3o"}),(0,r.jsx)(n.BT,{children:"Gerenciar backups do sistema e exporta\xe7\xe3o de dados"})]}),(0,r.jsx)(n.Wu,{className:"space-y-6",children:(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"bg-blue-50 p-4 rounded-md border border-blue-200",children:[(0,r.jsx)("h3",{className:"text-lg font-medium text-blue-800 mb-2",children:"Backup Completo do Sistema"}),(0,r.jsx)("p",{className:"text-sm text-blue-700 mb-4",children:"Crie um backup completo do sistema, incluindo banco de dados, arquivos e configura\xe7\xf5es. Recomendamos fazer backups regularmente."}),(0,r.jsxs)("div",{className:"flex space-x-2",children:[(0,r.jsxs)(d.$,{className:"bg-blue-600 hover:bg-blue-700",children:[(0,r.jsx)(g.A,{className:"mr-2 h-4 w-4"}),"Criar Backup Agora"]}),(0,r.jsxs)(d.$,{variant:"outline",children:[(0,r.jsx)(y.A,{className:"mr-2 h-4 w-4"}),"Baixar \xdaltimo Backup"]})]})]}),(0,r.jsxs)("div",{className:"bg-gray-50 p-4 rounded-md border border-gray-200",children:[(0,r.jsx)("h3",{className:"text-lg font-medium text-gray-800 mb-2",children:"Backups Autom\xe1ticos"}),(0,r.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:"Configure backups autom\xe1ticos para seu sistema."}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"backupFrequency",className:"block text-sm font-medium text-gray-700 mb-1",children:"Frequ\xeancia de Backup"}),(0,r.jsxs)("select",{id:"backupFrequency",className:"w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm",children:[(0,r.jsx)("option",{value:"daily",children:"Di\xe1rio"}),(0,r.jsx)("option",{value:"weekly",children:"Semanal"}),(0,r.jsx)("option",{value:"monthly",children:"Mensal"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"retentionPeriod",className:"block text-sm font-medium text-gray-700 mb-1",children:"Per\xedodo de Reten\xe7\xe3o"}),(0,r.jsxs)("select",{id:"retentionPeriod",className:"w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm",children:[(0,r.jsx)("option",{value:"7",children:"7 dias"}),(0,r.jsx)("option",{value:"30",children:"30 dias"}),(0,r.jsx)("option",{value:"90",children:"90 dias"}),(0,r.jsx)("option",{value:"365",children:"1 ano"})]})]})]})]}),(0,r.jsxs)("div",{className:"bg-gray-50 p-4 rounded-md border border-gray-200",children:[(0,r.jsx)("h3",{className:"text-lg font-medium text-gray-800 mb-2",children:"Exporta\xe7\xe3o de Dados"}),(0,r.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:"Exporte dados espec\xedficos do sistema em v\xe1rios formatos."}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,r.jsx)(d.$,{variant:"outline",children:"Exportar Usu\xe1rios (CSV)"}),(0,r.jsx)(d.$,{variant:"outline",children:"Exportar Campanhas (CSV)"}),(0,r.jsx)(d.$,{variant:"outline",children:"Exportar Vendas (CSV)"})]})]}),(0,r.jsxs)("div",{className:"bg-gray-50 p-4 rounded-md border border-gray-200",children:[(0,r.jsx)("h3",{className:"text-lg font-medium text-gray-800 mb-2",children:"Restaurar Backup"}),(0,r.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:"Restaure o sistema a partir de um backup anterior."}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)(o.p,{type:"file"})}),(0,r.jsxs)(d.$,{variant:"outline",children:[(0,r.jsx)(v.A,{className:"mr-2 h-4 w-4"}),"Restaurar"]})]})]})]})}),(0,r.jsxs)(n.wL,{className:"flex justify-end space-x-2 border-t bg-gray-50 p-4",children:[(0,r.jsx)(d.$,{variant:"outline",children:"Cancelar"}),(0,r.jsxs)(d.$,{onClick:P,children:[(0,r.jsx)(b.A,{className:"mr-2 h-4 w-4"}),"Salvar Configura\xe7\xf5es"]})]})]})})]})]})})})}},81476:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});let r=(0,s(82800).A)("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},86122:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});let r=(0,s(82800).A)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]])},86744:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});let r=(0,s(82800).A)("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]])},87780:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});let r=(0,s(82800).A)("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]])}},e=>{var a=a=>e(e.s=a);e.O(0,[6978,4826,6300,5049,3979,8441,6587,7358],()=>a(69322)),_N_E=e.O()}]);