(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9242],{10937:(e,s,a)=>{Promise.resolve().then(a.bind(a,23079))},21610:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(82800).A)("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},22130:(e,s,a)=>{"use strict";a.d(s,{BT:()=>c,Wu:()=>x,ZB:()=>d,Zp:()=>l,aR:()=>n,wL:()=>m});var t=a(95155),r=a(12115),i=a(21567);let l=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...r})});l.displayName="Card";let n=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",a),...r})});n.displayName="CardHeader";let d=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,i.cn)("font-semibold leading-none tracking-tight",a),...r})});d.displayName="CardTitle";let c=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,i.cn)("text-sm text-muted-foreground",a),...r})});c.displayName="CardDescription";let x=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,i.cn)("p-6 pt-0",a),...r})});x.displayName="CardContent";let m=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,i.cn)("flex items-center p-6 pt-0",a),...r})});m.displayName="CardFooter"},23079:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>k});var t=a(95155),r=a(12115);let i=(0,a(82800).A)("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);var l=a(44857),n=a(92823),d=a(50878),c=a(62455),x=a(32423),m=a(20853),o=a(84267),h=a(21610),u=a(28880),p=a(66462),j=a(48686),v=a(45686),y=a(73312),g=a(33900),f=a(22130),N=a(53979);let w=[{id:"usr001",name:"Jo\xe3o Silva",email:"joao.silva@email.com",role:"admin",status:"active",lastActive:"2023-09-15 13:45:22",dateCreated:"2022-05-10 09:30:00"},{id:"usr002",name:"Maria Oliveira",email:"maria.oliveira@email.com",role:"editor",status:"active",lastActive:"2023-09-14 16:23:45",dateCreated:"2022-06-15 11:45:00"},{id:"usr003",name:"Carlos Santos",email:"carlos.santos@email.com",role:"viewer",status:"active",lastActive:"2023-09-12 10:15:33",dateCreated:"2022-07-23 13:20:00"},{id:"usr004",name:"Ana Pereira",email:"ana.pereira@email.com",role:"editor",status:"inactive",lastActive:"2023-08-30 14:05:12",dateCreated:"2022-08-05 15:10:00"},{id:"usr005",name:"Pedro Souza",email:"pedro.souza@email.com",role:"viewer",status:"pending",lastActive:"Nunca",dateCreated:"2023-09-10 08:30:00"},{id:"usr006",name:"Fernanda Lima",email:"fernanda.lima@email.com",role:"editor",status:"active",lastActive:"2023-09-15 09:34:56",dateCreated:"2022-10-18 14:25:00"},{id:"usr007",name:"Ricardo Gomes",email:"ricardo.gomes@email.com",role:"viewer",status:"active",lastActive:"2023-09-14 15:42:11",dateCreated:"2023-02-07 10:40:00"}],b=[{id:"admin",name:"Administrador",description:"Acesso completo a todas as funcionalidades",permissions:["gerenciar_usuarios","gerenciar_campanhas","gerenciar_integra\xe7\xf5es","gerenciar_configuracoes","ver_relatorios","exportar_dados"]},{id:"editor",name:"Editor",description:"Pode editar campanhas e visualizar relat\xf3rios",permissions:["gerenciar_campanhas","ver_relatorios","exportar_dados"]},{id:"viewer",name:"Visualizador",description:"Acesso somente para visualiza\xe7\xe3o",permissions:["ver_relatorios"]}],A={total:7,active:5,inactive:1,pending:1,admins:1,editors:3,viewers:3,newThisMonth:2};function k(){let[e,s]=(0,r.useState)(""),[a,k]=(0,r.useState)("all"),[C,_]=(0,r.useState)("all"),[M,z]=(0,r.useState)([]),[P,S]=(0,r.useState)(!1),L=w.filter(s=>{let t=s.name.toLowerCase().includes(e.toLowerCase())||s.email.toLowerCase().includes(e.toLowerCase()),r="all"===a||s.role===a,i="all"===C||s.status===C;return t&&r&&i}),R=e=>{M.includes(e)?z(M.filter(s=>s!==e)):z([...M,e])};return(0,t.jsx)(N.A,{children:(0,t.jsxs)("div",{className:"container mx-auto py-6 px-4 lg:px-8",children:[(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"Usu\xe1rios"}),(0,t.jsx)("p",{className:"text-gray-500 mt-1",children:"Gerencie os usu\xe1rios e suas permiss\xf5es no sistema"})]}),(0,t.jsxs)("div",{className:"mt-4 sm:mt-0 flex space-x-3",children:[(0,t.jsxs)(y.$,{className:"bg-primary text-white flex items-center",children:[(0,t.jsx)(i,{className:"mr-2 h-4 w-4"}),"Novo Usu\xe1rio"]}),(0,t.jsxs)(y.$,{variant:"outline",className:"flex items-center",children:[(0,t.jsx)(l.A,{className:"mr-2 h-4 w-4"}),"Exportar"]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6",children:[(0,t.jsx)(f.Zp,{children:(0,t.jsx)(f.Wu,{className:"p-6",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4",children:(0,t.jsx)(n.A,{className:"h-6 w-6 text-blue-600"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-500",children:"Total de Usu\xe1rios"}),(0,t.jsx)("p",{className:"text-2xl font-bold",children:A.total})]})]})})}),(0,t.jsx)(f.Zp,{children:(0,t.jsx)(f.Wu,{className:"p-6",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4",children:(0,t.jsx)(d.A,{className:"h-6 w-6 text-green-600"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-500",children:"Usu\xe1rios Ativos"}),(0,t.jsx)("p",{className:"text-2xl font-bold",children:A.active})]})]})})}),(0,t.jsx)(f.Zp,{children:(0,t.jsx)(f.Wu,{className:"p-6",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4",children:(0,t.jsx)(c.A,{className:"h-6 w-6 text-amber-600"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-500",children:"Administradores"}),(0,t.jsx)("p",{className:"text-2xl font-bold",children:A.admins})]})]})})}),(0,t.jsx)(f.Zp,{children:(0,t.jsx)(f.Wu,{className:"p-6",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4",children:(0,t.jsx)(x.A,{className:"h-6 w-6 text-purple-600"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-500",children:"Novos este m\xeas"}),(0,t.jsx)("p",{className:"text-2xl font-bold",children:A.newThisMonth})]})]})})})]}),(0,t.jsx)("div",{className:"bg-white p-4 rounded-lg border border-gray-200 mb-6",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[(0,t.jsx)("div",{className:"flex-1",children:(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,t.jsx)(m.A,{className:"h-5 w-5 text-gray-400"})}),(0,t.jsx)(g.p,{type:"text",placeholder:"Buscar usu\xe1rios...",className:"pl-10 w-full",value:e,onChange:e=>s(e.target.value)})]})}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,t.jsx)("div",{className:"w-full sm:w-[150px]",children:(0,t.jsxs)("select",{className:"w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm",value:a,onChange:e=>k(e.target.value),children:[(0,t.jsx)("option",{value:"all",children:"Todos Perfis"}),(0,t.jsx)("option",{value:"admin",children:"Administradores"}),(0,t.jsx)("option",{value:"editor",children:"Editores"}),(0,t.jsx)("option",{value:"viewer",children:"Visualizadores"})]})}),(0,t.jsx)("div",{className:"w-full sm:w-[150px]",children:(0,t.jsxs)("select",{className:"w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm",value:C,onChange:e=>_(e.target.value),children:[(0,t.jsx)("option",{value:"all",children:"Todos Status"}),(0,t.jsx)("option",{value:"active",children:"Ativos"}),(0,t.jsx)("option",{value:"inactive",children:"Inativos"}),(0,t.jsx)("option",{value:"pending",children:"Pendentes"})]})}),(0,t.jsxs)(y.$,{variant:"outline",className:"flex items-center whitespace-nowrap",children:[(0,t.jsx)(o.A,{className:"mr-2 h-4 w-4"}),"Mais Filtros"]})]})]})}),(0,t.jsxs)(f.Zp,{children:[(0,t.jsxs)(f.aR,{className:"flex flex-row items-center justify-between pb-2 space-y-0",children:[(0,t.jsx)(f.ZB,{children:"Lista de Usu\xe1rios"}),(0,t.jsxs)("div",{className:"text-sm text-gray-500",children:["Mostrando ",L.length," de ",w.length," usu\xe1rios"]})]}),(0,t.jsx)(f.Wu,{children:(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-gray-200",children:[(0,t.jsx)("th",{className:"px-4 py-3 text-left",children:(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("input",{type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",checked:M.length===L.length&&L.length>0,onChange:()=>{M.length===L.length?z([]):z(L.map(e=>e.id))}})})}),(0,t.jsx)("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Usu\xe1rio"}),(0,t.jsx)("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Perfil"}),(0,t.jsx)("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),(0,t.jsx)("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"\xdaltimo Acesso"}),(0,t.jsx)("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data de Cria\xe7\xe3o"}),(0,t.jsx)("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"A\xe7\xf5es"})]})}),(0,t.jsxs)("tbody",{className:"divide-y divide-gray-200",children:[L.map(e=>(0,t.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,t.jsx)("td",{className:"px-4 py-4 whitespace-nowrap",children:(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("input",{type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",checked:M.includes(e.id),onChange:()=>R(e.id)})})}),(0,t.jsx)("td",{className:"px-4 py-4 whitespace-nowrap",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium",children:e.name.split(" ").map(e=>e[0]).join("").toUpperCase()}),(0,t.jsxs)("div",{className:"ml-4",children:[(0,t.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.name}),(0,t.jsx)("div",{className:"text-sm text-gray-500",children:e.email})]})]})}),(0,t.jsx)("td",{className:"px-4 py-4 whitespace-nowrap",children:(0,t.jsxs)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat("admin"===e.role?"bg-amber-100 text-amber-800":"editor"===e.role?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"),children:["admin"===e.role&&"Administrador","editor"===e.role&&"Editor","viewer"===e.role&&"Visualizador"]})}),(0,t.jsx)("td",{className:"px-4 py-4 whitespace-nowrap",children:(0,t.jsxs)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat("active"===e.status?"bg-green-100 text-green-800":"inactive"===e.status?"bg-red-100 text-red-800":"bg-blue-100 text-blue-800"),children:["active"===e.status&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.A,{className:"h-3 w-3 mr-1"}),"Ativo"]}),"inactive"===e.status&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.A,{className:"h-3 w-3 mr-1"}),"Inativo"]}),"pending"===e.status&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.A,{className:"h-3 w-3 mr-1"}),"Pendente"]})]})}),(0,t.jsx)("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-500",children:"Nunca"===e.lastActive?"Nunca":new Date(e.lastActive).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"})}),(0,t.jsx)("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(e.dateCreated).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"})}),(0,t.jsx)("td",{className:"px-4 py-4 whitespace-nowrap text-sm font-medium",children:(0,t.jsxs)("div",{className:"flex space-x-3",children:[(0,t.jsx)("button",{className:"text-blue-600 hover:text-blue-900",title:"Editar",children:(0,t.jsx)(u.A,{className:"h-5 w-5"})}),(0,t.jsx)("button",{className:"text-gray-600 hover:text-gray-900",title:"Enviar Email",children:(0,t.jsx)(p.A,{className:"h-5 w-5"})}),(0,t.jsx)("button",{className:"text-amber-600 hover:text-amber-900",title:"Redefinir Senha",children:(0,t.jsx)(j.A,{className:"h-5 w-5"})}),(0,t.jsx)("button",{className:"text-red-600 hover:text-red-900",title:"Remover",children:(0,t.jsx)(v.A,{className:"h-5 w-5"})})]})})]},e.id)),0===L.length&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:7,className:"px-4 py-4 text-center text-gray-500",children:"Nenhum usu\xe1rio encontrado com os filtros selecionados."})})]})]})})}),(0,t.jsxs)(f.wL,{className:"flex justify-between border-t bg-gray-50 px-6 py-3",children:[(0,t.jsx)("div",{className:"flex items-center",children:M.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("span",{className:"text-sm text-gray-700 mr-4",children:[M.length," usu\xe1rio(s) selecionado(s)"]}),(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsxs)(y.$,{size:"sm",variant:"outline",className:"text-red-600 border-red-200 hover:bg-red-50",children:[(0,t.jsx)(v.A,{className:"h-4 w-4 mr-1"}),"Excluir"]}),(0,t.jsxs)(y.$,{size:"sm",variant:"outline",children:[(0,t.jsx)(p.A,{className:"h-4 w-4 mr-1"}),"Enviar Email"]})]})]})}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(y.$,{size:"sm",variant:"outline",disabled:0===L.length,children:"Anterior"}),(0,t.jsx)("span",{className:"text-sm text-gray-700",children:"P\xe1gina 1 de 1"}),(0,t.jsx)(y.$,{size:"sm",variant:"outline",disabled:0===L.length,children:"Pr\xf3xima"})]})]})]}),(0,t.jsxs)("div",{className:"mt-8",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,t.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:"Perfis e Permiss\xf5es"}),(0,t.jsx)(y.$,{variant:"outline",onClick:()=>S(!P),children:P?"Ocultar Detalhes":"Mostrar Detalhes"})]}),P&&(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:b.map(e=>(0,t.jsxs)(f.Zp,{children:[(0,t.jsxs)(f.aR,{children:[(0,t.jsx)(f.ZB,{className:"\n                      ".concat("admin"===e.id?"text-amber-700":"","\n                      ").concat("editor"===e.id?"text-blue-700":"","\n                      ").concat("viewer"===e.id?"text-gray-700":"","\n                    "),children:e.name}),(0,t.jsx)(f.BT,{children:e.description})]}),(0,t.jsxs)(f.Wu,{children:[(0,t.jsx)("h4",{className:"text-sm font-medium text-gray-700 mb-2",children:"Permiss\xf5es:"}),(0,t.jsx)("ul",{className:"space-y-1",children:e.permissions.map(e=>(0,t.jsxs)("li",{className:"flex items-center text-sm",children:[(0,t.jsx)(d.A,{className:"h-4 w-4 text-green-500 mr-2"}),(0,t.jsx)("span",{className:"capitalize",children:e.replace(/_/g," ")})]},e))})]}),(0,t.jsx)(f.wL,{className:"bg-gray-50 border-t",children:(0,t.jsxs)("div",{className:"text-sm text-gray-500",children:["Total: ",A["admin"===e.id?"admins":"editor"===e.id?"editors":"viewers"]," usu\xe1rio(s)"]})})]},e.id))})]})]})})}},28880:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(82800).A)("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]])},32423:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(82800).A)("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]])},44857:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(82800).A)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},45686:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(82800).A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},48686:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(82800).A)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},50878:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(82800).A)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]])},66462:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(82800).A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},84267:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(82800).A)("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]])}},e=>{var s=s=>e(e.s=s);e.O(0,[6978,4826,6300,5049,3979,8441,6587,7358],()=>s(10937)),_N_E=e.O()}]);