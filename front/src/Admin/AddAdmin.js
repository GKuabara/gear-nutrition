import { Link } from "react-router-dom";
import TextInput from "../Common/TextInput";

const AddAdmin = () => {
    return (  
        <div className="info-container">
            <TextInput size={{width: 50, height: 30}} placeholder="Ex: Joao Guilherme" title="Nome:" />
            <TextInput size={{width: 40, height: 30}} placeholder="Ex: 111.111.111-11" title="CPF" />
            <TextInput size={{width: 91, height: 30}} placeholder="Ex: email@usp.br" title="Email" />
            <Link to="/admin/manageAdmins">Cancelar</Link>
            <Link to="/admin/manageAdmins">Adicionar</Link>
        </div>
    );
}
 
export default AddAdmin;