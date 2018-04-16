import React from 'react';
import PropTypes from 'prop-types';

export default function AddOption(props) {
    const {
        name,
        onClick,
        index
    } = props;
    if ( /row|rows/i.test(name) ) {
        return (
            <p style={{margin: 0}} onClick={onClick} data-name="rows">
                <label className="row">
                    <span className="left grey-text text-darken-3" 
                        style={{fontSize: 14,margin: 0,paddingRight: 5}}>{index + 1}.</span>
                    <span className="col s5">
                        <input style={{fontSize: 14,height: 18}} disabled 
                            placeholder="Add row" type="text" 
                            className="grey-text text-darken-3"
                            readOnly
                        />
                    </span>
                </label>
            </p>
        );
    } else if ( /column|columns/i.test(name) ) {
        return (
            <p style={{margin: 0}} onClick={onClick} data-name="columns">
                <label className="row">
                    <input className="with-gap" name="group1" type="radio" checked={true} readOnly />
                    <span className="col s6">
                        <input style={{fontSize: 14,height: 18}} disabled 
                            placeholder="Add column" type="text" 
                            className="validate grey-text text-darken-3"
                            readOnly
                        />
                    </span>
                </label>
            </p>
        );
    } 
}

AddOption.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}