import { Link } from 'react-router-dom';
import './css/loginpage.css';
import FormInput from './FormInput';

const Login = ({setIsLogged}) => {
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
                    <Link to="/" onClick={()=>{setIsLogged(true)}}>Entrar</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Login;