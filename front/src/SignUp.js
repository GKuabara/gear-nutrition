import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/signup.css';
import FormInput from './FormInput';

const SignUp = () => {
    return (  
        <div id="signup-container">
            <h1>Cadastro</h1>
            <table>
                <tbody>
                    <tr id="first-tr">
                        <td>
                            <div id="signup-field">
                                <FormInput placeholder="Seu Nome" title="Primeiro Nome" type="text"/>
                            </div>
                            <div id="signup-field">
                                <FormInput placeholder="999.999.999-99" title="CPF" type="number"/>
                            </div>
                            <div id="signup-field">
                                <FormInput placeholder="seu@email.com" title="Email" type="text"/>
                            </div>
                        </td>
                        <td>
                            <div id="signup-field">
                                <FormInput placeholder="Sobrenome" title="Sobrenome" type="text"/>
                            </div>
                            <div id="signup-field">
                                <FormInput placeholder="(11) 1 1111-1111" title="Celular" type="tel"/>
                            </div>
                        </td>
                    </tr>
                    <tr id="second-tr">                        
                        <td>    
                            <div id="signup-field">
                                <FormInput title="Senha" type="password"/>
                            </div>
                            <div id="signup-field">
                                <FormInput title="Confirmar Senha" type="password"/>
                            </div>
                        </td>
                        <td id="button-td">                            
                            <div id="button-div">
                                <div>
                                    <button>Entrar</button>                            
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default SignUp;