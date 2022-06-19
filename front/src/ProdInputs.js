import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import './css/prodInput.css';

const ProdInput = ({product}) => {
    return (  
        <div id="edition">
            <div style={{border:"1ps solid red"}}>
                <TextInput size={{width: 50, height: 40}} placeholder={product ? product.name : "Nome do Produto"} title="Nome" />
                <TextInput size={{width: 24, height: 40}} placeholder={product ? product.value : "Valor do Produto"} title="Valor" />
                <TextInput size={{width: 20, height: 40}} placeholder="Ex: 1000" title="Adicionar" />
            </div>
            <div id="text-area">
                <span style={{marginLeft: "2%"}}>Descrição</span>
                <textarea style={{
                    width: "98%", 
                    marginLeft: "1%",
                    padding: "5px",
                    fontWeight: "500",
                    resize: "none", 
                    borderRadius: "5px", 
                    border: "1px solid grey"
                }} cols="30" rows="10" />
                <div id="prod-img">
                    <span>Imagem do produto</span>
                    <input type="file" name="" id=""></input>
                </div>
                <Link to="/admin">Cancelar</Link>
                <Link to="/admin">Salvar</Link>
            </div>
        </div>
    );
}
 
export default ProdInput;