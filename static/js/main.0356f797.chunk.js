(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{49:function(e){e.exports=JSON.parse('{"0":{"avatar":"","firstName":"Jiyun","lastName":"Song","salutation":"Dr","position":"Lab Lead","email":"song90@hku.hk","introduction":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo metus in lectus sodales mattis. Mauris scelerisque at lacus ut placerat. Maecenas iaculis massa blandit, placerat nisi sit amet, sodales nulla. Nam pulvinar sapien id neque dapibus pellentesque. Vivamus pharetra leo at velit feugiat, eget aliquet libero condimentum. Aliquam fermentum nulla accumsan nulla pretium euismod. Nam vehicula libero quis ipsum scelerisque condimentum. Praesent dignissim velit sit amet mi rutrum cursus et sed augue.","Pellentesque scelerisque velit in lorem iaculis, vel molestie mauris ultrices. Cras faucibus lorem sit amet suscipit cursus. Sed eget rutrum purus. Donec placerat consectetur erat et vehicula. Donec vulputate pulvinar imperdiet. In varius nec nisl ac consequat. Morbi sit amet nunc orci. Aenean fermentum, lorem ut eleifend aliquam, enim nibh scelerisque mi, vel pretium tellus tortor sed neque. Mauris consectetur orci quis molestie ultricies. Quisque vitae nunc suscipit, semper urna in, volutpat ex."],"cv":""},"1":{"avatar":"https://firebasestorage.googleapis.com/v0/b/website-87a90.appspot.com/o/members%2Fseanchok%2Fprofile.jpeg?alt=media&token=90441df5-023c-4bad-a9e4-76dc45ba3496","firstName":"Sean","lastName":"Chok","position":"Student Research Assistant","email":"seanchok@connect.hku.hk","introduction":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo metus in lectus sodales mattis. Mauris scelerisque at lacus ut placerat. Maecenas iaculis massa blandit, placerat nisi sit amet, sodales nulla. Nam pulvinar sapien id neque dapibus pellentesque. Vivamus pharetra leo at velit feugiat, eget aliquet libero condimentum. Aliquam fermentum nulla accumsan nulla pretium euismod. Nam vehicula libero quis ipsum scelerisque condimentum. Praesent dignissim velit sit amet mi rutrum cursus et sed augue.","Pellentesque scelerisque velit in lorem iaculis, vel molestie mauris ultrices. Cras faucibus lorem sit amet suscipit cursus. Sed eget rutrum purus. Donec placerat consectetur erat et vehicula. Donec vulputate pulvinar imperdiet. In varius nec nisl ac consequat. Morbi sit amet nunc orci. Aenean fermentum, lorem ut eleifend aliquam, enim nibh scelerisque mi, vel pretium tellus tortor sed neque. Mauris consectetur orci quis molestie ultricies. Quisque vitae nunc suscipit, semper urna in, volutpat ex."],"affiliationPeriodStart":"2020-07-05T16:00:00.000Z","affiliationPeriodEnd":"2020-08-31T15:59:59.999Z","cv":"https://firebasestorage.googleapis.com/v0/b/website-87a90.appspot.com/o/members%2Fseanchok%2Fcv.pdf?alt=media&token=6c5623f2-13f5-4beb-9a0c-cefd34444f60"}}')},54:function(e,t,a){e.exports=a(65)},65:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r),c=a(16),l=function(e){return{width:e.innerWidth,height:e.innerHeight,isMobile:e.innerWidth<480,isMobileLandscape:e.innerHeight<480}},u=Object(n.createContext)({width:0,height:0,isMobile:!1,isMobileLandscape:!1}),s=a(6),m=a(19),d=function(e){var t=e.id,a=e.image,n=e.style,r=e.circle,o=n||{};return(null===n||void 0===n?void 0:n.width)||(o.width="100%"),(null===n||void 0===n?void 0:n.height)||(o.height="100%"),i.a.createElement("svg",{style:o,viewBox:r?"0 0 2 2":void 0},i.a.createElement("defs",null,i.a.createElement("pattern",{id:"".concat(t,"-image"),patternUnits:"objectBoundingBox",width:"100%",height:"100%"},i.a.createElement("image",{xlinkHref:a,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid slice"}))),r?i.a.createElement("circle",{fill:"url(#".concat(t,"-image)"),cx:"1",cy:"1",r:"1"}):i.a.createElement("rect",{fill:"url(#".concat(t,"-image)"),x:"0%",y:"0%",width:"100%",height:"100%"}))},p=function(){return Object(n.useContext)(u)},h=a(72),f=a(8),E=a(43),b=a(17),g=a(76),v=function(e){var t=e.title,a=e.basePath,r=e.items,o=p().isMobile,l=Object(n.useState)(!1),u=Object(c.a)(l,2),s=u[0],d=u[1];return i.a.createElement(i.a.Fragment,null,o?i.a.createElement(f.a,{my:1,borderBottom:"1px",borderColor:"emerald-green.400",fontSize:"md",color:"jet-black.500"},i.a.createElement(m.b,{to:a,style:{textDecoration:"none",color:"inherit"}},i.a.createElement(E.a,{my:1,fontWeight:"600"},t)),i.a.createElement(f.a,{ml:3},null===r||void 0===r?void 0:r.map((function(e,t){var n=e.path,r=e.child;return i.a.createElement(f.a,{key:t,my:1,fontWeight:"400"},i.a.createElement(m.b,{key:t,to:"".concat(a).concat(n),style:{textDecoration:"none",color:"inherit",width:"100%"},onClick:function(){return d(!1)}},r))})))):i.a.createElement(f.a,{position:"relative",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},color:"jet-black.500"},i.a.createElement(m.b,{to:a,style:{textDecoration:"none",color:"inherit"}},i.a.createElement(b.a,{_hover:{borderColor:"emerald-green.500"},borderBottom:"2px",borderColor:"transparent",py:1,fontSize:["md","lg"],fontWeight:"bold"},i.a.createElement(E.a,{m:0,textAlign:"center"},t))),r&&i.a.createElement(g.c,{isOpen:s,autoSelect:!1},i.a.createElement(g.b,{p:0,minW:"8rem",w:"100%"},r.map((function(e,t){var n=e.path,r=e.child;return i.a.createElement(g.a,{key:t,border:"none",backgroundColor:"transparent"},i.a.createElement(m.b,{to:"".concat(a).concat(n),style:{textDecoration:"none",color:"inherit",width:"100%"},onClick:function(){return d(!1)}},r))}))))))},w=function(){return i.a.createElement(E.a,null,"home")},x=function(){return i.a.createElement(i.a.Fragment,null,"research")},y=a(36),C=a.n(y),k=a(68),q=a(78),D=a(67),B=a(69),F=a(70),M=a(71),j=function(e){var t=e.member,a=t.id,n=t.avatar,r=t.firstName,o=t.lastName,c=t.salutation,l=t.position,u=t.email,s=t.introduction,m=t.affiliationPeriodStart,p=t.affiliationPeriodEnd,g=t.cv,v=[{icon:i.a.createElement(D.a,{size:"24px"}),component:i.a.createElement(k.a,{href:"mailto:".concat(u),color:"tory-blue.500",fontWeight:"600"},u)},{icon:i.a.createElement(B.a,{size:"24px"}),component:s.map((function(e,t){return i.a.createElement(E.a,{key:t},e)}))}].concat(m?[{icon:i.a.createElement(F.a,{size:"24px"}),component:i.a.createElement(E.a,null,"Affiliated since ".concat(C()(m).format("DD MMMM YYYY")," ").concat(p?" till ".concat(C()(p).format("DD MMMM YYYY")):""))}]:[]).concat(g?[{icon:i.a.createElement(M.a,{size:"24px"}),component:i.a.createElement(b.a,{backgroundColor:"emerald-green.500",color:"white",_hover:{cursor:"pointer",backgroundColor:"emerald-green.400"},borderRadius:8,py:2},i.a.createElement(k.a,{href:g,target:"_blank",rel:"noopener noreferrer",px:8,_hover:{textDecoration:"none"},_focus:{border:"none"}},"Get CV"))}]:[]);return i.a.createElement(q.a,{columns:[1,2,3,4],spacing:8},i.a.createElement(f.a,{gridColumn:"span 1",h:"fit-content",borderWidth:4,borderRadius:"50%",borderColor:"emerald-green.500",my:2},i.a.createElement(d,{id:a,image:n||"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU",style:{height:"auto",width:"100%"},circle:!0})),i.a.createElement(f.a,{gridColumn:["span 1","span 1","span 2","span 3"]},i.a.createElement(h.a,{alignItems:["left","left","center"],direction:["column","column","row"]},i.a.createElement(E.a,{fontSize:"xl",fontWeight:"bold"},"".concat(c?"".concat(c," "):"").concat(r," ").concat(o)),i.a.createElement(E.a,{fontWeight:"thin",mx:[0,0,2]},l)),i.a.createElement(f.a,{my:2},v.map((function(e,t){var a=e.icon,n=e.component;return i.a.createElement(h.a,{key:t,alignItems:"center",my:2},i.a.createElement(f.a,{color:"emerald-green.500",mr:[4,6]},a),i.a.createElement(f.a,null,n))})))))},P=a(49),A=Object.entries(P).map((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return{id:Number(a),avatar:n.avatar,firstName:n.firstName,lastName:n.lastName,salutation:n.salutation,position:n.position,email:n.email,introduction:n.introduction,affiliationPeriodStart:n.affiliationPeriodStart?new Date(n.affiliationPeriodStart):void 0,affiliationPeriodEnd:n.affiliationPeriodEnd?new Date(n.affiliationPeriodEnd):void 0,cv:n.cv}})),S=function(e){var t=e.title,a=e.style;return i.a.createElement(b.a,{width:"fit-content",borderBottom:"2px",borderColor:"transparent",_hover:{transition:"border-color 0.5s ease-in-out",borderColor:"emerald-green.500"}},i.a.createElement(E.a,{fontSize:"3xl",style:a},t))},N=function(){return i.a.createElement(f.a,null,i.a.createElement(d,{id:"backdrop",image:"https://www.wysersolutions.com/wp-content/uploads/2017/04/people-working-together-in-meeting.jpg",style:{width:"100%",height:"250px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"}}),i.a.createElement(f.a,{my:4},i.a.createElement(S,{title:"Key Members"}),A.map((function(e,t){return i.a.createElement(f.a,{key:t,my:6},i.a.createElement(j,{member:e}))}))))},O=[{path:"/home",title:"Home",component:i.a.createElement(w,null)},{path:"/research",title:"Research",component:i.a.createElement(x,null),childrenRoutes:[{path:"/themes",title:" Themes"},{path:"/ongoing-projects",title:"Ongoing Projects"},{path:"/past-projects",title:"Past Projects"},{path:"/publications",title:" Publications"},{path:"/funding",title:" Funding"}]},{path:"/members",title:"Members",component:i.a.createElement(N,null)},{path:"/teaching",title:"Teaching"},{path:"/activities",title:"Team Activities"},{path:"/contact-us",title:"Contact-Us"}],W=O.map((function(e){var t=e.path,a=e.title,n=e.childrenRoutes;return{basePath:t,title:a,items:null===n||void 0===n?void 0:n.map((function(e){var t=e.path,a=e.title;return{path:t,child:i.a.createElement(E.a,null,a)}}))}})).map((function(e){var t=e.title,a=e.basePath,n=e.items;return i.a.createElement(v,{title:t,basePath:a,items:n})})),z=function(e){var t=e.children;return i.a.createElement(f.a,{w:["95%","92%","85%","70%"],mx:"auto",py:[2,2,3,4]},t)},L=function(){return i.a.createElement(z,null,i.a.createElement(h.a,{w:"100%",alignItems:"center"},W.map((function(e,t){return i.a.createElement(n.Fragment,{key:t},i.a.createElement(f.a,{flexGrow:1,mx:"auto"},e),t!==W.length-1&&i.a.createElement(R,null))}))))},R=function(){return i.a.createElement(f.a,{w:"2px",h:8,mx:3,backgroundColor:"jet-black.400"})},I=a(75),Y=a(73),T=a(74),_=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1];return i.a.createElement(f.a,{position:"relative"},i.a.createElement(h.a,{w:"100%",backgroundColor:"emerald-green.500",py:2,px:3,alignItems:"center",color:"white"},i.a.createElement(f.a,{w:"fit-content",onClick:function(){return r(!a)},mx:2},a?i.a.createElement(T.a,{size:"30px"}):i.a.createElement(Y.a,{size:"30px"})),i.a.createElement(E.a,{mx:2,fontWeight:"bold"},"Healthy Cities Lab at HKU")),i.a.createElement(I.a,{isOpen:a,position:"fixed",w:"100%"},i.a.createElement(h.a,{w:"100%",backgroundColor:"white",px:3,py:2,direction:"column"},W.map((function(e,t){return i.a.createElement(f.a,{key:t,w:"100%"},e)})))))},H=function(){var e=p().isMobile;return i.a.createElement(i.a.Fragment,null,e?i.a.createElement(_,null):i.a.createElement(L,null))},U=function(){var e=Object(n.useState)(l(window)),t=Object(c.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=function(){return r(l(window))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var o=[];return function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t.forEach((function(t){var n=t.path,r=t.component,c=t.childrenRoutes;o.push(i.a.createElement(s.b,{key:"".concat(a).concat(n),exact:!0,path:"".concat(a).concat(n),component:function(){return i.a.createElement(z,null,r)}})),(null===c||void 0===c?void 0:c.length)&&e(c,n)}))}(O),i.a.createElement(u.Provider,{value:a},i.a.createElement(m.a,null,i.a.createElement(H,null),i.a.createElement(s.d,null,o,i.a.createElement(s.b,{path:"/"},i.a.createElement(s.a,{to:"/home"})),i.a.createElement(s.b,{path:"*",exact:!0,component:function(){return i.a.createElement(s.a,{to:"/"})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(29),G=a(79),J=a(37),Z=a(77),Q=Object(J.a)({},Z.a,{fontFamily:{body:"Nunito",heading:"Noto Serif",mono:"Inconsolata"},colors:Object(J.a)({},Z.a.colors,{"emerald-green":{100:"#EEFAF2",200:"#D3F1DD",300:"#B9E9C9",400:"#85D9A1",500:"#50C878",600:"#48B46C",700:"#307848",800:"#245A36",900:"#183C24"},"tory-blue":{100:"#E8EDF6",200:"#C4D1E7",300:"#A1B5D9",400:"#5B7EBD",500:"#1446A0",600:"#123F90",700:"#0C2A60",800:"#092048",900:"#061530"},"cerise-red":{100:"#FBEAF0",200:"#F6CBDA",300:"#F1ACC3",400:"#E66E96",500:"#DB3069",600:"#C52B5F",700:"#831D3F",800:"#63162F",900:"#420E20"},"mustard-yellow":{100:"#FEFBED",200:"#FDF5D1",300:"#FBEEB5",400:"#F8E27E",500:"#F5D547",600:"#DDC040",700:"#93802B",800:"#6E6020",900:"#4A4015"},"jet-black":{100:"#ECECEB",200:"#CECECE",300:"#B1B1B1",400:"#777776",500:"#3C3C3B",600:"#363635",700:"#242423",800:"#1B1B1B",900:"#121212"}})}),K=function(){return i.a.createElement(V.a,{theme:Q},i.a.createElement(G.a,null),i.a.createElement(U,null))};o.a.render(i.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.0356f797.chunk.js.map