(function(){"use strict";var t={5345:function(t,n,i){var e=i(9242),l=i(3396);const a={class:"container"};function s(t,n,i,e,s,u){const o=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l.Wm)(o)])}var u={},o=i(89);const r=(0,o.Z)(u,[["render",s]]);var p=r,c=i(2483),d=i(8957),_=i(6354),f=i(839),m=i(8600),w=i(3504);i(8556);const g=(0,l._)("h1",{style:{"margin-top":"24px"}},"Institution Search",-1),k={style:{"margin-top":"36px"}};function h(t,n,i,e,a,s){const u=(0,l.up)("v-text-field"),o=(0,l.up)("v-data-table"),r=(0,l.up)("v-container");return(0,l.wg)(),(0,l.j4)(r,null,{default:(0,l.w5)((()=>[g,(0,l._)("div",k,[(0,l.Wm)(u,{modelValue:a.search,"onUpdate:modelValue":n[0]||(n[0]=t=>a.search=t),label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),((0,l.wg)(),(0,l.j4)(l.Ob,null,[(0,l.Wm)(o,{headers:a.headers,items:a.tableData,search:a.search,"onClick:row":s.navigateToInstitution,class:"elevation-1","multi-sort":"","sort-by":[{key:"State",order:"asc"}]},null,8,["headers","items","search","onClick:row"])],1024))])),_:1})}i(1439),i(7585),i(5315),i(7658);var D=i(7092),U={data(){return{search:"",tableData:[],headers:[{title:"Institution name",key:"institution name"},{title:"State",key:"State"},{title:"Locale",key:" Urban-centric locale"},{title:"Admittance",key:"%admit"},{title:"Religious affiliation",key:"Religious affiliation"}]}},methods:{fetchData(){const t="/Institutions.xlsx";fetch(t).then((t=>t.arrayBuffer())).then((t=>{const n=D.ij(new Uint8Array(t),{type:"array"}),i=n.Sheets[n.SheetNames[0]];localStorage.setItem("institutionTable",JSON.stringify(D.P6.sheet_to_json(i)))})).catch((t=>console.error("Error fetching or parsing data:",t)))},navigateToInstitution(t,n){const i=JSON.parse(JSON.stringify(n));localStorage.setItem("institutionDetail",JSON.stringify(i.item.raw)),this.$router.push({name:"institutionDetail",params:{name:i.item.raw["institution name"]}})}},beforeMount(){localStorage.getItem("institutionTable")||this.fetchData()},mounted(){this.tableData=JSON.parse(localStorage.getItem("institutionTable"))}};const z=(0,o.Z)(U,[["render",h]]);var A=z,v=i(7139);const S={style:{"margin-top":"24px"}},y={style:{"margin-top":"24px"}},b=(0,l._)("span",null,"State: ",-1),T=(0,l._)("span",null,"Sector: ",-1),O=(0,l._)("span",null,"Urban-centric locale: ",-1),C={style:{"margin-top":"24px"}},I={style:{"margin-top":"12px"}},N=(0,l._)("span",null,"Mission statement: : ",-1),x={style:{"margin-top":"12px"}},P=(0,l._)("span",null,"About: ",-1),W={style:{margin:"24px 0"}},j=(0,l._)("h2",null,"Test Related Content",-1),R=(0,l._)("span",null,"%enrolled submitted test score: ",-1),L=(0,l._)("h3",null,"SAT",-1),M=(0,l._)("span",null,"%submitting SAT scores: ",-1),E=(0,l._)("span",null,"SAT EBRW 25th percentile score: ",-1),B=(0,l._)("span",null,"SAT EBRW 75th percentile score: ",-1),H=(0,l._)("span",null,"SAT 50th%ile: ",-1),J=(0,l._)("span",null,"SAT Math 25th percentile score: ",-1),F=(0,l._)("span",null,"SAT Math 75th percentile score: ",-1),V=(0,l._)("h3",null,"ACT",-1),Z=(0,l._)("span",null,"% submitting ACT scores: ",-1),G=(0,l._)("span",null,"ACT Composite 25th percentile score: ",-1),$=(0,l._)("span",null,"ACT Composite 75th percentile score: ",-1),q=(0,l._)("span",null,"ACT 50th%ile: ",-1),K=(0,l._)("span",null,"Hospital: ",-1),Q=(0,l._)("span",null,"HBCU: ",-1),X=(0,l._)("span",null,"Tribal: ",-1),Y=(0,l._)("span",null,"Size and Setting: ",-1),tt=(0,l._)("span",null,"Religious affiliation: ",-1),nt=(0,l._)("span",null,"NCAA: ",-1),it=(0,l._)("span",null,"NAIA: ",-1),et=(0,l._)("span",null,"%reg DSPS: ",-1),lt=(0,l._)("span",null,"%admit: ",-1),at=(0,l._)("span",null,"COA in-state students : ",-1),st=(0,l._)("span",null,"COA out-of-state : ",-1),ut=(0,l._)("span",null,"Size range: ",-1),ot=(0,l._)("span",null,"Undergrad enrollment: ",-1),rt=(0,l._)("span",null,"%exclusively in distance education courses: ",-1),pt=(0,l._)("span",null,"%American Indian or Alaska Native: ",-1),ct=(0,l._)("span",null,"% undergrad Asian: ",-1),dt=(0,l._)("span",null,"%Black or African American: ",-1),_t=(0,l._)("span",null,"% Hispanic/Latino: ",-1),ft=(0,l._)("span",null,"%Native Hawaiian or Other Pacific Islander: ",-1),mt=(0,l._)("span",null,"% White: ",-1),wt=(0,l._)("span",null,"% two or more races: ",-1),gt=(0,l._)("span",null,"% Race/ethnicity unknown: ",-1),kt=(0,l._)("span",null,"%Nonresident Alien: ",-1),ht=(0,l._)("span",null,"%Asian/Native Hawaiian/Pacific Islander: ",-1),Dt=(0,l._)("span",null,"%women: ",-1),Ut=(0,l._)("span",null,"retention rate: ",-1),zt=(0,l._)("span",null,"Student-to-faculty ratio: ",-1),At=(0,l._)("span",null,"%undergraduates - in-state: ",-1),vt=(0,l._)("span",null,"%undergraduates - out-of-state: ",-1),St=(0,l._)("span",null,"%undergraduates - foreign countries: ",-1),yt=(0,l._)("span",null,"4yr grad rate: ",-1),bt=(0,l._)("span",null,"5 yr grad rate: ",-1),Tt=(0,l._)("span",null,"6 yr grad rate: ",-1),Ot=(0,l._)("span",null,"%undergraduates awarded federal grant aid: ",-1),Ct=(0,l._)("span",null,"Average amount of federal grant aid awarded to full-time first-time undergraduates: ",-1),It=(0,l._)("span",null,"% undergraduates awarded Pell grants: ",-1),Nt=(0,l._)("span",null,"%undergraduates awarded institutional grant aid: ",-1),xt=(0,l._)("span",null,"Average amount of institutional grant aid awarded to full-time first-time undergraduates: ",-1),Pt=(0,l._)("span",null,"Recommendations: ",-1),Wt=(0,l._)("span",null,"Admission test scores: ",-1),jt=(0,l._)("span",null,"TOEFL : ",-1),Rt=(0,l._)("span",null,"Applicants total: ",-1),Lt=(0,l._)("span",null,"Admissions total: ",-1),Mt=(0,l._)("span",null,"Enrolled men: ",-1),Et=(0,l._)("span",null,"Enrolled women: ",-1),Bt=(0,l._)("span",null,"Percent admitted : ",-1),Ht=(0,l._)("span",null,"Interview: ",-1),Jt=(0,l._)("span",null,"Demonstrated Interest: ",-1),Ft=(0,l._)("span",null,"% in Greek Life: ",-1),Vt=(0,l._)("span",null,"% Undergrads living on campus: ",-1),Zt=(0,l._)("h3",null,"Links: ",-1),Gt=["href"],$t=["href"],qt=["href"],Kt=["href"],Qt=["href"],Xt=["href"];function Yt(t,n,i,e,a,s){const u=(0,l.up)("v-col"),o=(0,l.up)("v-row"),r=(0,l.up)("v-container");return(0,l.wg)(),(0,l.j4)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",S,[(0,l._)("h1",null,(0,v.zw)(a.institutionDetail["institution name"]),1),(0,l._)("div",y,[(0,l._)("p",null,[b,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail["State"]),1)]),(0,l._)("p",null,[T,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail["Sector"]),1)]),(0,l._)("p",null,[O,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail[" Urban-centric locale"]),1)])]),(0,l._)("div",C,[(0,l._)("p",I,[N,(0,l.Uk)((0,v.zw)(a.institutionDetail["Mission statement"]),1)]),(0,l._)("p",x,[P,(0,l.Uk)((0,v.zw)(a.institutionDetail["About"]),1)])]),(0,l.Wm)(o,{class:"mt-6"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{cols:"6"},{default:(0,l.w5)((()=>[(0,l._)("section",W,[j,(0,l._)("p",null,[R,(0,l.Uk)((0,v.zw)(a.institutionDetail["%enrolled submitted test score"]),1)]),(0,l.Wm)(o,{style:{"margin-top":"24px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{cols:"6"},{default:(0,l.w5)((()=>[L,(0,l._)("p",null,[M,(0,l.Uk)((0,v.zw)(a.institutionDetail["%submitting SAT scores"]),1)]),(0,l._)("p",null,[E,(0,l.Uk)((0,v.zw)(a.institutionDetail["SAT EBRW 25th percentile score"]),1)]),(0,l._)("p",null,[B,(0,l.Uk)((0,v.zw)(a.institutionDetail["SAT EBRW 75th percentile score"]),1)]),(0,l._)("p",null,[H,(0,l.Uk)((0,v.zw)(a.institutionDetail["SAT 50th%ile"]),1)]),(0,l._)("p",null,[J,(0,l.Uk)((0,v.zw)(a.institutionDetail["SAT Math 25th percentile score"]),1)]),(0,l._)("p",null,[F,(0,l.Uk)((0,v.zw)(a.institutionDetail["SAT Math 75th percentile score"]),1)])])),_:1}),(0,l.Wm)(u,{cols:"6"},{default:(0,l.w5)((()=>[V,(0,l._)("p",null,[Z,(0,l.Uk)((0,v.zw)(a.institutionDetail["% submitting ACT scores"]),1)]),(0,l._)("p",null,[G,(0,l.Uk)((0,v.zw)(a.institutionDetail["ACT Composite 25th percentile score"]),1)]),(0,l._)("p",null,[$,(0,l.Uk)((0,v.zw)(a.institutionDetail["ACT Composite 75th percentile score"]),1)]),(0,l._)("p",null,[q,(0,l.Uk)((0,v.zw)(a.institutionDetail["ACT 50th%ile"]),1)])])),_:1})])),_:1})]),(0,l._)("p",null,[K,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail["Has hospital"]),1)]),(0,l._)("p",null,[Q,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail["HBCU"]),1)]),(0,l._)("p",null,[X,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail["Tribal"]),1)]),(0,l._)("p",null,[Y,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail["Size and Setting"]),1)]),(0,l._)("p",null,[tt,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail["Religious affiliation"]),1)]),(0,l._)("p",null,[nt,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail["NCAA"]),1)]),(0,l._)("p",null,[it,(0,l.Uk)(" "+(0,v.zw)(a.institutionDetail["NAIA"]),1)]),(0,l._)("p",null,[et,(0,l.Uk)((0,v.zw)(a.institutionDetail["%reg DSPS"]),1)]),(0,l._)("p",null,[lt,(0,l.Uk)((0,v.zw)(a.institutionDetail["%admit"]),1)]),(0,l._)("p",null,[at,(0,l.Uk)((0,v.zw)(a.institutionDetail["COA in-state students "]),1)]),(0,l._)("p",null,[st,(0,l.Uk)((0,v.zw)(a.institutionDetail["COA out-of-state "]),1)]),(0,l._)("p",null,[ut,(0,l.Uk)((0,v.zw)(a.institutionDetail["Size range"]),1)]),(0,l._)("p",null,[ot,(0,l.Uk)((0,v.zw)(a.institutionDetail["Undergrad enrollment"]),1)]),(0,l._)("p",null,[rt,(0,l.Uk)((0,v.zw)(a.institutionDetail["%exclusively in distance education courses"]),1)]),(0,l._)("p",null,[pt,(0,l.Uk)((0,v.zw)(a.institutionDetail["%American Indian or Alaska Native"]),1)]),(0,l._)("p",null,[ct,(0,l.Uk)((0,v.zw)(a.institutionDetail["% undergrad Asian"]),1)]),(0,l._)("p",null,[dt,(0,l.Uk)((0,v.zw)(a.institutionDetail["%Black or African American"]),1)]),(0,l._)("p",null,[_t,(0,l.Uk)((0,v.zw)(a.institutionDetail["% Hispanic/Latino"]),1)]),(0,l._)("p",null,[ft,(0,l.Uk)((0,v.zw)(a.institutionDetail["%Native Hawaiian or Other Pacific Islander"]),1)]),(0,l._)("p",null,[mt,(0,l.Uk)((0,v.zw)(a.institutionDetail["% White"]),1)]),(0,l._)("p",null,[wt,(0,l.Uk)((0,v.zw)(a.institutionDetail["% two or more races"]),1)]),(0,l._)("p",null,[gt,(0,l.Uk)((0,v.zw)(a.institutionDetail["% Race/ethnicity unknown"]),1)]),(0,l._)("p",null,[kt,(0,l.Uk)((0,v.zw)(a.institutionDetail["%Nonresident Alien"]),1)]),(0,l._)("p",null,[ht,(0,l.Uk)((0,v.zw)(a.institutionDetail["%Asian/Native Hawaiian/Pacific Islander"]),1)]),(0,l._)("p",null,[Dt,(0,l.Uk)((0,v.zw)(a.institutionDetail["%women"]),1)]),(0,l._)("p",null,[Ut,(0,l.Uk)((0,v.zw)(a.institutionDetail["retention rate"]),1)]),(0,l._)("p",null,[zt,(0,l.Uk)((0,v.zw)(a.institutionDetail["Student-to-faculty ratio"]),1)]),(0,l._)("p",null,[At,(0,l.Uk)((0,v.zw)(a.institutionDetail["%undergraduates - in-state"]),1)]),(0,l._)("p",null,[vt,(0,l.Uk)((0,v.zw)(a.institutionDetail["%undergraduates - out-of-state"]),1)]),(0,l._)("p",null,[St,(0,l.Uk)((0,v.zw)(a.institutionDetail["%undergraduates - foreign countries"]),1)]),(0,l._)("p",null,[yt,(0,l.Uk)((0,v.zw)(a.institutionDetail["4yr grad rate"]),1)]),(0,l._)("p",null,[bt,(0,l.Uk)((0,v.zw)(a.institutionDetail["5 yr grad rate"]),1)]),(0,l._)("p",null,[Tt,(0,l.Uk)((0,v.zw)(a.institutionDetail["6 yr grad rate"]),1)]),(0,l._)("p",null,[Ot,(0,l.Uk)((0,v.zw)(a.institutionDetail["%undergraduates awarded federal grant aid"]),1)]),(0,l._)("p",null,[Ct,(0,l.Uk)((0,v.zw)(a.institutionDetail["Average amount of federal grant aid awarded to full-time first-time undergraduates"]),1)]),(0,l._)("p",null,[It,(0,l.Uk)((0,v.zw)(a.institutionDetail["% undergraduates awarded Pell grants"]),1)]),(0,l._)("p",null,[Nt,(0,l.Uk)((0,v.zw)(a.institutionDetail["%undergraduates awarded institutional grant aid"]),1)]),(0,l._)("p",null,[xt,(0,l.Uk)((0,v.zw)(a.institutionDetail["Average amount of institutional grant aid awarded to full-time first-time undergraduates"]),1)]),(0,l._)("p",null,[Pt,(0,l.Uk)((0,v.zw)(a.institutionDetail["Recommendations"]),1)]),(0,l._)("p",null,[Wt,(0,l.Uk)((0,v.zw)(a.institutionDetail["Admission test scores"]),1)]),(0,l._)("p",null,[jt,(0,l.Uk)((0,v.zw)(a.institutionDetail["TOEFL "]),1)]),(0,l._)("p",null,[Rt,(0,l.Uk)((0,v.zw)(a.institutionDetail["Applicants total"]),1)]),(0,l._)("p",null,[Lt,(0,l.Uk)((0,v.zw)(a.institutionDetail["Admissions total"]),1)]),(0,l._)("p",null,[Mt,(0,l.Uk)((0,v.zw)(a.institutionDetail["Enrolled  men"]),1)]),(0,l._)("p",null,[Et,(0,l.Uk)((0,v.zw)(a.institutionDetail["Enrolled  women"]),1)]),(0,l._)("p",null,[Bt,(0,l.Uk)((0,v.zw)(a.institutionDetail["Percent admitted "]),1)]),(0,l._)("p",null,[Ht,(0,l.Uk)((0,v.zw)(a.institutionDetail["Interview"]),1)]),(0,l._)("p",null,[Jt,(0,l.Uk)((0,v.zw)(a.institutionDetail["Demonstrated Interest"]),1)]),(0,l._)("p",null,[Ft,(0,l.Uk)((0,v.zw)(a.institutionDetail["% in Greek Life"]),1)]),(0,l._)("p",null,[Vt,(0,l.Uk)((0,v.zw)(a.institutionDetail["% Undergrads living on campus"]),1)])])),_:1}),(0,l.Wm)(u,{cols:"2"},{default:(0,l.w5)((()=>[Zt,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Admissions Link"]},"Admissions",8,Gt)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Application Link"]},"Application",8,$t)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Financial Aid Link"]},"Financial Aid",8,qt)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Net Price Calculator Link"]},"Net Price Calculator",8,Kt)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["DSPS Link"]},"Disability Services",8,Qt)]),(0,l._)("li",null,[(0,l._)("a",{target:"_blank",href:a.institutionDetail["Mission statement link"]},"Mission statement",8,Xt)])])])),_:1})])),_:1})])])),_:1})}var tn={name:"institutionDetail",data(){return{institutionDetail:{},links:{}}},computed:{},methods:{getInstitution(){this.institutionDetail=JSON.parse(localStorage.getItem("institutionDetail"))}},beforeMount(){this.getInstitution()}};const nn=(0,o.Z)(tn,[["render",Yt]]);var en=nn;const ln=[{path:"/",name:"home",component:A},{path:"/institution/:name",name:"institutionDetail",component:en}],an=(0,c.p7)({history:(0,c.PO)(),routes:ln,scrollBehavior(t,n,i){return i||{top:0}}}),sn=(0,e.ri)(p);sn.use(an);const un=(0,d.Rd)({components:{..._,...f},directives:m,icons:{defaultSet:"mdi",aliases:w.j,sets:{mdi:w.t}}});sn.use(un),sn.mount("#app")}},n={};function i(e){var l=n[e];if(void 0!==l)return l.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(n,e,l,a){if(!e){var s=1/0;for(p=0;p<t.length;p++){e=t[p][0],l=t[p][1],a=t[p][2];for(var u=!0,o=0;o<e.length;o++)(!1&a||s>=a)&&Object.keys(i.O).every((function(t){return i.O[t](e[o])}))?e.splice(o--,1):(u=!1,a<s&&(s=a));if(u){t.splice(p--,1);var r=l();void 0!==r&&(n=r)}}return n}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[e,l,a]}}(),function(){i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,{a:n}),n}}(),function(){i.d=function(t,n){for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(n){return 0===t[n]};var n=function(n,e){var l,a,s=e[0],u=e[1],o=e[2],r=0;if(s.some((function(n){return 0!==t[n]}))){for(l in u)i.o(u,l)&&(i.m[l]=u[l]);if(o)var p=o(i)}for(n&&n(e);r<s.length;r++)a=s[r],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(p)},e=self["webpackChunkcollege_counselor"]=self["webpackChunkcollege_counselor"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(5345)}));e=i.O(e)})();
//# sourceMappingURL=app.df3ba1b0.js.map