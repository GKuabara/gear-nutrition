import './css/tmbInput.css';

const TMBInput = ({cName, id, onChange, size, placeholder, name}) => {
    function changeVal() {
        const val = document.getElementById(id).value;
        onChange(val);
    }

    return (  
        <div style={{width: size}} className="tmb-input-container">
            <span>{name}: </span>
            <input className={cName} onKeyUp={e=>{changeVal(e)}} id={id} placeholder={placeholder} type="text" />
        </div>
    );
}
 
export default TMBInput;