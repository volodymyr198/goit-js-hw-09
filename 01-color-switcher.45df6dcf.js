const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let a=2;d.disabled=!0;t.addEventListener("click",(e=>{setInterval(o,1e3),d.disabled=!1,t.disabled=!0}));function o(){e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}d.addEventListener("click",(e=>{clearInterval(a),a+=1,d.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.45df6dcf.js.map