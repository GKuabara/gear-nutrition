import '../css/payment.css'
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';

const PcPayment = ({ orders, setOrders, total, address, user, setUser }) => {
    return (
        <div id='payment-major-container'>
            <div id='payment-left-container'>
                <PaymentAddress address={address} />
                <PaymentInfo />
            </div>
            <div id='payment-right-container'>
                <PaymentFinish setOrders={setOrders} orders={orders} total={total} user={user} setUser={setUser}/>
            </div>
        </div>
    );
}

export default PcPayment; 