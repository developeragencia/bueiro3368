(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{9457:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>k});var a=t(95155),r=t(12115),l=t(32423),c=t(84267),n=t(44857),i=t(23888),d=t(92823),x=t(28527),o=t(86878),p=t(69323),m=t(16233),h=t(18842);let u=(0,t(82800).A)("FileDown",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);var y=t(48251),g=t(73312),j=t(22130),v=t(53979);let f={totalClicks:87654,totalImpressions:1456789,clickThroughRate:6.02,conversionRate:3.45,averageCPC:.87,costPerConversion:25.34},N=[{id:"ch001",name:"Facebook Ads",clicks:32156,impressions:587654,ctr:5.47,conversions:986,convRate:3.07,cost:27542.67,cpc:.86,cpa:27.93,trend:"up"},{id:"ch002",name:"Google Ads",clicks:28765,impressions:456789,ctr:6.3,conversions:1432,convRate:4.98,cost:23456.78,cpc:.82,cpa:16.38,trend:"up"},{id:"ch003",name:"Instagram Ads",clicks:15432,impressions:234567,ctr:6.58,conversions:432,convRate:2.8,cost:12345.67,cpc:.8,cpa:28.58,trend:"down"},{id:"ch004",name:"Email Marketing",clicks:7654,impressions:98765,ctr:7.75,conversions:234,convRate:3.06,cost:3456.78,cpc:.45,cpa:14.77,trend:"up"},{id:"ch005",name:"Organic Search",clicks:3647,impressions:79014,ctr:4.62,conversions:143,convRate:3.92,cost:0,cpc:0,cpa:0,trend:"up"}],w=[{id:1,name:"Visitas",value:45678,percent:100},{id:2,name:"Cadastros",value:7865,percent:17.2},{id:3,name:"Adicionou ao Carrinho",value:4532,percent:9.9},{id:4,name:"Iniciou Checkout",value:3245,percent:7.1},{id:5,name:"Compras",value:2345,percent:5.1}],b=[{label:"Hoje",value:"today"},{label:"Ontem",value:"yesterday"},{label:"\xdaltimos 7 dias",value:"7days"},{label:"\xdaltimos 30 dias",value:"30days"},{label:"Este m\xeas",value:"thisMonth"},{label:"M\xeas passado",value:"lastMonth"},{label:"Personalizado",value:"custom"}];function k(){let[e,s]=(0,r.useState)("30days"),[t,k]=(0,r.useState)("all"),A="all"===t?N:N.filter(e=>e.id===t);return(0,a.jsx)(v.A,{children:(0,a.jsxs)("div",{className:"container mx-auto py-6 px-4 lg:px-8",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"Performance"}),(0,a.jsx)("p",{className:"text-gray-500 mt-1",children:"An\xe1lise detalhada do desempenho das suas campanhas"})]}),(0,a.jsxs)("div",{className:"mt-4 sm:mt-0 flex space-x-3",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("select",{className:"appearance-none w-full pl-3 pr-10 py-2 rounded-md border border-gray-300 bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm",value:e,onChange:e=>s(e.target.value),children:b.map(e=>(0,a.jsx)("option",{value:e.value,children:e.label},e.value))}),(0,a.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none",children:(0,a.jsx)(l.A,{className:"h-4 w-4 text-gray-400"})})]}),(0,a.jsxs)(g.$,{variant:"outline",className:"flex items-center",children:[(0,a.jsx)(c.A,{className:"mr-2 h-4 w-4"}),"Filtrar"]}),(0,a.jsxs)(g.$,{variant:"outline",className:"flex items-center",children:[(0,a.jsx)(n.A,{className:"mr-2 h-4 w-4"}),"Exportar"]})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",children:[(0,a.jsx)(C,{title:"Total de Cliques",value:f.totalClicks.toLocaleString("pt-BR"),icon:(0,a.jsx)(i.A,{className:"h-6 w-6 text-primary"}),change:"+8.7%",trend:"up"}),(0,a.jsx)(C,{title:"Impress\xf5es",value:f.totalImpressions.toLocaleString("pt-BR"),icon:(0,a.jsx)(d.A,{className:"h-6 w-6 text-primary"}),change:"+12.3%",trend:"up"}),(0,a.jsx)(C,{title:"CTR (Taxa de Cliques)",value:"".concat(f.clickThroughRate.toFixed(2),"%"),icon:(0,a.jsx)(x.A,{className:"h-6 w-6 text-primary"}),change:"-0.4%",trend:"down"}),(0,a.jsx)(C,{title:"Taxa de Convers\xe3o",value:"".concat(f.conversionRate.toFixed(2),"%"),icon:(0,a.jsx)(o.A,{className:"h-6 w-6 text-primary"}),change:"+1.2%",trend:"up"}),(0,a.jsx)(C,{title:"CPC M\xe9dio",value:"R$ ".concat(f.averageCPC.toFixed(2)),icon:(0,a.jsx)(p.A,{className:"h-6 w-6 text-primary"}),change:"-0.08%",trend:"up",invertTrend:!0}),(0,a.jsx)(C,{title:"Custo por Convers\xe3o",value:"R$ ".concat(f.costPerConversion.toFixed(2)),icon:(0,a.jsx)(m.A,{className:"h-6 w-6 text-primary"}),change:"-2.1%",trend:"down",invertTrend:!0})]}),(0,a.jsxs)(j.Zp,{className:"mb-8",children:[(0,a.jsxs)(j.aR,{children:[(0,a.jsx)(j.ZB,{children:"Funil de Convers\xe3o"}),(0,a.jsx)(j.BT,{children:"An\xe1lise do progresso dos usu\xe1rios em cada fase"})]}),(0,a.jsxs)(j.Wu,{children:[(0,a.jsx)("div",{className:"space-y-4",children:w.map((e,s)=>(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,a.jsx)("span",{className:"font-medium text-gray-700",children:e.name}),(0,a.jsxs)("span",{className:"text-gray-500",children:[e.value.toLocaleString("pt-BR")," (",e.percent,"%)"]})]}),(0,a.jsx)("div",{className:"h-4 w-full bg-gray-100 rounded-full overflow-hidden",children:(0,a.jsx)("div",{className:"h-full bg-primary transition-all rounded-full",style:{width:"".concat(e.percent,"%")}})}),s<w.length-1&&(0,a.jsx)("div",{className:"flex justify-center my-1",children:(0,a.jsx)(h.A,{className:"h-4 w-4 text-gray-400 rotate-45"})})]},e.id))}),(0,a.jsx)("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:(0,a.jsxs)("div",{className:"text-center space-y-1",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-700",children:"Taxa de Convers\xe3o Total"}),(0,a.jsxs)("p",{className:"text-2xl font-bold text-primary",children:[(w[w.length-1].value/w[0].value*100).toFixed(2),"%"]}),(0,a.jsxs)("p",{className:"text-xs text-gray-500",children:[w[w.length-1].value.toLocaleString("pt-BR")," convers\xf5es de ",w[0].value.toLocaleString("pt-BR")," visitas"]})]})})]})]}),(0,a.jsxs)(j.Zp,{children:[(0,a.jsxs)(j.aR,{className:"flex flex-row items-center justify-between pb-2 space-y-0",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(j.ZB,{children:"Performance por Canal"}),(0,a.jsx)(j.BT,{children:"Comparativo de desempenho entre canais de marketing"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsxs)("select",{className:"text-sm border border-gray-200 rounded-md px-2 py-1",value:t,onChange:e=>k(e.target.value),children:[(0,a.jsx)("option",{value:"all",children:"Todos os Canais"}),N.map(e=>(0,a.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,a.jsx)(g.$,{variant:"ghost",size:"sm",children:(0,a.jsx)(u,{className:"h-4 w-4"})})]})]}),(0,a.jsx)(j.Wu,{children:(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-gray-200",children:[(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Canal"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Cliques"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Impress\xf5es"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"CTR"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Convers\xf5es"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Conv. Rate"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Custo"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"CPC"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"CPA"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Tend\xeancia"})]})}),(0,a.jsx)("tbody",{children:A.map(e=>(0,a.jsxs)("tr",{className:"border-b border-gray-200 hover:bg-gray-50",children:[(0,a.jsx)("td",{className:"px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900",children:e.name}),(0,a.jsx)("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500",children:e.clicks.toLocaleString("pt-BR")}),(0,a.jsx)("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500",children:e.impressions.toLocaleString("pt-BR")}),(0,a.jsxs)("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500",children:[e.ctr.toFixed(2),"%"]}),(0,a.jsx)("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500",children:e.conversions.toLocaleString("pt-BR")}),(0,a.jsxs)("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500",children:[e.convRate.toFixed(2),"%"]}),(0,a.jsxs)("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500",children:["R$ ",e.cost.toLocaleString("pt-BR",{minimumFractionDigits:2})]}),(0,a.jsx)("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500",children:e.cpc>0?"R$ ".concat(e.cpc.toFixed(2)):"-"}),(0,a.jsx)("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500",children:e.cpa>0?"R$ ".concat(e.cpa.toFixed(2)):"-"}),(0,a.jsx)("td",{className:"px-4 py-3 whitespace-nowrap",children:(0,a.jsxs)("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ".concat("up"===e.trend?"bg-green-100 text-green-800":"bg-red-100 text-red-800"),children:["up"===e.trend?(0,a.jsx)(y.A,{className:"h-3 w-3 mr-1"}):(0,a.jsx)(h.A,{className:"h-3 w-3 mr-1"}),"up"===e.trend?"Alta":"Baixa"]})})]},e.id))})]})})}),(0,a.jsx)(j.wL,{className:"border-t bg-gray-50 py-3 px-6",children:(0,a.jsx)("div",{className:"text-sm text-gray-500",children:"Dados atualizados em: 10/04/2025 \xe0s 18:45"})})]})]})})}function C(e){let{title:s,value:t,icon:r,change:l,trend:c,invertTrend:n=!1}=e;return(0,a.jsx)(j.Zp,{children:(0,a.jsxs)(j.Wu,{className:"p-6",children:[(0,a.jsxs)("div",{className:"flex justify-between items-start",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-500",children:s}),(0,a.jsx)("h4",{className:"text-2xl font-bold text-gray-900 mt-1",children:t})]}),(0,a.jsx)("div",{className:"p-2 bg-primary/10 rounded-full",children:r})]}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsxs)("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ".concat((n?"down"===c:"up"===c)?"bg-green-100 text-green-800":"bg-red-100 text-red-800"),children:["up"===c?(0,a.jsx)(y.A,{className:"h-3 w-3 mr-1"}):(0,a.jsx)(h.A,{className:"h-3 w-3 mr-1"}),l]})})]})})}},18842:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t(82800).A)("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]])},22130:(e,s,t)=>{"use strict";t.d(s,{BT:()=>d,Wu:()=>x,ZB:()=>i,Zp:()=>c,aR:()=>n,wL:()=>o});var a=t(95155),r=t(12115),l=t(21567);let c=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...r})});c.displayName="Card";let n=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",t),...r})});n.displayName="CardHeader";let i=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("font-semibold leading-none tracking-tight",t),...r})});i.displayName="CardTitle";let d=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",t),...r})});d.displayName="CardDescription";let x=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("p-6 pt-0",t),...r})});x.displayName="CardContent";let o=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("flex items-center p-6 pt-0",t),...r})});o.displayName="CardFooter"},23888:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t(82800).A)("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]])},27823:(e,s,t)=>{Promise.resolve().then(t.bind(t,9457))},32423:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t(82800).A)("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]])},44857:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t(82800).A)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},48251:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t(82800).A)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]])},69323:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t(82800).A)("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]])},84267:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t(82800).A)("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]])}},e=>{var s=s=>e(e.s=s);e.O(0,[6978,4826,6300,5049,3979,8441,6587,7358],()=>s(27823)),_N_E=e.O()}]);