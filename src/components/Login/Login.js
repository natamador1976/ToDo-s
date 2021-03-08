import { useState } from "react";
import Form from "../Form/Form";
import FormField from "../Form/FormField";
import FormAction from "../Form/FormAction";

function Login(){
    const [formData, setFormData]=useState({
        username:"",
        password:"",
        usernameError:"",
        passwordError:""
    });
    const _self= this;

    const myOnChange = function(e){
        const {name,value}=e.currentTarget;
        let error=null;
        if(name=="password"){
            error =(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(value) ? null : "La Contraseña es inválida."
        }
        setFormData({...formData,[name]:value,[name + "Error"]:error});
    }
    return(
        <section class="flex bg-white border rounded-lg  w-2/4 md:h-96 md:w-1/3 shadow-lg">
            <section class="m-auto flex flex-col justify-self-center justify-center items-center ">
               <div class="flex justify-center intems-center justify-items-center">
                   <h2 class="text-center text-lg"> Inicio de Sesión</h2>
               </div>
               <Form>
                   <FormField  type="text" id="username" fname="username" onChange={myOnChange} caption="Correo Electrónico" value={formData.username} error={formData.usernameError} placeholder="Usuario"></FormField>
                   <FormField type="password" id="password" fname="password" onChange={myOnChange} caption="Contraseña" value={formData.password} error={formData.passwordError} placeholder="Octopus123"></FormField>
                   <FormAction i="bg-pink-500 border-none px-2 ml-16 mt-1 py-1 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" caption="Enviar" onClick={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        const { username, password } = formData;
                        alert(`Usuario:${username} Psswd:${password}`);}}></FormAction>
                    <br></br>
                    <h3 class="ml-12">Acceda con</h3>
                   <FormAction i="bg-red-500 border-none px-2  mt-1 py-1 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" caption="Google"></FormAction>     
                   <FormAction i="bg-blue-500 border-none px-2 ml-8 mt-1 py-1 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" caption="Facebook"></FormAction>     
                   
               </Form>
            </section>
        </section>
    );
}

export default Login;