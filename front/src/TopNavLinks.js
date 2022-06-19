import { Link } from "react-router-dom";

const TopNavLinks = ({closeMenu, isLogged}) => {
    function close() {
        if (closeMenu) 
            closeMenu();
    }

    return (  
        <ul>
            {!isLogged && <li><Link onClick={() => close()} to="/signup">Cadastro</Link></li>}
            {!isLogged && <li><Link onClick={() => close()} to="/login">Login</Link></li>}
            {isLogged && <li><Link onClick={() => close()} to="/profile/data">Conta</Link></li>}
            <li><Link onClick={() => close()} to="/">Carrinho</Link></li>
        </ul>
    );
}
 
export default TopNavLinks;