import '../css/payment.css'
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';

const MobilePayment = (props) => {

    return (
        <div id='mobile-payment-container'>
            <PaymentAddress address={props.address} />
            <PaymentInfo />
            <PaymentFinish total={props.total} />
        </div>
    );
}

export default MobilePayment;