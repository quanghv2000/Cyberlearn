(this.webpackJsonpredux_cart=this.webpackJsonpredux_cart||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(8),c=n.n(r),i=(n(18),n(19),n(2)),s=n(3),d=n(6),o=n(5),l=n(4),u=n(0),h=function(t){Object(d.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).totalPayment=function(){return t.props.cart.reduce((function(t,e,n){return t+e.quantity*e.price}),0)},t.renderCartItems=function(){var e=t.props.cart,n={backgroundColor:"orange",border:"none",borderRedius:"5px solid",height:"24px"};if(e.length>0)return e.map((function(e,a){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"align-middle",children:e.productId}),Object(u.jsx)("td",{className:"align-middle",children:Object(u.jsx)("img",{style:{width:"50px"},src:e.productImage,alt:e.productImage})}),Object(u.jsx)("td",{className:"align-middle",children:e.productName}),Object(u.jsxs)("td",{className:"align-middle",children:[e.price.toLocaleString()," \u0111"]}),Object(u.jsxs)("td",{className:"align-middle",children:[Object(u.jsx)("button",{className:"border border-warning rounded text-white",style:n,onClick:function(){t.props.editItemQuantity(e.productId,1)},children:Object(u.jsx)("span",{children:"+"})}),Object(u.jsx)("span",{style:{padding:"6px"},children:e.quantity}),Object(u.jsx)("button",{className:"border border-warning rounded text-white",style:n,onClick:function(){t.props.editItemQuantity(e.productId,-1)},children:Object(u.jsx)("span",{style:{padding:"2px"},children:"-"})})]}),Object(u.jsxs)("td",{className:"align-middle",children:[(e.price*e.quantity).toLocaleString()," \u0111"]}),Object(u.jsx)("td",{className:"align-middle",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:function(){t.props.deleteCartItem(e.productId)},children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(u.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(u.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})})]},a)}))},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"modal fade",id:"modelId",tabIndex:-1,role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true",children:Object(u.jsx)("div",{style:{minWidth:"1000px"},className:"modal-dialog",role:"document",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",children:"Gi\u1ecf h\xe0ng"}),Object(u.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"M\xe3 s\u1ea3n ph\u1ea9m"}),Object(u.jsx)("th",{children:"H\xecnh \u1ea3nh"}),Object(u.jsx)("th",{children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(u.jsx)("th",{children:"\u0110\u01a1n gi\xe1"}),Object(u.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(u.jsx)("th",{children:"Th\xe0nh ti\u1ec1n"}),Object(u.jsx)("th",{children:"Thao t\xe1c"})]})}),Object(u.jsx)("tbody",{children:this.renderCartItems()})]}),Object(u.jsxs)("h6",{children:["T\u1ed5ng Thanh To\xe1n: ",this.totalPayment().toLocaleString()," \u0111"]})]}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(u.jsx)("button",{type:"button",className:"btn btn-primary",children:"Save"})]})]})})})})}}]),n}(a.Component),j=Object(l.b)((function(t){return{cart:t.cartState.cart}}),(function(t){return{deleteCartItem:function(e){t({type:"DELETE_CART_ITEM",productId:e})},editItemQuantity:function(e,n){t({type:"EDIT_ITEM_QUANTITY",productId:e,number:n})}}}))(h),b=function(t){Object(d.a)(n,t);var e=Object(o.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.product;return Object(u.jsxs)("div",{className:"card text-center",children:[Object(u.jsx)("img",{className:"card-img-top ml-5",src:e.hinhAnh,alt:"",style:{width:"250px",height:"250px"}}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h4",{className:"card-title",children:e.tenSP}),Object(u.jsxs)("p",{className:"card-text",children:[e.giaBan.toLocaleString()," \u0111"]}),Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){t.props.addItemToCart(e)},children:"Add To Cart"})]})]})}}]),n}(a.Component),m=Object(l.b)(null,(function(t){return{addItemToCart:function(e){var n={productId:e.maSP,productName:e.tenSP,productImage:e.hinhAnh,quantity:1,price:e.giaBan};t({type:"ADD_ITEM_TO_CART",newCartItem:n})}}}))(b),p=function(t){Object(d.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).productList=[{maSP:1,tenSP:"VinSmart Live",manHinh:"AMOLED, 6.2, Full HD+",heDieuHanh:"Android 9.0 (Pie)",cameraTruoc:"20 MP",cameraSau:"Ch\xednh 48 MP & Ph\u1ee5 8 MP, 5 MP",ram:"4 GB",rom:"64 GB",giaBan:57e5,hinhAnh:"https://res.cloudinary.com/dtjin3cf6/image/upload/v1668879610/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/redux_cart/vsphone_tyiuzf.jpg"},{maSP:2,tenSP:"Meizu 16Xs",manHinh:"AMOLED, FHD+ 2232 x 1080 pixels",heDieuHanh:"Android 9.0 (Pie); Flyme",cameraTruoc:"20 MP",cameraSau:"Ch\xednh 48 MP & Ph\u1ee5 8 MP, 5 MP",ram:"4 GB",rom:"64 GB",giaBan:76e5,hinhAnh:"https://res.cloudinary.com/dtjin3cf6/image/upload/v1668879619/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/redux_cart/meizuphone_wkjbo6.jpg"},{maSP:3,tenSP:"Iphone XS Max",manHinh:"OLED, 6.5, 1242 x 2688 Pixels",heDieuHanh:"iOS 12",cameraSau:"Ch\xednh 12 MP & Ph\u1ee5 12 MP",cameraTruoc:"7 MP",ram:"4 GB",rom:"64 GB",giaBan:27e6,hinhAnh:"https://res.cloudinary.com/dtjin3cf6/image/upload/v1668879622/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/redux_cart/applephone_d7kmgh.jpg"}],t.renderProductList=function(){return t.productList.map((function(t,e){return Object(u.jsx)("div",{className:"col-4",children:Object(u.jsx)(m,{product:t})},e)}))},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"row",children:this.renderProductList()})}}]),n}(a.Component),O=function(t){Object(d.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).totalQuantityInCart=function(){return t.props.cart.reduce((function(t,e,n){return t+e.quantity}),0)},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("nav",{className:"navbar navbar-light bg-white justify-content-between p-4",children:[Object(u.jsx)("a",{href:"link",style:{cursor:"pointer"},children:"Props Cart Project"}),Object(u.jsxs)("form",{className:"form-inline","data-toggle":"modal","data-target":"#modelId",style:{cursor:"pointer"},children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-cart3",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),"(",this.totalQuantityInCart(),")"]})]}),Object(u.jsx)("h3",{className:"mb-5",children:"Redux Cart Project"}),Object(u.jsx)(p,{}),Object(u.jsx)(j,{})]})}}]),n}(a.Component),x=Object(l.b)((function(t){return{cart:t.cartState.cart}}))(O);var g=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(x,{})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))},v=n(9),y=n(7),I=n(10),C={cart:[{productId:1,productName:"VinSmart Live",productImage:"./img/vsphone.jpg",quantity:2,price:13e6}]},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_ITEM_TO_CART":var n=t.cart.findIndex((function(t){return t.productId===e.newCartItem.productId}));return-1!==n?t.cart[n].quantity+=1:t.cart.push(e.newCartItem),t.cart=Object(I.a)(t.cart),Object(y.a)({},t);case"DELETE_CART_ITEM":var a=Object(I.a)(t.cart),r=a.findIndex((function(t){return t.productId===e.productId}));return-1!==r&&a.splice(r,1),t.cart=a,Object(y.a)({},t);case"EDIT_ITEM_QUANTITY":var c=Object(I.a)(t.cart);console.log("edit item quantity");var i=c.findIndex((function(t){return t.productId===e.productId}));if(-1!==i){if(-1===e.number&&1===c[i].quantity)return Object(y.a)({},t);c[i].quantity+=e.number}return t.cart=c,Object(y.a)({},t)}return Object(y.a)({},t)},P=Object(v.a)({cartState:N}),T=Object(v.b)(P);c.a.render(Object(u.jsx)(l.a,{store:T,children:Object(u.jsx)(g,{})}),document.getElementById("root")),f()}},[[27,1,2]]]);
//# sourceMappingURL=main.0b49bd4a.chunk.js.map