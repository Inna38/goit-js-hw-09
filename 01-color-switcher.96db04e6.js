!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("[data-stop]"),d=null;t.addEventListener("click",(function(a){d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled","disabled"),clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.96db04e6.js.map
