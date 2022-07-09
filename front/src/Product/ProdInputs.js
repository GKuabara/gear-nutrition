import axios from 'axios';
import { useState } from "react";
import { Link } from 'react-router-dom';
import TextInput from '../Common/TextInput';
import '../css/prodInput.css';

const ProdInput = ({prodList, setProdList, prodId, product}) => {
    let [name, setName] = useState('')
    let [price, setPrice] = useState('')
    let [stock, setStock] = useState('')
    let [desc, setDesc] = useState('')
    let [series, setSeries] = useState('')
    let [img, setImg] = useState('')

    const addProduct = () => {
        const newProd = {
            name: name,
            series: series,
            img: img,
            desc: desc,
            price: price,
            stock: parseInt(stock),
            sold: 0,
            token: localStorage.getItem('token')
        }

        if (product) {
            const url =  "http://localhost:5000/product/" + prodId
            axios.put(url, newProd)
            .then(resp => {
                setProdList(prodList.map((prod) => {
                    if (prod._id === prodId)
                        return newProd
                    return prod
                })) 
            })
            .catch(e => {
                console.log(e)
            })
            return
        }

        axios.post('http://localhost:5000/product', newProd)
        .then(function (response) {
            console.log("Adicionado com sucesso!")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (  
        <div id="edition">
            <div style={{border:"1ps solid red"}}>
                <TextInput size={{width: 50, height: 40}} placeholder={product ? product.name : "Nome do Produto"} title="Nome" setValue={setName}/>
                <TextInput size={{width: 24, height: 40}} placeholder={product ? product.price : "Valor do Produto"} title="Valor" setValue={setPrice}/>
                <TextInput size={{width: 20, height: 40}} placeholder={product ? product.stock : "Ex: 1000"} title="Estoque" setValue={setStock}/>
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
                }} cols="30" rows="10" onChange={(e) => {setDesc(e.target.value)}}/>
                <div style={{border:"1ps solid red"}}>
                    <TextInput size={{width: 70, height: 40}} placeholder={img ? img : "Link da Imagem"} title="Imagem" setValue={setImg}/>
                    <TextInput size={{width: 24, height: 40}} placeholder={series ? series : "Série do produto"} title="Series" setValue={setSeries}/>
                </div>
                <Link to="/admin/stock">Cancelar</Link>
                <Link to="/admin/stock" onClick={() => addProduct()}>Salvar</Link>
            </div>
        </div>
    );
}
 
export default ProdInput;