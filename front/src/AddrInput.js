import './css/addrInput.css';

const AddrInput = ({title, placeholder, size}) => {
    return (  
        <div style={{width: size}} className="addr-input">
            <span>{title}: </span>
            <input id={title} type="text" placeholder={placeholder} />
        </div>
    );
}
 
export default AddrInput;