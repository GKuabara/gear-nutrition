import axios from 'axios';
import '../css/cartItem.css'
import { useEffect, useState } from 'react';
import User from '../services/user';

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
        newCart = newCart.filter(item => { return item.qtt !== 0 })

        // Por algum motivo, quando tiramos o ultimo item do carrinho, o useEffect não era triggerado
        // Então atualizamos o banco por aqui mesmo
        if (quantity === 0 && user.cart.length === 1) {
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
                "cart": []
            }
            User.updateUser(body)
            setUser({...user, cart: []})
        } else {
            let newUser = {...user, cart: newCart.filter(item => { return item.qtt !== 0 })}
            if (user !== newUser) 
                setUser(newUser)
        }
    }
    
    function getCartProd() {
        const cartLen = user.cart.length
        for (let i = 0; i < cartLen; i++)
            if (user.cart[i].id === prod._id) {
                return user.cart[i].qtt;
            }
    }

    useEffect(() => {
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
            "cart": user.cart
        }

        User.updateUser(body, false, setQuantity, getCartProd())
        // const url =  "http://localhost:5000/user/" + localStorage.getItem('id')
        // axios.put( url, body )
        // .then(resp => {
        //     setQuantity(getCartProd())
        // })
        // .catch(e => {
        //     console.log(e)
        // })
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