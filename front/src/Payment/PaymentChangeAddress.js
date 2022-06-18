import '../css/payment.css'

const paymentChangeAddress = (props) => {

    return (
        <div id='payment-change-address'>
            <p>Alterar endereço de entrega</p>
            <select name='select-address' id='select-address'>
                <option value="casa1">casa 1</option>
                <option value="casa2">casa 2</option>
                <option value="casa3">casa 3</option>
            </select>
        </div>
    )
}

export default paymentChangeAddress;