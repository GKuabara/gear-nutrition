import './css/changePwd.css';
import FormInput from './FormInput';

const ChangePwd = () => {
    return ( 
        <div id="pwd-container">
            <form action="">
                <FormInput title="Senha Atual" type="password"/>
                <FormInput title="Nova Senha" type="password"/>
                <FormInput title="Confirmação da Nova Senha" type="password"/>
            </form>
            <button>Salvar</button>
        </div>
    );
}
 
export default ChangePwd;