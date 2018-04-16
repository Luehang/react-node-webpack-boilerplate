import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormDropdown from './../Settings/FormDropdown';

export default class TopMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            onFormTypeClick,
            currentFormType,
            formTypeStyles
        } = this.props;
        return (
            <div className="row">
                <FormDropdown
                    onClick={onFormTypeClick}
                    current={currentFormType}
                    style={formTypeStyles}
                />
            </div>
        );
    }
}

TopMenu.propTypes = {
    onFormTypeClick: PropTypes.func.isRequired,
    currentFormType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    formTypeStyles: PropTypes.object.isRequired
}