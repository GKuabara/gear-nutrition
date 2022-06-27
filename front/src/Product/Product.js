import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { productImages } from "../Common/images"
import '../css/product.css';

const Product = ({data, setData}) => {
    const location = useLocation();
    const [index, setIndex] = useState(0);
    const [inCart, setInCart] = useState(false);
    const [qntd, setQntd]= useState(1);
    
    useEffect(() => {
        const { name } = location.state;
        let i = 0;
        let found = false;
        while (i < data.products.length && !found) {
            if (data.products[i].name === name) {
                setIndex(i);
                found = true;
            }
            i++;
        }

        let j = 0;
        found = false;
        while (j < data.cart.length && !found) {
            if (data.cart[j].indexProduct === i-1) {
                setQntd(data.cart[j].quantity)
                setInCart(true);
                found = true;
            }
            j++;
        }
        console.log(data);
    }, [location, index, data]);

    let incQntd = () => {
        if(qntd < 100) {setQntd(qntd + 1);}
    };
    let decQntd = () => {
        if(qntd > 0) {setQntd(qntd - 1);}
    }
    let handleChange = (e)=> {
        setQntd(e.target.value);
    }

    const addToCart = () => {
        let datacopy = data;
        console.log("inCart: " + inCart);
        if (inCart) {
            let i = 0;
            let found = false;
            while (i < datacopy.cart.length && !found) {
                if (datacopy.cart[i].indexProduct === index)
                    found = true;
                i++;
            }
            console.log("found: " + found)
            console.log(datacopy.cart[i-1])
            datacopy.cart[i-1].quantity += qntd;
        }

        else if (qntd > 0) {
            datacopy.cart.push({indexProduct: index, quantity: qntd});
            setInCart(true);
        }
        setData(datacopy);
        console.log(data);
    }
    
    return ( 
        <div id='product-container'>
            <div id='prod-img'>
                <img src={productImages[data.products[index].img]} alt='product-img'></img>
            </div>
            <div id='prod-info'>
                <h1>{data.products[index].name}</h1>
                <p id='prod-desc'>{data.products[index].description}</p>
                <p id='prod-sold'>itens vendidos: {data.products[index].sold}</p>
                <p id='prod-price'>Por: R${data.products[index].price}</p>
                <div id='prod-info-row'>
                    <div id='prod-info-left'>
                        <button id="decButton" type="button" onClick={decQntd}>-</button>
                        <input id='qntd' type='text' value={qntd} onChange={handleChange}></input>
                        <button id="incButton" type="button" onClick={incQntd}>+</button>
                    </div>
                    <Link to="/cart" id='buyButton' onClick={() => addToCart()}>Comprar</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Product;