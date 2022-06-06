import SelectionInput from "./SelectionInput";
import TMBInput from "./TmbInput";
import './css/tmb.css';

const TMB = () => {
    const gender = [
        { value: 'm', label: 'Masculino' },
        { value: 'f', label: 'Feminino' }
    ]

    const activity = [
        { value: 's', label: 'Sedentário' },
        { value: 'la', label: 'Levemente Ativo' },
        { value: 'ma', label: 'Moderadamente Ativo' },
        { value: 'aa', label: 'Altamente Ativo' },
        { value: 'xa', label: 'Extremamente Ativo' }
    ]

    return (  
        <div id="tmb-container">
            <div id="tmb-title">
                <h3>Taxa Metabólica Basal</h3>
            </div>
            <div id="tmb">
                <div id="user-info">
                    <SelectionInput size="60%" title="Gênero" values={gender}/>
                    <TMBInput size="30%" placeholder="Ex: 60kg" name="Peso"/>
                    <TMBInput size="60%" placeholder="Ex: 25" name="Idade"/>
                    <TMBInput size="30%" placeholder="Ex: 180" name="Altura (cm)"/>
                    <SelectionInput size="90%" title="Taxa de Atividade" values={activity}/>
                    <button>Calcular</button>
                </div>
                <div id="result-container"><h2>3000 cal</h2></div>
            </div>
            <div id="activity-info">
                <span>Taxas de Atividade:</span>
                <ul>
                <li>Sedentários (pouco ou nenhum exercício)</li>
                <li>Levemente ativo (exercício leve 1 a 3 dias por semana)</li>
                <li>Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana)</li>
                <li>Altamente ativo (exercício pesado de 5 a 6 dias por semana)</li>
                <li>Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia)</li>
                </ul>
            </div>
        </div>
    );
}
 
export default TMB;