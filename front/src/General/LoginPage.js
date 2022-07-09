import axios from 'axios';
import '../css/loginpage.css';
import { useNavigate } from "react-router-dom";
import FormInput from '../Common/FormInput';
import { useState } from 'react';
import User from '../services/user';

const Login = ({setUserInfo, setUser}) => {
    const navigate = useNavigate();
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [error, setError] = useState(false)

    function logUser() {
        User.logUser({ email: email, password: pwd }, setUser, setUserInfo, setError, navigate)
    }
    
    return (  
        <div className="login-container">
            <h1>Login</h1>
            <div className="forms-div">
                <div className="input-div">
                    <div className="login-field">
                        <FormInput value={email} updateValue={setEmail} placeholder="seu@email.com" title="Email" type="text"/>
                    </div>
                    <div className="login-field">
                        <FormInput value={pwd} updateValue={setPwd} title="Senha" type="password"/>
                    </div>

                </div>
        
                <div className="login-button" align="right">
                    <button onClick={()=>{logUser()}}>Entrar</button>
                </div>
            </div>
            {
            error && 
            <div className="form-error">
                <span>Usuário ou senha inválidos</span>
            </div>
            }
        </div>
    );
}
 
export default Login;