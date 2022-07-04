import axios from 'axios'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RowInfos from "../Common/rowInfos";
import MobileTable from "../Common/MobileTable";

const ManageAdmins = ({user}) => {
    const colTitles = {key: "ID", name: "Nome", email: "Email", cpf: "CPF", admin: "Admin"};
    // const [admins, setAdmins] = useState([
    //     {key: 1, name: "Daniel Johnson", email: "exemplo@usp.br", cpf: "111.111.111-11", admin: "S"},
    //     {key: 2, name: "Matthew Leblanc", email: "exemplo@usp.br", cpf: "222.222.222-22", admin: "S"},
    //     {key: 3, name: "Crystal Moore", email: "exemplo@usp.br", cpf: "333.333.333-33", admin: "N"},
    //     {key: 4, name: "Eleanor Friedman", email: "exemplo@usp.br", cpf: "444.444.444-44", admin: "S"},
    //     {key: 5, name: "Aime Strong", email: "exemplo@usp.br", cpf: "555.555.555-55", admin: "N"}
    // ]);

    const [users, setUsers] = useState([])
    const [usersInfo, setUsersInfo] = useState([])
    
    useEffect(() => {
        if (users.length)
            getUsersInfo()
    }, [users])

    useEffect(() => {
        getUsers()
    }, [user])

    function getUsers () {
        axios.create({ baseURL: "http://localhost:5000/user",
                    headers: {"Content-Type": "application-json","x-access-token": localStorage.getItem('token')}
        })
        .get()
        .then(resp => {
			setUsers(resp.data)
		})
		.catch( e => {console.log(e)})
    }

    function getUsersInfo () {
        let usersList = []
        users.map((u, idx) => {
            let uInfo = {
                id: idx + 1,
                name: u.name,
                email: u.email,
                cpf: u.CPF,
                admin: u.admin ? "True" : "False"                  
            }
            usersList.push(uInfo)
        })
        console.log(usersList)
        setUsersInfo(usersList)
    }
    
    const lengths = [7, 20, 30, 30, 13];

    let [selection, setSelection] = useState(-1);
    return (  
        <div className="info-container" id="stock-container">
            <input type="text" placeholder="Pesquisar por código"/>
            <div className="pc-table b-shadow">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                {
                usersInfo.map((userInfo) => {
                    console.log(userInfo)
                    return (
                        <div className={selection === userInfo._id ? "info-row selected" : "info-row"} onClick={() => {setSelection(userInfo._id)}} id={userInfo._id} key={userInfo._id}>
                            <RowInfos id={userInfo._id} sizes={lengths} infos={userInfo} />
                        </div>
                    );  
                })
                }
            </div>
            <div className="mobile-table">
                <MobileTable selection={selection} setSelection={setSelection} items={usersInfo} titles={colTitles} />
            </div>
            <Link to="/admin/manageAdmins">Remover</Link>
            <Link to="/admin/addAdmin">Adicionar</Link>
        </div>
    );
}
 
export default ManageAdmins;