import { HashLink as Link } from 'react-router-hash-link';

const BottomNavLinks = ({closeMenu}) => {
    function close() {
        if (closeMenu)
            closeMenu();
    }
    return (  
        <ul>
            <li><Link onClick={() => close()} to="/#g2">Gear Second</Link></li>
            <li><Link onClick={() => close()} to="/#g3">Gear Third</Link></li>
            <li><Link onClick={() => close()} to="/#g4">Gear Fourth</Link></li>
            <li><Link onClick={() => close()} to="/tmb">Calcular TMB</Link></li>
        </ul>
    );
}
 
export default BottomNavLinks;