(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{1:function(e,a,t){e.exports={table:"TotalData_table__3v9va",innertable:"TotalData_innertable__2jmsp",main:"TotalData_main__EkTkc",title:"TotalData_title__348O6",smain:"TotalData_smain__1o5Ex",small:"TotalData_small__2Jxpx",head:"TotalData_head__2hQkt"}},21:function(e,a,t){e.exports=t(47)},26:function(e,a,t){},4:function(e,a,t){e.exports={card:"StatesData_card__2eBgj",main:"StatesData_main__130yO",states:"StatesData_states__1iJAi",cchanges:"StatesData_cchanges__2Uyqr",achanges:"StatesData_achanges__3lIEn",rchanges:"StatesData_rchanges__3pnsg",dchanges:"StatesData_dchanges__jOOE_"}},45:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),l=t.n(c),s=(t(26),t(7)),m=t.n(s),i=t(8),o=t(9),u=t(20),d=t.n(u).a.create({baseURL:"https://api.covidindiatracker.com"}),E=t(4),h=t.n(E),f=t(49);var _=function(e){var a=e.fetchUrl,t=Object(n.useState)([]),c=Object(o.a)(t,2),l=c[0],s=c[1];Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(a);case 2:return t=e.sent,s(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);var u=1;return r.a.createElement("div",{className:h.a.main},r.a.createElement("div",{className:h.a.states},l.map((function(e,a){return r.a.createElement(f.a,{className:h.a.card,key:a},r.a.createElement(f.a.Header,null,u++,".",e.state),r.a.createElement(f.a.Body,{className:h.a.body},r.a.createElement(f.a.Title,null,"Confirmed Cases:- ",r.a.createElement("br",null),e.confirmed,r.a.createElement("div",{className:h.a.cchanges},"(",r.a.createElement("i",{class:"fa fa-arrow-up"}),e.cChanges,")")),r.a.createElement(f.a.Text,null,"Active Cases:- ",r.a.createElement("br",null),e.active,r.a.createElement("div",{className:h.a.achanges},"(",r.a.createElement("i",{class:"fa fa-arrow-up"}),e.aChanges,")")),r.a.createElement(f.a.Text,null,"Recovered:- ",r.a.createElement("br",null),e.recovered,r.a.createElement("div",{className:h.a.rchanges},"(",r.a.createElement("i",{class:"fa fa-arrow-up"}),e.rChanges,")")),r.a.createElement(f.a.Text,null,"Deaths:- ",r.a.createElement("br",null),e.deaths,r.a.createElement("div",{className:h.a.dchanges},"(",r.a.createElement("i",{class:"fa fa-arrow-up"}),e.dChanges,")"))))}))))},v={fetchTotal:"/total.json",fetchStateData:"/state_data.json"},p=(t(45),t(1)),b=t.n(p);var g=function(e){var a=e.title,t=e.fetchUrl,c=Object(n.useState)({}),l=Object(o.a)(c,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(t);case 2:return a=e.sent,u(a.data),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",{className:b.a.main},r.a.createElement("div",{className:b.a.smain},r.a.createElement("h1",{className:b.a.title},a),r.a.createElement("div",null,r.a.createElement("td",{className:b.a.table},r.a.createElement("td",{className:b.a.innertable},r.a.createElement("td",{className:b.a.head},"TotalCases:"),r.a.createElement("tr",null,s.confirmed,r.a.createElement("br",null),r.a.createElement("div",{className:b.a.small},"(",r.a.createElement("i",{class:"fa fa-arrow-up"}),s.cChanges,")"))),r.a.createElement("td",{className:b.a.innertable},r.a.createElement("td",{className:b.a.head},"Recovered:"),r.a.createElement("tr",null,s.recovered,r.a.createElement("br",null),r.a.createElement("div",{className:b.a.small},"(",r.a.createElement("i",{class:"fa fa-arrow-up"}),s.rChanges,")"))),r.a.createElement("td",{className:b.a.innertable},r.a.createElement("td",{className:b.a.head},"Deaths:"),r.a.createElement("tr",null,s.deaths,r.a.createElement("br",null),r.a.createElement("div",{className:b.a.small},"(",r.a.createElement("i",{class:"fa fa-arrow-up"}),s.dChanges,")"))),r.a.createElement("td",{className:b.a.innertable},r.a.createElement("td",{className:b.a.head},"Active:"),r.a.createElement("tr",null,s.active,r.a.createElement("br",null),r.a.createElement("div",{className:b.a.small},"(",r.a.createElement("i",{class:"fa fa-arrow-up"}),s.aChanges,")")))))))};t(46);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{title:"CoronaVirus Stats India",fetchUrl:v.fetchTotal}),r.a.createElement(_,{fetchUrl:v.fetchStateData}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.776af306.chunk.js.map