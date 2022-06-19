// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const BottomNavLinks = ({closeMenu}) => {
    function close() {
        if (closeMenu)
            closeMenu();
    }
    return (  
        <ul>
            <li><Link onClick={() => close()} to="/#g20">Gear Second</Link></li>
            <li><Link onClick={() => close()} to="/#g30">Gear Third</Link></li>
            <li><Link onClick={() => close()} to="/#g40">Gear Fourth</Link></li>
            <li><Link onClick={() => close()} to="/tmb">Calcular TMB</Link></li>
        </ul>
    );
}
 
export default BottomNavLinks;