import './css/selectionInput.css';
import Select from 'react-select';

const SelectionInput = ({size, values, title}) => {
    const selectTheme = (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: 'white',
            primary: '#0B3075',
        },
    });

    return ( 
        <div style={{width: size}} className="form-input">
            <span>{title}: </span>
            <Select theme={selectTheme} options={values} />
        </div>
    );
}
 
export default SelectionInput;