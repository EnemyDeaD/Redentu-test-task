!function(e){function t(t){for(var l,o,u=t[0],c=t[1],i=t[2],s=0,p=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],l=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(l=!1)}l&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var l={},r={0:0},a=[];function o(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=l,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var d=c;a.push([124,1]),n()}({124:function(e,t,n){n(125),e.exports=n(315)},315:function(e,t,n){"use strict";n.r(t);var l=n(1),r=n.n(l),a=n(123),o=function(e){var t=e.children,n=e.onClick;return r.a.createElement("button",{onClick:n},t)},u=function(e){var t=e.value,n=e.onChange;return r.a.createElement("input",{value:t,onChange:n})},c=function(){var e,t;window.getSelection()&&(t=null===(e=window.getSelection())||void 0===e?void 0:e.getRangeAt(0));var n=null==t?void 0:t.extractContents(),l=document.createElement("span");return l.append(n||""),null==t||t.insertNode(l),{span:l,selection:t,selectedText:n}},i=function(e){var t,n,l,r,a,o,u,i,d=window.getSelection();if("span"===(null===(n=null===(t=null==d?void 0:d.anchorNode)||void 0===t?void 0:t.parentElement)||void 0===n?void 0:n.localName)){var s=(null===(r=null===(l=null==d?void 0:d.anchorNode)||void 0===l?void 0:l.parentElement)||void 0===r?void 0:r.getAttribute("style"))+" "+e+";",p=c(),v=p.span,f=p.selection,b=p.selectedText;v.style.cssText=""+s,null===(u=null===(o=null===(a=null==d?void 0:d.anchorNode)||void 0===a?void 0:a.parentNode)||void 0===o?void 0:o.parentNode)||void 0===u||u.removeChild(null===(i=null==d?void 0:d.anchorNode)||void 0===i?void 0:i.parentElement),v.append(b||""),null==f||f.insertNode(v)}else{var m=c();v=m.span,f=m.selection,b=m.selectedText;v.style.cssText=e+";"}};n.n(a).a.render(r.a.createElement((function(){var e=Object(l.useState)(""),t=(e[0],e[1],Object(l.useState)("")),n=t[0],a=t[1],c=Object(l.useState)(""),d=c[0],s=c[1],p=Object(l.useState)(!1),v=p[0],f=p[1],b=Object(l.useRef)(null),m=Object(l.useCallback)((function(){i("color: yellow")}),[]),g=Object(l.useCallback)((function(){i("font-size: 24px")}),[]),h=Object(l.useCallback)((function(){window.getSelection();i("background: red")}),[]),y=Object(l.useCallback)((function(e){a(e.currentTarget.value)}),[]),C=Object(l.useCallback)((function(e){s(e.currentTarget.value)}),[]),E=Object(l.useCallback)((function(){i(n+": "+d),a(""),s("")}),[d,n]);return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gridColumnGap:"15px"}},r.a.createElement(o,{onClick:m},"Change color"),r.a.createElement(o,{onClick:g},"Change font-size"),r.a.createElement(o,{onClick:h},"Change background color")),r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"15px 0"}},'Instruction: enter attribute name and value, select text then click "Add attribute"'),r.a.createElement("div",null,r.a.createElement("span",null,"Attribute name")," ",r.a.createElement(u,{value:n,onChange:y})),r.a.createElement("div",null,r.a.createElement("span",null,"Attribute value")," ",r.a.createElement(u,{value:d,onChange:C})),r.a.createElement(o,{onClick:E},"Add attribute")),r.a.createElement("div",{ref:b,style:{marginTop:"50px",outline:"none",width:"max-content"},onClick:function(){return f(!v)},tabIndex:0,contentEditable:v?"true":"false",suppressContentEditableWarning:!0},"Our text. Click on me for edit."))}),null),document.querySelector("#app"))}});