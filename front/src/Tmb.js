import SelectionInput from "./SelectionInput";
import TMBInput from "./TmbInput";
import './css/tmb.css';
import { useState } from "react";
import { HashRouter } from "react-router-dom";

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
        weight: true, 
        height: true, 
        age: true, 
        act: true
    });

    function checkValues() {
        let newValues = hasErrors;
        if (age >= 15 && age <= 80) {
            document.getElementById("age").style.backgroundColor = 'white';
            newValues.age = false;
            setHasErrors(newValues);
        } else {
            document.getElementById("age").style.backgroundColor = 'lightcoral';
            newValues.age = true;
            setHasErrors(newValues);
        }

        if (uGender == 'm' || uGender == 'f') {
            const div = document.getElementById("gender").querySelector("div");
            div.style.backgroundColor = 'white';
            newValues.gender = false;
            setHasErrors(newValues);
        } else {
            const div = document.getElementById("gender").querySelector("div");
            div.style.backgroundColor = 'lightcoral';
            newValues.gender = true;
            setHasErrors(newValues);
        }

        if (weight > 0 && weight < 300) {
            document.getElementById("weight").style.backgroundColor = 'white';
            newValues.weight = false;
            setHasErrors(newValues);
        } else {
            document.getElementById("weight").style.backgroundColor = 'lightcoral';
            newValues.weight = true;
            setHasErrors(newValues);
        }

        if (height > 0 && weight < 250) {
            document.getElementById("height").style.backgroundColor = 'white';
            newValues.height = false;
            setHasErrors(newValues);
        } else {
            document.getElementById("height").style.backgroundColor = 'lightcoral';
            newValues.height = true;
            setHasErrors(newValues);
        }

        if (['s', 'la', 'ma', 'aa', 'xa'].includes(activityL)) {
            document.getElementById("actvt").querySelector("div").style.backgroundColor = 'white';
            newValues.act = false;
            setHasErrors(newValues);
        } else {
            document.getElementById("actvt").querySelector("div").style.backgroundColor = 'lightcoral';
            newValues.act = true;
            setHasErrors(newValues);
        }

        console.log(hasErrors)
        if (!Object.values(hasErrors).includes(true))
            calcBMR();
    }

    function calcBMR() {
        let bmr = 0;
        const al =  activityL == 's' ? 1.2 : 
                    activityL == 'la' ? 1.375 : 
                    activityL == 'ma' ? 1.55 : 
                    activityL == 'aa' ? 1.725 : 1.9;

        if (uGender === 'm')
            bmr = al * (66 + (13.7 * weight) + (5*height) - (6.8*age));
        else
            bmr = al * (655 + (9.6 * weight) + (1.8*height) - (4.7*age));

        document.getElementById("result-container").firstChild.innerText = Math.round(bmr) + " cal/dia"
    }

    return (  
        <div id="tmb-container">
            <div id="tmb-title">
                <h3>Taxa Metabólica Basal</h3>
            </div>
            <div id="tmb">
                <div id="user-info">
                    <SelectionInput id="gender" onChange={setGender} size="60%" title="Gênero" values={gender}/>
                    <TMBInput onChange={setWeight} id="weight" size="30%" placeholder="Ex: 60" name="Peso (kg)"/>
                    <TMBInput onChange={setAge} id="age" size="60%" placeholder="Ex: 25" name="Idade"/>
                    <TMBInput onChange={setHeight} id="height" size="30%" placeholder="Ex: 180" name="Altura (cm)"/>
                    <SelectionInput id="actvt" onChange={setActivity} size="90%" title="Taxa de Atividade" values={activity}/>
                    <button onClick={checkValues}>Calcular</button>
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