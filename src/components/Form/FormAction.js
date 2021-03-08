function FormAction({caption, onClick,i}){
    return(
        <button onClick={onClick} class={i}>
        {caption}
      </button>
    );
}
export default FormAction;