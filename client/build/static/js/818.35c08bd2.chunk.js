"use strict";(self.webpackChunkmongodb_express=self.webpackChunkmongodb_express||[]).push([[818],{818:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var n=s(7313),a=s(8467),o={Z:31},l=s(1413),u=s(5987),i=s(2695),r=s(8668),c=s(1507),d=s(9018),b=s(7931),p=s(6417),x=["page","type","selected","disabled"];function h(){var t=(0,a.s0)(),e=(0,a.UO)().slug,s=parseInt(e),n=parseInt(o.Z)+1;console.log(n);var h=Math.ceil(n/12);console.log(h);var m=(0,i.Z)({count:h,page:s,showFirstButton:!0,showLastButton:!0,onChange:function(e,s){console.log(s),t("/page/".concat(s))}}).items;return(0,p.jsx)("div",{className:"PaginationDiv",children:m.map((function(t,e){var s=t.page,n=t.type,a=t.selected,o=t.disabled,i=(0,u.Z)(t,x),h=null;return h="start-ellipsis"===n||"end-ellipsis"===n?(0,p.jsx)("p",{className:"md:pt-4 md:w-[50px] md:h-[50px]",children:"..."}):"page"===n?(0,p.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:a?"SelectedPageButton":"PageButtonNumber",style:{fontWeight:a?"bold":void 0}},i),{},{children:s})):"first"===n?o?(0,p.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"disabledButtonPagination"},i),{},{children:(0,p.jsx)(r.Z,{})})):(0,p.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},i),{},{children:(0,p.jsx)(r.Z,{})})):"last"===n?o?(0,p.jsx)("button",{type:"button",className:"disabledButtonPagination",children:(0,p.jsx)(c.Z,{})}):(0,p.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},i),{},{children:(0,p.jsx)(c.Z,{})})):"next"===n?o?(0,p.jsx)("button",{type:"button",className:"disabledButtonPagination",children:(0,p.jsx)(d.Z,{})}):(0,p.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},i),{},{children:(0,p.jsx)(d.Z,{})})):"previous"===n?o?(0,p.jsx)("button",{type:"button",className:"disabledButtonPagination",children:(0,p.jsx)(b.Z,{})}):(0,p.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},i),{},{children:(0,p.jsx)(b.Z,{})})):(0,p.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},i),{},{children:n})),(0,p.jsx)("li",{children:h},e)}))})}var m=(0,n.lazy)((function(){return s.e(21).then(s.bind(s,4021))}));var g=function(){var t=(0,a.UO)().slug,e=parseInt(t),s=o.Z-12*(t-1);return window.scrollTo({top:0,left:0,behavior:"smooth"}),isNaN(e)||s<0?(0,p.jsx)("p",{children:"404, No such page exists"}):(0,p.jsxs)("div",{className:"md:h-[90vh] overscroll-scroll",children:[(0,p.jsx)(m,{}),(0,p.jsx)(h,{})]})}}}]);