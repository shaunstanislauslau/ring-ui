!function(o){function r(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return o[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var e={};r.m=o,r.c=e,r.i=function(o){return o},r.d=function(o,e,t){r.o(o,e)||Object.defineProperty(o,e,{configurable:!1,enumerable:!0,get:t})},r.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(e,"a",e),e},r.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},r.p="/",r(r.s=1193)}({10:function(o,r){function e(o,r){var e=o[1]||"",n=o[3];if(!n)return e;if(r&&"function"==typeof btoa){var c=t(n);return[e].concat(n.sources.map(function(o){return"/*# sourceURL="+n.sourceRoot+o+" */"})).concat([c]).join("\n")}return[e].join("\n")}function t(o){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"}o.exports=function(o){var r=[];return r.toString=function(){return this.map(function(r){var t=e(r,o);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(o,e){"string"==typeof o&&(o=[[null,o,""]]);for(var t={},n=0;n<this.length;n++){var c=this[n][0];"number"==typeof c&&(t[c]=!0)}for(n=0;n<o.length;n++){var l=o[n];"number"==typeof l[0]&&t[l[0]]||(e&&!l[2]?l[2]=e:e&&(l[2]="("+l[2]+") and ("+e+")"),r.push(l))}},r}},1044:function(o,r,e){var t=e(1286);"string"==typeof t&&(t=[[o.i,t,""]]);var n={hmr:!0};n.transform=void 0,n.insertInto=void 0,e(15)(t,n),t.locals&&(o.exports=t.locals)},1193:function(o,r,e){"use strict";function t(o){return l(o)||c(o)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(o){if(Symbol.iterator in Object(o)||"[object Arguments]"===Object.prototype.toString.call(o))return Array.from(o)}function l(o){if(Array.isArray(o)){for(var r=0,e=new Array(o.length);r<o.length;r++)e[r]=o[r];return e}}Object.defineProperty(r,"__esModule",{value:!0});var a=e(24),f=(e.n(a),e(63)),i=(e.n(f),e(22)),u=(e.n(i),e(5)),s=(e.n(u),e(4)),p=(e.n(s),e(6)),d=(e.n(p),e(53)),g=e.n(d),b=e(1044);e.n(b),g.a.module("Example.palette",[]).controller("PaletteCtrl",function(){var o=function(o){return t(Array(o)).map(function(o,r){return r})};this.arr5=o(5),this.arr7=o(7)})},1286:function(o,r,e){r=o.exports=e(10)(!1),r.push([o.i,".ring-palette_color-0{background-color:transparent;color:#444}.ring-palette_color-1{background-color:#e6e6e6;color:#888}.ring-palette_tone-0-0{background-color:#e6e6e6;color:#888}.ring-palette_color-2{background-color:#e6f6cf;color:#4da400}.ring-palette_tone-1-0{background-color:#e6f6cf;color:#4da400}.ring-palette_color-3{background-color:#d8f7f3;color:#45818e}.ring-palette_tone-2-0{background-color:#d8f7f3;color:#45818e}.ring-palette_color-4{background-color:#e0f1fb;color:#3d85c6}.ring-palette_tone-3-0{background-color:#e0f1fb;color:#3d85c6}.ring-palette_color-5{background-color:#fce5f1;color:#dc5766}.ring-palette_tone-4-0{background-color:#fce5f1;color:#dc5766}.ring-palette_color-6{background-color:#ffee9c;color:#b45f06}.ring-palette_tone-5-0{background-color:#ffee9c;color:#b45f06}.ring-palette_color-7{background-color:#f7e9c1;color:#b45f06}.ring-palette_tone-6-0{background-color:#f7e9c1;color:#b45f06}.ring-palette_color-8{background-color:#bababa;color:#444}.ring-palette_tone-0-1{background-color:#bababa;color:#444}.ring-palette_color-9{background-color:#b7e281;color:#444}.ring-palette_tone-1-1{background-color:#b7e281;color:#444}.ring-palette_color-10{background-color:#92e1d5;color:#444}.ring-palette_tone-2-1{background-color:#92e1d5;color:#444}.ring-palette_color-11{background-color:#a6e0fc;color:#444}.ring-palette_tone-3-1{background-color:#a6e0fc;color:#444}.ring-palette_color-12{background-color:#ffc8ea;color:#444}.ring-palette_tone-4-1{background-color:#ffc8ea;color:#444}.ring-palette_color-13{background-color:#fed74a;color:#444}.ring-palette_tone-5-1{background-color:#fed74a;color:#444}.ring-palette_color-14{background-color:#e0c378;color:#444}.ring-palette_tone-6-1{background-color:#e0c378;color:#444}.ring-palette_color-15{background-color:#878787;color:#fff}.ring-palette_tone-0-2{background-color:#878787;color:#fff}.ring-palette_color-16{background-color:#7dbd36;color:#fff}.ring-palette_tone-1-2{background-color:#7dbd36;color:#fff}.ring-palette_color-17{background-color:#25beb2;color:#fff}.ring-palette_tone-2-2{background-color:#25beb2;color:#fff}.ring-palette_color-18{background-color:#42a3df;color:#fff}.ring-palette_tone-3-2{background-color:#42a3df;color:#fff}.ring-palette_color-19{background-color:#ff7bc3;color:#fff}.ring-palette_tone-4-2{background-color:#ff7bc3;color:#fff}.ring-palette_color-20{background-color:#ff7123;color:#fff}.ring-palette_tone-5-2{background-color:#ff7123;color:#fff}.ring-palette_color-21{background-color:#ce6700;color:#fff}.ring-palette_tone-6-2{background-color:#ce6700;color:#fff}.ring-palette_color-22{background-color:#4d4d4d;color:#fff}.ring-palette_tone-0-3{background-color:#4d4d4d;color:#fff}.ring-palette_color-23{background-color:#409600;color:#fff}.ring-palette_tone-1-3{background-color:#409600;color:#fff}.ring-palette_color-24{background-color:#2f9890;color:#fff}.ring-palette_tone-2-3{background-color:#2f9890;color:#fff}.ring-palette_color-25{background-color:#0070e4;color:#fff}.ring-palette_tone-3-3{background-color:#0070e4;color:#fff}.ring-palette_color-26{background-color:#dc0083;color:#fff}.ring-palette_tone-4-3{background-color:#dc0083;color:#fff}.ring-palette_color-27{background-color:#e30000;color:#fff}.ring-palette_tone-5-3{background-color:#e30000;color:#fff}.ring-palette_color-28{background-color:#8d5100;color:#fff}.ring-palette_tone-6-3{background-color:#8d5100;color:#fff}.ring-palette_color-29{background-color:#1a1a1a;color:#fff}.ring-palette_tone-0-4{background-color:#1a1a1a;color:#fff}.ring-palette_color-30{background-color:#246512;color:#fff}.ring-palette_tone-1-4{background-color:#246512;color:#fff}.ring-palette_color-31{background-color:#00665e;color:#fff}.ring-palette_tone-2-4{background-color:#00665e;color:#fff}.ring-palette_color-32{background-color:#0050a1;color:#fff}.ring-palette_tone-3-4{background-color:#0050a1;color:#fff}.ring-palette_color-33{background-color:#900052;color:#fff}.ring-palette_tone-4-4{background-color:#900052;color:#fff}.ring-palette_color-34{background-color:#8e1600;color:#fff}.ring-palette_tone-5-4{background-color:#8e1600;color:#fff}.ring-palette_color-35{background-color:#553000;color:#fff}.ring-palette_tone-6-4{background-color:#553000;color:#fff}",""])},15:function(o,r,e){function t(o,r){for(var e=0;e<o.length;e++){var t=o[e],n=b[t.id];if(n){n.refs++;for(var c=0;c<n.parts.length;c++)n.parts[c](t.parts[c]);for(;c<t.parts.length;c++)n.parts.push(s(t.parts[c],r))}else{for(var l=[],c=0;c<t.parts.length;c++)l.push(s(t.parts[c],r));b[t.id]={id:t.id,refs:1,parts:l}}}}function n(o,r){for(var e=[],t={},n=0;n<o.length;n++){var c=o[n],l=r.base?c[0]+r.base:c[0],a=c[1],f=c[2],i=c[3],u={css:a,media:f,sourceMap:i};t[l]?t[l].parts.push(u):e.push(t[l]={id:l,parts:[u]})}return e}function c(o,r){var e=v(o.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=m[m.length-1];if("top"===o.insertAt)t?t.nextSibling?e.insertBefore(r,t.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),m.push(r);else if("bottom"===o.insertAt)e.appendChild(r);else{if("object"!=typeof o.insertAt||!o.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=v(o.insertAt.before,e);e.insertBefore(r,n)}}function l(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o);var r=m.indexOf(o);r>=0&&m.splice(r,1)}function a(o){var r=document.createElement("style");if(void 0===o.attrs.type&&(o.attrs.type="text/css"),void 0===o.attrs.nonce){var e=u();e&&(o.attrs.nonce=e)}return i(r,o.attrs),c(o,r),r}function f(o){var r=document.createElement("link");return void 0===o.attrs.type&&(o.attrs.type="text/css"),o.attrs.rel="stylesheet",i(r,o.attrs),c(o,r),r}function i(o,r){Object.keys(r).forEach(function(e){o.setAttribute(e,r[e])})}function u(){return e.nc}function s(o,r){var e,t,n,c;if(r.transform&&o.css){if(!(c=r.transform(o.css)))return function(){};o.css=c}if(r.singleton){var i=y++;e=h||(h=a(r)),t=p.bind(null,e,i,!1),n=p.bind(null,e,i,!0)}else o.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=f(r),t=g.bind(null,e,r),n=function(){l(e),e.href&&URL.revokeObjectURL(e.href)}):(e=a(r),t=d.bind(null,e),n=function(){l(e)});return t(o),function(r){if(r){if(r.css===o.css&&r.media===o.media&&r.sourceMap===o.sourceMap)return;t(o=r)}else n()}}function p(o,r,e,t){var n=e?"":t.css;if(o.styleSheet)o.styleSheet.cssText=w(r,n);else{var c=document.createTextNode(n),l=o.childNodes;l[r]&&o.removeChild(l[r]),l.length?o.insertBefore(c,l[r]):o.appendChild(c)}}function d(o,r){var e=r.css,t=r.media;if(t&&o.setAttribute("media",t),o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}function g(o,r,e){var t=e.css,n=e.sourceMap,c=void 0===r.convertToAbsoluteUrls&&n;(r.convertToAbsoluteUrls||c)&&(t=x(t)),n&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var l=new Blob([t],{type:"text/css"}),a=o.href;o.href=URL.createObjectURL(l),a&&URL.revokeObjectURL(a)}var b={},k=function(o){var r;return function(){return void 0===r&&(r=o.apply(this,arguments)),r}}(function(){return window&&document&&document.all&&!window.atob}),_=function(o,r){return r?r.querySelector(o):document.querySelector(o)},v=function(o){var r={};return function(o,e){if("function"==typeof o)return o();if(void 0===r[o]){var t=_.call(this,o,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(o){t=null}r[o]=t}return r[o]}}(),h=null,y=0,m=[],x=e(64);o.exports=function(o,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");r=r||{},r.attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=k()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var e=n(o,r);return t(e,r),function(o){for(var c=[],l=0;l<e.length;l++){var a=e[l],f=b[a.id];f.refs--,c.push(f)}o&&t(n(o,r),r);for(var l=0;l<c.length;l++){var f=c[l];if(0===f.refs){for(var i=0;i<f.parts.length;i++)f.parts[i]();delete b[f.id]}}}};var w=function(){var o=[];return function(r,e){return o[r]=e,o.filter(Boolean).join("\n")}}()},2:function(o,r){o.exports=vendor_lib},22:function(o,r,e){o.exports=e(2)(397)},24:function(o,r,e){o.exports=e(2)(411)},4:function(o,r,e){o.exports=e(2)(421)},5:function(o,r,e){o.exports=e(2)(442)},53:function(o,r,e){o.exports=e(2)(243)},6:function(o,r,e){o.exports=e(2)(443)},63:function(o,r,e){o.exports=e(2)(308)},64:function(o,r){o.exports=function(o){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!o||"string"!=typeof o)return o;var e=r.protocol+"//"+r.host,t=e+r.pathname.replace(/\/[^\/]*$/,"/");return o.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(o,r){var n=r.trim().replace(/^"(.*)"$/,function(o,r){return r}).replace(/^'(.*)'$/,function(o,r){return r});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n))return o;var c;return c=0===n.indexOf("//")?n:0===n.indexOf("/")?e+n:t+n.replace(/^\.\//,""),"url("+JSON.stringify(c)+")"})}}});