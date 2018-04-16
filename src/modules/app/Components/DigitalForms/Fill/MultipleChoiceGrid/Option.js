import React from 'react';
import PropTypes from 'prop-types';

export default function Option(props) {
    const {
        widthColumns,
        responseIndex,
        subresponseIndex,
        mainIndex,
        value,
        handleInputChange
    } = props;
    return (
        <p className="col center-align" style={{width: `${widthColumns}%`,margin: 0}}>
            <label>
                <input 
                    className="with-gap" 
                    type="radio" 
                    data-responseindex={responseIndex}
                    data-subresponseindex={subresponseIndex}
                    data-mainindex={mainIndex}
                    checked={value}
                    onChange={handleInputChange} 
                /><span></span>
            </label>
        </p>
    );
}

Option.propTypes = {
    widthColumns: PropTypes.number,
    responseIndex: PropTypes.number.isRequired,
    subresponseIndex: PropTypes.number.isRequired,
    mainIndex: PropTypes.number.isRequired,
    value: PropTypes.bool.isRequired,
    handleInputChange: PropTypes.func.isRequired
}