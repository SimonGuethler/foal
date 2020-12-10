(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(251)),o={title:"Validation Hooks"},l={unversionedId:"upgrade-to-v2/validation-hooks",id:"upgrade-to-v2/validation-hooks",isDocsHomePage:!1,title:"Validation Hooks",description:"Due to incompatibility with the OpenAPI specification, the following hooks have been removed:",source:"@site/docs/upgrade-to-v2/validation-hooks.md",slug:"/upgrade-to-v2/validation-hooks",permalink:"/foal/docs/upgrade-to-v2/validation-hooks",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/validation-hooks.md",version:"current"},c=[{value:"Examples",id:"examples",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Due to incompatibility with the OpenAPI specification, the following hooks have been removed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@ValidateHeaders")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@ValidateQuery")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@ValidateParams")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@ValidateCookies"))),Object(i.b)("p",null,"You can use these ones instead:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@ValidateHeader")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@ValidateQueryParam")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@ValidatePathParam")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@ValidateCookie"))),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ValidateHeaders & ValidateHeader")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// Before\n@ValidateHeaders({\n  properties: {\n    // All properties should be in lower case.\n    'a-number': { type: 'integer' },\n    'authorization': { type: 'string' },\n  },\n  required: [ 'authorization' ],\n  type: 'object'\n})\n\n// After\n@ValidateHeader('Authorization')\n@ValidateHeader('A-Number', { type: 'integer' }, { required: false })\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ValidateQuery & ValidateQueryParam")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// Before\n@ValidateQuery({\n  properties: {\n    'a-number': { type: 'integer' },\n    'authorization': { type: 'string' },\n  },\n  required: [ 'authorization' ],\n  type: 'object'\n})\n\n// After\n@ValidateQueryParam('authorization')\n@ValidateQueryParam('a-number', { type: 'integer' }, { required: false })\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ValidateParams & ValidatePathParam")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// Before\n@ValidateParams({\n  properties: {\n    productId: { type: 'integer' }\n  },\n  type: 'object'\n})\n\n// After\n@ValidatePathParam('productId', { type: 'integer' })\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ValidateCookies & ValidateCookie")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// Before\n@ValidateCookies({\n  properties: {\n    'A-Number': { type: 'integer' },\n    'Authorization': { type: 'string' },\n  },\n  required: [ 'Authorization' ],\n  type: 'object'\n})\n\n// After\n@ValidateCookie('Authorization')\n@ValidateCookie('A-Number', { type: 'integer' }, { required: false })\n")))}u.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),s=a,m=b["".concat(o,".").concat(s)]||b[s]||d[s]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);