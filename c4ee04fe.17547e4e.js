(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{211:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var o=t(3),a=t(7),r=(t(0),t(251)),i={},c={unversionedId:"databases/mongodb",id:"version-1.x/databases/mongodb",isDocsHomePage:!1,title:"mongodb",description:"MongoDB",source:"@site/versioned_docs/version-1.x/databases/mongodb.md",slug:"/databases/mongodb",permalink:"/foal/docs/1.x/databases/mongodb",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/mongodb.md",version:"1.x"},b=[{value:"Usage with Mongoose",id:"usage-with-mongoose",children:[{value:"Generating a new project with Mongoose",id:"generating-a-new-project-with-mongoose",children:[]},{value:"Generating a model",id:"generating-a-model",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Authentication",id:"authentication",children:[]}]},{value:"Usage with TypeORM",id:"usage-with-typeorm",children:[{value:"Configuration",id:"configuration-1",children:[]},{value:"Authentication",id:"authentication-1",children:[]}]},{value:"Limitations",id:"limitations",children:[]}],l={rightToc:b};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"mongodb"},"MongoDB"),Object(r.b)("p",null,"FoalTS provides two ways to interact with a MongoDB database in your application: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mongoosejs.com/"}),"Mongoose")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://typeorm.io/#/"}),"TypeORM"),"."),Object(r.b)("h2",{id:"usage-with-mongoose"},"Usage with Mongoose"),Object(r.b)("h3",{id:"generating-a-new-project-with-mongoose"},"Generating a new project with Mongoose"),Object(r.b)("p",null,"When creating an application with the ",Object(r.b)("inlineCode",{parentName:"p"},"--mongodb")," flag, the CLI generates a new project with ",Object(r.b)("inlineCode",{parentName:"p"},"mongoose")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@foal/mongoose")," installed. The ",Object(r.b)("inlineCode",{parentName:"p"},"User")," model is defined using this ODM as well as the ",Object(r.b)("inlineCode",{parentName:"p"},"create-user")," script."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal createapp my-app --mongodb\n")),Object(r.b)("h3",{id:"generating-a-model"},"Generating a model"),Object(r.b)("p",null,"You cannot create ",Object(r.b)("em",{parentName:"p"},"entities")," in a Mongoose project, as it is specific to TypeORM. Instead, you can use this command to generate a new model:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal g model <name>\n")),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"The URI of the MongoDB database can be passed through:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the config file ",Object(r.b)("inlineCode",{parentName:"li"},"config/default.json")," with the ",Object(r.b)("inlineCode",{parentName:"li"},"mongodb.uri")," key,"),Object(r.b)("li",{parentName:"ul"},"or with the environment variable ",Object(r.b)("inlineCode",{parentName:"li"},"MONGODB_URI"),".")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example (",Object(r.b)("inlineCode",{parentName:"em"},"config/default.json"),")"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "mongodb": {\n    "uri": "mongodb://localhost:27017/db"\n  }\n}\n')),Object(r.b)("h3",{id:"authentication"},"Authentication"),Object(r.b)("h4",{id:"the-mongodbstore"},"The ",Object(r.b)("inlineCode",{parentName:"h4"},"MongoDBStore")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install @foal/mongodb\n")),Object(r.b)("p",null,"If you use sessions with ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenRequired")," or ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenOptional"),", you must use the ",Object(r.b)("inlineCode",{parentName:"p"},"MongoDBStore")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@foal/mongodb"),"."),Object(r.b)("h4",{id:"the-fetchuser-function"},"The ",Object(r.b)("inlineCode",{parentName:"h4"},"fetchUser")," function"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example with JSON Web Tokens"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { JWTRequired } from '@foal/jwt';\nimport { fetchUser } from '@foal/mongoose';\n\nimport { User } from '../models';\n\n@JWTRequired({ user: fetchUser(User) })\nclass MyController {}\n")),Object(r.b)("h2",{id:"usage-with-typeorm"},"Usage with TypeORM"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm uninstall sqlite3\nnpm install mongodb\n")),Object(r.b)("h3",{id:"configuration-1"},"Configuration"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"ormconfig.js")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: \"mongodb\",\n  database: Config.get2('database.database', 'string'),\n  dropSchema: Config.get2('database.dropSchema', 'boolean', false),\n  entities: [\"build/app/**/*.entity.js\"],\n  host: Config.get2('database.host', 'string'),\n  port: Config.get2('database.port', 'number'),\n  synchronize: Config.get2('database.synchronize', 'boolean', false)\n}\n\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"config/default.json")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "database": {\n    "database": "mydb",\n    "host": "localhost",\n    "port": 27017\n  }\n}\n')),Object(r.b)("h3",{id:"authentication-1"},"Authentication"),Object(r.b)("h4",{id:"the-mongodbstore-1"},"The ",Object(r.b)("inlineCode",{parentName:"h4"},"MongoDBStore")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install @foal/mongodb\n")),Object(r.b)("p",null,"If you use sessions with ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenRequired")," or ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenOptional"),", you must use the ",Object(r.b)("inlineCode",{parentName:"p"},"MongoDBStore")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@foal/mongodb"),". ",Object(r.b)("strong",{parentName:"p"},"The TypeORMStore does not work with noSQL databases.")),Object(r.b)("h4",{id:"the-fetchmongodbuser-function"},"The ",Object(r.b)("inlineCode",{parentName:"h4"},"fetchMongoDBUser")," function"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"user.entity.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Entity, ObjectID, ObjectIdColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @ObjectIdColumn()\n  id: ObjectID;\n\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example with JSON Web Tokens"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { JWTRequired } from '@foal/jwt';\nimport { fetchMongoDBUser } from '@foal/typeorm';\n\nimport { User } from '../entities';\n\n@JWTRequired({ user: fetchMongoDBUser(User) })\nclass MyController {}\n")),Object(r.b)("h2",{id:"limitations"},"Limitations"),Object(r.b)("p",null,"When using MongoDB, there are some features that are not available:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"foal g rest-api <name>")," command,"),Object(r.b)("li",{parentName:"ul"},"and the ",Object(r.b)("em",{parentName:"li"},"Groups & Permissions")," system.")))}p.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||r;return t?a.a.createElement(u,c(c({ref:n},l),{},{components:t})):a.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);