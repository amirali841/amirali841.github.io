import{a as E,c as I}from"./chunk-CQF3O75Q.js";import{$ as u,$a as w,Ba as y,Ca as v,H as s,Ka as b,Pa as a,Y as f,Z as i,_a as x,gc as D,ia as h,ja as C,sa as c,ta as l,ua as g}from"./chunk-2GGFAOHP.js";import{a as m,b as p}from"./chunk-2QKSPLSF.js";var S=["*"],O=(()=>{let t=class t{constructor(o,e){this.document=o,this.renderer=e}themeColors(){Array.from(this.document.querySelectorAll(".theme-color")).forEach(o=>{let e=o,r=E("background-color",e)??"#fff",d=this.renderer.createElement("table");d.innerHTML=`
          <table class="table w-100">
            <tr>
              <td class="text-muted">HEX:</td>
              <td class="font-weight-bold">${I(r)}</td>
            </tr>
            <tr>
              <td class="text-muted">RGB:</td>
              <td class="font-weight-bold">${r}</td>
            </tr>
          </table>
        `,this.renderer.appendChild(e.parentNode,d)})}ngOnInit(){}ngAfterViewInit(){this.themeColors()}};t.\u0275fac=function(e){return new(e||t)(i(x),i(u))},t.\u0275cmp=s({type:t,selectors:[["ng-component"]],standalone:!0,features:[a],decls:5,vars:0,consts:[[1,"component-body"],[1,"row"],[1,"col-12"],[1,"d-flex","justify-content-center"]],template:function(e,r){e&1&&(c(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),b(4,"Demo 1"),l()()()())},encapsulation:2});let n=t;return n})(),$=(()=>{let t=class t{constructor(){this.color="",this.colorClasses={"theme-color w-75 rounded mb-3":!0},this.display="contents"}ngOnInit(){this.colorClasses=p(m({},this.colorClasses),{[`bg-${this.color}`]:!!this.color})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-theme-color"]],hostVars:2,hostBindings:function(e,r){e&2&&C("display",r.display)},inputs:{color:"color"},standalone:!0,features:[a],ngContentSelectors:S,decls:3,vars:1,consts:[["xl","2","md","4","sm","6","xs","12",1,"my-4","ms-4"],[2,"padding-top","75%",3,"ngClass"]],template:function(e,r){e&1&&(y(),c(0,"c-col",0),g(1,"div",1),v(2),l()),e&2&&(f(),h("ngClass",r.colorClasses))},dependencies:[D,w],encapsulation:2});let n=t;return n})();export{O as ColorsComponent,$ as ThemeColorComponent};
