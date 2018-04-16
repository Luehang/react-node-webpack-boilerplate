import React from 'react';
import PropTypes from 'prop-types';

export default function Option(props) {
    const {
        widthColumns,
        index,
        mainIndex,
        option,
        value,
        handleInputChange
    } = props;
    return (
        <p className="col" style={{width: `${widthColumns}%`}}>
            <span style={{marginLeft: 10}}>{option}</span>
            <label>
                <input 
                    className="with-gap" 
                    type="radio" 
                    checked={value}
                    data-index={index}
                    data-mainindex={mainIndex}
                    onClick={handleInputChange} 
                /><span></span>
            </label>
        </p>
    );
}

Option.propTypes = {
    widthColumns: PropTypes.number,
    index: PropTypes.number.isRequired,
    mainIndex: PropTypes.number.isRequired,
    option: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    value: PropTypes.bool.isRequired,
    handleInputChange: PropTypes.func.isRequired
}