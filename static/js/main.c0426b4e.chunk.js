(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},28:function(e,t,a){},30:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(14),r=a.n(i),l=(a(28),a(4)),o=a(15),s=a.n(o),m=(a(30),a(18)),d=(a(31),a(16)),u=a.n(d),p=a(44),g=a(6),f=a(17),h=["https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fwww.thewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=KAqZpO4yRo6V5YA75CVrNPO1UNoFiHpznXqWnLl2ex4%3d&risl=&pid=ImgRaw&r=0","https://tse1.mm.bing.net/th/id/OIP.ObewiEp45AN1qjiPtLeJfAAAAA?pid=ImgDet&w=304&h=171&rs=1","https://th.bing.com/th/id/OIP.y9D-m_c0_2eyOhxPwrMA7gHaEK?pid=ImgDet&rs=1","https://th.bing.com/th/id/OIP.A-shBvKttAe5_OCx7x7UmwHaE8?pid=ImgDet&rs=1","https://th.bing.com/th/id/OIP.0qWBNGA2nQ73wIizJbIB_QHaE8?pid=ImgDet&rs=1"];var w=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!0),o=Object(l.a)(r,2),d=o[0],w=o[1],E=Object(n.useState)(!1),b=Object(l.a)(E,2),v=b[0],y=b[1],N=Object(n.useState)([]),x=Object(l.a)(N,2),O=x[0],j=x[1],I=Object(n.useState)(""),k=Object(l.a)(I,2),A=k[0],C=k[1];return Object(n.useEffect)(function(){p.a.get("https://gnews.io/api/v4/top-headlines?country=ind&lang=en&token=4a90d41250afd1a3634aedf39dc2b621").then(function(e){j(e.data.articles),w(!1)}).catch(function(e){return console.log(e)})},[O,A]),c.a.createElement("div",{className:"phone"},c.a.createElement("div",{className:"navbar pt-3"},c.a.createElement(g.b,{id:"home"}),c.a.createElement("div",{className:"d-flex justify-content-end align-items-start gap-3"},c.a.createElement("img",{src:"https://tse2.mm.bing.net/th/id/OIP.4nLv6Ov0sJ4KR8Du-iBtCQHaHY?pid=ImgDet&rs=1",alt:"",id:"img",loading:"lazy"}),c.a.createElement(g.a,{className:"dots"}))),c.a.createElement("img",{className:"w-50 h-auto ",id:"logo",src:"https://www.localplaces.de/wp-content/uploads/2017/09/google-tools-1.png",alt:""}),c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}},c.a.createElement(g.d,{style:{left:"4.5rem",position:"absolute"},id:"search",onClick:function(){return window.location.href="https://www.".concat(a,".com")}}),c.a.createElement("input",{type:"search",style:{width:"16rem",boxShadow:"0px 0px 5px rgba(0,0,0,0.5)",background:"white",borderRadius:"0.8rem",border:"none",paddingLeft:"2.5rem",paddingRight:"2rem"},value:a,placeholder:"search here",onChange:function(e){return i(e.target.value)}}),c.a.createElement(g.c,{style:{position:"absolute",right:"4.8rem",zIndex:1},id:"micro",onClick:function(){navigator.permissions.query({name:"microphone"}).then(function(e){if("denied"===e.state)window.alert("please enable microphone");else if(v)console.log("failed to launch voice recognition");else{y(function(e){return!e});var t=new(window.SpeechRecognition||window.webkitSpeechRecognition);t.continuous=!1,t.interimresults=!1,t.onstart=function(){console.log("listening...")},t.onresult=function(e){var t=e.results[0][0].transcript.split("."),a=t[0];C(a),window.open("https://www.".concat(t,".com/"))},t.onend=function(){y(function(e){return!e})},t.start()}}).catch(function(e){return console.log(e)})}})),v&&c.a.createElement("div",{className:" card w-75 ms-5 pb-3",id:"card"},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},c.a.createElement("img",{className:"w-50",src:"https://tekiota.com/wp-content/uploads/2015/10/Google-Microphone-for-Speech-Recognition1.png",alt:"",loading:"lazy"})),c.a.createElement("p",{className:"text-center"},"Listening...")),c.a.createElement("section",{className:"mt-3"},c.a.createElement("div",{className:"images"},Array.from(h,function(e){return c.a.createElement("img",{src:e,alt:"chromium",className:"w-50",id:"im"})}))),c.a.createElement("div",{className:"d-flex mt-3 p-2"},c.a.createElement("p",{className:"me-auto text-secondary"},"Discover"),c.a.createElement(f.a,{className:"ms-auto m-1"})),d?c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",marginBlockStart:"5rem"}},c.a.createElement("div",{className:"spinner-border text-primary fw-light"})):O.map(function(e){var t=e.id,a=e.image,n=e.publishedAt,i=e.source,r=e.url,l=e.title,o=(s()(n).startOf("day").fromNow().slice(0,4),i.name);return c.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},c.a.createElement(u.a,null,c.a.createElement("div",{key:t,className:"mx-auto p-2"},c.a.createElement("div",{onClick:function(){return window.location.href=r}},c.a.createElement("img",{src:a,alt:"",className:"w-100",id:"news-images"}),c.a.createElement("p",{className:"text"},l)),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"d-flex gap-2",id:"left-flex"},c.a.createElement("p",{style:{color:"black"}},o),c.a.createElement(m.a,{datetime:n})),c.a.createElement("div",{className:" d-flex ms-auto gap-2"},c.a.createElement(g.e,{onClick:function(){navigator.share({url:r})}}),c.a.createElement(g.a,null))),c.a.createElement("hr",null))))}))},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null))),E()}},[[19,1,2]]]);
//# sourceMappingURL=main.c0426b4e.chunk.js.map