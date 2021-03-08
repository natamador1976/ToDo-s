import FormField from "../../Form/FormField";
import { MdAdd } from 'react-icons/md';

function NewTodo({onChange, value, onAddNew}){
    return(
        <section className="TodoAddNew">
            <section class="flex justify-between  items-center px-4 border">
                <FormField
                    type="text"
                    id="txtNewTodo"
                    fname="txtNewTodo"
                    onChange={onChange}
                    value={value}
                    caption="Nuevo To Do "
                  
                    onKeyUp={(e)=>{if(e.keyCode==13){onAddNew(e);}}}
                    ></FormField>
                <MdAdd class="ml-60 text-blue-500"size={"3rem"} onClick={onAddNew}></MdAdd>
            </section>

        </section>
    );
}
export default NewTodo;