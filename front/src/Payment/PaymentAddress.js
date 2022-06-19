import '../css/payment.css'

const PaymentAddress = (props) => {
    let infos = props.infos;
    // let info = infos.find(x => x.name === props.value);
    let info = props.infos[0];
    console.log(props.value);

    return (
        <div id="payment-address">
            <h2>Dados de Entrega</h2>
            <p>{info.name}<br/>{info.add}<br/>{info.city}</p>
        </div>
    )
}

export default PaymentAddress;