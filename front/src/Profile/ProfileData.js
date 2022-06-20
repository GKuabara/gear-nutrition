import FormInput from "../Common/FormInput";
import '../css/profileData.css';

const ProfileData = () => {
    return (  
        <div className="b-shadow info-container" id="profile-card">
            <FormInput param="disabled" placeholder="Gabriel Alves Kuabara" title="Nome Completo" type="text"/>
            <FormInput param="disabled" placeholder="111.111.111-1" title="CPF" type="text"/>
            <FormInput param="disabled" placeholder="email@usp.br" title="Email" type="text"/>
            <FormInput param="disabled" placeholder="(11) 91111-1111" title="Celular" type="text"/>
        </div>
    );
}
 
export default ProfileData;