import React from 'react';
import PropTypes from 'prop-types';

export default function Option(props) {
    const {
        index,
        mainIndex,
        option,
        value,
        handleInputChange
    } = props;
    return (
        <p style={{margin: 0}}>
            <label className="row">
                <input className="with-gap"  
                    type="checkbox" 
                    checked={value}
                    data-index={index}
                    data-mainindex={mainIndex}
                    onClick={handleInputChange}
                />
                <span className="col s10">
                    <span className="grey-text text-darken-3">{option}</span>
                </span>
            </label>
        </p>
    );
}

Option.propTypes = {
    index: PropTypes.number.isRequired,
    mainIndex: PropTypes.number.isRequired,
    option: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    handleInputChange: PropTypes.func.isRequired
}