import { Link } from "react-router-dom";

const AdminNav = () => {
    return (  
        <div id="profile-options">
            <Link id="top-nav" to="/admin">Estoque</Link>
            <Link to="/admin">Adicionar Produto</Link>
            <Link to="/admin">Remover Produto</Link>
            <Link id="bottom-nav" to="/admin">Gerenciar Admins</Link>
        </div>
    );
}
 
export default AdminNav;