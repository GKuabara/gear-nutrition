import '../css/payment.css'
import { useState } from 'react';
import Select from 'react-select'

const PaymentChangeAddress = (props) => {
    let infos = props.infos;

    let options = [];
    infos.forEach(info => {
        const dict = {
            value: info.name,
            label: info.name
        }
        options.push(dict);
    });

    return (
        <div id='payment-change-address'>
            <p>Alterar endereço de entrega</p>
            <Select id="select-address"
                onChange={props.select}
                options={options}
                placeholder='Escolha o endereço'
            />
        </div>
    )
}

export default PaymentChangeAddress;