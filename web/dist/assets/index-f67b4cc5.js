import{d as z,r as R,D as Y,j,o as v,K as D,$ as a,a as k,L as o,c as T,e as S,P as K,a0 as q,O as M,Y as m,n as Q,w as H,a1 as ae,F as J,a2 as X,M as I,s as P,a3 as he,Q as Z,a4 as ge,a5 as fe}from"./@vue-ca177dbe.js";import{c as ve,a as we,u as le,b as ye}from"./vue-router-88cc84d1.js";import{c as ke,u as B}from"./vuex-d28e9067.js";import{a as be}from"./axios-707ed124.js";import{_ as Pe,N as Oe,a as ue,b as ce,c as Le,d as Ae,e as ie,f as Te,g as Re,h as de,i as Ce,j as x,k as Ee,u as $e,l as Ie,m as Se,n as Me,o as Ue,p as Ke,q as qe,r as De,s as Ne,t as xe}from"./naive-ui-2035804c.js";import{S as Fe,M as Ve,L as ze,C as Be,B as We,P as He,W as je,a as Qe,H as ee,b as te,c as oe}from"./@vicons-6d35273b.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-973e5707.js";import"./evtd-b614532e.js";import"./@css-render-480a363d.js";import"./vooks-2c48c2b5.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function l(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(c){if(c.ep)return;c.ep=!0;const n=l(c);fetch(c.href,n)}})();const Ge="modulepreload",Ye=function(e){return"/"+e},se={},A=function(t,l,i){if(!l||l.length===0)return t();const c=document.getElementsByTagName("link");return Promise.all(l.map(n=>{if(n=Ye(n),n in se)return;se[n]=!0;const h=n.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!i)for(let b=c.length-1;b>=0;b--){const _=c[b];if(_.href===n&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":Ge,h||(g.as="script",g.crossOrigin=""),g.href=n,document.head.appendChild(g),h)return new Promise((b,_)=>{g.addEventListener("load",b),g.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},Je=[{path:"/",name:"home",meta:{title:"广场",keepAlive:!0},component:()=>A(()=>import("./Home-8df7b0d5.js"),["assets/Home-8df7b0d5.js","assets/post-item.vue_vue_type_style_index_0_lang-1c980697.js","assets/content-71c02e20.js","assets/@vue-ca177dbe.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/post-item-294ca437.css","assets/post-skeleton-a514cb09.js","assets/post-skeleton-f1900002.css","assets/lodash-3329902d.js","assets/copy-to-clipboard-ca358197.js","assets/toggle-selection-93f4ad84.js","assets/IEnum-a180d93e.js","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/main-nav-3ef9bae6.css","assets/axios-707ed124.js","assets/Home-47eb20e2.css","assets/vfonts-7afd136d.css"])},{path:"/post",name:"post",meta:{title:"话题详情"},component:()=>A(()=>import("./Post-974ee303.js"),["assets/Post-974ee303.js","assets/@vue-ca177dbe.js","assets/vuex-d28e9067.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/IEnum-a180d93e.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/content-71c02e20.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vue-router-88cc84d1.js","assets/post-skeleton-a514cb09.js","assets/post-skeleton-f1900002.css","assets/lodash-3329902d.js","assets/copy-to-clipboard-ca358197.js","assets/toggle-selection-93f4ad84.js","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/main-nav-3ef9bae6.css","assets/v3-infinite-loading-fcb59c38.js","assets/v3-infinite-loading-7d241236.css","assets/axios-707ed124.js","assets/Post-d4d1dd23.css","assets/vfonts-7afd136d.css"])},{path:"/topic",name:"topic",meta:{title:"话题"},component:()=>A(()=>import("./Topic-f45ab0e7.js"),["assets/Topic-f45ab0e7.js","assets/@vicons-6d35273b.js","assets/@vue-ca177dbe.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/main-nav-3ef9bae6.css","assets/axios-707ed124.js","assets/Topic-8dbcebb5.css","assets/vfonts-7afd136d.css"])},{path:"/anouncement",name:"anouncement",meta:{title:"公告"},component:()=>A(()=>import("./Anouncement-5ae3726d.js"),["assets/Anouncement-5ae3726d.js","assets/post-skeleton-a514cb09.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/@vue-ca177dbe.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/@vicons-6d35273b.js","assets/main-nav-3ef9bae6.css","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/axios-707ed124.js","assets/Anouncement-662e2d95.css","assets/vfonts-7afd136d.css"])},{path:"/profile",name:"profile",meta:{title:"主页"},component:()=>A(()=>import("./Profile-ed34d1fe.js"),["assets/Profile-ed34d1fe.js","assets/post-item.vue_vue_type_style_index_0_lang-1c980697.js","assets/content-71c02e20.js","assets/@vue-ca177dbe.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/post-item-294ca437.css","assets/post-skeleton-a514cb09.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/main-nav-3ef9bae6.css","assets/axios-707ed124.js","assets/Profile-5d71a5c2.css","assets/vfonts-7afd136d.css"])},{path:"/user",name:"user",meta:{title:"用户详情"},component:()=>A(()=>import("./User-6452d9e2.js"),["assets/User-6452d9e2.js","assets/post-item.vue_vue_type_style_index_0_lang-1c980697.js","assets/content-71c02e20.js","assets/@vue-ca177dbe.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/post-item-294ca437.css","assets/post-skeleton-a514cb09.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/main-nav-3ef9bae6.css","assets/axios-707ed124.js","assets/User-4f525d0f.css","assets/vfonts-7afd136d.css"])},{path:"/messages",name:"messages",meta:{title:"消息"},component:()=>A(()=>import("./Messages-5d535b68.js"),["assets/Messages-5d535b68.js","assets/@vue-ca177dbe.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/vuex-d28e9067.js","assets/main-nav-3ef9bae6.css","assets/axios-707ed124.js","assets/Messages-7ed31ecd.css","assets/vfonts-7afd136d.css"])},{path:"/collection",name:"collection",meta:{title:"收藏"},component:()=>A(()=>import("./Collection-651490f8.js"),["assets/Collection-651490f8.js","assets/post-item.vue_vue_type_style_index_0_lang-1c980697.js","assets/content-71c02e20.js","assets/@vue-ca177dbe.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/post-item-294ca437.css","assets/post-skeleton-a514cb09.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/main-nav-3ef9bae6.css","assets/axios-707ed124.js","assets/Collection-e1365ea0.css","assets/vfonts-7afd136d.css"])},{path:"/contacts",name:"contacts",meta:{title:"好友"},component:()=>A(()=>import("./Contacts-61e6f602.js"),["assets/Contacts-61e6f602.js","assets/vue-router-88cc84d1.js","assets/@vue-ca177dbe.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-a514cb09.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/vuex-d28e9067.js","assets/@vicons-6d35273b.js","assets/main-nav-3ef9bae6.css","assets/axios-707ed124.js","assets/Contacts-b60e5e0d.css","assets/vfonts-7afd136d.css"])},{path:"/wallet",name:"wallet",meta:{title:"钱包"},component:()=>A(()=>import("./Wallet-2d27e25e.js"),["assets/Wallet-2d27e25e.js","assets/post-skeleton-a514cb09.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/@vue-ca177dbe.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/@vicons-6d35273b.js","assets/main-nav-3ef9bae6.css","assets/qrcode-23069ad7.js","assets/encode-utf8-f813de00.js","assets/dijkstrajs-59d11638.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/axios-707ed124.js","assets/Wallet-77044929.css","assets/vfonts-7afd136d.css"])},{path:"/setting",name:"setting",meta:{title:"设置"},component:()=>A(()=>import("./Setting-2177b635.js"),["assets/Setting-2177b635.js","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/vuex-d28e9067.js","assets/@vue-ca177dbe.js","assets/vue-router-88cc84d1.js","assets/vooks-2c48c2b5.js","assets/evtd-b614532e.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/@css-render-480a363d.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-3ef9bae6.css","assets/axios-707ed124.js","assets/Setting-bfd24152.css","assets/vfonts-7afd136d.css"])},{path:"/404",name:"404",meta:{title:"404"},component:()=>A(()=>import("./404-85cc3505.js"),["assets/404-85cc3505.js","assets/main-nav.vue_vue_type_style_index_0_lang-bd108629.js","assets/vuex-d28e9067.js","assets/@vue-ca177dbe.js","assets/vue-router-88cc84d1.js","assets/vooks-2c48c2b5.js","assets/evtd-b614532e.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/@css-render-480a363d.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-3ef9bae6.css","assets/axios-707ed124.js","assets/404-020b2afd.css","assets/vfonts-7afd136d.css"])},{path:"/:pathMatch(.*)",redirect:"/404"}],pe=ve({history:we(),routes:Je});pe.beforeEach((e,t,l)=>{document.title=`${e.meta.title} | 泡泡 - 一个清新文艺的微社区`,l()});const Xe=ke({state:{refresh:Date.now(),refreshTopicFollow:Date.now(),theme:localStorage.getItem("PAOPAO_THEME"),collapsedLeft:document.body.clientWidth<=821,collapsedRight:document.body.clientWidth<=821,drawerModelShow:document.body.clientWidth<=821,desktopModelShow:document.body.clientWidth>821,authModalShow:!1,authModelTab:"signin",userLogined:!1,userInfo:{id:0,username:"",nickname:""}},mutations:{refresh(e,t){e.refresh=t||Date.now()},refreshTopicFollow(e){e.refreshTopicFollow=Date.now()},triggerTheme(e,t){e.theme=t},triggerAuth(e,t){e.authModalShow=t},triggerAuthKey(e,t){e.authModelTab=t},triggerCollapsedLeft(e,t){e.collapsedLeft=t,e.drawerModelShow=t,e.desktopModelShow=!t},triggerCollapsedRight(e,t){e.collapsedRight=t},updateUserinfo(e,t){e.userInfo=t,e.userInfo.id>0&&(e.userLogined=!0)},userLogout(e){localStorage.removeItem("PAOPAO_TOKEN"),e.userInfo={id:0,nickname:"",username:""},e.userLogined=!1}},actions:{},modules:{}}),G=be.create({baseURL:"",timeout:3e4});G.interceptors.request.use(e=>(localStorage.getItem("PAOPAO_TOKEN")&&(e.headers.Authorization="Bearer "+localStorage.getItem("PAOPAO_TOKEN")),e),e=>Promise.reject(e));G.interceptors.response.use(e=>{const{data:t={},code:l=0}=(e==null?void 0:e.data)||{};if(+l==0)return t||{};Promise.reject((e==null?void 0:e.data)||{})},(e={})=>{var l;const{response:t={}}=e||{};return+(t==null?void 0:t.status)==401?(localStorage.removeItem("PAOPAO_TOKEN"),(t==null?void 0:t.data.code)!==10005?window.$message.warning((t==null?void 0:t.data.msg)||"鉴权失败"):window.$store.commit("triggerAuth",!0)):window.$message.error(((l=t==null?void 0:t.data)==null?void 0:l.msg)||"请求失败"),Promise.reject((t==null?void 0:t.data)||{})});function s(e){return G(e)}const ne=e=>s({method:"post",url:"/v1/auth/login",data:e}),Ze=e=>s({method:"post",url:"/v1/auth/register",data:e}),W=(e="")=>s({method:"get",url:"/v1/user/info",headers:{Authorization:`Bearer ${e}`}}),et={class:"auth-wrap"},tt={key:0},ot=z({__name:"auth",setup(e){const t=R("true".toLowerCase()==="true"),l=B(),i=R(!1),c=R(),n=Y({username:"",password:""}),h=R(),d=Y({username:"",password:"",repassword:""}),U={username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"},repassword:[{required:!0,message:"请输入密码"},{validator:(_,u)=>!!d.password&&d.password.startsWith(u)&&d.password.length>=u.length,message:"两次密码输入不一致",trigger:"input"}]},g=_=>{var u;_.preventDefault(),_.stopPropagation(),(u=c.value)==null||u.validate(O=>{O||(i.value=!0,ne({username:n.username,password:n.password}).then(p=>{const r=(p==null?void 0:p.token)||"";return localStorage.setItem("PAOPAO_TOKEN",r),W(r)}).then(p=>{window.$message.success("登录成功"),i.value=!1,l.commit("updateUserinfo",p),l.commit("triggerAuth",!1),l.commit("refresh"),n.username="",n.password=""}).catch(p=>{i.value=!1}))})},b=_=>{var u;_.preventDefault(),_.stopPropagation(),(u=h.value)==null||u.validate(O=>{O||(i.value=!0,Ze({username:d.username,password:d.password}).then(p=>ne({username:d.username,password:d.password})).then(p=>{const r=(p==null?void 0:p.token)||"";return localStorage.setItem("PAOPAO_TOKEN",r),W(r)}).then(p=>{window.$message.success("注册成功"),i.value=!1,l.commit("updateUserinfo",p),l.commit("triggerAuth",!1),d.username="",d.password="",d.repassword=""}).catch(p=>{i.value=!1}))})};return j(()=>{const _=localStorage.getItem("PAOPAO_TOKEN")||"";_?W(_).then(u=>{l.commit("updateUserinfo",u),l.commit("triggerAuth",!1)}).catch(u=>{l.commit("userLogout")}):l.commit("userLogout")}),(_,u)=>{const O=Pe,p=Oe,r=ue,y=ce,L=Le,w=Ae,E=ie,$=Te,N=Re,F=de,V=Ce;return v(),D(V,{show:m(l).state.authModalShow,"onUpdate:show":u[7]||(u[7]=f=>m(l).state.authModalShow=f),class:"auth-card",preset:"card",size:"small","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:a(()=>[k("div",et,[o(F,{bordered:!1},{default:a(()=>[t.value?M("",!0):(v(),T("div",tt,[o(r,{justify:"center"},{default:a(()=>[o(p,null,{default:a(()=>[o(O,{type:"success"},{default:a(()=>[S("账号登录")]),_:1})]),_:1})]),_:1}),o(w,{ref_key:"loginRef",ref:c,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[o(L,{label:"账户",path:"username"},{default:a(()=>[o(y,{value:n.username,"onUpdate:value":u[0]||(u[0]=f=>n.username=f),placeholder:"请输入用户名",onKeyup:K(q(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),o(L,{label:"密码",path:"password"},{default:a(()=>[o(y,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[1]||(u[1]=f=>n.password=f),placeholder:"请输入账户密码",onKeyup:K(q(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),o(E,{type:"primary",block:"",secondary:"",strong:"",loading:i.value,onClick:g},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])])),t.value?(v(),D(N,{key:1,"default-value":m(l).state.authModelTab,size:"large","justify-content":"space-evenly"},{default:a(()=>[o($,{name:"signin",tab:"登录"},{default:a(()=>[o(w,{ref_key:"loginRef",ref:c,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[o(L,{label:"账户",path:"username"},{default:a(()=>[o(y,{value:n.username,"onUpdate:value":u[2]||(u[2]=f=>n.username=f),placeholder:"请输入用户名",onKeyup:K(q(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),o(L,{label:"密码",path:"password"},{default:a(()=>[o(y,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[3]||(u[3]=f=>n.password=f),placeholder:"请输入账户密码",onKeyup:K(q(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),o(E,{type:"primary",block:"",secondary:"",strong:"",loading:i.value,onClick:g},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])]),_:1}),o($,{name:"signup",tab:"注册"},{default:a(()=>[o(w,{ref_key:"registerRef",ref:h,model:d,rules:U},{default:a(()=>[o(L,{label:"用户名",path:"username"},{default:a(()=>[o(y,{value:d.username,"onUpdate:value":u[4]||(u[4]=f=>d.username=f),placeholder:"用户名注册后无法修改"},null,8,["value"])]),_:1}),o(L,{label:"密码",path:"password"},{default:a(()=>[o(y,{type:"password","show-password-on":"mousedown",placeholder:"密码不少于6位",value:d.password,"onUpdate:value":u[5]||(u[5]=f=>d.password=f),onKeyup:K(q(b,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),o(L,{label:"重复密码",path:"repassword"},{default:a(()=>[o(y,{type:"password","show-password-on":"mousedown",placeholder:"请再次输入密码",value:d.repassword,"onUpdate:value":u[6]||(u[6]=f=>d.repassword=f),onKeyup:K(q(b,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),o(E,{type:"primary",block:"",secondary:"",strong:"",loading:i.value,onClick:b},{default:a(()=>[S(" 注册 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["default-value"])):M("",!0)]),_:1})])]),_:1},8,["show"])}}});const me=(e,t)=>{const l=e.__vccOpts||e;for(const[i,c]of t)l[i]=c;return l},st=me(ot,[["__scopeId","data-v-053dfa44"]]),Jt=e=>s({method:"get",url:"/v1/posts",params:e}),nt=e=>s({method:"get",url:"/v1/tags",params:e}),Xt=e=>s({method:"get",url:"/v1/post",params:e}),Zt=e=>s({method:"get",url:"/v1/post/star",params:e}),eo=e=>s({method:"post",url:"/v1/post/star",data:e}),to=e=>s({method:"get",url:"/v1/post/collection",params:e}),oo=e=>s({method:"post",url:"/v1/post/collection",data:e}),so=e=>s({method:"get",url:"/v1/post/comments",params:e}),no=e=>s({method:"get",url:"/v1/user/contacts",params:e}),ro=e=>s({method:"post",url:"/v1/post",data:e}),ao=e=>s({method:"delete",url:"/v1/post",data:e}),lo=e=>s({method:"post",url:"/v1/post/lock",data:e}),uo=e=>s({method:"post",url:"/v1/post/stick",data:e}),co=e=>s({method:"post",url:"/v1/post/visibility",data:e}),io=e=>s({method:"post",url:"/v1/tweet/comment/thumbsup",data:e}),po=e=>s({method:"post",url:"/v1/tweet/comment/thumbsdown",data:e}),mo=e=>s({method:"post",url:"/v1/tweet/reply/thumbsup",data:e}),_o=e=>s({method:"post",url:"/v1/tweet/reply/thumbsdown",data:e}),ho=e=>s({method:"post",url:"/v1/post/comment",data:e}),go=e=>s({method:"delete",url:"/v1/post/comment",data:e}),fo=e=>s({method:"post",url:"/v1/post/comment/reply",data:e}),vo=e=>s({method:"delete",url:"/v1/post/comment/reply",data:e}),wo=e=>s({method:"post",url:"/v1/topic/stick",data:e}),yo=e=>s({method:"post",url:"/v1/topic/follow",data:e}),ko=e=>s({method:"post",url:"/v1/topic/unfollow",data:e}),rt={key:0,class:"rightbar-wrap"},at={class:"search-wrap"},lt={class:"post-num"},ut={class:"post-num"},ct={class:"copyright"},it=["href"],dt=["href"],pt=z({__name:"rightbar",setup(e){const t=R([]),l=R([]),i=R(!1),c=R(""),n=B(),h=le(),d="2023 paopao.info",U="Roc's Me",g="",b="泡泡(PaoPao)开源社区",_="https://www.paopao.info",u=+"6",O=+"12",p=()=>{i.value=!0,nt({type:"hot_extral",num:O,extral_num:u}).then(w=>{t.value=w.topics,l.value=w.extral_topics??[],L.value=!0,i.value=!1}).catch(w=>{i.value=!1})},r=w=>w>=1e3?(w/1e3).toFixed(1)+"k":w,y=()=>{h.push({name:"home",query:{q:c.value}})},L=Q({get:()=>n.state.userLogined&&l.value.length!==0,set:w=>{}});return H(()=>({refreshTopicFollow:n.state.refreshTopicFollow,userLogined:n.state.userLogined}),(w,E)=>{(w.refreshTopicFollow!==E.refreshTopicFollow||w.userLogined)&&p()}),j(()=>{p()}),(w,E)=>{const $=x,N=ce,F=ae("router-link"),V=Ee,f=de,_e=ue;return m(n).state.collapsedRight?M("",!0):(v(),T("div",rt,[k("div",at,[o(N,{round:"",clearable:"",placeholder:"搜一搜...",value:c.value,"onUpdate:value":E[0]||(E[0]=C=>c.value=C),onKeyup:K(q(y,["prevent"]),["enter"])},{prefix:a(()=>[o($,{component:m(Fe)},null,8,["component"])]),_:1},8,["value","onKeyup"])]),m(L)?(v(),D(f,{key:0,class:"hottopic-wrap",title:"关注话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[o(V,{show:i.value},{default:a(()=>[(v(!0),T(J,null,X(l.value,C=>(v(),T("div",{class:"hot-tag-item",key:C.id},[o(F,{class:"hash-link",to:{name:"home",query:{q:C.tag,t:"tag"}}},{default:a(()=>[S(" #"+I(C.tag),1)]),_:2},1032,["to"]),k("div",lt,I(r(C.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1})):M("",!0),o(f,{class:"hottopic-wrap",title:"热门话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[o(V,{show:i.value},{default:a(()=>[(v(!0),T(J,null,X(t.value,C=>(v(),T("div",{class:"hot-tag-item",key:C.id},[o(F,{class:"hash-link",to:{name:"home",query:{q:C.tag,t:"tag"}}},{default:a(()=>[S(" #"+I(C.tag),1)]),_:2},1032,["to"]),k("div",ut,I(r(C.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1}),o(f,{class:"copyright-wrap",embedded:"",bordered:!1,size:"small"},{default:a(()=>[k("div",ct,"© "+I(m(d)),1),k("div",null,[o(_e,null,{default:a(()=>[k("a",{href:m(g),target:"_blank",class:"hash-link"},I(m(U)),9,it),k("a",{href:m(_),target:"_blank",class:"hash-link"},I(m(b)),9,dt)]),_:1})])]),_:1})]))}}});const mt=me(pt,[["__scopeId","data-v-f4a84024"]]),bo=(e={})=>s({method:"get",url:"/v1/captcha",params:e}),Po=e=>s({method:"post",url:"/v1/captcha",data:e}),Oo=e=>s({method:"post",url:"/v1/user/whisper",data:e}),Lo=e=>s({method:"post",url:"/v1/friend/requesting",data:e}),Ao=e=>s({method:"post",url:"/v1/friend/add",data:e}),To=e=>s({method:"post",url:"/v1/friend/reject",data:e}),Ro=e=>s({method:"post",url:"/v1/friend/delete",data:e}),Co=e=>s({method:"post",url:"/v1/user/phone",data:e}),Eo=e=>s({method:"post",url:"/v1/user/activate",data:e}),$o=e=>s({method:"post",url:"/v1/user/password",data:e}),Io=e=>s({method:"post",url:"/v1/user/nickname",data:e}),So=e=>s({method:"post",url:"/v1/user/avatar",data:e}),re=(e={})=>s({method:"get",url:"/v1/user/msgcount/unread",params:e}),Mo=e=>s({method:"get",url:"/v1/user/messages",params:e}),Uo=e=>s({method:"post",url:"/v1/user/message/read",data:e}),Ko=e=>s({method:"get",url:"/v1/user/collections",params:e}),qo=e=>s({method:"get",url:"/v1/user/profile",params:e}),Do=e=>s({method:"get",url:"/v1/user/posts",params:e}),No=e=>s({method:"get",url:"/v1/user/wallet/bills",params:e}),xo=e=>s({method:"post",url:"/v1/user/recharge",data:e}),Fo=e=>s({method:"get",url:"/v1/user/recharge",params:e}),Vo=e=>s({method:"get",url:"/v1/suggest/users",params:e}),zo=e=>s({method:"get",url:"/v1/suggest/tags",params:e}),Bo=e=>s({method:"get",url:"/v1/attachment/precheck",params:e}),Wo=e=>s({method:"get",url:"/v1/attachment",params:e}),Ho=e=>s({method:"post",url:"/v1/admin/user/status",data:e}),_t="/assets/logo-52afee68.png",ht={class:"sidebar-wrap"},gt={class:"logo-wrap"},ft={key:0,class:"user-wrap"},vt={class:"user-info"},wt={class:"nickname"},yt={class:"nickname-txt"},kt={class:"username"},bt={class:"user-mini-wrap"},Pt={key:1,class:"user-wrap"},Ot={key:0,class:"login-only-wrap"},Lt={key:1,class:"login-wrap"},At=z({__name:"sidebar",setup(e){const t=B(),l=ye(),i=le(),c=R(!1),n=R(l.name||""),h=R(),d=R("true".toLowerCase()==="true");H(l,()=>{n.value=l.name}),H(t.state,()=>{t.state.userInfo.id>0?h.value||(re().then(r=>{c.value=r.count>0}).catch(r=>{console.log(r)}),h.value=setInterval(()=>{re().then(r=>{c.value=r.count>0}).catch(r=>{console.log(r)})},5e3)):h.value&&clearInterval(h.value)}),j(()=>{window.onresize=()=>{t.commit("triggerCollapsedLeft",document.body.clientWidth<=821),t.commit("triggerCollapsedRight",document.body.clientWidth<=821)}});const U=Q(()=>{const r=[{label:"广场",key:"home",icon:()=>P(ee),href:"/"},{label:"话题",key:"topic",icon:()=>P(te),href:"/topic"}];return"false".toLowerCase()==="true"&&r.push({label:"公告",key:"anouncement",icon:()=>P(Ve),href:"/anouncement"}),r.push({label:"主页",key:"profile",icon:()=>P(ze),href:"/profile"}),r.push({label:"消息",key:"messages",icon:()=>P(Be),href:"/messages"}),r.push({label:"收藏",key:"collection",icon:()=>P(We),href:"/collection"}),r.push({label:"好友",key:"contacts",icon:()=>P(He),href:"/contacts"}),"false".toLocaleLowerCase()==="true"&&r.push({label:"钱包",key:"wallet",icon:()=>P(je),href:"/wallet"}),r.push({label:"设置",key:"setting",icon:()=>P(Qe),href:"/setting"}),t.state.userInfo.id>0?r:[{label:"广场",key:"home",icon:()=>P(ee),href:"/"},{label:"话题",key:"topic",icon:()=>P(te),href:"/topic"}]}),g=r=>"href"in r?P("div",{},r.label):r.label,b=r=>r.key==="messages"?P(Ie,{dot:!0,show:c.value,processing:!0},{default:()=>P(x,{color:r.key===n.value?"var(--n-item-icon-color-active)":"var(--n-item-icon-color)"},{default:r.icon})}):P(x,null,{default:r.icon}),_=(r,y={})=>{n.value=r,i.push({name:r})},u=()=>{l.path==="/"&&t.commit("refresh"),_("home")},O=r=>{t.commit("triggerAuth",!0),t.commit("triggerAuthKey",r)},p=()=>{t.commit("userLogout"),t.commit("refresh"),u()};return window.$store=t,window.$message=$e(),(r,y)=>{const L=Se,w=Me,E=Ue,$=ie;return v(),T("div",ht,[k("div",gt,[o(L,{class:"logo-img",width:"36",src:m(_t),"preview-disabled":!0,onClick:u},null,8,["src"])]),o(w,{accordion:!0,"icon-size":24,options:m(U),"render-label":g,"render-icon":b,value:n.value,"onUpdate:value":_},null,8,["options","value"]),m(t).state.userInfo.id>0?(v(),T("div",ft,[o(E,{class:"user-avatar",round:"",size:34,src:m(t).state.userInfo.avatar},null,8,["src"]),k("div",vt,[k("div",wt,[k("span",yt,I(m(t).state.userInfo.nickname),1),o($,{class:"logout",quaternary:"",circle:"",size:"tiny",onClick:p},{icon:a(()=>[o(m(x),null,{default:a(()=>[o(m(oe))]),_:1})]),_:1})]),k("div",kt,"@"+I(m(t).state.userInfo.username),1)]),k("div",bt,[o($,{class:"logout",quaternary:"",circle:"",onClick:p},{icon:a(()=>[o(m(x),{size:24},{default:a(()=>[o(m(oe))]),_:1})]),_:1})])])):(v(),T("div",Pt,[d.value?M("",!0):(v(),T("div",Ot,[o($,{strong:"",secondary:"",round:"",type:"primary",onClick:y[0]||(y[0]=N=>O("signin"))},{default:a(()=>[S(" 登录 ")]),_:1})])),d.value?(v(),T("div",Lt,[o($,{strong:"",secondary:"",round:"",type:"primary",onClick:y[1]||(y[1]=N=>O("signin"))},{default:a(()=>[S(" 登录 ")]),_:1}),o($,{strong:"",secondary:"",round:"",type:"info",onClick:y[2]||(y[2]=N=>O("signup"))},{default:a(()=>[S(" 注册 ")]),_:1})])):M("",!0)]))])}}});const Tt={"has-sider":"",class:"main-wrap",position:"static"},Rt={key:0},Ct={class:"content-wrap"},Et=z({__name:"App",setup(e){const t=B(),l=Q(()=>t.state.theme==="dark"?qe:null);return(i,c)=>{const n=At,h=ae("router-view"),d=mt,U=st,g=De,b=Ne,_=xe,u=Ke;return v(),D(u,{theme:m(l)},{default:a(()=>[o(b,null,{default:a(()=>[o(g,null,{default:a(()=>{var O;return[k("div",{class:ge(["app-container",{dark:((O=m(l))==null?void 0:O.name)==="dark",mobile:!m(t).state.desktopModelShow}])},[k("div",Tt,[m(t).state.desktopModelShow?(v(),T("div",Rt,[o(n)])):M("",!0),k("div",Ct,[o(h,{class:"app-wrap"},{default:a(({Component:p})=>[(v(),D(he,null,[i.$route.meta.keepAlive?(v(),D(Z(p),{key:0})):M("",!0)],1024)),i.$route.meta.keepAlive?M("",!0):(v(),D(Z(p),{key:0}))]),_:1})]),o(d)]),o(U)],2)]}),_:1})]),_:1}),o(_)]),_:1},8,["theme"])}}});fe(Et).use(pe).use(Xe).mount("#app");export{Do as A,Oo as B,Lo as C,qo as D,Ro as E,Ho as F,Ao as G,To as H,Uo as I,Mo as J,Ko as K,Bo as L,Wo as M,no as N,W as O,No as P,xo as Q,Fo as R,bo as S,So as T,$o as U,Co as V,Eo as W,Io as X,Po as Y,At as Z,me as _,zo as a,Jt as b,ro as c,_o as d,vo as e,io as f,Vo as g,po as h,fo as i,go as j,ho as k,Zt as l,to as m,ao as n,lo as o,eo as p,oo as q,Xt as r,uo as s,mo as t,so as u,co as v,wo as w,ko as x,yo as y,nt as z};
