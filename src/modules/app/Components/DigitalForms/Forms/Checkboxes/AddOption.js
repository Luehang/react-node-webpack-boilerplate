import React from 'react';
import PropTypes from 'prop-types';

export default function AddOption(props) {
    const {
        addMoreOption
    } = props;
    return (
        <p style={{margin: 0}} onClick={addMoreOption}>
            <label className="row">
                <input type="checkbox" className="filled-in" checked={true} readOnly />
                <span className="col s5"><input style={{fontSize: 15,height: 25}} disabled placeholder="Add option" type="text" className="grey-text text-darken-3"/></span>
            </label>
        </p>
    );
}

AddOption.propTypes = {
    addMoreOption: PropTypes.func.isRequired
}