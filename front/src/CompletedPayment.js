import './css/completedPayment.css'

const CompletedPayment = (props) => {
    const code = 'abcdef12345';
    
    return (
        <div id='completed-content'>
            <div className='completed-container'>
                <p id='green-text'>Pedido Finalizado</p>
                <p>Seu código de compra é:<br/>{code}</p>
                <p>O comprovante será enviado no email.</p>
            </div>
        </div>
     );
}
 
export default CompletedPayment;