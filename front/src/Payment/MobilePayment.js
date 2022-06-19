import '../css/payment.css'
import PaymentChangeAddress from './PaymentChangeAddress';
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';

const MobilePayment = (props) => {
    let infos = props.infos;

    return (
        <div id='mobile-payment-container'>
            <PaymentChangeAddress infos={props.infos} select={props.select} />
            <PaymentAddress infos={props.infos} value={props.value}/>
            <PaymentInfo />
            <PaymentFinish />
        </div>
    );
}

export default MobilePayment;