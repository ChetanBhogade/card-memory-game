(this["webpackJsonpcard-memory-game"]=this["webpackJsonpcard-memory-game"]||[]).push([[0],{33:function(e,t,a){e.exports=a(43)},38:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(12),r=a.n(l),o=(a(38),a(9)),i=a(15),m=a(46),s=a(27),u=a(25),d=a.n(u);function h(e){return c.a.createElement(d.a,{key:e.myKey,isFlipped:-1!==e.flipped&&e.flipped,flipDirection:"horizontal"},-1===e.iconName?c.a.createElement(m.a,{style:{backgroundColor:"#FFF",height:"24.68vh",border:"none"}}):c.a.createElement(m.a,{style:{backgroundColor:"#8B78E6",height:"24.68vh"},className:"text-center",id:e.myKey}),c.a.createElement(m.a,{style:{backgroundColor:"#d63031",height:"24.68vh"},className:"text-center",id:e.myKey},c.a.createElement("p",{className:"m-4 pt-4",id:e.myKey},-1!==e.iconName?c.a.createElement(e.iconName,{size:"4rem",color:"#FFF"}):c.a.createElement(s.a,{size:"4rem",color:"#2ecc72"}))))}var b=a(45),v=a(47);function E(e){return c.a.createElement(b.a,{show:e.show,onHide:e.onHide,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},c.a.createElement(b.a.Header,{closeButton:!0},c.a.createElement(b.a.Title,{id:"contained-modal-title-vcenter"},"Card Memory Game")),c.a.createElement(b.a.Body,null,e.children),c.a.createElement(b.a.Footer,null,c.a.createElement(v.a,{className:"btn-success btn-lg",onClick:e.onHide},e.btn)))}var f=a(11);a(41),a(42);var y=function(){var e=[f.a,f.b,f.c,f.d,f.e,f.f,f.g,f.h],t=function(e){for(var t=Object(i.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),c=t[a];t[a]=t[n],t[n]=c}return t},a=t([].concat(Object(i.a)(t(e)),Object(i.a)(t(e)))),l=function(e,t){var a=e/1e3/t*100;return a<100?a:(clearInterval(Q),null)},r=Object(n.useState)([]),m=Object(o.a)(r,2),s=m[0],u=m[1],d=Object(n.useState)(new Array(16).fill(!1)),b=Object(o.a)(d,2),v=b[0],y=b[1],g=Object(n.useState)(1),j=Object(o.a)(g,2),O=j[0],p=j[1],w=Object(n.useState)(-1),N=Object(o.a)(w,2),S=N[0],k=N[1],F=Object(n.useState)(0),I=Object(o.a)(F,2),C=I[0],H=I[1],x=Object(n.useState)(!1),B=Object(o.a)(x,2),K=B[0],M=B[1],z=c.a.useState(!1),T=Object(o.a)(z,2),W=T[0],A=T[1],G=Object(n.useState)(0),J=Object(o.a)(G,2),D=J[0],R=J[1],U=Object(n.useState)(!1),Y=Object(o.a)(U,2),$=Y[0],q=Y[1],L=Object(n.useState)(0),P=Object(o.a)(L,2),Q=P[0],V=P[1];Object(n.useEffect)((function(){s.length<16&&(u(a),A(!0)),K?(q(!0),clearInterval(Q)):8===C&&M(!0)}),[u,a,s,K,C,Q]);var X=function(e,t,a){var n=Object(i.a)(s),c=Object(i.a)(e);n[S]===n[t]?(n[S]=-1,n[t]=-1,c[t]=-1,c[S]=-1,u(n),y(c),k(-1),p(1),H(C+1)):(c[t]=!c[t],c[S]=!c[S],y(c),k(-1),p(1)),clearInterval(a)};return c.a.createElement("div",null,c.a.createElement("div",{className:"progressMainWrapper"},c.a.createElement("div",{className:"progressMainStyle",style:{width:"".concat(D,"%")}})),c.a.createElement("div",{className:"container-fluid"},c.a.createElement(E,{show:W,btn:"Start",onHide:function(){!function(){A(!1);var e=1,t=setInterval((function(){var a=l(e,40);V(t),null!==a?R(a):M(!0),e+=100}),100)}()}},c.a.createElement("h5",null,"Instructions: "),c.a.createElement("ul",null,c.a.createElement("li",null,"It is a timed card memory game."),c.a.createElement("li",null,"Click the cards to see what symbol they uncover and try to find the matching symbol underneath the other cards."),c.a.createElement("li",null,"Uncover two matching symbols at once to eliminate them from the game."),c.a.createElement("li",null,"Eliminate all cards as fast as you can to win the game."),c.a.createElement("li",null,"Have a Fun :)"))),c.a.createElement("div",{className:"row"},s.map((function(e,t){return c.a.createElement("div",{key:t,onClick:function(e){!function(e){var t=Object(i.a)(v),a=e.target.id;if(!1===t[a]&&(-1===S&&k(a),t[a]=!t[a],y(t),p(O+1)),2===O)var n=setInterval((function(){X(t,a,n)}),1e3)}(e)},className:"col-3 p-0"},c.a.createElement(h,{myKey:t,flipped:v[t],iconName:e}))}))),c.a.createElement(E,{show:$,onHide:function(){!function(){u(a),y(new Array(16).fill(!1)),p(1),k(-1),H(0),M(!1),A(!1),R(0),q(!1);var e=1,t=setInterval((function(){var a=l(e,40);V(t),null!==a?R(a):M(!0),e+=100}),100)}()},btn:"Restart"},8===C?c.a.createElement("div",{className:"text-center"},c.a.createElement("h4",{className:"display-4",style:{color:"green"}},"You Won The Game")):c.a.createElement("div",{className:"text-center"},c.a.createElement("h4",{className:"display-4",style:{color:"red"}},"Failed"),c.a.createElement("h6",null,"Try Again Next Time")),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},c.a.createElement("h6",null,"Symbols Found: ",C," / 8")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.0823ba36.chunk.js.map