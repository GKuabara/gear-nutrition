import '../css/addrInput.css';

const AddrInput = ({updateValue, title, placeholder, size}) => {
    return (  
        <div style={{width: size}} className="addr-input">
            <span>{title}: </span>
            <input id={title} onChange={e => {updateValue(e.target.value)}} type="text" placeholder={placeholder} />
        </div>
    );
}
 
export default AddrInput;