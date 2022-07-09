import '../css/formInput.css';

const FormInput = ({updateValue, param, placeholder, title, type}) => {
    return ( 
        <div className="form-input">
            <span>{title}:</span>
            <input onChange={(e) => { 
                updateValue(e.target.value)
             }} placeholder={placeholder} type={type} disabled={param}/>
        </div>
    );
}
 
export default FormInput;