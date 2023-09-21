import{_ as k}from"./nuxt-link.0d243ad8.js";import{h as b,i as M,o as n,b as l,f as e,e as s,w as o,l as t,u as m,H as y,G as u,F as x,k as $,t as j,I as f,n as L,g as A,c as I,a as B}from"./entry.739f371a.js";import{d as w}from"./app-data.c5e7f44e.js";import{l as D}from"./loadBackgroudImages.6dc4ef71.js";import{S as N,a as H,_ as T}from"./swiper-slide.8ca02b84.js";import{A as F}from"./autoplay.907b92ea.js";import{_ as O}from"./circle-star.ca9ca52e.js";import{p as V}from"./parallaxie.76ecf7c8.js";const C=""+globalThis.__publicAssetsURL("dark/assets/imgs/logo-light.png"),q={class:"navbar navbar-expand-lg static"},z={class:"container"},G=e("a",{class:"logo icon-img-100",href:"#"},[e("img",{src:C,alt:"logo"})],-1),U=e("span",{class:"icon-bar"},[e("i",{class:"fas fa-bars"})],-1),R=[U],E={class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent"},Y={class:"navbar-nav"},W=e("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},[e("span",{class:"rolling-text"},"Home")],-1),Z={class:"dropdown-menu mega-menu"},J={class:"container"},K={class:"row"},Q={class:"col-lg-3"},X={class:"clumn"},ee=e("div",{class:"title"},[e("h6",{class:"sub-title ls1"},"Home Dark")],-1),se={class:"links"},oe={class:"col-lg-3"},te={class:"clumn"},ae=e("div",{class:"title"},[e("h6",{class:"sub-title ls1"},"Home Light")],-1),ie={class:"links"},ne={class:"col-lg-3"},le={class:"clumn"},de=e("div",{class:"title"},[e("h6",{class:"sub-title ls1"},"Showcases")],-1),re={class:"links"},ce={class:"col-lg-3"},ge={class:"clumn"},pe=e("div",{class:"title"},[e("h6",{class:"sub-title ls1"},"Showcases Light")],-1),me={class:"links"},_e=e("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},[e("span",{class:"rolling-text"},"Pages")],-1),he={class:"dropdown-menu"},ue=e("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},[e("span",{class:"rolling-text"},"Portfolio")],-1),ve={class:"dropdown-menu"},we=e("a",{href:"#0"},[t("Classic Grid "),e("i",{class:"fas fa-angle-right icon-arrow"})],-1),ke={class:"dropdown-side"},fe=e("a",{href:"#0"},[t("Masonry "),e("i",{class:"fas fa-angle-right icon-arrow"})],-1),be={class:"dropdown-side"},xe=e("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},[e("span",{class:"rolling-text"},"Blogs")],-1),$e={class:"dropdown-menu"},je=e("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},[e("span",{class:"rolling-text"},"Shop")],-1),ye={class:"dropdown-menu"},Ce={class:"nav-item"},Se=e("span",{class:"rolling-text"},"Contact",-1),Pe={class:"purchase"},Me=["href"],Le=e("span",null,"Purchase",-1),Ae=[Le],Ie={__name:"Navbar",setup(p){function d(){const g=window.scrollY,v=document.querySelector(".navbar");g>300?v.classList.add("nav-scroll"):v.classList.remove("nav-scroll")}function r(g){g.currentTarget.querySelector(".dropdown-menu").classList.add("show")}function c(g){g.currentTarget.querySelector(".dropdown-menu").classList.remove("show")}function i(g){g.currentTarget.querySelector(".dropdown-side").classList.add("show")}function h(g){g.currentTarget.querySelector(".dropdown-side").classList.remove("show")}function _(){document.querySelector(".navbar .navbar-collapse").classList.toggle("show")}return b(()=>{window.addEventListener("scroll",d)}),M(()=>{window.removeEventListener("scroll",d)}),(g,v)=>{const a=k;return n(),l("nav",q,[e("div",z,[G,e("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:_},R),e("div",E,[e("ul",Y,[e("li",{class:"nav-item dropdown",onMousemove:r,onMouseleave:c},[W,e("div",Z,[e("div",J,[e("div",K,[e("div",Q,[e("div",X,[ee,e("div",se,[s(a,{class:"dropdown-item",to:"/dark/home-main"},{default:o(()=>[t("Main Home")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/home-corporate"},{default:o(()=>[t("Corporate Business")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/home-onepage"},{default:o(()=>[t("Home One page")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/home-digital-agency"},{default:o(()=>[t("Digital Agency")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/home-freelancer"},{default:o(()=>[t("Freelancer")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/home-marketing-agency"},{default:o(()=>[t("Marketing Agency")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/home-creative-agency"},{default:o(()=>[t("Creative Agency")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/home-startup"},{default:o(()=>[t("Startup Bussines")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/home-architecture"},{default:o(()=>[t("Architecture")]),_:1})])])]),e("div",oe,[e("div",te,[ae,e("div",ie,[s(a,{class:"dropdown-item",to:"/light/home-main"},{default:o(()=>[t("Main Home")]),_:1}),s(a,{class:"dropdown-item",to:"/light/home-corporate"},{default:o(()=>[t("Corporate Business")]),_:1}),s(a,{class:"dropdown-item",to:"/light/home-onepage"},{default:o(()=>[t("Home One page")]),_:1}),s(a,{class:"dropdown-item",to:"/light/home-digital-agency"},{default:o(()=>[t("Digital Agency")]),_:1}),s(a,{class:"dropdown-item",to:"/light/home-freelancer"},{default:o(()=>[t("Freelancer")]),_:1}),s(a,{class:"dropdown-item",to:"/light/home-marketing-agency"},{default:o(()=>[t("Marketing Agency")]),_:1}),s(a,{class:"dropdown-item",to:"/light/home-creative-agency"},{default:o(()=>[t("Creative Agency")]),_:1}),s(a,{class:"dropdown-item",to:"/light/home-startup"},{default:o(()=>[t("Startup Bussines")]),_:1}),s(a,{class:"dropdown-item",to:"/light/home-architecture"},{default:o(()=>[t("Architecture")]),_:1})])])]),e("div",ne,[e("div",le,[de,e("div",re,[s(a,{class:"dropdown-item",to:"/dark/showcase-parallax-slider"},{default:o(()=>[t("Parallax Slider")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/showcase-frame-slider"},{default:o(()=>[t("Frame Slider")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/showcase-circle-slider"},{default:o(()=>[t("Circle Slider")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/showcase-carousel"},{default:o(()=>[t("Showcase Carousel")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/showcase-interactive-center-horizontal"},{default:o(()=>[t("Interactive NuxtLinks1")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/showcase-interactive-center"},{default:o(()=>[t("Interactive NuxtLinks2 ")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/showcase-parallax"},{default:o(()=>[t("Vertical Parallax")]),_:1})])])]),e("div",ce,[e("div",ge,[pe,e("div",me,[s(a,{class:"dropdown-item",to:"/light/showcase-parallax-slider"},{default:o(()=>[t("Parallax Slider ")]),_:1}),s(a,{class:"dropdown-item",to:"/light/showcase-carousel"},{default:o(()=>[t("Showcase Carousel")]),_:1}),s(a,{class:"dropdown-item",to:"/light/showcase-frame-slider"},{default:o(()=>[t("Frame Slider")]),_:1}),s(a,{class:"dropdown-item",to:"/light/showcase-circle-slider"},{default:o(()=>[t("Circle Slider")]),_:1}),s(a,{class:"dropdown-item",to:"/light/showcase-interactive-center-horizontal"},{default:o(()=>[t("Interactive NuxtLinks1")]),_:1}),s(a,{class:"dropdown-item",to:"/light/showcase-interactive-center"},{default:o(()=>[t("Interactive NuxtLinks2 ")]),_:1}),s(a,{class:"dropdown-item",to:"/light/showcase-parallax"},{default:o(()=>[t("Vertical Parallax")]),_:1})])])])])])])],32),e("li",{class:"nav-item dropdown",onMousemove:r,onMouseleave:c},[_e,e("div",he,[s(a,{class:"dropdown-item",to:"/dark/page-about"},{default:o(()=>[t("About")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/page-services"},{default:o(()=>[t("Services")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/page-team"},{default:o(()=>[t("Our Team")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/page-contact"},{default:o(()=>[t("Contact Us")]),_:1})])],32),e("li",{class:"nav-item dropdown",onMousemove:r,onMouseleave:c},[ue,e("ul",ve,[e("li",{class:"dropdown-item",onMousemove:i,onMouseleave:h},[we,e("ul",ke,[e("li",null,[s(a,{class:"dropdown-item",to:"/dark/portfolio-grid-2"},{default:o(()=>[t("Grid 2 Columns")]),_:1})]),e("li",null,[s(a,{class:"dropdown-item",to:"/dark/portfolio-grid-3"},{default:o(()=>[t("Grid 3 Columns")]),_:1})]),e("li",null,[s(a,{class:"dropdown-item",to:"/dark/portfolio-grid-4"},{default:o(()=>[t("Grid 4 Columns")]),_:1})])])],32),e("li",{class:"dropdown-item",onMousemove:i,onMouseleave:h},[fe,e("ul",be,[e("li",null,[s(a,{class:"dropdown-item",to:"/dark/portfolio-masonry-2"},{default:o(()=>[t("Masonry 2 Columns")]),_:1})]),e("li",null,[s(a,{class:"dropdown-item",to:"/dark/portfolio-masonry-3"},{default:o(()=>[t("Masonry 3 Columns")]),_:1})]),e("li",null,[s(a,{class:"dropdown-item",to:"/dark/portfolio-masonry-4"},{default:o(()=>[t("Masonry 4 Columns")]),_:1})])])],32),e("li",null,[s(a,{class:"dropdown-item",to:"/dark/portfolio-metro"},{default:o(()=>[t("Portfolio Metro")]),_:1})]),e("li",null,[s(a,{class:"dropdown-item",to:"/dark/portfolio-modern"},{default:o(()=>[t("Modern Grid")]),_:1})]),e("li",null,[s(a,{class:"dropdown-item",to:"/dark/project-details1"},{default:o(()=>[t("Project Details 1")]),_:1})]),e("li",null,[s(a,{class:"dropdown-item",to:"/dark/project-details2"},{default:o(()=>[t("Project Details 2")]),_:1})])])],32),e("li",{class:"nav-item dropdown",onMousemove:r,onMouseleave:c},[xe,e("div",$e,[s(a,{class:"dropdown-item",to:"/dark/blog-classic"},{default:o(()=>[t("Blog Standerd")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/blog-list"},{default:o(()=>[t("Blog List")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/blog-half-img"},{default:o(()=>[t("Image Out Frame")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/blog-details"},{default:o(()=>[t("Blog Details")]),_:1})])],32),e("li",{class:"nav-item dropdown",onMousemove:r,onMouseleave:c},[je,e("div",ye,[s(a,{class:"dropdown-item",to:"/dark/shop-list"},{default:o(()=>[t("Shop List")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/shop-product"},{default:o(()=>[t("Single Product")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/shop-cart"},{default:o(()=>[t("Cart")]),_:1}),s(a,{class:"dropdown-item",to:"/dark/shop-checkout"},{default:o(()=>[t("Checkout")]),_:1})])],32),e("li",Ce,[s(a,{class:"nav-link",to:"/dark/page-contact"},{default:o(()=>[Se]),_:1})])])]),e("div",Pe,[e("a",{href:m(w).author_link,class:"butn butn-md butn-bord radius-30"},Ae,8,Me)])])])}}},Be={class:"overlay bg-img","data-background":"/landing-preview/img/header/overlay.webp"},De={__name:"Overlay",setup(p){return b(()=>{D()}),(d,r)=>(n(),l("div",Be))}},Ne=""+globalThis.__publicAssetsURL("landing-preview/img/star.svg"),He={},Te={class:"land-header valign"},Fe=u('<div class="container ontop"><div class="row justify-content-center"><div class="col-lg-8"><div class="caption text-center"><h6 class="sub-title"><span class="icon-img-20 mr-10"><img src="'+Ne+'" alt=""></span> Awesome Template </h6><h1>A <span>perfect</span> Place for Your Creative <span>Portfolio</span>.</h1></div></div></div></div>',1),Oe=[Fe];function Ve(p,d){return n(),l("header",Te,Oe)}const qe=y(He,[["render",Ve]]),ze=""+globalThis.__publicAssetsURL("landing-preview/img/demos/more.jpg"),Ge=[{id:0,link:"/dark/home-main",image:"/landing-preview/img/demos/m1.jpg",title:"Home Main",mode:"dark",new:!0},{id:.1,link:"/light/home-main",image:"/landing-preview/img/demos/m01.jpg",title:"Home Main",mode:"light",new:!0},{id:1,link:"/dark/home-corporate",image:"/landing-preview/img/demos/1.jpg",title:"Corporate",mode:"dark"},{id:2,link:"/light/home-corporate",image:"/landing-preview/img/demos/01.jpg",title:"Corporate",mode:"light"},{id:3,link:"/dark/home-onepage",image:"/landing-preview/img/demos/2.jpg",title:"One page",mode:"dark"},{id:4,link:"/light/home-onepage",image:"/landing-preview/img/demos/02.jpg",title:"One page",mode:"light"},{id:5,link:"/dark/home-digital-agency",image:"/landing-preview/img/demos/3.jpg",title:"Digital Agency",mode:"dark"},{id:6,link:"/light/home-digital-agency",image:"/landing-preview/img/demos/03.jpg",title:"Digital Agency",mode:"light"},{id:7,link:"/dark/home-freelancer",image:"/landing-preview/img/demos/4.jpg",title:"Freelancer",mode:"dark"},{id:8,link:"/light/home-freelancer",image:"/landing-preview/img/demos/04.jpg",title:"Freelancer",mode:"light"},{id:9,link:"/dark/home-marketing-agency",image:"/landing-preview/img/demos/5.jpg",title:"Marketing",mode:"dark"},{id:10,link:"/light/home-marketing-agency",image:"/landing-preview/img/demos/05.jpg",title:"Marketing",mode:"light"},{id:11,link:"/dark/home-creative-agency",image:"/landing-preview/img/demos/6.jpg",title:"Creative agency",mode:"dark"},{id:12,link:"/light/home-creative-agency",image:"/landing-preview/img/demos/06.jpg",title:"Creative agency",mode:"light"},{id:13,link:"/dark/home-startup",image:"/landing-preview/img/demos/7.jpg",title:"Startup Business",mode:"dark"},{id:14,link:"/light/home-startup",image:"/landing-preview/img/demos/07.jpg",title:"Startup Business",mode:"light"},{id:15,link:"/dark/home-architecture",image:"/landing-preview/img/demos/8.jpg",title:"Architecture",mode:"dark"},{id:16,link:"/light/home-architecture",image:"/landing-preview/img/demos/08.jpg",title:"Architecture",mode:"light"},{id:17,link:"/dark/showcase-parallax-slider",image:"/landing-preview/img/demos/s1.jpg",title:"Parallax Full Screen",mode:"dark"},{id:18,link:"/dark/showcase-carousel",image:"/landing-preview/img/demos/s4.jpg",title:"Columns Carousel",mode:"dark"},{id:19,link:"/light/showcase-carousel",image:"/landing-preview/img/demos/s04.jpg",title:"Columns Carousel",mode:"light"},{id:20,link:"/dark/showcase-circle-slider",image:"/landing-preview/img/demos/s2.jpg",title:"Showcase Circle",mode:"dark"},{id:21,link:"/dark/showcase-frame-slider",image:"/landing-preview/img/demos/s3.jpg",title:"Showcase Frame",mode:"dark"},{id:22,link:"/dark/showcase-interactive-center-horizontal",image:"/landing-preview/img/demos/s5.jpg",title:"Interactive",mode:"dark"},{id:23,link:"/light/showcase-interactive-center-horizontal",image:"/landing-preview/img/demos/s05.jpg",title:"Interactive",mode:"light"}],Ue={class:"demos section-padding pt-80"},Re={class:"container-xxl"},Ee={class:"row"},Ye={class:"item text-center"},We={class:"img"},Ze=["src"],Je={class:"mt-15"},Ke={key:0},Qe={key:0,class:"new"},Xe=u('<div class="col-lg-4 col-md-6"><div class="item text-center"><div class="img"><img src="'+ze+'" alt=""></div><h6 class="mt-15">Coming More</h6></div></div>',1),es={__name:"Demos",setup(p){return(d,r)=>{const c=k;return n(),l("section",Ue,[e("div",Re,[e("div",Ee,[(n(!0),l(x,null,$(m(Ge),i=>(n(),l("div",{class:"col-lg-4 col-md-6",key:i.id},[e("div",Ye,[s(c,{to:i.link,target:"_blank"},{default:o(()=>[e("div",We,[e("img",{src:i.image,alt:""},null,8,Ze)]),e("h6",Je,[t(j(i.title)+" ",1),i.mode==="light"?(n(),l("span",Ke,"(Light)")):f("",!0)])]),_:2},1032,["to"]),i.new?(n(),l("span",Qe,"New")):f("",!0)])]))),128)),Xe])])])}}},ss={},os={class:"serv-marq skew ontop o-hidden"},ts=u('<div class="container-fluid"><div class="row"><div class="col-12"><div class="main-marq lrg opacity-4"><div class="slide-har st1 strok"><div class="box"><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div></div><div class="box"><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div><div class="item"><h4>+ 25 Inner Pages</h4></div></div></div></div></div></div></div>',1),as=[ts];function is(p,d){return n(),l("section",os,as)}const ns=y(ss,[["render",is]]),ls=[{id:1,link:"/dark/page-about",image:"/landing-preview/img/pages/1.jpg"},{id:2,link:"/light/page-about",image:"/landing-preview/img/pages/01.jpg"},{id:3,link:"/dark/page-services",image:"/landing-preview/img/pages/2.jpg"},{id:4,link:"/light/page-services",image:"/landing-preview/img/pages/02.jpg"},{id:5,link:"/dark/page-team",image:"/landing-preview/img/pages/3.jpg"},{id:6,link:"/light/page-team",image:"/landing-preview/img/pages/03.jpg"},{id:7,link:"/dark/page-contact",image:"/landing-preview/img/pages/4.jpg"},{id:8,link:"/light/page-contact",image:"/landing-preview/img/pages/04.jpg"},{id:9,link:"/dark/portfolio-grid-2",image:"/landing-preview/img/pages/5.jpg"},{id:10,link:"/light/portfolio-grid-2",image:"/landing-preview/img/pages/05.jpg"},{id:11,link:"/dark/portfolio-modern",image:"/landing-preview/img/pages/6.jpg"},{id:12,link:"/light/portfolio-modern",image:"/landing-preview/img/pages/06.jpg"},{id:13,link:"/dark/blog-list",image:"/landing-preview/img/pages/7.jpg"},{id:14,link:"/light/blog-list",image:"/landing-preview/img/pages/07.jpg"},{id:15,link:"/dark/blog-half-img",image:"/landing-preview/img/pages/8.jpg"},{id:16,link:"/light/blog-half-img",image:"/landing-preview/img/pages/08.jpg"},{id:17,link:"/dark/blog-details",image:"/landing-preview/img/pages/9.jpg"},{id:18,link:"/light/blog-details",image:"/landing-preview/img/pages/09.jpg"},{id:19,link:"/dark/project-details1",image:"/landing-preview/img/pages/10.jpg"},{id:20,link:"/light/project-details1",image:"/landing-preview/img/pages/010.jpg"}],ds={class:"pages section-padding position-re ontop"},rs={class:"container-fluid"},cs={class:"swiper3"},gs={class:"item"},ps=["src"],ms={__name:"Pages",setup(p){const d={modules:[F],slidesPerView:3,loop:!0,autoplay:!0,spaceBetween:60,speed:1e3};return(r,c)=>{const i=k,h=T;return n(),l("section",ds,[e("div",rs,[e("div",cs,[s(h,null,{default:o(()=>[s(m(N),L(A(d)),{default:o(()=>[(n(!0),l(x,null,$(m(ls),_=>(n(),I(m(H),{key:_.id},{default:o(()=>[e("div",gs,[s(i,{to:_.link},{default:o(()=>[e("img",{src:_.image,alt:""},null,8,ps)]),_:2},1032,["to"])])]),_:2},1024))),128))]),_:1},16)]),_:1})])])])}}},_s=[{id:1,link:"/dark/shop-list",image:"/landing-preview/img/shop/1.jpg",title:"Main Shop",mode:"dark",new:!0},{id:2,link:"/light/shop-list",image:"/landing-preview/img/shop/01.jpg",title:"Main Shop",mode:"light",new:!0},{id:3,link:"/dark/shop-product",image:"/landing-preview/img/shop/2.jpg",title:"Single Product",mode:"dark",new:!0},{id:4,link:"/light/shop-product",image:"/landing-preview/img/shop/02.jpg",title:"Single Product",mode:"light",new:!0},{id:5,link:"/dark/shop-cart",image:"/landing-preview/img/shop/3.jpg",title:"Cart",mode:"dark",new:!0},{id:6,link:"/light/shop-cart",image:"/landing-preview/img/shop/03.jpg",title:"Cart",mode:"light",new:!0},{id:7,link:"/dark/shop-checkout",image:"/landing-preview/img/shop/4.jpg",title:"Checkout",mode:"dark",new:!0},{id:8,link:"/light/shop-checkout",image:"/landing-preview/img/shop/04.jpg",title:"Checkout",mode:"light",new:!0}],hs={class:"shop-demos section-padding sub-bg"},us=u('<div class="container"><div class="sec-lg-head text-center mb-50"><h2 class="fz-50 d-rotate wow"><span class="rotate-text">Carefully crafted.</span><span class="rotate-text">Woocommerce Demos.</span></h2></div></div>',1),vs={class:"container-fluid"},ws={class:"row"},ks={class:"item"},fs={class:"img"},bs=["src"],xs={key:0,class:"new"},$s={__name:"ShopDemos",setup(p){return(d,r)=>{const c=k;return n(),l("section",hs,[us,e("div",vs,[e("div",ws,[(n(!0),l(x,null,$(m(_s),i=>(n(),l("div",{class:"col-lg-3 col-md-6",key:i.id},[e("div",ks,[e("div",fs,[e("img",{src:i.image,alt:""},null,8,bs)]),e("h6",null,j(i.title),1),s(c,{to:i.link,target:"_blank"},null,8,["to"]),i.new?(n(),l("span",xs,"New")):f("",!0)])]))),128))])])])}}},js={class:"call-action-img sub-bg"},ys={class:"container"},Cs=e("div",{class:"sec-bg-img bg-img parallaxie","data-background":"/dark/assets/imgs/background/2.jpg"},null,-1),Ss={class:"sec-lg-head section-padding"},Ps={class:"row ontop"},Ms={class:"col-11 d-flex align-items-center"},Ls=u('<div class="valign"><h2 class="fz-50 d-rotate wow"><span class="rotate-text">Build a stunning site today.</span><span class="rotate-text">Let’s <span class="sub-font">get to work</span>.</span></h2></div>',1),As={class:"ml-auto"},Is=["href"],Bs=u('<div class="full-width"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span><span class="full-width">Purchase</span></div><img src="'+O+'" alt="" class="circle-star">',2),Ds=[Bs],Ns={__name:"CallToAction",setup(p){return b(()=>{V(".sec-bg-img.parallaxie",.3)}),(d,r)=>(n(),l("section",js,[e("div",ys,[Cs,e("div",Ss,[e("div",Ps,[e("div",Ms,[Ls,e("div",As,[e("a",{href:m(w).author_link,class:"butn-circle d-flex align-items-center text-center m-auto"},Ds,8,Is)])])])])])]))}},Hs={class:"sub-footer pt-40 pb-40 ontop sub-bg"},Ts={class:"container"},Fs={class:"row"},Os=e("div",{class:"col-lg-4"},[e("div",{class:"logo"},[e("a",{href:"#0"},[e("img",{src:C,alt:""})])])],-1),Vs={class:"col-lg-8"},qs={class:"copyright d-flex"},zs={class:"ml-auto"},Gs={class:"fz-13"},Us={class:"underline"},Rs=["href"],Es={__name:"Footer",setup(p){return(d,r)=>(n(),l("footer",null,[e("div",Hs,[e("div",Ts,[e("div",Fs,[Os,e("div",Vs,[e("div",qs,[e("div",zs,[e("p",Gs,[t("© 2023 Geekfolio is Proudly Powered by "),e("span",Us,[e("a",{href:m(w).author_link,target:"_blank"},j(m(w).author),9,Rs)])])])])])])])])]))}},so={__name:"index",setup(p){return B({titleTemplate:"%s - Preview",bodyAttrs:{class:"sub-bg"}}),(d,r)=>{const c=Ie,i=De,h=qe,_=es,g=ns,v=ms,a=$s,S=Ns,P=Es;return n(),l("div",null,[s(c),s(i),e("main",null,[s(h),s(_),s(g),s(v),s(a),s(S),s(P)])])}}};export{so as default};