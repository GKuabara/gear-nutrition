import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../Common/TextInput";
import Product from '../services/product';

const RemoveProduct = ({setProducts}) => {
    const navigate = useNavigate();
    let [name, setName] = useState('')
    let [prod, setProd] = useState({
        id: '',
        name: '',
        series: '',
        img: '',
        desc: '',
        price: 0,
        stock: 0,
        sold: 0
    })

    useEffect(() => {
        searchProduct()
    }, [name])

    const searchProduct = () => {
        Product.searchProd(name, setProducts, setProd)
    }
    
    return (  
        <div className="info-container">
            <TextInput size={{width: 55, height: 30}} placeholder={prod && prod.name ? prod.name : 'Digite o  nome'} title="Procurar por nome" setValue={setName}/>
            <div id="prod-overview">
                <h3>Resumo do Item</h3>
                <div className="info"><span>{prod ? prod.name : "Produto"}</span></div>
                <div className="info"><span>Em estoque: {prod ? prod.stock: ""}</span></div>
                <div className="info"><span>Vendidos: {prod ? prod.sold: ""}</span></div>
                <div className="desc">
                    <span>{prod.desc}</span>
                </div>
                <Link to="/admin/stock">Cancelar</Link>
                <button onClick={() => {Product.deleteProduct(prod._id); navigate("/admin/stock")}}>Remover</button>
            </div>
        </div>
    );
}
 
export default RemoveProduct;