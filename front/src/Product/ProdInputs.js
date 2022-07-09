import { useState } from "react";
import { Link } from 'react-router-dom';
import TextInput from '../Common/TextInput';
import Product from '../services/product';
import { useEffect } from "react";
import '../css/prodInput.css';

const ProdInput = ({prodList, setProdList, prodId, product}) => {
    let [name, setName] = useState('')
    let [price, setPrice] = useState('')
    let [stock, setStock] = useState('')
    let [desc, setDesc] = useState('')
    let [series, setSeries] = useState('')
    let [img, setImg] = useState('')
    let [error, setError] = useState({hasError: false, message: ""})

    function checkName() {
        console.log(prodList)
        if (name.length === 0) {
            setError({hasError: true, message: "Insira um nome para o produto"})
            return true
        }
        return false
    }

    function checkPrice() {
        if (parseFloat(price) > 0.0)
            return false
        setError({hasError: true, message: "Preço deve ser um valor maior do que 0"})
        return true
    }

    function checkStock() {
        if (parseInt(stock) > 0) 
            return false
        setError({hasError: true, message: "Deve haver pelo menos 1 item no estoque"})
        return true
    }

    function checkDescription() {
        if (desc.length < 32) {
            setError({hasError: true, message: "Descrição deve possuir mais de 32 caracteres"})
            return true
        }
        return false
    }
    
    function checkImage() {
        if (img.match(/.(jpg|jpeg|png|svg)$/) === null) {
            setError({hasError: true, message: "Link de imagem inválido"})
            return true
        }
        return false
    }

    function checkSeries() {
        if (['g2', 'g3', 'g4', 'pop'].includes(series)) 
            return false
        setError({hasError: true, message: "Não é uma série válida. Deve ser um valor entre ['g2', 'g3', 'g4', 'pop']"})
        return true
    }

    function validateInputs() {
        if (checkDescription() || checkImage() || checkName() || checkPrice() || checkSeries() || checkStock()) 
            return true
        return false
    } 

    const addProduct = () => {
        if (validateInputs())
            return
        setError({hasError: false, message: ""})

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

        if (product)
            Product.updateStock(prodId, newProd, prodList, setProdList);
        else 
            Product.addProduct(newProd)
    }

    useEffect(() => {
    }, [error])

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
                <div>
                    <TextInput size={{width: 70, height: 40}} placeholder={img ? img : "Link da Imagem"} title="Imagem" setValue={setImg}/>
                    <TextInput size={{width: 24, height: 40}} placeholder={series ? series : "Série do produto"} title="Series" setValue={setSeries}/>
                </div>
                {error.hasError && <div style={{width: "90%"}} className="form-error">
                    <span>{error.message}</span>
                </div>}
                <Link to="/admin/stock">Cancelar</Link>
                <button onClick={() => addProduct()}>Salvar</button>
                {/* <Link to="/admin/stock" onClick={() => addProduct()}>Salvar</Link> */}
            </div>
        </div>
    );
}
 
export default ProdInput;