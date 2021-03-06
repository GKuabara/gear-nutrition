import { useState, useEffect } from "react";
import RowInfos from "../Common/rowInfos";
import MobileTable from "../Common/MobileTable";
import User from '../services/user';
import '../css/manageAdmins.css'

const ManageAdmins = () => {
    const colTitles = {key: "ID", name: "Nome", email: "Email", cpf: "CPF", admin: "Admin"};
    let [selection, setSelection] = useState({idx: 0, id: null});

    const [users, setUsers] = useState([])
    const [usersInfo, setUsersInfo] = useState([])
    const [usersId, setUsersId] = useState([])
    
    useEffect(() => {
        if (users.length)
            getUsersInfo()
    }, [users])

    useEffect(() => {
        User.getUsers(setUsers)
    }, [selection])

    function getUsersInfo () {
        let usersList = []
        let idsList = []
        users.map((u, idx) => {
            let uInfo = {
                id: idx + 1,
                name: u.name,
                email: u.email,
                cpf: u.CPF,
                admin: u.admin ? "True" : "False"                  
            }
            idsList.push({id: u._id, idx: idx + 1})
            usersList.push(uInfo)
        })
        setUsersId(idsList)
        setUsersInfo(usersList)
    }

    const turnAdmin = () => {
        console.log(users[selection.idx - 1]._id, selection)
        if (users[selection.idx - 1].admin) {
            alert("Usuário já é admin")
            return
        }

        const updatedUser = {...users[selection.idx - 1], admin: true}
        updatedUser.token = localStorage.getItem('token')
        User.adminRole(updatedUser, selection.id, users, setUsers, true)
    }

    const removeAdmin = () => {
        if (selection.id === localStorage.getItem('id')) {
            alert("Não é possível remover admin de si mesmo.")
            return
        }

        console.log(users[selection.idx - 1])
        if (!users[selection.idx - 1].admin) {
            alert("Usuário já é admin")
            return
        }

        const updatedUser = {...users[selection.idx - 1], admin: false}
        updatedUser.token = localStorage.getItem('token')
        User.adminRole(updatedUser, selection.id, users, setUsers, false)
    }
    
    const lengths = [7, 15, 40, 25, 13];
    return (
        <div className="info-container" id="stock-container">
            <div className="pc-table b-shadow">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                {
                usersInfo.map((userInfo, idx) => {
                    return (
                        <div className={selection.idx === userInfo.id ? "info-row selected" : "info-row"} onClick={() => {setSelection(usersId[idx])}} id={userInfo._id} key={userInfo._id + userInfo.name}>
                            <RowInfos id={userInfo._id} sizes={lengths} infos={userInfo} />
                        </div>
                    );  
                })
                }
            </div>
            <div className="mobile-table">
                <MobileTable selection={selection} setSelection={setSelection} users={users} items={usersInfo} titles={colTitles} />
            </div>
            <div className="admin-buttons">
                <button onClick={removeAdmin}>Remover Admin</button>
                <button onClick={turnAdmin}>Adicionar Admin</button>
            </div>
        </div>
    );
}
 
export default ManageAdmins;