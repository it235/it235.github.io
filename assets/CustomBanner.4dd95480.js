import{g as j,u as z,h as u,o as n,c as a,b as I,i as o,n as g,e as i,t as x,F as C,j as S,k as G,d as w,r as H,l as q,m as L,_ as V}from"./app.75b474e0.js";const T={class:"hero-content"},X=["src"],D={class:"hero-text"},E={key:0},O={key:1},P={key:2,class:"btn-group"},$={key:3,class:"social-links"},A=j({__name:"CustomBanner",setup(J){const r=z(),h=u(()=>{var e,s,t,l;return(s=(e=r.value)==null?void 0:e.customBanner)!=null&&s.heroImage?q((l=(t=r.value)==null?void 0:t.customBanner)==null?void 0:l.heroImage):null}),p=u(()=>{var e,s;return((s=(e=r.value)==null?void 0:e.customBanner)==null?void 0:s.buttons)||[]}),d=u(()=>{var e,s;return(((s=(e=r.value)==null?void 0:e.customBanner)==null?void 0:s.socialLinks)||[]).map(t=>(t.color||(t.color=L()),t))}),F=u(()=>r.value.customBanner.heroImageStyle||{}),N=u(()=>{var l;const{bgImageStyle:e,bgImage:s}=((l=r.value)==null?void 0:l.customBanner)||{},t=s?{overflow:"hidden",background:`url(${q(s)}) center/cover no-repeat`}:{};return e?{...t,...e}:t});return(e,s)=>{var l,_,v,y,k,f,b,B;const t=H("Xicons");return n(),a("section",{class:"banner-brand-wrapper",style:g({...o(N)})},[I("div",T,[o(h)?(n(),a("img",{key:0,src:o(h),style:g({heroImageStyle:o(F)}),alt:"heroImage"},null,12,X)):i("v-if",!0),I("div",D,[(_=(l=o(r))==null?void 0:l.customBanner)!=null&&_.heroText?(n(),a("h1",E,x((y=(v=o(r))==null?void 0:v.customBanner)==null?void 0:y.heroText),1)):i("v-if",!0),(f=(k=o(r))==null?void 0:k.customBanner)!=null&&f.tagline?(n(),a("p",O,x((B=(b=o(r))==null?void 0:b.customBanner)==null?void 0:B.tagline),1)):i("v-if",!0),o(p).length>0?(n(),a("ul",P,[(n(!0),a(C,null,S(o(p),(c,m)=>(n(),a("li",{class:G(c.type),key:m},[w(t,{icon:c.icon,text:c.text,link:c.link,"icon-size":"20","text-size":"14"},null,8,["icon","text","link"])],2))),128))])):i("v-if",!0),o(d).length>0?(n(),a("ul",$,[(n(!0),a(C,null,S(o(d),(c,m)=>(n(),a("li",{class:"social-item",key:m},[w(t,{icon:c.icon,link:c.link,style:g({color:c.color}),target:"_blank"},null,8,["icon","link","style"])]))),128))])):i("v-if",!0),i(`\r
        <div class="shields-wrapper">\r
          <img alt="GitHub license" src="https://img.shields.io/github/license/vuepress-reco/vuepress-theme-reco?style=flat-square&logo=github&color=616ae5">\r
          <img alt="GitHub stars" src="https://img.shields.io/github/stars/vuepress-reco/vuepress-theme-reco?style=flat-square&logo=github&color=616ae5">\r
          <img alt="GitHub forks" src="https://img.shields.io/github/forks/vuepress-reco/vuepress-theme-reco?style=flat-square&logo=github&color=616ae5">\r
          <img alt="Npm downloads" src="https://img.shields.io/npm/dt/vuepress-theme-reco?style=flat-square&logo=npm&color=616ae5">\r
          <img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/vuepress-reco/vuepress-theme-reco?filename=packages%2Fvuepress-theme-reco%2Fpackage.json&style=flat-square&color=616ae5&logo=npm">\r
          <img alt="Npm version" src="https://img.shields.io/badge/tailwindcss-3.1.6-616ae5?style=flat-square&logo=tailwindcss"/>\r
        </div>\r
	`)])])],4)}}});const M=V(A,[["__scopeId","data-v-d608d77e"],["__file","CustomBanner.vue"]]);export{M as default};
