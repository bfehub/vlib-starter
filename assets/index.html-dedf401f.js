import{_ as s,p as t,q as e,R as n,g as p,M as c,N as a,V as l,a1 as u}from"./framework-60933dea.js";const i={},d=n("button",null,"按钮一",-1),F=n("button",null,"按钮二",-1),D=n("button",null,"按钮三",-1),r=[d,F,D];function k(E,o){return t(),e("div",null,r)}const _=s(i,[["render",k],["__file","basic.vue"]]),b=u('<h1 id="button" tabindex="-1"><a class="header-anchor" href="#button" aria-hidden="true">#</a> Button</h1><p>常用的操作按钮。</p><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><p>使用 <code>type</code>、<code>plain</code>、<code>round</code> 和 <code>circle</code> 来定义按钮的样式。</p>',4),v=p({__name:"index.html",setup(E){return(o,m)=>{const C=c("CodeDemo");return t(),e("div",null,[b,a(C,{name:"basic.vue",rawCode:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbutton%3E%E6%8C%89%E9%92%AE%E4%B8%80%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%3E%E6%8C%89%E9%92%AE%E4%BA%8C%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%3E%E6%8C%89%E9%92%AE%E4%B8%89%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",highlightCode:"%3Cdiv%20class%3D%22language-vue%20line-numbers-mode%22%20data-ext%3D%22vue%22%3E%3Cpre%20v-pre%20class%3D%22language-vue%22%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%8C%89%E9%92%AE%E4%B8%80%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%8C%89%E9%92%AE%E4%BA%8C%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%8C%89%E9%92%AE%E4%B8%89%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E%3Cdiv%20class%3D%22line-numbers%22%20aria-hidden%3D%22true%22%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22line-number%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E"},{default:l(()=>[a(_)]),_:1})])}}}),h=s(v,[["__file","index.html.vue"]]);export{h as default};
