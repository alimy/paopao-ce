import{$ as E}from"./index-347d1d96.js";import{u as S}from"./vuex-473b3783.js";import{u as z}from"./vue-router-b8e3382f.js";import{j as A}from"./vooks-a50491fd.js";import{U as C,X as N,Y as P,Z as D}from"./@vicons-8f91201d.js";import{a3 as R,a4 as V,j as I,e as j,a5 as x,h as H}from"./naive-ui-62663ad7.js";import{d as U,r as h,j as $,o as a,c as f,_ as o,V as e,a1 as t,O as c,a as q,Q as _,e as F,M as L,F as Q}from"./@vue-e0e89260.js";const X={key:0},Y={class:"navbar"},oe=U({__name:"main-nav",props:{title:{default:""},back:{type:Boolean,default:!1},theme:{type:Boolean,default:!0}},setup(g){const i=g,n=S(),m=z(),l=h(!1),k=h("left"),u=s=>{s?(localStorage.setItem("PAOPAO_THEME","dark"),n.commit("triggerTheme","dark")):(localStorage.setItem("PAOPAO_THEME","light"),n.commit("triggerTheme","light"))},w=()=>{window.history.length<=1?m.push({path:"/"}):m.go(-1)},v=()=>{l.value=!0};return $(()=>{localStorage.getItem("PAOPAO_THEME")||u(A()==="dark")}),(s,d)=>{const y=E,b=R,O=V,r=I,p=j,M=x,T=H;return a(),f(Q,null,[o(n).state.drawerModelShow?(a(),f("div",X,[e(O,{show:l.value,"onUpdate:show":d[0]||(d[0]=B=>l.value=B),width:212,placement:k.value,resizable:""},{default:t(()=>[e(b,null,{default:t(()=>[e(y)]),_:1})]),_:1},8,["show","placement"])])):c("",!0),e(T,{size:"small",bordered:!0,class:"nav-title-card"},{header:t(()=>[q("div",Y,[o(n).state.drawerModelShow&&!s.back?(a(),_(p,{key:0,class:"drawer-btn",onClick:v,quaternary:"",circle:"",size:"medium"},{icon:t(()=>[e(r,null,{default:t(()=>[e(o(C))]),_:1})]),_:1})):c("",!0),s.back?(a(),_(p,{key:1,class:"back-btn",onClick:w,quaternary:"",circle:"",size:"small"},{icon:t(()=>[e(r,null,{default:t(()=>[e(o(N))]),_:1})]),_:1})):c("",!0),F(" "+L(i.title)+" ",1),i.theme?(a(),_(M,{key:2,value:o(n).state.theme==="dark","onUpdate:value":u,size:"small",class:"theme-switch-wrap"},{"checked-icon":t(()=>[e(r,{component:o(P)},null,8,["component"])]),"unchecked-icon":t(()=>[e(r,{component:o(D)},null,8,["component"])]),_:1},8,["value"])):c("",!0)])]),_:1})],64)}}});export{oe as _};
