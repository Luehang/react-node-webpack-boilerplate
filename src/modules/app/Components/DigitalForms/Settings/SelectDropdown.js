import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectDropdown extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            $(`#select-${this._id}`).formSelect();
        } catch(err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        var select = document.querySelector(`#select-${this._id}`);
        select.remove();
    }
    render() {
        const { 
            current,
            options,
            onChange,
            styles,
            label,
            name
        } = this.props;
        const rows = options.split(";").map((option, i) => {
            if (current.toLowerCase() == option.toLowerCase()) {
                return (
                    <option key={i} value={option}>{option}</option>
                );
            }
            return (
                <option key={i} value={option}>{option}</option>
            );
        });
        return (
            <div className="input-field" style={styles}>
                <select id={`select-${this._id}`} onChange={onChange} name={name} value={current}>
                    {rows}
                </select>
                <label>{label}</label>
            </div>
        );
    }
}

SelectDropdown.propTypes = {
    current: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    options: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}