import '../css/textInput.css';

const TextInput = ({setValue, title, size, placeholder}) => {
    return (  
        <div style={{width: size.width + "%"}} className="text-input">
            <span>{title}</span>
            <input style={{height: size.height + "px"}} type="text" placeholder={placeholder}
                    onChange={(e) => {setValue(e.target.value)}} />
        </div>
    );
}
 
export default TextInput;