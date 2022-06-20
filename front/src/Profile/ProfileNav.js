import {Link} from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';

import '../css/profileNav.css';

const ProfileNav = ({setIsAdmin, setIsLogged}) => {
    function logoff() {
        setIsAdmin(false);
        setIsLogged(false);
    }

    return ( 
        <div id="profile-options">
            <div className='dropdown'>
                <Link id="top-nav" to="/profile/orders">Meus Pedidos</Link>
                <Link to="/profile/changePwd">Alterar Senha</Link>
                <Link to="/profile/data">Dados Pessoais</Link>
                <Link to="/profile/addresses">Endereços de Entrega</Link>
                <Link id="bottom-nav" onClick={()=>logoff()} to="/">Sair</Link>
            </div>
            <button>Opções<MdArrowDropDown /></button>
        </div>
    );
}
 
export default ProfileNav;