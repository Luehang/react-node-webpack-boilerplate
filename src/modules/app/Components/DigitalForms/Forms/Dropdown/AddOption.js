import React from 'react';
import PropTypes from 'prop-types';

export default function AddOption(props) {
    const {
        addMoreOption
    } = props;
    return (
        <p style={{margin: 0}} onClick={addMoreOption}>
            <label className="row">
                <i className="material-icons left" style={{margin: 0}}>add_box</i>
                <span className="col s5">
                    <input style={{fontSize: 15,height: 25}}
                        className="grey-text text-darken-3"
                        disabled placeholder="Add option" 
                        type="text" 
                    />
                </span>
            </label>
        </p>
    );
}

AddOption.propTypes = {
    addMoreOption: PropTypes.func.isRequired
}