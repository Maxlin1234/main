import{_}from"./nuxt-link.0d243ad8.js";import{S as f,a as m,_ as v}from"./swiper-slide.8ca02b84.js";import{N as k}from"./navigation.ddcfc138.js";import{P as w}from"./pagination.44647563.js";import{P as h}from"./parallax.4f89f375.js";import{A as b}from"./autoplay.907b92ea.js";import{l as y}from"./loadBackgroudImages.6dc4ef71.js";import{h as x,o,b as d,e as i,w as r,u as l,J as B,F as S,k as N,c as j,f as a,l as c,t as n,G as P}from"./entry.739f371a.js";const L=[{id:1,background:"/dark/assets/imgs/works/full/1.jpg",year:"2023",type:"Branding",title:"Basket Lamp"},{id:2,background:"/dark/assets/imgs/works/full/2.jpg",year:"2023",type:"Branding",title:"Moon Light"},{id:3,background:"/dark/assets/imgs/works/full/3.jpg",year:"2023",type:"Branding",title:"Red Glasses"},{id:4,background:"/dark/assets/imgs/works/full/4.jpg",year:"2023",type:"Branding",title:"Waffile Maker"},{id:5,background:"/dark/assets/imgs/works/full/5.jpg",year:"2023",type:"Branding",title:"Headphone"},{id:6,background:"/dark/assets/imgs/works/full/6.jpg",year:"2023",type:"Branding",title:"Table Lamp"}],V={class:"slider showcase-full"},A=["data-background"],E={class:"container"},M={class:"row"},T={class:"col-lg-11 offset-lg-1"},C={class:"caption"},F={class:"sub-title mb-30","data-swiper-parallax":"-1000"},G=a("br",null,null,-1),O={"data-swiper-parallax":"-2000"},R=P('<div class="slider-contro"><div class="swiper-button-next swiper-nav-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div></div><div class="swiper-pagination dots"></div>',2),U={__name:"ParallaxSlider",setup(q){const p={modules:[k,b,w,h],speed:1500,autoplay:{delay:5e3},parallax:!0,loop:!0,onSwiper:function(s){for(var t=0;t<s.slides.length;t++)s.slides[t].querySelector(".bg-img").setAttribute("data-swiper-parallax",.75*s.width)},onResize:function(s){s.update()},pagination:{el:".showcase-full .swiper-pagination",clickable:!0},navigation:{nextEl:".showcase-full .swiper-button-next",prevEl:".showcase-full .swiper-button-prev"}};return x(()=>{setTimeout(()=>{y()},100)}),(s,t)=>{const u=_,g=v;return o(),d("header",V,[i(g,null,{default:r(()=>[i(l(f),B(p,{class:"swiper-container parallax-slider"}),{default:r(()=>[(o(!0),d(S,null,N(l(L),e=>(o(),j(l(m),{key:e.id},{default:r(()=>[a("div",{class:"bg-img valign","data-background":e.background,"data-overlay-dark":"3"},[a("div",E,[a("div",M,[a("div",T,[a("div",C,[a("h6",F,[c("© "+n(e.year)+" ",1),G,c(" "+n(e.type),1)]),a("h1",null,[i(u,{to:"/dark/project-details1"},{default:r(()=>[a("span",O,n(e.title),1)]),_:2},1024)])])])])])],8,A)]),_:2},1024))),128))]),_:1},16)]),_:1}),R])}}};export{U as _};
