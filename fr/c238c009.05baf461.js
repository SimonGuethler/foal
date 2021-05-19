(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(273)),i={title:"Version 2.3 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.3-release-notes.png",tags:["release"]},s={permalink:"/fr/blog/2021/04/22/version-2.3-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-04-22-version-2.3-release-notes.md",source:"@site/blog/2021-04-22-version-2.3-release-notes.md",description:"Banner",date:"2021-04-22T00:00:00.000Z",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],title:"Version 2.3 release notes",readingTime:2.07,truncated:!0,prevItem:{title:"Version 2.4 release notes",permalink:"/fr/blog/2021/05/19/version-2.4-release-notes"},nextItem:{title:"What's new in version 2 (part 4/4)",permalink:"/fr/blog/2021/04/08/whats-new-in-version-2-part-4"}},l=[{value:"GraphiQL",id:"graphiql",children:[]},{value:"Support for <code>.env.local</code> files",id:"support-for-envlocal-files",children:[]},{value:"Prisma documentation",id:"prisma-documentation",children:[]},{value:"Base 64 and base 64 URL utilities",id:"base-64-and-base-64-url-utilities",children:[]},{value:"Converting Streams to Buffers",id:"converting-streams-to-buffers",children:[]},{value:"Accessing services during authentication",id:"accessing-services-during-authentication",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[{value:"Social authentication",id:"social-authentication",children:[]}]}],c={toc:l};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Banner",src:n(304).default})),Object(o.b)("p",null,"Version 2.3 of Foal has been released! Here are the improvements that it brings."),Object(o.b)("h2",{id:"graphiql"},"GraphiQL"),Object(o.b)("p",null,"From version 2.3, it is possible to generate a GraphiQL page in one line of code. This can be useful if you quickly need to test your API."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @foal/graphiql\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"GraphiQL",src:n(410).default})),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphiQLController } from '@foal/graphiql';\n\nimport { GraphqlApiController } from './services';\n\nexport class AppController {\n\n  subControllers = [\n    // ...\n    controller('/graphql', GraphqlApiController),\n    controller('/graphiql', GraphiQLController)\n  ];\n\n}\n")),Object(o.b)("p",null,"The page is also customizable and you can provide additional options to change the UI or the API endpoint."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class GraphiQL2Controller extends GraphiQLController {\n\n  cssThemeURL = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/theme/solarized.css';\n\n  apiEndpoint = '/api';\n\n  options: GraphiQLControllerOptions = {\n    docExplorerOpen: true,\n    editorTheme: 'solarized light'\n  }\n\n}\n\n")),Object(o.b)("h2",{id:"support-for-envlocal-files"},"Support for ",Object(o.b)("inlineCode",{parentName:"h2"},".env.local")," files"),Object(o.b)("p",null,"Foal's configuration system already supported ",Object(o.b)("inlineCode",{parentName:"p"},".env")," files in previous versions. As of version 2.3, the framework also supports ",Object(o.b)("inlineCode",{parentName:"p"},".env.local")," files."),Object(o.b)("p",null,"This can be useful in case you want to have two ",Object(o.b)("inlineCode",{parentName:"p"},".env")," files, one to define the default env vars needed by the application and another to override these values on your local machine."),Object(o.b)("p",null,"If a variable is defined in both files, the value in the ",Object(o.b)("inlineCode",{parentName:"p"},".env.local")," file will take precedence."),Object(o.b)("p",null,"Similarly, you can also define environment-specific local files (",Object(o.b)("inlineCode",{parentName:"p"},".env.development.local"),", ",Object(o.b)("inlineCode",{parentName:"p"},".env.production.local"),", etc)."),Object(o.b)("h2",{id:"prisma-documentation"},"Prisma documentation"),Object(o.b)("p",null,"The documentation has been expanded to include ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://foalts.org/docs/databases/using-another-orm"}),"examples")," of how to use Prisma with Foal."),Object(o.b)("h2",{id:"base-64-and-base-64-url-utilities"},"Base 64 and base 64 URL utilities"),Object(o.b)("p",null,"Two functions are provided to convert base64 encoded strings to base64url encoded strings and vice versa."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { convertBase64ToBase64url, convertBase64urlToBase64 } from '@foal/core';\n\nconst str = convertBase64ToBase64url(base64Str);\nconst str2 = convertBase64urlToBase64(base64urlStr);\n")),Object(o.b)("h2",{id:"converting-streams-to-buffers"},"Converting Streams to Buffers"),Object(o.b)("p",null,"In case you need to convert a readable stream to a concatenated buffer during testing, you can now use the ",Object(o.b)("inlineCode",{parentName:"p"},"streamToBuffer")," function for this."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { streamToBuffer } from '@foal/core';\n\nconst buffer = await streamToBuffer(stream);\n")),Object(o.b)("h2",{id:"accessing-services-during-authentication"},"Accessing services during authentication"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"user")," option of ",Object(o.b)("inlineCode",{parentName:"p"},"@JWTRequired")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@UseSessions")," now gives you the possibility to access services."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class UserService {\n  getUser(id) {\n    return User.findOne({ id });\n  }\n}\n\n@JWTRequired({\n  user: (id, services) => services.get(UserService).getUser(id)\n})\nclass ApiController {\n  @Get('/products')\n  getProducts(ctx: Context) {\n    // ctx.user is the object returned by UserService.\n  }\n}\n\n")),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("h3",{id:"social-authentication"},"Social authentication"),Object(o.b)("p",null,"Social authentication controllers could sometimes return 500 errors, depending on the social provider you were using. This was due to a problem of string encoding in the callback URL. This bug has been fixed in this version."))}p.isMDXComponent=!0},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},304:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/banner-eff22c27909b97d4b8e82b0ebe849046.png"},410:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/graphiql-f099ed2191f41190bd6569d1b5cd1267.png"}}]);