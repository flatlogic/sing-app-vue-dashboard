import{p as e,a as l,b as o}from"./slide-3-Bay0dHK2.js";import{c as n,d,e as s,q as t,h as r,g as c}from"./index-vCAVj8De.js";const i={class:"row"},u={class:"col-lg-9 col-12"},b={class:"tab-content"},p={id:"carousel-example",class:"tab-pane fade show active p-0"},v={id:"carouselFade",class:"carousel slide carousel-fade","data-bs-ride":"carousel"},m={class:"carousel-inner"},g={class:"carousel-item active"},_=["src"],x={class:"carousel-item"},y=["src"],f={class:"carousel-item"},k=["src"],B={__name:"Carousel",setup(F){return(w,a)=>(n(),d("div",i,[s("div",u,[a[4]||(a[4]=s("h2",null,"Carousel",-1)),a[5]||(a[5]=s("p",{class:"mb-4"}," A slideshow component for cycling through elements—images or slides of text—like a carousel. ",-1)),a[6]||(a[6]=s("pre",null,[s("code",null,`// Bootstrap 5 native carousel
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>`)],-1)),s("div",null,[a[3]||(a[3]=s("ul",{class:"nav nav-tabs bg-transparent",role:"tablist"},[s("li",{class:"nav-item"},[s("button",{class:"nav-link active","data-bs-toggle":"tab","data-bs-target":"#carousel-example",type:"button"}," Example ")]),s("li",{class:"nav-item"},[s("button",{class:"nav-link","data-bs-toggle":"tab","data-bs-target":"#carousel-code",type:"button"}," Code ")])],-1)),s("div",b,[s("div",p,[s("div",v,[a[0]||(a[0]=s("div",{class:"carousel-indicators"},[s("button",{type:"button","data-bs-target":"#carouselFade","data-bs-slide-to":"0",class:"active"}),s("button",{type:"button","data-bs-target":"#carouselFade","data-bs-slide-to":"1"}),s("button",{type:"button","data-bs-target":"#carouselFade","data-bs-slide-to":"2"})],-1)),s("div",m,[s("div",g,[s("img",{src:t(e),class:"d-block w-100",alt:"Slide 1"},null,8,_)]),s("div",x,[s("img",{src:t(l),class:"d-block w-100",alt:"Slide 2"},null,8,y)]),s("div",f,[s("img",{src:t(o),class:"d-block w-100",alt:"Slide 3"},null,8,k)])]),a[1]||(a[1]=r('<button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2))])]),a[2]||(a[2]=s("div",{id:"carousel-code",class:"tab-pane fade p-3"},[s("pre",null,[s("code",null,`<div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselFade" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#carouselFade" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselFade" data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="slide1" class="d-block w-100" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img :src="slide2" class="d-block w-100" alt="Slide 2">
    </div>
    <div class="carousel-item">
      <img :src="slide3" class="d-block w-100" alt="Slide 3">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>`)])],-1))])])]),a[7]||(a[7]=s("p",{class:"p-4"},[c(" For more examples please refer to "),s("a",{href:"https://getbootstrap.com/docs/5.3/components/carousel/",target:"_blank",rel:"noopener noreferrer"},"Bootstrap 5 Carousel")],-1))]))}};export{B as default};
