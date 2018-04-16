import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import Description from './../Description';

export default function Checkboxes(props) {
    const {  
        mainIndex,
        question,
        description,
        required,
        options,
        handleInputChange,
        showRequired
    } = props;
    const red = required ? <span className="red-text text-accent-4">*</span> : "";
    const redBackground = showRequired ? "red lighten-5" : "";
    const rows = options.map(function(option, i) {
        return (
            <Option
                key={i}
                index={i}
                mainIndex={mainIndex}
                option={option.text}
                value={option.value}
                handleInputChange={handleInputChange}
            />
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
            <div className="row" style={{padding: '0 20px'}}>
                <div className="input-field col s12 bottom-form"> 
                    {rows}
                    {
                        showRequired ?
                            <p className="red-text" style={{fontSize: 16,fontWeight: 400,margin: 0}}>This is a required question</p> :
                            ""
                    }
                </div>
            </div>
        </div>
    );
}

Checkboxes.propTypes = {
    mainIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    desription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    required: PropTypes.bool,
    options: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    showRequired: PropTypes.bool.isRequired
}