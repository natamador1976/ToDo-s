function FormField({type,id,fname, onChange,caption,value,error,...attr}){
    return(
        <section>
            <label class="my-4 text-center">{caption}</label>
            <input class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" type={type} name={fname} id={id} onChange={onChange} value={value} {...attr} />
            {(error && true)?(<section>{error}</section>):null}
        </section>
    );
}
export default FormField;