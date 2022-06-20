import '../css/addrCard.css';

const AddrCard = ({addr}) => {
    return (  
        <div className="addr-card">
            <h3>Casa {addr.key}</h3>
            <table>
                <tbody>
                    <tr>
                        <td><span>Logradouro: <br /></span> {addr.addr}</td>
                        <td><span>CEP: <br /></span> {addr.cep}</td>
                        <td><span>Número: <br /></span> {addr.num}</td>
                    </tr>

                    <tr>
                        <td><span>Bairro: <br /></span> {addr.district}</td>
                        <td><span>Cidade: <br /></span> {addr.city}</td>
                        <td><span>Estado: <br /></span> {addr.state}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default AddrCard;