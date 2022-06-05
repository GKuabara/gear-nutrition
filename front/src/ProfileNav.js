import {Link} from 'react-router-dom';
import './css/profileNav.css';

const ProfileNav = () => {
    return ( 
        <div id="profile-options">
            <Link id="top-nav" to="/orders">Meus Pedidos</Link>
            <Link to="/changePwd">Alterar Senha</Link>
            <Link to="/profile">Dados Pessoais</Link>
            <Link to="/addresses">Endereços de Entrega</Link>
            <Link id="bottom-nav" to="">Sair</Link>
        </div>
    );
}
 
export default ProfileNav;