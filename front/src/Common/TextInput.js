import '../css/textInput.css';

const TextInput = ({title, size, placeholder}) => {
    return (  
        <div style={{width: size.width + "%"}} className="text-input">
            <span>{title}</span>
            <input style={{height: size.height + "px"}} type="text" placeholder={placeholder} />
        </div>
    );
}
 
export default TextInput;