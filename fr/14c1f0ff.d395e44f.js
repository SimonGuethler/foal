(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{265:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},g=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=u(t),p=r,m=g["".concat(l,".").concat(p)]||g[p]||b[p]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},266:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},267:function(e,n,t){"use strict";var r=t(0),a=t(268);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},268:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},269:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(267),l=t(266),c=t(56),i=t.n(c),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,g=e.values,b=e.groupId,p=e.className,m=Object(o.a)(),d=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(r.useState)(c),O=j[0],v=j[1],y=r.Children.toArray(e.children);if(null!=b){var h=d[b];null!=h&&h!==O&&g.some((function(e){return e.value===h}))&&v(h)}var N=function(e){v(e),null!=b&&f(b,e)},T=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},p)},g.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(T,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},270:function(e,n,t){"use strict";var r=t(3),a=t(0),o=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:a}),n)}},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),o=(t(0),t(265)),l=t(269),c=t(270),i={title:"Journalisation & D\xe9bogage"},s={unversionedId:"common/logging-and-debugging",id:"common/logging-and-debugging",isDocsHomePage:!1,title:"Journalisation & D\xe9bogage",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/common/logging-and-debugging.md",slug:"/common/logging-and-debugging",permalink:"/fr/docs/common/logging-and-debugging",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/common/logging-and-debugging.md",version:"current",sidebar:"someSidebar",previous:{title:"Templates - Rendu c\xf4t\xe9 serveur (SSR)",permalink:"/fr/docs/common/templating"},next:{title:"G\xe9n\xe9rer des Jetons",permalink:"/fr/docs/common/generate-tokens"}},u=[{value:"HTTP Request Logging",id:"http-request-logging",children:[]},{value:"Disabling HTTP Request Logging",id:"disabling-http-request-logging",children:[]},{value:"Disabling Error Logging",id:"disabling-error-logging",children:[]},{value:"Logging Hook",id:"logging-hook",children:[]},{value:"Advanced Logging",id:"advanced-logging",children:[]}],g={toc:u};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(o.b)("h2",{id:"http-request-logging"},"HTTP Request Logging"),Object(o.b)("p",null,"FoalTS uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/morgan"}),"morgan")," to log the HTTP requests. You can specify the output format using the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"SETTINGS_LOGGER_FORMAT")," or the ",Object(o.b)("inlineCode",{parentName:"p"},"config/default.json")," file:"),Object(o.b)(l.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  loggerFormat: tiny\n"))),Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "loggerFormat": "tiny"\n  }\n}\n'))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    loggerFormat: "tiny"\n  }\n}\n')))),Object(o.b)("h2",{id:"disabling-http-request-logging"},"Disabling HTTP Request Logging"),Object(o.b)("p",null,"In some scenarios and environments, you might want to disable http request logging. You can achieve this by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"loggerFormat")," configuration option to ",Object(o.b)("inlineCode",{parentName:"p"},"none"),". "),Object(o.b)(l.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  loggerFormat: none\n"))),Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "loggerFormat": "none"\n  }\n}\n'))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    loggerFormat: "none"\n  }\n}\n')))),Object(o.b)("h2",{id:"disabling-error-logging"},"Disabling Error Logging"),Object(o.b)("p",null,"In some scenarios, you might want to disable error logging (error stack traces that are displayed when an error is thrown in a controller or hook). You can achieve this by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"allErrors")," configuration option to false. "),Object(o.b)(l.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  allErrors: false\n"))),Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "allErrors": false\n  }\n}\n'))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  settings: {\n    allErrors: false\n  }\n}\n")))),Object(o.b)("h2",{id:"logging-hook"},"Logging Hook"),Object(o.b)("p",null,"FoalTS provides a convenient hook for logging debug messages: ",Object(o.b)("inlineCode",{parentName:"p"},"Log(message: string, options: LogOptions = {})"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface LogOptions {\n  body?: boolean;\n  params?: boolean;\n  headers?: string[]|boolean;\n  query?: boolean;\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK, Log } from '@foal/core';\n\n@Log('AppController', {\n  body: true,\n  headers: [ 'X-CSRF-Token' ],\n  params: true,\n  query: true\n})\nexport class AppController {\n  @Get()\n  index() {\n    return new HttpResponseOK();\n  }\n}\n")),Object(o.b)("h2",{id:"advanced-logging"},"Advanced Logging"),Object(o.b)("p",null,"If you need advanced logging, you might be interested in using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/winston"}),"winston"),", a popular logger in the Node.js ecosystem."),Object(o.b)("p",null,"Here's an example on how to use it with Foal:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LoggerService")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import * as winston from 'winston';\n\nexport class LoggerService {\n  private logger: any;\n\n  constructor() {\n    this.logger = winston.createLogger({\n      transports: [\n        new winston.transports.Console(),\n        new winston.transports.File({\n          filename: 'logs.txt'\n        })\n      ]\n    });\n  }\n\n  info(msg: string) {\n    this.logger.info(msg);\n  }\n\n  warn(msg: string) {\n    this.logger.warn(msg);\n  }\n\n  error(msg: string) {\n    this.logger.error(msg);\n  }\n\n}\n\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LogUserId hook")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Hook } from '@foal/core';\n// LoggerService import.\n\nexport function LogUserId() {\n  return Hook((ctx, services) => {\n    const logger = services.get(LoggerService);\n    logger.info(`UserId is: ${ctx.user.id}`);\n  });\n}\n\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ProductController")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get } from '@foal/core';\n// LogUserId import.\n\nexport class ProductController {\n\n  @Get('/')\n  @LogUserId()\n  readProducts() {\n    ...\n  }\n\n}\n\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"AuthController")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Post } from '@foal/core';\n// LoggerService import.\n\nexport class AuthController {\n  @dependency\n  logger: LoggerService;\n\n  @Post('/signup')\n  signup() {\n    ...\n    this.logger.info('Someone signed up!');\n  }\n\n}\n\n")))}b.isMDXComponent=!0}}]);