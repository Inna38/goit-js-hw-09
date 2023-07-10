const e=document.querySelector('button[type="submit"]'),t=document.querySelector(".form");let n=null;t.addEventListener("input",o),e.addEventListener("submit",o);new Promise(((e,l)=>{n=setInterval((()=>{o()}),1e3),t[2].value&&clearInterval(n)}));function o(e,n){console.log("qqq"),console.dir(t[2].value)}
//# sourceMappingURL=03-promises.5e8877c1.js.map
