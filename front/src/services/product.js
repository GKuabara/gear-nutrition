import axios from 'axios'

class ProductServices {
    fetchProducts = (setProduct) => {
        axios.create({ baseURL: "http://localhost:5000/product", headers: {"Content-Type": "application-json"} })
        .get()
        .then(resp => {
            setProduct(resp.data)
        })
        .catch(e => {
            console.error(e)
        })
    }
    
    updateStock = (prodId, newProd, prodList, setProdList) => {
        const url =  `http://localhost:5000/product/${prodId}`
        axios.put(url, newProd)
        .then(resp => {
            setProdList(prodList.map((prod) => {
                if (prod._id === prodId)
                    return newProd
                return prod
            })) 
        })
        .catch(e => {
            console.log(e)
        })
    }

    deleteProduct = (prodId, navigate = false) => {
        axios.create({ baseURL: "http://localhost:5000/product",
                    headers: {"Content-Type": "application-json","x-access-token": localStorage.getItem('token')}
        })
        .delete(prodId)
        .then(resp => {
            console.log('delete efetuado')
            if (navigate)
                navigate("/admin/stock")
        })
        .catch( e => {console.log(e)})
    }

    addProduct = (newProd) => {
        axios.post('http://localhost:5000/product', newProd)
        .then(function (response) {
            console.log("Adicionado com sucesso!")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    searchProd = (name, setProducts, setProd) => {
        axios.create({ baseURL: "http://localhost:5000/product",
                    headers: {"Content-Type": "application-json","x-access-token": localStorage.getItem('token')}
        })
        .get(name)
        .then(resp => {
            this.fetchProducts(setProducts)
            setProd(resp.data)
        })
        .catch( e => {console.log(e)})
    }
}

export default new ProductServices()