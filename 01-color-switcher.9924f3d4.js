!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),d=0;n.disabled=!0;e.addEventListener("click",(function(t){d=setInterval(o,1e3),n.disabled=!1,e.disabled=!0}));function o(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}n.addEventListener("click",(function(t){clearInterval(d),d+=1,n.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.9924f3d4.js.map
