!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1175)}({10:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(67),u=o(r),c=n(64),f=o(c),i=n(62),l=o(i),a=n(21),s=o(a);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,s.default)(e)));t.prototype=(0,l.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(f.default?(0,f.default)(t,e):(0,u.default)(t,e))}},11:function(t,e,n){"use strict";e.__esModule=!0;var o=n(21),r=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,r.default)(e))&&"function"!=typeof e?t:e}},1175:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(54),r=n.n(o);n(753),r.a.module("Example.template-ng",["Ring.template"])},19:function(t,e,n){t.exports=n(2)(566)},2:function(t,e){t.exports=vendor_lib},20:function(t,e,n){t.exports=n(2)(645)},21:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(66),u=o(r),c=n(65),f=o(c),i="function"==typeof f.default&&"symbol"==typeof u.default?function(t){return typeof t}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":typeof t};e.default="function"==typeof f.default&&"symbol"===i(u.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":void 0===t?"undefined":i(t)}},24:function(t,e,n){t.exports=n(2)(529)},26:function(t,e,n){t.exports={default:n(43),__esModule:!0}},312:function(t,e,n){"use strict";var o=n(4),r=n.n(o),u=n(5),c=n.n(u),f=function(){function t(){for(var e=this,n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];r()(this,t),this.$inject={},this.constructor.$inject.forEach(function(t,n){e.$inject[t]=o[n]})}return c()(t,null,[{key:"controller",get:function(){return this}}]),t}();f.$inject=[],e.a=f},4:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},43:function(t,e,n){n(60);var o=n(9).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},44:function(t,e,n){n(70);var o=n(9).Object;t.exports=function(t,e){return o.create(t,e)}},45:function(t,e,n){n(71);var o=n(9).Object;t.exports=function(t,e){return o.getOwnPropertyDescriptor(t,e)}},46:function(t,e,n){n(73),t.exports=n(9).Object.getPrototypeOf},47:function(t,e,n){n(74),t.exports=n(9).Object.setPrototypeOf},48:function(t,e,n){n(75),n(24),n(76),n(77),t.exports=n(9).Symbol},49:function(t,e,n){n(19),n(20),t.exports=n(69).f("iterator")},5:function(t,e,n){"use strict";e.__esModule=!0;var o=n(26),r=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},50:function(t,e,n){t.exports={default:n(45),__esModule:!0}},54:function(t,e,n){t.exports=n(2)(394)},60:function(t,e,n){t.exports=n(2)(516)},62:function(t,e,n){t.exports={default:n(44),__esModule:!0}},63:function(t,e,n){t.exports={default:n(68),__esModule:!0}},64:function(t,e,n){t.exports={default:n(47),__esModule:!0}},65:function(t,e,n){t.exports={default:n(48),__esModule:!0}},66:function(t,e,n){t.exports={default:n(49),__esModule:!0}},67:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(26),u=o(r),c=n(50),f=o(c),i=n(63),l=o(i);e.default=function(t,e){for(var n=(0,l.default)(e),o=0;o<n.length;o++){var r=n[o],c=(0,f.default)(e,r);c&&c.configurable&&void 0===t[r]&&(0,u.default)(t,r,c)}return t}},68:function(t,e,n){n(72);var o=n(9).Object;t.exports=function(t){return o.getOwnPropertyNames(t)}},69:function(t,e,n){t.exports=n(2)(222)},70:function(t,e,n){t.exports=n(2)(514)},71:function(t,e,n){t.exports=n(2)(518)},72:function(t,e,n){t.exports=n(2)(519)},73:function(t,e,n){t.exports=n(2)(520)},74:function(t,e,n){t.exports=n(2)(528)},75:function(t,e,n){t.exports=n(2)(576)},753:function(t,e,n){"use strict";var o=n(8),r=n.n(o),u=n(4),c=n.n(u),f=n(5),i=n.n(f),l=n(11),a=n.n(l),s=n(10),p=n.n(s),d=n(54),_=n.n(d),v=n(312),x=_.a.module("Ring.template",[]),y=function(t){function e(){var t;c()(this,e);for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];var f=a()(this,(t=e.__proto__||r()(e)).call.apply(t,[this].concat(o)));b.call(f);var i=f.$inject,l=i.$scope,s=i.$attrs;return l.$watch(s.rgTemplate||s.template,f.render),f}return p()(e,t),i()(e,[{key:"cleanup",value:function(){this.currentScope&&(this.currentScope.$destroy(),this.currentScope=null)}}]),e}(v.a);y.$inject=["$scope","$element","$attrs","$compile"];var b=function(){var t=this;this.currentScope=null,this.render=function(e){var n=t.$inject,o=n.$scope,r=n.$element,u=n.$compile;t.cleanup(),t.currentScope=o.$new(),t.currentScope.$evalAsync(function(){r.html(e),u(r.contents())(t.currentScope)})}};x.directive("rgTemplate",[function(){return{controller:y}}]),e.a=x.name},76:function(t,e,n){t.exports=n(2)(638)},77:function(t,e,n){t.exports=n(2)(639)},8:function(t,e,n){t.exports={default:n(46),__esModule:!0}},9:function(t,e,n){t.exports=n(2)(24)}});