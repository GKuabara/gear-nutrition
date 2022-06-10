import { Link } from 'react-router-dom';
import FormInput from './FormInput';

const ChangePwd = () => {
    return ( 
        <div className="b-shadow pwd info-container">
            <form action="">
                <FormInput title="Senha Atual" type="password"/>
                <FormInput title="Nova Senha" type="password"/>
                <FormInput title="Confirmação da Nova Senha" type="password"/>
            </form>
            <Link to="/profile">Salvar</Link>
        </div>
    );
}
 
export default ChangePwd;