var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,d=Math.max,l=Math.min,s=function(){return a.Date.now()};function p(e,t,n){var o,i,r,u,f,a,c=0,p=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function h(e){return c=e,f=setTimeout(T,t),p?g(e):u}function j(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=r}function T(){var e=s();if(j(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-a);return b?l(n,r-(e-c)):n}(e))}function w(e){return f=void 0,y&&o?g(e):(o=i=void 0,u)}function O(){var e=s(),n=j(e);if(o=arguments,i=this,a=e,n){if(void 0===f)return h(a);if(b)return f=setTimeout(T,t),g(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=v(t)||0,m(n)&&(p=!!n.leading,r=(b="maxWait"in n)?d(v(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},O.flush=function(){return void 0===f?u:w(s())},O}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=m(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||i.test(e)?r(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")};b.form.addEventListener("submit",void 0),b.email.addEventListener("input".onInputChange()),b.message.addEventListener("input".onInputChange());
//# sourceMappingURL=03-feedback.281ee50e.js.map
