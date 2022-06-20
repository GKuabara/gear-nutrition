import '../css/formInput.css';

const FormInput = ({param, placeholder, title, type}) => {
    return ( 
        <div className="form-input">
            <span>{title}:</span>
            <input placeholder={placeholder} type={type} disabled={param} />
        </div>
    );
}
 
export default FormInput;