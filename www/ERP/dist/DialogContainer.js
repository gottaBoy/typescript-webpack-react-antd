webpackJsonp([13],[function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},r=n(1),u=n(12),a=n(15),i=n(13),c=n(4),l=n(6),s=n(9),p=s.BaseStore({}),f=function(t){function e(e){t.call(this,e)}return o(e,t),e.prototype.handleButton=function(t){1==t?i.Toast.close():i.Toast.open()},e.prototype._dialog=function(t){var e=function(t){alert("您点击了确定按钮"),t.close()},n=function(t){alert("您点击了取消按钮"),t.close()},o=[{label:"取消",onClick:n},{label:"确定",onClick:e,primary:!0}];i.Dialog.show(r.createElement("div",null,"你确定要删除吗?"),o),t.preventDefault(),t.stopPropagation()},e.prototype._dialog1=function(t){i.Dialog.alter("提示您好!"),t.preventDefault(),t.stopPropagation()},e.prototype._dialog2=function(t){var e=function(t){i.Dialog.alter("我回调了!"),t.close()},n=[{label:"取消"},{label:"确定",onClick:e,primary:!0}];i.Dialog.show(r.createElement("div",null,"回调哒哒哒!"),n),t.preventDefault(),t.stopPropagation()},e.prototype._dialog3=function(t){var e=function(t){t.close()},n=[{label:"取消"},{label:"确定",onClick:e,primary:!0}];i.Dialog.show(r.createElement("div",null,r.createElement(i.InputText,{type:"test"})),n),t.preventDefault(),t.stopPropagation()},e.prototype.render=function(){var t=this;return r.createElement(i.AppBody,null,r.createElement(i.Panel,{title:"全局提示-加载中按钮面板"},r.createElement(i.Buttons,{onClick:function(e){return t._dialog(e)}},"普通提示弹框"),r.createElement(i.Buttons,{onClick:function(e){return t._dialog1(e)}},"单个提示弹框"),r.createElement(i.Buttons,{onClick:function(e){return t._dialog2(e)}},"提示弹框回调在弹框"),r.createElement(i.Buttons,{onClick:function(e){return t._dialog3(e)}},"提示弹框组件弹框")))},e.prototype.componentDidMount=function(){var t=this.props,e=(t.MenuReducers,t.dispatch);e(c.changeActiveAction({parent:8,child:1}))},e.prototype.componentWillUnmount=function(){},e}(l["default"]),d=function(t){return{IndexReducers:t.IndexReducers}},v=a.connect(d)(f),y=document.getElementById("example");u.render(r.createElement(a.Provider,{store:p},r.createElement(v,null)),y)},,,,,function(t,e){"use strict";function n(t){var e=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(e,n):t(o)}}}e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},r=n(1),u=n(2),a=n(16),i=function(t){function e(e){t.call(this,e);var n=a["default"].get("cw_auth");n||(alert("请求超时,请重新登录"),u["default"].goPush("login"))}return o(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e}(r.Component);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i},function(t,e,n){"use strict";function o(t,e){switch(void 0===t&&(t=a),e.type){case r.GET_AUTH:return u["default"].assign({},t,e.state);default:return t}}var r=n(18),u=n(2),a={LOGIN_ID:""};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o},function(t,e,n){"use strict";function o(t,e){switch(void 0===t&&(t=a),e.type){case r.BASE_MENU:return u["default"].assign({},t,e.state);case r.SWITCH_MENU:return u["default"].assign({},t,{menuSwitch:e.menuSwitch});case r.CHANGE_ACTIVE:return u["default"].assign({},t,{active:e.active});default:return t}}var r=n(4),u=n(2),a={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o},function(t,e,n){"use strict";function o(t){var e=a["default"].assign(t,{HeaderReducer:i["default"],MenuReducers:c["default"]}),n=r.combineReducers(e),o=r.createStore(n,r.applyMiddleware(u["default"]));return o}var r=n(17),u=n(5),a=n(2),i=n(7),c=n(8);e.BaseStore=o}]);