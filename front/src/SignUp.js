import './css/signup.css';
import FormInput from './FormInput';

const SignUp = () => {
    return (  
        <div className="signup-container">
            <h1>Cadastro</h1>
            <div className="first-div">
                <div className="form-camps-left">
                    <div className="signup-field">
                        <FormInput placeholder="Seu Nome" title="Primeiro Nome" type="text"/>
                    </div>
                </div>
                <div className="form-camps-right">
                    <div className="signup-field">
                        <FormInput placeholder="Sobrenome" title="Sobrenome" type="text"/>
                    </div>
                </div>
            </div>
            <div className="second-div">
                <div className="form-camps-left">                    
                    <div className="signup-field">
                        <FormInput placeholder="999.999.999-99" title="CPF" type="number"/>
                    </div>
                    <div className="signup-field">
                        <FormInput placeholder="seu@email.com" title="Email" type="text"/>
                    </div>
                </div>
                <div className="form-camps-right">
                    <div className="signup-field">
                        <FormInput placeholder="(11) 1 1111-1111" title="Celular" type="tel"/>
                    </div>
                    <div className="signup-field">
                        <FormInput placeholder="Nome da Rua, Nº, Cidade, UF" title="Endereço" type="text"/>
                    </div>
                </div>
            </div>
            <div className="third-div">                           
                <div className="form-camps-left">
                    <div className="signup-field">
                        <FormInput title="Senha" type="password"/>
                    </div>
                    <div className="signup-field">
                        <FormInput title="Confirmar Senha" type="password"/>
                    </div>
                </div>
                                        
                <div className="signup-button">                                
                    <button>Entrar</button>                                
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;