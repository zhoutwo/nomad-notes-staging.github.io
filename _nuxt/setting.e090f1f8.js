import{o as g,s as w,A as i,b as k,L as y,i as Y,k as A,$ as re,P as ie,O as j,a0 as Z,I as de,T as ce,F as q,c as L,p as d,v as s,r as P,C as V,u as v,a1 as O,H as R,B as x,z as ue}from"./entry.ca3a0a26.js";import{a as pe,m as me,t as F,T as N,w as _e,b as Q,c as fe,R as X,o as T,P as z,L as S,u as ve,s as he,f as ge}from"./transition.c0888152.js";import{_ as be,a as xe}from"./Body.c68664f2.js";import{_ as ye,a as $e}from"./Header.0a8cc2b0.js";import{u as we,_ as ke}from"./TextInput.vue_vue_type_script_setup_true_lang.7666fde2.js";import{_ as ee}from"./_plugin-vue_export-helper.a1a6add7.js";import{_ as Te}from"./Anchor.vue_vue_type_script_setup_true_lang.32ad6104.js";import{_ as Se}from"./Button.vue_vue_type_script_setup_true_lang.ce628e38.js";import{_ as Ae}from"./Wrapper.7ade665d.js";import{u as Me}from"./useLang.07df4a65.js";import{c as Ie}from"./str.e3d4e921.js";const Ve={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36",width:"1.2em",height:"1.2em"},Pe=i("path",{fill:"currentColor",d:"m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z",class:"clr-i-outline clr-i-outline-path-1"},null,-1),ze=i("path",{fill:"none",d:"M0 0h36v36H0z"},null,-1),Ce=[Pe,ze];function Be(t,n){return g(),w("svg",Ve,Ce)}const Le={name:"clarity-times-line",render:Be},Fe={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},Ne=i("path",{fill:"currentColor",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"},null,-1),Ee=[Ne];function De(t,n){return g(),w("svg",Fe,Ee)}const Oe={name:"bi-exclamation-circle-fill",render:De},Re={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36",width:"1.2em",height:"1.2em"},je=i("path",{fill:"currentColor",d:"M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm8 22.1a1.4 1.4 0 0 1-2 2l-6-6l-6 6.02a1.4 1.4 0 1 1-2-2l6-6.04l-6.17-6.22a1.4 1.4 0 1 1 2-2L18 16.1l6.17-6.17a1.4 1.4 0 1 1 2 2L20 18.08Z",class:"clr-i-solid clr-i-solid-path-1"},null,-1),He=i("path",{fill:"none",d:"M0 0h36v36H0z"},null,-1),Ue=[je,He];function We(t,n){return g(),w("svg",Re,Ue)}const Ge={name:"clarity-times-circle-solid",render:We},Ye={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},qe=i("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"},null,-1),Ze=[qe];function Ke(t,n){return g(),w("svg",Ye,Ze)}const Xe={name:"mdi-check-circle",render:Ke};let Je=k({props:{onFocus:{type:Function,required:!0}},setup(t){let n=y(!0);return()=>n.value?Y(me,{as:"button",type:"button",features:pe.Focusable,onFocus(p){p.preventDefault();let f,a=50;function l(){if(a--<=0){f&&cancelAnimationFrame(f);return}if(t.onFocus()){n.value=!1,cancelAnimationFrame(f);return}f=requestAnimationFrame(l)}f=requestAnimationFrame(l)}}):null}}),te=Symbol("TabsContext");function E(t){let n=de(te,null);if(n===null){let p=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,E),p}return n}let Qe=k({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:n,attrs:p,emit:f}){let a=y(null),l=y([]),r=y([]),_={selectedIndex:a,orientation:A(()=>t.vertical?"vertical":"horizontal"),activation:A(()=>t.manual?"manual":"auto"),tabs:l,panels:r,setSelectedIndex(o){a.value!==o&&(a.value=o,f("change",o))},registerTab(o){l.value.includes(o)||l.value.push(o)},unregisterTab(o){let c=l.value.indexOf(o);c!==-1&&l.value.splice(c,1)},registerPanel(o){r.value.includes(o)||r.value.push(o)},unregisterPanel(o){let c=r.value.indexOf(o);c!==-1&&r.value.splice(c,1)}};return ce(te,_),re(()=>{var o;if(_.tabs.value.length<=0||t.selectedIndex===null&&a.value!==null)return;let c=_.tabs.value.map(h=>F(h)).filter(Boolean),e=c.filter(h=>!h.hasAttribute("disabled")),m=(o=t.selectedIndex)!=null?o:t.defaultIndex;if(m<0)a.value=c.indexOf(e[0]);else if(m>_.tabs.value.length)a.value=c.indexOf(e[e.length-1]);else{let h=c.slice(0,m),M=[...c.slice(m),...h].find(u=>e.includes(u));if(!M)return;a.value=c.indexOf(M)}}),()=>{let o={selectedIndex:a.value};return Y(ie,[l.value.length<=0&&Y(Je,{onFocus:()=>{for(let c of l.value){let e=F(c);if((e==null?void 0:e.tabIndex)===0)return e.focus(),!0}return!1}}),N({props:{...p,..._e(t,["selectedIndex","defaultIndex","manual","vertical","onChange"])},slot:o,slots:n,attrs:p,name:"TabGroup"})])}}}),et=k({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:n,slots:p}){let f=E("TabList");return()=>{let a={selectedIndex:f.selectedIndex.value},l={role:"tablist","aria-orientation":f.orientation.value};return N({props:{...t,...l},slot:a,attrs:n,slots:p,name:"TabList"})}}}),W=k({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:n,slots:p,expose:f}){let a=E("Tab"),l=`headlessui-tabs-tab-${Q()}`,r=y(null);f({el:r,$el:r}),j(()=>a.registerTab(r)),Z(()=>a.unregisterTab(r));let _=A(()=>a.tabs.value.indexOf(r)),o=A(()=>_.value===a.selectedIndex.value);function c(u){let $=a.tabs.value.map(I=>F(I)).filter(Boolean);if(u.key===T.Space||u.key===T.Enter){u.preventDefault(),u.stopPropagation(),a.setSelectedIndex(_.value);return}switch(u.key){case T.Home:case T.PageUp:return u.preventDefault(),u.stopPropagation(),z($,S.First);case T.End:case T.PageDown:return u.preventDefault(),u.stopPropagation(),z($,S.Last)}if(ve(a.orientation.value,{vertical(){if(u.key===T.ArrowUp)return z($,S.Previous|S.WrapAround);if(u.key===T.ArrowDown)return z($,S.Next|S.WrapAround)},horizontal(){if(u.key===T.ArrowLeft)return z($,S.Previous|S.WrapAround);if(u.key===T.ArrowRight)return z($,S.Next|S.WrapAround)}}))return u.preventDefault()}function e(){var u;(u=F(r))==null||u.focus()}function m(){var u;t.disabled||((u=F(r))==null||u.focus(),a.setSelectedIndex(_.value))}function h(u){u.preventDefault()}let M=fe(A(()=>({as:t.as,type:n.type})),r);return()=>{var u,$;let I={selected:o.value},D={ref:r,onKeydown:c,onFocus:a.activation.value==="manual"?e:m,onMousedown:h,onClick:m,id:l,role:"tab",type:M.value,"aria-controls":($=(u=a.panels.value[_.value])==null?void 0:u.value)==null?void 0:$.id,"aria-selected":o.value,tabIndex:o.value?0:-1,disabled:t.disabled?!0:void 0};return N({props:{...t,...D},slot:I,attrs:n,slots:p,name:"Tab"})}}}),tt=k({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:n,attrs:p}){let f=E("TabPanels");return()=>{let a={selectedIndex:f.selectedIndex.value};return N({props:t,slot:a,attrs:p,slots:n,name:"TabPanels"})}}}),G=k({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:n,slots:p,expose:f}){let a=E("TabPanel"),l=`headlessui-tabs-panel-${Q()}`,r=y(null);f({el:r,$el:r}),j(()=>a.registerPanel(r)),Z(()=>a.unregisterPanel(r));let _=A(()=>a.panels.value.indexOf(r)),o=A(()=>_.value===a.selectedIndex.value);return()=>{var c,e;let m={selected:o.value},h={ref:r,id:l,role:"tabpanel","aria-labelledby":(e=(c=a.tabs.value[_.value])==null?void 0:c.value)==null?void 0:e.id,tabIndex:o.value?0:-1};return N({props:{...t,...h},slot:m,attrs:n,slots:p,features:X.Static|X.RenderStrategy,visible:o.value,name:"TabPanel"})}}});const at={class:"flex items-center justify-center"},st={class:"flex-1"},lt={class:"text-gray-700 dark:text-gray-100"},nt=k({__name:"Alert",props:{title:{type:String,default:void 0},text:{type:String,default:void 0},type:{type:String,default:"primary"}},setup(t){const n=t,p=q({primary:"",success:"dark:from-green-500/50 via-gray-200 to-gray-200 dark:via-slate-800 dark:to-slate-800",warning:"dark:from-yellow-500/50 via-gray-200 to-gray-200 dark:via-slate-800 dark:to-slate-800",danger:"dark:from-red-500/50 via-gray-200 to-gray-200 dark:via-slate-800 dark:to-slate-800"}),f=q({primary:"text-white",success:"text-green-500",warning:"text-orange-500",danger:"text-red-500"}),a=y(!1),l=A(()=>["primary","success","warning","danger"].includes(n.type)?n.type:"primary"),r=A(()=>p[l.value]),_=A(()=>f[l.value]),o=()=>{a.value=!0};return(c,e)=>{const m=Xe,h=Ge,M=Oe,u=Le;return g(),L(v(ge),{show:!a.value,appear:""},{default:d(()=>[s(v(he),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-300 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:d(()=>[i("div",{class:V(`bg-gray-200 dark:bg-slate-800 bg-gradient-to-r shadow-white/50 dark:shadow-slate-900/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${v(r)}`)},[i("div",at,[P(c.$slots,"icon",{},()=>[v(l)==="success"?(g(),L(m,{key:0,class:V(`text-2xl ${v(_)}`)},null,8,["class"])):O("",!0),v(l)==="danger"?(g(),L(h,{key:1,class:V(`text-2xl ${v(_)}`)},null,8,["class"])):O("",!0),v(l)==="warning"?(g(),L(M,{key:2,class:V(`text-2xl ${v(_)}`)},null,8,["class"])):O("",!0)])]),i("div",st,[i("div",{class:V(`font-bold text-lg mb-0.5 ${v(_)}`)},[P(c.$slots,"title",{},()=>[R(x(n.title),1)])],2),i("div",lt,[P(c.$slots,"title",{},()=>[R(x(n.text),1)])])]),i("div",null,[i("button",{class:"text-slate-600 hover:text-red-500 dark:text-gray-400 font-bold",onClick:o},[s(u)])])],2)]),_:3})]),_:3},8,["show"])}}}),ot={class:"text-xl font-semibold mb-2"},rt=k({__name:"Title",props:{text:{type:String,default:""}},setup(t){return(n,p)=>(g(),w("div",ot,[P(n.$slots,"default",{},()=>[R(x(t.text),1)])]))}}),it={},dt={class:"card-content px-6 py-6 relative"};function ct(t,n){return g(),w("div",dt,[P(t.$slots,"default")])}const ut=ee(it,[["render",ct]]),pt={},mt={class:"card-footer px-6 py-2 text-sm bg-white dark:bg-slate-800 border-t border-gray-900/10 dark:border-gray-50/[0.2]"};function _t(t,n){return g(),w("div",mt,[P(t.$slots,"default")])}const ft=ee(pt,[["render",_t]]),vt={class:"card duration-300 transition-colors w-full relative rounded overflow-hidden bg-white dark:bg-slate-900 border border-gray-900/10 dark:border-gray-50/[0.2]"},ht={key:0,class:"absolute z-10 top-0 left-0 w-full h-full bg-slate-800/[0.75] cursor-not-allowed"},gt=k({__name:"index",props:{disabled:{type:Boolean,required:!1}},setup(t){return(n,p)=>(g(),w("div",vt,[t.disabled?(g(),w("div",ht)):O("",!0),P(n.$slots,"default")]))}}),bt=["for"],xt=["for"],yt=["id","checked"],$t=["for"],wt=k({__name:"Switch",props:{modelValue:{type:Boolean,default:!1},on:{type:Boolean,default:!1},id:{type:String,default:void 0}},emits:["update:modelValue"],setup(t,{emit:n}){const p=t,f=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),a=y(p.id||f()),l=y(),r=we(p,"modelValue",n),_=o=>{const c=o.target;r.value=c.checked,n("update:modelValue",c.checked)};return j(()=>{p.on&&(r.value=!0,n("update:modelValue",!0),l.value&&(l.value.checked=!0))}),(o,c)=>(g(),w("label",{for:a.value,class:"flex cursor-pointer"},[i("label",{for:a.value,class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},[i("input",{id:a.value,ref_key:"input",ref:l,type:"checkbox",class:"switch-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 appearance-none cursor-pointer",checked:v(r),onChange:_},null,40,yt),i("label",{for:a.value,class:"switch-label block overflow-hidden h-6 rounded-full bg-gray-200 dark:bg-slate-700 cursor-pointer border border-slate-300 dark:border-slate-500"},null,8,$t)],8,xt),P(o.$slots,"default")],8,bt))}});var ae=(t=>(t.SMALL="sm",t.MEDIUM="md",t.LARGE="lg",t.EXTRA_LARGE="xl",t))(ae||{});const J={sm:576,md:768,lg:992,xl:1200},kt=()=>{const t=q({width:0,height:0}),n=y("sm"),p=l=>{l===void 0&&(l=t.width);const{["sm"]:r,["md"]:_,["lg"]:o,["xl"]:c}=J;return l<Number(r)?"sm":l<Number(_)?"md":l<Number(o)?"lg":(l<Number(c),"xl")},f=()=>{const{innerWidth:l,innerHeight:r}=window;t.width=l,t.height=r,n.value=p()},a=l=>{const{["sm"]:r,["md"]:_,["lg"]:o,["xl"]:c}=J,e=t.width;return l==="sm"?e>=Number(r):l==="md"?e>=Number(_):l==="lg"?e>=Number(o):l==="xl"?e>=Number(c):!1};return j(()=>{typeof window>"u"||(window.addEventListener("resize",f),p(window.innerWidth))}),Z(()=>{typeof window>"u"||window.removeEventListener("resize",f)}),{getSize:p,screenSize:t,current:n,higherThan:a}},Tt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},St=i("path",{fill:"currentColor",d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},null,-1),At=[St];function Mt(t,n){return g(),w("svg",Tt,At)}const It={name:"ic-baseline-content-copy",render:Mt},Vt={class:"mb-2"},Pt={class:"flex"},zt=i("span",{class:"flex-1 px-4 py-2"},"github.com/",-1),Ct={class:"mb-2"},Bt={class:"flex"},Lt={class:"mb-2"},Ft={class:"flex"},Nt={class:"capitalize"},Et={class:"mb-2"},Dt={class:"flex"},Ot={class:"capitalize"},Rt={class:"mb-2"},jt={class:"flex"},Ht={class:"capitalize"},ta=k({__name:"setting",setup(t){const{t:n}=Me(),p=kt();ue(()=>({title:Ie(n("pages.setting.title")),meta:[{name:"description",content:n("pages.setting.description")}]}));const f=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let m="";for(let h=0;h<255;h++)m+=e.charAt(Math.floor(Math.random()*e.length));return m},a=y("viandwi24"),l=y(f()),r=y(!1),_=y(!1),o=y(!1),c=async()=>{try{const e=await fetch(`https://api.github.com/users/${a.value}`);if(e.status!==200)throw new Error(`error when fetching username : ${e.statusText} (${e.status})`);const m=await e.json();alert(`Found Accout Name ${m.name} with id : ${m.id}`)}catch(e){alert(e)}};return(e,m)=>{const h=nt,M=be,u=ye,$=$e,I=rt,D=ke,C=ut,se=Te,K=Se,H=ft,B=gt,le=It,U=wt,ne=xe,oe=Ae;return g(),L(oe,null,{default:d(()=>[s(M,{class:"mb-0"},{default:d(()=>[s(h,{type:"success",title:"This is a page for testing purposes",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",class:"mb-6"})]),_:1}),s($,null,{default:d(()=>[s(u,{text:e.$t("pages.setting.title"),class:"capitalize"},null,8,["text"])]),_:1}),s(ne,null,{default:d(()=>[s(M,null,{default:d(()=>[s(v(Qe),{as:"div",class:"flex flex-col md:flex-row md:space-x-4",vertical:v(p).higherThan(v(ae).MEDIUM)},{default:d(()=>[s(v(et),{class:"w-full md:w-1/6 flex md:flex-col rounded-lg mb-2"},{default:d(()=>[s(v(W),{as:"template"},{default:d(({selected:b})=>[i("button",{class:V(["md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",b?"font-extrabold":"text-slate-800 dark:text-gray-400"])}," General ",2)]),_:1}),s(v(W),{as:"template"},{default:d(({selected:b})=>[i("button",{class:V(["md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",b?"font-extrabold":"text-slate-800 dark:text-gray-400"])}," Protection ",2)]),_:1}),s(v(W),{as:"template"},{default:d(({selected:b})=>[i("button",{class:V(["md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",b?"font-extrabold":"text-slate-800 dark:text-gray-400"])}," Advanced ",2)]),_:1})]),_:1}),s(v(tt),{class:"flex-1"},{default:d(()=>[s(v(G),null,{default:d(()=>[s(B,{class:"mb-4"},{default:d(()=>[s(C,null,{default:d(()=>[s(I,{class:"capitalize",text:e.$t("pages.setting.sections.validate_username.title")},null,8,["text"]),i("p",Vt,x(e.$t("pages.setting.sections.validate_username.description")),1),i("div",Pt,[s(D,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=b=>a.value=b),class:"w-full md:w-1/3"},{"prefix-disabled":d(()=>[zt]),_:1},8,["modelValue"])])]),_:1}),s(H,{class:"flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between"},{default:d(()=>[i("p",null,[R(x(e.$t("pages.setting.sections.validate_username.footer"))+" ",1),s(se,{class:"underline font-bold capitalize",text:e.$t("pages.setting.sections.validate_username.footer_link"),href:"https://docs.github.com/en/rest/users/users#get-a-user"},null,8,["text"])]),s(K,{class:"capitalize",size:"sm",type:"opposite",text:e.$t("pages.setting.sections.validate_username.footer_button"),onClick:c},null,8,["text"])]),_:1})]),_:1}),s(B,{class:"mb-4"},{default:d(()=>[s(C,null,{default:d(()=>[s(I,{class:"capitalize",text:e.$t("pages.setting.sections.bot_id.title")},null,8,["text"]),i("p",Ct,x(e.$t("pages.setting.sections.bot_id.description")),1),i("div",Bt,[s(D,{modelValue:l.value,"onUpdate:modelValue":m[1]||(m[1]=b=>l.value=b),class:"w-full md:w-1/3"},{suffix:d(()=>[s(K,{type:"opposite",class:"flex space-x-1 border-none"},{default:d(()=>[s(le),i("span",null,x(e.$t("others.copy")),1)]),_:1})]),_:1},8,["modelValue"])])]),_:1}),s(H,{class:"justify-between"},{default:d(()=>[i("p",null,x(e.$t("pages.setting.sections.bot_id.footer")),1)]),_:1})]),_:1})]),_:1}),s(v(G),null,{default:d(()=>[s(B,{class:V({"mb-4":!0,"border-red-500 dark:border-red-500":!r.value})},{default:d(()=>[s(C,null,{default:d(()=>[s(I,{class:"capitalize",text:e.$t("pages.setting.sections.protection_spam.title")},null,8,["text"]),i("p",Lt,x(e.$t("pages.setting.sections.protection_spam.description")),1),i("div",Ft,[s(U,{modelValue:r.value,"onUpdate:modelValue":m[2]||(m[2]=b=>r.value=b)},{default:d(()=>[i("span",Nt,x(r.value?e.$t("others.enabled"):e.$t("others.disabled")),1)]),_:1},8,["modelValue"])])]),_:1}),s(H,{class:"justify-between"},{default:d(()=>[i("p",null,x(e.$t("pages.setting.sections.protection_spam.footer")),1)]),_:1})]),_:1},8,["class"])]),_:1}),s(v(G),null,{default:d(()=>[s(B,{class:"mb-4"},{default:d(()=>[s(C,null,{default:d(()=>[s(I,{class:"capitalize",text:e.$t("pages.setting.sections.advanced_enable_advanced.title")},null,8,["text"]),i("p",Et,x(e.$t("pages.setting.sections.advanced_enable_advanced.description")),1),i("div",Dt,[s(U,{modelValue:o.value,"onUpdate:modelValue":m[3]||(m[3]=b=>o.value=b)},{default:d(()=>[i("span",Ot,x(o.value?e.$t("others.enabled"):e.$t("others.disabled")),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1}),s(B,{class:"mb-4",disabled:!o.value},{default:d(()=>[s(C,null,{default:d(()=>[s(I,{class:"capitalize",text:e.$t("pages.setting.sections.advanced_dir_listing.title")},null,8,["text"]),i("p",Rt,x(e.$t("pages.setting.sections.advanced_dir_listing.description")),1),i("div",jt,[s(U,{modelValue:_.value,"onUpdate:modelValue":m[4]||(m[4]=b=>_.value=b),on:""},{default:d(()=>[i("span",Ht,x(_.value?e.$t("others.enabled"):e.$t("others.disabled")),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["vertical"])]),_:1})]),_:1})]),_:1})}}});export{ta as default};
