import axios from 'axios';
import '../css/cartItem.css'
import { useEffect, useState } from 'react';

const CardItem = ({data, product, user, setUser}) => {
    const [quantity, setQuantity] = useState(product.qtt);
    
    let prod = data.filter((item) => { 
        return item._id === product.id
    })[0]

    const updateQuantity = (quantity) => {
        let newCart = user.cart.map(item => {
            if (item.id === prod._id) {
                item.qtt = quantity
            }
            return item
        })
        newCart = newCart.filter(item => { return item.qtt != 0 })
        console.log("Carrinho novo", newCart)
        setUser({...user, cart: newCart})
    }
    
    function getCartProd() {
        const cartLen = user.cart.length
        for (let i = 0; i < cartLen; i++)
            if (user.cart[i].id == prod._id) {
                return user.cart[i].qtt;
            }
    }

    useEffect(() => {
        console.log("user atualizado", user.cart)
        const body = {
            "name": user.name,
            "email": user.email,
            "password": user.password,
            "admin": user.admin,
            "CPF": user.CPF,
            "number": user.number,
            "street": user.street,
            "neighborhood": user.neighborhood,
            "CEP": user.CEP,
            "city": user.city,
            "state": user.state,
            "telephone": user.telephone,
            "cart": user.cart,
            "token": localStorage.getItem('token')
        }

        const url =  "http://localhost:5000/user/" + localStorage.getItem('id')
        axios.put( url, body )
        .then(resp => {
            setQuantity(getCartProd())
        })
        .catch(e => {
            console.log(e)
        })
    }, [user])

    return ( 
        <div className='item-container'>
            <div className="products-pr-image"><img src={prod.img} alt='img'/></div>
                <span>{prod.name}</span>
                <span id='cart-item-price'>R$ {prod.price}</span>
            <div className='item-qntd'>
                <button className="decButton" type="button" onClick={() => updateQuantity(quantity - 1)}>-</button>
                <input className='qntd' type='text' max={100} value={quantity} onChange={e => updateQuantity(e.target.value)}></input>
                <button className="incButton" type="button" onClick={() => updateQuantity(quantity + 1)}>+</button>
            </div>
                <span>R$ {(product.qtt * prod.price).toFixed(2)}</span>
        </div>
    );
}
 
export default CardItem;