import { Link } from "react-router-dom";

const TopNavLinks = ({closeMenu, isAdmin, isLogged}) => {
    function close() {
        if (closeMenu) 
            closeMenu();
    }

    return (  
        <ul>
            {isAdmin && isLogged && <li><Link onClick={() => close()} to="/admin/manageAdmins">Admins</Link></li>}
            {!isLogged && <li><Link onClick={() => close()} to="/signup">Cadastro</Link></li>}
            {!isLogged && <li><Link onClick={() => close()} to="/login">Login</Link></li>}
            {isLogged && <li><Link onClick={() => close()} to="/profile/data">Conta</Link></li>}
            <li><Link onClick={() => close()} to="/cart">Carrinho</Link></li>
        </ul>
    );
}
 
export default TopNavLinks;