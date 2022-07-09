import { useState } from "react";
import { Link } from "react-router-dom";
import RowInfos from "../Common/rowInfos";
import MobileTable from "../Common/MobileTable";
import '../css/stock.css';
import { useEffect } from "react";
import axios from 'axios'

const Stock = ({products, setProducts}) => {
    const colTitles = {key: "Código", name: "Nome", value: "Valor", qtt: "Quantidade", sold: "Vendidos"};
    const lengths = [10, 40, 15, 20 , 15];
    let [selection, setSelection] = useState({idx: 0, id: null});
    let [prodsInfos, setProdsInfos] = useState(products.map((prod, idx) => {
        return {
            id: idx,
            name: prod.name,
            price: prod.price,
            qtt: prod.stock,
            sold: prod.sold
        }
    }))

    const getProducts = () => {
        axios.create({  baseURL: "http://localhost:5000/product",
                        headers: {"Content-Type": "application-json","x-access-token": localStorage.getItem('token')}
        })
        .get()
        .then(resp => {
			setProducts(resp.data)
            setProdsInfos(products.map((prod, idx) => {
                return {
                    id: idx,
                    name: prod.name,
                    price: prod.price,
                    qtt: prod.stock,
                    sold: prod.sold
                }
            }))
		})
		.catch( e => {console.log(e)})
    }
    
    useEffect(() => {
        setProdsInfos(products.map((prod, idx) => {
            return {
                id: idx,
                name: prod.name,
                price: prod.price,
                qtt: prod.stock,
                sold: prod.sold
            }
        }))
    }, [products])

    useEffect(() => {
        getProducts()
    }, [selection])

    return (  
        <div className="info-container">
            <input type="text" placeholder="Pesquisar por código"/>
            <div className="pc-table b-shadow">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                {
                prodsInfos.map((product, idx) => {
                    if (products[idx])
                        return (
                            <div className={selection.idx === product.id ? "info-row selected" : "info-row"} onClick={() => {setSelection({id: products[idx]._id, idx: idx})}} id={product._id} key={products[idx]._id + product.idx}>
                                <RowInfos sizes={lengths} infos={product} />
                            </div>
                        );  
                })
                }
            </div>
            <div className="mobile-table">
                <MobileTable selection={selection} setSelection={setSelection} products={products} items={prodsInfos} titles={colTitles}/>
            </div>
            <Link to={`/admin/editStock/${selection.idx}`}>Editar</Link>
        </div>
    );
}
 
export default Stock;