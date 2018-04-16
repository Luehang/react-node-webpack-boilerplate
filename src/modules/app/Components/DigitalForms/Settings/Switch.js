import React from 'react';
import PropTypes from 'prop-types';

export default function Switch(props) {
    const {
        styles,
        checked,
        onChange,
        name
    } = props;
    return (
        <div className="switch" style={styles}>
            <label>
                <input type="checkbox" onChange={onChange} name={name} type='checkbox' checked={checked}/>
                <span className="lever"></span>
            </label>
        </div>
    );
}

Switch.propTypes = {
    styles: PropTypes.object,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};