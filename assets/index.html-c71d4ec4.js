import{C as s}from"./basic-029c07a8.js";import{g as t,M as e,p as E,q as C,N as a,V as o,a1 as p,_ as c}from"./framework-60933dea.js";const l=p('<h1 id="button" tabindex="-1"><a class="header-anchor" href="#button" aria-hidden="true">#</a> Button</h1><p>Normal button.</p><h2 id="base-usage" tabindex="-1"><a class="header-anchor" href="#base-usage" aria-hidden="true">#</a> Base usage</h2><p>Use <code>type</code>, <code>plain</code>, <code>round</code>, and <code>circle</code> to define the style of the button.</p>',4),u=t({__name:"index.html",setup(i){return(d,F)=>{const n=e("CodeDemo");return E(),C("div",null,[l,a(n,{name:"basic.vue",rawCode:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbutton%3E%E6%8C%89%E9%92%AE%E4%B8%80%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%3E%E6%8C%89%E9%92%AE%E4%BA%8C%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%3E%E6%8C%89%E9%92%AE%E4%B8%89%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",highlightCode:"%3Cdiv%20class%3D%22language-vue%20line-numbers-mode%22%20data-ext%3D%22vue%22%3E%3Cpre%20v-pre%20class%3D%22language-vue%22%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%8C%89%E9%92%AE%E4%B8%80%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%8C%89%E9%92%AE%E4%BA%8C%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%8C%89%E9%92%AE%E4%B8%89%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E%3Cdiv%20class%3D%22line-numbers%22%20aria-hidden%3D%22true%22%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E"},{default:o(()=>[a(s)]),_:1})])}}}),k=c(u,[["__file","index.html.vue"]]);export{k as default};