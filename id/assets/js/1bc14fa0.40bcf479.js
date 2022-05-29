"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9073],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(r),d=o,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4630:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Version 2.9 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.9-release-notes.png",tags:["release"]},s=void 0,u={permalink:"/id/blog/2022/05/29/version-2.9-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-05-29-version-2.9-release-notes.md",source:"@site/blog/2022-05-29-version-2.9-release-notes.md",title:"Version 2.9 release notes",description:"Banner",date:"2022-05-29T00:00:00.000Z",formattedDate:"29 Mei 2022",tags:[{label:"release",permalink:"/id/blog/tags/release"}],readingTime:1.19,truncated:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.9 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.9-release-notes.png",tags:["release"]},nextItem:{title:"Version 2.8 release notes",permalink:"/id/blog/2022/02/13/version-2.8-release-notes"}},c={authorsImageUrls:[void 0]},p=[{value:"New OAuth2 Twitter Provider",id:"new-oauth2-twitter-provider",children:[],level:2},{value:"OAuth2 Providers support PKCE Code Flow",id:"oauth2-providers-support-pkce-code-flow",children:[],level:2},{value:"Support for version 15 of <code>graphql</code> and latest version of <code>type-graphql</code>",id:"support-for-version-15-of-graphql-and-latest-version-of-type-graphql",children:[],level:2}],h={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:r(225).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"Version 2.9 of ",(0,a.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," has been released! Here are the improvements that it brings."),(0,a.kt)("h2",{id:"new-oauth2-twitter-provider"},"New OAuth2 Twitter Provider"),(0,a.kt)("p",null,"After LinkedIn, Google, Github and Facebook, Foal now supports Twitter for social authentication."),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://foalts.org/docs/authentication-and-access-control/social-auth/"},"Link to the documentation")),(0,a.kt)("p",null,"A big thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LeonardoSalvucci"},"@LeonardoSalvucci")," for having implemented this feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Context, dependency, Get } from '@foal/core';\nimport { TwitterProvider } from '@foal/social';\n\nexport class AuthController {\n  @dependency\n  twitter: TwitterProvider;\n\n  @Get('/signin/twitter')\n  redirectToTwitter() {\n    // Your \"Login In with Twitter\" button should point to this route.\n    // The user will be redirected to Twitter auth page.\n    return this.twitter.redirect();\n  }\n\n  @Get('/signin/twitter/callback')\n  async handleTwitterRedirection(ctx: Context) {\n    // Once the user gives their permission to log in with Twitter, the OAuth server\n    // will redirect the user to this route. This route must match the redirect URI.\n    const { userInfo, tokens } = await this.twitter.getUserInfo(ctx);\n\n    // Do something with the user information AND/OR the access token.\n    // If you only need the access token, you can call the \"getTokens\" method.\n\n    // The method usually ends with a HttpResponseRedirect object as returned value.\n  }\n\n}\n")),(0,a.kt)("h2",{id:"oauth2-providers-support-pkce-code-flow"},"OAuth2 Providers support PKCE Code Flow"),(0,a.kt)("p",null,"OAuth2 abstract provider now supports PKCE code flow. If you wish to implement your own provider using PKCE, it's now possible!"),(0,a.kt)("h2",{id:"support-for-version-15-of-graphql-and-latest-version-of-type-graphql"},"Support for version 15 of ",(0,a.kt)("inlineCode",{parentName:"h2"},"graphql")," and latest version of ",(0,a.kt)("inlineCode",{parentName:"h2"},"type-graphql")),(0,a.kt)("p",null,"Foal's dependencies have been updated so as to support the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://typegraphql.com/"},"TypeGraphQL"),"."))}d.isMDXComponent=!0},225:function(e,t,r){t.Z=r.p+"assets/images/banner-806ff1a639dfecd02edfc7b99c9af462.png"}}]);