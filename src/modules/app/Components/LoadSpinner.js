import React from 'react';
import PropTypes from 'prop-types';

export default function LoadSpinner(props) {
    const {
        styles
    } = props;
    return (
        <div className="preloader-wrapper big active" style={styles}>
            <div className="spinner-layer spinner-green-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div>
                <div className="gap-patch">
                    <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
}

LoadSpinner.propTypes = {
    styles: PropTypes.object
}