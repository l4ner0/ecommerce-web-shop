(this["webpackJsonpecommerce-web-shop"]=this["webpackJsonpecommerce-web-shop"]||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),c=n.n(r),i=n(7),s=n.n(i),o=n(10),u=n(11),l=n(75),j=new(n.n(l).a)("pk_294880008b18d0d881e58ea50ebccd785e90ba882e563",!0),d=n(169),b=n(171),p=n(55),m=n(172),h=n(173),x=n(174),O=n(14),f=n(21),g=n.p+"static/media/commerce.457bea4f.png",v=n(16),y=n(166),k=n(18),w=Object(y.a)((function(e){return{appBar:Object(v.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(v.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),C=n(2),S=function(e){var t=e.totalItems,n=w(),a=Object(O.f)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(d.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(C.jsxs)(b.a,{children:[Object(C.jsxs)(p.a,{component:f.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(C.jsx)("img",{src:g,alt:"Commerce.js",height:"25px",className:n.image}),"Commerce.js"]}),Object(C.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(m.a,{component:f.b,to:"/cart","arial-label":"Show cart items",color:"inherit",children:Object(C.jsx)(h.a,{badgeContent:t,color:"secondary",children:Object(C.jsx)(x.a,{})})})})]})})})},_=n(180),N=n(175),B=n(176),T=n(177),E=n(178),R=n(179),q=Object(y.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),F=function(e){var t=e.product,n=e.onAddToCart,a=q();return Object(C.jsxs)(N.a,{className:a.root,children:[Object(C.jsx)(B.a,{className:a.media,image:t.media.source,title:t.name}),Object(C.jsxs)(T.a,{children:[Object(C.jsxs)("div",{className:a.cardContent,children:[Object(C.jsx)(p.a,{variant:"h5",gutterBottom:!0,children:t.name}),Object(C.jsx)(p.a,{variant:"h5",gutterBottom:!0,children:t.price.formatted_with_symbol})]}),Object(C.jsx)(p.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary"})]}),Object(C.jsx)(E.a,{disableSpacing:!0,className:a.cardActions,children:Object(C.jsx)(m.a,{"arial-label":"Add to Cart",onClick:function(){return n(t.id)},children:Object(C.jsx)(R.a,{})})})]})},A=Object(y.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),I=function(e){var t=e.products,n=e.onAddToCart,a=A();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(_.a,{container:!0,justify:"center",spacing:4,children:t.map((function(e){return Object(C.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(F,{product:e,onAddToCart:n})},e.id)}))})]})},L=n(181),P=n(182),W=Object(y.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(v.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),z=Object(y.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),D=function(e){var t=e.item,n=e.onUpdateCartQty,a=e.onRemoveFromCart,r=z();return Object(C.jsxs)(N.a,{children:[Object(C.jsx)(B.a,{image:t.media.source,alt:t.name,className:r.media}),Object(C.jsxs)(T.a,{className:r.cardContent,children:[Object(C.jsx)(p.a,{variant:"h4",children:t.name}),Object(C.jsx)(p.a,{variant:"h5",children:t.line_total.formatted_with_symbol})]}),Object(C.jsxs)(E.a,{className:r.cartActions,children:[Object(C.jsxs)("div",{className:r.buttons,children:[Object(C.jsx)(L.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity-1)},children:"-"}),Object(C.jsx)(p.a,{children:t.quantity}),Object(C.jsx)(L.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity+1)},children:"+"})]}),Object(C.jsx)(L.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(t.id)},children:"Remove"})]})]})},Q=function(e){var t=e.cart,n=e.handleUpdateCartQty,a=e.handleRemoveFromCart,r=e.handleEmptyCart,c=W(),i=function(){return Object(C.jsxs)(p.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(C.jsx)(f.b,{to:"/",className:c.link,children:" start adding some!"})]})},s=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(_.a,{container:!0,spacing:3,children:t.line_items.map((function(e){return Object(C.jsx)(_.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(D,{item:e,onUpdateCartQty:n,onRemoveFromCart:a})},e.id)}))}),Object(C.jsxs)("div",{className:c.cardDetails,children:[Object(C.jsxs)(p.a,{variant:"h4",children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(L.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(C.jsx)(L.a,{component:f.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return t.line_items?Object(C.jsxs)(P.a,{children:[Object(C.jsx)("div",{className:c.toolbar}),Object(C.jsx)(p.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),0===t.line_items.length?Object(C.jsx)(i,{}):Object(C.jsx)(s,{})]}):"Loading ..."},G=n(188),U=n(189),M=n(190),H=n(82),J=n(197),Y=n(191),Z=n(193),K=Object(y.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(v.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(v.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(v.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),V=n(33),X=n(196),$=n(192),ee=n(186),te=n(45),ne=n(194),ae=function(e){var t=e.name,n=e.label,a=e.required,r=Object(te.c)().control;return Object(C.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(te.a,{render:function(e){var r=e.field;return Object(C.jsx)(ne.a,Object(V.a)(Object(V.a)({},r),{},{label:n,required:a,name:t}))},control:r,fullWidth:!0,name:t})})},re=function(e){var t=e.checkoutToken,n=e.next,r=Object(a.useState)([]),c=Object(u.a)(r,2),i=c[0],l=c[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),m=b[0],h=b[1],x=Object(a.useState)([]),O=Object(u.a)(x,2),g=O[0],v=O[1],y=Object(a.useState)(""),k=Object(u.a)(y,2),w=k[0],S=k[1],N=Object(a.useState)([]),B=Object(u.a)(N,2),T=B[0],E=B[1],R=Object(a.useState)(""),q=Object(u.a)(R,2),F=q[0],A=q[1],I=Object(te.c)(),P=Object.entries(i).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),W=Object.entries(g).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),z=T.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),D=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,l(a),h(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("countryCode: ",n),e.next=3,j.services.localeListShippingSubdivisions(t,n);case 3:a=e.sent,r=a.subdivisions,console.log("subdivisions: ",r),v(r),S(Object.keys(r)[0]);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,j.checkout.getShippingOptions(t,{country:n,region:a});case 3:r=e.sent,E(r),A(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){D(t.id)}),[]),Object(a.useEffect)((function(){m&&Q(t.id,m)}),[m]),Object(a.useEffect)((function(){w&&G(t.id,m,w)}),[w]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(C.jsx)(te.b,Object(V.a)(Object(V.a)({},I),{},{children:Object(C.jsxs)("form",{onSubmit:I.handleSubmit((function(e){return n(Object(V.a)(Object(V.a)({},e),{},{shippingCountry:m,shippingSubdivision:w,shippingOption:F}))})),children:[Object(C.jsxs)(_.a,{container:!0,spacing:3,children:[Object(C.jsx)(ae,{required:!0,name:"firstName",label:"First name"}),Object(C.jsx)(ae,{required:!0,name:"lastName",label:"Last name"}),Object(C.jsx)(ae,{required:!0,name:"address1",label:"Address"}),Object(C.jsx)(ae,{required:!0,name:"email",label:"Email"}),Object(C.jsx)(ae,{required:!0,name:"city",label:"City"}),Object(C.jsx)(ae,{required:!0,name:"zip",label:"ZIP / Postal code"}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(X.a,{children:"Shipping Country"}),Object(C.jsx)($.a,{value:m,fullWidth:!0,onChange:function(e){return h(e.target.value)},children:P.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(X.a,{children:"Shipping Subdivision"}),Object(C.jsx)($.a,{value:w,fullWidth:!0,onChange:function(e){return S(e.target.value)},children:W.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(X.a,{children:"Shipping Options"}),Object(C.jsx)($.a,{value:F,fullWidth:!0,onChange:function(e){return A(e.target.value)},children:z.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(L.a,{component:f.b,to:"/cart",variant:"outlined",children:"Back to cart"}),Object(C.jsx)(L.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},ce=n(49),ie=n(80),se=n(185),oe=n(136),ue=n(187),le=function(e){var t=e.checkoutToken;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(C.jsxs)(se.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(C.jsxs)(oe.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ue.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(C.jsx)(p.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(C.jsxs)(oe.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ue.a,{primary:"Total"}),Object(C.jsx)(p.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},je=Object(ie.a)("..."),de=function(e){var t=e.checkoutToken,n=e.shippingData,a=e.backStep,r=e.onCaptureCheckout,c=e.nextStep,i=function(){var e=Object(o.a)(s.a.mark((function e(a,i,o){var u,l,j,d,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o&&i){e.next=3;break}return e.abrupt("return");case 3:return u=i.getElement(ce.CardElement),e.next=6,o.createPaymentMethod({type:"card",card:u});case 6:l=e.sent,j=l.error,d=l.paymentMethod,j?console.log("error: ",j):(b={line_items:t.live.line_items,customer:{firstname:n.firstName,lastname:n.lastName,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,country_state:n.shippingSubdivision,postal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:d.id}}},r(t.id,b),c());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(le,{checkoutToken:t}),Object(C.jsx)(G.a,{}),Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(C.jsx)(ce.Elements,{stripe:je,children:Object(C.jsx)(ce.ElementsConsumer,{children:function(e){var n=e.elements,r=e.stripe;return Object(C.jsxs)("form",{onSubmit:function(e){return i(e,n,r)},children:[Object(C.jsx)(ce.CardElement,{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(L.a,{variant:"outlined",onClick:a,children:"Back"}),Object(C.jsxs)(L.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},be=["Shipping address","Payment details"],pe=function(e){var t=e.cart,n=e.order,r=e.onCaptureCheckout,c=e.error,i=Object(a.useState)(0),l=Object(u.a)(i,2),d=l[0],b=l[1],m=Object(a.useState)(null),h=Object(u.a)(m,2),x=h[0],O=h[1],g=Object(a.useState)({}),v=Object(u.a)(g,2),y=v[0],k=v[1],w=K();Object(a.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=t.id,!e.t0){e.next=6;break}return e.next=5,j.checkout.generateToken(t.id,{type:"cart"});case 5:e.t0=e.sent;case 6:n=e.t0,O(n),e.next=13;break;case 10:e.prev=10,e.t1=e.catch(0),console.log(e.t1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var S=function(){return b((function(e){return e+1}))},_=function(){return b((function(e){return e-1}))},N=function(e){k(e),S()},B=function(){return n.customer?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(p.a,{variant:"h5",children:["Thank you for your purchase, ",n.customer.firstname," ",n.customer.lastname]}),Object(C.jsx)(G.a,{className:w.divider}),Object(C.jsxs)(p.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(C.jsx)("br",{}),Object(C.jsx)(L.a,{component:f.b,variant:"outlined",to:"/",type:"button",children:"Back to Home"})]}):Object(C.jsx)("div",{className:w.spinner,children:Object(C.jsx)(U.a,{})})};c&&(C.Fragment,p.a,L.a,f.b);var T=function(){return 0===d?Object(C.jsx)(re,{checkoutToken:x,next:N}):Object(C.jsx)(de,{shippingData:y,checkoutToken:x,backStep:_,onCaptureCheckout:r,nextStep:S})};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(M.a,{}),Object(C.jsx)("div",{className:w.toolar}),Object(C.jsx)("main",{className:w.layout,children:Object(C.jsxs)(H.a,{className:w.paper,children:[Object(C.jsx)(p.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)(J.a,{activeStep:d,className:w.stepper,children:be.map((function(e){return Object(C.jsx)(Y.a,{children:Object(C.jsx)(Z.a,{children:e})},e)}))}),d===be.length?Object(C.jsx)(B,{}):x&&Object(C.jsx)(T,{})]})})]})},me=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),i=Object(u.a)(c,2),l=i[0],d=i[1],b=Object(a.useState)({}),p=Object(u.a)(b,2),m=p[0],h=p[1],x=Object(a.useState)(""),g=Object(u.a)(x,2),v=g[0],y=g[1],k=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.products.list();case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,j.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.add(t,n);case 2:a=e.sent,r=a.cart,d(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.update(t,{quantity:n});case 2:a=e.sent,r=a.cart,d(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.remove(t);case 2:n=e.sent,a=n.cart,d(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.empty();case 2:t=e.sent,n=t.cart,d(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.checkout.capture(t,n);case 3:a=e.sent,h(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),y(e.t0.data.error.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(),w()}),[]),Object(C.jsx)(f.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(S,{totalItems:l.total_items}),Object(C.jsxs)(O.c,{children:[Object(C.jsx)(O.a,{exact:!0,path:"/",children:Object(C.jsx)(I,{products:n,onAddToCart:_})}),Object(C.jsx)(O.a,{exact:!0,path:"/cart",children:Object(C.jsx)(Q,{cart:l,handleUpdateCartQty:N,handleRemoveFromCart:B,handleEmptyCart:T})}),Object(C.jsx)(O.a,{exact:!0,path:"/checkout",children:Object(C.jsx)(pe,{cart:l,order:m,onCaptureCheckout:E,error:v})})]})]})})};c.a.render(Object(C.jsx)(me,{}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.4cf7332d.chunk.js.map