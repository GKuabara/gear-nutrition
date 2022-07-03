import axios from 'axios';
import '../css/loginpage.css';
import { Link } from 'react-router-dom';
import FormInput from '../Common/FormInput';
import { useState } from 'react';

const Login = ({setUser}) => {
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    
    function logUser() {
        axios.create({ baseURL: "http://localhost:5000" })
        .post('/user/auth', {
            email: email,
            password: pwd
        })
        .then(resp => {
            setUser(resp.data)
            alert("dilvas é corno")
        })
        .catch(e => {
            alert("ta errado puta")
            console.error(e)
        })
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
                    <Link to="/" onClick={()=>{logUser()}}>Entrar</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Login;