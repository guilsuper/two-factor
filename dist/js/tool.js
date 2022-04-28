(()=>{var t,e={523:(t,e,o)=>{Nova.booting((function(t,e,n){e.addRoutes([{name:"nova-two-factor",path:"/nova-two-factor",component:o(444).Z}])}))},429:()=>{},444:(t,e,o)=>{"use strict";o.d(e,{Z:()=>a});var n=function(t,e,o,n,a,s,r,i){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=o,d._compiled=!0),n&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):a&&(c=i?function(){a.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(t,e){return c.call(e),u(t,e)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:d}}({data:function(){return{twofa:[],form:{},status:null,loading:!0}},mounted:function(){this.getStatus(),this.getRecoveryCodes()},methods:{getStatus:function(){var t=this;Nova.request().get("/nova-vendor/nova-two-factor/status").then((function(e){t.status=e.data,t.loading=!1}))},getRecoveryCodes:function(){var t=this;Nova.request().get("/nova-vendor/nova-two-factor/register").then((function(e){t.twofa=e.data}))},toggle:function(){var t=this;Nova.request().post("/nova-vendor/nova-two-factor/toggle",{status:this.status.enabled}).then((function(e){t.$toasted.show(e.data.message,{type:"success"})}))},confirmOtp:function(){var t=this;Nova.request().post("/nova-vendor/nova-two-factor/confirm",this.form).then((function(e){t.$toasted.show(e.data.message,{type:"success"}),t.getStatus()})).catch((function(e){t.$toasted.show(e.response.data.message,{type:"error"})}))},autoSubmit:function(){6===this.form.otp.length&&this.confirmOtp()},downloadAsText:function(t,e){var o=document.createElement("a");o.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),o.setAttribute("download",t),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("loading-view",{attrs:{loading:t.loading}},[o("heading",{staticClass:"mb-6"},[t._v("Two factor auth (Google 2FA)")]),t._v(" "),o("loading-card",{staticClass:"card",staticStyle:{"max-width":"600px"},attrs:{loading:!0}},[1==t.status.confirmed?o("div",{staticClass:"p-3"},[o("p",{staticClass:"mb-4"},[t._v("\n        Update your two factor security settings\n      ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.status.enabled,expression:"status.enabled"}],attrs:{type:"radio",name:"status",id:"s1"},domProps:{value:1,checked:t._q(t.status.enabled,1)},on:{change:function(e){return t.$set(t.status,"enabled",1)}}}),t._v(" "),o("label",{attrs:{for:"s1"}},[t._v("Enable")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.status.enabled,expression:"status.enabled"}],attrs:{type:"radio",name:"status",id:"s2"},domProps:{value:0,checked:t._q(t.status.enabled,0)},on:{change:function(e){return t.$set(t.status,"enabled",0)}}}),t._v(" "),o("label",{attrs:{for:"s2"}},[t._v("Disabled")]),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"btn btn-default btn-primary mt-2",on:{click:t.toggle}},[t._v("Update settings")])]):o("div",{staticClass:"p-3"},[o("p",{staticClass:"p-2"},[t._v("Two factor authentication (2FA) strengthens access security by requiring two methods (also\n        referred\n        to as factors) to verify your identity. Two factor authentication protects against phishing, social\n        engineering and password brute force attacks and secures your logins from attackers exploiting weak\n        or stolen credentials.")]),t._v(" "),o("h3",{staticClass:"p-3 my-4"},[t._v("Recovery codes")]),t._v(" "),o("p",{staticClass:"p-2"},[t._v("\n        Recovery codes are used to access your account in the event you cannot recive two-factor\n        authentication codes.\n      ")]),t._v(" "),o("p",{staticClass:"p-2 no-print"},[o("strong",[t._v("\n          1) Download, print or copy your codes before continuing two-factor authentication setup.\n        ")])]),t._v(" "),o("div",{staticClass:"text-center my-2 p-3 rec-box text-red-900"},[o("h2",[t._v(t._s(t.twofa.recovery))]),t._v(" "),o("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.downloadAsText("recover_code.txt",t.twofa.recovery)}}},[t._v("Download")])]),t._v(" "),o("div",{staticClass:"p-3"},[o("p",[o("strong",[t._v("2) Scan this QR code using Google authenticator to setup & enter OTP to activate 2FA")])]),t._v(" "),o("div",{staticClass:"text-center"},[o("img",{attrs:{width:"150",src:t.twofa.google2fa_url,alt:"qr_code"}})]),t._v(" "),o("br"),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.otp,expression:"form.otp"}],staticClass:"w-full form-control form-input form-input-bordered mb-2",attrs:{placeholder:"Enter OTP here",type:"text"},domProps:{value:t.form.otp},on:{keyup:function(e){return t.autoSubmit()},input:function(e){e.target.composing||t.$set(t.form,"otp",e.target.value)}}}),t._v(" "),o("button",{staticClass:"btn btn-default btn-primary",on:{click:t.confirmOtp}},[t._v("Activate 2FA")])])])])],1)}),[],!1,null,null,null);const a=n.exports}},o={};function n(t){var a=o[t];if(void 0!==a)return a.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.m=e,t=[],n.O=(e,o,a,s)=>{if(!o){var r=1/0;for(u=0;u<t.length;u++){for(var[o,a,s]=t[u],i=!0,c=0;c<o.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((t=>n.O[t](o[c])))?o.splice(c--,1):(i=!1,s<r&&(r=s));if(i){t.splice(u--,1);var d=a();void 0!==d&&(e=d)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,a,s]},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={103:0,990:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var a,s,[r,i,c]=o,d=0;if(r.some((e=>0!==t[e]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var u=c(n)}for(e&&e(o);d<r.length;d++)s=r[d],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})(),n.O(void 0,[990],(()=>n(523)));var a=n.O(void 0,[990],(()=>n(429)));a=n.O(a)})();