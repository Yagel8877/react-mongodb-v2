"use strict";(self.webpackChunkmongodb_express=self.webpackChunkmongodb_express||[]).push([[913],{6210:function(e,r,a){var s=a(8467),o=a(6218),t=a(2135),l=a(6417);r.Z=function(){var e=(0,s.UO)().slug,r=parseInt(e),a=o.length;return 1===r?(0,l.jsxs)("div",{className:"PaginationDiv",children:[(0,l.jsx)(t.rU,{to:"/page/"+r,className:"w-[50px] h-[50px] border-2 bg-red-500 border-black",children:r}),(0,l.jsx)(t.rU,{to:"/page/"+(r+1),className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",children:r+1}),(0,l.jsxs)(t.rU,{to:"/page/"+(r+2),className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",children:[r+2," "]}),(0,l.jsx)(t.rU,{to:"/page/"+(r+3),className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",children:r+3}),(0,l.jsx)(t.rU,{to:"/page/"+(r+4),className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",children:r+4})]}):2===r?(0,l.jsxs)("div",{className:"PaginationDiv",children:[(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r-1),children:r-1}),(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 bg-red-500 border-black",to:"/page/"+r,children:r}),(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r+1),children:r+1}),(0,l.jsxs)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r+2),children:[r+2," "]}),(0,l.jsxs)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r+3),children:[r+3," "]})]}):r===Math.ceil(a/12)-1?(0,l.jsxs)("div",{className:"PaginationDiv",children:[(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r-1),children:r-1}),(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 bg-red-500 border-black",to:"/page/"+r,children:r}),(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black ",to:"/page/"+(r+1),children:r+1})]}):r===Math.ceil(a/12)?(0,l.jsxs)("div",{className:"PaginationDiv",children:[(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r-2),children:r-2}),(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r-1),children:r-1}),(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 bg-red-500 border-black ",to:"/page/"+r,children:r})]}):r>a/12?(0,l.jsx)("p",{className:"hidden"}):(0,l.jsxs)("div",{className:"PaginationDiv",children:[(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r-2),children:r-2}),(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r-1),children:r-1}),(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 border-black bg-red-500",to:"/page/"+r,children:r}),(0,l.jsx)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r+1),children:r+1}),(0,l.jsxs)(t.rU,{className:"w-[50px] h-[50px] border-2 hover:bg-gray-400 border-black",to:"/page/"+(r+2),children:[r+2," "]})]})}},2913:function(e,r,a){a.r(r),a.d(r,{default:function(){return m}});var s=a(7313),o=a(8467),t=a(6218),l=(a(6210),a(1413)),c=a(5987),n=a(2695),d=a(8668),b=a(1507),p=a(9018),i=a(7931),x=a(6417),h=["page","type","selected","disabled"];function g(){var e=(0,o.s0)(),r=(0,o.UO)().slug,a=parseInt(r),s=t.length,g=Math.ceil(s/12),u=(0,n.Z)({count:g,page:a,showFirstButton:!0,showLastButton:!0,onChange:function(r,a){console.log(a),e("/page/".concat(a))}}).items;return(0,x.jsx)("div",{className:"PaginationDiv",children:u.map((function(e,r){var a=e.page,s=e.type,o=e.selected,t=e.disabled,n=(0,c.Z)(e,h),g=null;return"start-ellipsis"===s||"end-ellipsis"===s?g=(0,x.jsx)("p",{className:"md:pt-4 md:w-[50px] md:h-[50px]",children:"..."}):"page"===s?g=(0,x.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:o?"SelectedPageButton":"PageButtonNumber",style:{fontWeight:o?"bold":void 0}},n),{},{children:a})):"first"===s?g=t?(0,x.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"opacity-[20%]"},n),{},{children:(0,x.jsx)(d.Z,{})})):(0,x.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},n),{},{children:(0,x.jsx)(d.Z,{})})):"last"===s?t?(console.log(a),g=(0,x.jsx)("button",{type:"button",className:"opacity-[20%]",children:(0,x.jsx)(b.Z,{})})):g=(0,x.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},n),{},{children:(0,x.jsx)(b.Z,{})})):g="next"===s?t?(0,x.jsx)("button",{type:"button",className:"opacity-[20%]",children:(0,x.jsx)(p.Z,{})}):(0,x.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},n),{},{children:(0,x.jsx)(p.Z,{})})):"previous"===s?t?(0,x.jsx)("button",{type:"button",className:"opacity-[20%]",children:(0,x.jsx)(i.Z,{})}):(0,x.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},n),{},{children:(0,x.jsx)(i.Z,{})})):(0,x.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",className:"PageButtonNumber"},n),{},{children:s})),(0,x.jsx)("li",{children:g},r)}))})}var u=(0,s.lazy)((function(){return a.e(21).then(a.bind(a,4021))}));var m=function(){var e=(0,o.UO)().slug,r=parseInt(e),a=t.length-12*(e-1);return isNaN(r)||a<0?(0,x.jsx)("p",{children:"404, No such page exists"}):(0,x.jsxs)("div",{className:"md:w-[80vw] md:h-[90vh] md:ml-[10vw] md:border-l-2 md:border-r-2  border-gray-400",children:[(0,x.jsx)(u,{}),(0,x.jsx)(g,{})]})}}}]);