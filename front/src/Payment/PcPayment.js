import '../css/payment.css'
import PaymentChangeAddress from './PaymentChangeAddress';
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';

const PcPayment = (props) => {
    let info = props.info;
    
    return (
        <div id='payment-major-container'>
            <div id='payment-left-container'>
                <PaymentAddress info={info} />
                <PaymentInfo />
            </div>
            <div id='payment-right-container'>
                <PaymentChangeAddress />
                <PaymentFinish />
            </div>
        </div>
    );
}

export default PcPayment;