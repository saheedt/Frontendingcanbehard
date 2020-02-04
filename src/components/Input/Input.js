import React, {useState} from 'react';

const Input = ({getValue, placeholder, label, type}) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value);
        getValue(event.target.value);
    };

    const renderInput = (label) => {
        return (type && type.toLowerCase() === "submit") ?
            <input
                title={label}
                id={label}
                className="button"
                value={placeholder}
                type={type}
            />
        :
            <input
                title={label}
                id={label}
                className="input"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
    };

    return (
        <>
        {renderInput(label)}
        {/* <label className="label" htmlFor={label}>{label}</label> */}
        </>
    );
};

export default Input;
