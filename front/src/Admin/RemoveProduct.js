import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../Common/TextInput";

const RemoveProduct = ({products, setProducts}) => {
    const navigate = useNavigate()
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

    const updateStock = () => {
        axios.create({  baseURL: "http://localhost:5000/product",
                        headers: {"Content-Type": "application-json","x-access-token": localStorage.getItem('token')}
        })
        .get()
        .then(resp => {
			setProducts(resp.data)
		})
		.catch( e => {console.log(e)})
    }

    const searchProduct = () => {
        axios.create({ baseURL: "http://localhost:5000/product",
                    headers: {"Content-Type": "application-json","x-access-token": localStorage.getItem('token')}
        })
        .get(name)
        .then(resp => {
            updateStock();
            setProd(resp.data)
        })
        .catch( e => {console.log(e)})
    }

    const deleteProduct = () => {
        console.log(prod)
        axios.create({ baseURL: "http://localhost:5000/product",
                    headers: {"Content-Type": "application-json","x-access-token": localStorage.getItem('token')}
        })
        .delete(prod._id)
        .then(resp => {
            console.log('delete efetuado')
            navigate("/admin/stock")
        })
        .catch( e => {console.log(e)})
    }
    
    return (  
        <div className="info-container">
            <TextInput size={{width: 55, height: 30}} placeholder={prod.name ? prod.name : 'Digite o  nome'} title="Procurar por nome" setValue={setName}/>
            <div id='search-prod-button'>
                <button onClick={() => searchProduct()}>Pesquisar</button>
            </div>
            <div id="prod-overview">
                <h3>Resumo do Item</h3>
                <div className="info"><span>{prod.name}</span></div>
                <div className="info"><span>{"Em estoque: " + prod.stock}</span></div>
                <div className="info"><span>{"Vendidos: " + prod.sold}</span></div>
                <div className="desc">
                    <span>{prod.desc}</span>
                </div>
                <Link to="/admin/stock">Cancelar</Link>
                <button onClick={deleteProduct}>Remover</button>
                {/* <Link to="/admin/stock" onCLick={() => deleteProduct()}>Remover</Link>     */}
            </div>
        </div>
    );
}
 
export default RemoveProduct;