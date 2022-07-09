import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Prod from '../services/product';
import '../css/product.css';

const Product = ({data, setProducts, user, setUser}) => {
    let [prod, setProd] = useState(false);
    const [qntd, setQntd]= useState(1);
    const { idx } = useParams();
    const navigate = useNavigate();

    if (data.length === 0) {
        Prod.fetchProducts(setProducts)
    }

    useEffect(() => {
        if (data.length > 0)
            setProd(data[idx])
    }, [data])

    let incQntd = () => {if(qntd < prod.stock) {setQntd(parseInt(qntd + 1))}}
    
    let decQntd = () => {if(qntd > 1) {setQntd(parseInt(qntd - 1))}}

    function addToCart() {
        if (qntd === 0) {
            alert("Quantidade deve ser maior do que 0")
            return
        }

        let duplicate = false
        let cartCopy = JSON.parse(JSON.stringify(user.cart))
        cartCopy.map((item, idx) => {
            if (item.id === prod._id) {
                duplicate = true
                cartCopy[idx].qtt += qntd
            }
        })

        if (!duplicate) {
            cartCopy.push({id: prod._id, qtt: qntd})
        }

        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(cartCopy))
        setUser({...user, cart: cartCopy})

        navigate("/cart")
    }

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
                        <input id='qntd' type="text" value={qntd} onChange={(e) => {
                            const val = parseInt(e.target.value)
                            if (val > 0 && val <= prod.stock)
                                setQntd(val)
                            else if (isNaN(val)) {
                                setQntd(0)
                            }
                        }}></input>
                        <button id="incButton" type="button" onClick={incQntd}>+</button>
                    </div>
                    <button id="buyButton" onClick={addToCart}>Comprar</button>
                </div>
            </div>
        </div>
    );
}
 
export default Product;