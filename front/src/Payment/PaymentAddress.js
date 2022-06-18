import '../css/payment.css'

const PaymentAddress = (props) => {
    let info = props.info;

    return (
        <div id="payment-address">
            <h2>Dados de Entrega</h2>
            <p>{info.name}<br/>{info.add}<br/>{info.city}</p>
        </div>
    )
}

export default PaymentAddress;