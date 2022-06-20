import { Link } from "react-router-dom";
import { MdArrowDropDown } from 'react-icons/md';
import './css/removeProduct.css';

const AdminNav = () => {
    return (  
        <div id="profile-options">
            <div className="dropdown">
                <Link id="top-nav" to="/admin/stock">Estoque</Link>
                <Link to="/admin/addProduct">Adicionar Produto</Link>
                <Link to="/admin/removeProduct">Remover Produto</Link>
                <Link id="bottom-nav" to="/admin/manageAdmins">Gerenciar Admins</Link>
            </div>
            <button>Opções<MdArrowDropDown /></button>
        </div>
    );
}
 
export default AdminNav;