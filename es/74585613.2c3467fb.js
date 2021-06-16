(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{168:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return s}));var r=t(3),n=t(7),c=(t(0),t(283)),o={title:"Introducci\xf3n"},i={unversionedId:"tutorials/real-world-example-with-react/1-introduction",id:"tutorials/real-world-example-with-react/1-introduction",isDocsHomePage:!1,title:"Introducci\xf3n",description:"Este tutorial muestra c\xf3mo construir una aplicaci\xf3n del mundo real con React y Foal. Asume que ya ha le\xeddo la primera gu\xeda C\xf3mo construir una lista de tareas simple y que tiene un conocimiento b\xe1sico de React.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/1-introduction.md",slug:"/tutorials/real-world-example-with-react/1-introduction",permalink:"/es/docs/tutorials/real-world-example-with-react/1-introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/1-introduction.md",version:"current",sidebar:"someSidebar",previous:{title:"Pruebas Unitarias",permalink:"/es/docs/tutorials/simple-todo-list/7-unit-testing"},next:{title:"Base de Datos (configuraci\xf3n)",permalink:"/es/docs/tutorials/real-world-example-with-react/2-database-set-up"}},l=[{value:"Descripci\xf3n de la Aplicaci\xf3n",id:"descripci\xf3n-de-la-aplicaci\xf3n",children:[]},{value:"Empezar",id:"empezar",children:[]}],u={toc:l};function s(e){var a=e.components,o=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,o,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Este tutorial muestra c\xf3mo construir una aplicaci\xf3n del mundo real con React y Foal. Asume que ya ha le\xeddo la primera gu\xeda ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/es/docs/tutorials/simple-todo-list/1-installation"}),"C\xf3mo construir una lista de tareas simple"))," y que tiene un conocimiento b\xe1sico de React."),Object(c.b)("p",null,"En este tutorial, aprender\xe1 a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"establecer una conexi\xf3n con MySQL o Postgres,"),Object(c.b)("li",{parentName:"ul"},"proporcionar credenciales a la aplicaci\xf3n de forma segura,"),Object(c.b)("li",{parentName:"ul"},"crear modelos con relaciones muchos-a-uno,"),Object(c.b)("li",{parentName:"ul"},"utilizar un constructor de consultas,"),Object(c.b)("li",{parentName:"ul"},"generar una interfaz para probar su API (Swagger UI),"),Object(c.b)("li",{parentName:"ul"},"arreglar los errores de la pol\xedtica del mismo origen,"),Object(c.b)("li",{parentName:"ul"},"permitir que los usuarios se conecten y se registren con un correo electr\xf3nico y una contrase\xf1a,"),Object(c.b)("li",{parentName:"ul"},"autenticar a los usuarios en el frontend y en el backend,"),Object(c.b)("li",{parentName:"ul"},"gestionar el control de acceso,"),Object(c.b)("li",{parentName:"ul"},"proteger contra los ataques CSRF,"),Object(c.b)("li",{parentName:"ul"},"subir y guardar archivos,"),Object(c.b)("li",{parentName:"ul"},"permitir a los usuarios conectarse con un proveedor social (Google),"),Object(c.b)("li",{parentName:"ul"},"y construir la aplicaci\xf3n para la producci\xf3n.")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("em",{parentName:"p"},"Para simplificar, la aplicaci\xf3n front-end no utilizar\xe1 una biblioteca de gesti\xf3n de estado (como ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://redux.js.org/"}),"redux"),"). Pero, por supuesto, puede a\xf1adir una si lo desea. La l\xf3gica a seguir seguir\xe1 siendo principalmente la misma."))),Object(c.b)("h2",{id:"descripci\xf3n-de-la-aplicaci\xf3n"},"Descripci\xf3n de la Aplicaci\xf3n"),Object(c.b)("p",null,"La aplicaci\xf3n que crear\xe1 es un sitio web social donde los usuarios pueden compartir enlaces interesantes a tutoriales. Todos los posts ser\xe1n p\xfablicos, por lo que no ser\xe1 necesaria la autentificaci\xf3n para verlos. La publicaci\xf3n de un post, en cambio, requerir\xe1 la creaci\xf3n de una cuenta."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"P\xe1gina principal"),"\n",Object(c.b)("img",{alt:"Feed page",src:t(394).default})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"P\xe1gina de perfil"),"\n",Object(c.b)("img",{alt:"Profile page",src:t(395).default})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"P\xe1ginas de registro e inicio de sesi\xf3n"),"\n",Object(c.b)("img",{alt:"Registration and login pages",src:t(396).default})),Object(c.b)("h2",{id:"empezar"},"Empezar"),Object(c.b)("p",null,"Comencemos. En primer lugar, cree un nuevo directorio."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir foal-react-tuto\n")),Object(c.b)("p",null,"Genere la aplicaci\xf3n backend."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd foal-react-tuto\nfoal createapp backend-app\n")),Object(c.b)("p",null,"Luego inicie el servidor de desarrollo."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd backend-app\nnpm run develop\n")),Object(c.b)("p",null,"Vaya a ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3001"}),"http://localhost:3001")," en su navegador. Deber\xeda ver el mensaje ",Object(c.b)("em",{parentName:"p"},"Welcome on board"),"."))}s.isMDXComponent=!0},283:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=n.a.createContext({}),s=function(e){var a=n.a.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.a.createElement(u.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return t?n.a.createElement(m,i(i({ref:a},u),{},{components:t})):n.a.createElement(m,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},394:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/feed-cafaeeea52a28612177a5a70e6c1cf12.png"},395:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/profile-d12409506e2332f8a2ef8391801ef85d.png"},396:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/sign-up-and-log-in-ea14815a2f012118eef7e058bd93c500.png"}}]);