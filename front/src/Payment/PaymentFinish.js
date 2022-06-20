import { Link } from 'react-router-dom';
import '../css/payment.css'

const PaymentFinish = () => {
    return (
        <div id='payment-finish'>
            <p>Previsão de entrega<br/>00/00/0000</p>
            <Link to="/ordered" id='payment-buyButton'>Finalizar Pedido</Link>
        </div>
    );
}

export default PaymentFinish;