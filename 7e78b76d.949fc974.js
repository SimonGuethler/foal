(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(251)),i={title:"E2E Testing & Authentication",sidebar_label:"E2E Testing & Auth"},s={unversionedId:"tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",id:"tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",isDocsHomePage:!1,title:"E2E Testing & Authentication",description:"The last part of this tutorial explains how to write and run end-to-end tests. The purpose of these tests is not to verify that each feature of each component works, but to check that these components work properly together.",source:"@site/docs/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication.md",slug:"/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",permalink:"/foal/docs/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication.md",version:"current",sidebar_label:"E2E Testing & Auth",sidebar:"someSidebar",previous:{title:"The Sign Up Page",permalink:"/foal/docs/tutorials/multi-user-todo-list/7-the-signup-page"},next:{title:"Architecture Overview",permalink:"/foal/docs/architecture/architecture-overview"}},c=[],u={rightToc:c};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The last part of this tutorial explains how to write and run ",Object(a.b)("em",{parentName:"p"},"end-to-end")," tests. The purpose of these tests is not to verify that each feature of each component works, but to check that these components work properly together."),Object(a.b)("p",null,"The tests are located in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/e2e/")," directory. The command to run them in development is ",Object(a.b)("inlineCode",{parentName:"p"},"npm run e2e"),". E2E tests generally use the ",Object(a.b)("inlineCode",{parentName:"p"},"supertest")," library which provides a high-level abstraction for testing HTTP."),Object(a.b)("p",null,"Open ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts")," in ",Object(a.b)("inlineCode",{parentName:"p"},"src/e2e")," and replace its content."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok } from 'assert';\n\n// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { getConnection } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\nimport { User } from '../app/entities';\n\n// Define a group of tests.\ndescribe('The server', () => {\n\n  let app: any;\n\n  // Create the application and the connection to the database before running all the tests.\n  before(async () => {\n    app = await createApp(AppController);\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => getConnection().close());\n\n  // Define a nested group of tests.\n  describe('on GET /api/todos requests', () => {\n\n    it('should return a 401 status if the user did not signed in.', () => {\n      return request(app)\n        .get('/api/todos')\n        .expect(401);\n    });\n\n    it('should return a 200 status if the user did signed in.', async () => {\n      // Create a new user in the empty database.\n      const user = new User();\n      user.email = 'john@foalts.org';\n      await user.setPassword('john_password');\n      await getConnection().manager.save(user);\n\n      // Log the user in.\n      let cookie = '';\n      await request(app)\n        .post('/auth/login')\n        // Set the body of the request\n        .send({ email: 'john@foalts.org', password: 'john_password' })\n        // The response should have the status 302 (redirection)\n        .expect(302)\n        .then(data => {\n          // The response should set the authentication cookie for the next requests.\n          ok(Array.isArray(data.header['set-cookie']));\n          // Save the cookie to be able to use it in further requests.\n          cookie = data.header['set-cookie'][0];\n        });\n\n      // Test the /api/todos endpoint when the user has logged in.\n      return request(app)\n        .get('/api/todos')\n        // Send the authentication cookie.\n        .set('Cookie', cookie)\n        .expect(200);\n    });\n\n  });\n\n});\n\n")),Object(a.b)("p",null,"Now run the tests."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run e2e\n")),Object(a.b)("p",null,"The output should look like this:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"E2E tests output",src:n(324).default})),Object(a.b)("p",null,"Congratulations, you have reached the end of this tutorial!"))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),h=r,f=l["".concat(i,".").concat(h)]||l[h]||d[h]||a;return n?o.a.createElement(f,s(s({ref:t},u),{},{components:n})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/e2e_output-9e64eb8bb5f440d42cd2716e4215dde4.png"}}]);