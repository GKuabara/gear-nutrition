import axios from 'axios';
import '../css/cartItem.css'
import { useState } from 'react';

const CardItem = ({data, product, user, setUser}) => {
    const [quantity, setQuantity] = useState(product.qtt);
    
    let prod = data.filter((item) => { 
        console.log(product.id)
        return item._id === product.id
    })[0]

    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].id === product._id) {
    //         // setProd(data[i])
    //         break;
    //     }
    // }

    // data.map((item) => {
    //     if (item.id === product._id) {
    //         setProd(item)
    //     }
    // })
    
    // const [cartIndex, setCartIndex] = useState(0);
    
    // useEffect(() => {
    //     data.cart.map((prod, idx) => {
    //         if (prod.indexProduct === product.indexProduct)
    //             setCartIndex(idx);
    //     })
    // }, [data, product])

    // const incNum = () => {
    //     setData({...data, cart: data.cart.map((prod, index) => {
    //         if (index === cartIndex)
    //             return {...prod, quantity: prod.quantity + 1};
    //         return prod;
    //     })})
    //     setQuantity(quantity + 1);
    // }

    // const decNum = () => {
    //     if (quantity > 1) {
    //         setData({...data, cart: data.cart.map((prod, index) => {
    //             if (index === cartIndex)
    //                 return {...prod, quantity: prod.quantity - 1};
    //             return prod;
    //         })})
    //         setQuantity(quantity - 1);
    //     }
    //     if (quantity === 1) {
    //         setData({...data, cart: data.cart.filter(function(product, index) {
    //             return index !== cartIndex;
    //         }
    //     )})}
    // }

    const updateQuantity = () => {
        let updateUser = user.copy()
        updateUser.cart.forEach(item => {
            if (item.id === prod._id) {
                item.qtt = quantity
            }
        })
        
        setUser({...user, cart: updateUser.cart})
        axios.put({ baseURL: "http://localhost:5000/user/" + localStorage.getItem('id'),
                    headers: {"Content-Type": "application-json", "x-access-token": localStorage.getItem('token')},
                    data: user})
        .then(resp => console.log(resp.data))
        .catch(e => {
            console.log('aaaaaaaaaa')
        })
    }

    // useEffect(() => {
    //     user.cart.forEach(item => {
    //         if (item._id = prod._id) {
    //             item.qtt = quantity
    //         }
    //     })
    //     console.log({...user, cart: user.cart})
    //     localStorage.setItem('cart', JSON.stringify({...user, cart: user.cart}))
    //     setUser({...user, cart: user.cart})
    //     axios.put({ baseURL: "http://localhost:5000/user/" + localStorage.getItem('id'),
    //                 headers: {"Content-Type": "application-json", "x-access-token": localStorage.getItem('token')},
    //                 data: user})
    //     .then(resp => console.log(resp.data))
    //     .catch( e => {
    //         console.log('aaaaaaaaaa')
    //     })
    // }, [user])

    return ( 
        <div className='item-container'>
            <div className="products-pr-image"><img src={prod.img} alt='img'/></div>
                <span>{prod.name}</span>
                <span id='cart-item-price'>R$ {prod.price}</span>
            <div className='item-qntd'>
                <button className="decButton" type="button" onClick={() => setQuantity(quantity - 1)}>-</button>
                <input className='qntd' type='text' max={100} value={quantity} onChange={e => updateQuantity()}></input>
                <button className="incButton" type="button" onClick={() => updateQuantity()}>+</button>
            </div>
                <span>R$ {(product.qtt * prod.price).toFixed(2)}</span>
        </div>
    );
}
 
export default CardItem;