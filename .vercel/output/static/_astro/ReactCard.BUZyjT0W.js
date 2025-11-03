var l={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o;function c(){if(o)return t;o=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(R,r,e){var x=null;if(e!==void 0&&(x=""+e),r.key!==void 0&&(x=""+r.key),"key"in r){e={};for(var a in r)a!=="key"&&(e[a]=r[a])}else e=r;return r=e.ref,{$$typeof:i,type:R,key:x,ref:r!==void 0?r:null,props:e}}return t.Fragment=u,t.jsx=s,t.jsxs=s,t}var d;function p(){return d||(d=1,l.exports=c()),l.exports}var n=p();function v({title:i,body:u,href:s}){return n.jsx("li",{className:"link-card",children:n.jsxs("a",{href:s,children:[n.jsxs("h2",{children:[i,n.jsx("span",{children:"→"})]}),n.jsx("p",{children:u})]})})}export{v as default};
