import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Description from './../Description';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            var _selectInstance = M.FormSelect.init(document.querySelector(`#select-${this._id}`));
        } catch (err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        var _select = document.querySelector(`#select-${this._id}`);
        _select.remove();
    }
    render() {
        const {  
            mainIndex,
            question,
            description,
            required,
            options,
            handleInputChange,
            showRequired
        } = this.props;
        const red = required ? <span className="red-text text-accent-4">*</span> : "";
        const redBackground = showRequired ? "red lighten-5" : "";
        const rows = options.map(function(option, i) {
            return (
                <option
                    key={option.id}
                    data-index={i}
                    data-mainindex={mainIndex}
                    value={option.text}
                >{option.text}</option>
            );
        });
        return (
            <div className={redBackground} style={{textAlign: 'left'}}>
                <div className="row top-form" style={{marginBottom: -40}}>
                    <div className="input-field col s12">
                        <h5 className="grey-text text-darken-4">{question.text}{red}</h5>
                    </div>
                </div>
                {
                    description ? 
                        <Description
                            description={description}
                        /> : 
                        <div style={{padding: 30}}></div>
                }
                <div className="row" style={{padding: '0 20px',margin: 0}}>
                    <div className="input-field col bottom-form grey-text text-darken-3"> 
                        <select id={`select-${this._id}`}
                            data-mainindex={mainIndex}
                            onChange={handleInputChange}>
                                <option disabled selected>Choose</option>
                                {rows}
                        </select>
                    </div>
                </div>
                {
                    showRequired ?
                    <p className="red-text" style={{padding: '0 0 20px 20px',fontSize: 16,fontWeight: 400,margin: 0}}>This is a required question</p> :
                        ""
                }
            </div>
        );
    }
}

Dropdown.propTypes = {
    mainIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    desription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    required: PropTypes.bool,
    options: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired
}