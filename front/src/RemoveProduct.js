import { Link } from "react-router-dom";
import TextInput from "./TextInput";

const RemoveProduct = () => {
    const prod = {key: 4, name: "Tapioca", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quaerat iure a cumque aut temporibus? Consequatur rem soluta vel aut, suscipit eaque quidem incidunt accusantium deleniti facere alias impedit cumque?"}

    return (  
        <div className="info-container">
            <TextInput size={{width: 55, height: 30}} placeholder={prod.name} title="Procurar por nome" />
            <TextInput size={{width: 35, height: 30}} placeholder={prod.key} title="Procurar por código" />
            <div id="prod-overview">
                <h3>Resumo do Item</h3>
                <div className="info"><span>({prod.key}) {prod.name}</span></div>
                <div className="info"><span>{"Em estoque: " + prod.qtt}</span></div>
                <div className="info"><span>{"Vendidos: " + prod.qtt}</span></div>
                <div className="desc">
                    <span>{prod.desc}</span>
                </div>
                <Link to="/admin">Cancelar</Link>
                <Link to="/admin">Remover</Link>    
            </div>
        </div>
    );
}
 
export default RemoveProduct;