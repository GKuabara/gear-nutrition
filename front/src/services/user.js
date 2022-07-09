import axios from 'axios'

class UserServices {
    fetchUser = (setUserInfo) => {
        const url = `http://localhost:5000/user/${localStorage.getItem('id')}`
		axios.get( url, {headers: {"x-access-token": localStorage.getItem('token')}} )
		.then(resp => {
			localStorage.removeItem('cart')
			localStorage.setItem('cart', JSON.stringify(resp.data.cart)) 
			setUserInfo(resp.data)
		})
		.catch( e => {})
    }

    updateUser = (user, afterUpdate = false, updateQuantity = false, value = false) => {
        const url = `http://localhost:5000/user/${localStorage.getItem('id')}`
        user.token = localStorage.getItem('token')
        axios.put( url, user )
        .then(resp => {
            console.log("Usuário Atualizado")
            if (afterUpdate !== false)
                afterUpdate(user)
            if (updateQuantity !== false)
                updateQuantity(value)
        })
        .catch(e => {
            console.log(e)
        })
    }

    createUser = (reqBody, navigate) => {
        axios.post('http://localhost:5000/user/', reqBody)
        .then(function (response) {
            navigate("/")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    logUser = (loginInfos, setUser, setUserInfo, setError, navigate) => {
        axios.create({ baseURL: "http://localhost:5000" })
        .post('/user/auth', loginInfos)
        .then(resp => {
            localStorage.setItem('token', resp.data.token)
            localStorage.setItem('id', resp.data.id)
            setUser(resp.data)
            this.fetchUser(setUserInfo)
            setError(false)
            navigate("/")
        })
        .catch(e => {
            setError(true)
            console.log(e)
        })
    }

    getUsers = (setUsers) => {
        axios.create({ baseURL: "http://localhost:5000/user",
                    headers: {"Content-Type": "application-json","x-access-token": localStorage.getItem('token')}
        })
        .get()
        .then(resp => {
			setUsers(resp.data)
		})
		.catch( e => {console.log(e)})
    }

    adminRole = (updatedUser, id, users, setUsers, value) => {
        const url =  "http://localhost:5000/user/" + id
        axios.put( url, updatedUser )
        .then( () => {
            setUsers(users.map(user => {
                if (user._id === id)
                    user.admin = value
                return user
            }))
        })
        .catch(e => {
            console.log(e)
        })
    }
}

export default new UserServices()