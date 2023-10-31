import{_ as X}from"./whisper-5534d7cd.js";import{d as N,c as O,r as ee,e as i,f,k as n,w as a,j as r,y as oe,A as S,x as g,q as $,Y as F,bf as w,h as U,H as _,b as ne,F as C,u as te}from"./@vue-a481fc63.js";import{K as se,u as ae,f as le,_ as D,Y as ce,Z as ie}from"./index-5d57cf15.js";import{k as ue,r as _e,s as re,t as pe}from"./@vicons-f0266f88.js";import{F as me,j as B,o as de,M as fe,e as ve,P as ge,O as we,G as he,a as ke,f as ye,g as be,J as $e,k as Fe,H as ze}from"./naive-ui-eecf2ec3.js";import{_ as Pe}from"./post-skeleton-65699bcb.js";import{_ as Te}from"./main-nav.vue_vue_type_style_index_0_lang-107d9fcb.js";import{W as qe}from"./v3-infinite-loading-2c58ec2f.js";import{b as xe}from"./vue-router-e5a2430e.js";import"./vuex-44de225f.js";import"./axios-4a70c6fc.js";import"./moment-2ab8298d.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-7c8d4b48.js";import"./evtd-b614532e.js";import"./@css-render-7124a1a5.js";import"./vooks-6d99783e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const Ie={class:"follow-item"},Me={class:"nickname-wrap"},Se={class:"username-wrap"},Ue={class:"user-info"},Ce={class:"info-item"},Be={class:"info-item"},Ne={class:"item-header-extra"},Oe=N({__name:"follow-item",props:{contact:{}},emits:["send-whisper"],setup(x,{emit:d}){const o=x,u=me(),t=e=>()=>U(B,null,{default:()=>U(e)}),z=()=>{u.success({title:"提示",content:"确定"+(o.contact.is_following?"取消关注 @":"关注 @")+o.contact.username+" 吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{o.contact.is_following?ae({user_id:o.contact.user_id}).then(e=>{window.$message.success("取消关注成功"),o.contact.is_following=!1}).catch(e=>{console.log(e)}):le({user_id:o.contact.user_id}).then(e=>{window.$message.success("关注成功"),o.contact.is_following=!0}).catch(e=>{console.log(e)})}})},h=O(()=>{let e=[{label:"私信 @"+o.contact.username,key:"whisper",icon:t(_e)}];return o.contact.is_following?e.push({label:"取消关注 @"+o.contact.username,key:"unfollow",icon:t(re)}):e.push({label:"关注 @"+o.contact.username,key:"follow",icon:t(pe)}),e}),m=e=>{switch(e){case"follow":case"unfollow":z();break;case"whisper":const l={id:o.contact.user_id,avatar:o.contact.avatar,username:o.contact.username,nickname:o.contact.nickname,is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1};d("send-whisper",l);break}};return(e,l)=>{const p=de,v=ee("router-link"),k=fe,P=ve,y=ge,T=we;return i(),f("div",Ie,[n(T,{"content-indented":""},{avatar:a(()=>[n(p,{size:54,src:e.contact.avatar},null,8,["src"])]),header:a(()=>[r("span",Me,[n(v,{onClick:l[0]||(l[0]=oe(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.contact.username}}},{default:a(()=>[S(g(e.contact.nickname),1)]),_:1},8,["to"])]),r("span",Se," @"+g(e.contact.username),1),e.contact.is_following?(i(),$(k,{key:0,class:"top-tag",type:"success",size:"small",round:""},{default:a(()=>[S(" 已关注 ")]),_:1})):F("",!0),r("div",Ue,[r("span",Ce," UID. "+g(e.contact.user_id),1),r("span",Be,g(w(se)(e.contact.created_on))+" 加入 ",1)])]),"header-extra":a(()=>[r("div",Ne,[n(y,{placement:"bottom-end",trigger:"click",size:"small",options:h.value,onSelect:m},{default:a(()=>[n(P,{quaternary:"",circle:""},{icon:a(()=>[n(w(B),null,{default:a(()=>[n(w(ue))]),_:1})]),_:1})]),_:1},8,["options"])])]),_:1})])}}});const De=D(Oe,[["__scopeId","data-v-5dd79903"]]),Ve={key:0,class:"skeleton-wrap"},We={key:1},je={key:0,class:"empty-wrap"},He={class:"load-more-wrap"},Ae={class:"load-more-spinner"},Re=N({__name:"Following",setup(x){const d=xe(),o=_(!1),u=_(!1),t=_([]),z=d.query.n||"粉丝详情",h=d.query.s||"",m=_(d.query.t||"follows"),e=_(+d.query.p||1),l=_(20),p=_(0),v=_(!1),k=_({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1});function P(c){t.value=[],o.value=!1,u.value=!1,e.value=1,p.value=0,m.value=c}const y=O(()=>m.value=="follows"?"没有更多关注了":"没有更多粉丝了"),T=c=>{k.value=c,v.value=!0},V=()=>{v.value=!1},W=()=>{e.value<p.value||p.value==0?(u.value=!1,e.value++,q()):u.value=!0},j=c=>{P(c),q()},q=()=>{m.value==="follows"?H(h):m.value==="followings"&&A(h)},H=(c,b=!1)=>{t.value.length===0&&(o.value=!0),ce({username:c,page:e.value,page_size:l.value}).then(s=>{o.value=!1,s.list.length===0&&(u.value=!0),e.value>1?t.value=t.value.concat(s.list):(t.value=s.list,b&&setTimeout(()=>{window.scrollTo(0,99999)},50)),p.value=Math.ceil(s.pager.total_rows/l.value)}).catch(s=>{o.value=!1,e.value>1&&e.value--})},A=(c,b=!1)=>{t.value.length===0&&(o.value=!0),ie({username:c,page:e.value,page_size:l.value}).then(s=>{o.value=!1,s.list.length===0&&(u.value=!0),e.value>1?t.value=t.value.concat(s.list):(t.value=s.list,b&&setTimeout(()=>{window.scrollTo(0,99999)},50)),p.value=Math.ceil(s.pager.total_rows/l.value)}).catch(s=>{o.value=!1,e.value>1&&e.value--})};return ne(()=>{q()}),(c,b)=>{const s=Te,I=ye,R=be,Y=Pe,E=$e,G=De,J=ze,K=X,L=he,Z=Fe,Q=ke;return i(),f(C,null,[r("div",null,[n(s,{title:w(z),back:!0},null,8,["title"]),n(L,{class:"main-content-wrap",bordered:""},{default:a(()=>[n(R,{type:"line",animated:"","default-value":m.value,"onUpdate:value":j},{default:a(()=>[n(I,{name:"follows",tab:"正在关注"}),n(I,{name:"followings",tab:"我的粉丝"})]),_:1},8,["default-value"]),o.value&&t.value.length===0?(i(),f("div",Ve,[n(Y,{num:l.value},null,8,["num"])])):(i(),f("div",We,[t.value.length===0?(i(),f("div",je,[n(E,{size:"large",description:"暂无数据"})])):F("",!0),(i(!0),f(C,null,te(t.value,M=>(i(),$(J,{key:M.user_id},{default:a(()=>[n(G,{contact:M,onSendWhisper:T},null,8,["contact"])]),_:2},1024))),128))])),n(K,{show:v.value,user:k.value,onSuccess:V},null,8,["show","user"])]),_:1})]),p.value>0?(i(),$(Q,{key:0,justify:"center"},{default:a(()=>[n(w(qe),{class:"load-more",slots:{complete:y.value,error:"加载出错"},onInfinite:W},{spinner:a(()=>[r("div",He,[u.value?F("",!0):(i(),$(Z,{key:0,size:14})),r("span",Ae,g(u.value?y.value:"加载更多"),1)])]),_:1},8,["slots"])]),_:1})):F("",!0)],64)}}});const wo=D(Re,[["__scopeId","data-v-dbf3bbcc"]]);export{wo as default};
