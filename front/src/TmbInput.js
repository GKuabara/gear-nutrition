import './css/tmbInput.css';

const TMBInput = ({size, placeholder, name}) => {
    return (  
        <div style={{width: size}} className="tmb-input-container">
            <span>{name}: </span>
            <input placeholder={placeholder} type="text" />
        </div>
    );
}
 
export default TMBInput;