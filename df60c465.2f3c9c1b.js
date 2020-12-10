(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(251)),s={},o={unversionedId:"authentication-and-access-control/groups-and-permissions",id:"version-1.x/authentication-and-access-control/groups-and-permissions",isDocsHomePage:!1,title:"groups-and-permissions",description:"Groups and Permissions",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/groups-and-permissions.md",slug:"/authentication-and-access-control/groups-and-permissions",permalink:"/foal/docs/1.x/authentication-and-access-control/groups-and-permissions",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/groups-and-permissions.md",version:"1.x"},c=[{value:"Permissions",id:"permissions",children:[{value:"The <code>Permission</code> Entity",id:"the-permission-entity",children:[]},{value:"Creating Permissions Programmatically",id:"creating-permissions-programmatically",children:[]},{value:"Creating Permissions with a Shell Script (CLI)",id:"creating-permissions-with-a-shell-script-cli",children:[]}]},{value:"Groups",id:"groups",children:[{value:"The Group Entity",id:"the-group-entity",children:[]},{value:"Creating Groups Programmatically",id:"creating-groups-programmatically",children:[]},{value:"Creating Groups with a Shell Script (CLI)",id:"creating-groups-with-a-shell-script-cli",children:[]}]},{value:"Users",id:"users",children:[{value:"The <code>UserWithPermissions</code> Entity",id:"the-userwithpermissions-entity",children:[]},{value:"The <code>hasPerm</code> Method",id:"the-hasperm-method",children:[]},{value:"Creating Users with Groups and Permissions with a Shell Script (CLI)",id:"creating-users-with-groups-and-permissions-with-a-shell-script-cli",children:[]}]},{value:"Fetching a User with their Permissions",id:"fetching-a-user-with-their-permissions",children:[]},{value:"The PermissionRequired Hook",id:"the-permissionrequired-hook",children:[]},{value:"BaseEntity Inheritance",id:"baseentity-inheritance",children:[]},{value:"Get All Users with a Given Permission",id:"get-all-users-with-a-given-permission",children:[]}],p={rightToc:c};function l(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"groups-and-permissions"},"Groups and Permissions"),Object(i.b)("p",null,"In advanced applications, access control can be managed through permissions and groups."),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"permission")," gives a user the right to perform a given action (such as accessing a route)."),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"group")," brings together a set of users (a user can belong to more than one group)."),Object(i.b)("p",null,"Permissions can be attached to a user or a group. Attaching a permission to a group is equivalent to attaching the permission to each of its users."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Examples of ",Object(i.b)("em",{parentName:"p"},"groups"),' are the "Free", "Pro" and "Enterprise" plans of a SaaS application. Depending of the price paid by the customers, they have access to certain features whose access are managed by ',Object(i.b)("em",{parentName:"p"},"permissions"),".")),Object(i.b)("h2",{id:"permissions"},"Permissions"),Object(i.b)("h3",{id:"the-permission-entity"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"Permission")," Entity"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Database Link"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Primary auto generated key")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"codeName"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Unique, Length: 100")))),Object(i.b)("h3",{id:"creating-permissions-programmatically"},"Creating Permissions Programmatically"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { getManager, getRepository } from 'typeorm';\n\nimport { Permission } from './src/app/entities';\n\nasync function main() {\n  const perm = new Permission();\n  perm.codeName = 'secret-perm';\n  perm.name = 'Permission to access the secret';\n  await getManager().save(perm);\n  // OR\n  await getManager().save(Permission, {\n    codeName: 'secret-perm',\n    name: 'Permission to access the secret'\n  });\n  // OR\n  await getRepository(Permission).save({\n    codeName: 'secret-perm',\n    name: 'Permission to access the secret'\n  });\n}\n")),Object(i.b)("h3",{id:"creating-permissions-with-a-shell-script-cli"},"Creating Permissions with a Shell Script (CLI)"),Object(i.b)("p",null,"Create a new script with this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"foal generate script create-perm\n")),Object(i.b)("p",null,"Replace the content of the new created file ",Object(i.b)("inlineCode",{parentName:"p"},"src/scripts/create-perm.ts")," with the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { Permission } from '@foal/typeorm';\nimport { createConnection, getConnection, getManager } from 'typeorm';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    codeName: { type: 'string', maxLength: 100 },\n    name: { type: 'string' },\n  },\n  required: [ 'name', 'codeName' ],\n  type: 'object',\n};\n\nexport async function main(args: { codeName: string, name: string }) {\n  const permission = new Permission();\n  permission.codeName = args.codeName;\n  permission.name = args.name;\n\n  await createConnection();\n\n  try {\n    console.log(\n      await getManager().save(permission)\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n")),Object(i.b)("p",null,"Then you can create a permission through the command line."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'npm run build:scripts\nfoal run create-perm name="Permission to access the secret" codeName="access-secret"\n')),Object(i.b)("h2",{id:"groups"},"Groups"),Object(i.b)("p",null,"Groups are used to categorize users. A user can belong to several groups and a group can have several users."),Object(i.b)("p",null,"A group can have permissions. They then apply to all its users."),Object(i.b)("h3",{id:"the-group-entity"},"The Group Entity"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Database Link"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Primary auto generated key")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Length: 80")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"codeName"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Unique, Length: 100")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"permissions"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Permission[]"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A many-to-many relation with the table permission")))),Object(i.b)("h3",{id:"creating-groups-programmatically"},"Creating Groups Programmatically"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { getManager, getRepository } from 'typeorm';\n\nimport { Group, Permission } from './src/app/entities';\n\nasync function main() {\n  const perm = new Permission();\n  perm.codeName = 'delete-users';\n  perm.name = 'Permission to delete users';\n  await getManager().save(perm);\n\n  const group = new Group();\n  group.codeName = 'admin';\n  group.name = 'Administrators';\n  group.permissions = [ perm ];\n  await getManager().save(group);\n  // OR\n  await getManager().save(Group, {\n    codeName: 'admin',\n    name: 'Administrators',\n    permissions: [ perm ],\n  });\n  // OR\n  await getRepository(Group).save({\n    codeName: 'admin',\n    name: 'Administrators',\n    permissions: [ perm ],\n  });\n}\n")),Object(i.b)("h3",{id:"creating-groups-with-a-shell-script-cli"},"Creating Groups with a Shell Script (CLI)"),Object(i.b)("p",null,"Create a new script with this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"foal generate script create-group\n")),Object(i.b)("p",null,"Replace the content of the new created file ",Object(i.b)("inlineCode",{parentName:"p"},"src/scripts/create-group.ts")," with the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { Group, Permission } from '@foal/typeorm';\nimport { createConnection, getManager, getRepository } from 'typeorm';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    codeName: { type: 'string', maxLength: 100 },\n    name: { type: 'string', maxLength: 80 },\n    permissions: { type: 'array', items: { type: 'string' }, uniqueItems: true, default: [] }\n  },\n  required: [ 'name', 'codeName' ],\n  type: 'object',\n};\n\nexport async function main(args: { codeName: string, name: string, permissions: string[] }) {\n  const group = new Group();\n  group.permissions = [];\n  group.codeName = args.codeName;\n  group.name = args.name;\n\n  const connection = await createConnection();\n  try {\n    for (const codeName of args.permissions) {\n      const permission = await getRepository(Permission).findOne({ codeName });\n      if (!permission) {\n        console.log(\n          `No permission with the code name \"${codeName}\" was found.`\n        );\n        return;\n      }\n      group.permissions.push(permission);\n    }\n\n    console.log(\n      await getManager().save(group)\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await connection.close();\n  }\n}\n\n")),Object(i.b)("p",null,"Then you can create a group through the command line."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'npm run build:scripts\nfoal run create-perm name="Permission to delete users" codeName="delete-users"\nfoal run create-group name="Administrators" codeName="admin" permissions="[ \\"delete-users\\" ]"\n')),Object(i.b)("h2",{id:"users"},"Users"),Object(i.b)("h3",{id:"the-userwithpermissions-entity"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"UserWithPermissions")," Entity"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { UserWithPermissions } from '@foal/typeorm';\nimport { Entity } from 'typeorm';\n\n@Entity()\nexport class User extends UserWithPermissions {\n\n}\n\n// You MUST export Group and Permission so that TypeORM can generate migrations.\nexport { Group, Permission } from '@foal/typeorm';\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"UserWithPermissions")," is an abstract class that has useful features to handle access control through permissions and groups. You must extend your ",Object(i.b)("inlineCode",{parentName:"p"},"User")," entity from this class to use permissions and groups."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Database Link"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Primary auto generated key")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"groups"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Group[]"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A many-to-many relation with the table group")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"userPermissions"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Permission[]"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A many-to-many relation with the table permission")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"Relations between Users, Groups and Permissions",src:n(346).default})),Object(i.b)("h3",{id:"the-hasperm-method"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"hasPerm")," Method"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"hasPerm(permissionCodeName: string)")," method of the ",Object(i.b)("inlineCode",{parentName:"p"},"UserWithPermissions")," class returns true if one of these conditions is true:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The user has the required permission."),Object(i.b)("li",{parentName:"ul"},"The user belongs to a group that has the required permission.")),Object(i.b)("h3",{id:"creating-users-with-groups-and-permissions-with-a-shell-script-cli"},"Creating Users with Groups and Permissions with a Shell Script (CLI)"),Object(i.b)("p",null,"Uncomment the code in the file ",Object(i.b)("inlineCode",{parentName:"p"},"src/scripts/create-user.ts"),"."),Object(i.b)("p",null,"Then you can create a user with their permissions and groups through the command line."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'npm run build:scripts\nfoal run create-user userPermissions="[ \\"my-first-perm\\" ]" groups="[ \\"my-group\\" ]"\n')),Object(i.b)("h2",{id:"fetching-a-user-with-their-permissions"},"Fetching a User with their Permissions"),Object(i.b)("p",null,"If you want the ",Object(i.b)("inlineCode",{parentName:"p"},"hasPerm")," method to work on the context ",Object(i.b)("inlineCode",{parentName:"p"},"user")," property, you must use the ",Object(i.b)("inlineCode",{parentName:"p"},"fetchUserWithPermissions")," function in the authentication hook."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example with JSON Web Tokens")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\nimport { fetchUserWithPermissions } from '@foal/typeorm';\n\n@JWTRequired({\n  user: fetchUserWithPermissions(User)\n})\nexport class ProductController {\n  @Get('/products')\n  readProduct(ctx: Context) {\n    if (!ctx.user.hasPerm('read-products')) {\n      return new HttpResponseForbidden();\n    }\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example with Sessions Tokens")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, TokenRequired } from '@foal/core';\nimport { fetchUserWithPermissions, TypeORMStore } from '@foal/typeorm';\n\n@TokenRequired({\n  store: TypeORMStore,\n  user: fetchUserWithPermissions(User)\n})\nexport class ProductController {\n  @Get('/products')\n  readProduct(ctx: Context) {\n    if (!ctx.user.hasPerm('read-products')) {\n      return new HttpResponseForbidden();\n    }\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(i.b)("h2",{id:"the-permissionrequired-hook"},"The PermissionRequired Hook"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This requires the use of ",Object(i.b)("inlineCode",{parentName:"p"},"fetchUserWithPermissions"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@PermissionRequired('perm')\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Context"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ctx.user")," is undefined"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"401 - UNAUTHORIZED")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ctx.user.hasPerm('perm')")," is false"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"403 - FORBIDDEN")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@PermissionRequired('perm', { redirect: '/login' })\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Context"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Response"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ctx.user")," is undefined"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Redirects to ",Object(i.b)("inlineCode",{parentName:"td"},"/login")," (302 - FOUND)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ctx.user.hasPerm('perm')")," is false"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"403 - FORBIDDEN")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get } from '@foal/core';\nimport { fetchUserWithPermissions, PermissionRequired } from '@foal/typeorm';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({ user: fetchUserWithPermissions(User) })\nexport class ProductController {\n  @Get('/products')\n  @PermissionRequired('read-products')\n  readProduct(ctx: Context) {\n    return new HttpResponseOK([]);\n  }\n}\n")),Object(i.b)("h2",{id:"baseentity-inheritance"},"BaseEntity Inheritance"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Available in Foal v1.8.0 onwards.")),Object(i.b)("p",null,"The classes ",Object(i.b)("inlineCode",{parentName:"p"},"Permission"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Group")," and ",Object(i.b)("inlineCode",{parentName:"p"},"UserWithPermissions")," all extends the ",Object(i.b)("inlineCode",{parentName:"p"},"BaseEntity")," class so you can access its static and instance methods."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const perm = await Permission.findOneOrFail({ codeName: 'perm1' });\nperm.name = 'Permission1';\nawait perm.save();\n")),Object(i.b)("h2",{id:"get-all-users-with-a-given-permission"},"Get All Users with a Given Permission"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Available in Foal v1.8.0 onwards.")),Object(i.b)("p",null,"The class ",Object(i.b)("inlineCode",{parentName:"p"},"UserWithPermissions")," provides a static method ",Object(i.b)("inlineCode",{parentName:"p"},"withPerm")," to get all users with a given permission. It returns all users that have this permission on their own or through the groups they belong to."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nclass User extends UserWithPermissions {}\n  \nconst users = await User.withPerm<User>('perm1');\n")))}l.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,d=b["".concat(s,".").concat(u)]||b[u]||m[u]||i;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},346:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/permissions-groups-and-users-ec7a479e022323aca7ea069ba9622d31.png"}}]);