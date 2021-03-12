import {useState, useEffect} from 'react';
import NewTodo from './NewTodo';
import ToDoList from "./ToDoList";

import firebaseSDK from "../../../FirebaseInit";
function ToDo(){
    const [todoData, setTodoData]=useState({
        todos:[],
        newTodo:"",
    });
    useEffect(
        ()=>{
          const todosRef = firebaseSDK.database().ref('todos').orderByKey().limitToLast(100);
          todosRef.on('child_added', snapshot => {
            let newTodo = { ...snapshot.val(), fb_id: snapshot.key };
            let newTodos = todoData.todos;
            newTodos.push(newTodo);
            setTodoData({...todoData, todos: newTodos});
          })
        },
        []
      );
    

    const onChange =(e) =>{
        const {name,value}= e.currentTarget;
        setTodoData({...todoData,newTodo:value});
    }

    const onAddNew=(e)=>{
        let newToo={
            description:todoData.newTodo,
            completed:false,
            id:new Date().getTime()
        };
        firebaseSDK.database().ref()
        let newTodos = todoData.todos;
        newTodos.push(newToo);

        setTodoData({todos:newTodos, newTodo:""});
    }
    const doneHandler =(id)=>{
        const newTodos = todoData.todos.map((o)=>{
            if(o.id== id){
                o.completed=!o.completed;
            
                
            }
            return o;
        });
        setTodoData({...todoData, todos:newTodos});
    };

    const deleteHandler = (id)=>{
        const newTodos = todoData.todos.filter((o)=>{
        return o.id !==id;
    });
    setTodoData({...todoData, todos:newTodos});
    }

    const tmpTodos = todoData.todos.map( (o)=>{return JSON.stringify(o)} ).join(" | ");
return(
    <section class="max-w-xl  ">
    <NewTodo
     onChange={onChange}
     value={todoData.newTodo}
     onAddNew={onAddNew}
    >
    </NewTodo>
     <ToDoList 
       todos={todoData.todos}
       doneHandler={doneHandler}
       deleteHandler={deleteHandler}
     ></ToDoList>
   </section>
);
}
export default ToDo;