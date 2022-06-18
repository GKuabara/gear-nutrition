import '../css/payment.css'
import PaymentChangeAddress from './PaymentChangeAddress';
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';

const MobilePayment = (props) => {
    let info = props.info;

    return (
        <div id='mobile-payment-container'>
            <PaymentChangeAddress />
            <PaymentAddress info={info} />
            <PaymentInfo />
            <PaymentFinish />
        </div>
    );
}

export default MobilePayment;