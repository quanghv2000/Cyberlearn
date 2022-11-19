(this["webpackJsonpcalculator-project"]=this["webpackJsonpcalculator-project"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(3),r=n.n(a),o=(n(12),n(4)),i=n(5),l=n(7),u=n(6),b=(n(13),n(0)),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={txtScreen:"0",operator:"",process:!1,firstNumber:0,secondNumber:0,result:0},t.onClickButtonAC=function(){t.setState({txtScreen:"0",operator:"",process:!1,firstNumber:0,secondNumber:0,result:0})},t.onClickButtonInverse=function(){var e=parseFloat(t.state.txtScreen),n=parseFloat(e/-1);t.setState({txtScreen:n.toString(),process:!0,firstNumber:n})},t.onClickButtonPercent=function(){var e=parseFloat(t.state.txtScreen),n=parseFloat(e/100);t.setState({txtScreen:n.toString(),process:!0,firstNumber:n})},t.onClickButtonOperator=function(e){t.setState({operator:e,firstNumber:parseFloat(t.state.txtScreen),process:!0})},t.onClickButtonNumber=function(e){var n="0";if(!0===t.state.process)n=e;else{var c=t.state.txtScreen;if(!(c.length<13))return;n="0"===c?e:c+e}t.setState({txtScreen:n,process:!1})},t.onClickButtonDot=function(){var e="0";if(!0===t.state.process)e="0.";else{var n=t.state.txtScreen;e=n.includes(".")?n:n+"."}t.setState({txtScreen:e,process:!1})},t.onClickButtonDelete=function(){var e=t.state.txtScreen,n="";n=e.length>1?e.substr(0,e.length-1):"0",t.setState({txtScreen:n})},t.onClickButtonEqual=function(){var e=t.state.operator,n=t.state.firstNumber,c="0";if(""!==e){var s=t.state.txtScreen;switch(e){case"+":c=parseFloat(n)+parseFloat(s);break;case"-":c=parseFloat(n)-parseFloat(s);break;case"*":c=parseFloat(n)*parseFloat(s);break;case"/":c=parseFloat(n)/parseFloat(s);break;default:return}t.setState({txtScreen:c,firstNumber:parseFloat(c),process:!0})}},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"screen",id:"input",children:this.state.txtScreen}),Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-3",children:[Object(b.jsx)("div",{className:"btn light-gray",onClick:function(){t.onClickButtonAC()},children:"AC"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("7")},children:"7"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("4")},children:"4"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("1")},children:"1"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("0")},children:"0"})]}),Object(b.jsxs)("div",{className:"col-3",children:[Object(b.jsx)("div",{className:"btn light-gray",onClick:function(){t.onClickButtonInverse()},children:"+/-"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("8")},children:"8"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("5")},children:"5"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("2")},children:"2"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonDot()},children:"."})]}),Object(b.jsxs)("div",{className:"col-3",children:[Object(b.jsx)("div",{className:"btn light-gray",onClick:function(){t.onClickButtonPercent()},children:"%"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("9")},children:"9"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("6")},children:"6"}),Object(b.jsx)("div",{className:"btn",onClick:function(){t.onClickButtonNumber("3")},children:"3"}),Object(b.jsx)("div",{className:"btn btnDelete",onClick:function(){t.onClickButtonDelete()},children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-backspace",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"}),Object(b.jsx)("path",{d:"M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"})]})})]}),Object(b.jsxs)("div",{className:"col-3",children:[Object(b.jsx)("div",{className:"btn btn-orange",onClick:function(){t.onClickButtonOperator("/")},children:"/"}),Object(b.jsx)("div",{className:"btn btn-orange",onClick:function(){t.onClickButtonOperator("*")},children:"*"}),Object(b.jsx)("div",{className:"btn btn-orange",onClick:function(){t.onClickButtonOperator("-")},children:"-"}),Object(b.jsx)("div",{className:"btn btn-orange",onClick:function(){t.onClickButtonOperator("+")},children:"+"}),Object(b.jsx)("div",{className:"btn btn-equal",onClick:function(){t.onClickButtonEqual()},children:"="})]})]})})]})}}]),n}(c.Component);var d=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j,{})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),a(t),r(t)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.271b3f32.chunk.js.map