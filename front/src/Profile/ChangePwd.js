import { useState } from 'react';
import FormInput from '../Common/FormInput';
import { useNavigate } from 'react-router-dom';
import User from '../services/user';
import '../css/changePwd.css';

const ChangePwd = ({userInfo}) => {
    let [curPwd, setCurPwd] = useState("")
    let [newPwd, setNewPwd] = useState("")
    let [newPwdC, setNewPwdC] = useState("")
    let [error, setError] = useState({"hasError": false, "message": ""})
    const navigate = useNavigate();

    function changePwd() {
        if (curPwd !== userInfo.password) {
            setError({"hasError": true, "message": "Senha atual inválida"})
        } else if (newPwd !== newPwdC) {
            setError({"hasError": true, "message": "Verifique a confirmação da senha"})
        } else {
            setError({"hasError": false, "message": ""})
            const body = {
                "name": userInfo.name,
                "email": userInfo.email,
                "password": newPwd,
                "admin": userInfo.admin,
                "CPF": userInfo.CPF,
                "number": userInfo.number,
                "street": userInfo.street,
                "neighborhood": userInfo.neighborhood,
                "CEP": userInfo.CEP,
                "city": userInfo.city,
                "state": userInfo.state,
                "telephone": userInfo.telephone,
                "cart": userInfo.cart
            }
            
            User.updateUser(body, () => {navigate("/profile/data")})
            
        }
    }

    return ( 
        <div className="b-shadow info-container">
            <form action="">
                <FormInput updateValue={setCurPwd} title="Senha Atual" type="password"/>
                <FormInput updateValue={setNewPwd} title="Nova Senha" type="password"/>
                <FormInput updateValue={setNewPwdC} title="Confirmação da Nova Senha" type="password"/>
            </form>
            {
            error.hasError && 
            <div className="form-error">
                <span>{error.message}</span>
            </div>
            }
            <div className="pwd-button">
                <button onClick={changePwd} to="/profile/data">Salvar</button>
            </div>
        </div>
    );
}
 
export default ChangePwd;