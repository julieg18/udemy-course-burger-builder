(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__kWdwY",BreadTop:"BurgerIngredient_BreadTop__3BVOI",Seeds1:"BurgerIngredient_Seeds1__1RXlk",Seeds2:"BurgerIngredient_Seeds2__hW8Ob",Meat:"BurgerIngredient_Meat__1AmMj",VeggieBurgerMeat:"BurgerIngredient_VeggieBurgerMeat__3QGtz",Cheese:"BurgerIngredient_Cheese__3SMlh",Salad:"BurgerIngredient_Salad__3rmjh",Bacon:"BurgerIngredient_Bacon__3PkMz",RedOnion:"BurgerIngredient_RedOnion__29lw2",Pickles:"BurgerIngredient_Pickles__3joe1"}},,,,,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__-1Mky",Open:"SideDrawer_Open__2wibc",Close:"SideDrawer_Close__1XXrJ",Logo:"SideDrawer_Logo__37BDR"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1th4B",Label:"BuildControl_Label__3At-g",Less:"BuildControl_Less__d3vE4",More:"BuildControl_More__2CZ1q"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__39306",Burger:"CheckoutSummary_Burger__g6ttu",uppercase:"CheckoutSummary_uppercase__qq1RA"}},function(e,t,n){e.exports={Input:"Input_Input__VVfxU",Label:"Input_Label__3U7mq",InputElement:"Input_InputElement__3XcFf",Invalid:"Input_Invalid__3BiEs"}},function(e,t,n){e.exports={Auth:"Auth_Auth__2ouAv",errorMessage:"Auth_errorMessage__fK-W7",uppercase:"Auth_uppercase__28STN"}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__29mWa",Logo:"Toolbar_Logo__1MZrd",DesktopOnly:"Toolbar_DesktopOnly__3q3XY"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__27CE0",OrderButton:"BuildControls_OrderButton__2u-5g",enable:"BuildControls_enable__3kSgP"}},function(e,t,n){e.exports={Button:"Button_Button__2DhzR",Success:"Button_Success__2yNlY",Danger:"Button_Danger__2Qjvg"}},function(e,t,n){e.exports={uppercase:"OrderSummary_uppercase__2VxFt"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__JOfMO",active:"NavigationItem_active__3tYDp"}},,,function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1cQnP",uppercase:"ContactData_uppercase__3Us4A"}},function(e,t,n){e.exports={Order:"Order_Order__2hafQ",Ingredient:"Order_Ingredient__3ffWb"}},,,,,,,,,,,,function(e,t,n){e.exports={Burger:"Burger_Burger__2Ti4B"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3N24E"}},function(e,t,n){e.exports={Modal:"Model_Modal__dUhTL"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__JCZj6",load2:"Spinner_load2__3rg9H"}},function(e,t,n){e.exports={BurgerLoadingError:"BurgerBuilder_BurgerLoadingError__2U0NG"}},function(e,t,n){e.exports={Content:"Layout_Content__2nyXW"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__2wK-u"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1DH2m"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1h-GM"}},,function(e,t,n){e.exports=n(94)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports={App:"App_App__2mE6C"}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(27),o=n.n(i),c=n(15),l=n(7),u=n(19),s=n(52),d=(n(74),n(1)),p=n(2),m=n(4),h=n(3),g=n(5),f=n(10),v=n(29),E=n.n(v),_=E.a.create({baseURL:"https://react-burger-builder-d296e.firebaseio.com/"}),b=n(64),y=n(53),C=n.n(y),O=n(13),k=n.n(O),S=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.ingredientType){case"bread-bottom":e=a.a.createElement("div",{className:k.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:k.a.BreadTop},a.a.createElement("div",{className:k.a.Seeds1}),a.a.createElement("div",{className:k.a.Seeds2}));break;case"meat":e=a.a.createElement("div",{className:k.a.Meat});break;case"veggieBurgerMeat":e=a.a.createElement("div",{className:k.a.VeggieBurgerMeat});break;case"cheese":e=a.a.createElement("div",{className:k.a.Cheese});break;case"salad":e=a.a.createElement("div",{className:k.a.Salad});break;case"bacon":e=a.a.createElement("div",{className:k.a.Bacon});break;case"redOnion":e=a.a.createElement("div",{className:k.a.RedOnion});break;case"pickles":e=a.a.createElement("div",{className:k.a.Pickles});break;default:e=null}return e}}]),t}(a.a.Component),T=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(b.a)(Array(e.ingredients[t])).map(function(e,n){return a.a.createElement(S,{key:t+n,ingredientType:t})})}).flat();return 0===t.length&&(t=a.a.createElement("p",null,"Please start adding ingredients!")),a.a.createElement("div",{className:C.a.Burger},a.a.createElement(S,{ingredientType:"bread-top"}),t,a.a.createElement(S,{ingredientType:"bread-bottom"}))},j=n(34),I=n.n(j),A=n(23),B=n.n(A),N=function(e){return a.a.createElement("div",{className:B.a.BuildControl},a.a.createElement("div",{className:B.a.Label},e.ingredientLabel),a.a.createElement("button",{className:B.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:B.a.More,onClick:e.added},"More"))},w=[{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Pickles",type:"pickles"},{label:"Red Onion",type:"redOnion"},{label:"Salad",type:"salad"},{label:"Veggie Burger Meat",type:"veggieBurgerMeat"}],D=function(e){return a.a.createElement("div",{className:I.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price)),w.map(function(t){return a.a.createElement(N,{key:t.label,ingredientLabel:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:I.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuth?"Order Now":"Sign Up To Order"))},R=n(54),L=n.n(R),U=function(e){return e.show?a.a.createElement("div",{className:L.a.Backdrop,onClick:e.clicked}):null},H=n(55),P=n.n(H),x=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] will update")}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,{show:this.props.show,clicked:this.props.modalClosed}),a.a.createElement("div",{className:P.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.a.Component),M=n(35),F=n.n(M),V=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[e.classes,F.a.Button,F.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},G=n(36),Y=n.n(G),q=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){console.log("[OrderSummary] will update")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){var n=t;return n="veggieBurgerMeat"===(n="redOnion"===n?"red Onion":t)?"Veggie Burger Meat":n,a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},n),": ",e.props.ingredients[t])});return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price)),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(V,{classes:Y.a.uppercase,clicked:this.props.purchaseCanceled,btnType:"Danger"},"Cancel"),a.a.createElement(V,{classes:Y.a.uppercase,clicked:this.props.purchaseContinued,btnType:"Success"},"Continue"))}}]),t}(a.a.Component),z=n(56),W=n.n(z),X=function(){return a.a.createElement("div",{className:W.a.Loader},"Loading...")},Z=function(e,t){return function(n){function r(e){var n;return Object(d.a)(this,r),(n=Object(m.a)(this,Object(h.a)(r).call(this,e))).state={error:null},n.errorConfirmedHandler=function(){n.setState({error:null})},n.reqInterceptor=t.interceptors.request.use(function(e){return n.setState({error:null}),e}),n.resInterceptor=t.interceptors.response.use(function(e){return e},function(e){n.setState({error:e})}),n}return Object(g.a)(r,n),Object(p.a)(r,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{modalClosed:this.errorConfirmedHandler,show:this.state.error},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),r}(a.a.Component)},J=n(57),Q=n.n(J),K="ADD_INGREDIENT",$="REMOVE_INGREDIENT",ee="SET_INGREDIENTS",te="FETCH_INGREDIENTS_FAILED";var ne="PURCHASE_BURGER_SUCCESS",re="PURCHASE_BURGER_FAIL",ae="PURCHASE_BURGER_START",ie="PURCHASE_INIT",oe="FETCH_ORDERS_FAIL",ce="FETCH_ORDERS_SUCCESS",le="FETCH_ORDERS_START";var ue="AUTH_START",se="AUTH_SUCCESS",de="AUTH_FAIL",pe="AUTH_LOGOUT",me="SET_AUTH_REDIRECT_PATH";function he(){return{type:pe}}function ge(e){return{type:me,path:e}}var fe=function(e){return{type:K,ingredientName:e}},ve=function(e){return{type:$,ingredientName:e}},Ee=function(){return function(e){_.get("https://react-burger-builder-d296e.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:ee,ingredients:n}))}).catch(function(t){e({type:te})})}},_e=function(){return{type:ie}},be=ge,ye=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push({pathname:"/checkout"})},n.state={purchasing:!1,loading:!1},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseableState",value:function(e){return Object.values(e).reduce(function(e,t){return e+t})>0}},{key:"render",value:function(){var e=Object(f.a)({},this.props.ingredients);for(var t in e)e[t]=e[t]<=0;var n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(this.props.totalPrice),r=null,i=this.props.error?a.a.createElement("p",{className:Q.a.BurgerLoadingError},"Ingredients can not be loaded!"):a.a.createElement(X,null);return this.props.ingredients&&(i=a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{ingredients:this.props.ingredients}),a.a.createElement(D,{ingredientRemoved:this.props.onIngredientRemoved,ingredientAdded:this.props.onIngredientAdded,disabled:e,price:n,purchaseable:this.updatePurchaseableState(this.props.ingredients),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),r=a.a.createElement(q,{price:n,purchaseContinued:this.purchaseContinueHandler,purchaseCanceled:this.purchaseCancelHandler,ingredients:this.props.ingredients})),this.state.loading&&(r=a.a.createElement(X,null)),a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r),i)}}]),t}(a.a.Component);var Ce=Object(l.b)(function(e){var t=e.burgerBuilder;return{ingredients:t.ingredients,totalPrice:t.totalPrice,error:t.error,isAuthenticated:null!==e.auth.idToken}},function(e){return{onIngredientAdded:function(t){return e(fe(t))},onIngredientRemoved:function(t){e(ve(t))},onInitIngredients:function(){return e(Ee())},onInitPurchase:function(){return e(_e())},onSetAuthRedirectPath:function(t){return e(be(t))}}})(Z(ye,_)),Oe=n(17),ke=n(58),Se=n.n(ke),Te=n(30),je=n.n(Te),Ie=n(59),Ae=n.n(Ie),Be=n(60),Ne=n.n(Be),we=function(e){return a.a.createElement("div",{className:Ne.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:Ae.a,alt:"MyBurger Logo"}))},De=n(61),Re=n.n(De),Le=n(37),Ue=n.n(Le),He=function(e){return a.a.createElement("li",{className:Ue.a.NavigationItem},a.a.createElement(c.b,{exact:e.exact,to:e.link,activeClassName:Ue.a.active},e.children))},Pe=function(e){return a.a.createElement("ul",{className:Re.a.NavigationItems},a.a.createElement(He,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(He,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(He,{link:"/logout"},"Logout"):a.a.createElement(He,{link:"/auth"},"Login/Signup"))},xe=n(63),Me=n.n(xe),Fe=function(e){return a.a.createElement("div",{className:Me.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},Ve=function(e){return a.a.createElement("header",{className:je.a.Toolbar},a.a.createElement(Fe,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:je.a.Logo},a.a.createElement(we,null)),a.a.createElement("nav",{className:je.a.DesktopOnly},a.a.createElement(Pe,{isAuthenticated:e.isAuth})))},Ge=n(21),Ye=n.n(Ge),qe=function(e){var t=[Ye.a.SideDrawer,Ye.a.Close];return e.open&&(t=[Ye.a.SideDrawer,Ye.a.Open]),a.a.createElement(a.a.Fragment,null,a.a.createElement(U,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:Ye.a.Logo},a.a.createElement(we,null)),a.a.createElement("nav",null,a.a.createElement(Pe,{isAuthenticated:e.isAuth}))))},ze=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ve,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(qe,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:Se.a.Content},this.props.children))}}]),t}(a.a.Component);var We=Object(Oe.g)(Object(l.b)(function(e){return{isAuthenticated:null!=e.auth.idToken}})(ze)),Xe=(n(93),n(24)),Ze=n.n(Xe),Je=function(e){return a.a.createElement("div",{className:Ze.a.CheckoutSummary},a.a.createElement("h1",null,"We hope it tastes delicous!"),a.a.createElement("div",{className:Ze.a.Burger},a.a.createElement(T,{ingredients:e.ingredients})),a.a.createElement(V,{clicked:e.checkoutCancelled,className:Ze.a.uppercase,btnType:"Danger"},"Cancel"),a.a.createElement(V,{clicked:e.checkoutContinued,className:Ze.a.uppercase,btnType:"Success"},"Continue"))},Qe=n(40),Ke=n.n(Qe),$e=n(25),et=n.n($e),tt=function(e){var t=null,n=[et.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(et.a.Invalid),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}),e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:et.a.Input},a.a.createElement("label",{className:et.a.Label},e.label),t)},nt=function(e,t){return function(n){console.warn(n),n({type:ae}),_.post("/orders.json?auth=".concat(t),e).then(function(t){n(function(e,t){return{type:ne,orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(function(e){return{type:re,error:e}}(e))})}},rt=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Peter Smith"},label:"Your Name:",value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"35 Till Street"},label:"Your Street:",value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"20693"},label:"Your Postal Code:",value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"United States Of America"},label:"Your Country:",value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"text",placeholder:"peter01@gmail.com"},label:"Your Email:",value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},label:"Your Delivery Methods:",value:"fastest",validation:{},valid:!0}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault();var t={};for(var r in n.state.orderForm)t[r]=n.state.orderForm[r].value;var a={ingredients:n.props.ingredients,price:n.props.totalPrice,orderData:t};n.props.onOrderBurger(a,n.props.idToken)},n.inputChangedHandler=function(e,t){var r=Object(f.a)({},n.state.orderForm),a=Object(f.a)({},r[t]);a.value=e.target.value,a.valid=n.checkValidity(a.value,a.validation),a.touched=!0,r[t]=a;var i=!0;for(var o in r)i=r[o].valid&&i;n.setState({orderForm:r,formIsValid:i})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return a.a.createElement(tt,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,label:t.config.label,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}),a.a.createElement(V,{btnType:"Success",className:Ke.a.uppercase,disabled:!this.state.formIsValid},"Order"));return this.props.loading&&(r=a.a.createElement(X,null)),a.a.createElement("div",{className:Ke.a.ContactData},a.a.createElement("h4",null,"Enter Your Contact Data"),r)}}]),t}(a.a.Component);var at=Object(l.b)(function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,loading:e.order.loading,idToken:e.auth.idToken}},function(e){return{onOrderBurger:function(t,n){return e(nt(t,n))}}})(Z(rt,_)),it=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=a.a.createElement(Oe.a,{to:"/"});if(this.props.ingredients){var t=this.props.purchased?a.a.createElement(Oe.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(Je,{checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler,ingredients:this.props.ingredients}),a.a.createElement(Oe.b,{path:this.props.match.url+"/contact-data",component:at}))}return e}}]),t}(a.a.Component);var ot=Object(l.b)(function(e){return{ingredients:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(it),ct=n(41),lt=n.n(ct),ut=function(e){var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(e.price),n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var i=n.map(function(e){return a.a.createElement("span",{className:lt.a.Ingredient,key:e.name},e.name," (",e.amount,")")});return a.a.createElement("div",{className:lt.a.Order},a.a.createElement("p",null,"Ingredients: ",i),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",t)))},st=function(e){return function(t){t({type:le}),_.get("/orders.json?auth=".concat(e)).then(function(e){var n=[];for(var r in e.data)n.push(Object(f.a)({},e.data[r],{id:r}));t({type:ce,orders:n})}).catch(function(e){t({type:oe})})}},dt=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.idToken)}},{key:"render",value:function(){var e=a.a.createElement(X,null);return this.props.loading||(e=this.props.orders.map(function(e){return a.a.createElement(ut,{key:e.id,ingredients:e.ingredients,price:e.price})})),a.a.createElement("div",null,e)}}]),t}(a.a.Component);var pt=Object(l.b)(function(e){var t=e.auth.idToken,n=e.order;return{idToken:t,orders:n.orders,loading:n.loading}},function(e){return{onFetchOrders:function(t){return e(st(t))}}})(Z(dt,_)),mt=n(18),ht=n(26),gt=n.n(ht),ft=function(e,t,n){return function(r){r({type:ue});var a={email:e,password:t,returnSecureToken:!0};console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/udemy-course-burger-builder",REACT_APP_API_KEY:"AIzaSyAona02safvGL1elnds1qsYu5cE3GY6VsU"}));var i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyAona02safvGL1elnds1qsYu5cE3GY6VsU");n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyAona02safvGL1elnds1qsYu5cE3GY6VsU")),E.a.post(i,a).then(function(e){var t,n,a;console.log(e),r((t=e.data.idToken,n=e.data.localId,{type:se,idToken:t,userId:n})),r((a=e.data.expiresIn,function(e){setTimeout(function(){e(he())},1e3*a)}))}).catch(function(e){var t;console.log(e),r((t=e.response.data.error,{type:de,error:t}))})}},vt=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"time01@gmail.com"},label:"Your Email:",value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"**********"},label:"Your Password:",value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}},n.inputChangedHandler=function(e,t){var r=Object(f.a)({},n.state.controls,Object(mt.a)({},t,Object(f.a)({},n.state.controls[t],{value:e.target.value,valid:n.checkValidity(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:r})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchAuthModeHandler=function(){n.setState(function(e){return{isSignup:!e.isSignup}})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map(function(t){return a.a.createElement(tt,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,label:t.config.label,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})});this.props.loading&&(r=a.a.createElement(X,null));var i=null;this.props.error&&(i=a.a.createElement("p",{className:gt.a.errorMessage},this.props.error.message.split("_").join(" ").toLowerCase()));var o=null;return this.props.isAuthenticated&&(o=a.a.createElement(Oe.a,{to:this.props.authRedirectPath})),a.a.createElement("div",{className:gt.a.Auth},o,i,a.a.createElement("h1",null,this.state.isSignup?"Sign Up":"Login"),a.a.createElement("form",{onSubmit:this.submitHandler},r,a.a.createElement(V,{classes:gt.a.uppercase,btnType:"Success"},"Submit")),a.a.createElement(V,{classes:gt.a.uppercase,btnType:"Danger",clicked:this.switchAuthModeHandler},"Switch To ",this.state.isSignup?"Login":"Sign Up"))}}]),t}(a.a.Component);var Et=Object(l.b)(function(e){var t=e.auth,n=t.error,r=t.loading,a=t.idToken,i=t.authRedirectPath;return{loading:r,error:n,isAuthenticated:null!==a,buildingBurger:e.burgerBuilder.building,authRedirectPath:i}},function(e){return{onAuth:function(t,n,r){return e(ft(t,n,r))},onSetAuthRedirectPath:function(){return e(ge("/"))}}})(vt),_t=he,bt=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(Oe.a,{to:"/"})}}]),t}(a.a.Component);var yt=Object(l.b)(null,function(e){return{onLogout:function(){return e(_t())}}})(bt),Ct=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(We,null,a.a.createElement(Oe.d,null,a.a.createElement(Oe.b,{path:"/checkout",component:ot}),a.a.createElement(Oe.b,{path:"/orders",component:pt}),a.a.createElement(Oe.b,{path:"/auth",component:Et}),a.a.createElement(Oe.b,{path:"/logout",component:yt}),a.a.createElement(Oe.b,{path:"/",exact:!0,component:Ce}))))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ot=function(e,t){return Object(f.a)({},e,t)},kt={ingredients:null,totalPrice:2,error:!1,building:!1},St={salad:.1,cheese:.2,meat:.75,veggieBurgerMeat:.75,bacon:.3,redOnion:.2,pickles:.1};var Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return function(e,t){var n=Object(mt.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Ot(e.ingredients,n),totalPrice:e.totalPrice+St[t.ingredientName],building:!0};return Ot(e,r)}(e,t);case"REMOVE_INGREDIENT":return function(e,t){var n=Object(mt.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Ot(e.ingredients,n),totalPrice:e.totalPrice+St[t.ingredientName],building:!0};return Ot(e,r)}(e,t);case"SET_INGREDIENTS":return function(e,t){return Ot(e,{ingredients:t.ingredients,totalPrice:2,error:!1,building:!1})}(e,t);case"FETCH_INGREDIENTS_FAILED":return function(e,t){return Ot(e,{error:!0})}(e);default:return e}},jt="PURCHASE_BURGER_SUCCESS",It="PURCHASE_BURGER_FAIL",At="PURCHASE_BURGER_START",Bt="PURCHASE_INIT",Nt="FETCH_ORDERS_FAIL",wt="FETCH_ORDERS_START",Dt="FETCH_ORDERS_SUCCESS",Rt={orders:[],loading:!1,purchased:!1};var Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Bt:return function(e,t){return Ot(e,{purchased:!1})}(e);case At:return function(e,t){return Ot(e,{loading:!0})}(e);case jt:return function(e,t){var n=Ot(t.OrderData,{id:t.orderId});return Ot(e,{loading:!1,orders:e.orders.concat(n),purchased:!0})}(e,t);case It:return function(e,t){return Ot(e,{loading:!1})}(e);case wt:return function(e,t){return Ot(e,{loading:!0})}(e);case Dt:return function(e,t){return Ot(e,{orders:t.orders,loading:!1})}(e,t);case Nt:return function(e,t){return Ot(e,{loading:!1})}(e);default:return e}},Ut={idToken:null,userId:null,error:null,loading:!1,authRedirectPath:"/"};var Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return function(e,t){return Ot(e,{error:null,loading:!0})}(e);case"AUTH_FAIL":return function(e,t){return Ot(e,{error:t.error,loading:!1})}(e,t);case"AUTH_LOGOUT":return function(e,t){return Ot(e,{idToken:null,userId:null})}(e);case"AUTH_SUCCESS":return function(e,t){var n=t.idToken,r=t.userId;return Ot(e,{loading:!1,error:null,idToken:n,userId:r})}(e,t);case"SET_AUTH_REDIRECT_PATH":return function(e,t){return Ot(e,{authRedirectPath:t.path})}(e,t);default:return e}},Pt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,xt=Object(u.c)({burgerBuilder:Tt,order:Lt,auth:Ht}),Mt=Object(u.e)(xt,Pt(Object(u.a)(s.a))),Ft=a.a.createElement(l.a,{store:Mt},a.a.createElement(c.a,{basename:"/"},a.a.createElement(Ct,null)));o.a.render(Ft,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[65,1,2]]]);
//# sourceMappingURL=main.c4f0d1b8.chunk.js.map