import{c as a,d as b,e as t,m as d,aG as i,g as u,aQ as r}from"./index-vCAVj8De.js";const p={class:"row"},c={class:"col-lg-9 col-12"},v={class:"mb-5"},g={class:"tab-content"},y={id:"modal-example-1",class:"tab-pane fade show active"},f={id:"modal-default",class:"modal fade",tabindex:"-1"},h={class:"modal-dialog"},k={class:"modal-content"},x={class:"modal-header"},I={class:"modal-footer"},L={class:"tab-content"},w={id:"modal-example-2",class:"tab-pane fade show active"},C={id:"modal-long",class:"modal fade",tabindex:"-1"},M={class:"modal-dialog modal-dialog-scrollable"},E={class:"modal-content"},B={class:"modal-header"},$={class:"modal-footer"},T={id:"modal-large",class:"modal fade",tabindex:"-1"},S={class:"modal-dialog modal-lg"},q={class:"modal-content"},V={class:"modal-header"},D={class:"modal-footer"},N=`<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged. It was popularised
  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
</p>`,A={__name:"Modal",setup(O){function l(n){const o=document.getElementById(n);r.getOrCreateInstance(o).show()}function s(n){const o=document.getElementById(n),e=r.getInstance(o);if(e){const m=document.activeElement;o.contains(m)&&m.blur(),e.hide()}}return(n,o)=>(a(),b("div",p,[t("div",c,[o[22]||(o[22]=t("h2",null,"Modal",-1)),o[23]||(o[23]=t("p",{class:"mb-4"}," Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. ",-1)),o[24]||(o[24]=t("pre",null,[t("code",null,`// Bootstrap 5 native modal
<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">...</div>
  </div>
</div>`)],-1)),t("div",v,[o[13]||(o[13]=t("ul",{class:"nav nav-tabs bg-transparent",role:"tablist"},[t("li",{class:"nav-item"},[t("button",{class:"nav-link active","data-bs-toggle":"tab","data-bs-target":"#modal-example-1",type:"button"}," Example ")]),t("li",{class:"nav-item"},[t("button",{class:"nav-link","data-bs-toggle":"tab","data-bs-target":"#modal-code-1",type:"button"}," Code ")])],-1)),t("div",g,[t("div",y,[t("button",{class:"btn btn-lg btn-primary",onClick:o[0]||(o[0]=e=>l("modal-default"))}," Default modal "),(a(),d(i,{to:"body"},[t("div",f,[t("div",h,[t("div",k,[t("div",x,[o[9]||(o[9]=t("h5",{class:"modal-title"}," Modal Title ",-1)),t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o[1]||(o[1]=e=>s("modal-default"))})]),o[11]||(o[11]=t("div",{class:"modal-body bg-white"},[t("p",null,"Modal body content goes here...")],-1)),t("div",I,[t("button",{type:"button",class:"btn btn-secondary",onClick:o[2]||(o[2]=e=>s("modal-default"))}," Close "),o[10]||(o[10]=t("button",{type:"button",class:"btn btn-primary"}," Save changes ",-1))])])])])]))]),o[12]||(o[12]=t("div",{id:"modal-code-1",class:"tab-pane fade"},[t("pre",null,[t("code",null,`<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-default">
  Default modal
</button>

<div class="modal fade" id="modal-default" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body bg-white">
        <p>Modal body content...</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`)])],-1))])]),t("div",null,[o[21]||(o[21]=t("ul",{class:"nav nav-tabs bg-transparent",role:"tablist"},[t("li",{class:"nav-item"},[t("button",{class:"nav-link active","data-bs-toggle":"tab","data-bs-target":"#modal-example-2",type:"button"}," Example ")]),t("li",{class:"nav-item"},[t("button",{class:"nav-link","data-bs-toggle":"tab","data-bs-target":"#modal-code-2",type:"button"}," Code ")])],-1)),t("div",L,[t("div",w,[o[19]||(o[19]=t("h3",null,"Variations",-1)),t("button",{class:"btn btn-lg btn-danger me-3",onClick:o[3]||(o[3]=e=>l("modal-long"))}," Long modal "),t("button",{class:"btn btn-lg btn-success",onClick:o[4]||(o[4]=e=>l("modal-large"))}," Large modal "),(a(),d(i,{to:"body"},[t("div",C,[t("div",M,[t("div",E,[t("div",B,[o[14]||(o[14]=t("h5",{class:"modal-title"}," Long content ",-1)),t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o[5]||(o[5]=e=>s("modal-long"))})]),t("div",{class:"modal-body bg-white",innerHTML:N}),t("div",$,[t("button",{type:"button",class:"btn btn-secondary",onClick:o[6]||(o[6]=e=>s("modal-long"))}," Close "),o[15]||(o[15]=t("button",{type:"button",class:"btn btn-primary"}," Save changes ",-1))])])])])])),(a(),d(i,{to:"body"},[t("div",T,[t("div",S,[t("div",q,[t("div",V,[o[16]||(o[16]=t("h5",{class:"modal-title"}," Large modal ",-1)),t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o[7]||(o[7]=e=>s("modal-large"))})]),o[18]||(o[18]=t("div",{class:"modal-body bg-white"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum? Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo! ",-1)),t("div",D,[t("button",{type:"button",class:"btn btn-secondary",onClick:o[8]||(o[8]=e=>s("modal-large"))}," Close "),o[17]||(o[17]=t("button",{type:"button",class:"btn btn-primary"}," Save changes ",-1))])])])])]))]),o[20]||(o[20]=t("div",{id:"modal-code-2",class:"tab-pane fade"},[t("pre",null,[t("code",null,`<!-- Long scrollable modal -->
<div class="modal fade" id="modal-long">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">...</div>
  </div>
</div>

<!-- Large modal -->
<div class="modal fade" id="modal-large">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">...</div>
  </div>
</div>`)])],-1))])])]),o[25]||(o[25]=t("p",{class:"p-4"},[u(" For more examples please refer to "),t("a",{href:"https://getbootstrap.com/docs/5.3/components/modal/",target:"_blank",rel:"noopener noreferrer"},"Bootstrap 5 Modal")],-1))]))}};export{A as default};
