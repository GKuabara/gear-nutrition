import FormInput from "../Common/FormInput";
import '../css/profileData.css';

const ProfileData = ({user}) => {
    return (  
        <div className="b-shadow info-container" id="profile-card">
            <FormInput param="disabled" placeholder={user.name} title="Nome Completo" type="text"/>
            <FormInput param="disabled" placeholder={user.CPF} title="CPF" type="text"/>
            <FormInput param="disabled" placeholder={user.email} title="Email" type="text"/>
            <FormInput param="disabled" placeholder={user.telephone} title="Celular" type="text"/>
        </div>
    );
}
 
export default ProfileData;