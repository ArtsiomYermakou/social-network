(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{137:function(e,t,n){e.exports=n(226)},142:function(e,t,n){},143:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(44),c=n.n(o),u=(n(142),n(25)),s=n(26),i=n(28),l=n(27),f=(n(143),n(52)),p=n.n(f),d=n(11),g=function(e){return r.a.createElement("header",{className:p.a.header},r.a.createElement("img",{src:"http://webmentor.gr/wp-content/uploads/2018/11/logo300X300.png",alt:"logo"}),r.a.createElement("div",{className:p.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(d.b,{to:"/login"},"Login")))},m=n(21),h=n(29),b=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(g,this.props)}}]),n}(r.a.Component),v=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:h.d})(b),E=n(7),O=n.n(E),w=function(){return r.a.createElement("nav",{className:O.a.nav},r.a.createElement("div",{className:O.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:O.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(O.a.item," ").concat(O.a.active)},r.a.createElement(d.b,{to:"/dialogs",activeClassName:O.a.activeLink},"Messages")),r.a.createElement("div",{className:"".concat(O.a.item," ").concat(O.a.active)},r.a.createElement(d.b,{to:"/users",activeClassName:O.a.activeLink},"Users")),r.a.createElement("div",{className:O.a.item},r.a.createElement(d.b,{to:"4312",activeClassName:O.a.activeLink},"News")),r.a.createElement("div",{className:O.a.item},r.a.createElement(d.b,{to:"234521",activeClassName:O.a.activeLink},"Music")),r.a.createElement("div",{className:O.a.item},r.a.createElement(d.b,{to:"5423",activeClassName:O.a.activeLink},"Settings")))},j=n(6),P=n(5),S=n.n(P),_=n(14),y=n(30),C=n(2),I=n(9),k={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},T=function(e){return{type:"FOLLOW",userId:e}},N=function(e){return{type:"UNFOLLOW",userId:e}},L=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},U=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},x=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},A=function(){var e=Object(_.a)(S.a.mark((function e(t,n,a,r){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(U(!0)),t(x(!0,n)),e.next=4,a(n);case 4:0===e.sent.data.resultCode&&t(r(n)),t(x(!1,n)),t(U(!1));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(C.a)(Object(C.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(C.a)(Object(C.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(C.a)(Object(C.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(C.a)(Object(C.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(C.a)(Object(C.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(C.a)(Object(C.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},z=n(82),R=n.n(z),G=n(83),D=n.n(G),M=n(84),B=n.n(M),W=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);return r.a.createElement("div",null,n.map((function(t){return r.a.createElement("span",{className:e.currentPage===t?B.a.selectedPage:"",onClick:function(n){e.onPageChanged(t)}},t)})))},H=function(e){return r.a.createElement("div",null,r.a.createElement(W,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:D.a,className:R.a.userPhoto,alt:"avatar"}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city"))))})))},Y=n(35),V=n(17),X=n(86),J=Object(X.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),K=function(e){return e.usersPage.pageSize},Z=function(e){return e.usersPage.totalUsersCount},q=function(e){return e.usersPage.currentPage},$=function(e){return e.usersPage.isFetching},Q=function(e){return e.usersPage.followingInProgress},ee=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Y.a,null):null,r.a.createElement(H,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),te=Object(V.d)(Object(m.b)((function(e){return{users:J(e),pageSize:K(e),totalUsersCount:Z(e),currentPage:q(e),isFetching:$(e),followingInProgress:Q(e)}}),{follow:function(e){return function(){var t=Object(_.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,I.c.follow.bind(I.c),T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(_.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,I.c.unFollow.bind(I.c),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleFollowingProgress:x,getUsers:function(e,t){return function(){var n=Object(_.a)(S.a.mark((function n(a){var r;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(U(!0)),a(L(e)),n.next=4,I.c.getUsers(e,t);case 4:r=n.sent,a(U(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ee),ne={initialized:!1},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},re=n(58),oe=n(73),ce={},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce;return e},se=n(87),ie=n(79),le=Object(V.c)({profilePage:re.b,dialogsPage:oe.a,sidebar:ue,usersPage:F,auth:h.a,form:ie.a,app:ae}),fe=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,pe=Object(V.e)(le,fe(Object(V.a)(se.a)));window.store=pe;var de=pe,ge=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,294))})),me=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,293))})),he=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,292))})),be=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Y.a,null)},r.a.createElement(j.b,{path:"/dialogs",render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(j.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(j.b,{path:"/users",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(j.b,{path:"/login",render:function(){return r.a.createElement(he,null)}})))):r.a.createElement(Y.a,null)}}]),n}(r.a.Component),ve=Object(V.d)(j.f,Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(h.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(be),Ee=function(e){return r.a.createElement(d.a,null,r.a.createElement(m.a,{store:de},r.a.createElement(ve,null)))};c.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return g}));var a=n(5),r=n.n(a),o=n(14),c=n(2),u=n(9),s=n(45),i="samurai-network/auth/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1},f=function(e,t,n,a){return{type:i,payload:{userId:e,email:t,login:n,isAuth:a}}},p=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,o=a.id,c=a.email,s=a.login,t(f(o,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var a=Object(o.a)(r.a.mark((function a(o){var c,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.login(e,t,n);case 2:0===(c=a.sent).data.resultCode?o(p()):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(s.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},g=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}}},35:function(e,t,n){"use strict";var a=n(85),r=n.n(a),o=n(0),c=n.n(o);t.a=function(){return c.a.createElement("div",{style:{backgroundColor:"White"}},c.a.createElement("img",{src:r.a,alt:"preload"}))}},52:function(e,t,n){e.exports={header:"Header_header__aj2f7",loginBlock:"Header_loginBlock__12B21"}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return g}));var a=n(5),r=n.n(a),o=n(14),c=n(30),u=n(2),s=n(9),i={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first",likesCount:11},{id:3,message:"\u0420\u0443\u0441\u0441\u043a\u0438\u0435 \u0441\u043b\u043e\u0432\u0430",likesCount:423},{id:4,message:"Dada",likesCount:21}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case"SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},7:function(e,t,n){e.exports={nav:"Navbar_nav__2qOTI",item:"Navbar_item__3I-R2",activeLink:"Navbar_activeLink__2_x1e"}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(30),r=n(2),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Ksusha"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valery"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your It?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},82:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1BI-A"}},83:function(e,t,n){e.exports=n.p+"static/media/businessperson-computer-icons-avatar-clip-art-avatar.b2fce85a.jpg"},84:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2zM-y"}},85:function(e,t,n){e.exports=n.p+"static/media/loaderr.818b13e5.svg"},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var a=n(81),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"298395db-2088-448b-824f-15482d6c3999"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unFollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("/profile/status",{status:e})}},u={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}}},[[137,2,3]]]);
//# sourceMappingURL=main.dae48a1b.chunk.js.map