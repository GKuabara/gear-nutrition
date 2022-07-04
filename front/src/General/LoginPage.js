import axios from 'axios';
import '../css/loginpage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import FormInput from '../Common/FormInput';
import { useState } from 'react';
import { useEffect } from 'react';

const Login = ({setUserInfo, setUser}) => {
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [error, setError] = useState(false)
    
    const navigate = useNavigate();
    function logUser() {
        console.log("oioi")
        axios.create({ baseURL: "http://localhost:5000" })
        .post('/user/auth', {
            email: email,
            password: pwd
        })
        .then(resp => {
            localStorage.setItem('token', resp.data.token)
            localStorage.setItem('id', resp.data.id)
            uInfo()
            setUser(resp.data)
            setError(false)
            navigate("/")
        })
        .catch(e => {
            setError(true)
            console.log(e)
        })
    }
    
	const uInfo = () => {
		const url = `http://localhost:5000/user/${localStorage.getItem('id')}`
        axios.get( url, {headers: {"x-access-token": localStorage.getItem('token')}})
        .then(resp => {
            setUserInfo(resp.data)
        })
        .catch( e => {
            console.log(e)
        })
    }

    const uOrders = () => {
		const url = `http://localhost:5000/user/${localStorage.getItem('id')}`
        axios.get( url, {headers: {"x-access-token": localStorage.getItem('token')}})
        .then(resp => {
            setUserInfo(resp.data)
        })
        .catch( e => {
            console.log(e)
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