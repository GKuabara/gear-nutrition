import { Link } from 'react-router-dom';
import AddrInput from './AddrInput';
import './css/newAddress.css';

const NewAddress = ({}) => {
    return ( 
        <div className="info-container b-shadow new-address">            
            <div className="house-name">
                <h3>Casa: </h3>
                <input type="text" />
            </div>

            <div className="addr-infos">
                <AddrInput size="45%" title="Logradouro" placeholder="Ex: Rua Doutor Carlos de Camargo Salles"/>
                <AddrInput size="25%" title="CEP" placeholder="Ex: 13560-550"/>
                <AddrInput size="15%" title="Número" placeholder="Ex: 1337"/>

                <AddrInput size="45%" title="Bairro" placeholder="Ex: Jardim Lutfalla"/>
                <AddrInput size="25%" title="Cidade" placeholder="Ex: São Carlos"/>
                <AddrInput size="15%" title="Estado" placeholder="Ex: SP"/>
            </div>
            <Link to="/addresses">Adicionar</Link>
        </div>
    );
}
 
export default NewAddress;