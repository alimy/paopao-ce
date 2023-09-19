import{_ as K}from"./whisper-e51c17fc.js";import{d as B,c as Q,r as Y,e as _,f as u,k as o,w as t,j as p,y as X,A as x,x as k,q as N,Y as U,bf as g,h as C,H as r,b as Z,F as M,u as ee}from"./@vue-a481fc63.js";import{u as oe,b as ne}from"./vue-router-e5a2430e.js";import{F as te,J as se,K as ae,_ as O,U as le,V as ce}from"./index-fae12ace.js";import{i as ie,p as _e,z as re,v as ue}from"./@vicons-7a4ef312.js";import{T as pe,j as P,o as me,M as de,e as fe,O as ge,L as ve,F as we,Q as he,f as ke,g as ye,I as be,G as $e}from"./naive-ui-d8de3dda.js";import{_ as Fe}from"./post-skeleton-2311fe04.js";import{_ as ze}from"./main-nav.vue_vue_type_style_index_0_lang-96e8e840.js";import{u as Te}from"./vuex-44de225f.js";import"./axios-4a70c6fc.js";import"./moment-2ab8298d.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-39372edb.js";import"./evtd-b614532e.js";import"./@css-render-7124a1a5.js";import"./vooks-6d99783e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const Ue={class:"follow-item"},qe={class:"nickname-wrap"},Ie={class:"username-wrap"},Se={class:"user-info"},xe={class:"info-item"},Ce={class:"info-item"},Me={class:"item-header-extra"},Pe=B({__name:"follow-item",props:{contact:{}},emits:["send-whisper"],setup(q,{emit:y}){const n=q,c=pe();oe();const s=e=>()=>C(P,null,{default:()=>C(e)}),b=()=>{c.success({title:"提示",content:"确定"+(n.contact.is_following?"取消关注":"关注")+"该用户吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{n.contact.is_following?se({user_id:n.contact.user_id}).then(e=>{window.$message.success("取消关注成功"),n.contact.is_following=!1}).catch(e=>{console.log(e)}):ae({user_id:n.contact.user_id}).then(e=>{window.$message.success("关注成功"),n.contact.is_following=!0}).catch(e=>{console.log(e)})}})},v=Q(()=>{let e=[{label:"私信",key:"whisper",icon:s(_e)}];return n.contact.is_following?e.push({label:"取消关注",key:"unfollow",icon:s(re)}):e.push({label:"关注",key:"follow",icon:s(ue)}),e}),m=e=>{switch(e){case"follow":case"unfollow":b();break;case"whisper":const a={id:n.contact.user_id,avatar:n.contact.avatar,username:n.contact.username,nickname:n.contact.nickname,is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1};y("send-whisper",a);break}};return(e,a)=>{const d=me,f=Y("router-link"),w=de,$=fe,F=ge,z=ve;return _(),u("div",Ue,[o(z,{"content-indented":""},{avatar:t(()=>[o(d,{size:54,src:e.contact.avatar},null,8,["src"])]),header:t(()=>[p("span",qe,[o(f,{onClick:a[0]||(a[0]=X(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.contact.username}}},{default:t(()=>[x(k(e.contact.nickname),1)]),_:1},8,["to"])]),p("span",Ie," @"+k(e.contact.username),1),e.contact.is_following?(_(),N(w,{key:0,class:"top-tag",type:"success",size:"small",round:""},{default:t(()=>[x(" 已关注 ")]),_:1})):U("",!0),p("div",Se,[p("span",xe," UID. "+k(e.contact.user_id),1),p("span",Ce,k(g(te)(e.contact.created_on))+" 加入 ",1)])]),"header-extra":t(()=>[p("div",Me,[o(F,{placement:"bottom-end",trigger:"click",size:"small",options:v.value,onSelect:m},{default:t(()=>[o($,{quaternary:"",circle:""},{icon:t(()=>[o(g(P),null,{default:t(()=>[o(g(ie))]),_:1})]),_:1})]),_:1},8,["options"])])]),_:1})])}}});const Be=O(Pe,[["__scopeId","data-v-1fb7364a"]]),Ne={key:0,class:"skeleton-wrap"},Oe={key:1},Ve={key:0,class:"empty-wrap"},De={key:0,class:"pagination-wrap"},Re=B({__name:"Following",setup(q){const y=Te(),n=ne(),c=r(!1),s=r([]),b=n.query.n||"粉丝详情",v=n.query.s||"",m=r(n.query.t||"follows"),e=r(+n.query.p||1),a=r(20),d=r(0),f=r(!1),w=r({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1}),$=l=>{w.value=l,f.value=!0},F=()=>{f.value=!1},z=l=>{e.value=l,T()},V=l=>{m.value=l,T()},T=()=>{m.value==="follows"?D(v):m.value==="followings"&&R(v)},D=(l,h=!1)=>{s.value.length===0&&(c.value=!0),le({username:l,page:e.value,page_size:a.value}).then(i=>{c.value=!1,s.value=i.list||[],d.value=Math.ceil(i.pager.total_rows/a.value),h&&setTimeout(()=>{window.scrollTo(0,99999)},50)}).catch(i=>{c.value=!1})},R=(l,h=!1)=>{s.value.length===0&&(c.value=!0),ce({username:l,page:e.value,page_size:a.value}).then(i=>{c.value=!1,s.value=i.list||[],d.value=Math.ceil(i.pager.total_rows/a.value),h&&setTimeout(()=>{window.scrollTo(0,99999)},50)}).catch(i=>{c.value=!1})};return Z(()=>{T()}),(l,h)=>{const i=ze,I=ke,W=ye,j=Fe,A=be,H=Be,L=$e,E=K,G=we,J=he;return _(),u(M,null,[p("div",null,[o(i,{title:g(b),back:!0},null,8,["title"]),o(G,{class:"main-content-wrap",bordered:""},{default:t(()=>[o(W,{type:"line",animated:"","default-value":m.value,"onUpdate:value":V},{default:t(()=>[o(I,{name:"follows",tab:"正在关注"}),o(I,{name:"followings",tab:"我的粉丝"})]),_:1},8,["default-value"]),c.value?(_(),u("div",Ne,[o(j,{num:a.value},null,8,["num"])])):(_(),u("div",Oe,[s.value.length===0?(_(),u("div",Ve,[o(A,{size:"large",description:"暂无数据"})])):U("",!0),(_(!0),u(M,null,ee(s.value,S=>(_(),N(L,{key:S.user_id},{default:t(()=>[o(H,{contact:S,onSendWhisper:$},null,8,["contact"])]),_:2},1024))),128))])),o(E,{show:f.value,user:w.value,onSuccess:F},null,8,["show","user"])]),_:1})]),d.value>0?(_(),u("div",De,[o(J,{page:e.value,"onUpdate:page":z,"page-slot":g(y).state.collapsedRight?5:8,"page-count":d.value},null,8,["page","page-slot","page-count"])])):U("",!0)],64)}}});const po=O(Re,[["__scopeId","data-v-0a10234f"]]);export{po as default};
