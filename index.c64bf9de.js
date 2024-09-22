var e=Array.from(document.querySelectorAll(".population")).map(function(e){return Number(e.textContent.replaceAll(",",""))}),t=e.reduce(function(e,t){return e+t},0),n=t/e.length,o=document.querySelector(".total-population"),r=document.querySelector(".average-population");o.textContent=t.toLocaleString("en-US"),r.textContent=n.toLocaleString("en-US");
//# sourceMappingURL=index.c64bf9de.js.map
