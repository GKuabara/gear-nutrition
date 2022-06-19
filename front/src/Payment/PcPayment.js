import '../css/payment.css'
import PaymentChangeAddress from './PaymentChangeAddress';
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';

const PcPayment = (props) => {
    
    return (
        <div id='payment-major-container'>
            <div id='payment-left-container'>
                <PaymentAddress infos={props.infos} value={props.value}/>
                <PaymentInfo />
            </div>
            <div id='payment-right-container'>
                <PaymentChangeAddress infos={props.infos} select={props.select} />
                <PaymentFinish />
            </div>
        </div>
    );
}

export default PcPayment;