"use strict";(self.webpackChunkmongodb_express=self.webpackChunkmongodb_express||[]).push([[623],{8623:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var i=n(9142);function r(t,e,n){return(e=(0,i.Z)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=n(5671),c=n(3144),l=n(136),u=n(516),d=n(7313),m=n(7861),p=n(1818),f=n.n(p),h=n(6417),b=function(t){(0,l.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;(0,a.Z)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isAdmin:!1,Msg:!1},t}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){console.log("mounted postVideo"),this.verifyAdmin()}},{key:"verifyAdmin",value:function(){var t,e="";document.cookie.split(";").find((function(t){return t.startsWith("jwt=")}))&&(t=document.cookie.split(";").find((function(t){return t.startsWith("jwt=")})).split("=")[1],e=(0,m.Z)(t),this.setState({isAdmin:e.isAdmin}))}},{key:"handleClickPostVid",value:function(t){t.preventDefault();var e=new FormData(document.querySelector("#form")),n=e.get("vidTitle"),i=e.get("aboutVid"),r=e.get("vidSrc"),o=e.get("thumbnailSrc");f().post("/postvideo",{vidTitle:n,aboutVid:i,vidSrc:r,thumbnailSrc:o}).then((function(t){console.log(t.headers),200!==t.status&&(window.location.href="/jwtauth")})).catch((function(t){return console.log(t)}))}},{key:"handleClickPostImage",value:function(t){var e=this;t.preventDefault();var n=new FormData(document.querySelector("#form2")).get("thumbnail");f().post("/postimg",n,{headers:{"content-type":"multipart/form-data"}}).then((function(t){e.setState(s(s({},e.state),{},{Msg:t}))})).then(console.log(this.state.Msg))}},{key:"render",value:function(){var t=this;return(0,h.jsx)("div",{children:this.state.isAdmin?(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"allowed to post vids"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{id:"form",children:[(0,h.jsxs)("label",{children:["Video Title",(0,h.jsx)("input",{className:"text-black",name:"vidTitle"})]}),(0,h.jsxs)("label",{children:["About video",(0,h.jsx)("input",{className:"text-black",name:"aboutVid"})]}),(0,h.jsxs)("label",{children:["Video Source",(0,h.jsx)("input",{className:"text-black",name:"vidSrc"})]}),(0,h.jsxs)("label",{children:["Thumbnail Source",(0,h.jsx)("input",{className:"text-black",name:"thumbnailSrc"})]}),(0,h.jsx)("button",{onClick:function(e){t.handleClickPostVid(e)},children:"click me"})]}),(0,h.jsxs)("form",{method:"POST",action:"/postimg",target:"_blank",id:"form2",encType:"multipart/form-data",children:[(0,h.jsxs)("label",{children:["Thumbnail",(0,h.jsx)("input",{name:"thumbnail",type:"file",formEncType:"multipart/form-data"})]}),(0,h.jsx)("button",{type:"submit",children:"SUBMIT CLASSICAL"})]})]})]}):(0,h.jsx)("p",{children:"not allowed to post vids"})})}}]),n}(d.Component),v=b}}]);