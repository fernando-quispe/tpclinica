import{c as W,d as Y,e as $,f as K,g as te,h as ie}from"./chunk-UDRVFQQD.js";import"./chunk-MW66HLBM.js";import{o as q,p as G,q as J,t as X,v as Z,w as ee}from"./chunk-K4JVZO23.js";import{h as B,i as L,l as x}from"./chunk-2YF2VIIO.js";import"./chunk-WXI33M2S.js";import{Ab as z,Bb as R,Cb as j,Db as d,Eb as H,Lb as S,Oa as I,Pb as N,Qa as U,Sa as c,Ta as _,W as g,e as A,ea as v,fa as C,hb as P,jb as s,lb as b,lc as V,mc as D,nb as r,oa as O,ob as a,oc as Q,pa as k,pb as l,qa as w,sb as E,ub as p,vb as M,yb as T,zb as F}from"./chunk-JRU3JP26.js";var ne=(()=>{let e=class e{constructor(){this.items=[],this.items=[{title:"Usuarios",link:"inicio",active:!1},{title:"Mi Perfil",link:"mi-perfil",active:!1},{title:"Turnos",link:"mis-turnos",active:!1},{title:"Solicitar Turnos",link:"solicitar-turno",active:!1},{title:"Seccion Paciente",link:"seccion-paciente",active:!1}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=v({type:e,selectors:[["app-admin"]],standalone:!0,features:[S],decls:2,vars:1,consts:[[3,"items"]],template:function(i,n){i&1&&(r(0,"app-layout",0),l(1,"router-outlet"),a()),i&2&&s("items",n.items)},dependencies:[J,B]});let t=e;return t})();var re=["scrollContainer"];function ae(t,e){t&1&&(r(0,"div"),l(1,"app-alta-pacientes"),a())}function ce(t,e){t&1&&(r(0,"div"),l(1,"app-alta-profesionales"),a())}function se(t,e){t&1&&(r(0,"div"),l(1,"app-alta-admin"),a())}function le(t,e){if(t&1&&l(0,"img",18),t&2){let f=M().$implicit;T("src",f.imagen,I)}}function me(t,e){t&1&&(w(),r(0,"svg",19)(1,"title"),d(2,"Placeholder"),a(),l(3,"rect",20),r(4,"text",21),d(5,"140x140"),a()())}function pe(t,e){if(t&1){let f=E();r(0,"div",15)(1,"button",16),p("click",function(){O(f);let i=M();return k(i.descargarExcel())}),P(2,le,1,1,"img",17)(3,me,6,0,"ng-template",null,0,N),r(5,"div")(6,"h2"),d(7),a()()()()}if(t&2){let f=e.$implicit,o=j(4);c(),s("@slideIn",void 0),c(),s("ngIf",f.imagen)("ngIfElse",o),c(5),H(f.nombre)}}var h=(()=>{let e=class e{constructor(o,i,n){this.clinicaFire=o,this.auth=i,this.router=n,this.profPendientes=[],this.isClienteActive=!0,this.isProfesionalActive=!1,this.isAdmin=!1,this.items=[{title:"Inicio",link:"/",active:!0},{title:"Admin",link:"/admin",active:!0}]}logout(){this.auth.logout().then(()=>{this.router.navigate(["/auth"])})}ngOnInit(){this.clinicaFire.getProfesionales().subscribe(o=>{this.profPendientes=o}),this.clinicaFire.getUsuarios().subscribe(o=>{this.usuarios=o})}onAceptarRechazar(o,i){return A(this,null,function*(){yield this.clinicaFire.updateProfesional(o,i)})}mostrarClienteComponent(){this.isClienteActive=!0,this.isProfesionalActive=!1,this.isAdmin=!1}mostrarProfesionalComponent(){this.isClienteActive=!1,this.isProfesionalActive=!0,this.isAdmin=!1}mostrarAdminComponent(){this.isAdmin=!0,this.isClienteActive=!1,this.isProfesionalActive=!1}onScroll(o){let i=o.target;i.scrollTop+i.clientHeight>=i.scrollHeight}descargarExcel(){}};e.\u0275fac=function(i){return new(i||e)(_(G),_(q),_(L))},e.\u0275cmp=v({type:e,selectors:[["app-seccion-usuario"]],viewQuery:function(i,n){if(i&1&&F(re,5),i&2){let m;z(m=R())&&(n.scrollContainer=m.first)}},hostBindings:function(i,n){i&1&&p("scroll",function(u){return n.onScroll(u)},!1,U)},standalone:!0,features:[S],decls:29,vars:11,consts:[["placeholder",""],[1,"scroll-container",3,"scroll"],[1,"container"],[1,"border-bottom","pb-2","mt-4","text-center",2,"color","aliceblue"],[1,"card"],[1,"card-header"],[1,"nav","nav-tabs","card-header-tabs"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"card-body"],[4,"ngIf"],[3,"onAceptarRechazar","profPendientes"],[1,"container","marketing"],[1,"row"],["class","col-2",4,"ngFor","ngForOf"],[1,"col-2"],[1,"button-img",3,"click"],["class","bd-placeholder-img rounded-circle","width","140","height","140","alt","Paciente Image",3,"src",4,"ngIf","ngIfElse"],["width","140","height","140","alt","Paciente Image",1,"bd-placeholder-img","rounded-circle",3,"src"],["width","140","height","140","xmlns","http://www.w3.org/2000/svg","role","img","aria-label","Placeholder: 140x140","preserveAspectRatio","xMidYMid slice","focusable","false",1,"bd-placeholder-img","rounded-circle"],["width","100%","height","100%","fill","#777"],["x","50%","y","50%","fill","#777","dy",".3em"]],template:function(i,n){i&1&&(r(0,"div",1),p("scroll",function(u){return n.onScroll(u)}),r(1,"div",2)(2,"h2",3),d(3,"Alta de Usuarios"),a(),r(4,"div",4)(5,"div",5)(6,"ul",6)(7,"li",7)(8,"a",8),p("click",function(){return n.mostrarClienteComponent()}),d(9,"Paciente"),a()(),r(10,"li",7)(11,"a",8),p("click",function(){return n.mostrarProfesionalComponent()}),d(12,"Profesional"),a()(),r(13,"li",7)(14,"a",8),p("click",function(){return n.mostrarAdminComponent()}),d(15,"Administrador"),a()()()(),r(16,"div",9),P(17,ae,2,0,"div",10)(18,ce,2,0,"div",10)(19,se,2,0,"div",10),a()()(),r(20,"app-prof-pendientes",11),p("onAceptarRechazar",function(u){return n.onAceptarRechazar(u.id,u.value)}),a(),l(21,"br")(22,"br"),r(23,"div",12)(24,"div",13),P(25,pe,8,4,"div",14),a()(),l(26,"br")(27,"br")(28,"br"),a()),i&2&&(c(8),b("active",n.isClienteActive),c(3),b("active",n.isProfesionalActive),c(3),b("active",n.isAdmin),c(3),s("ngIf",n.isClienteActive),c(),s("ngIf",n.isProfesionalActive),c(),s("ngIf",n.isAdmin),c(),s("profPendientes",n.profPendientes),c(5),s("ngForOf",n.usuarios))},dependencies:[V,D,Y,K,$,W],styles:["a[_ngcontent-%COMP%]{cursor:pointer}body[_ngcontent-%COMP%]{font-size:.875rem}.feather[_ngcontent-%COMP%]{width:16px;height:16px;vertical-align:text-bottom}.sidebar[_ngcontent-%COMP%]{position:fixed;top:0;bottom:0;left:0;z-index:100;padding:48px 0 0;box-shadow:inset -1px 0 #0000001a}@media (max-width: 767.98px){.sidebar[_ngcontent-%COMP%]{top:5rem}}.sidebar-sticky[_ngcontent-%COMP%]{position:relative;top:0;height:calc(100vh - 48px);padding-top:.5rem;overflow-x:hidden;overflow-y:auto}.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-weight:500;color:#333}.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%]{margin-right:4px;color:#727272}.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#2470dc}.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%]{color:inherit}.sidebar-heading[_ngcontent-%COMP%]{font-size:.75rem;text-transform:uppercase}.navbar-brand[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem;font-size:1rem;background-color:#00000040;box-shadow:inset -1px 0 #00000040}.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]{top:.25rem;right:1rem}.navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding:.75rem 1rem;border-width:0;border-radius:0}.form-control-dark[_ngcontent-%COMP%]{color:#fff;background-color:#ffffff1a;border-color:#ffffff1a}.form-control-dark[_ngcontent-%COMP%]:focus{border-color:transparent;box-shadow:0 0 0 3px #ffffff40}.button-img[_ngcontent-%COMP%]{background:transparent;border:none;color:#fff}"]});let t=e;return t})();var de=[{path:"",component:ne,children:[{path:"",component:h},{path:"inicio",component:h},{path:"mi-perfil",component:X},{path:"mis-turnos",component:Z},{path:"solicitar-turno",component:ee},{path:"seccion-paciente",component:te}]}],oe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=C({type:e}),e.\u0275inj=g({imports:[x.forChild(de),x]});let t=e;return t})();var Ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=C({type:e}),e.\u0275inj=g({imports:[Q,oe,ie,h]});let t=e;return t})();export{Ve as AdminModule};
