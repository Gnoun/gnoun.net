(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{361:function(t,l,e){"use strict";e.r(l);e(30),e(17),e(39),e(19),e(20),e(40),e(41);var n=e(8),v=e(3);e(38),e(145),e(11),e(24),e(31),e(69),e(107);function r(t,l){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,l){if(!t)return;if("string"==typeof t)return o(t,l);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,l)}(t))||l&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var v,r=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return r=t.done,t},e:function(t){d=!0,v=t},f:function(){try{r||null==e.return||e.return()}finally{if(d)throw v}}}}function o(t,l){(null==l||l>t.length)&&(l=t.length);for(var i=0,e=new Array(l);i<l;i++)e[i]=t[i];return e}var d={created:function(){this.$pageInfo(this,"Math Tools","math")},destroyed:function(){this.$resetPageInfo(this)},data:function(){return{values:{frac:{p1:null,p2:null,result1:Number.NaN,result2:Number.NaN},gcf:{p1:null,p2:null,result:null},lcm:{p1:null,p2:null,result:null},degtorad:{result:null},radtodeg:{result:null},magnitude:{p1:null,p2:null,result:null},vctp:{p1:null,p2:null,result1:null,result2:null},vptc:{p1:null,p2:null,result1:null,result2:null},dbp:{p1:null,p2:null,p3:null,p4:null,result:null},midp:{p1:null,p2:null,p3:null,p4:null,result1:null,result2:null},dbl:{p1:null,p2:null,p3:null,p4:null,p5:null,p6:null,p7:null,result1:null,result2:null},dblap:{p1:null,p2:null,p3:null,p4:null,p5:null,result:null},cpd:{p1:null,p2:null,p3:null,p4:null,result1:null,result2:null},cpdp:{p1:null,p2:null,p3:null,p4:null,result1:null,result2:null},crtp:{p1:null,p2:null,result1:null,result2:null},cptr:{p1:null,p2:null,result1:null,result2:null}}}},methods:{ns2:function(t){},ns8:function(t){},ns10:function(t){},ns16:function(t){},frac1:function(t){this.values.frac.p1=t,this.frac()},frac2:function(t){this.values.frac.p2=t,this.frac()},frac:function(){var t=this.gcfInternal(this.values.frac.p1,this.values.frac.p2);this.values.frac.result1=this.values.frac.p1/t,this.values.frac.result2=this.values.frac.p2/t},gcf1:function(t){this.values.gcf.p1=t,this.gcf()},gcf2:function(t){this.values.gcf.p2=t,this.gcf()},gcf:function(){this.values.gcf.result=this.gcfInternal(this.values.gcf.p1,this.values.gcf.p2)},gcfInternal:function(t,l){if(null==t||null==l)return null;if(0==t)return l;if(0==l)return t;var e=t%l;return this.gcfInternal(l,e)},lcm1:function(t){this.values.lcm.p1=t,this.lcm()},lcm2:function(t){this.values.lcm.p2=t,this.lcm()},lcm:function(){this.values.lcm.result=this.values.lcm.p1*this.values.lcm.p2/this.gcfInternal(this.values.lcm.p1,this.values.lcm.p2)},deg:function(t){this.values.degtorad.result=t/180},rad:function(t){this.values.radtodeg.result=180*t},mag1:function(t){this.values.magnitude.p1=t,this.magnitude()},mag2:function(t){this.values.magnitude.p2=t,this.magnitude()},magnitude:function(){this.values.magnitude.result=Math.sqrt(Math.pow(this.values.magnitude.p1,2)+Math.pow(this.values.magnitude.p2,2))},vctp1:function(t){this.values.vctp.p1=t,this.vctp()},vctp2:function(t){this.values.vctp.p2=t,this.vctp()},vctp:function(){this.values.vctp.result1=Math.sqrt(Math.pow(this.values.vctp.p1,2)+Math.pow(this.values.vctp.p2,2)),this.values.vctp.p1>0&&this.values.vctp.p2>0?this.values.vctp.result2=180*Math.atan(this.values.vctp.p2/this.values.vctp.p1)/Math.PI:this.values.vctp.p1>0&&this.values.vctp.p2<0?this.values.vctp.result2=180*Math.atan(this.values.vctp.p2/this.values.vctp.p1)/Math.PI+360:this.values.vctp.result2=180*Math.atan(this.values.vctp.p2/this.values.vctp.p1)/Math.PI+180},vptc1:function(t){this.values.vptc.p1=t,this.vptc()},vptc2:function(t){this.values.vptc.p2=t,this.vptc()},vptc:function(){this.values.vptc.result1=this.values.vptc.p1*Math.cos(this.values.vptc.p2*Math.PI/180),this.values.vptc.result2=this.values.vptc.p1*Math.sin(this.values.vptc.p2*Math.PI/180)},dbp1:function(t){this.values.dbp.p1=t,this.dbp()},dbp2:function(t){this.values.dbp.p2=t,this.dbp()},dbp3:function(t){this.values.dbp.p3=t,this.dbp()},dbp4:function(t){this.values.dbp.p4=t,this.dbp()},dbp:function(){this.values.dbp.result=Math.sqrt(Math.pow(this.values.dbp.p3-this.values.dbp.p1,2)+Math.pow(this.values.dbp.p4-this.values.dbp.p2,2))},midp1:function(t){this.values.midp.p1=t,this.midp()},midp2:function(t){this.values.midp.p2=t,this.midp()},midp3:function(t){this.values.midp.p3=t,this.midp()},midp4:function(t){this.values.midp.p4=t,this.midp()},midp:function(){this.values.midp.result1=(parseFloat(this.values.midp.p1)+parseFloat(this.values.midp.p3))/2,this.values.midp.result2=(parseFloat(this.values.midp.p2)+parseFloat(this.values.midp.p4))/2},dbl1:function(t){this.values.dbl.p1=t,this.dblR1()},dbl2:function(t){this.values.dbl.p2=t,this.dblR1()},dbl3:function(t){this.values.dbl.p3=t,this.dblR1()},dbl4:function(t){this.values.dbl.p4=t,this.dblR2()},dbl5:function(t){this.values.dbl.p5=t,this.dblR2()},dbl6:function(t){this.values.dbl.p6=t,this.dblR2()},dbl7:function(t){this.values.dbl.p7=t,this.dblR2()},dblR1:function(){this.values.dbl.result1=Math.abs(parseFloat(this.values.dbl.p3)-parseFloat(this.values.dbl.p2))/Math.sqrt(Math.pow(parseFloat(this.values.dbl.p1),2)+1)},dblR2:function(){this.values.dbl.result2=Math.abs(parseFloat(this.values.dbl.p7)-parseFloat(this.values.dbl.p6))/Math.sqrt(Math.pow(parseFloat(this.values.dbl.p4),2)+Math.pow(parseFloat(this.values.dbl.p5),2))},dblap1:function(t){this.values.dblap.p1=t,this.dblap()},dblap2:function(t){this.values.dblap.p2=t,this.dblap()},dblap3:function(t){this.values.dblap.p3=t,this.dblap()},dblap4:function(t){this.values.dblap.p4=t,this.dblap()},dblap5:function(t){this.values.dblap.p5=t,this.dblap()},dblap:function(){this.values.dblap.result=Math.abs(parseFloat(this.values.dblap.p1)*parseFloat(this.values.dblap.p4)+parseFloat(this.values.dblap.p2)*parseFloat(this.values.dblap.p5)+parseFloat(this.values.dblap.p3))/Math.sqrt(Math.pow(parseFloat(this.values.dblap.p1),2)+Math.pow(parseFloat(this.values.dblap.p2),2))},cpd1:function(t){this.values.cpd.p1=t,this.cpd()},cpd2:function(t){this.values.cpd.p2=t,this.cpd()},cpd3:function(t){this.values.cpd.p3=t,this.cpd()},cpd4:function(t){this.values.cpd.p4=t,this.cpd()},cpd:function(){this.values.cpd.result1=(parseFloat(this.values.cpd.p1)*parseFloat(this.values.cpd.p3)+parseFloat(this.values.cpd.p2)*parseFloat(this.values.cpd.p4))/(Math.pow(parseFloat(this.values.cpd.p3),2)+Math.pow(parseFloat(this.values.cpd.p4),2)),this.values.cpd.result2=(parseFloat(this.values.cpd.p2)*parseFloat(this.values.cpd.p3)-parseFloat(this.values.cpd.p1)*parseFloat(this.values.cpd.p4))/(Math.pow(parseFloat(this.values.cpd.p3),2)+Math.pow(parseFloat(this.values.cpd.p4),2))},cpdp1:function(t){this.values.cpdp.p1=t,this.cpdp()},cpdp2:function(t){this.values.cpdp.p2=t,this.cpdp()},cpdp3:function(t){this.values.cpdp.p3=t,this.cpdp()},cpdp4:function(t){this.values.cpdp.p4=t,this.cpdp()},cpdp:function(){this.values.cpdp.result1=parseFloat(this.values.cpdp.p1)/parseFloat(this.values.cpdp.p3),this.values.cpdp.result2=parseFloat(this.values.cpdp.p2)-parseFloat(this.values.cpdp.p4)},crtp1:function(t){this.values.crtp.p1=t,this.crtp()},crtp2:function(t){this.values.crtp.p2=t,this.crtp()},crtp:function(){this.values.crtp.result1=Math.sqrt(Math.pow(parseFloat(this.values.crtp.p1),2)+Math.pow(parseFloat(this.values.crtp.p2),2)),parseFloat(this.values.crtp.p1)>0&&parseFloat(this.values.crtp.p2)>0?this.values.crtp.result2=180*Math.atan(parseFloat(this.values.crtp.p2)/parseFloat(this.values.crtp.p1))/Math.PI:parseFloat(this.values.crtp.p1)>0&&parseFloat(this.values.crtp.p2)<0?this.values.crtp.result2=180*Math.atan(parseFloat(this.values.crtp.p2)/parseFloat(this.values.crtp.p1))/Math.PI+360:this.values.crtp.result2=180*Math.atan(parseFloat(this.values.crtp.p2)/parseFloat(this.values.crtp.p1))/Math.PI+180},cptr1:function(t){this.values.cptr.p1=t,this.cptr()},cptr2:function(t){this.values.cptr.p2=t,this.cptr()},cptr:function(){this.values.cptr.result1=parseFloat(this.values.cptr.p1)*Math.cos(parseFloat(this.values.cptr.p2)*Math.PI/180),this.values.cptr.result2=parseFloat(this.values.cptr.p1)*Math.sin(parseFloat(this.values.cptr.p2)*Math.PI/180)}},asyncData:function(t){return Object(v.a)(regeneratorRuntime.mark((function l(){var e,v,o,d,i,c,_,h,m,f,M,I,$;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.$content,v=t.app,l.next=3,e(v.i18n.defaultLocale,"math-tools/tools").fetch().catch((function(t){return[]}));case 3:if(o=l.sent,v.i18n.defaultLocale===v.i18n.locale){l.next=14;break}return l.prev=5,l.next=8,e(v.i18n.locale,"math-tools/tools").fetch();case 8:d=l.sent,o=o.map((function(t){return d.find((function(l){return l.slug===t.slug}))||t})),l.next=14;break;case 12:l.prev=12,l.t0=l.catch(5);case 14:i=0,c={},_=r(o);try{for(_.s();!(h=_.n()).done;)(m=h.value).index=i,c[m.id]=m,i++}catch(t){_.e(t)}finally{_.f()}for(f=0,M=Object.entries(c);f<M.length;f++)I=Object(n.a)(M[f],1),$=I[0],c[$].list=c;return l.abrupt("return",{tools:c});case 20:case"end":return l.stop()}}),l,null,[[5,12]])})))()}},c=e(37),component=Object(c.a)(d,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("Markdown",{attrs:{id:"math-tools/top"}}),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"border-2 table mb-2"},[e("div",{staticClass:"border-b text-center p-1"},[e("b",[t._v(t._s(t.$t("math.table.title")))])]),t._v(" "),e("div",{staticClass:"p-1"},[e("div",[t._v("\n\t\t\t\t1. "),e("b",[t._v(t._s(t.$t("math.table.group1")))]),t._v(" "),e("div",{staticClass:"indent-4"},[e("div",[t._v("a. "),e("GnounLink",{attrs:{to:"/math#fractions"}},[t._v(t._s(t.$t("math.table.tool1a")))])],1),t._v(" "),e("div",[t._v("b. "),e("GnounLink",{attrs:{to:"/math#gcf"}},[t._v(t._s(t.$t("math.table.tool1b")))])],1),t._v(" "),e("div",[t._v("c. "),e("GnounLink",{attrs:{to:"/math#lcm"}},[t._v(t._s(t.$t("math.table.tool1c")))])],1),t._v(" "),e("div",[t._v("d. "),e("GnounLink",{attrs:{to:"/math#degree_to_radian"}},[t._v(t._s(t.$t("math.table.tool1d")))])],1),t._v(" "),e("div",[t._v("e. "),e("GnounLink",{attrs:{to:"/math#radian_to_degree"}},[t._v(t._s(t.$t("math.table.tool1e")))])],1)])]),t._v(" "),e("div",[t._v("\n\t\t\t\t2. "),e("b",[t._v(t._s(t.$t("math.table.group2")))]),t._v(" "),e("div",{staticClass:"indent-4"},[e("div",[t._v("\n\t\t\t\t\t\tA. "+t._s(t.$t("math.table.group2A"))+"\n\t\t\t\t\t\t"),e("div",{staticClass:"indent-8"},[e("div",[t._v("a. "),e("GnounLink",{attrs:{to:"/math#magnitude"}},[t._v(t._s(t.$t("math.table.tool2Aa")))])],1),t._v(" "),e("div",[t._v("b. "),e("GnounLink",{attrs:{to:"/math#vector_cartesian_to_polar"}},[t._v(t._s(t.$t("math.table.tool2Ab")))])],1),t._v(" "),e("div",[t._v("c. "),e("GnounLink",{attrs:{to:"/math#vector_polar_to_cartesian"}},[t._v(t._s(t.$t("math.table.tool2Ac")))])],1)])]),t._v(" "),e("div",[t._v("\n\t\t\t\t\t\tB. "+t._s(t.$t("math.table.group2B"))+"\n\t\t\t\t\t\t"),e("div",{staticClass:"indent-8"},[e("div",[t._v("a. "),e("GnounLink",{attrs:{to:"/math#distance_between_points"}},[t._v(t._s(t.$t("math.table.tool2Ba")))])],1),t._v(" "),e("div",[t._v("b. "),e("GnounLink",{attrs:{to:"/math#midpoint"}},[t._v(t._s(t.$t("math.table.tool2Bb")))])],1),t._v(" "),e("div",[t._v("c. "),e("GnounLink",{attrs:{to:"/math#distance_between_lines"}},[t._v(t._s(t.$t("math.table.tool2Bc")))])],1),t._v(" "),e("div",[t._v("d. "),e("GnounLink",{attrs:{to:"/math#distance_between_line_and_point"}},[t._v(t._s(t.$t("math.table.tool2Bd")))])],1)])])])]),t._v(" "),e("div",[t._v("\n\t\t\t\t3. "),e("b",[t._v(t._s(t.$t("math.table.group3")))]),t._v(" "),e("div",{staticClass:"indent-4"},[e("div",[t._v("a. "),e("GnounLink",{attrs:{to:"/math#complex_division"}},[t._v(t._s(t.$t("math.table.tool3a")))])],1),t._v(" "),e("div",[t._v("b. "),e("GnounLink",{attrs:{to:"/math#complex_division_polar"}},[t._v(t._s(t.$t("math.table.tool3b")))])],1),t._v(" "),e("div",[t._v("c. "),e("GnounLink",{attrs:{to:"/math#complex_rectangular_to_polar"}},[t._v(t._s(t.$t("math.table.tool3c")))])],1),t._v(" "),e("div",[t._v("d. "),e("GnounLink",{attrs:{to:"/math#complex_polar_to_rectangular"}},[t._v(t._s(t.$t("math.table.tool3d")))])],1)])]),t._v(" "),e("div",[t._v("4. "),e("GnounLink",{attrs:{to:"/math#external-links"}},[t._v(t._s(t.$t("math.table.ext")))])],1)])]),t._v(" "),e("Markdown",{attrs:{id:"math-tools/after-table-of-contents"}}),t._v(" "),e("ReturnToTop",{staticClass:"my-2"}),t._v(" "),e("MathTool",{attrs:{tool:t.tools.fractions}},[t._v("\n\t\t"+t._s(t.$t("math.frac.input"))+":\n\t\t"),e("div",[e("NumberInput",{attrs:{onUpdate:t.frac1}}),t._v(" "),e("span",{staticClass:"text-xs"},[t._v(t._s(t.$t("math.frac.com1")))])],1),t._v("\n\t\t———\n\t\t"),e("div",[e("NumberInput",{attrs:{onUpdate:t.frac2}}),t._v(" "),e("span",{staticClass:"text-xs"},[t._v(t._s(t.$t("math.frac.com2")))])],1),t._v(" "),e("br"),t._v("\n\t\t"+t._s(t.$t("math.frac.output"))+":\n\t\t"),e("div",[t._v(t._s(t.values.frac.result1))]),t._v("\n\t\t——\t\n\t\t"),e("div",[t._v(t._s(t.values.frac.result2))]),t._v(" "),e("div",{staticClass:"text-xs"},[t._v(t._s(t.$t("math.frac.outcom")))])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.gcf}},[e("div",[t._v(t._s(t.$t("math.gcf.input1"))+": "),e("NumberInput",{attrs:{onUpdate:t.gcf1}})],1),t._v(" "),e("div",[t._v(t._s(t.$t("math.gcf.input2"))+": "),e("NumberInput",{attrs:{onUpdate:t.gcf2}})],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.gcf.output"))+": "+t._s(t.values.gcf.result))])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.lcm}},[e("div",[t._v(t._s(t.$t("math.lcm.input1"))+": "),e("NumberInput",{attrs:{onUpdate:t.lcm1}})],1),t._v(" "),e("div",[t._v(t._s(t.$t("math.lcm.input2"))+": "),e("NumberInput",{attrs:{onUpdate:t.lcm2}})],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.lcm.output"))+": "+t._s(t.values.lcm.result))])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.degree_to_radian}},[e("div",[t._v(t._s(t.$t("math.degtorad.input"))+": "),e("NumberInput",{attrs:{onUpdate:t.deg}}),t._v("°")],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.degtorad.output"))+": "+t._s(t.values.degtorad.result)),t.values.degtorad.result?e("span",[t._v("π")]):t._e()])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.radian_to_degree}},[e("div",[t._v(t._s(t.$t("math.degtorad.output"))+": "),e("NumberInput",{attrs:{onUpdate:t.rad}}),t._v("°")],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.degtorad.input"))+": "+t._s(t.values.radtodeg.result)),t.values.degtorad.result?e("span",[t._v("°")]):t._e()])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.magnitude}},[t._v("\n\t\t"+t._s(t.$t("math.magnitude.input"))+":\n\t\t"),e("div",[t._v("x = "),e("NumberInput",{attrs:{onUpdate:t.mag1}}),t._v(" y = "),e("NumberInput",{attrs:{onUpdate:t.mag2}})],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.magnitude.output"))+": "+t._s(t.values.magnitude.result))])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.vector_cartesian_to_polar}},[t._v("\n\t\t"+t._s(t.$t("math.vctp.input"))+":\n\t\t"),e("div",[t._v("x = "),e("NumberInput",{attrs:{onUpdate:t.vctp1}})],1),t._v(" "),e("div",[t._v("y = "),e("NumberInput",{attrs:{onUpdate:t.vctp2}})],1),t._v(" "),e("br"),t._v("\n\t\t"+t._s(t.$t("math.vctp.output"))+":\n\t\t"),e("div",[t._v("r = "+t._s(t.values.vctp.result1))]),t._v(" "),e("div",[t._v("θ = "+t._s(t.values.vctp.result2)),t.values.vctp.result2?e("span",[t._v("°")]):t._e()])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.vector_polar_to_cartesian}},[t._v("\n\t\t"+t._s(t.$t("math.vctp.output"))+":\n\t\t"),e("div",[t._v("r = "),e("NumberInput",{attrs:{onUpdate:t.vptc1}})],1),t._v(" "),e("div",[t._v("θ = "),e("NumberInput",{attrs:{onUpdate:t.vptc2}}),t._v("° ")],1),t._v(" "),e("br"),t._v("\n\t\t"+t._s(t.$t("math.vctp.input"))+":\n\t\t"),e("div",[t._v("x = "+t._s(t.values.vptc.result1))]),t._v(" "),e("div",[t._v("y = "+t._s(t.values.vptc.result2))])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.distance_between_points}},[t._v("\n\t\t"+t._s(t.$t("math.dbp.input1"))+":\n\t\t"),e("div",[t._v("x = "),e("NumberInput",{attrs:{onUpdate:t.dbp1}}),t._v(" y = "),e("NumberInput",{attrs:{onUpdate:t.dbp2}})],1),t._v("\n\t\t"+t._s(t.$t("math.dbp.input2"))+":\n\t\t"),e("div",[t._v("x = "),e("NumberInput",{attrs:{onUpdate:t.dbp3}}),t._v(" y = "),e("NumberInput",{attrs:{onUpdate:t.dbp4}})],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.dbp.output"))+": "+t._s(t.values.dbp.result))])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.midpoint}},[t._v("\n\t\t"+t._s(t.$t("math.dbp.input1"))+":\n\t\t"),e("div",[t._v("x = "),e("NumberInput",{attrs:{onUpdate:t.midp1}}),t._v(" y = "),e("NumberInput",{attrs:{onUpdate:t.midp2}})],1),t._v("\n\t\t"+t._s(t.$t("math.dbp.input2"))+":\n\t\t"),e("div",[t._v("x = "),e("NumberInput",{attrs:{onUpdate:t.midp3}}),t._v(" y = "),e("NumberInput",{attrs:{onUpdate:t.midp4}})],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.midpt.output"))+": ("+t._s(t.values.midp.result1)+", "+t._s(t.values.midp.result2)+")")])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.distance_between_lines}},[e("u",[t._v(t._s(t.$t("math.dbl.input1"))+":")]),t._v(" "),e("div",[t._v("y"),e("sub",[t._v("1")]),t._v(" = "),e("NumberInput",{attrs:{onUpdate:t.dbl1}}),t._v("x + "),e("NumberInput",{attrs:{onUpdate:t.dbl2}})],1),t._v(" "),e("div",[t._v("y"),e("sub",[t._v("2")]),t._v(" = "+t._s(t.values.dbl.p1)+"x + "),e("NumberInput",{attrs:{onUpdate:t.dbl3}})],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.dbp.output"))+": "+t._s(t.values.dbl.result1))]),t._v(" "),e("br"),t._v(" "),e("u",[t._v(t._s(t.$t("math.dbl.input2"))+":")]),t._v(" "),e("div",[t._v(t._s(t.$t("math.dbl.input2a"))+" 1: "),e("NumberInput",{attrs:{onUpdate:t.dbl4}}),t._v("x + "),e("NumberInput",{attrs:{onUpdate:t.dbl5}}),t._v("y + "),e("NumberInput",{attrs:{onUpdate:t.dbl6}}),t._v(" = 0")],1),t._v(" "),e("div",[t._v(t._s(t.$t("math.dbl.input2a"))+" 2: "+t._s(t.values.dbl.p4)+"x + "+t._s(t.values.dbl.p5)+"y + "),e("NumberInput",{attrs:{onUpdate:t.dbl7}}),t._v(" = 0")],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.dbp.output"))+": "+t._s(t.values.dbl.result2))])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.distance_between_line_and_point}},[e("u",[t._v(t._s(t.$t("math.dbl.input2"))+":")]),t._v(" "),e("div",[t._v("y"),e("sub",[t._v("1")]),t._v(" = "),e("NumberInput",{attrs:{onUpdate:t.dblap1}}),t._v("x + "),e("NumberInput",{attrs:{onUpdate:t.dblap2}}),t._v("y + "),e("NumberInput",{attrs:{onUpdate:t.dblap3}})],1),t._v(" "),e("div",[t._v("y"),e("sub",[t._v("2")]),t._v(" = ("),e("NumberInput",{attrs:{onUpdate:t.dblap4}}),t._v(", "),e("NumberInput",{attrs:{onUpdate:t.dblap5}}),t._v(")")],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.dbp.output"))+": "+t._s(t.values.dblap.result))])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.complex_division}},[e("div",[t._v("z"),e("sub",[t._v("1")]),t._v(" = "),e("NumberInput",{attrs:{onUpdate:t.cpd1}}),t._v(" + "),e("NumberInput",{attrs:{onUpdate:t.cpd2}}),t._v(" i ")],1),t._v(" "),e("div",[t._v("z"),e("sub",[t._v("2")]),t._v(" = "),e("NumberInput",{attrs:{onUpdate:t.cpd3}}),t._v(" + "),e("NumberInput",{attrs:{onUpdate:t.cpd4}}),t._v(" i ")],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.result"))+": "+t._s(t.values.cpd.result1)),t.values.cpd.result2?e("span",[t._v(" + "+t._s(t.values.cpd.result2)+"i")]):t._e()])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.complex_division_polar}},[e("div",[t._v("z"),e("sub",[t._v("1")]),t._v(" = "),e("NumberInput",{attrs:{onUpdate:t.cpdp1}}),t._v("*[cos("),e("NumberInput",{attrs:{onUpdate:t.cpdp2}}),t._v(") + i*sin("+t._s(t.values.cpdp.p2)+")] ")],1),t._v(" "),e("div",[t._v("z"),e("sub",[t._v("2")]),t._v(" = "),e("NumberInput",{attrs:{onUpdate:t.cpdp3}}),t._v("*[cos("),e("NumberInput",{attrs:{onUpdate:t.cpdp4}}),t._v(") + i*sin("+t._s(t.values.cpdp.p4)+")] ")],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.result"))+": "+t._s(t.values.cpdp.result1)),t.values.cpdp.result2?e("span",[t._v("*[cos("+t._s(t.values.cpdp.result2)+"°) + i*sin("+t._s(t.values.cpdp.result2)+"°)]")]):t._e()])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.complex_rectangular_to_polar}},[e("div",[t._v("z: "),e("NumberInput",{attrs:{onUpdate:t.crtp1}}),t._v(" + "),e("NumberInput",{attrs:{onUpdate:t.crtp2}}),t._v(" i")],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.result"))+": "+t._s(t.values.crtp.result1)),t.values.crtp.result2?e("span",[t._v("*[cos("+t._s(t.values.crtp.result2)+"°) + i*sin("+t._s(t.values.crtp.result2)+"°)]")]):t._e()])]),t._v(" "),e("MathTool",{attrs:{tool:t.tools.complex_polar_to_rectangular}},[e("div",[t._v("z: "),e("NumberInput",{attrs:{onUpdate:t.cptr1}}),t._v("*[cos("),e("NumberInput",{attrs:{onUpdate:t.cptr2}}),t._v(") + i*sin("+t._s(t.values.cptr.p2)+")]")],1),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.$t("math.result"))+": "+t._s(t.values.cptr.result1)),t.values.cptr.result2?e("span",[t._v(" + "+t._s(t.values.cptr.result2)+"i")]):t._e()])]),t._v(" "),e("hr",{staticClass:"my-3"}),t._v(" "),e("Markdown",{attrs:{id:"math-tools/bottom"}}),t._v(" "),e("br"),t._v(" "),e("ReturnToTop")],1)}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{Markdown:function(){return e.e(4).then(e.bind(null,378)).then((function(t){return t.default||t}))},GnounLink:function(){return e.e(2).then(e.bind(null,376)).then((function(t){return t.default||t}))},ReturnToTop:function(){return e.e(7).then(e.bind(null,381)).then((function(t){return t.default||t}))},NumberInput:function(){return e.e(6).then(e.bind(null,380)).then((function(t){return t.default||t}))},MathTool:function(){return e.e(5).then(e.bind(null,379)).then((function(t){return t.default||t}))}})}}]);