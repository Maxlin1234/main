import{h as m,o as h,b as g,f as l,j as k,e as a,w as i,l as t,G as v}from"./entry.739f371a.js";import{_ as f}from"./nuxt-link.0d243ad8.js";const b={class:"container"},M={class:"logo icon-img-120"},_={href:"#"},$=["src"],x=l("span",{class:"icon"},[l("i"),l("i")],-1),p=l("span",{class:"text"},[l("span",{class:"word"},"Menu")],-1),S=[x,p],Q={__name:"Navigation",props:["lightMode","darkOnScroll","alwaysDark"],setup(s){const{lightMode:n,alwaysDark:c,darkOnScroll:r}=s;m(()=>{if(r){let o=document.querySelector("#navi");window.addEventListener("scroll",()=>{window.scrollY>500?(o.className="topnav dark change nav-scroll",o.querySelector("img").src="/dark/assets/imgs/logo-dark.png"):(o.className="topnav",o.querySelector("img").src="/dark/assets/imgs/logo-light.png")})}});function d(o){let e=document.querySelector(".hamenu"),u=document.querySelector("#navi");o.currentTarget.classList.contains("open")?(o.currentTarget.classList.remove("open"),e==null||e.classList.remove("open"),e.style.left="-100%",n&&!c&&(u.classList.remove("navlit"),u.querySelector("img").src="/dark/assets/imgs/logo-light.png")):(o.currentTarget.classList.add("open"),e==null||e.classList.add("open"),e.style.left=0,n&&!c&&(u.classList.add("navlit"),u.querySelector("img").src="/dark/assets/imgs/logo-dark.png"))}return(o,e)=>(h(),g("div",{id:"navi",class:k(`topnav ${s.alwaysDark&&"navlit"}`)},[l("div",b,[l("div",M,[l("a",_,[l("img",{src:`/dark/assets/imgs/logo-${s.alwaysDark?"dark":"light"}.png`,alt:""},null,8,$)])]),l("div",{class:"menu-icon cursor-pointer",onClick:d},S)])],2))}},y={class:"hamenu"},L={class:"container"},w={class:"row"},C=l("div",{class:"col-lg-2"},[l("div",{class:"menu-text"},[l("div",{class:"text"},[l("h2",null,"Menu")])])],-1),q={class:"col-lg-7"},A={class:"menu-links"},E={class:"main-menu rest"},P=l("div",{class:"o-hidden"},[l("div",{class:"link cursor-pointer dmenu"},[l("span",{class:"fill-text","data-text":"Home"},"Home"),t(),l("i")])],-1),B={class:"sub-menu"},H={class:"o-hidden"},T=l("span",{class:"fill-text","data-text":"About Us"},"About Us",-1),D=l("div",{class:"o-hidden"},[l("div",{class:"link cursor-pointer dmenu"},[l("span",{class:"fill-text","data-text":"Pages"},"Pages"),t(),l("i")])],-1),N={class:"sub-menu"},G=l("div",{class:"o-hidden"},[l("div",{class:"link cursor-pointer dmenu"},[l("span",{class:"fill-text","data-text":"Showcases"},"Showcases"),l("i")])],-1),I={class:"sub-menu"},j=l("div",{class:"o-hidden"},[l("div",{class:"link cursor-pointer dmenu"},[l("span",{class:"fill-text","data-text":"Portfolio"},"Portfolio"),l("i")])],-1),F={class:"sub-menu"},O=l("div",{class:"o-hidden"},[l("div",{class:"link cursor-pointer dmenu"},[l("span",{class:"fill-text","data-text":"Blogs"},"Blogs"),t(),l("i")])],-1),V={class:"sub-menu"},z={class:"o-hidden"},U=l("span",{class:"fill-text","data-text":"Contact"},"Contact",-1),Y=v('<div class="col-lg-3 d-flex align-items-end"><div class="cont-info full-width"><div class="item"><h5 class="mb-15">Get In Touch</h5><p>541 Melville Geek, Palo Alto, CA 94301</p><p class="underline main-color mt-5 mb-5"><a href="#0">+1 840 841 25 69</a></p><p><a href="#0">GeekFolio_website@gmail.com</a></p></div><div class="search-form"><div class="form-group"><input type="text" name="search" placeholder="Search"><button><span class="pe-7s-search"></span></button></div></div><ul class="rest social-text d-flex mt-50 fz-13"><li class="mr-20"><a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mr-20"><a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mr-20"><a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div></div>',1),R={__name:"Menu",props:["lightMode"],setup(s){function n(d){document.querySelectorAll("ul.main-menu li").forEach(o=>{o.classList.add("hoverd")}),d.currentTarget.classList.remove("hoverd")}function c(){document.querySelectorAll("ul.main-menu li").forEach(d=>d.classList.remove("hoverd"))}function r(d){const o=d.currentTarget.querySelector(".sub-menu");o&&(o.classList.contains("sub-open")?(document.querySelectorAll(".sub-menu").forEach(e=>{e.classList.remove("sub-open"),e.style.maxHeight="0",e.previousElementSibling.children[0].classList.remove("dopen")}),o.classList.remove("sub-open"),o.style.maxHeight="0",o.previousElementSibling.children[0].classList.remove("dopen")):o.classList.contains("sub-open")||(document.querySelectorAll(".sub-menu").forEach(e=>{e.classList.remove("sub-open"),e.style.maxHeight="0",e.previousElementSibling.children[0].classList.remove("dopen")}),o.classList.add("sub-open"),o.style.maxHeight="450px",o.previousElementSibling.children[0].classList.add("dopen")))}return(d,o)=>{const e=f;return h(),g("div",y,[l("div",L,[l("div",w,[C,l("div",q,[l("div",A,[l("ul",E,[l("li",{onMouseenter:n,onMouseleave:c,onClick:r},[P,l("div",B,[l("ul",null,[l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/home-main`,class:"sub-link"},{default:i(()=>[t("Home Main ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/home-corporate`,class:"sub-link"},{default:i(()=>[t("Home Corporate ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/home-onepage`,class:"sub-link"},{default:i(()=>[t("Home One page ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/home-digital-agency`,class:"sub-link"},{default:i(()=>[t("Digital Agency")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/home-freelancer`,class:"sub-link"},{default:i(()=>[t("Freelancer ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/home-marketing-agency`,class:"sub-link"},{default:i(()=>[t("Marketing Agency")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/home-creative-agency`,class:"sub-link"},{default:i(()=>[t("Creative Agency")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/home-startup`,class:"sub-link"},{default:i(()=>[t("Startup Bussines ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/home-architecture`,class:"sub-link"},{default:i(()=>[t("Architecture ")]),_:1},8,["to"])])])])],32),l("li",{onMouseenter:n,onMouseleave:c},[l("div",H,[a(e,{to:`/${s.lightMode?"light":"dark"}/page-about`,class:"link"},{default:i(()=>[T]),_:1},8,["to"])])],32),l("li",{onMouseenter:n,onMouseleave:c,onClick:r},[D,l("div",N,[l("ul",null,[l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/page-services`,class:"sub-link"},{default:i(()=>[t("Services ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/page-team`,class:"sub-link"},{default:i(()=>[t("Our Team")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/page-contact`,class:"sub-link"},{default:i(()=>[t("Contact Us ")]),_:1},8,["to"])])])])],32),l("li",{onMouseenter:n,onMouseleave:c,onClick:r},[G,l("div",I,[l("ul",null,[l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/showcase-parallax-slider`,class:"sub-link"},{default:i(()=>[t(" Parallax Slider")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/showcase-frame-slider`,class:"sub-link"},{default:i(()=>[t("Frame Slider")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/showcase-circle-slider`,class:"sub-link"},{default:i(()=>[t("Circle Slider")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/showcase-carousel`,class:"sub-link"},{default:i(()=>[t("Showcase Carousel")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/showcase-interactive-center-horizontal`,class:"sub-link"},{default:i(()=>[t("Interactive Links1")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/showcase-interactive-center`,class:"sub-link"},{default:i(()=>[t(" Interactive Links2")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/showcase-parallax`,class:"sub-link"},{default:i(()=>[t("Vertical Parallax")]),_:1},8,["to"])])])])],32),l("li",{onMouseenter:n,onMouseleave:c,onClick:r},[j,l("div",F,[l("ul",null,[l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/portfolio-grid-2`,class:"sub-link"},{default:i(()=>[t("Classic Grid")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/portfolio-modern`,class:"sub-link"},{default:i(()=>[t("Modern Grid ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/portfolio-metro`,class:"sub-link"},{default:i(()=>[t("Portfolio Metro ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/project-details1`,class:"sub-link"},{default:i(()=>[t("Project Details 1")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/project-details2`,class:"sub-link"},{default:i(()=>[t("Project Details 2")]),_:1},8,["to"])])])])],32),l("li",{onMouseenter:n,onMouseleave:c,onClick:r},[O,l("div",V,[l("ul",null,[l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/blog-classic`,class:"sub-link"},{default:i(()=>[t("Blog Standerd ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/blog-list`,class:"sub-link"},{default:i(()=>[t("Blog List")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/blog-half-img`,class:"sub-link"},{default:i(()=>[t("Image Out Frame ")]),_:1},8,["to"])]),l("li",null,[a(e,{to:`/${s.lightMode?"light":"dark"}/blog-details`,class:"sub-link"},{default:i(()=>[t("Blog Details ")]),_:1},8,["to"])])])])],32),l("li",{onMouseenter:n,onMouseleave:c},[l("div",z,[a(e,{to:`/${s.lightMode?"light":"dark"}/page-contact`,class:"link"},{default:i(()=>[U]),_:1},8,["to"])])],32)])])]),Y])])])}}};export{Q as _,R as a};
