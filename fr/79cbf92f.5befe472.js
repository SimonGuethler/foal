(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(283)),i={title:"Installation"},l={unversionedId:"tutorials/mongodb-todo-list/1-installation",id:"version-1.x/tutorials/mongodb-todo-list/1-installation",isDocsHomePage:!1,title:"Installation",description:"In this tutorial you will learn how to create a basic web application with FoalTS and MongoDB. The demo application is a simple to-do list with which users can view, create and delete their tasks.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/1-installation.md",slug:"/tutorials/mongodb-todo-list/1-installation",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/1-installation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/1-installation.md",version:"1.x",sidebar:"someSidebar",previous:{title:"E2E Testing and Authentication",permalink:"/fr/docs/1.x/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication"},next:{title:"Introduction",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/2-introduction"}},c=[{value:"Create a New Project",id:"create-a-new-project",children:[]},{value:"Start The Server",id:"start-the-server",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this tutorial you will learn how to create a basic web application with FoalTS and MongoDB. The demo application is a simple to-do list with which users can view, create and delete their tasks."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Requirements:")),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js")," 8 or greater"),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/administration/install-community/"}),"MongoDB"))),Object(r.b)("h2",{id:"create-a-new-project"},"Create a New Project"),Object(r.b)("p",null,"First you need to install globaly the ",Object(r.b)("em",{parentName:"p"},"Command Line Interface (CLI)")," of FoalTS. It will help you create a new project and generate files all along your development."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install -g @foal/cli\n")),Object(r.b)("p",null,"Then create a new application. ",Object(r.b)("strong",{parentName:"p"},"Don't forget the --mongodb option.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"foal createapp my-app --mongodb\n")),Object(r.b)("p",null,"This command generates a new directory with the basic structure of the new application. It also installs all the dependencies. Let's look at what ",Object(r.b)("inlineCode",{parentName:"p"},"createapp")," created:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"my-app/\n  config/\n  node_modules/\n  public/\n  src/\n    app/\n    e2e/\n    scripts/\n  package.json\n  tsconfig.*.json\n  .eslintrc.js\n")),Object(r.b)("p",null,"The outer ",Object(r.b)("inlineCode",{parentName:"p"},"my-app")," root directory is just a container for your project."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"config/")," directory contains configuration files for your different environments (production, test, development, e2e, etc)."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules/")," directory contains all the prod and dev dependencies of your project."),Object(r.b)("li",{parentName:"ul"},"The static files are located in the ",Object(r.b)("inlineCode",{parentName:"li"},"public/")," directory. They are usually images, CSS and client JavaScript files and are served directly when the server is running."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"src/")," directory contains all the source code of the application.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The inner ",Object(r.b)("inlineCode",{parentName:"li"},"app/")," directory includes the components of your server (controllers, services and hooks)."),Object(r.b)("li",{parentName:"ul"},"End-to-end tests are located in the ",Object(r.b)("inlineCode",{parentName:"li"},"e2e/")," directory."),Object(r.b)("li",{parentName:"ul"},"The inner ",Object(r.b)("inlineCode",{parentName:"li"},"scripts/")," folder contains scripts intended to be called from the command line (ex: create-user)."))),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," lists the dependencies and commands of the project."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"tsconfig.*.json")," files list the TypeScript compiler configuration for each ",Object(r.b)("inlineCode",{parentName:"li"},"npm")," command."),Object(r.b)("li",{parentName:"ul"},"Finally the linting configuration can be found in the ",Object(r.b)("inlineCode",{parentName:"li"},".eslintrc.js")," file.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"TypeScript")),Object(r.b)("p",{parentName:"blockquote"},"The language used to develop a FoalTS application is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),". It is a typed superset of JavaScript that compiles to plain JavaScript. The benefits of using TypeScript are many, but in summary, the language provides great tools and the future features of JavaScript.")),Object(r.b)("h2",{id:"start-the-server"},"Start The Server"),Object(r.b)("p",null,"Let's verify that the FoalTS project works. Run the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd my-app\nnpm run develop\n")),Object(r.b)("p",null,"You've started the development server."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("strong",{parentName:"p"},"development server")," watches at your files and automatically compiles and reloads your code. You don\u2019t need to restart the server each time you make code changes. Note that it is only intended to be used in development, do not use it on production.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Port 3001 already in use?")),Object(r.b)("p",{parentName:"blockquote"},"You can define in ",Object(r.b)("inlineCode",{parentName:"p"},"config/default.json")," which port the application is using.")),Object(r.b)("p",null,"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:3001")," in your browser. You should see the text ",Object(r.b)("em",{parentName:"p"},"Welcome to the future"),"."),Object(r.b)("p",null,"Congratulations, you now have a server running!"))}s.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);