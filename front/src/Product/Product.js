import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { productImages } from "../Common/images"
import '../css/product.css';

const Product = ({data, setData}) => {
    const location = useLocation();
    const [index, setIndex] = useState(0);
    const [inCart, setInCart] = useState(false);
    const [qntd, setQntd]= useState(1);
    
    const { idx } = location.state;
    const prod = data[idx]

    let incQntd = () => {
        if(qntd < 100) {setQntd(qntd + 1);}
    }

    let decQntd = () => {
        if(qntd > 0) {setQntd(qntd - 1);}
    }

    let handleChange = (e)=> {
        setQntd(e.target.value);
    }

    function addToCart(_id) {
        axios.post({ baseURL: "http://localhost:5000/product",
                    headers: {"Content-Type": "application-json"},
                    data: { id: prod._id, qtt: qntd }})
        .then(resp => resp.data);
        
    }

    // const addToCart = () => {
    //     let datacopy = data;
    //     console.log("inCart: " + inCart);
    //     if (inCart) {
    //         let i = 0;
    //         let found = false;
    //         while (i < datacopy.cart.length && !found) {
    //             if (datacopy.cart[i].indexProduct === index)
    //                 found = true;
    //             i++;
    //         }
    //         console.log("found: " + found)
    //         console.log(datacopy.cart[i-1])
    //         datacopy.cart[i-1].quantity += qntd;
    //     }

    //     else if (qntd > 0) {
    //         datacopy.cart.push({indexProduct: index, quantity: qntd});
    //         setInCart(true);
    //     }
    //     setData(datacopy);
    //     console.log(data);
    // }
    
    return ( 
        <div id='product-container'>
            <div id='prod-img'>
                <img src={prod.img} alt='product-img'></img>
            </div>
            <div id='prod-info'>
                <h1>{prod.name}</h1>
                <p id='prod-desc'>{prod.desc}</p>
                <p id='prod-sold'>itens vendidos: {prod.sold}</p>
                <p id='prod-price'>Por: R${prod.price}</p>
                <div id='prod-info-row'>
                    <div id='prod-info-left'>
                        <button id="decButton" type="button" onClick={decQntd}>-</button>
                        <input id='qntd' type='text' value={qntd} onChange={handleChange}></input>
                        <button id="incButton" type="button" onClick={incQntd}>+</button>
                    </div>
                    <Link to="/cart" id='buyButton' onClick={() => addToCart(prod._id)}>Comprar</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Product;