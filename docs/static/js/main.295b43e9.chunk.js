(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),s=n(29),o=n.n(s),a=(n(37),n(38),n(2));var i=function(e){var t=e.title;return Object(a.jsx)("h1",{class:"text-xl font-medium ",children:t})},l=n(21);var d=function(e){var t=e.label,n=e.uri;return Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:n,children:t})})};n(44);var j=function(){var e=[{label:"Inicio",uri:"/"},{label:"To Do's",uri:"/todo"},{label:"Log In",uri:"/login"}].map((function(e,t){return Object(a.jsx)(d,{label:e.label,uri:e.uri},t)}));return Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{children:e})})};n(45);var u=function(e){return e.childre,Object(a.jsxs)("header",{children:[Object(a.jsx)(i,{title:"Notes ++"}),Object(a.jsx)(j,{})]})},b=n(16);var x=function(){return Object(a.jsx)("section",{class:"flex h-screen justify-items-center justify-center items-center bg-purple-200",children:Object(a.jsxs)("section",{class:"bg-white rounded-lg p-12 shadow-lg justify-items-center justify-center items-center",children:[Object(a.jsx)(b.c,{class:"m-auto",size:"7rem"}),Object(a.jsx)("h2",{children:"\xbfQu\xe9 tareas vamos a realizar hoy?"}),Object(a.jsx)("a",{class:" bg-purple-400 p-1 text-white ml-20 mt-3 rounded-lg shadow-md ",href:"/ToDo",children:"Iniciemos"})]})})},h=n(11),p=n(22),f=n(32);var O=function(e){var t=e.type,n=e.id,r=e.fname,c=e.onChange,s=e.caption,o=e.value,i=e.error,l=Object(f.a)(e,["type","id","fname","onChange","caption","value","error"]);return Object(a.jsxs)("section",{children:[Object(a.jsx)("label",{class:"my-4 text-center",children:s}),Object(a.jsx)("input",Object(h.a)({class:"mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0",type:t,name:r,id:n,onChange:c,value:o},l)),i?Object(a.jsx)("section",{children:i}):null]})};var m=function(e){var t=e.onChange,n=e.value,r=e.onAddNew;return Object(a.jsx)("section",{className:"TodoAddNew",children:Object(a.jsxs)("section",{class:"flex justify-between  items-center px-4 border",children:[Object(a.jsx)(O,{type:"text",id:"txtNewTodo",fname:"txtNewTodo",onChange:t,value:n,caption:"Nuevo To Do ",onKeyUp:function(e){13==e.keyCode&&r(e)}}),Object(a.jsx)(b.a,{class:"ml-60 text-blue-500",size:"3rem",onClick:r})]})})};function v(e){var t=e.descripcion,n=e.id,r=e.completed,c=e.doneHandler,s=e.deleteHandler,o=r?"bg-gray-300 line-through":"";return Object(a.jsx)("li",{className:o,children:Object(a.jsxs)("div",{class:"flex border-b-4 p-4 rounded-lg justify-between",children:[Object(a.jsx)("span",{children:t}),Object(a.jsxs)("div",{class:"flex",children:[Object(a.jsx)(b.d,{size:"2rem",class:"text-green-500",onClick:function(e){c(n)}}),Object(a.jsx)(b.b,{size:"2rem",class:"text-red-500",onClick:function(e){s(n)}})]})]})})}var g=function(e){var t=e.todos,n=e.doneHandler,r=e.deleteHandler,c=t.map((function(e){return Object(a.jsx)(v,{descripcion:e.description,id:e.id,completed:e.completed,doneHandler:n,deleteHandler:r},e.doneHandler)}));return Object(a.jsx)("section",{className:"TodoList",children:Object(a.jsx)("ul",{children:c})})},w=n(31).a.initializeApp({apiKey:"AIzaSyCErulbSDUqR_TfBXlY_YcEDgWhrhSiT-U",authDomain:"todo-slist.firebaseapp.com",databaseURL:"https://todo-slist-default-rtdb.firebaseio.com",projectId:"todo-slist",storageBucket:"todo-slist.appspot.com",messagingSenderId:"739431399945",appId:"1:739431399945:web:7d3f7ea41fec8d38b0aed8"});var y=function(){var e=Object(r.useState)({todos:[],newTodo:""}),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){w.database().ref("todos").orderByKey().limitToLast(100).on("child_added",(function(e){var t=Object(h.a)(Object(h.a)({},e.val()),{},{fb_id:e.key}),r=n.todos;r.push(t),c(Object(h.a)(Object(h.a)({},n),{},{todos:r}))}))}),[]),n.todos.map((function(e){return JSON.stringify(e)})).join(" | "),Object(a.jsx)("section",{class:"flex justify-center items-center justify-items-center h-full",children:Object(a.jsxs)("section",{class:"max-w-xl  ",children:[Object(a.jsx)(m,{onChange:function(e){var t=e.currentTarget,r=(t.name,t.value);c(Object(h.a)(Object(h.a)({},n),{},{newTodo:r}))},value:n.newTodo,onAddNew:function(e){var t={description:n.newTodo,completed:!1,id:(new Date).getTime()};w.database().ref();var r=n.todos;r.push(t),c({todos:r,newTodo:""})}}),Object(a.jsx)(g,{todos:n.todos,doneHandler:function(e){var t=n.todos.map((function(t){return t.id==e&&(t.completed=!t.completed),t}));c(Object(h.a)(Object(h.a)({},n),{},{todos:t}))},deleteHandler:function(e){var t=n.todos.filter((function(t){return t.id!==e}));c(Object(h.a)(Object(h.a)({},n),{},{todos:t}))}})]})})},C=n(19);var T=function(e){var t=e.children;return Object(a.jsx)("form",{children:t})};var k=function(e){var t=e.caption,n=e.onClick,r=e.i;return Object(a.jsx)("button",{onClick:n,class:r,children:t})};var E=function(){var e=Object(r.useState)({username:"",password:"",usernameError:"",passwordError:""}),t=Object(p.a)(e,2),n=t[0],c=t[1],s=function(e){var t,r=e.currentTarget,s=r.name,o=r.value,a=null;"password"==s&&(a=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/.test(o)?null:"La Contrase\xf1a es inv\xe1lida."),c(Object(h.a)(Object(h.a)({},n),{},(t={},Object(C.a)(t,s,o),Object(C.a)(t,s+"Error",a),t)))};return Object(a.jsx)("section",{class:"flex bg-white border rounded-lg  w-2/4 md:h-96 md:w-1/3 shadow-lg",children:Object(a.jsxs)("section",{class:"m-auto flex flex-col justify-self-center justify-center items-center ",children:[Object(a.jsx)("div",{class:"flex justify-center intems-center justify-items-center",children:Object(a.jsx)("h2",{class:"text-center text-lg",children:" Inicio de Sesi\xf3n"})}),Object(a.jsxs)(T,{children:[Object(a.jsx)(O,{type:"text",id:"username",fname:"username",onChange:s,caption:"Correo Electr\xf3nico",value:n.username,error:n.usernameError,placeholder:"Usuario"}),Object(a.jsx)(O,{type:"password",id:"password",fname:"password",onChange:s,caption:"Contrase\xf1a",value:n.password,error:n.passwordError,placeholder:"Octopus123"}),Object(a.jsx)(k,{i:"bg-pink-500 border-none px-2 ml-16 mt-1 py-1 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105",caption:"Enviar",onClick:function(e){e.preventDefault(),e.stopPropagation();var t=n.username,r=n.password;alert("Usuario:".concat(t," Psswd:").concat(r))}}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{class:"ml-12",children:"Acceda con"}),Object(a.jsx)(k,{i:"bg-red-500 border-none px-2  mt-1 py-1 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105",caption:"Google"}),Object(a.jsx)(k,{i:"bg-blue-500 border-none px-2 ml-8 mt-1 py-1 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105",caption:"Facebook"})]})]})})};var N=function(){return Object(a.jsx)("section",{class:"flex justify-center  bg-purple-400 h-screen items-center",children:Object(a.jsx)(E,{})})},I=n(8);var S=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("section",{children:[Object(a.jsx)(u,{}),Object(a.jsxs)(I.c,{children:[Object(a.jsx)(I.a,{path:"/",exact:!0,children:Object(a.jsx)(x,{})}),Object(a.jsx)(I.a,{path:"/todo",exact:!0,children:Object(a.jsx)(y,{})}),Object(a.jsx)(I.a,{path:"/login",exact:!0,children:Object(a.jsx)(N,{})})]})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),D()}},[[49,1,2]]]);
//# sourceMappingURL=main.295b43e9.chunk.js.map