(function(){"use strict";var t={2262:function(t,n,e){var i=e(9242),l=e(3396);const a={class:"container"};function s(t,n,e,i,s,o){const u=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l.Wm)(u)])}var o={},u=e(89);const r=(0,u.Z)(o,[["render",s]]);var p=r,d=e(2483),c=e(8957),_=e(8819),m=e(2881),w=e(8600),g=e(3504),f=(e(8556),e(1020)),k=e(7139);const h=(0,l._)("h1",{style:{"margin-top":"16px"}},"CampusMatch",-1),D={style:{"margin-top":"24px"}},U={style:{display:"flex","justify-content":"center","align-items":"center"}},z={key:0,class:"d-flex align-center"};function A(t,n,e,i,a,s){const o=(0,l.up)("v-text-field"),u=(0,l.up)("v-col"),r=(0,l.up)("v-btn"),p=(0,l.up)("v-row"),d=(0,l.up)("v-select"),c=(0,l.up)("v-data-table-footer"),_=(0,l.up)("v-data-table"),m=(0,l.up)("v-container");return(0,l.wg)(),(0,l.j4)(m,null,{default:(0,l.w5)((()=>[h,(0,l._)("div",D,[(0,l._)("div",U,[(0,l.Wm)(p,{class:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{cols:"3"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{modelValue:i.tableStore.search,"onUpdate:modelValue":n[0]||(n[0]=t=>i.tableStore.search=t),label:"Search Institutions","append-inner-icon":"mdi-magnify",density:"compact",variant:"solo","single-line":"","hide-details":"",clearable:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,{cols:"3"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"fill-height"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Filters ")])),_:1})])),_:1}),(0,l.Wm)(u,{cols:"6",class:"d-flex justify-end align-center"},{default:(0,l.w5)((()=>[i.tableStore.selectedRows.length?((0,l.wg)(),(0,l.iD)("div",z,[(0,l.Wm)(r,{class:"ml-3"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,k.zw)(i.tableStore.selectedRows.length)+" Selected ",1)])),_:1})])):(0,l.kq)("",!0)])),_:1})])),_:1})]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.headers,(t=>((0,l.wg)(),(0,l.iD)("div",{class:"d-none",key:t.title},[i.tableStore.filters.hasOwnProperty(t.title)?((0,l.wg)(),(0,l.j4)(d,{key:0,flat:"","hide-details":"",small:"",multiple:"",clearable:"",auto:"",label:t.title,items:i.tableStore.columnValueList(t.key),modelValue:i.tableStore.filters[t.key],"onUpdate:modelValue":n=>i.tableStore.filters[t.key]=n,"onUpdate:menu":s.onUpdateMenu},null,8,["label","items","modelValue","onUpdate:modelValue","onUpdate:menu"])):(0,l.kq)("",!0)])))),128))]),(0,l.Wm)(_,{id:"dataTable",class:"elevation-1 mt-4","item-key":"Institution name","selectable-key":"Institution name",height:"59vh","fixed-header":"",filterable:"","multi-sort":"",dense:"","show-select":"","return-object":"",headers:i.headers,items:i.tableStore.filteredTableData(),search:i.tableStore.search,"items-per-page":50,page:i.tableStore.page,"onClick:row":s.navigateToInstitution,"onUpdate:page":i.tableStore.updatePage,"item-value":"institution name",modelValue:i.tableStore.selectedRows,"onUpdate:modelValue":n[1]||(n[1]=t=>i.tableStore.selectedRows=t)},{bottom:(0,l.w5)((({pagination:t,options:n,updateOptions:e})=>[(0,l.Wm)(p,{class:"data-table-footer-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{cols:"3",class:"d-flex align-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"ml-5"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Column Settings ")])),_:1})])),_:1}),(0,l.Wm)(u,{cols:"9",class:"d-flex align-center justify-end"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{pagination:t,options:n,"onUpdate:options":e},null,8,["pagination","options","onUpdate:options"])])),_:2},1024)])),_:2},1024)])),_:1},8,["headers","items","search","page","onClick:row","onUpdate:page","modelValue"])])),_:1})}e(7658),e(1439),e(7585),e(5315);var S=e(7092);const b=(0,f.Q_)("table",{state:()=>({loading:!0,tableData:[],filteredTableDataArray:[],filters:{State:[],Sector:[],Calendar:[]},search:"",page:1,selectedRows:[]}),actions:{async fetchTableData(){try{const t="/21-22 updated IPEDS 09-02-2023.xlsx";fetch(t).then((t=>t.arrayBuffer())).then((t=>{const n=S.ij(new Uint8Array(t),{type:"array"}),e=n.Sheets[n.SheetNames[0]];localStorage.setItem("institutionTable",JSON.stringify(S.P6.sheet_to_json(e))),this.tableData=JSON.parse(localStorage.getItem("institutionTable")),this.loading=!1}))}catch(t){console.error("Error fetching table data:",t)}},filteredTableData(){return this.tableData.filter((t=>Object.keys(this.filters).every((n=>this.filters[n].length<1||this.filters[n].includes(t[n])))))},columnValueList(t){return[...new Set(this.tableData.map((n=>n[t])))]},updatePage(t){this.page=t},updateSelected(t){this.selectedRows=t}}});var v={setup(){let t=b();return 0==t.tableData.length&&t.fetchTableData(),{tableStore:t,headers:[{title:"Institution name",key:"institution name",width:"300px",fixed:!0},{title:"State",key:"State ",width:"130px"},{title:"Sector",key:"Sector",width:"300px"},{title:"Admittance",key:"%admit",width:"80px"},{title:"Calendar",key:"Calendar",width:"180px"},{title:"HBCU",key:"HBCU",width:"60px"},{title:"Tribal",key:"Tribal",width:"60px"},{title:"Urban-centric locale",key:"Urban-centric locale",width:"210px"},{title:"%reg DSPS",key:"%reg DSPS",width:"200px"},{title:"COA in-state students",key:"COA in-state students",width:"250px"},{title:"COA out-of-state",key:"COA out-of-state",width:"200px"},{title:"Size range",key:"Size range",width:"200px"},{title:"Undergraduate enrollment",key:"Undergraduate enrollment",width:"280px"},{title:"Graduate enrollment",key:"Graduate enrollment",width:"280px"}]}},mounted(){const t=document.querySelector("#dataTable .v-table__wrapper");t.addEventListener("scroll",this.onScroll,!0),this.scrollToLastKnownPosition(),this.highlightLastClickedRow()},beforeUnmount(){window.removeEventListener("scroll",this.onScroll,!0)},data(){return{}},watch:{selected(t){this.tableStore.updateSelected(t)}},methods:{onScroll(t){localStorage.setItem("tableViewScrollPositionY",t.target.scrollTop),localStorage.setItem("tableViewScrollPositionX",t.target.scrollLeft)},scrollToLastKnownPosition(){(localStorage.getItem("tableViewScrollPositionY")>0||localStorage.getItem("tableViewScrollPositionX")>0)&&(document.querySelector("#dataTable .v-table__wrapper").scrollTop=localStorage.getItem("tableViewScrollPositionY"),document.querySelector("#dataTable .v-table__wrapper").scrollLeft=localStorage.getItem("tableViewScrollPositionX"))},highlightLastClickedRow(){},navigateToInstitution(t,n){console.log("item"),console.log(n.isSelected),localStorage.setItem("lastClickedRow",t.target);const e=JSON.parse(JSON.stringify(n));localStorage.setItem("institutionDetail",JSON.stringify(e.item.raw)),this.$router.push({name:"institutionDetail",params:{name:e.item.raw["institution name"]}})},onUpdateMenu(t){t&&setTimeout((()=>window.dispatchEvent(new Event("resize"))),0)}}};const y=(0,u.Z)(v,[["render",A]]);var T=y;const C={style:{"margin-top":"24px","max-width":"1120px",margin:"0 auto"}},I={style:{"margin-top":"24px"}},x=(0,l._)("span",null,"State: ",-1),P=(0,l._)("span",null,"Sector: ",-1),O=(0,l._)("span",null,"Urban-centric locale: ",-1),N={class:"institution-images-container"},W={class:"img-bg"},R=["src"],L={class:"institution-images-grid"},E=["src"],M={style:{"margin-top":"24px"}},H={style:{"margin-top":"12px"}},j=(0,l._)("span",null,"Mission statement: ",-1),B={style:{"margin-top":"12px"}},V=(0,l._)("span",null,"About: ",-1),F=(0,l._)("h1",{style:{color:"Red","margin-top":"96px"}},"Paid Account",-1),q={style:{margin:"24px 0"}},G=(0,l._)("h2",null,"Test Related Content",-1),Y=(0,l._)("span",null,"%enrolled submitted test score: ",-1),J=(0,l._)("h3",null,"SAT",-1),K=(0,l._)("span",null,"%submitting SAT scores: ",-1),Z=(0,l._)("span",null,"SAT EBRW 25th percentile score: ",-1),Q=(0,l._)("span",null,"SAT EBRW 75th percentile score: ",-1),X=(0,l._)("span",null,"SAT 50th%ile: ",-1),$=(0,l._)("span",null,"SAT Math 25th percentile score: ",-1),tt=(0,l._)("span",null,"SAT Math 75th percentile score: ",-1),nt=(0,l._)("h3",null,"ACT",-1),et=(0,l._)("span",null,"% submitting ACT scores: ",-1),it=(0,l._)("span",null,"ACT Composite 25th percentile score: ",-1),lt=(0,l._)("span",null,"ACT Composite 75th percentile score: ",-1),at=(0,l._)("span",null,"ACT 50th%ile: ",-1),st=(0,l._)("span",null,"Hospital: ",-1),ot=(0,l._)("span",null,"HBCU: ",-1),ut=(0,l._)("span",null,"Tribal: ",-1),rt=(0,l._)("span",null,"Size and Setting: ",-1),pt=(0,l._)("span",null,"Religious affiliation: ",-1),dt=(0,l._)("span",null,"NCAA: ",-1),ct=(0,l._)("span",null,"NAIA: ",-1),_t=(0,l._)("span",null,"%reg DSPS: ",-1),mt=(0,l._)("span",null,"%admit: ",-1),wt=(0,l._)("span",null,"COA in-state students : ",-1),gt=(0,l._)("span",null,"COA out-of-state : ",-1),ft=(0,l._)("span",null,"Size range: ",-1),kt=(0,l._)("span",null,"Undergrad enrollment: ",-1),ht=(0,l._)("span",null,"%exclusively in distance education courses: ",-1),Dt=(0,l._)("span",null,"%American Indian or Alaska Native: ",-1),Ut=(0,l._)("span",null,"% undergrad Asian: ",-1),zt=(0,l._)("span",null,"%Black or African American: ",-1),At=(0,l._)("span",null,"% Hispanic/Latino: ",-1),St=(0,l._)("span",null,"%Native Hawaiian or Other Pacific Islander: ",-1),bt=(0,l._)("span",null,"% White: ",-1),vt=(0,l._)("span",null,"% two or more races: ",-1),yt=(0,l._)("span",null,"% Race/ethnicity unknown: ",-1),Tt=(0,l._)("span",null,"%Nonresident Alien: ",-1),Ct=(0,l._)("span",null,"%Asian/Native Hawaiian/Pacific Islander: ",-1),It=(0,l._)("span",null,"%women: ",-1),xt=(0,l._)("span",null,"retention rate: ",-1),Pt=(0,l._)("span",null,"Student-to-faculty ratio: ",-1),Ot=(0,l._)("span",null,"%undergraduates - in-state: ",-1),Nt=(0,l._)("span",null,"%undergraduates - out-of-state: ",-1),Wt=(0,l._)("span",null,"%undergraduates - foreign countries: ",-1),Rt=(0,l._)("span",null,"4yr grad rate: ",-1),Lt=(0,l._)("span",null,"5 yr grad rate: ",-1),Et=(0,l._)("span",null,"6 yr grad rate: ",-1),Mt=(0,l._)("span",null,"%undergraduates awarded federal grant aid: ",-1),Ht=(0,l._)("span",null,"Average amount of federal grant aid awarded to full-time first-time undergraduates: ",-1),jt=(0,l._)("span",null,"% undergraduates awarded Pell grants: ",-1),Bt=(0,l._)("span",null,"%undergraduates awarded institutional grant aid: ",-1),Vt=(0,l._)("span",null,"Average amount of institutional grant aid awarded to full-time first-time undergraduates: ",-1),Ft=(0,l._)("span",null,"Recommendations: ",-1),qt=(0,l._)("span",null,"Admission test scores: ",-1),Gt=(0,l._)("span",null,"TOEFL : ",-1),Yt=(0,l._)("span",null,"Applicants total: ",-1),Jt=(0,l._)("span",null,"Admissions total: ",-1),Kt=(0,l._)("span",null,"Enrolled men: ",-1),Zt=(0,l._)("span",null,"Enrolled women: ",-1),Qt=(0,l._)("span",null,"Percent admitted : ",-1),Xt=(0,l._)("span",null,"Interview: ",-1),$t=(0,l._)("span",null,"Demonstrated Interest: ",-1),tn=(0,l._)("span",null,"% in Greek Life: ",-1),nn=(0,l._)("span",null,"% Undergrads living on campus: ",-1),en=(0,l._)("h3",null,"Links: ",-1),ln=["href"],an=["href"],sn=["href"],on=["href"],un=["href"],rn=["href"];function pn(t,n,e,i,a,s){const o=(0,l.up)("v-col"),u=(0,l.up)("v-row"),r=(0,l.up)("v-container");return(0,l.wg)(),(0,l.j4)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",C,[(0,l._)("h1",null,(0,k.zw)(a.institutionDetail["institution name"]),1),(0,l._)("div",I,[(0,l._)("p",null,[x,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["State "]),1)]),(0,l._)("p",null,[P,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Sector"]),1)]),(0,l._)("p",null,[O,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail[" Urban-centric locale"]),1)])]),(0,l._)("div",N,[(0,l._)("div",W,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.images.slice(0,1),((t,n)=>((0,l.wg)(),(0,l.iD)("img",{src:t,class:"institution-image",key:n},null,8,R)))),128))]),(0,l._)("div",L,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.images.slice(1,5),((t,n)=>((0,l.wg)(),(0,l.iD)("div",{key:n,class:"img-bg"},[(0,l._)("img",{class:"institution-image",src:t},null,8,E)])))),128))])]),(0,l._)("div",M,[(0,l._)("p",H,[j,(0,l.Uk)((0,k.zw)(a.institutionDetail["Mission statement"]),1)]),(0,l._)("p",B,[V,(0,l.Uk)((0,k.zw)(a.institutionDetail["About"]),1)])]),F,(0,l.Wm)(u,{class:"mt-6"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{cols:"6"},{default:(0,l.w5)((()=>[(0,l._)("section",q,[G,(0,l._)("p",null,[Y,(0,l.Uk)((0,k.zw)(a.institutionDetail["%enrolled submitted test score"]),1)]),(0,l.Wm)(u,{style:{"margin-top":"24px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{cols:"6"},{default:(0,l.w5)((()=>[J,(0,l._)("p",null,[K,(0,l.Uk)((0,k.zw)(a.institutionDetail["%submitting SAT scores"]),1)]),(0,l._)("p",null,[Z,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT EBRW 25th percentile score"]),1)]),(0,l._)("p",null,[Q,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT EBRW 75th percentile score"]),1)]),(0,l._)("p",null,[X,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT 50th%ile"]),1)]),(0,l._)("p",null,[$,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT Math 25th percentile score"]),1)]),(0,l._)("p",null,[tt,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT Math 75th percentile score"]),1)])])),_:1}),(0,l.Wm)(o,{cols:"6"},{default:(0,l.w5)((()=>[nt,(0,l._)("p",null,[et,(0,l.Uk)((0,k.zw)(a.institutionDetail["% submitting ACT scores"]),1)]),(0,l._)("p",null,[it,(0,l.Uk)((0,k.zw)(a.institutionDetail["ACT Composite 25th percentile score"]),1)]),(0,l._)("p",null,[lt,(0,l.Uk)((0,k.zw)(a.institutionDetail["ACT Composite 75th percentile score"]),1)]),(0,l._)("p",null,[at,(0,l.Uk)((0,k.zw)(a.institutionDetail["ACT 50th%ile"]),1)])])),_:1})])),_:1})]),(0,l._)("p",null,[st,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Has hospital"]),1)]),(0,l._)("p",null,[ot,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["HBCU"]),1)]),(0,l._)("p",null,[ut,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Tribal"]),1)]),(0,l._)("p",null,[rt,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Size and Setting"]),1)]),(0,l._)("p",null,[pt,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Religious affiliation"]),1)]),(0,l._)("p",null,[dt,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["NCAA"]),1)]),(0,l._)("p",null,[ct,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["NAIA"]),1)]),(0,l._)("p",null,[_t,(0,l.Uk)((0,k.zw)(a.institutionDetail["%reg DSPS"]),1)]),(0,l._)("p",null,[mt,(0,l.Uk)((0,k.zw)(a.institutionDetail["%admit"]),1)]),(0,l._)("p",null,[wt,(0,l.Uk)((0,k.zw)(a.institutionDetail["COA in-state students "]),1)]),(0,l._)("p",null,[gt,(0,l.Uk)((0,k.zw)(a.institutionDetail["COA out-of-state "]),1)]),(0,l._)("p",null,[ft,(0,l.Uk)((0,k.zw)(a.institutionDetail["Size range"]),1)]),(0,l._)("p",null,[kt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Undergrad enrollment"]),1)]),(0,l._)("p",null,[ht,(0,l.Uk)((0,k.zw)(a.institutionDetail["%exclusively in distance education courses"]),1)]),(0,l._)("p",null,[Dt,(0,l.Uk)((0,k.zw)(a.institutionDetail["%American Indian or Alaska Native"]),1)]),(0,l._)("p",null,[Ut,(0,l.Uk)((0,k.zw)(a.institutionDetail["% undergrad Asian"]),1)]),(0,l._)("p",null,[zt,(0,l.Uk)((0,k.zw)(a.institutionDetail["%Black or African American"]),1)]),(0,l._)("p",null,[At,(0,l.Uk)((0,k.zw)(a.institutionDetail["% Hispanic/Latino"]),1)]),(0,l._)("p",null,[St,(0,l.Uk)((0,k.zw)(a.institutionDetail["%Native Hawaiian or Other Pacific Islander"]),1)]),(0,l._)("p",null,[bt,(0,l.Uk)((0,k.zw)(a.institutionDetail["% White"]),1)]),(0,l._)("p",null,[vt,(0,l.Uk)((0,k.zw)(a.institutionDetail["% two or more races"]),1)]),(0,l._)("p",null,[yt,(0,l.Uk)((0,k.zw)(a.institutionDetail["% Race/ethnicity unknown"]),1)]),(0,l._)("p",null,[Tt,(0,l.Uk)((0,k.zw)(a.institutionDetail["%Nonresident Alien"]),1)]),(0,l._)("p",null,[Ct,(0,l.Uk)((0,k.zw)(a.institutionDetail["%Asian/Native Hawaiian/Pacific Islander"]),1)]),(0,l._)("p",null,[It,(0,l.Uk)((0,k.zw)(a.institutionDetail["%women"]),1)]),(0,l._)("p",null,[xt,(0,l.Uk)((0,k.zw)(a.institutionDetail["retention rate"]),1)]),(0,l._)("p",null,[Pt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Student-to-faculty ratio"]),1)]),(0,l._)("p",null,[Ot,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates - in-state"]),1)]),(0,l._)("p",null,[Nt,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates - out-of-state"]),1)]),(0,l._)("p",null,[Wt,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates - foreign countries"]),1)]),(0,l._)("p",null,[Rt,(0,l.Uk)((0,k.zw)(a.institutionDetail["4yr grad rate"]),1)]),(0,l._)("p",null,[Lt,(0,l.Uk)((0,k.zw)(a.institutionDetail["5 yr grad rate"]),1)]),(0,l._)("p",null,[Et,(0,l.Uk)((0,k.zw)(a.institutionDetail["6 yr grad rate"]),1)]),(0,l._)("p",null,[Mt,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates awarded federal grant aid"]),1)]),(0,l._)("p",null,[Ht,(0,l.Uk)((0,k.zw)(a.institutionDetail["Average amount of federal grant aid awarded to full-time first-time undergraduates"]),1)]),(0,l._)("p",null,[jt,(0,l.Uk)((0,k.zw)(a.institutionDetail["% undergraduates awarded Pell grants"]),1)]),(0,l._)("p",null,[Bt,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates awarded institutional grant aid"]),1)]),(0,l._)("p",null,[Vt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Average amount of institutional grant aid awarded to full-time first-time undergraduates"]),1)]),(0,l._)("p",null,[Ft,(0,l.Uk)((0,k.zw)(a.institutionDetail["Recommendations"]),1)]),(0,l._)("p",null,[qt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Admission test scores"]),1)]),(0,l._)("p",null,[Gt,(0,l.Uk)((0,k.zw)(a.institutionDetail["TOEFL "]),1)]),(0,l._)("p",null,[Yt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Applicants total"]),1)]),(0,l._)("p",null,[Jt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Admissions total"]),1)]),(0,l._)("p",null,[Kt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Enrolled  men"]),1)]),(0,l._)("p",null,[Zt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Enrolled  women"]),1)]),(0,l._)("p",null,[Qt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Percent admitted "]),1)]),(0,l._)("p",null,[Xt,(0,l.Uk)((0,k.zw)(a.institutionDetail["Interview"]),1)]),(0,l._)("p",null,[$t,(0,l.Uk)((0,k.zw)(a.institutionDetail["Demonstrated Interest"]),1)]),(0,l._)("p",null,[tn,(0,l.Uk)((0,k.zw)(a.institutionDetail["% in Greek Life"]),1)]),(0,l._)("p",null,[nn,(0,l.Uk)((0,k.zw)(a.institutionDetail["% Undergrads living on campus"]),1)])])),_:1}),(0,l.Wm)(o,{cols:"2"},{default:(0,l.w5)((()=>[en,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Admissions Link"]},"Admissions",8,ln)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Application Link"]},"Application",8,an)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Financial Aid Link"]},"Financial Aid",8,sn)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Net Price Calculator Link"]},"Net Price Calculator",8,on)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["DSPS Link"]},"Disability Services",8,un)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Mission statement link"]},"Mission statement",8,rn)])])])),_:1})])),_:1})])])),_:1})}var dn={name:"institutionDetail",data(){return{institutionDetail:{},links:{},images:[]}},computed:{},methods:{getInstitution(){this.institutionDetail=JSON.parse(localStorage.getItem("institutionDetail"))},async getImages(){const t=encodeURIComponent(this.institutionDetail["institution name"])+" campus -logo",n=await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyArmaIMqQveUnRimtLUb8nFZNNvzqVjFfk&cx=17808ea58f81d4de4&searchType=IMAGE&imgSize=large&q=${t}&num=5`),e=await n.json();let i=[];for(const l in e.items)i.push(e.items[l].link);this.images=i}},beforeMount(){this.getInstitution(),this.getImages()},mounted(){}};const cn=(0,u.Z)(dn,[["render",pn]]);var _n=cn;const mn={style:{"margin-top":"24px","max-width":"1120px",margin:"0 auto"}},wn={style:{"margin-top":"24px"}},gn=(0,l._)("span",null,"State: ",-1),fn=(0,l._)("span",null,"Sector: ",-1),kn=(0,l._)("span",null,"Urban-centric locale: ",-1),hn={class:"institution-images-container"},Dn=["src"],Un={class:"institution-images-grid"},zn=["src"],An={style:{"margin-top":"24px"}},Sn={style:{"margin-top":"12px"}},bn=(0,l._)("span",null,"Mission statement: ",-1),vn={style:{"margin-top":"12px"}},yn=(0,l._)("span",null,"About: ",-1),Tn={style:{margin:"24px 0"}},Cn=(0,l._)("h2",null,"Test Related Content",-1),In=(0,l._)("span",null,"%enrolled submitted test score: ",-1),xn=(0,l._)("h3",null,"SAT",-1),Pn=(0,l._)("span",null,"%submitting SAT scores: ",-1),On=(0,l._)("span",null,"SAT EBRW 25th percentile score: ",-1),Nn=(0,l._)("span",null,"SAT EBRW 75th percentile score: ",-1),Wn=(0,l._)("span",null,"SAT 50th%ile: ",-1),Rn=(0,l._)("span",null,"SAT Math 25th percentile score: ",-1),Ln=(0,l._)("span",null,"SAT Math 75th percentile score: ",-1),En=(0,l._)("h3",null,"ACT",-1),Mn=(0,l._)("span",null,"% submitting ACT scores: ",-1),Hn=(0,l._)("span",null,"ACT Composite 25th percentile score: ",-1),jn=(0,l._)("span",null,"ACT Composite 75th percentile score: ",-1),Bn=(0,l._)("span",null,"ACT 50th%ile: ",-1),Vn=(0,l._)("span",null,"Hospital: ",-1),Fn=(0,l._)("span",null,"HBCU: ",-1),qn=(0,l._)("span",null,"Tribal: ",-1),Gn=(0,l._)("span",null,"Size and Setting: ",-1),Yn=(0,l._)("span",null,"Religious affiliation: ",-1),Jn=(0,l._)("span",null,"NCAA: ",-1),Kn=(0,l._)("span",null,"NAIA: ",-1),Zn=(0,l._)("span",null,"%reg DSPS: ",-1),Qn=(0,l._)("span",null,"%admit: ",-1),Xn=(0,l._)("span",null,"COA in-state students : ",-1),$n=(0,l._)("span",null,"COA out-of-state : ",-1),te=(0,l._)("span",null,"Size range: ",-1),ne=(0,l._)("span",null,"Undergrad enrollment: ",-1),ee=(0,l._)("span",null,"%exclusively in distance education courses: ",-1),ie=(0,l._)("span",null,"%American Indian or Alaska Native: ",-1),le=(0,l._)("span",null,"% undergrad Asian: ",-1),ae=(0,l._)("span",null,"%Black or African American: ",-1),se=(0,l._)("span",null,"% Hispanic/Latino: ",-1),oe=(0,l._)("span",null,"%Native Hawaiian or Other Pacific Islander: ",-1),ue=(0,l._)("span",null,"% White: ",-1),re=(0,l._)("span",null,"% two or more races: ",-1),pe=(0,l._)("span",null,"% Race/ethnicity unknown: ",-1),de=(0,l._)("span",null,"%Nonresident Alien: ",-1),ce=(0,l._)("span",null,"%Asian/Native Hawaiian/Pacific Islander: ",-1),_e=(0,l._)("span",null,"%women: ",-1),me=(0,l._)("span",null,"retention rate: ",-1),we=(0,l._)("span",null,"Student-to-faculty ratio: ",-1),ge=(0,l._)("span",null,"%undergraduates - in-state: ",-1),fe=(0,l._)("span",null,"%undergraduates - out-of-state: ",-1),ke=(0,l._)("span",null,"%undergraduates - foreign countries: ",-1),he=(0,l._)("span",null,"4yr grad rate: ",-1),De=(0,l._)("span",null,"5 yr grad rate: ",-1),Ue=(0,l._)("span",null,"6 yr grad rate: ",-1),ze=(0,l._)("span",null,"%undergraduates awarded federal grant aid: ",-1),Ae=(0,l._)("span",null,"Average amount of federal grant aid awarded to full-time first-time undergraduates: ",-1),Se=(0,l._)("span",null,"% undergraduates awarded Pell grants: ",-1),be=(0,l._)("span",null,"%undergraduates awarded institutional grant aid: ",-1),ve=(0,l._)("span",null,"Average amount of institutional grant aid awarded to full-time first-time undergraduates: ",-1),ye=(0,l._)("span",null,"Recommendations: ",-1),Te=(0,l._)("span",null,"Admission test scores: ",-1),Ce=(0,l._)("span",null,"TOEFL : ",-1),Ie=(0,l._)("span",null,"Applicants total: ",-1),xe=(0,l._)("span",null,"Admissions total: ",-1),Pe=(0,l._)("span",null,"Enrolled men: ",-1),Oe=(0,l._)("span",null,"Enrolled women: ",-1),Ne=(0,l._)("span",null,"Percent admitted : ",-1),We=(0,l._)("span",null,"Interview: ",-1),Re=(0,l._)("span",null,"Demonstrated Interest: ",-1),Le=(0,l._)("span",null,"% in Greek Life: ",-1),Ee=(0,l._)("span",null,"% Undergrads living on campus: ",-1),Me=(0,l._)("h3",null,"Links: ",-1),He=["href"],je=["href"],Be=["href"],Ve=["href"],Fe=["href"],qe=["href"];function Ge(t,n,e,i,a,s){const o=(0,l.up)("v-col"),u=(0,l.up)("v-row"),r=(0,l.up)("v-container");return(0,l.wg)(),(0,l.j4)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",mn,[(0,l._)("h1",null,(0,k.zw)(a.institutionDetail["institution name"]),1),(0,l._)("div",wn,[(0,l._)("p",null,[gn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["State "]),1)]),(0,l._)("p",null,[fn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Sector"]),1)]),(0,l._)("p",null,[kn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail[" Urban-centric locale"]),1)])]),(0,l._)("div",hn,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.images.slice(0,1),((t,n)=>((0,l.wg)(),(0,l.iD)("img",{src:t,class:"institution-image",key:n},null,8,Dn)))),128)),(0,l._)("div",Un,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.images.slice(1,5),((t,n)=>((0,l.wg)(),(0,l.iD)("img",{key:n,class:"institution-image",src:t},null,8,zn)))),128))])]),(0,l._)("div",An,[(0,l._)("p",Sn,[bn,(0,l.Uk)((0,k.zw)(a.institutionDetail["Mission statement"]),1)]),(0,l._)("p",vn,[yn,(0,l.Uk)((0,k.zw)(a.institutionDetail["About"]),1)])]),(0,l.Wm)(u,{class:"mt-6"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{cols:"6"},{default:(0,l.w5)((()=>[(0,l._)("section",Tn,[Cn,(0,l._)("p",null,[In,(0,l.Uk)((0,k.zw)(a.institutionDetail["%enrolled submitted test score"]),1)]),(0,l.Wm)(u,{style:{"margin-top":"24px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{cols:"6"},{default:(0,l.w5)((()=>[xn,(0,l._)("p",null,[Pn,(0,l.Uk)((0,k.zw)(a.institutionDetail["%submitting SAT scores"]),1)]),(0,l._)("p",null,[On,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT EBRW 25th percentile score"]),1)]),(0,l._)("p",null,[Nn,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT EBRW 75th percentile score"]),1)]),(0,l._)("p",null,[Wn,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT 50th%ile"]),1)]),(0,l._)("p",null,[Rn,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT Math 25th percentile score"]),1)]),(0,l._)("p",null,[Ln,(0,l.Uk)((0,k.zw)(a.institutionDetail["SAT Math 75th percentile score"]),1)])])),_:1}),(0,l.Wm)(o,{cols:"6"},{default:(0,l.w5)((()=>[En,(0,l._)("p",null,[Mn,(0,l.Uk)((0,k.zw)(a.institutionDetail["% submitting ACT scores"]),1)]),(0,l._)("p",null,[Hn,(0,l.Uk)((0,k.zw)(a.institutionDetail["ACT Composite 25th percentile score"]),1)]),(0,l._)("p",null,[jn,(0,l.Uk)((0,k.zw)(a.institutionDetail["ACT Composite 75th percentile score"]),1)]),(0,l._)("p",null,[Bn,(0,l.Uk)((0,k.zw)(a.institutionDetail["ACT 50th%ile"]),1)])])),_:1})])),_:1})]),(0,l._)("p",null,[Vn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Has hospital"]),1)]),(0,l._)("p",null,[Fn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["HBCU"]),1)]),(0,l._)("p",null,[qn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Tribal"]),1)]),(0,l._)("p",null,[Gn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Size and Setting"]),1)]),(0,l._)("p",null,[Yn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["Religious affiliation"]),1)]),(0,l._)("p",null,[Jn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["NCAA"]),1)]),(0,l._)("p",null,[Kn,(0,l.Uk)(" "+(0,k.zw)(a.institutionDetail["NAIA"]),1)]),(0,l._)("p",null,[Zn,(0,l.Uk)((0,k.zw)(a.institutionDetail["%reg DSPS"]),1)]),(0,l._)("p",null,[Qn,(0,l.Uk)((0,k.zw)(a.institutionDetail["%admit"]),1)]),(0,l._)("p",null,[Xn,(0,l.Uk)((0,k.zw)(a.institutionDetail["COA in-state students "]),1)]),(0,l._)("p",null,[$n,(0,l.Uk)((0,k.zw)(a.institutionDetail["COA out-of-state "]),1)]),(0,l._)("p",null,[te,(0,l.Uk)((0,k.zw)(a.institutionDetail["Size range"]),1)]),(0,l._)("p",null,[ne,(0,l.Uk)((0,k.zw)(a.institutionDetail["Undergrad enrollment"]),1)]),(0,l._)("p",null,[ee,(0,l.Uk)((0,k.zw)(a.institutionDetail["%exclusively in distance education courses"]),1)]),(0,l._)("p",null,[ie,(0,l.Uk)((0,k.zw)(a.institutionDetail["%American Indian or Alaska Native"]),1)]),(0,l._)("p",null,[le,(0,l.Uk)((0,k.zw)(a.institutionDetail["% undergrad Asian"]),1)]),(0,l._)("p",null,[ae,(0,l.Uk)((0,k.zw)(a.institutionDetail["%Black or African American"]),1)]),(0,l._)("p",null,[se,(0,l.Uk)((0,k.zw)(a.institutionDetail["% Hispanic/Latino"]),1)]),(0,l._)("p",null,[oe,(0,l.Uk)((0,k.zw)(a.institutionDetail["%Native Hawaiian or Other Pacific Islander"]),1)]),(0,l._)("p",null,[ue,(0,l.Uk)((0,k.zw)(a.institutionDetail["% White"]),1)]),(0,l._)("p",null,[re,(0,l.Uk)((0,k.zw)(a.institutionDetail["% two or more races"]),1)]),(0,l._)("p",null,[pe,(0,l.Uk)((0,k.zw)(a.institutionDetail["% Race/ethnicity unknown"]),1)]),(0,l._)("p",null,[de,(0,l.Uk)((0,k.zw)(a.institutionDetail["%Nonresident Alien"]),1)]),(0,l._)("p",null,[ce,(0,l.Uk)((0,k.zw)(a.institutionDetail["%Asian/Native Hawaiian/Pacific Islander"]),1)]),(0,l._)("p",null,[_e,(0,l.Uk)((0,k.zw)(a.institutionDetail["%women"]),1)]),(0,l._)("p",null,[me,(0,l.Uk)((0,k.zw)(a.institutionDetail["retention rate"]),1)]),(0,l._)("p",null,[we,(0,l.Uk)((0,k.zw)(a.institutionDetail["Student-to-faculty ratio"]),1)]),(0,l._)("p",null,[ge,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates - in-state"]),1)]),(0,l._)("p",null,[fe,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates - out-of-state"]),1)]),(0,l._)("p",null,[ke,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates - foreign countries"]),1)]),(0,l._)("p",null,[he,(0,l.Uk)((0,k.zw)(a.institutionDetail["4yr grad rate"]),1)]),(0,l._)("p",null,[De,(0,l.Uk)((0,k.zw)(a.institutionDetail["5 yr grad rate"]),1)]),(0,l._)("p",null,[Ue,(0,l.Uk)((0,k.zw)(a.institutionDetail["6 yr grad rate"]),1)]),(0,l._)("p",null,[ze,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates awarded federal grant aid"]),1)]),(0,l._)("p",null,[Ae,(0,l.Uk)((0,k.zw)(a.institutionDetail["Average amount of federal grant aid awarded to full-time first-time undergraduates"]),1)]),(0,l._)("p",null,[Se,(0,l.Uk)((0,k.zw)(a.institutionDetail["% undergraduates awarded Pell grants"]),1)]),(0,l._)("p",null,[be,(0,l.Uk)((0,k.zw)(a.institutionDetail["%undergraduates awarded institutional grant aid"]),1)]),(0,l._)("p",null,[ve,(0,l.Uk)((0,k.zw)(a.institutionDetail["Average amount of institutional grant aid awarded to full-time first-time undergraduates"]),1)]),(0,l._)("p",null,[ye,(0,l.Uk)((0,k.zw)(a.institutionDetail["Recommendations"]),1)]),(0,l._)("p",null,[Te,(0,l.Uk)((0,k.zw)(a.institutionDetail["Admission test scores"]),1)]),(0,l._)("p",null,[Ce,(0,l.Uk)((0,k.zw)(a.institutionDetail["TOEFL "]),1)]),(0,l._)("p",null,[Ie,(0,l.Uk)((0,k.zw)(a.institutionDetail["Applicants total"]),1)]),(0,l._)("p",null,[xe,(0,l.Uk)((0,k.zw)(a.institutionDetail["Admissions total"]),1)]),(0,l._)("p",null,[Pe,(0,l.Uk)((0,k.zw)(a.institutionDetail["Enrolled  men"]),1)]),(0,l._)("p",null,[Oe,(0,l.Uk)((0,k.zw)(a.institutionDetail["Enrolled  women"]),1)]),(0,l._)("p",null,[Ne,(0,l.Uk)((0,k.zw)(a.institutionDetail["Percent admitted "]),1)]),(0,l._)("p",null,[We,(0,l.Uk)((0,k.zw)(a.institutionDetail["Interview"]),1)]),(0,l._)("p",null,[Re,(0,l.Uk)((0,k.zw)(a.institutionDetail["Demonstrated Interest"]),1)]),(0,l._)("p",null,[Le,(0,l.Uk)((0,k.zw)(a.institutionDetail["% in Greek Life"]),1)]),(0,l._)("p",null,[Ee,(0,l.Uk)((0,k.zw)(a.institutionDetail["% Undergrads living on campus"]),1)])])),_:1}),(0,l.Wm)(o,{cols:"2"},{default:(0,l.w5)((()=>[Me,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Admissions Link"]},"Admissions",8,He)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Application Link"]},"Application",8,je)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Financial Aid Link"]},"Financial Aid",8,Be)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Net Price Calculator Link"]},"Net Price Calculator",8,Ve)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["DSPS Link"]},"Disability Services",8,Fe)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Mission statement link"]},"Mission statement",8,qe)])])])),_:1})])),_:1})])])),_:1})}var Ye={name:"CompareInstituion",data(){return{institutionDetail:{},links:{},images:[]}},computed:{},methods:{getInstitution(){this.institutionDetail=JSON.parse(localStorage.getItem("institutionDetail"))},async getImages(){const t=encodeURIComponent(this.institutionDetail["institution name"])+" campus -logo",n=await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyArmaIMqQveUnRimtLUb8nFZNNvzqVjFfk&cx=17808ea58f81d4de4&searchType=IMAGE&imgSize=large&q=${t}&num=5`),e=await n.json();let i=[];for(const l in e.items)i.push(e.items[l].link);this.images=i}},beforeMount(){this.getInstitution(),this.getImages()},mounted(){}};const Je=(0,u.Z)(Ye,[["render",Ge]]);var Ke=Je;const Ze=[{path:"/",name:"home",component:T},{path:"/institution/:name",name:"institutionDetail",component:_n},{path:"/compare-instituion",name:"CompareInstituion",component:Ke}],Qe=(0,d.p7)({mode:"abstract",history:(0,d.PO)(),routes:Ze,scrollBehavior(t,n,e){return e||{top:0}}}),Xe=(0,f.WB)(),$e=(0,i.ri)(p);$e.use(Qe),$e.use(Xe);const ti=(0,c.Rd)({components:{..._,...m},directives:w,icons:{defaultSet:"mdi",aliases:g.j,sets:{mdi:g.t}}});$e.use(ti),$e.mount("#app")}},n={};function e(i){var l=n[i];if(void 0!==l)return l.exports;var a=n[i]={exports:{}};return t[i].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,i,l,a){if(!i){var s=1/0;for(p=0;p<t.length;p++){i=t[p][0],l=t[p][1],a=t[p][2];for(var o=!0,u=0;u<i.length;u++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](i[u])}))?i.splice(u--,1):(o=!1,a<s&&(s=a));if(o){t.splice(p--,1);var r=l();void 0!==r&&(n=r)}}return n}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[i,l,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var l,a,s=i[0],o=i[1],u=i[2],r=0;if(s.some((function(n){return 0!==t[n]}))){for(l in o)e.o(o,l)&&(e.m[l]=o[l]);if(u)var p=u(e)}for(n&&n(i);r<s.length;r++)a=s[r],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(p)},i=self["webpackChunkcollege_counselor"]=self["webpackChunkcollege_counselor"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(2262)}));i=e.O(i)})();
//# sourceMappingURL=app.b9cc68e3.js.map