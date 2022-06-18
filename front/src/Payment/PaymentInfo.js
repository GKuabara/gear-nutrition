import '../css/payment.css'

const PaymentInfo = () => {
    return (
        <div id='payment-info-container'>
            <h2>Dados de Pagamento</h2>
            <div className='payment-info'>
                <p>Forma de Pagamento</p>
                <select name='payment-method' id="payment-method">
                    <option value="credit">Crédito</option>
                    <option value="debit">Débito</option>
                </select> 
            </div>
            <div className='payment-info'>
                <p>Número do Cartão</p>
                <input type='text'></input>
            </div>
            <div className='payment-info'>
                <p>Nome no Cartão</p>
                <input type='text'></input>
            </div>
            <div className='payment-info'>
                <p>Data de expiração</p>
                <input type='date'></input>
            </div>
            <div className='payment-info'>
                <p>CVV</p>
                <input type='text'></input>
            </div>
        </div>
    );
}

export default PaymentInfo;