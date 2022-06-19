import '../css/payment.css'

const PaymentAddress = (props) => {
    let address = props.address;

    return (
        <div id="payment-address">
            <h2>Dados de Entrega</h2>
            <p>{address.name}<br/>{address.add}<br/>{address.city}</p>
        </div>
    )
}

export default PaymentAddress;