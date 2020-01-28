import React, {useState} from 'react';

const Input = ({getValue, placeholder}) => {
    const [value, setValue] = useState({value: ''})

    return (
        <input
            className="input"
            value={value.value}
            placeholder={placeholder}
            onChange={(event) => {
                setValue({value: event.target.value});
                getValue(event.target.value);
            }}
        />
    );
};

export default Input;
