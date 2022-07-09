import '../css/signup.css';
import FormInput from '../Common/FormInput';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    let [name, setName] = useState("")
    let [surname, setSurname] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [pwdc, setPwdc] = useState("")
    let [cpf, setCPF] = useState("")
    let [cep, setCEP] = useState("")
    let [address, setAddress] = useState("")
    let [phone, setPhone] = useState(0)
    const navigate = useNavigate();

    const signUp = () => {
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

        axios.post('http://localhost:5000/user/', reqBody)
        .then(function (response) {
            navigate("/")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (  
        <div className="signup-container">
            <h1>Cadastro</h1>
            <div className="signup-row">
                <div className="sign-col">
                    <FormInput placeholder="Nome" updateValue={setName} title="Nome" type="text"/>
                </div>
                <div className="sign-col">
                    <FormInput placeholder="Sobrenome" updateValue={setSurname} title="Sobrenome" type="text"/>
                </div>
            </div>

            <div className="signup-row">
                <div className="sign-col">
                    <FormInput placeholder="111.111.111-11" updateValue={setCPF} title="CPF" type="text"/>
                </div>
                <div className="sign-col">
                    <FormInput placeholder="(11) 91111-1111" updateValue={setPhone} title="Celular" type="text"/>
                </div>
            </div>

            <div className="signup-row">
                <div className="sign-col">
                    <FormInput placeholder="exemplo@email.com" updateValue={setEmail} title="Email" type="email"/>
                </div>
                <div className="sign-col">
                    <FormInput updateValue={setAddress} title="Endereço" placeholder="Rua, Nº, Bairro, Cidade, Estado" type="text"/>
                </div>
            </div>

            <div className="signup-row">
                <div className="sign-col">
                    <FormInput updateValue={setPwd} title="Senha" type="password"/>
                </div>
                <div className="sign-col">
                    <FormInput placeholder="11111-111" updateValue={setCEP} title="CEP" type="text"/>
                </div>
            </div>
            
            <div className="signup-row">
                <div className="sign-col">
                    <FormInput updateValue={setPwdc} title="Confirmação da senha" type="password"/>
                </div>
                <div className="sign-col signup-button">
                    <button onClick={() => signUp()}>Finalizar</button>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;