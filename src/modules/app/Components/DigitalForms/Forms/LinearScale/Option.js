import React from 'react';
import PropTypes from 'prop-types';

export default function Option(props) {
    const {
        widthColumns,
        index,
        mainIndex
    } = props;
    return (
        <p className="col" style={{width: `${widthColumns}%`}} data-index={mainIndex}>
            <span style={{marginLeft: 10}} data-index={mainIndex}>{index}</span>
            <label>
                <input disabled className="with-gap" type="radio" name="" /><span data-index={mainIndex}></span>
            </label>
        </p>
    );
}

Option.propTypes = {
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    index: PropTypes.number,
    widthColumns: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}