(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(265)),o=n(269),c=n(270),i={title:"Templates - Server-Side Rendering",sidebar_label:"Templates (SSR)"},s={unversionedId:"common/templating",id:"common/templating",isDocsHomePage:!1,title:"Templates - Server-Side Rendering",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/common/templating.md",slug:"/common/templating",permalink:"/es/docs/common/templating",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/common/templating.md",version:"current",sidebar_label:"Templates (SSR)",sidebar:"someSidebar",previous:{title:"Serializaci\xf3n y Deserializaci\xf3n",permalink:"/es/docs/common/serializing-and-deserializing"},next:{title:"Logging & Depuraci\xf3n",permalink:"/es/docs/common/logging-and-debugging"}},p=[{value:"Rendering Templates",id:"rendering-templates",children:[]},{value:"Using Another Template Engine",id:"using-another-template-engine",children:[]},{value:"Templates Location",id:"templates-location",children:[]}],m={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(l.b)("p",null,"Regular Web Applications rely on ",Object(l.b)("em",{parentName:"p"},"templates")," to dynamically generate HTML pages on the server. These templates are text files that contain static content as well as a special syntax describing how the data should be inserted dynamically. During an HTTP request, the application loads and renders the template using the given contextual data and sends back the page to the client."),Object(l.b)("p",null,"This technique is known as ",Object(l.b)("em",{parentName:"p"},"Server-Side Rendering (or SSR)"),"."),Object(l.b)("p",null,"Here is an example of what a template might look like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>{% title %}</title>\n</head>\n<body>\n  {% for user in users %}\n    * {{ user.name }}\n  {% else %}\n      No users have been found.\n  {% endfor %}\n</body>\n</html>\n')),Object(l.b)("h2",{id:"rendering-templates"},"Rendering Templates"),Object(l.b)("p",null,"FoalTS provides a minimalist template engine to render templates. This engine replaces all the occurrences of ",Object(l.b)("inlineCode",{parentName:"p"},"{{ myVariableName }}")," with the given values."),Object(l.b)("p",null,"Here is an example showing how to use it:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"templates/index.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  Hello {{ name }}!\n</body>\n</html>\n')),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"src/app/app.controller.ts")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, render } from '@foal/core';\n\nexport class AppController {\n  @Get('/')\n  index() {\n    return render('./templates/index.html', {\n      name: 'Alix',\n      title: 'Home'\n    });\n  }\n}\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Output (GET /)")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Home</title>\n</head>\n<body>\n  Hello Alix!\n</body>\n</html>\n')),Object(l.b)("h2",{id:"using-another-template-engine"},"Using Another Template Engine"),Object(l.b)("p",null,"External template engines, such as ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/ejs"}),"EJS")," or ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/pug"}),"pug"),", are also supported and can be configured for the current project using the configuration key ",Object(l.b)("inlineCode",{parentName:"p"},"settings.templateEngine"),"."),Object(l.b)("p",null,"Here is an example showing how to configure ",Object(l.b)("inlineCode",{parentName:"p"},"config/default.json")," (or ",Object(l.b)("inlineCode",{parentName:"p"},"config/default.yml"),") with ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/twig"}),"twig"),", a JS implementation of the Twig PHP templating language."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install twig\n")),Object(l.b)(o.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  templateEngine: twig\n"))),Object(l.b)(c.a,{value:"json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "templateEngine": "twig"\n  }\n}\n'))),Object(l.b)(c.a,{value:"js",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    templateEngine: "twig"\n  }\n}\n')))),Object(l.b)("p",null,"Then the ",Object(l.b)("inlineCode",{parentName:"p"},"render")," function uses this engine under the hood to render the templates."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note: Only ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://expressjs.com/en/resources/template-engines.html"}),"Express compatible")," template engines are supported (which represents the large majority of those available on npm).")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"templates/index.html (Twig example)")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Users</title>\n</head>\n<body>\n  <ul>\n    {% for user in users %}\n      <li>{{ user.name }}</li>\n    {% endfor %}\n  </ul>\n</body>\n</html>\n')),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"src/app/app.controller.ts (Twig example)")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get } from '@foal/core';\n\nexport class AppController {\n  @Get('/')\n  index() {\n    return render('./templates/index.html', {\n      users: [\n        { name: 'John' },\n        { name: 'Mary' }\n      ]\n    });\n  }\n}\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Output (GET /) (Twig example)")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Users</title>\n</head>\n<body>\n  <ul>\n    <li>John</li>\n    <li>Mary</li>\n  </ul>\n</body>\n</html>\n')),Object(l.b)("h2",{id:"templates-location"},"Templates Location"),Object(l.b)("p",null,"By default, the ",Object(l.b)("inlineCode",{parentName:"p"},"render")," function loads templates from the project root directory."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// |- config\n// |- src\n// '- templates\n//   '- login.html\nrender('./templates/login.html', { /* ... */ })\n")),Object(l.b)("p",null,"But the path can also be relative to the controller file. The ",Object(l.b)("inlineCode",{parentName:"p"},"render")," function accepts a third parameter ",Object(l.b)("inlineCode",{parentName:"p"},"dirname")," for this purpose."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/* login.controller.ts */\n\n// |- config\n// '- src\n//   '- app\n//     '- controllers\n//       |- templates\n//       | '- login.html\n//       '- login.controller.ts\nrender('./templates/login.html', { /* ... */ }, __dirname)\n")))}u.isMDXComponent=!0},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||l;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},266:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},267:function(e,t,n){"use strict";var a=n(0),r=n(268);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},268:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},269:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(267),o=n(266),c=n(56),i=n.n(c),s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,u=e.groupId,b=e.className,d=Object(l.a)(),g=d.tabGroupChoices,h=d.setTabGroupChoices,O=Object(a.useState)(c),f=O[0],j=O[1],y=a.Children.toArray(e.children);if(null!=u){var v=g[u];null!=v&&v!==f&&m.some((function(e){return e.value===v}))&&j(v)}var N=function(e){j(e),null!=u&&h(u,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},m.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},270:function(e,t,n){"use strict";var a=n(3),r=n(0),l=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return l.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);