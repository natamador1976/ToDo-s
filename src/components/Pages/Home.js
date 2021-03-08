import { MdDevices } from 'react-icons/md';
function Home(){
    return(
        <section class="flex h-screen justify-items-center justify-center items-center bg-purple-200">
            <section class="bg-white rounded-lg p-12 shadow-lg justify-items-center justify-center items-center">
            <MdDevices class="m-auto"size={"7rem"} ></MdDevices>      
                <h2>¿Qué tareas vamos a realizar hoy?</h2>
                <a class=" bg-purple-400 p-1 text-white ml-20 mt-3 rounded-lg shadow-md " href="/ToDo">Iniciemos</a>
            </section>
        </section>
    );
}
export default Home;