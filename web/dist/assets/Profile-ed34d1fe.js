import{_ as M}from"./post-item.vue_vue_type_style_index_0_lang-1c980697.js";import{_ as N}from"./post-skeleton-a514cb09.js";import{_ as S}from"./main-nav.vue_vue_type_style_index_0_lang-bd108629.js";import{u as U}from"./vuex-d28e9067.js";import{b as V}from"./vue-router-88cc84d1.js";import{A as D,_ as L}from"./index-f67b4cc5.js";import{d as R,r,j,c as a,L as e,Y as _,K as h,$ as m,O as d,o as t,a as s,M as f,F as q,a2 as A}from"./@vue-ca177dbe.js";import{F as E,G,o as H,f as K,g as O,I as T,H as Y}from"./naive-ui-2035804c.js";import"./content-71c02e20.js";import"./@vicons-6d35273b.js";import"./nonesir-video-db921567.js";import"./formatTime-000dbebb.js";import"./moment-b7869f98.js";import"./vooks-2c48c2b5.js";import"./evtd-b614532e.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-973e5707.js";import"./@css-render-480a363d.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const J={class:"profile-baseinfo"},Q={class:"avatar"},W={class:"base-info"},X={class:"username"},Z={class:"uid"},ee={key:0,class:"skeleton-wrap"},te={key:1},oe={key:0,class:"empty-wrap"},se={key:1,class:"pagination-wrap"},ne=R({__name:"Profile",setup(ae){const o=U(),k=V(),i=r(!1),p=r([]),l=r(+k.query.p||1),c=r(20),u=r(0),g=()=>{i.value=!0,D({username:o.state.userInfo.username,page:l.value,page_size:c.value}).then(n=>{i.value=!1,p.value=n.list,u.value=Math.ceil(n.pager.total_rows/c.value),window.scrollTo(0,0)}).catch(n=>{i.value=!1})},y=n=>{l.value=n,g()};return j(()=>{g()}),(n,_e)=>{const w=S,I=H,b=K,P=O,x=N,z=T,B=M,$=Y,C=E,F=G;return t(),a("div",null,[e(w,{title:"主页"}),_(o).state.userInfo.id>0?(t(),h(C,{key:0,class:"main-content-wrap profile-wrap",bordered:""},{default:m(()=>[s("div",J,[s("div",Q,[e(I,{size:"large",src:_(o).state.userInfo.avatar},null,8,["src"])]),s("div",W,[s("div",X,[s("strong",null,f(_(o).state.userInfo.nickname),1),s("span",null," @"+f(_(o).state.userInfo.username),1)]),s("div",Z,"UID. "+f(_(o).state.userInfo.id),1)])]),e(P,{class:"profile-tabs-wrap",animated:""},{default:m(()=>[e(b,{name:"post",tab:"泡泡"})]),_:1}),i.value?(t(),a("div",ee,[e(x,{num:c.value},null,8,["num"])])):(t(),a("div",te,[p.value.length===0?(t(),a("div",oe,[e(z,{size:"large",description:"暂无数据"})])):d("",!0),(t(!0),a(q,null,A(p.value,v=>(t(),h($,{key:v.id},{default:m(()=>[e(B,{post:v},null,8,["post"])]),_:2},1024))),128))]))]),_:1})):d("",!0),u.value>0?(t(),a("div",se,[e(F,{page:l.value,"onUpdate:page":y,"page-slot":_(o).state.collapsedRight?5:8,"page-count":u.value},null,8,["page","page-slot","page-count"])])):d("",!0)])}}});const Ve=L(ne,[["__scopeId","data-v-1d87d974"]]);export{Ve as default};
