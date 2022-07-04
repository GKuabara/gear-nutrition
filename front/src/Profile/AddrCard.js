import '../css/addrCard.css';
import axios from 'axios'

const AddrCard = ({uInfo}) => {
    
    return (  
        <div className="addr-card">
            <h3>Casa</h3>
            <table>
                <tbody>
                    <tr>
                        <td><span>Logradouro: <br /></span> {uInfo.street}</td>
                        <td><span>CEP: <br /></span> {uInfo.CEP}</td>
                        <td><span>Número: <br /></span> {uInfo.number}</td>
                    </tr>

                    <tr>
                        <td><span>Bairro: <br /></span> {uInfo.neighborhood}</td>
                        <td><span>Cidade: <br /></span> {uInfo.city}</td>
                        <td><span>Estado: <br /></span> {uInfo.state}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default AddrCard;