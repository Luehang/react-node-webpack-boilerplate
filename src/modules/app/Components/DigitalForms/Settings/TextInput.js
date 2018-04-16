import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput(props) {
    const {
        label,
        placeholder,
        name,
        onChange,
        value,
        styles
    } = props;
    return (
        <div className="form-element form-input" style={styles}>
            <input id="text-input" 
                className="form-element-field" 
                placeholder={placeholder}
                type="input"
                name={name}
                onChange={onChange}
                value={value}
            />
            <div className="form-element-bar"></div>
            <label className="form-element-label" htmlFor="text-input">{label}</label>
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    styles: PropTypes.object
}