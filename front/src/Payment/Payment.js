import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';
import PcPayment from './PcPayment';
import MobilePayment from './MobilePayment';
import '../css/payment.css'

const Payment = ({data, setData}) => {

    const address = [
        {key: 1, name: "Ku Alves Gabriel", add: "Rua Caminho do seu Coração, 69, apto 42", city: "São Carlos, SP"},
        {key: 2, name: "Spider da Silva Victor", add: "Rua Camargo Sales, 745", city: "São Carlos, SP"}
    ];
    
    return ( 
        <div id='payment-container'>
            <div id='payment-title-container'>
                <h1>Pagamento</h1>
            </div>
            <PcPayment address={address[0]} data={data} setData={setData}/>
            <MobilePayment address={address[0]}/>
        </div>
    );
}
 
export default Payment;