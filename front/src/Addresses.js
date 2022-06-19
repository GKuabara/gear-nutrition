import { useState } from "react";
import { Link } from 'react-router-dom';
import AddrCard from "./AddrCard";
import './css/addresses.css';

const Addresses = () => {
    const [addrs, setAddrs] = useState([
        {key: "Principal", addr: "Rua ABCDEGH", cep: "00000-000", num: 1337, district: "Centro", city: "São Carlos", state: "SP"},
        {key: "São Carlos", addr: "Rua ABCDEGH", cep: "00000-000", num: 1337, district: "Centro", city: "São Carlos", state: "SP"},
        {key: "Praia", addr: "Rua ABCDEGH", cep: "00000-000", num: 1337, district: "Centro", city: "São Carlos", state: "SP"}
    ]);

    function actionConfirmation(addrName) {
        const name = prompt("Para apagar, confirme o nome da casa abaixo:");
        if (name === addrName) {
            alert("Casa apagada");
        }
    }

    const thrash = require('./media/imgs/thrash.png');
    return (  
        <div className="info-container" id="addresses">
            {
            addrs.map((addr) => {
                return (
                    <div key={addr.key} className="b-shadow profile-card">
                        <AddrCard addr={addr}/>
                        <div className="thrash">
                            <button onClick={() => {actionConfirmation(addr.key)}}><img src={thrash} /></button>
                        </div>
                    </div>    
                );
            })
            }
            <Link to="/newAddress">Adicionar</Link>
        </div>
    );
}
 
export default Addresses;