import{b as L,e as K,g as V}from"./chunk-MSRKEDA3.js";import{E as u,F as h,I as _,L as W,O as Y,U as G,c as T,d as z,e as O,h as Q,k as j}from"./chunk-2YF2VIIO.js";import{c as B,d,e as c,g as n,i as m,j as l}from"./chunk-3PKXA2GJ.js";import{$ as v,Ba as C,Cb as X,Lb as N,T as g,Ua as S,V as y,Va as w,Xa as M,Za as F,_a as P,dc as E,ea as A,ia as b,ja as I,jb as R,nb as x,ob as D,pb as k}from"./chunk-JRU3JP26.js";var U=[{path:"",redirectTo:"auth",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-5W36IPO5.js").then(o=>o.AuthModule)},{path:"admin",loadChildren:()=>import("./chunk-HUF7X6DH.js").then(o=>o.AdminModule),data:{animation:"Admin"}},{path:"profesional",loadChildren:()=>import("./chunk-4EMU76G4.js").then(o=>o.ProfesionalModule)},{path:"paciente",loadChildren:()=>import("./chunk-Q6X73KXS.js").then(o=>o.PacienteModule)}];var te="@",ie=(()=>{let e=class e{constructor(i,r,s,a,p){this.doc=i,this.delegate=r,this.zone=s,this.animationType=a,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=v(w,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-JLNYGPNC.js")).catch(r=>{throw new g(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let a=new s(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(i,r){let s=this.delegate.createRenderer(i,r);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let a=new f(s);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let $=p.createRenderer(i,r);a.use($)}).catch(p=>{a.use(s)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){S()},e.\u0275prov=y({token:e,factory:e.\u0275fac});let o=e;return o})(),f=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,i,r){this.delegate.insertBefore(e,t,i,r)}removeChild(e,t,i){this.delegate.removeChild(e,t,i)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,i)),this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,i)),this.delegate.listen(e,t,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(te)}};function q(o="animations"){return F("NgAsyncAnimations"),b([{provide:M,useFactory:(e,t,i)=>new ie(e,t,i,o),deps:[E,z,P]},{provide:C,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var H={providers:[j(U),L({timeOut:3e3,preventDuplicates:!0}),I(T),u(()=>h({projectId:"clinicaonline-cdb52",appId:"1:588740852376:web:21f79ec97d0962e8596eed",storageBucket:"clinicaonline-cdb52.appspot.com",apiKey:"AIzaSyCgztXx3s3WG4-fQQ6L_bCTa19Yk1sSl7Q",authDomain:"clinicaonline-cdb52.firebaseapp.com",messagingSenderId:"588740852376"})),_(()=>W()),u(()=>h({projectId:"clinicaonline-cdb52",appId:"1:588740852376:web:21f79ec97d0962e8596eed",storageBucket:"clinicaonline-cdb52.appspot.com",apiKey:"AIzaSyCgztXx3s3WG4-fQQ6L_bCTa19Yk1sSl7Q",authDomain:"clinicaonline-cdb52.firebaseapp.com",messagingSenderId:"588740852376"})),Y(()=>G()),u(()=>h({projectId:"clinicaonline-cdb52",appId:"1:588740852376:web:21f79ec97d0962e8596eed",storageBucket:"clinicaonline-cdb52.appspot.com",apiKey:"AIzaSyCgztXx3s3WG4-fQQ6L_bCTa19Yk1sSl7Q",authDomain:"clinicaonline-cdb52.firebaseapp.com",messagingSenderId:"588740852376"})),K(()=>V()),q()]};var Z=B("routeAnimations",[m("Bienvenido => *",[l(":enter, :leave",n({position:"fixed",width:"100%"}),{optional:!0}),c([l(":enter",[n({transform:"translateX(100%)"}),d("0.5s ease-in-out",n({transform:"translateX(0%)"}))],{optional:!0}),l(":leave",[n({transform:"translateX(0%)"}),d("0.5s ease-in-out",n({transform:"translateX(-100%)"}))],{optional:!0})])]),m("* => Bienvenido",[l(":enter, :leave",n({position:"fixed",width:"100%"}),{optional:!0}),c([l(":enter",[n({transform:"translateX(-100%)"}),d("0.5s ease-in-out",n({transform:"translateX(0%)"}))],{optional:!0}),l(":leave",[n({transform:"translateX(0%)"}),d("0.5s ease-in-out",n({transform:"translateX(100%)"}))],{optional:!0})])]),m("Login => Admin",[l(":enter, :leave",n({position:"fixed",width:"100%"}),{optional:!0}),c([l(":enter",[n({transform:"translateX(100%)"}),d("0.5s ease-in-out",n({transform:"translateX(0%)"}))],{optional:!0}),l(":leave",[n({transform:"translateX(0%)"}),d("0.5s ease-in-out",n({transform:"translateX(-100%)"}))],{optional:!0})])])]);var J=(()=>{let e=class e{constructor(){this.title="tp2clinicaonline",this.items=[{title:"Inicio",link:"/",active:!0},{title:"Admin",link:"/admin",active:!0}],this.itemAuth=[{title:"Acceso",link:"/auth/login",active:!1},{title:"Empezar",link:"/",active:!1,children:[{title:"Especialista",link:"/auth/altaProfesional",active:!0},{title:"Paciente",link:"/auth/altaPaciente",active:!1}]}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["app-root"]],standalone:!0,features:[N],decls:3,vars:1,consts:[["o","outlet"]],template:function(r,s){if(r&1&&(x(0,"div"),k(1,"router-outlet",null,0),D()),r&2){let a=X(2);R("@routeAnimations",a&&a.activatedRouteData&&a.activatedRouteData.animation)}},dependencies:[Q],data:{animation:[Z]}});let o=e;return o})();O(J,H).catch(o=>console.error(o));
