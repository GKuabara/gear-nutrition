import axios from 'axios'

class OrdersServices {
    fetchOrders = (setOrders) => {
        const ourl = `http://localhost:5000/orders/${localStorage.getItem('id')}`
		axios.create({ baseURL: ourl, headers: {"x-access-token" : localStorage.getItem('token') } })
        .get()
        .then(resp => {
			setOrders(resp.data)
        })
        .catch(e => {
			console.error(e)
        })
    }

    newOrder = (order, orders, setOrders, updateUser) => {
        axios.create({ baseURL: "http://localhost:5000/" })
        .post('/orders', order)
        .then(resp => {
            updateUser()
            let newOrders = structuredClone(orders)
            newOrders.push(order)
            setOrders(newOrders)
        })
        .catch(e => {
            console.log(e)
        })
    }
}

export default new OrdersServices()