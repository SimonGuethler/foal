(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(251)),i={},l={unversionedId:"tutorials/simple-todo-list/1-installation",id:"version-1.x/tutorials/simple-todo-list/1-installation",isDocsHomePage:!1,title:"1-installation",description:"Installation",source:"@site/versioned_docs/version-1.x/tutorials/simple-todo-list/1-installation.md",slug:"/tutorials/simple-todo-list/1-installation",permalink:"/foal/docs/1.x/tutorials/simple-todo-list/1-installation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/simple-todo-list/1-installation.md",version:"1.x"},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"installation"},"Installation"),Object(o.b)("p",null,"In this tutorial you will learn how to create a basic web application with FoalTS. The demo application is a simple to-do list with which users can view, create and delete their tasks."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Requirements:")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js")," 8 or greater")),Object(o.b)("h1",{id:"create-a-new-project"},"Create a New Project"),Object(o.b)("p",null,"First you need to install globaly the ",Object(o.b)("em",{parentName:"p"},"Command Line Interface (CLI)")," of FoalTS. It will help you create a new project and generate files all along your development."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install -g @foal/cli\n")),Object(o.b)("p",null,"Then create a new application."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"foal createapp my-app\n")),Object(o.b)("p",null,"This command generates a new directory with the basic structure of the new application. It also installs all the dependencies. Let's look at what ",Object(o.b)("inlineCode",{parentName:"p"},"createapp")," created:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"my-app/\n  config/\n  node_modules/\n  public/\n  src/\n    app/\n    e2e/\n    scripts/\n  ormconfig.js\n  package.json\n  tsconfig.*.json\n  .eslintrc.js\n")),Object(o.b)("p",null,"The outer ",Object(o.b)("inlineCode",{parentName:"p"},"my-app")," root directory is just a container for your project."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"config/")," directory contains configuration files for your different environments (production, test, development, e2e, etc)."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules/")," directory contains all the prod and dev dependencies of your project."),Object(o.b)("li",{parentName:"ul"},"The static files are located in the ",Object(o.b)("inlineCode",{parentName:"li"},"public/")," directory. They are usually images, CSS and client JavaScript files and are served directly when the server is running."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"src/")," directory contains all the source code of the application.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The inner ",Object(o.b)("inlineCode",{parentName:"li"},"app/")," directory includes the components of your server (controllers, services and hooks)."),Object(o.b)("li",{parentName:"ul"},"End-to-end tests are located in the ",Object(o.b)("inlineCode",{parentName:"li"},"e2e/")," directory."),Object(o.b)("li",{parentName:"ul"},"The inner ",Object(o.b)("inlineCode",{parentName:"li"},"scripts/")," folder contains scripts intended to be called from the command line (ex: create-user)."))),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"ormconfig.js")," file defines the configuration and credentials of the database(s) connection(s). They can also be passed through environment variables."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," lists the dependencies and commands of the project."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"tsconfig.*.json")," files list the TypeScript compiler configuration for each ",Object(o.b)("inlineCode",{parentName:"li"},"npm")," command."),Object(o.b)("li",{parentName:"ul"},"Finally the linting configuration can be found in the ",Object(o.b)("inlineCode",{parentName:"li"},".eslintrc.js")," file.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"TypeScript")),Object(o.b)("p",{parentName:"blockquote"},"The language used to develop a FoalTS application is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),". It is a typed superset of JavaScript that compiles to plain JavaScript. The benefits of using TypeScript are many, but in summary, the language provides great tools and the future features of JavaScript.")),Object(o.b)("h1",{id:"start-the-server"},"Start The Server"),Object(o.b)("p",null,"Let's verify that the FoalTS project works. Run the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"cd my-app\nnpm run develop\n")),Object(o.b)("p",null,"You've started the development server."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("strong",{parentName:"p"},"development server")," watches at your files and automatically compiles and reloads your code. You don\u2019t need to restart the server each time you make code changes. Note that it is only intended to be used in development, do not use it on production.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Port 3001 already in use?")),Object(o.b)("p",{parentName:"blockquote"},"You can define in ",Object(o.b)("inlineCode",{parentName:"p"},"config/default.json")," which port the application is using.")),Object(o.b)("p",null,"Go to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3001"}),"http://localhost:3001")," in your browser. You should see the text ",Object(o.b)("em",{parentName:"p"},"Welcome to the future"),"."),Object(o.b)("p",null,"Congratulations, you now have a server running!"))}s.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);