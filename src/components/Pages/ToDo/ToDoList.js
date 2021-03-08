import { MdDone, MdDelete} from 'react-icons/md';
function TodoListItem({descripcion, id, completed,doneHandler, deleteHandler}){
    const onClick =(e)=>{
        doneHandler(id);
    }
    const onDeleteClick=(e)=>{
        deleteHandler(id);
    }
    const myClass=(completed)?"bg-gray-300 line-through":"";
    return(
        
        <li className={myClass}>
            <div class="flex border-b-4 p-4 rounded-lg justify-between">
            <span  >{descripcion}</span>
           <div class="flex">
            <MdDone size={"2rem"} class="text-green-500"onClick={onClick}></MdDone>
            <MdDelete size={"2rem"} class="text-red-500" onClick={onDeleteClick}></MdDelete>
            </div>
            </div>
        </li>
       
    );
}

function ToDoList({todos, doneHandler, deleteHandler}){
    const todoItems = todos.map((o)=>{
        return (
            <TodoListItem
                key={o.doneHandler}
                descripcion={o.description}
                id={o.id}
                completed={o.completed}
                doneHandler={doneHandler}
                deleteHandler={deleteHandler} 
                />
        )
    });
    return(
      
        <section className="TodoList" >
            <ul>
                {todoItems}
            </ul>
        </section>
        
    );
}
export default ToDoList;