import FormInput from "./FormInput";
import './css/profileData.css';

const ProfileData = () => {
    const data = {name: "Antedeguemon Costa da Silva Yoki", cpf: "111.111.111-1", email: "placeholder@usp.br", phone: "(11) 94444-4444"};
    return (  
        <div id="profile-card">
            <FormInput param="disabled" placeholder="Gabriel Alves Kuabara" title="Nome Completo" type="text"/>
            <FormInput param="disabled" placeholder="111.111.111-1" title="CPF" type="text"/>
            <FormInput param="disabled" placeholder="email@usp.br" title="Email" type="text"/>
            <FormInput param="disabled" placeholder="(11) 91111-1111" title="Celular" type="text"/>
        </div>
    );
}
 
export default ProfileData;