webpackJsonp([12],[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},u=n(1),c=n(12),o=n(15),a=n(13),i=n(4),l=n(6),s=n(9),d=s.BaseStore({}),f=function(e){function t(t){e.call(this,t)}return r(t,e),t.prototype.render=function(){var e={width:"100%",height:"400px"};return u.createElement(a.AppBody,null,u.createElement(a.Panel,{title:"饼状图面板-结合百度图表"},u.createElement(a.Echarts,null,u.createElement("h3",null,"饼状图"),u.createElement("div",{id:"main",style:e},"111"))))},t.prototype.componentDidMount=function(){var e=this.props,t=(e.MenuReducers,e.dispatch);t(i.changeActiveAction({parent:4,child:-1}));var n=echarts.init(document.getElementById("main")),r={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)",x:"center"},legend:{left:"center",x:"center",data:["金山大道商圈","福湾商圈","晋安区政府商圈","前屿商圈"]},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{circleId:2,name:"金山大道商圈",value:0},{circleId:3,name:"福湾商圈",value:0},{circleId:4,name:"晋安区政府商圈",value:0},{circleId:5,name:"前屿商圈",value:0}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};n.setOption(r)},t.prototype.componentWillUnmount=function(){},t}(l["default"]),p=function(e){return{MenuReducers:e.MenuReducers}},m=o.connect(p)(f),h=document.getElementById("example");c.render(u.createElement(o.Provider,{store:d},u.createElement(m,null)),h)},,,,,function(e,t){"use strict";function n(e){var t=e.dispatch,n=e.getState;return function(e){return function(r){return"function"==typeof r?r(t,n):e(r)}}}t.__esModule=!0,t["default"]=n},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},u=n(1),c=n(2),o=n(16),a=function(e){function t(t){e.call(this,t);var n=o["default"].get("cw_auth");n||(alert("请求超时,请重新登录"),c["default"].goPush("login"))}return r(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentWillUnmount=function(){},t}(u.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a},function(e,t,n){"use strict";function r(e,t){switch(void 0===e&&(e=o),t.type){case u.GET_AUTH:return c["default"].assign({},e,t.state);default:return e}}var u=n(18),c=n(2),o={LOGIN_ID:""};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,n){"use strict";function r(e,t){switch(void 0===e&&(e=o),t.type){case u.BASE_MENU:return c["default"].assign({},e,t.state);case u.SWITCH_MENU:return c["default"].assign({},e,{menuSwitch:t.menuSwitch});case u.CHANGE_ACTIVE:return c["default"].assign({},e,{active:t.active});default:return e}}var u=n(4),c=n(2),o={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,n){"use strict";function r(e){var t=o["default"].assign(e,{HeaderReducer:a["default"],MenuReducers:i["default"]}),n=u.combineReducers(t),r=u.createStore(n,u.applyMiddleware(c["default"]));return r}var u=n(17),c=n(5),o=n(2),a=n(7),i=n(8);t.BaseStore=r}]);