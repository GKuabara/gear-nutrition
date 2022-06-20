import { Link } from "react-router-dom";
import '../css/ordered.css';

const Ordered = () => {
    return (  
        <div className="ordered b-shadow">
            <div>
                <h1>Pedido Finalizado</h1>
            </div>
            <div>
                <h3>Seu código de compra é:<br /> abcdefg123456</h3>
            </div>
            <div>
                <span>O comprovante será enviado por email.</span>
            </div>
            <div className="return">
                <Link to="/">Voltar para home</Link>
            </div>
        </div>
    );
}
 
export default Ordered;