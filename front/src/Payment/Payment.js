import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PcPayment from './PcPayment';
import MobilePayment from './MobilePayment';
import '../css/payment.css'

const Payment = ({products, setProducts, setOrders, orders, user, setUser}) => {
    const location = useLocation()
    const {total} = location.state

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
            <PcPayment products={products} setProducts={setProducts} setOrders={setOrders} orders={orders} address={addr} user={user} total={total} setUser={setUser}/>
            <MobilePayment products={products} setProducts={setProducts} setOrders={setOrders} orders={orders} total={total} address={addr}/>
        </div>
    );
}
 
export default Payment;