(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{336:function(t,e,n){"use strict";n.r(e);n(71);var o={data:{loading:!1},methods:{feedback2:function(t,e){this.$refs.feedback.innerHTML=t,this.$refs.feedback.style.color=e?"#ee0000":null},feedback:function(t){this.feedback2(t,!1)},resetPassword:function(){this.$refs.password.value=""},click:function(){var t=this;this.loading||(this.$refs.password.value.length<4?(this.feedback2(this.$t("sc.tooshort"),!0),setTimeout((function(){t.loading||t.feedback("")}),4e3)):(this.loading=!0,this.feedback(this.$t("sc.loading")),setTimeout((function(){t.feedback(t.$t("sc.processing")),setTimeout((function(){t.loading=!1,t.resetPassword(),t.feedback2(t.$t("sc.incorrect"),!0),setTimeout((function(){t.loading||t.feedback("")}),8e3)}),1792.5)}),2929)))}},created:function(){this.$pageInfo(this,"???","other")},destroyed:function(){this.$resetPageInfo(this)}},c=n(56),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Markdown",{attrs:{id:"other/other/other/58"}}),t._v(" "),n("p",{staticClass:"indent-0"},[t._v(t._s(t.$t("sc.enter"))+":")]),t._v(" "),n("input",{ref:"password",staticClass:"w-48",attrs:{type:"password",id:"test"}}),n("br"),t._v(" "),n("div",{staticClass:"flex flex-row"},[n("button",{staticClass:"border",attrs:{type:"button"},on:{click:function(e){return t.click()}}},[t._v(t._s(t.$t("sc.check")))]),t._v(" "),n("div",{ref:"feedback",staticClass:"my-auto"})]),t._v(" "),n("hr"),t._v(" "),n("Markdown",{attrs:{id:"other/other/other/sc-info"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Markdown:function(){return n.e(5).then(n.bind(null,341)).then((function(t){return t.default||t}))}})}}]);