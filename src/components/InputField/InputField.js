import React from 'react';

const InputField = (props) => {

    const onChange = (event) => {
        props.onChange(props.name, event.target.value);
    }

    return (
        <div>
            <label>
                <span>{props.label}</span>
                <input value={props.value} onChange={onChange}/>
            </label>
        </div>
    );
}

export default InputField;