import React from 'react';
import PropTypes from 'prop-types';

export default function Description(props) {
    const {  
        description
    } = props;
    return (
        <div style={{textAlign: 'left'}}>
            <div className="row top-form">
                <div className="input-field col s12" style={{padding: '0 20px', marginTop: 0}}>
                    <span className="grey-text text-darken-2">{description}</span>
                </div>
            </div>
        </div>
    );
}

Description.propTypes = {
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}