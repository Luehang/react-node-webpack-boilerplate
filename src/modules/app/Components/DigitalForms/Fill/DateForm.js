import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default class DateForm extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            const { handleDateChange } = this.props;
            var _date = document.querySelector(`#date-${this._id}`);
            var _dateInstance = M.Datepicker.init(_date, {
                format: 'yyyy-mm-dd',
                showClearBtn: true
            });
            _date.addEventListener('change', function() {
                const mainIndex = _date.getAttribute('data-mainindex');
                const value = _date.value;
                handleDateChange(mainIndex, value);
            });
        } catch (err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        var _date = document.querySelector(`#date-${this._id}`);
        _date.remove();
    }
    render() {
        const {  
            mainIndex,
            question,
            description,
            required,
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
                    <div className="input-field col m6 s8 bottom-form">
                        <input id={`date-${this._id}`}
                            className="datepicker"
                            type="text" 
                            placeholder="Date"
                            value={question.value}
                            data-mainindex={mainIndex}
                        />
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

DateForm.propTypes = {
    mainIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    desription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    required: PropTypes.bool,
    handleDateChange: PropTypes.func.isRequired
}