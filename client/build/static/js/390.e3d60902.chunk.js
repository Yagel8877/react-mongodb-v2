"use strict";(self.webpackChunkmongodb_express=self.webpackChunkmongodb_express||[]).push([[390],{4390:function(n,i,e){e.r(i),e.d(i,{default:function(){return f}});var t=e(5861),r=e(5671),d=e(3144),l=e(9340),a=e(5716),u=e(7757),o=e.n(u),s=e(1818),c=e.n(s),v=e(9466),h=e(7313);e.p;var m=e(6417),p=function(n){(0,l.Z)(e,n);var i=(0,a.Z)(e);function e(n){var t;return(0,r.Z)(this,e),(t=i.call(this,n)).state={data:[],isLoading:!0},t}return(0,d.Z)(e,[{key:"componentDidMount",value:function(){var n=(0,t.Z)(o().mark((function n(){var i=this;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c().get("/api/featured").then((function(n){return i.setState({data:n.data})}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"grid grid-cols-1 md:pb-[5vh] md:grid-cols-2 lg:grid-cols-4 md:pl-[10%] md:mr-[10%] lg:h-[90vh] gap-4 md:gap-2",children:this.state.data.map((function(n){var i;return void 0===(null===n||void 0===n?void 0:n.thumbnailSrc)?n.thumbnailSrc="undefined":null!==n&&void 0!==n&&n.thumbnailSrc.includes(".jpeg")||null!==n&&void 0!==n&&n.thumbnailSrc.includes(".png")?console.log("valid src"):n.thumbnailSrc="undefined",(0,m.jsxs)("div",{className:"pt-[10%]",children:[(0,m.jsx)(v.rU,{to:"/video/"+n.serialNum,children:(0,m.jsx)("img",{src:"/api/image/"+(null===n||void 0===n?void 0:n.thumbnailSrc),alt:"fun nice"})}),(0,m.jsx)("p",{className:"font-bold overflow-hidden text-white text-lg",children:(null===n||void 0===n||null===(i=n.vidTitle)||void 0===i?void 0:i.length)>50?"".concat(null===n||void 0===n?void 0:n.vidTitle.substring(0,50),"..."):null===n||void 0===n?void 0:n.vidTitle})]},n.vId)}))})})}}]),e}(h.Component),f=p}}]);