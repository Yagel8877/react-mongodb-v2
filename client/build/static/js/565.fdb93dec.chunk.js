"use strict";(self.webpackChunkmongodb_express=self.webpackChunkmongodb_express||[]).push([[565],{565:function(e,r,s){s.r(r);var t=s(9439),a=s(7313),n=s(1818),o=s.n(n),c=s(6417);r.default=function(){var e=(0,a.useState)(!1),r=(0,t.Z)(e,2),s=r[0],n=r[1];return(0,c.jsx)("div",{className:"bg-gray-800 h-[90vh]",children:(0,c.jsx)("div",{className:"pt-[10vh]",children:(0,c.jsxs)("form",{id:"login",className:"grid grid-rows-4 ml-auto mr-auto border-2 mt-2  bg-gray-700 md:w-[30vw] md:h-[50vh] place-content-center border-black p-[5vh]",children:[s?(0,c.jsx)("div",{id:"alertBox",className:" h-1/2 rounded-xl border-2 border-black text-md",children:(0,c.jsxs)("p",{children:[(0,c.jsx)("button",{className:"mr-2 text-2xl hover:text-white",onClick:function(){n(!1)},children:"X"}),s]})}):(0,c.jsx)(c.Fragment,{}),(0,c.jsx)("input",{placeholder:"username",name:"userName",className:"border-[1px] text-white bg-transparent rounded-lg h-[40px]"}),(0,c.jsx)("input",{placeholder:"password",name:"password",className:"border-[1px] text-white bg-transparent border-white rounded-lg h-[40px]"}),(0,c.jsx)("button",{className:"hover:bg-gray-200 rounded-md border-2 border-black w-[25%] h-[50px]",onClick:function(e){!function(e){e.preventDefault();var r=new FormData(document.querySelector("#login")),s=r.get("userName"),t=r.get("password");console.log("".concat(s," and ").concat(t)),o().post("/login",{userName:s,password:t}).then((function(e){201===e.status?(console.log("location changing because 200 status"),window.location.href="/"):n("Server's Error :( - try again later!")})).catch((function(e){400===e.response.status||401===e.response.status||404===e.response.status?n(e.response.data):500===e.response.status?n("Server's Error - Try again shortly"):n("ERROR: status code ".concat(e.response.status))}))}(e)},children:"Login!"})]})})})}}}]);