(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(265)),i=(n(269),n(270),{title:"What's new in version 2 (part 3/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-3.png",tags:["release"]}),c={permalink:"/es/blog/2021/03/11/whats-new-in-version-2-part-3",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-03-11-whats-new-in-version-2-part-3.md",source:"@site/blog/2021-03-11-whats-new-in-version-2-part-3.md",description:"Banner",date:"2021-03-11T00:00:00.000Z",tags:[{label:"release",permalink:"/es/blog/tags/release"}],title:"What's new in version 2 (part 3/4)",readingTime:3.665,truncated:!0,nextItem:{title:"What's new in version 2 (part 2/4)",permalink:"/es/blog/2021/03/02/whats-new-in-version-2-part-2"}},u=[],l={toc:u};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Banner",src:n(287).default})),Object(o.b)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the JWT utilities to manage secrets and RSA keys,"),Object(o.b)("li",{parentName:"ul"},"the JWT utilities to manage cookies,"),Object(o.b)("li",{parentName:"ul"},"and the new stateless CSRF protection.")))}s.isMDXComponent=!0},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),b=r,m=f["".concat(i,".").concat(b)]||f[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},266:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},267:function(e,t,n){"use strict";var r=n(0),a=n(268);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},268:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},269:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(267),i=n(266),c=n(56),u=n.n(c),l=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,f=e.values,p=e.groupId,b=e.className,m=Object(o.a)(),d=m.tabGroupChoices,v=m.setTabGroupChoices,y=Object(r.useState)(c),g=y[0],h=y[1],O=r.Children.toArray(e.children);if(null!=p){var w=d[p];null!=w&&w!==g&&f.some((function(e){return e.value===w}))&&h(w)}var j=function(e){h(e),null!=p&&v(p,e)},E=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},270:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},287:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/banner-b497efc5d6adf69bee9081634e786012.png"}}]);