import { useState } from "react";
import RowInfos from "./rowInfos";
import { Link } from "react-router-dom";

const ManageAdmins = () => {
    const email = "exemplo@usp.br";
    const colTitles = {key: "ID", name: "Nome", email: "Email", cpf: "CPF"};
    const [admins, setAdmins] = useState([
        {key: 1, name: "Daniel Johnson", email: email, cpf: "111.111.111-11"},
        {key: 2, name: "Matthew Leblanc", email: email, cpf: "222.222.222-22"},
        {key: 3, name: "Crystal Moore", email: email, cpf: "333.333.333-33"},
        {key: 4, name: "Eleanor Friedman", email: email, cpf: "444.444.444-44"},
        {key: 5, name: "Aime Strong", email: email, cpf: "555.555.555-55"}
    ]);
    
    const lengths = [10, 30, 30, 30];

    let [selection, setSelection] = useState(-1);
    return (  
        <div className="info-container" id="stock-container">
            <input type="text" placeholder="Pesquisar por código"/>
            <div className="b-shadow">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                {
                admins.map((admin) => {
                    return (
                        <div className={selection === admin.key ? "info-row selected" : "info-row"} onClick={() => {setSelection(admin.key)}} id={admin.key} key={admin.key}>
                            <RowInfos sizes={lengths} infos={admin} />
                        </div>
                    );  
                })
                }
            </div>
            <Link to="/admin/manageAdmins">Remover</Link>
            <Link to="/admin/addAdmin">Adicionar</Link>
        </div>
    );
}
 
export default ManageAdmins;