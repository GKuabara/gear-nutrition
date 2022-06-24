import { Link } from 'react-router-dom';
import '../css/payment.css'

const PaymentFinish = (props) => {

    const deleteCart = () => {
        props.setData({...props.data, "cart": []});
        console.log(props.data);
    }

    return (
        <div id='payment-finish'>
            <p>Previsão de entrega<br/>00/00/0000</p>
            <Link to="/ordered" id='payment-buyButton' onClick={() => deleteCart()}>Finalizar Pedido</Link>
        </div>
    );
}

export default PaymentFinish;