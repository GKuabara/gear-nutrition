import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';
import PcPayment from './PcPayment';
import MobilePayment from './MobilePayment';
import '../css/payment.css'

const Payment = ({user, setUser, orders}) => {

    let [addr, setAddr] = useState("")
    useEffect(() => {
        if (user)
            setAddr({
                street: user.street,
                num: user.number,
                city: user.city,
                state: user.state
            })
    }, [user])
    
    return ( 
        <div id='payment-container'>
            <div id='payment-title-container'>
                <h1>Pagamento</h1>
            </div>
            <PcPayment address={addr} data={data} setData={setData}/>
            <MobilePayment address={addr}/>
        </div>
    );
}
 
export default Payment;