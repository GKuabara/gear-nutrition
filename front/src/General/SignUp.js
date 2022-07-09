import '../css/signup.css';
import FormInput from '../Common/FormInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../services/user'

const SignUp = () => {
    const navigate = useNavigate();
    let [name, setName] = useState('')
    let [surname, setSurname] = useState('')
    let [email, setEmail] = useState('')
    let [pwd, setPwd] = useState('')
    let [pwdc, setPwdc] = useState('')
    let [cpf, setCPF] = useState('')
    let [cep, setCEP] = useState('')
    let [address, setAddress] = useState('')
    let [phone, setPhone] = useState(0)

    let [errorName, setErrorName] = useState(false)
    let [errorSurname, setErrorSurname] = useState(false)
    let [errorEmail, setErrorEmail] = useState(false)
    let [errorPwd, setErrorPwd] = useState(false)
    let [errorPwdc, setErrorPwdc] = useState(false)
    let [errorCpf, setErrorCpf] = useState(false)
    let [errorCep, setErrorCep] = useState(false)
    let [errorAddress, setErrorAddress] = useState(false)
    let [errorPhone, setErrorPhone] = useState(false)

    function validateInputs() {
        if (!name) setErrorName(true)
        if (!surname) setErrorSurname(true)
        if (!address || address.split(",").length !== 5) setErrorAddress(true)
        if (!email || !(/\S+@\S+\.\S+/.test(email))) setErrorEmail(true)
        if (!cpf || cpf.length !== 14) setErrorCpf(true)
        if (!cep || cep.length !== 9) setErrorCep(true)
        if (!phone || phone.length !== 11) setErrorPhone(true)
        if (!pwd || pwd.length < 6) setErrorPwd(true)
        if (!pwdc || pwdc !== pwd) setErrorPwdc(true)
    }

    const signUp = () => {
        if (validateInputs()) 
            return

        let [addr, num, neighborhood, city, state] = address.split(",").map((item) => { return item.trim() })
        num = parseInt(num)
        let reqBody = {
            name: name + " " + surname,
            email: email,
            password: pwd,
            admin: false,
            CPF: cpf,
            number: parseInt(num),
            street: addr,
            neighborhood: neighborhood,
            CEP: cep,
            city: city,
            state: state,
            telephone: phone,
            cart: []
        }

        console.log(reqBody)
        User.createUser(reqBody, navigate)
    }

    return (  
        <div className="signup-container">
            <h1>Cadastro</h1>
            <div className="signup-row">
                <div className="sign-col">
                    <FormInput placeholder="Nome" updateValue={setName} title="Nome" type="text"/>
                    {errorName && <div className="form-error">
                        <span>Nome Inválido</span>
                    </div>}
                </div>
                <div className="sign-col">
                    <FormInput placeholder="Sobrenome" updateValue={setSurname} title="Sobrenome" type="text"/>
                    {errorSurname && <div className="form-error">
                        <span>Sobrenome Inválido</span>
                    </div>}
                </div>
            </div>

            <div className="signup-row">
                <div className="sign-col">
                    <FormInput placeholder="111.111.111-11" updateValue={setCPF} title="CPF" type="text"/>
                    {errorCpf && <div className="form-error">
                        <span>CPF Inválido</span>
                    </div>}
                </div>
                <div className="sign-col">
                    <FormInput placeholder="(11) 91111-1111" updateValue={setPhone} title="Celular" type="text"/>
                    {errorPhone && <div className="form-error">
                        <span>Telefone Inválido</span>
                    </div>}
                </div>
            </div>

            <div className="signup-row">
                <div className="sign-col">
                    <FormInput placeholder="exemplo@email.com" updateValue={setEmail} title="Email" type="email"/>
                    {errorEmail && <div className="form-error">
                        <span>Email Inválido</span>
                    </div>}
                </div>
                <div className="sign-col">
                    <FormInput updateValue={setAddress} title="Endereço" placeholder="Rua, Nº, Bairro, Cidade, Estado" type="text"/>
                    {errorAddress && <div className="form-error">
                        <span>Endereço Inválido</span>
                    </div>}
                </div>
            </div>

            <div className="signup-row">
                <div className="sign-col">
                    <FormInput updateValue={setPwd} title="Senha" type="password"/>
                    {errorPwd && <div className="form-error">
                        <span>Senha Inválida</span>
                    </div>}
                </div>
                <div className="sign-col">
                    <FormInput placeholder="11111-111" updateValue={setCEP} title="CEP" type="text"/>
                    {errorCep && <div className="form-error">
                        <span>CEP Inválido</span>
                    </div>}
                </div>
            </div>
            
            <div className="signup-row">
                <div className="sign-col">
                    <FormInput updateValue={setPwdc} title="Confirmação da senha" type="password"/>
                    {errorPwdc && <div className="form-error">
                        <span>Confirmação de senha Inválida</span>
                    </div>}
                </div>
                <div className="sign-col signup-button">
                    <button onClick={() => signUp()}>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;