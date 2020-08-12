(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__39YaX",card:"Cards_card__4QzC5",infected:"Cards_infected__1cgQb",recovered:"Cards_recovered__2mKag",deaths:"Cards_deaths__2pKC5"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(68),o=a.n(c),u=(a(88),a(6)),s=a.n(u),i=a(10),l=a(69),d=a(70),m=a(80),f=a(79),p=a(225),v=a(229),h=a(226),b=a(227),E=a(30),x=a.n(E),w=a(31),y=a.n(w),g=a(13),_=a.n(g),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:y()(_.a.card,_.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:y()(_.a.card,_.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:y()(_.a.card,_.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of death caused by COVID-19"))))):"Loading... "},j=a(29),k=a(32),C=a.n(k),D="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(D);case 3:return t=e.sent,a=t.data,n=a.confirmed,r=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(75),V=a(76),Q=a.n(V),U=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var o=a.length?r.a.createElement(B.Line,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:"true"},{data:a.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:"true"}]}}):null;return r.a.createElement("div",{className:Q.a.container},o)},Y=a(230),A=a(228),J=a(77),K=a.n(J),L=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),r.a.createElement(Y.a,{className:K.a.formControl},r.a.createElement(A.a,null,r.a.createElement("option",{value:"global"},"Global"),a.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},M=a(78),W=a.n(M),z=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:W.a.container},r.a.createElement(O,{data:e}),r.a.createElement(L,null),r.a.createElement(U,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports={container:"Chart_container__2YQjV"}},77:function(e,t,a){},78:function(e,t,a){e.exports={container:"App_container__2Ywx-"}},83:function(e,t,a){e.exports=a(207)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.77db52d4.chunk.js.map