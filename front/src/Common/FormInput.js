import '../css/formInput.css';

const FormInput = ({value, updateValue, param, placeholder, title, type}) => {
    return ( 
        <div className="form-input">
            <span>{title}:</span>
            <input onKeyUp={(e) => { 
                updateValue(e.target.value)
             }} placeholder={placeholder} type={type} disabled={param} />
        </div>
    );
}
 
export default FormInput;