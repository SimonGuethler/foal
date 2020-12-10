(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(251)),l={title:"REST API"},i={unversionedId:"api-section/rest-blueprints",id:"api-section/rest-blueprints",isDocsHomePage:!1,title:"REST API",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/api-section/rest-blueprints.md",slug:"/api-section/rest-blueprints",permalink:"/foal/docs/api-section/rest-blueprints",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/api-section/rest-blueprints.md",version:"current",sidebar:"someSidebar",previous:{title:"Groups and Permissions",permalink:"/foal/docs/authentication-and-access-control/groups-and-permissions"},next:{title:"OpenAPI & Swagger UI",permalink:"/foal/docs/api-section/openapi-and-swagger-ui"}},c=[{value:"The API Behavior",id:"the-api-behavior",children:[]},{value:"The Resource and its Representation",id:"the-resource-and-its-representation",children:[{value:"How to Add New Field",id:"how-to-add-new-field",children:[]}]},{value:"Using Authentication",id:"using-authentication",children:[]},{value:"Generating OpenAPI documentation",id:"generating-openapi-documentation",children:[]}],b={rightToc:c};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"foal generate rest-api product --register\n")),Object(o.b)("p",null,"Building a REST API is often a common task when creating an application. To avoid reinventing the wheel, FoalTS provides a CLI command to achieve this."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"foal generate rest-api <name> [--register] [--auth]\n")),Object(o.b)("p",null,"This command generates three files: an entity, a controller and the controller's test. Depending on your directory structure, they may be generated in different locations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If two directories ",Object(o.b)("inlineCode",{parentName:"li"},"entities")," and ",Object(o.b)("inlineCode",{parentName:"li"},"controllers")," exist, the files are created in these ones."),Object(o.b)("li",{parentName:"ul"},"Otherwise they all are created in the current directory.")),Object(o.b)("p",null,"The generated controller already has a set of implemented routes ",Object(o.b)("strong",{parentName:"p"},"that you can customize as you like"),". It defines a REST API and is ready to use. The only thing to do is to connect the controller to the ",Object(o.b)("inlineCode",{parentName:"p"},"AppController")," or one of its children."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"--register")," option automatically registers your controller in the ",Object(o.b)("inlineCode",{parentName:"p"},"AppController"),".")),Object(o.b)("h2",{id:"the-api-behavior"},"The API Behavior"),Object(o.b)("p",null,"Below is a table summarizing how the generated API works:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"th"},"HTTP Method")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"th"},"CRUD")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"th"},"Entire Collection (e.g. ",Object(o.b)("inlineCode",{parentName:"em"},"/products"),")")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"th"},"Specific Item (e.g. ",Object(o.b)("inlineCode",{parentName:"em"},"/products/{id}"),")")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GET"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"200 (OK) - list of products"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"200 (OK) - the product ",Object(o.b)("br",null)," 404 (Not Found)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"POST"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Create"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"201 (Created) - the created product ",Object(o.b)("br",null)," 400 (Bad Request) - the validation error"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not implemented"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PUT"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Update/Replace"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not implemented"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"200 (OK) - the updated product ",Object(o.b)("br",null)," 400 (Bad Request) - the validation error ",Object(o.b)("br",null)," 404 (Not Found)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PATCH"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Update/Modify"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not implemented"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"200 (OK) - the updated product ",Object(o.b)("br",null)," 400 (Bad Request) - the validation error ",Object(o.b)("br",null)," 404 (Not Found)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DELETE"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not implemented"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"204 (No Content) ",Object(o.b)("br",null)," 404 (Not Found)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"GET /<name>s")," routes also accept two optional query parameters ",Object(o.b)("inlineCode",{parentName:"p"},"skip")," and ",Object(o.b)("inlineCode",{parentName:"p"},"take")," to handle ",Object(o.b)("strong",{parentName:"p"},"pagination"),". If the parameters are not valid numbers, the controller responds with a 400 (Bad Request) status."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"skip")," - offset from where items should be taken."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"take")," - max number of items that should be taken.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /products?skip=10&take=20\n")),Object(o.b)("h2",{id:"the-resource-and-its-representation"},"The Resource and its Representation"),Object(o.b)("p",null,"Once your API is set up, you can define its attributes."),Object(o.b)("p",null,"The entity generated by default should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n}\n")),Object(o.b)("p",null,"And the schema of your API (defined in the controller file) should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const productSchhema = {\n  additionalProperties: false,\n  properties: {\n    text: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n")),Object(o.b)("p",null,"The entity is the ",Object(o.b)("em",{parentName:"p"},"resource"),". It is the database model used internally on the server."),Object(o.b)("p",null,"The schema is the ",Object(o.b)("em",{parentName:"p"},"representation of the resource"),". It defines the interface of the API."),Object(o.b)("p",null,"In simple scenarios, the two are very similar but they can differ much more in complex applications. A resource may have several representations and it may be made of several entities."),Object(o.b)("h3",{id:"how-to-add-new-field"},"How to Add New Field"),Object(o.b)("p",null,"For example, if you want to add a ",Object(o.b)("inlineCode",{parentName:"p"},"sold")," boolean field whose default value is ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", you can do the following:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"product.entity.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n  @Column()\n  sold: boolean;\n\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"product.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const productSchhema = {\n  additionalProperties: false,\n  properties: {\n    sold: { type: 'boolean', default: false },\n    text: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n")),Object(o.b)("h2",{id:"using-authentication"},"Using Authentication"),Object(o.b)("p",null,"If you wish to attach a user to the resource, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"--auth")," flag to do so."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"foal generate rest-api product --auth\n")),Object(o.b)("p",null,"This flags adds an ",Object(o.b)("inlineCode",{parentName:"p"},"owner: User")," column to your entity and uses it in the API."),Object(o.b)("h2",{id:"generating-openapi-documentation"},"Generating OpenAPI documentation"),Object(o.b)("p",null,"The generated controllers also have OpenAPI decorators on their methods to document the API."),Object(o.b)("p",null,"In this way, when the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/deployment-and-environments/configuration"}),"configuration key")," ",Object(o.b)("inlineCode",{parentName:"p"},"settings.openapi.useHooks")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", we can get a full documentation of the API using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/api-section/openapi-and-swagger-ui"}),"Swagger UI")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Example of documentation",src:n(328).default}),"."))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},328:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rest-openapi-28b755aa0e71f5a2a6ec387ea2c8ec98.png"}}]);