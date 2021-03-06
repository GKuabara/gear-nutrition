import { Link } from "react-router-dom";

const TopNavLinks = ({closeMenu, user}) => {
    function close() {
        if (closeMenu) 
            closeMenu();
    }
    
    return (  
        <ul>
            {user !== null && user.admin && <li><Link onClick={() => close()} to="/admin/manageAdmins">Admins</Link></li>}
            {user === null && <li><Link onClick={() => close()} to="/signup">Cadastro</Link></li>}
            {user === null && <li><Link onClick={() => close()} to="/login">Login</Link></li>}
            {user !== null && <li><Link onClick={() => close()} to="/profile/data">Conta</Link></li>}
            <li><Link onClick={() => close()} to="/cart">Carrinho</Link></li>
        </ul>
    );
}
 
export default TopNavLinks;