"use strict";(self.webpackChunkmongodb_express=self.webpackChunkmongodb_express||[]).push([[300],{2300:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=n(5671),i=n(3144),a=n(9340),s=n(5716),o=n(7861),u=n(7313),l=n(907);var c=n(181);function d(t){return function(t){if(Array.isArray(t))return(0,l.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,c.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=n(5861),f=n(7757),p=n.n(f),m=n(1818),v=n.n(m),x=n(306),j=n(6417),k=function(t){(0,a.Z)(n,t);var e=(0,s.Z)(n);function n(t){var i;return(0,r.Z)(this,n),(i=e.call(this,t)).state={VidResults:[],SearchValue:"",HasValue:!1},i}return(0,i.Z)(n,[{key:"handsub",value:function(){var t=(0,h.Z)(p().mark((function t(e){var n=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),console.log(this.state.SearchValue),v().post("/search",{data:this.state.SearchValue}).then((function(t){n.setState({VidResults:d(t.data),HasValue:!0})}));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return(0,j.jsxs)("div",{children:[(0,j.jsxs)("form",{className:"text-black",children:[(0,j.jsx)("input",{onChange:function(e){t.setState({SearchValue:e.target.value})}}),(0,j.jsx)("input",{type:"submit",onClick:function(e){return t.handsub(e)}})]}),(0,j.jsx)("div",{children:(0,j.jsx)(u.Suspense,{fallback:(0,j.jsx)("p",{className:"text-lg text-green-400 bg-gray-200",children:"Loading..."}),children:this.state.HasValue?this.state.VidResults.map((function(t){return(0,j.jsx)("div",{children:(0,j.jsxs)("p",{className:"text-white",children:[null===t||void 0===t?void 0:t.vidTitle,", ",null===t||void 0===t?void 0:t.serialNum]})},t.serialNum)})):(0,j.jsx)("p",{})})})]})}}]),n}(x.Component),b=k,y=function(t){(0,a.Z)(n,t);var e=(0,s.Z)(n);function n(t){var i;return(0,r.Z)(this,n),(i=e.call(this,t)).state={name:"Guest"},i}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var t,e,n="";document.cookie.split(";").find((function(t){return t.startsWith("jwt=")}))&&(n=document.cookie.split(";").find((function(t){return t.startsWith("jwt=")})).split("=")[1],t=(0,o.Z)(n),console.log({decodedCookie:t}),this.setState({name:null===(e=t)||void 0===e?void 0:e.userName}))}},{key:"componentDidUpdate",value:function(t,e){if(e.name!==this.state.name){var n,r,i="";if(document.cookie.split(";").find((function(t){return t.startsWith("jwt=")})))i=document.cookie.split(";").find((function(t){return t.startsWith("jwt=")})).split("=")[1],n=(0,o.Z)(i),this.setState({name:null===(r=n)||void 0===r?void 0:r.userName}),console.log("updated home didupdate")}}},{key:"render",value:function(){return(0,j.jsxs)("div",{className:"h-[90vh]",children:[(0,j.jsx)("p",{children:"Home page"}),(0,j.jsxs)("p",{children:["hello ",this.state.name]}),(0,j.jsx)(b,{})]})}}]),n}(u.Component)}}]);