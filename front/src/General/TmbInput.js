import '../css/tmbInput.css';

const TMBInput = ({hasError, cName, id, onChange, size, placeholder, name}) => {
    function changeVal(e) {
        onChange(e.target.value);
    }

    let className = ""
    if (cName) className = " " + cName;

    return (  
        <div style={{width: size}} className="tmb-input-container">
            <span>{name}: </span>
            <input style={{backgroundColor: hasError ? "lightcoral" : "white"}} className={className + " " + id} onKeyUp={e=>{changeVal(e)}} id={id} placeholder={placeholder} type="text" />
        </div>
    );
}
 
export default TMBInput;