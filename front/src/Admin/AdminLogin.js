import { Link } from 'react-router-dom';
import FormInput from '../Common/FormInput';

const AdminLogin = ({setIsAdmin, setIsLogged}) => {
    function enableFeatures() {
        setIsLogged(true);
        setIsAdmin(true);
    }

    return (  
        <div className="login-container">
            <h1>Login</h1>
            <div className="forms-div">
                <div className="input-div">
                    <div className="login-field">
                        <FormInput placeholder="seu@email.com" title="Email" type="text"/>
                    </div>
                    <div className="login-field">
                        <FormInput title="Senha" type="password"/>
                    </div>

                </div>
        
                <div className="login-button" align="right">
                    <Link to="/admin/stock" onClick={()=>{enableFeatures()}}>Entrar</Link>
                </div>
            </div>
        </div>
    );
}
 
export default AdminLogin;