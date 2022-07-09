import { useNavigate } from 'react-router-dom';
import AddrInput from './AddrInput';
import '../css/newAddress.css';
import { useState } from 'react';
import axios from 'axios'

const NewAddress = ({user, setUser}) => {
    let [street, setStreet] = useState("");
    let [CEP, setCEP] = useState("");
    let [num, setNum] = useState("");
    let [neigh, setNeigh] = useState("");
    let [city, setCity] = useState("");
    let [state, setState] = useState("");

    const navigate = useNavigate()
    const updateAddr = () => {
        const url =  "http://localhost:5000/user/" + localStorage.getItem('id')
        let updatedAddr = structuredClone(user)
        updatedAddr = {...updatedAddr, 
            street: street,
            CEP: CEP,
            number: num,
            neighborhood: neigh,
            city: city,
            state: state,
            token: localStorage.getItem('token')
        }

        console.log(updatedAddr)
        axios.put(url,  updatedAddr)
        .then( () => {
            setUser(updatedAddr)
            navigate('/profile/data')
        }
        )
        .catch(e => {
            console.log(e)
        })
    }

    return ( 
        <div className="info-container b-shadow new-address">            
            <div className="house-name">
                <h3>Casa: </h3>
                <input type="text" />
            </div>

            <div className="addr-infos">
                <AddrInput updateValue={setStreet} size="45%" title="Logradouro" placeholder="Ex: Rua Doutor Carlos de Camargo Salles"/>
                <AddrInput updateValue={setCEP} size="25%" title="CEP" placeholder="Ex: 13560-550"/>
                <AddrInput updateValue={setNum} size="15%" title="Número" placeholder="Ex: 1337"/>

                <AddrInput updateValue={setNeigh} size="45%" title="Bairro" placeholder="Ex: Jardim Lutfalla"/>
                <AddrInput updateValue={setCity} size="25%" title="Cidade" placeholder="Ex: São Carlos"/>
                <AddrInput updateValue={setState} size="15%" title="Estado" placeholder="Ex: SP"/>
            </div>
            <button onClick={() => {updateAddr()}}>Salvar</button>
            {/* <Link to="/profile/addresses">Salvar</Link> */}
        </div>
    );
}
 
export default NewAddress;