import SelectionInput from "../Common/SelectionInput";
import TMBInput from "./TmbInput";
import { useState } from "react";
import '../css/tmb.css';

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

    /* Valores dos inputs */
    let [uGender, setGender] = useState('n');
    let [weight, setWeight] = useState(0);
    let [height, setHeight] = useState(0);
    let [age, setAge] = useState(0);
    let [activityL, setActivity] = useState('n');

    /* Erros dos inputs */
    let [hasErrors, setHasErrors] = useState({
        gender: true, 
        weight: false, 
        height: false, 
        age: false, 
        act: true
    });
    
    let [bmr, setBMR] = useState("3000 cal");
    function calcBMR() {
        let bmr = 0;
        const al =  activityL === 's' ? 1.2 : 
                    activityL === 'la' ? 1.375 : 
                    activityL === 'ma' ? 1.55 : 
                    activityL === 'aa' ? 1.725 : 1.9;

        if (uGender === 'm')
            bmr = al * (66 + (13.7 * weight) + (5*height) - (6.8*age));
        else
            bmr = al * (655 + (9.6 * weight) + (1.8*height) - (4.7*age));
        
        setBMR(Math.round(bmr) + " cal")
    }

    let newValues = hasErrors;
    function checkValues() {
        if (age >= 15 && age <= 80) newValues["age"] = false;
        else newValues["age"] = true;

        if (uGender === 'm' || uGender === 'f') newValues["gender"] = false;
        else newValues["gender"] = true;

        if (weight > 0 && weight < 300) newValues["weight"] = false;
        else newValues["weight"] = true;

        if (height > 0 && weight < 250) newValues["height"] = false;
        else newValues["height"] = true;

        if (['s', 'la', 'ma', 'aa', 'xa'].includes(activityL)) newValues["act"] = false;
        else newValues["act"] = true;

        Object.keys(hasErrors).map(key => {
            let inputs = document.getElementsByClassName(key);
            if (inputs.length === 0) return -1;

            Array.from(inputs).map((input) => {
                if (hasErrors[key]) input.style.backgroundColor = "lightcoral";
                else input.style.backgroundColor = "white";

                return 0;
            })

            inputs = document.getElementsByClassName("form-input");
            Array.from(inputs).map((input) => {
                let div = input.querySelector("div");
                const id = div.id;

                if (hasErrors[id]) {
                    div.querySelector("div").style.backgroundColor = "lightcoral";
                } else {
                    div.querySelector("div").style.backgroundColor = "white";
                }

                return 0;
            })

            return 0;
        });

        setHasErrors(newValues);
        console.log(true in Object.values(newValues))
        if (!Object.values(newValues).includes(true)) calcBMR();
    }

    return (  
        <div id="tmb-container">
            <div id="tmb-title">
                <h3>Taxa Metabólica Basal</h3>
            </div>
            <div id="tmb">
                <div id="user-info">
                    <div className="mobile">
                        <SelectionInput id="gender" onChange={setGender} size="91.5%" title="Gênero" values={gender}/>
                        <TMBInput hasError={hasErrors.weight} onChange={setWeight} id="weight" size="100%" placeholder="Ex: 60" name="Peso (kg)"/>
                        <TMBInput hasError={hasErrors.age} onChange={setAge} id="age" size="100%" placeholder="Ex: 25" name="Idade"/>
                        <TMBInput hasError={hasErrors.height} onChange={setHeight} id="height" size="100%" placeholder="Ex: 180" name="Altura (cm)"/>
                        <SelectionInput id="act" onChange={setActivity} size="91.5%" title="Taxa de Atividade" values={activity}/>
                    </div>
                    <div className="pc">
                        <SelectionInput id="gender" onChange={setGender} size="60%" title="Gênero" values={gender}/>
                        <TMBInput hasError={hasErrors.weight} onChange={setWeight} id="weight" size="30%" placeholder="Ex: 60" name="Peso (kg)"/>
                        <TMBInput hasError={hasErrors.age} onChange={setAge} id="age" size="60%" placeholder="Ex: 25" name="Idade"/>
                        <TMBInput hasError={hasErrors.height} onChange={setHeight} id="height" size="30%" placeholder="Ex: 180" name="Altura (cm)"/>
                        <SelectionInput id="act" onChange={setActivity} size="90%" title="Taxa de Atividade" values={activity}/>
                    </div>
                    <button onClick={checkValues}>Calcular</button>
                </div>
                <div id="result-container"><h2>{bmr}</h2></div>
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