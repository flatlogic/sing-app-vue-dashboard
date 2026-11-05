import{c as a,d as i,e as s,g as e,f as c,w as o,t as l,_ as n}from"./index-vCAVj8De.js";const d={class:"row"},r={class:"col-12 col-md-6"},x={class:"col-12 col-md-6"},u={class:"row"},p={class:"col"},v={class:"row"},h={class:"col-12 col-md-6"},f={class:"col-12 col-md-6"},b={__name:"Grid",setup(m){return(w,t)=>(a(),i("div",null,[t[5]||(t[5]=s("h1",{class:"page-title"},[e(" Grid "),s("span",{class:"fw-semi-bold"},"System")],-1)),s("div",d,[s("div",r,[c(n,{title:"<h5><span class='fw-semi-bold'>How</span> it works</h5>",close:"",collapse:"","custom-header":""},{default:o(()=>[...t[0]||(t[0]=[s("p",null," Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together. ",-1),s("div",{class:"bg-light p-3"},[s("div",{class:"row mb-lg"},[s("div",{class:"col-4"},[s("div",{class:"py-4 bg-primary text-center text-white"}," One of three columns ")]),s("div",{class:"col-4"},[s("div",{class:"py-4 bg-primary text-center text-white"}," One of three columns ")]),s("div",{class:"col-4"},[s("div",{class:"py-4 bg-primary text-center text-white"}," One of three columns ")])]),s("pre",{class:"bg-light border-0 w-100 h-100"},[e("              "),s("code",{class:"text-danger"},l('<div class="container">')),e(`
              `),s("code",{class:"text-success"},l('  <div class="row">')),e(`
              `),s("code",{class:"text-info"},l('    <div class="col-4">')),e(`
              `),s("code",null,l("      One of three columns")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-info"},l('    <div class="col-4">')),e(`
              `),s("code",null,l("      One of three columns")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-info"},l('    <div class="col-4">')),e(`
              `),s("code",null,l("      One of three columns")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-success"},l("  </div>")),e(`
              `),s("code",{class:"text-danger"},l("</div>")),e(`
            `)])],-1)])]),_:1})]),s("div",x,[c(n,{title:"<h5><span class='fw-semi-bold'>Equal</span> width</h5>",close:"",collapse:"","custom-header":""},{default:o(()=>[...t[1]||(t[1]=[s("p",null," For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width. ",-1),s("div",{class:"bg-light p-3"},[s("div",{class:"row mb-lg"},[s("div",{class:"col"},[s("div",{class:"py-4 bg-primary text-center text-white"}," 1 of 2 ")]),s("div",{class:"col"},[s("div",{class:"py-4 bg-primary text-center text-white"}," 2 of 2 ")])]),s("pre",{class:"bg-light border-0 w-100 h-100"},[e("              "),s("code",{class:"text-danger"},l('<div class="container">')),e(`
              `),s("code",{class:"text-success"},l('  <div class="row">')),e(`
              `),s("code",{class:"text-info"},l('    <div class="col">')),e(`
              `),s("code",null,l("      1 of 2")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-info"},l('    <div class="col">')),e(`
              `),s("code",null,l("      1 of 2")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-success"},l("  </div>")),e(`
              `),s("code",{class:"text-danger"},l("</div>")),e(`
            `)])],-1)])]),_:1})])]),s("div",u,[s("div",p,[c(n,{title:"<h5><span class='fw-semi-bold'>Grid</span> options</h5>",close:"",collapse:"","custom-header":""},{default:o(()=>[...t[2]||(t[2]=[s("p",null,[e(" While Bootstrap uses "),s("code",null,"em"),e("s or "),s("code",null,"rem"),e("s for defining most sizes, "),s("code",null,"px"),e("s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size. See how aspects of the Bootstrap grid system work across multiple devices with a handy table. ")],-1),s("div",{class:"table-responsive"},[s("table",{class:"table table-striped"},[s("thead",null,[s("tr",null,[s("th"),s("th",{class:"text-center"},[e(" Extra small"),s("br"),s("small",null,"<576px")]),s("th",{class:"text-center"},[e(" Small"),s("br"),s("small",null,"≥576px")]),s("th",{class:"text-center"},[e(" Medium"),s("br"),s("small",null,"≥768px")]),s("th",{class:"text-center"},[e(" Large"),s("br"),s("small",null,"≥992px")]),s("th",{class:"text-center"},[e(" Extra large"),s("br"),s("small",null,"≥1200px")])])]),s("tbody",null,[s("tr",null,[s("th",{class:"text-nowrap",scope:"row"}," Max container width "),s("td",null,"None (auto)"),s("td",null,"540px"),s("td",null,"720px"),s("td",null,"960px"),s("td",null,"1140px")]),s("tr",null,[s("th",{class:"text-nowrap",scope:"row"}," Class prefix "),s("td",null,[s("code",null,".col-")]),s("td",null,[s("code",null,".col-sm-")]),s("td",null,[s("code",null,".col-md-")]),s("td",null,[s("code",null,".col-lg-")]),s("td",null,[s("code",null,".col-xl-")])]),s("tr",null,[s("th",{class:"text-nowrap",scope:"row"}," # of columns "),s("td",{colSpan:"5"}," 12 ")]),s("tr",null,[s("th",{class:"text-nowrap",scope:"row"}," Gutter width "),s("td",{colSpan:"5"}," 30px (15px on each side of a column) ")]),s("tr",null,[s("th",{class:"text-nowrap",scope:"row"}," Nestable "),s("td",{colSpan:"5"}," Yes ")]),s("tr",null,[s("th",{class:"text-nowrap",scope:"row"}," column ordering "),s("td",{colSpan:"5"}," Yes ")])])])],-1)])]),_:1})])]),s("div",v,[s("div",h,[c(n,{title:"<h5>Vertical <span class='fw-semi-bold'>Alignment</span></h5>",close:"",collapse:"","custom-header":""},{default:o(()=>[...t[3]||(t[3]=[s("p",null,"Use flexbox alignment utilities to vertically and horizontally align columns.",-1),s("div",{class:"bg-light p-3"},[s("div",{class:"row mb-lg",style:{height:"150px"}},[s("div",{class:"col align-self-start"},[s("div",{class:"py-4 bg-primary text-center text-white"}," Start ")]),s("div",{class:"col align-self-center"},[s("div",{class:"py-4 bg-primary text-center text-white"}," Center ")]),s("div",{class:"col align-self-end"},[s("div",{class:"py-4 bg-primary text-center text-white"}," End ")])]),s("pre",{class:"bg-light border-0 w-100 h-100"},[e("              "),s("code",{class:"text-danger"},l('<div class="container">')),e(`
              `),s("code",{class:"text-success"},l('  <div class="row">')),e(`
              `),s("code",{class:"text-info"},l('    <div class="col align-self-start">')),e(`
              `),s("code",null,l("      Start")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-info"},l('    <div class="col align-self-center">')),e(`
              `),s("code",null,l("      Center")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-info"},l('    <div class="col align-self-end">')),e(`
              `),s("code",null,l("      End")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-success"},l("  </div>")),e(`
              `),s("code",{class:"text-danger"},l("</div>")),e(`
            `)])],-1)])]),_:1})]),s("div",f,[c(n,{title:"<h5>Horizontal <span class='fw-semi-bold'>Alignment</span></h5>",close:"",collapse:"","custom-header":""},{default:o(()=>[...t[4]||(t[4]=[s("p",null,"Use flexbox alignment utilities to vertically and horizontally align columns.",-1),s("div",{class:"bg-light p-3"},[s("div",{class:"row mb-lg justify-content-end"},[s("div",{class:"col-3"},[s("div",{class:"py-4 bg-primary text-center text-white"}," 1 ")]),s("div",{class:"col-3"},[s("div",{class:"py-4 bg-primary text-center text-white"}," 2 ")])]),s("div",{class:"row mb-lg justify-content-around"},[s("div",{class:"col-3"},[s("div",{class:"py-4 bg-primary text-center text-white"}," 1 ")]),s("div",{class:"col-3"},[s("div",{class:"py-4 bg-primary text-center text-white"}," 2 ")])]),s("div",{class:"row mb-lg justify-content-between"},[s("div",{class:"col-3"},[s("div",{class:"py-4 bg-primary text-center text-white"}," 1 ")]),s("div",{class:"col-3"},[s("div",{class:"py-4 bg-primary text-center text-white"}," 2 ")]),s("div",{class:"col-3"},[s("div",{class:"py-4 bg-primary text-center text-white"}," 3 ")])]),s("pre",{class:"bg-light border-0 w-100 h-100"},[e("              "),s("code",{class:"text-danger"},l('<div class="container">')),e(`
              `),s("code",{class:"text-success"},l('  <div class="row justify-content-end">')),e(`
              `),s("code",{class:"text-info"},l('    <div class="col">')),e(`
              `),s("code",null,l("      1")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-info"},l('    <div class="col">')),e(`
              `),s("code",null,l("      2")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-success"},l("  </div>")),e(`
              `),s("code",{class:"text-success"},l('  <div class="row justify-content-around">')),e(`
              `),s("code",{class:"text-info"},l('    <div class="col">')),e(`
              `),s("code",null,l("      1")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-info"},l('    <div class="col">')),e(`
              `),s("code",null,l("      2")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-success"},l("  </div>")),e(`
              `),s("code",{class:"text-success"},l('  <div class="row justify-content-between">')),e(`
              `),s("code",{class:"text-info"},l('    <div class="col">')),e(`
              `),s("code",null,l("      1")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-info"},l('    <div class="col">')),e(`
              `),s("code",null,l("      2")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-info"},l('    <div class="col">')),e(`
              `),s("code",null,l("      3")),e(`
              `),s("code",{class:"text-info"},l("    </div>")),e(`
              `),s("code",{class:"text-success"},l("  </div>")),e(`
              `),s("code",{class:"text-danger"},l("</div>")),e(`
            `)])],-1)])]),_:1})])])]))}};export{b as default};
