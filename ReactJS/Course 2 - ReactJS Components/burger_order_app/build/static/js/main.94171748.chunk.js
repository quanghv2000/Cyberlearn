(this.webpackJsonpburger_project=this.webpackJsonpburger_project||[]).push([[0],{17:function(e,t,r){},18:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(8),s=r.n(n),a=(r(17),r(18),r(2)),b=r(3),u=r(5),i=r(4),j=r(6),d=r(0),l=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(b.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"burger-detail",children:[Object(d.jsx)("h3",{className:"text-success",children:"Ch\u1ecdn th\u1ee9c \u0103n"}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{className:"table mt-5",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Th\u1ee9c \u0103n"}),Object(d.jsx)("th",{children:"\u0110\u01a1n gi\xe1"}),Object(d.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(d.jsx)("th",{children:"Th\xe0nh ti\u1ec1n"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Salad"}),Object(d.jsxs)("td",{children:["$ ",this.props.burgerState.price.salad]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{className:"bg-success button",onClick:function(){e.props.updateMenu("salad",1)},children:"+"}),Object(d.jsx)("span",{style:{padding:"5px"},children:this.props.burgerState.burger.salad}),Object(d.jsx)("button",{className:"bg-danger button",onClick:function(){e.props.updateMenu("salad",-1)},children:"-"})]}),Object(d.jsxs)("td",{children:["$ ",this.props.burgerState.price.salad*this.props.burgerState.burger.salad]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Cheese"}),Object(d.jsxs)("td",{children:["$ ",this.props.burgerState.price.cheese]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{className:"bg-success button",onClick:function(){e.props.updateMenu("cheese",1)},children:"+"}),Object(d.jsx)("span",{style:{padding:"5px"},children:this.props.burgerState.burger.cheese}),Object(d.jsx)("button",{className:"bg-danger button",onClick:function(){e.props.updateMenu("cheese",-1)},children:"-"})]}),Object(d.jsxs)("td",{children:["$ ",this.props.burgerState.price.cheese*this.props.burgerState.burger.cheese]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Beef"}),Object(d.jsxs)("td",{children:["$ ",this.props.burgerState.price.beef]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{className:"bg-success button",onClick:function(){e.props.updateMenu("beef",1)},children:"+"}),Object(d.jsx)("span",{style:{padding:"5px"},children:this.props.burgerState.burger.beef}),Object(d.jsx)("button",{className:"bg-danger button",onClick:function(){e.props.updateMenu("beef",-1)},children:"-"})]}),Object(d.jsxs)("td",{children:["$ ",this.props.burgerState.price.beef*this.props.burgerState.burger.beef]})]})]})]}),Object(d.jsxs)("div",{children:["T\u1ed5ng c\u1ed9ng: ",Object(d.jsxs)("span",{children:["$ ",this.props.burgerState.total]})]})]})}}]),r}(c.Component),o=Object(j.b)((function(e){return{burgerState:e.BurgerReducer}}),(function(e){return{updateMenu:function(t,r){e({type:"UPDATE_MENU",item:t,number:r})}}}))(l),h=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(a.a)(this,r);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).renderBeef=function(){for(var t=[],r=0;r<e.props.numberOfBeef;r++){var c=Object(d.jsx)("div",{className:"beef"},r);t.push(c)}return t},e}return Object(b.a)(r,[{key:"render",value:function(){return Object(d.jsx)("div",{children:this.renderBeef()})}}]),r}(c.Component),p=Object(j.b)((function(e){return{numberOfBeef:e.BurgerReducer.burger.beef}}))(h),O=(r(26),function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(a.a)(this,r);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).renderCheese=function(){for(var t=[],r=0;r<e.props.numberOfCheese;r++){var c=Object(d.jsx)("div",{className:"cheese"},r);t.push(c)}return t},e}return Object(b.a)(r,[{key:"render",value:function(){return Object(d.jsx)("div",{children:this.renderCheese()})}}]),r}(c.Component)),f=Object(j.b)((function(e){return{numberOfCheese:e.BurgerReducer.burger.cheese}}))(O),x=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(a.a)(this,r);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).renderSalad=function(){for(var t=[],r=0;r<e.props.numberOfSalad;r++){var c=Object(d.jsx)("div",{className:"salad"},r);t.push(c)}return t},e}return Object(b.a)(r,[{key:"render",value:function(){return Object(d.jsx)("div",{children:this.renderSalad()})}}]),r}(c.Component),g=Object(j.b)((function(e){return{numberOfSalad:e.BurgerReducer.burger.salad}}))(x),m=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(b.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"burger-model",children:[Object(d.jsx)("h3",{className:"text-danger",children:"B\xe1nh Burger C\u1ee7a B\u1ea1n"}),Object(d.jsxs)("div",{className:"mt-5",children:[Object(d.jsx)("div",{className:"breadTop"}),Object(d.jsx)(g,{}),Object(d.jsx)(f,{}),Object(d.jsx)(p,{}),Object(d.jsx)("div",{className:"breadBottom"})]})]})}}]),r}(c.Component),v=function(e){Object(u.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(b.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"mt-5",children:"Burger Exercise CyberSoft"}),Object(d.jsxs)("div",{className:"row mt-5",children:[Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)(o,{})})]})]})}}]),r}(c.Component);var N=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(v,{})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),c(e),n(e),s(e),a(e)}))},C=r(9),S=r(7),B={burger:{salad:1,cheese:1,beef:1},price:{salad:10,cheese:20,beef:55},total:85},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;if("UPDATE_MENU"===t.type){var r=Object(S.a)({},e.burger);switch(t.item){case"salad":return 1===r.salad&&-1===t.number||(r.salad+=t.number,e.total+=e.price.salad*t.number,e.burger=r),Object(S.a)({},e);case"cheese":return 1===r.cheese&&-1===t.number||(r.cheese+=t.number,e.total+=e.price.cheese*t.number,e.burger=r),Object(S.a)({},e);case"beef":return 1===r.beef&&-1===t.number||(r.beef+=t.number,e.total+=e.price.beef*t.number,e.burger=r),Object(S.a)({},e);default:return Object(S.a)({},e)}}return Object(S.a)({},e)},M=Object(C.a)({BurgerReducer:k}),T=Object(C.b)(M);s.a.render(Object(d.jsx)(j.a,{store:T,children:Object(d.jsx)(N,{})}),document.getElementById("root")),y()}},[[27,1,2]]]);
//# sourceMappingURL=main.94171748.chunk.js.map