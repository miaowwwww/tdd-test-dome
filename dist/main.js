webpackJsonp([0],{111:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(6),i=r(l),f=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.add=function(){var t=e.state.count;e.setState({count:++t})},e.del=function(){var t=e.state.count;e.setState({count:--t})},e.state={count:1},e}return a(t,e),c(t,[{key:"render",value:function(){var e=this.state.count;return i.default.createElement("div",null,i.default.createElement("h3",{className:"title"},e),i.default.createElement("button",{onClick:this.add},"+"),i.default.createElement("button",{onClick:this.del},"-"))}}]),t}(i.default.PureComponent);f.defaultProps={},t.default=f},112:function(e,t){},234:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(6),i=r(l),f=n(42),s=r(f),p=n(43),d=n(111),b=r(d);n(112);var h=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"Welcome!"),i.default.createElement(p.Link,{to:"/couter"},"计数器1"),this.props.children)}}]),t}(i.default.PureComponent);s.default.render(i.default.createElement(p.Router,{history:p.hashHistory},i.default.createElement(p.Route,{path:"/",component:h},i.default.createElement(p.Route,{path:"couter",component:b.default}))),document.body.appendChild(document.createElement("div")))}},[234]);