(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s="/ipad-print-demo/assets/CoffeeCoupon-7be9fb59.png";function u(){document.querySelector("#app").innerHTML=`
  <div>
      <img src="${s}" id="button" class="coupon"/>
  </div>
`,print()}function d(n){n.addEventListener("click",()=>u())}document.querySelector("#app").innerHTML=`
  <div>
    <button id="button">Print</button>
  </div>
`;d(document.querySelector("#button"));