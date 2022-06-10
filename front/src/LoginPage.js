import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/loginpage.css';
import FormInput from './FormInput';

const Login = () => {
    return (  
        <div id="login-container">
            <h1>Login</h1>
            <table>
                <tbody>
                    <tr>
                        <td id="first-column">
                            <div id="login-field">
                                <FormInput placeholder="fernanbrasildefesa@hotmail.com" title="Email" type="text"/>
                            </div>
                            <div id="login-field">
                                <FormInput title="Senha" type="password"/>
                            </div>

                        </td>
                    <td id="second-column" align="right">
                            <button>Entrar</button>                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default Login;