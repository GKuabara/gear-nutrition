import '../css/payment.css'
import PaymentAddress from './PaymentAddress';
import PaymentFinish from './PaymentFinish';
import PaymentInfo from './PaymentInfo';

const PcPayment = (props) => {
    return (
        <div id='payment-major-container'>
            <div id='payment-left-container'>
                <PaymentAddress address={props.address} />
                <PaymentInfo />
            </div>
            <div id='payment-right-container'>
                <PaymentFinish data={props.data} setData={props.setData}/>
            </div>
        </div>
    );
}

export default PcPayment;