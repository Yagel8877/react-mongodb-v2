"use strict";(self.webpackChunkmongodb_express=self.webpackChunkmongodb_express||[]).push([[373],{1373:function(t,e,n){n.r(e);var r=n(4165),s=n(5861),a=n(5671),o=n(3144),u=n(136),i=n(516),c=n(6417),h=function(t){(0,u.Z)(n,t);var e=(0,i.Z)(n);function n(t){var r;return(0,a.Z)(this,n),(r=e.call(this,t)).state={Data:""},r}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.time("a"),t.next=3,fetch("/api/files").then((function(t){return t.json()})).then((function(t){return console.log(t.slice(-1))})).then(console.timeEnd("a"));case 3:e=t.sent,this.setState({Data:e});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return(0,c.jsxs)("p",{children:[""!==this.state.Data?this.state.Data:null," this a ph"]})}}]),n}(n(7313).Component);e.default=h}}]);