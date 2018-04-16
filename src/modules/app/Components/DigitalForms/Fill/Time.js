import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default class Time extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            var _dropdown = document.querySelector(`.dropdown-trigger-${this._id}`);
            var _dropdownTriggerInstance = M.Dropdown.init(_dropdown);
        } catch (err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        var _dropdown = document.querySelector(`.dropdown-trigger-${this._id}`);
        _dropdown.remove();
    }
    render() {
        const {  
            mainIndex,
            question,
            description,
            required,
            handleInputChange,
            showRequired
        } = this.props;
        const red = required ? <span className="red-text text-accent-4">*</span> : "";
        const redBackground = showRequired ? "red lighten-5" : "";
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
                        /> : ""
                }
                <div className="row" style={{padding: '0 20px',margin: 0}}>
                    <div className="input-field col s12 bottom-form">
                        <input id={`date-${this._id}`}
                            className="grey-text text-darken-4"
                            style={{width: '20px', height: '25px'}}
                            type="text" 
                            maxLength={2}
                            value={question.value.hours}
                            data-name="hours"
                            data-mainindex={mainIndex}
                            onChange={handleInputChange}
                        />
                        <span>:</span>
                        <input id={`date-${this._id}`}
                            className="grey-text text-darken-4"
                            style={{width: '20px', height: '25px'}}
                            type="text" 
                            maxLength={2}
                            value={question.value.minutes}
                            data-name="minutes"
                            data-mainindex={mainIndex}
                            onChange={handleInputChange}
                        />
                        <a className={`dropdown-trigger-${this._id} btn-flat`} 
                            href='#' 
                            data-target={`dropdown-${this._id}`}>{question.value.type}<i className="material-icons">arrow_drop_down</i>
                        </a>
                        <ul id={`dropdown-${this._id}`} className='dropdown-content'>
                            <li>
                                <a href="#!" 
                                    data-name="type"
                                    data-mainindex={mainIndex}
                                    onClick={handleInputChange}
                                    value="AM">AM</a>
                            </li>
                            <li>
                                <a href="#!" 
                                    //style={{lineHeight: 23}}
                                    data-name="type"
                                    data-mainindex={mainIndex}
                                    onClick={handleInputChange}
                                    value="PM">PM</a>
                            </li>
                        </ul>
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

Time.propTypes = {
    mainIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    desription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    required: PropTypes.bool,
    handleInputChange: PropTypes.func.isRequired
}