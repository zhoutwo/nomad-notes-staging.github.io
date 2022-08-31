import{_ as $,a as k}from"./Header.0a8cc2b0.js";import{b as x,I,J as w,K as T,u as S,o as p,s as v,r as g,f as C,L as m,M as h,N as B,O as z,v as l,p as r,A as a,P,Q as H,R as L,C as M,S as q,B as A,T as N,z as D,c as E}from"./entry.ca3a0a26.js";import{_ as O,a as V}from"./Body.c68664f2.js";import{_ as W}from"./Wrapper.7ade665d.js";import{u as j}from"./useLang.07df4a65.js";import{c as F}from"./str.e3d4e921.js";import"./_plugin-vue_export-helper.a1a6add7.js";const J=x({__name:"Tab",props:{name:{type:String,required:!0},title:{type:String,required:!0}},setup(b){const c=I("activeTab");return(i,_)=>w((p(),v("div",null,[g(i.$slots,"default")],512)),[[T,S(c)===b.name]])}}),K={class:"tabs-header relative overflow-hidden flex space-x-6 text-sm font-bold text-gray-300 bg-primary-700/45 rounded-t-lg px-5 py-3"},Q=["onClick"],R=a("span",{class:"flex-1 bg-slate-500/40 rounded-lg"},null,-1),G=[R],U={class:"tabs-body relative text-slate-800 dark:text-white bg-gray-200 dark:bg-slate-800 shadow rounded-b-lg"},X=x({__name:"Tabs",setup(b){const c=C(),i=m(),_=m(),d=m([]),s=m();h(d,()=>u()),h(s,()=>u()),B(()=>{c.default&&c.default().forEach((t,n)=>{const e=t.props;d.value.push(e),n===0&&(s.value=e.name)})}),z(()=>{const t=setInterval(()=>{_.value&&(clearInterval(t),u())},500)}),N("activeTab",s);const u=()=>{if(!i.value||!_.value)return;const t=_.value,n=d.value.findIndex(({name:y})=>y===s.value),e=i.value.querySelectorAll(".tabs-header-item")[n];if(!e)return;const o=24,f=30;t.style.width=`${e.offsetWidth+f}px`,t.style.left=`${e.offsetLeft-o-f/2}px`};return(t,n)=>{const e=L;return p(),v("div",{ref_key:"tabs",ref:i,class:"tabs"},[l(e,null,{default:r(()=>[a("div",K,[(p(!0),v(P,null,H(d.value,o=>(p(),v("div",{key:o.name,class:M({"tabs-header-item":!0,"text-white":s.value===o.name}),style:{zIndex:2},onClick:f=>s.value=o.name},[a("a",{href:"#",onClick:n[0]||(n[0]=q(f=>t.$emit("click"),["prevent"]))},A(o.title),1)],10,Q))),128)),a("span",{ref_key:"tabHeaderIndicator",ref:_,class:"absolute flex h-full top-0 left-0 p-1 py-1.5 overflow-hidden transition-all duration-300",style:{zIndex:1}},G,512)])]),_:1}),a("div",U,[g(t.$slots,"default")])],512)}}}),Y=a("div",{class:"p-4"},[a("div",{class:"text-2xl"},"test 1")],-1),Z=a("div",{class:"p-4"},[a("div",{class:"text-2xl"},"test 2")],-1),rt=x({__name:"about",setup(b){const{t:c}=j();return D(()=>({title:F(c("pages.about.title")),meta:[{name:"description",content:c("pages.about.description")}]})),(i,_)=>{const d=$,s=k,u=J,t=X,n=O,e=V,o=W;return p(),E(o,null,{default:r(()=>[l(s,null,{default:r(()=>[l(d,{text:i.$t("pages.about.title"),class:"capitalize"},null,8,["text"])]),_:1}),l(e,null,{default:r(()=>[l(n,null,{default:r(()=>[l(t,null,{default:r(()=>[l(u,{name:"git",title:"git"},{default:r(()=>[Y]),_:1}),l(u,{name:"npx",title:"npx"},{default:r(()=>[Z]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{rt as default};
