import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/payment.css'
import axios from 'axios'

const PaymentFinish = ({orders, setOrders, total, user, setUser}) => {
    const emptyCart = () => {
        const url =  "http://localhost:5000/user/" + localStorage.getItem('id')
        let emptyCart = structuredClone(user)
        emptyCart.token = localStorage.getItem('token')
        axios.put( url, {...emptyCart, cart: []} )
        .then(resp => {
            console.log("Pedido Finalizado")
        })
        .catch(e => {
            console.log(e)
        })
        setUser({...user, cart: []})
    }

    const finishOrder = () => {
        const newOrder = {
            token: localStorage.getItem('token'),
            customer: localStorage.getItem('id'),
            status: 'created',
            orders: user.cart.map((prod) => {
                return {
                    product: prod.id,
                    quantity: prod.qtt
                }
            }),
            price: total.toFixed(2)
        }

        axios.create({ baseURL: "http://localhost:5000/" })
        .post('/orders', newOrder)
        .then(resp => {
            emptyCart()
            let newOrders = structuredClone(orders)
            newOrders.push(newOrder)
            setOrders(newOrders)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const deleteCart = () => {
    }

    return (
        <div id='payment-finish'>
            <p>Previsão de entrega<br/>00/00/0000</p>
            <Link to="/ordered" id='payment-buyButton' onClick={() => finishOrder()}>Finalizar Pedido</Link>
        </div>
    );
}

export default PaymentFinish;