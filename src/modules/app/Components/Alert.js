import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
    const {
        type,
        messages,
        onClick
    } = props;
    const rows = messages.map((message, i) => {
        if (type.toLowerCase() == 'error') {
            return (
                <p key={i} style={{color: 'red'}}>* {message}</p>
            );
        }
        if (type.toLowerCase() == 'success') {
            return (
                <p key={i} style={{color: 'green'}}>{message}</p>
            );
        }
    });
    return (
        <div className="annotation-content">
            <div className="annotation">
                <a className="close" onClick={onClick}><img src="/img/close.svg"/></a>
                <div id="alert">
                    {rows}
                </div>
                <p className="support-text"><a href="#">Contact Customer Service</a></p>
            </div>
        </div>
    );
}

Alert.propTypes = {
    type: PropTypes.string.isRequired,
    messages: PropTypes.oneOfType([
        PropTypes.array
    ]).isRequired,
    onClick: PropTypes.func.isRequired
}