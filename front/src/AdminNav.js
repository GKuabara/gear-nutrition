import { Link } from "react-router-dom";
import './css/removeProduct.css';

const AdminNav = () => {
    return (  
        <div id="profile-options">
            <Link id="top-nav" to="/admin">Estoque</Link>
            <Link to="/admin/addProduct">Adicionar Produto</Link>
            <Link to="/admin/removeProduct">Remover Produto</Link>
            <Link id="bottom-nav" to="/admin/manageAdmins">Gerenciar Admins</Link>
        </div>
    );
}
 
export default AdminNav;