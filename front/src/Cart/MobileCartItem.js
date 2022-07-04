import axios from 'axios';
import '../css/cartItem.css'
import { useState, useEffect } from 'react';
import { productImages } from "../Common/images"

const MobileCartItem = ({product, data, user, setUser}) => {
    const [prod, setProd] = useState({})
    const [quantity, setQuantity] = useState(product.qtt);
    data.map((item) => {
        if (item._id == product._id)
            setProd(item)
    })

    useEffect(() => {
        user.cart.forEach(item => {
            if (item._id = prod._id) {
                item.qtt = quantity
            }
        })
        // setUser({...user, cart: user.cart})
        axios.put({ baseURL: "http://localhost:5000/user/" + localStorage.getItem('id'),
                    headers: {"Content-Type": "application-json", "x-access-token": localStorage.getItem('token')},
                    data: user})
        .then(resp => console.log(resp.data))
        .catch( e => {
            console.log('aaaaaaaaaa')
        })
    })

    // let [index, setIndex] = useState(0);

    // useEffect(() => {
    //     data.products.map((prod, idx) => {
    //         if (prod.index === product.index)
    //             setIndex(idx++)
    //     })
    // }, [data, product])

    // let incNum = () => {
    //     if(data.products[index].qntd < 100) {
    //         let datacopy = data.products;
    //         datacopy[index].qntd += 1;
    //         setData({...data, "products": datacopy});
    //     }
    // };

    // let decNum = () => {
    //     if (data.products[index].qntd === 1) {
    //         setData({...data, products: data.products.filter(function(product, cartIndex) {
    //             return index !== cartIndex;
    //         })});
    //     } else if (data.products[index].qntd > 1) {
    //         let datacopy = data.products;
    //         datacopy[index].qntd -= 1;
    //         setData({...data, "products": datacopy});
    //     }
    // }

    // function updateQtt(e) {
    //     let datacopy = data.products;
    //     datacopy[index].qntd = e.target.value;
    //     setData({...data, "products": datacopy});
    // }

    return ( 
        <div className='mobile-item-container'>
            <div className='mobile-cart-item-upper'>
                <div className="cart-product-image"><img src={prod.img} alt=''/></div>
                <div className='mobile-cart-item-name'>
                    <p>{prod.name}</p>
                    <p className='cart-item-price'>R$ {prod.price}</p>
                </div>
            </div>
            <div className='mobile-cart-item-lower'>
                <div className='mobile-cart-item-qntd'>
                    <button className="decButton" type="button" onClick={() => setQuantity(quantity - 1)}>-</button>
                    <input className='qntd' type='text' value={quantity} onChange={e => setQuantity(e.target.value)}></input>
                    <button className="incButton" type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <span>R$ {(product.qtt * prod.price).toFixed(2)}</span>
            </div>
        </div>
    );
}
 
export default MobileCartItem;