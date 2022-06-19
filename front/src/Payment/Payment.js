import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/payment.css'
import PaymentChangeAddress from './PaymentChangeAddress';
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';
import PcPayment from './PcPayment';
import MobilePayment from './MobilePayment';

const Payment = () => {
    const infos = [
        {key: 1, name: "Ku Alves Gabriel", add: "Rua Caminho do seu Coração, 69, apto 42", city: "São Carlos, SP"},
        {key: 2, name: "Spider da Silva Victor", add: "Rua Camargo Sales, 745", city: "São Carlos, SP"}
    ];
    
    const [selectedOption, setSelectedOption] = useState(null);

    return ( 
        <div id='payment-container'>
            <div id='payment-title-container'>
                <h1>Pagamento</h1>
            </div>
            <PcPayment infos={infos} select={setSelectedOption} value={selectedOption}/>
            <MobilePayment infos={infos} select={setSelectedOption} value={selectedOption}/>
        </div>
    );
}
 
export default Payment;