(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8+m1":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("rePB");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e,t){return t.map((function(t){var r=e.find((function(e){return e.node.absolutePath===t.node.fileAbsolutePath}));return r?o(o({},t),{},{name:r.node.name}):t})).filter((function(e){return Boolean(e.name)}))}},Hgnd:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("q1tI"),a=r.n(n),o=r("7I2q"),c=r("WKty");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,s=l(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),a.a.createElement("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}))}));s.displayName="DollarSign";var u=s,f=r("d4jF"),p=r("M06k"),m=function(e){var t=e.pageLink,r=e.title,n=e.fundingBody,i=e.fundingAmount,l=e.investigators,s=e.projectStart,m=e.projectEnd;return a.a.createElement(o.e,{pageLink:t},a.a.createElement("div",{className:"p-8"},a.a.createElement("p",{className:"text-lg xl:text-xl font-semibold leading-tight"},r),a.a.createElement("div",{className:"m-4 space-y-4"},n&&a.a.createElement(o.b,{icon:a.a.createElement(c.a,{size:"24px"}),component:a.a.createElement("p",null,n)}),i&&a.a.createElement(o.b,{icon:a.a.createElement(u,{size:"24px"}),component:a.a.createElement("p",null,i)}),l&&a.a.createElement(o.b,{icon:a.a.createElement(f.a,{size:"24px"}),component:a.a.createElement("p",null,l)}),s&&a.a.createElement(o.b,{icon:a.a.createElement(p.a,{size:"24px"}),component:a.a.createElement(o.k,{start:new Date(s),end:m?new Date(m):void 0})}))))},d=function(e){for(var t=e.projects,r=e.pathname,n=[],c=e.projectCountPerPage||8,i=0;i<Math.ceil(t.length/c);i++)n.push(t.slice(i*c,i*c+c));var l=n.map((function(e,t){return a.a.createElement("div",{key:t,className:"space-y-8"},e.map((function(e,t){var n=e.name,o=e.node.frontmatter;return a.a.createElement("div",{key:t},a.a.createElement(m,Object.assign({},o,{pageLink:r+"/"+n})))})))}));return a.a.createElement(o.j,{pages:l})}},M06k:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,s=c(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));i.displayName="Calendar",t.a=i},NsgW:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("rePB"),a=r("q1tI"),o=r.n(a),c=r("htVV"),i=r("ZBOM"),l=r("7ljp"),s=r("29d4"),u=r("C5yf"),f=r("7I2q");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.children,r=Object(a.useState)(c.b),n=r[0],p=r[1];Object(a.useEffect)((function(){var e=function(){return p(Object(c.c)(window))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var d=Object(a.useRef)(null),v=Object(i.a)(d);return Object(a.useEffect)((function(){p(m(m({},n),{},{navBarHeight:v.height}))}),[v.height]),o.a.createElement(c.a.Provider,{value:n},o.a.createElement(l.MDXProvider,{components:s},o.a.createElement(u.b,null),o.a.createElement("div",{className:"text-sm sm:text-base bg-white text-jet-black"},o.a.createElement("div",{ref:d,className:"fixed w-full top-0 left-0 bg-white",style:{zIndex:999}},o.a.createElement(f.i,null)),o.a.createElement("div",{key:"box-"+((null==v?void 0:v.height)||75),className:"flex flex-col min-h-screen",style:{marginTop:(null==v?void 0:v.height)||75}},o.a.createElement("div",{className:"text-jet-black text-sm md:text-base md:py-4 lg:py-8"},o.a.createElement(u.a,null,t)),o.a.createElement("div",{className:"mt-auto"},o.a.createElement(f.d,null))))))};t.b=d},WKty:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,s=c(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),a.a.createElement("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"}))}));i.displayName="Tag",t.a=i},d4jF:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,s=c(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.a.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),a.a.createElement("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),a.a.createElement("line",{x1:"23",y1:"11",x2:"17",y2:"11"}))}));i.displayName="UserPlus",t.a=i},uK8n:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f})),r.d(t,"query",(function(){return p}));var n=r("q1tI"),a=r.n(n),o=r("YwZP"),c=r("8+m1"),i=r("NsgW"),l=r("C5yf"),s=r("7I2q"),u=r("Hgnd");function f(e){var t=e.data,r=t.allFile.edges,n=t.allMdx.edges,f=Object(c.a)(r,n),p=Object(o.useLocation)().pathname;return"/"===p[p.length-1]&&(p=p.slice(0,-1)),a.a.createElement(i.b,null,a.a.createElement(l.b,{title:"Past Projects",description:"See our list of past projects here."}),a.a.createElement("div",{className:"space-y-8"},a.a.createElement(s.o,null,"Past Projects"),a.a.createElement(u.a,{projects:f,pathname:p})))}var p="3372005236"}}]);
//# sourceMappingURL=component---src-pages-projects-past-projects-index-tsx-4a6b370358dceef8e678.js.map